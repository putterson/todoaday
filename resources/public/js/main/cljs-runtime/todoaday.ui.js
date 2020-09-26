goog.provide('todoaday.ui');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('todoaday.pages.manage_todos');

var options__44865__auto___48528 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function todoaday$ui$build_raw_initial_state_STAR_(p__48517){
var map__48518 = p__48517;
var map__48518__$1 = (((((!((map__48518 == null))))?(((((map__48518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48518):map__48518);
var params = map__48518__$1;
var todolist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48518__$1,new cljs.core.Keyword(null,"todolist","todolist",-346266154));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"todolist","todolist",-346266154),com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$1(todoaday.pages.manage_todos.TodoList)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function todoaday$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__48520 = com.fulcrologic.fulcro.components.props(this$);
var map__48520__$1 = (((((!((map__48520 == null))))?(((((map__48520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48520):map__48520);
var todolist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48520__$1,new cljs.core.Keyword(null,"todolist","todolist",-346266154));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(todoaday.pages.manage_todos.ui_todolist.cljs$core$IFn$_invoke$arity$1 ? todoaday.pages.manage_todos.ui_todolist.cljs$core$IFn$_invoke$arity$1(todolist) : todoaday.pages.manage_todos.ui_todolist.call(null,todolist))], null),null);
}));
})], null);
if((typeof todoaday !== 'undefined') && (typeof todoaday.ui !== 'undefined') && (typeof todoaday.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
todoaday.ui.Root = (function todoaday$ui$Root(props__44866__auto__){
var this__44867__auto__ = this;
var temp__5733__auto___48529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__44865__auto___48528,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___48529)){
var init_state__44868__auto___48530 = temp__5733__auto___48529;
(this__44867__auto__.state = (function (){var obj48523 = ({"fulcro$state":(function (){var G__48524 = this__44867__auto__;
var G__48525 = goog.object.get(props__44866__auto__,"fulcro$value");
return (init_state__44868__auto___48530.cljs$core$IFn$_invoke$arity$2 ? init_state__44868__auto___48530.cljs$core$IFn$_invoke$arity$2(G__48524,G__48525) : init_state__44868__auto___48530.call(null,G__48524,G__48525));
})()});
return obj48523;
})());
} else {
(this__44867__auto__.state = (function (){var obj48527 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48527;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(todoaday.ui.Root,new cljs.core.Keyword("todoaday.ui","Root","todoaday.ui/Root",1754739167),options__44865__auto___48528);

//# sourceMappingURL=todoaday.ui.js.map
