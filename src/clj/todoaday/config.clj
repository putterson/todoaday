(ns todoaday.config
  (:require
    [cprop.core :refer [load-config]]
    [cprop.source :as source]
    [mount.core :refer [args defstate]]
    [clojure.tools.logging :as log]))

(defstate env
          :start
          (load-config
            :merge
            [(args)
             (source/from-system-props)
             (try (source/from-file ".env.edn")
                  (catch Throwable t
                    (log/warn t "couldn't find .env.edn")
                    {}))
             (source/from-env)]))
