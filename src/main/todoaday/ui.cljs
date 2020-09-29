(ns todoaday.ui
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]
    [todoaday.pages.manage-todos :as manage-page :refer [TodoList]]
    [todoaday.mutations :as api]))

(defsc Root [this {:keys [todolist]}]
  {:query [{:todolist (comp/get-query TodoList)}]
   :initial-state (fn [{:keys [todolist] :as params}]
                    {:todolist (comp/get-initial-state TodoList)})}
  (dom/div (manage-page/ui-todolist todolist)))
