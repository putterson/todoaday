(ns todoaday.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [todoaday.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[todoaday started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[todoaday has shut down successfully]=-"))
   :middleware wrap-dev})
