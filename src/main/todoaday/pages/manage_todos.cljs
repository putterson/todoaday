(ns todoaday.pages.manage-todos
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]))

(defsc Todo
  [this {:todo/keys [description]}]
  {:initial-state (fn [{:keys [description] :as params}] {:todo/description description})}
  (dom/div {:className "a" :id "id" :style {:color "red"}}
           (dom/p description)))

(def ui-todo (comp/factory Todo))

(defsc TodoList
  [this {:list/keys [todos]}]
  {:initial-state (fn [params] {:list/todos [(comp/get-initial-state Todo {:description "Placeholder"})
                                       (comp/get-initial-state Todo {:description "Two"})]})}
  (dom/div (dom/ul (map ui-todo todos))))

(def ui-todolist (comp/factory TodoList))