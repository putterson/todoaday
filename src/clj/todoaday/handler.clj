(ns todoaday.handler
  (:require
    [todoaday.middleware :as middleware]
    [todoaday.layout :refer [error-page]]
    [todoaday.routes.main :refer [main-handler]]
    [todoaday.routes.home :refer [home-routes]]
    [todoaday.routes.auth :refer [auth-routes]]
    [todoaday.routes.todo :refer [todo-routes]]
    [reitit.ring :as ring]
    [ring.middleware.content-type :refer [wrap-content-type]]
    [ring.middleware.webjars :refer [wrap-webjars]]
    [todoaday.env :refer [defaults]]
    [compojure.core :refer [defroutes routes wrap-routes GET]]
    [mount.core :as mount]))

(mount/defstate init-app
  :start ((or (:init defaults) (fn [])))
  :stop  ((or (:stop defaults) (fn []))))

(mount/defstate app-routes
  :start
  (routes
    main-handler
    auth-routes
    todo-routes
    (ring/ring-handler
      (ring/router
        [(home-routes)])
      (ring/routes
        (ring/create-resource-handler
          {:path "/"})
        (wrap-content-type
          (wrap-webjars (constantly nil)))))
    ))

;(ring/create-default-handler
;  {:not-found
;   (constantly (error-page {:status 404, :title "404 - Page not found"}))
;   :method-not-allowed
;   (constantly (error-page {:status 405, :title "405 - Not allowed"}))
;   :not-acceptable
;   (constantly (error-page {:status 406, :title "406 - Not acceptable"}))})

;(mount/defstate auth-only-routes
;  :start
;  auth-routes)
(defn app []
  (middleware/wrap-base #'app-routes))

