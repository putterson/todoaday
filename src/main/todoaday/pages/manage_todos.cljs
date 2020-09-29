(ns todoaday.pages.manage-todos
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]
    [todoaday.mutations :as api]))

(defsc Todo
  [this {:todo/keys [description]} {:keys [onDelete]}]
  {:query [:todo/description]
   :initial-state (fn [{:keys [description] :as params}] {:todo/description description})}
  (dom/div {:className "a" :id "id" :style {:color "red"}}
           (dom/p description)
           (dom/button {:onClick #(onDelete description)} "X")))

(def ui-todo (comp/factory Todo))

(defsc TodoList
  [this {:list/keys [todos]}]
  {:query         [{:list/todos (comp/get-query Todo)}]
   :initial-state (fn [params] {:list/todos [(comp/get-initial-state Todo {:description "Placeholder"})
                                             (comp/get-initial-state Todo {:description "Placeholder 2"})]})}
  (let [delete-todo (fn [description] (comp/transact! this [(api/delete-todo {:description description})]))]
    (dom/div (dom/ul (map (fn [p] (ui-todo (comp/computed p {:onDelete delete-todo}))) todos)))))

(def ui-todolist (comp/factory TodoList))