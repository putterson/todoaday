(ns todoaday.routes.todo
  (:require
    [todoaday.layout :as layout]
    [todoaday.db.crux :as db]
    [clojure.java.io :as io]
    [todoaday.middleware :as middleware]
    [hiccup.form :as f]
    [hiccup.core :as hiccup]
    [ring.util.http-response :as response]
    [ring.util.response :refer [redirect]]
    [compojure.core :refer [defroutes routes wrap-routes GET POST]]
    [clojure.tools.logging :as log]))

(defn add-todo-form []
  (hiccup/html (f/form-to [:post "/add"]
                          (f/text-field {:placeholder "Description" :autofocus true} "description")
                          (f/submit-button "add"))))

(defn add-page [request]
  (log/info "Identity: " (request :identity))
  (layout/render request "add.html"
                 {:form (add-todo-form)
                  :todos (db/todos (get-in request [:identity :sub]))}))

(defn handle-add [{:keys [identity headers form-params]}]
  (log/info "Identity: " identity)
  (db/add-todo {:description (form-params "description") :creator-user-id (identity :sub)})
  (redirect (headers "referer") :see-other))

(defroutes todo-routes
           (POST "/add" [:as req] handle-add)
           (GET "/add" [:as req] add-page))
