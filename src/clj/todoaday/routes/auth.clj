(ns todoaday.routes.auth
  (:require
   [todoaday.layout :as layout]
   [todoaday.db.core :as db]
   [clojure.java.io :as io]
   [todoaday.middleware :as middleware]
  ;  [ring.util.http-response :as response]
   [auth0-ring.handlers :as auth0-handlers]
   [ring.util.response :refer [redirect]]
   [todoaday.config :refer [env]]
   [mount.core :refer [defstate]])
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
                        :scope "dunno"})


  (def login

    (auth0-handlers/wrap-login-handler
     (fn [req]
       {:status 200
        :headers {"Content-Type" "text/html"}
        :body (str "<!DOCTYPE html>
                    <html>
                      <head>
                        <title>Login</title>
                      </head>
                      <body>
                        <script src='https://cdn.auth0.com/js/lock/10.9.1/lock.min.js'></script>
                        <script>var lock = new Auth0Lock(
                    '" (:client-id config) "',
                    '" (:domain config) "', {
                      auth: {
                        params: {
                          scope: '" (:scope config) "',
                          state: 'nonce=" (:nonce req) "&returnUrl=" (get-in req [:query-params "returnUrl"]) "'
                        },
                        responseType: 'code',
                        redirectUrl: window.location.origin + '" (:callback-path config) "'
                      }
                    });
                    
                    lock.show();</script>
                      </body>
                    </html>")})))

(defn auth-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/login" {:get login}]])

