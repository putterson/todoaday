(ns todoaday.db.crux
  (:require
    [todoaday.config :refer [env]]
    [mount.core :refer [defstate]]
    [crux.api :as crux]
    [clojure.java.io :as io]
    [clojure.string :as string])
  (:import (java.util UUID)))

(defn make-jdbc-url
  [maybe-connection-url] (if-some [connection-url maybe-connection-url]
                           (let [[proto user password host port instance] (string/split connection-url #"://|:|/|@")]
                             (str "jdbc:" proto "://" host ":" port "/" instance "?user=" user "&password=" password))
                           nil))

(defn start-crux-node ^crux.api.ICruxAPI [env]
  (let [{database-url    :jdbc-database-url
         database-config :database} env]
    (update database-config :crux.jdbc/jdbcUrl #(or (make-jdbc-url %) database-url))
    (crux/start-node database-config)))

(defstate ^:dynamic *crux-conn*
          :start (start-crux-node env)
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
                :args     [{'creator-user-id user-id}]
                :order-by '[[time :desc]]})))

(defn add-todo [{:keys [description creator-user-id]}]
  (let [result (crux/submit-tx
                 *crux-conn*
                 [[:crux.tx/cas
                   nil
                   {:crux.db/id            (UUID/randomUUID)
                    :todos/creator-user-id creator-user-id
                    :todos/creation-time   (java.time.OffsetDateTime/now)
                    :todos/description     description}]]
                 )]
    result))