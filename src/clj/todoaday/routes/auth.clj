(ns todoaday.routes.auth
  (:require
    [todoaday.layout :as layout]
    [todoaday.db.core :as db]
    [clojure.java.io :as io]
    [todoaday.middleware :as middleware]
    ;  [ring.util.http-response :as response]
    [clj-http.client :as client]
    [ring.util.response :refer [redirect]]
    [todoaday.config :refer [env]]
    [mount.core :refer [defstate]]
    [ring.util.response :as response]
    [clojure.tools.logging :as log]
    [cheshire.core :as json]
    [buddy.core.codecs.base64 :as b64]
    [buddy.core.keys :as buddy-keys]
    [buddy.sign.jws :as jws]
    [buddy.sign.jwt :as jwt]
    [buddy.auth :as auth]
    [compojure.core :refer [defroutes routes wrap-routes GET]]
    [compojure.route :as route])
  (:import [java.net URLEncoder]))

; (defroutes login-routes
;     ; (GET "/login" [next] (show-login-page next))
;     ; (GET "/logout" [:as req] (handle-logout req))
;     (GET "/callback" [code state next :as req] (handle-login code state next req)))

; (def port (Integer/parseInt (env :port "3000")))
; (def domain (env :auth0-domain))
; (def client-id (env :auth0-client-id))
; (def client-secret (env :auth0-client-secret))
; (def callback-uri (env :auth0-callback-url (format "http://localhost:%d/callback" port)))
; (def return-to-uri (env :auth-return-to-uri (format "http://localhost:%d/login" port)))


; (defn show-login-page [next]
;   (let [port (env :port)
;         domain (env :auth0-domain)
;         client-id (env :auth0-client-id)
;         client-secret (env :auth0-client-secret)
;         callback-uri (env :auth0-callback-url (format "http://localhost:%d/callback" port))]
;     (redirect domain)))

; (defn login-page [{:keys [next] :as request}]
;   ; (layout/render request "about.html"))
;   (show-login-page next))

(defstate config :start {:port (env :port)
                         :domain (env :auth0-domain)
                         :client-id (env :auth0-client-id)
                         :client-secret (env :auth0-client-secret)
                         :callback-uri (env :auth0-callback-url (format "http://localhost:%d/callback" (env :port)))
                         :callback-path "/callback"
                         :success-redirect "/"
                         :error-redirect "/login"
                         :scope "openid user_id name nickname email email_verified picture"})

(defn user-authenticated [email auth0-user-id]
  (log/info "User" email "with id" auth0-user-id "authenticated")

  ;; do whatever is required with this authenticated user, eg store in db and return an internal id
  12345
  )

(defn show-login-page [next]
  (let [redirect-uri (URLEncoder/encode (if next
                                          (str  (:callback-uri config) "?next=" next)
                                          (:callback-uri config))
                                        "UTF-8")
        google-uri (str "https://" (:domain config) "/authorize"
                        "?response_type=code"
                        "&client_id=" (:client-id config)
                        "&connection=google-oauth2"
                        "&redirect_uri=" (:callback-uri config)
                        "&scope=" (:scope config))]
    (layout/render-login {:google-uri google-uri})))

(defn handle-login [code state next {:keys [session]}]
  ;; Exercise for the reader: check 'state' against some true value to prevent CSRF
  (log/debug "Checking authorization code" code)
  (let [url (str "https://" (:domain config) "/oauth/token")
        resp (client/post url
                          {:form-params {:client_id     (:client-id config)
                                         :client_secret (:client-secret config)
                                         :code          code
                                         :redirect_uri  (:callback-uri config)
                                         :grant_type    "authorization_code"}})
        id-token (-> resp
                     :body
                     (json/parse-string true)
                     :id_token)

        _ (log/debug "Authorization code" code "is good, received id_token with header" (jws/decode-header id-token))
        payload (some-> id-token
                        ;(jws/unsign (:client-secret config))
                        ;b64/decode

                        ;(jws/unsign (.getEncoded cert))
                        (jws/unsign (buddy-keys/str->public-key (slurp "/home/patcgoe/Downloads/still-cherry-6903.pem"))  {:alg :rs256})
                        String.
                        (json/parse-string true))
        profile (select-keys payload [:sub :email :email_verified :name])
        {:keys [email auth0-user-id] :as profile} (clojure.set/rename-keys profile {:sub        :auth0-user-id
                                                                                    :email_verified :email-verified})
        next-uri (or next "/")]
    (if payload
      (do
        (log/debug "JWT token is good, payload is" payload)
        (if email
          (if-let [internal-user-id (user-authenticated email auth0-user-id)]
            (do
              (log/infof "User %s with email %s is authenticated as %s, redirecting to %s" auth0-user-id email internal-user-id next-uri)
              (-> (response/set-cookie (response/redirect next-uri) "jwt" id-token)
                  (assoc :session (assoc session :identity (assoc profile :user-id internal-user-id)))))
            (auth/throw-unauthorized {:message (str "Failed to authenticate user " auth0-user-id " with email " email)
                                      :profile profile}))
          (auth/throw-unauthorized {:message "No email in payload"
                                    :payload payload})))
      (auth/throw-unauthorized {:message  "JWT payload failed to parse"
                                :id-token id-token}))))

(defn handle-logout [{:keys [session]}]
  (if-let [user (:identity session)]
    (log/info "Logging out user" user)
    (log/info "No user in session, logging out regardless"))
  (-> (response/redirect (format "https://%s/v2/logout?returnTo=%s&client_id=%s"
                                 (:domain config)
                                 (URLEncoder/encode (:success-redirect config) "UTF-8")
                                 (URLEncoder/encode (:client-id config) "UTF-8")))
      (assoc :session {})))

(defn show-home-page [{:keys [session]}]
  (layout/render-home {:profile (:identity session)}))

(defroutes login-routes
           (GET "/login" [next] (show-login-page next))
           (GET "/logout" [:as req] (handle-logout req))
           (GET "/callback" [code state next :as req] (handle-login code state next req)))


(def auth-routes
  (routes (-> #'login-routes)
          ;(route/not-found
          ;  (:body (response/not-found "Sorry, page not found")))
          ))
;(defn auth-routes []
;    [""
;     {:middleware [middleware/wrap-csrf
;                   middleware/wrap-formats]}
;     ["/login" {:get login}]
;     ["/callback" {:get callback-handler}]]))

