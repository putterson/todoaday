goog.provide('todoaday.pages.manage_todos');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');

var options__44865__auto___48481 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function todoaday$pages$manage_todos$build_raw_initial_state_STAR_(p__48462){
var map__48463 = p__48462;
var map__48463__$1 = (((((!((map__48463 == null))))?(((((map__48463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48463):map__48463);
var params = map__48463__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48463__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","description","todo/description",-1431540266),description], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function todoaday$pages$manage_todos$render_Todo(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__48465 = com.fulcrologic.fulcro.components.props(this$);
var map__48465__$1 = (((((!((map__48465 == null))))?(((((map__48465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48465):map__48465);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48465__$1,new cljs.core.Keyword("todo","description","todo/description",-1431540266));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "a", "id": "id", "style": ({"color": "red"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [description], null),null))]);
}));
})], null);
if((typeof todoaday !== 'undefined') && (typeof todoaday.pages !== 'undefined') && (typeof todoaday.pages.manage_todos !== 'undefined') && (typeof todoaday.pages.manage_todos.Todo !== 'undefined')){
} else {
/**
 * @constructor
 */
todoaday.pages.manage_todos.Todo = (function todoaday$pages$manage_todos$Todo(props__44866__auto__){
var this__44867__auto__ = this;
var temp__5733__auto___48482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__44865__auto___48481,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___48482)){
var init_state__44868__auto___48483 = temp__5733__auto___48482;
(this__44867__auto__.state = (function (){var obj48468 = ({"fulcro$state":(function (){var G__48469 = this__44867__auto__;
var G__48470 = goog.object.get(props__44866__auto__,"fulcro$value");
return (init_state__44868__auto___48483.cljs$core$IFn$_invoke$arity$2 ? init_state__44868__auto___48483.cljs$core$IFn$_invoke$arity$2(G__48469,G__48470) : init_state__44868__auto___48483.call(null,G__48469,G__48470));
})()});
return obj48468;
})());
} else {
(this__44867__auto__.state = (function (){var obj48472 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48472;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(todoaday.pages.manage_todos.Todo,new cljs.core.Keyword("todoaday.pages.manage-todos","Todo","todoaday.pages.manage-todos/Todo",2030965347),options__44865__auto___48481);
todoaday.pages.manage_todos.ui_todo = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(todoaday.pages.manage_todos.Todo);

var options__44865__auto___48484 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function todoaday$pages$manage_todos$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","todos","list/todos",583299230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(todoaday.pages.manage_todos.Todo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Placeholder"], null)),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(todoaday.pages.manage_todos.Todo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Two"], null))], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function todoaday$pages$manage_todos$render_TodoList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__48473 = com.fulcrologic.fulcro.components.props(this$);
var map__48473__$1 = (((((!((map__48473 == null))))?(((((map__48473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48473):map__48473);
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48473__$1,new cljs.core.Keyword("list","todos","list/todos",583299230));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(todoaday.pages.manage_todos.ui_todo,todos)], null),null)], null),null);
}));
})], null);
if((typeof todoaday !== 'undefined') && (typeof todoaday.pages !== 'undefined') && (typeof todoaday.pages.manage_todos !== 'undefined') && (typeof todoaday.pages.manage_todos.TodoList !== 'undefined')){
} else {
/**
 * @constructor
 */
todoaday.pages.manage_todos.TodoList = (function todoaday$pages$manage_todos$TodoList(props__44866__auto__){
var this__44867__auto__ = this;
var temp__5733__auto___48485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__44865__auto___48484,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___48485)){
var init_state__44868__auto___48486 = temp__5733__auto___48485;
(this__44867__auto__.state = (function (){var obj48476 = ({"fulcro$state":(function (){var G__48477 = this__44867__auto__;
var G__48478 = goog.object.get(props__44866__auto__,"fulcro$value");
return (init_state__44868__auto___48486.cljs$core$IFn$_invoke$arity$2 ? init_state__44868__auto___48486.cljs$core$IFn$_invoke$arity$2(G__48477,G__48478) : init_state__44868__auto___48486.call(null,G__48477,G__48478));
})()});
return obj48476;
})());
} else {
(this__44867__auto__.state = (function (){var obj48480 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48480;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(todoaday.pages.manage_todos.TodoList,new cljs.core.Keyword("todoaday.pages.manage-todos","TodoList","todoaday.pages.manage-todos/TodoList",-1805461838),options__44865__auto___48484);
todoaday.pages.manage_todos.ui_todolist = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(todoaday.pages.manage_todos.TodoList);

//# sourceMappingURL=todoaday.pages.manage_todos.js.map
