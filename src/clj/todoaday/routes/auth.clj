(ns todoaday.routes.auth
  (:require
   [todoaday.layout :as layout]
   [todoaday.db.core :as db]
   [clojure.java.io :as io]
   [todoaday.middleware :as middleware]
   [ring.util.http-response :as response]
   [todoaday.config :refer [env]])
  (:import (java.net URLEncoder)))

; (defroutes login-routes
;     (GET "/login" [next] (show-login-page next))
;     (GET "/logout" [:as req] (handle-logout req))
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
;     (let [redirect-uri (URLEncoder/encode (if next
;                                             (str callback-uri "?next=" next)
;                                             callback-uri)
;                                           "UTF-8")
;           google-uri (str "https://" domain "/authorize"
;                           "?response_type=code"
;                           "&client_id=" client-id
;                           "&connection=google-oauth2"
;                         ; "&redirect_uri=" redirect-uri
;                           "&scope=openid user_id email email_verified name")]
;       (layout/render-login {:google-uri google-uri}))))

(defn login-page [request]
  (layout/render request "about.html"))
;   (show-login-page nil))

(defn auth-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/login" {:get login-page}]])

