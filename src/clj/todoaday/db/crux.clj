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


(defn todos [user-id]
  (crux.api/sync *crux-conn*)
  (map #(zipmap [:crux.db/id :todos/id :todos/description] %)
               (crux/q (crux/db *crux-conn*)
                       {:find     '[?e id desc time]
                         :where    '[[?e :todos/description desc]
                                    [?e :crux.db/id id]
                                    [?e :todos/creator-user-id creator-user-id]
                                    [?e :todos/creation-time time]]
                         :args [{'creator-user-id user-id}]
                         :order-by '[[time :desc]]})))

(defn add-todo [{:keys [description creator-user-id]}]
  (let [result (crux/submit-tx
                 *crux-conn*
                 [[:crux.tx/cas
                   nil
                   {:crux.db/id        (UUID/randomUUID)
                    :todos/creator-user-id creator-user-id
                    :todos/creation-time (java.time.OffsetDateTime/now)
                    :todos/description description}]]
                 )]
    result))