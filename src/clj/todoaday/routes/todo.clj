(ns todoaday.routes.todo
  (:require
    [todoaday.layout :as layout]
    [todoaday.db.crux :as db]
    [clojure.java.io :as io]
    [todoaday.middleware :as middleware]
    [hiccup.form :as f]
    [hiccup.core :as hiccup]
    ; [ring.util.http-response :as response]
    [compojure.core :refer [defroutes routes wrap-routes GET POST]]
    ))

(defn handle-add [{:keys [description]}]
  (db/add-todo description))

(defn add-todo-form []
  (hiccup/html (f/form-to [:post "/add"]
                          (f/text-field {:placeholder "Description"} "description")
                          (f/submit-button "add"))))

(defn add-page [request]
  (db/add-todo "test todo")
  (layout/render request "add.html" {:form (add-todo-form) :todos (db/todos)}))

(defroutes todo-routes
           (GET "/add" [:as req] add-page)
           (POST "/add" [:as req] handle-add))
