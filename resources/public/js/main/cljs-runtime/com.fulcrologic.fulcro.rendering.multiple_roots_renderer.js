goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.rendering.keyframe_render');
goog.require('com.fulcrologic.fulcro.rendering.ident_optimized_render');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
goog.require('cljsjs.react');
goog.require('goog.object');
/**
 * Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__51721 = arguments.length;
switch (G__51721) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__51756){
var map__51757 = p__51756;
var map__51757__$1 = (((((!((map__51757 == null))))?(((((map__51757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51757):map__51757);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51757__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51757__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$2 = (function (){var or__4120__auto__ = app__$1;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var or__4120__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4120__auto____$1)){
return or__4120__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(class$);
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__51759 = app__$2;
var G__51759__$1 = (((G__51759 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__51759));
var G__51759__$2 = (((G__51759__$1 == null))?null:cljs.core.deref(G__51759__$1));
if((G__51759__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__51759__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__4109__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__4109__auto__)){
return (!(initialized_QMARK_));
} else {
return and__4109__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$2,class$) : initialize_state_BANG_.call(null,app__$2,class$));

var G__51763_51960 = app__$2;
var G__51764_51961 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__51763_51960,G__51764_51961) : schedule_render_BANG_.call(null,G__51763_51960,G__51764_51961));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,-1232718463);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options."], null);
}),null)),null,-1705682911);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__51780 = arguments.length;
switch (G__51780) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__51787){
var map__51789 = p__51787;
var map__51789__$1 = (((((!((map__51789 == null))))?(((((map__51789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51789):map__51789);
var options = map__51789__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51789__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$2 = (function (){var or__4120__auto__ = app__$1;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var or__4120__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4120__auto____$1)){
return or__4120__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(class$);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,-1033713982);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,105,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options."], null);
}),null)),null,-1824849887);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__51801 = app__$1;
var G__51801__$1 = (((G__51801 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__51801));
if((G__51801__$1 == null)){
return null;
} else {
return cljs.core.deref(G__51801__$1);
}
})();
var known_roots = (function (){var G__51802 = app__$1;
var G__51802__$1 = (((G__51802 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__51802));
var G__51802__$2 = (((G__51802__$1 == null))?null:cljs.core.deref(G__51802__$1));
if((G__51802__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__51802__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__51809 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__51811 = null;
var count__51812 = (0);
var i__51813 = (0);
while(true){
if((i__51813 < count__51812)){
var k = chunk__51811.cljs$core$IIndexed$_nth$arity$2(null,i__51813);
var cls_51965 = com.fulcrologic.fulcro.components.registry_key__GT_class(k);
var query_51966 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_51965,state_map);
var root_props_51967 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_51966,state_map,state_map);
var seq__51858_51968 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__51859_51969 = null;
var count__51860_51970 = (0);
var i__51861_51971 = (0);
while(true){
if((i__51861_51971 < count__51860_51970)){
var root_51976 = chunk__51859_51969.cljs$core$IIndexed$_nth$arity$2(null,i__51861_51971);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_51976,root_props_51967);


var G__51977 = seq__51858_51968;
var G__51978 = chunk__51859_51969;
var G__51979 = count__51860_51970;
var G__51980 = (i__51861_51971 + (1));
seq__51858_51968 = G__51977;
chunk__51859_51969 = G__51978;
count__51860_51970 = G__51979;
i__51861_51971 = G__51980;
continue;
} else {
var temp__5735__auto___51981 = cljs.core.seq(seq__51858_51968);
if(temp__5735__auto___51981){
var seq__51858_51982__$1 = temp__5735__auto___51981;
if(cljs.core.chunked_seq_QMARK_(seq__51858_51982__$1)){
var c__4550__auto___51983 = cljs.core.chunk_first(seq__51858_51982__$1);
var G__51984 = cljs.core.chunk_rest(seq__51858_51982__$1);
var G__51985 = c__4550__auto___51983;
var G__51986 = cljs.core.count(c__4550__auto___51983);
var G__51987 = (0);
seq__51858_51968 = G__51984;
chunk__51859_51969 = G__51985;
count__51860_51970 = G__51986;
i__51861_51971 = G__51987;
continue;
} else {
var root_51988 = cljs.core.first(seq__51858_51982__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_51988,root_props_51967);


var G__51989 = cljs.core.next(seq__51858_51982__$1);
var G__51990 = null;
var G__51991 = (0);
var G__51992 = (0);
seq__51858_51968 = G__51989;
chunk__51859_51969 = G__51990;
count__51860_51970 = G__51991;
i__51861_51971 = G__51992;
continue;
}
} else {
}
}
break;
}


var G__51993 = seq__51809;
var G__51994 = chunk__51811;
var G__51995 = count__51812;
var G__51996 = (i__51813 + (1));
seq__51809 = G__51993;
chunk__51811 = G__51994;
count__51812 = G__51995;
i__51813 = G__51996;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51809);
if(temp__5735__auto__){
var seq__51809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51809__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51809__$1);
var G__51997 = cljs.core.chunk_rest(seq__51809__$1);
var G__51998 = c__4550__auto__;
var G__51999 = cljs.core.count(c__4550__auto__);
var G__52000 = (0);
seq__51809 = G__51997;
chunk__51811 = G__51998;
count__51812 = G__51999;
i__51813 = G__52000;
continue;
} else {
var k = cljs.core.first(seq__51809__$1);
var cls_52001 = com.fulcrologic.fulcro.components.registry_key__GT_class(k);
var query_52002 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_52001,state_map);
var root_props_52003 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_52002,state_map,state_map);
var seq__51868_52004 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__51869_52005 = null;
var count__51870_52006 = (0);
var i__51871_52007 = (0);
while(true){
if((i__51871_52007 < count__51870_52006)){
var root_52008 = chunk__51869_52005.cljs$core$IIndexed$_nth$arity$2(null,i__51871_52007);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_52008,root_props_52003);


var G__52009 = seq__51868_52004;
var G__52010 = chunk__51869_52005;
var G__52011 = count__51870_52006;
var G__52012 = (i__51871_52007 + (1));
seq__51868_52004 = G__52009;
chunk__51869_52005 = G__52010;
count__51870_52006 = G__52011;
i__51871_52007 = G__52012;
continue;
} else {
var temp__5735__auto___52013__$1 = cljs.core.seq(seq__51868_52004);
if(temp__5735__auto___52013__$1){
var seq__51868_52014__$1 = temp__5735__auto___52013__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51868_52014__$1)){
var c__4550__auto___52015 = cljs.core.chunk_first(seq__51868_52014__$1);
var G__52016 = cljs.core.chunk_rest(seq__51868_52014__$1);
var G__52017 = c__4550__auto___52015;
var G__52018 = cljs.core.count(c__4550__auto___52015);
var G__52019 = (0);
seq__51868_52004 = G__52016;
chunk__51869_52005 = G__52017;
count__51870_52006 = G__52018;
i__51871_52007 = G__52019;
continue;
} else {
var root_52020 = cljs.core.first(seq__51868_52014__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_52020,root_props_52003);


var G__52021 = cljs.core.next(seq__51868_52014__$1);
var G__52022 = null;
var G__52023 = (0);
var G__52024 = (0);
seq__51868_52004 = G__52021;
chunk__51869_52005 = G__52022;
count__51870_52006 = G__52023;
i__51871_52007 = G__52024;
continue;
}
} else {
}
}
break;
}


var G__52025 = cljs.core.next(seq__51809__$1);
var G__52026 = null;
var G__52027 = (0);
var G__52028 = (0);
seq__51809 = G__52025;
chunk__51811 = G__52026;
count__51812 = G__52027;
i__51813 = G__52028;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app__$1,options){
var map__51888 = app__$1;
var map__51888__$1 = (((((!((map__51888 == null))))?(((((map__51888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51888):map__51888);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51888__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__51889 = cljs.core.deref(runtime_atom);
var map__51889__$1 = (((((!((map__51889 == null))))?(((((map__51889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51889):map__51889);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51889__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__51892 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__51892__$1 = (((((!((map__51892 == null))))?(((((map__51892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51892):map__51892);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51892__$1,true);
var seq__51896 = cljs.core.seq(limited_idents);
var chunk__51897 = null;
var count__51898 = (0);
var i__51899 = (0);
while(true){
if((i__51899 < count__51898)){
var i = chunk__51897.cljs$core$IIndexed$_nth$arity$2(null,i__51899);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__52031 = seq__51896;
var G__52032 = chunk__51897;
var G__52033 = count__51898;
var G__52034 = (i__51899 + (1));
seq__51896 = G__52031;
chunk__51897 = G__52032;
count__51898 = G__52033;
i__51899 = G__52034;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51896);
if(temp__5735__auto__){
var seq__51896__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51896__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51896__$1);
var G__52035 = cljs.core.chunk_rest(seq__51896__$1);
var G__52036 = c__4550__auto__;
var G__52037 = cljs.core.count(c__4550__auto__);
var G__52038 = (0);
seq__51896 = G__52035;
chunk__51897 = G__52036;
count__51898 = G__52037;
i__51899 = G__52038;
continue;
} else {
var i = cljs.core.first(seq__51896__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__52039 = cljs.core.next(seq__51896__$1);
var G__52040 = null;
var G__52041 = (0);
var G__52042 = (0);
seq__51896 = G__52039;
chunk__51897 = G__52040;
count__51898 = G__52041;
i__51899 = G__52042;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 *   This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 *   (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 *   will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 *   ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 *   events that should really only affect a known set of components (like the input field).
 * 
 *   This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__51904 = arguments.length;
switch (G__51904) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__51915){
var map__51916 = p__51915;
var map__51916__$1 = (((((!((map__51916 == null))))?(((((map__51916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51916):map__51916);
var options = map__51916__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4120__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app__$1,options);
}catch (e51918){var e = e51918;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,152,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,1559978114);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
goog.object.extend(cls.prototype,React.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this$ = this;
var js_props = this$.props;
var app__51700__auto__ = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return fulcro_app;
}
})();
var d__51701__auto__ = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (0);
}
})();
var _STAR_app_STAR__orig_val__51926 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__51927 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_depth_STAR__orig_val__51928 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_app_STAR__temp_val__51929 = app__51700__auto__;
var _STAR_shared_STAR__temp_val__51930 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__51700__auto__);
var _STAR_depth_STAR__temp_val__51931 = d__51701__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__51929);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51930);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51931);

try{var _STAR_denormalize_time_STAR__orig_val__51933 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__51934 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(fulcro_app)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__51934);

try{var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(UIRoot);
var state_map = (function (){var G__51935 = fulcro_app;
var G__51935__$1 = (((G__51935 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__51935));
if((G__51935__$1 == null)){
return null;
} else {
return cljs.core.deref(G__51935__$1);
}
})();
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__51938 = props;
var G__51939 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__51938,G__51939) : ui_root.call(null,G__51938,G__51939));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__51933);
}}finally {(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51928);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51927);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__51926);
}})], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__51945 = arguments.length;
switch (G__51945) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = (function (this$){
var _STAR_denormalize_time_STAR__orig_val__51950 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__51951 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components._STAR_app_STAR_)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__51951);

try{var state_map = (function (){var G__51952 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__51952__$1 = (((G__51952 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__51952));
if((G__51952__$1 == null)){
return null;
} else {
return cljs.core.deref(G__51952__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__51957 = (function (){var or__4120__auto__ = props;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__51958 = com.fulcrologic.fulcro.components.props(this$);
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__51957,G__51958) : ui_factory.call(null,G__51957,G__51958));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__51950);
}});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
