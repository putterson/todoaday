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
   [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
   [buddy.auth.accessrules :refer [restrict]]
   [buddy.auth :refer [authenticated?]]
   [buddy.auth.backends.session :refer [session-backend]])
  (:import))

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

(defn wrap-restricted [handler]
  (restrict handler {:handler authenticated?
                     :on-error on-error}))

; (defn on-error [request response]
;   (error-page
;    {:status 403
;     :title (str "Access to " (:uri request) " is not authorized")}))

; (defn on-restricted [request _]
; (let [current-url (:uri request)
;       redirect-uri (str "/login?next=" current-url)]
;   (log/info "Not authenticated. Redirecting to" redirect-uri)
;   (response/redirect redirect-uri)))

; (defn wrap-restricted [handler]
;   (restrict handler {:handler authenticated?
;                      :on-error on-error}))

; (defn wrap-auth [handler]
;   (let [backend (session-backend)]
;     (-> handler
;         (wrap-authentication backend)
;         (wrap-authorization backend))))

(defn wrap-base [handler]
  (-> ((:middleware defaults) handler)
      (wrap-defaults
       (-> site-defaults
           (assoc-in [:security :anti-forgery] false)
           (assoc-in  [:session :store] (ttl-memory-store (* 60 30)))))
      (wrap-authentication (session-backend))
      wrap-internal-error))
