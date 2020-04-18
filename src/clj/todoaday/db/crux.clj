(ns todoaday.db.crux
  (:require
    [todoaday.config :refer [env]]
    [mount.core :refer [defstate]]
    [crux.api :as crux]
    [clojure.java.io :as io])
  (:import (java.util UUID)))

(defn start-jdbc-node ^crux.api.ICruxAPI [env]
  (let [{database-type :database-type
         database-dir :database-dir
         database-name :database-name
         database-host :database-host
         database-user :database-user
         database-password :database-password} env]
    (crux/start-node {:crux.node/topology '[crux.jdbc/topology]
                       :crux.jdbc/dbtype   database-type
                       :crux.jdbc/dbname   database-name
                       :crux.jdbc/host     database-host
                       :crux.jdbc/user     database-user
                       :crux.jdbc/password database-password})
    ))

(defn start-standalone-node ^crux.api.ICruxAPI [env]
  (let [{storage-dir :database-dir} env]
    (crux/start-node {:crux.node/topology '[crux.standalone/topology]
                      :crux.kv/db-dir     (str (io/file storage-dir "db"))})))

(defstate ^:dynamic *crux-conn*
          :start (start-standalone-node env)
          :stop (.close *crux-conn*))


(defn todos []
  (map #(zipmap [:todos/id :todos/description] %)
               (crux/q (crux/db *crux-conn*)
                       '{:find  [?e desc]
                         :where [[?e :todos/description desc]]})))

(defn add-todo [description]
  (let [result (crux/submit-tx
                 *crux-conn*
                 [[:crux.tx/cas
                   nil
                   {:crux.db/id        (UUID/randomUUID)
                    :todos/description description}]]
                 )]
    result))