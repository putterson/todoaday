(ns todoaday.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[todoaday started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[todoaday has shut down successfully]=-"))
   :middleware identity})
