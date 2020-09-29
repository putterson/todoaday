(ns todoaday.mutations
  (:require [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]))

(defmutation delete-todo
  "Mutation: Delete the todo with `description` from the todo list"
  [{:keys [description]}]
  (action [{:keys [state]}]
          (let [path [:todolist :list/todos]
                old-list (get-in @state path)
                new-list (vec (filter #(not= (:todo/description %) description) old-list))]
            (swap! state assoc-in path new-list))))

