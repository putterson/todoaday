goog.provide('todoaday.pages.add');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');

var options__44865__auto___47981 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function todoaday$pages$add$render_HelloComponent(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "a", "id": "id", "style": ({"color": "red"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Hello"]))]);
}));
})], null);
if((typeof todoaday !== 'undefined') && (typeof todoaday.pages !== 'undefined') && (typeof todoaday.pages.add !== 'undefined') && (typeof todoaday.pages.add.HelloComponent !== 'undefined')){
} else {
/**
 * @constructor
 */
todoaday.pages.add.HelloComponent = (function todoaday$pages$add$HelloComponent(props__44866__auto__){
var this__44867__auto__ = this;
var temp__5733__auto___47982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__44865__auto___47981,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___47982)){
var init_state__44868__auto___47983 = temp__5733__auto___47982;
(this__44867__auto__.state = (function (){var obj47976 = ({"fulcro$state":(function (){var G__47977 = this__44867__auto__;
var G__47978 = goog.object.get(props__44866__auto__,"fulcro$value");
return (init_state__44868__auto___47983.cljs$core$IFn$_invoke$arity$2 ? init_state__44868__auto___47983.cljs$core$IFn$_invoke$arity$2(G__47977,G__47978) : init_state__44868__auto___47983.call(null,G__47977,G__47978));
})()});
return obj47976;
})());
} else {
(this__44867__auto__.state = (function (){var obj47980 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj47980;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(todoaday.pages.add.HelloComponent,new cljs.core.Keyword("todoaday.pages.add","HelloComponent","todoaday.pages.add/HelloComponent",892528690),options__44865__auto___47981);
todoaday.pages.add.ui_hello = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(todoaday.pages.add.HelloComponent);

//# sourceMappingURL=todoaday.pages.add.js.map
