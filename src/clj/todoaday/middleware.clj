(ns todoaday.middleware
  (:require
    [todoaday.env :refer [defaults]]
    [cheshire.generate :as cheshire]
    [cognitect.transit :as transit]
    [clojure.tools.logging :as log]
    [todoaday.layout :refer [error-page]]
    [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
    [todoaday.middleware.formats :as formats]
    [muuntaja.middleware :refer [wrap-format wrap-params]]
    [todoaday.config :refer [env]]
    [ring-ttl-session.core :refer [ttl-memory-store]]
    [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
    [ring.middleware.cookies :refer [wrap-cookies]]
    ;  [ring.middleware.params :refer [wrap-params]]
    [ring.util.http-response :as response]
    [ring.util.response :refer [redirect]]
    [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
    [buddy.auth.accessrules :refer [restrict]]
    [buddy.auth :refer [authenticated?]]
    [buddy.auth.backends.session :refer [session-backend]]
    [buddy.auth.backends :as auth-backends]
    [buddy.core.keys :as buddy-keys]
    [buddy.auth.http :as http]
    [buddy.auth.protocols :as proto]
    [buddy.sign.jws :as jws]
    [ring.middleware.cors :as cors]
    [mount.core :refer [defstate]])
  (:import))

(defstate config :start {:domain (env :auth0-domain)})

(defn wrap-internal-error [handler]
  (fn [req]
    (try
      (handler req)
      (catch Throwable t
        (log/error t (.getMessage t))
        (error-page {:status 500
                     :title "Something very bad has happened!"
                     :message "We've dispatched a team of highly trained gnomes to take care of the problem."})))))

(defn wrap-csrf [handler]
  (wrap-anti-forgery
   handler
   {:error-response
    (error-page
     {:status 403
      :title "Invalid anti-forgery token"})}))

(defn wrap-cors [handler]
  (cors/wrap-cors handler :access-control-allow-origin [(str "http://" (:domain config) "/")]
                          :access-control-allow-methods [:get :put :post :delete]))

(defn wrap-formats [handler]
  (let [wrapped (-> handler wrap-params (wrap-format formats/instance))]
    (fn [request]
      ;; disable wrap-formats for websockets
      ;; since they're not compatible with this middleware
      ((if (:websocket? request) handler wrapped) request))))

(defn on-error [request response]
  {:status  403
   :headers {"Content-Type" "text/plain"}
   :body    (str "Access to " (:uri request) " is not authorized")})

(defn on-restricted [request _]
  (let [current-url (:uri request)
        redirect-uri (str "/login?returnUrl=" current-url)]
    (log/info "Not authenticated. Redirecting to" redirect-uri)
    (redirect redirect-uri)))

(defn wrap-restricted [handler]
  (restrict handler {:handler authenticated?
                     :on-error on-restricted}))
(defn handle-unauthorized-default
  "A default response constructor for an unauthorized request."
  [request]
  (if (authenticated? request)
    {:status 403 :headers {} :body "Permission denied"}
    {:status 401 :headers {} :body "Unauthorized"}))

(defn parse-jws-cookie
  [request token-name]
  (log/spy
           (some-> (:cookies request)
                   (get "jwt")
                   (:value))))

(defn jws-cookie-backend
  [{:keys [secret authfn unauthorized-handler options token-name on-error]
    :or {authfn identity token-name "Token"}}]
  {:pre [(ifn? authfn)]}
  (reify
    proto/IAuthentication
    (-parse [_ request]
      (parse-jws-cookie request token-name))

    (-authenticate [_ request data]
      (try
        (authfn (jws/unsign data secret options))
        (catch clojure.lang.ExceptionInfo e
          (let [data (ex-data e)]
            (when (fn? on-error)
              (on-error request e))
            nil))))

    proto/IAuthorization
    (-handle-unauthorized [_ request metadata]
      (if unauthorized-handler
        (unauthorized-handler request metadata)
        (handle-unauthorized-default request)))))

 (defn wrap-auth [handler]
   (let [backend (jws-cookie-backend {:secret (buddy-keys/str->public-key (slurp "/home/patcgoe/Downloads/still-cherry-6903.pem")) :options {:alg :rs256}})]
     (-> handler
         (wrap-authentication backend)
         (wrap-authorization backend))))

(defn wrap-base [handler]
  (-> ((:middleware defaults) handler)
      (wrap-defaults
       (-> site-defaults
           (assoc-in [:security :anti-forgery] false)
           (assoc-in  [:session :store] (ttl-memory-store (* 60 30)))))
      wrap-auth
      ;wrap-cors
      wrap-cookies
      wrap-params
      wrap-internal-error))
