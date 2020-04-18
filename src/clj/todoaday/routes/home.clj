(ns todoaday.routes.home
  (:require
    [todoaday.layout :as layout]
    [todoaday.db.crux :as db]
    [clojure.java.io :as io]
    [todoaday.middleware :as middleware]
    [hiccup.form :as f]
    [hiccup.core :as hiccup]
    ; [ring.util.http-response :as response]
    ))

(defn home-page [request]
  (layout/render request "home.html" {:docs (-> "docs/docs.md" io/resource slurp)}))

(defn about-page [request]
  (layout/render request "about.html"))

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats
                 middleware/wrap-restricted
                 ]}
   ["/" {:get home-page}]
   ["/about" {:get about-page}]])

