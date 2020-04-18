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
    ))

(defn add-page [request]
  (layout/render request "add.html" {:form (add-todo-form) :todos (db/todos)}))

(defn handle-add [request]
  (db/add-todo ((request :form-params) "description"))
  (redirect ((request :headers) "referer") :see-other))

(defn add-todo-form []
  (hiccup/html (f/form-to [:post "/add"]
                          (f/text-field {:placeholder "Description"} "description")
                          (f/submit-button "add"))))


(defroutes todo-routes
           (POST "/add" [:as req] handle-add)
           (GET "/add" [:as req] add-page)
           )
