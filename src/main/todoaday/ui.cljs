(ns todoaday.ui
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]
    [todoaday.pages.manage-todos :as manage-page :refer [TodoList]]))

(defsc Root [this {:keys [todolist]}]
  {:initial-state (fn [{:keys [todolist] :as params}] {:todolist (comp/get-initial-state TodoList)})}
  (dom/div (manage-page/ui-todolist todolist)))
