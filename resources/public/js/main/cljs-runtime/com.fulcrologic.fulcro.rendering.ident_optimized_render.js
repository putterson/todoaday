goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.rendering.keyframe_render');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.components');
goog.require('clojure.set');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4109__auto__ = c;
if(cljs.core.truth_(and__4109__auto__)){
return ident;
} else {
return and__4109__auto__;
}
})())){
var map__51192 = app__$1;
var map__51192__$1 = (((((!((map__51192 == null))))?(((((map__51192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51192):map__51192);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51192__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
}),null)),null,1135696993);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident."], null);
}),null)),null,1996095103);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__51198 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__51199 = null;
var count__51200 = (0);
var i__51201 = (0);
while(true){
if((i__51201 < count__51200)){
var c = chunk__51199.cljs$core$IIndexed$_nth$arity$2(null,i__51201);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__51336 = seq__51198;
var G__51337 = chunk__51199;
var G__51338 = count__51200;
var G__51339 = (i__51201 + (1));
seq__51198 = G__51336;
chunk__51199 = G__51337;
count__51200 = G__51338;
i__51201 = G__51339;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51198);
if(temp__5735__auto__){
var seq__51198__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51198__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51198__$1);
var G__51340 = cljs.core.chunk_rest(seq__51198__$1);
var G__51341 = c__4550__auto__;
var G__51342 = cljs.core.count(c__4550__auto__);
var G__51343 = (0);
seq__51198 = G__51340;
chunk__51199 = G__51341;
count__51200 = G__51342;
i__51201 = G__51343;
continue;
} else {
var c = cljs.core.first(seq__51198__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__51344 = cljs.core.next(seq__51198__$1);
var G__51345 = null;
var G__51346 = (0);
var G__51347 = (0);
seq__51198 = G__51344;
chunk__51199 = G__51345;
count__51200 = G__51346;
i__51201 = G__51347;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__51207 = app__$1;
var map__51207__$1 = (((((!((map__51207 == null))))?(((((map__51207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51207):map__51207);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51207__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__51208 = cljs.core.deref(runtime_atom);
var map__51208__$1 = (((((!((map__51208 == null))))?(((((map__51208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51208):map__51208);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51208__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__51209 = indexes;
var map__51209__$1 = (((((!((map__51209 == null))))?(((((map__51209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51209):map__51209);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51209__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51209__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51209__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4120__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__51213 = cljs.core.seq(classes);
var chunk__51214 = null;
var count__51215 = (0);
var i__51216 = (0);
while(true){
if((i__51216 < count__51215)){
var class$ = chunk__51214.cljs$core$IIndexed$_nth$arity$2(null,i__51216);
var seq__51230_51351 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__51232_51352 = null;
var count__51233_51353 = (0);
var i__51234_51354 = (0);
while(true){
if((i__51234_51354 < count__51233_51353)){
var component_51358 = chunk__51232_51352.cljs$core$IIndexed$_nth$arity$2(null,i__51234_51354);
var component_ident_51359 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_51358);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_51359,component_51358);


var G__51360 = seq__51230_51351;
var G__51361 = chunk__51232_51352;
var G__51362 = count__51233_51353;
var G__51363 = (i__51234_51354 + (1));
seq__51230_51351 = G__51360;
chunk__51232_51352 = G__51361;
count__51233_51353 = G__51362;
i__51234_51354 = G__51363;
continue;
} else {
var temp__5735__auto___51364 = cljs.core.seq(seq__51230_51351);
if(temp__5735__auto___51364){
var seq__51230_51365__$1 = temp__5735__auto___51364;
if(cljs.core.chunked_seq_QMARK_(seq__51230_51365__$1)){
var c__4550__auto___51366 = cljs.core.chunk_first(seq__51230_51365__$1);
var G__51367 = cljs.core.chunk_rest(seq__51230_51365__$1);
var G__51368 = c__4550__auto___51366;
var G__51369 = cljs.core.count(c__4550__auto___51366);
var G__51370 = (0);
seq__51230_51351 = G__51367;
chunk__51232_51352 = G__51368;
count__51233_51353 = G__51369;
i__51234_51354 = G__51370;
continue;
} else {
var component_51373 = cljs.core.first(seq__51230_51365__$1);
var component_ident_51375 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_51373);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_51375,component_51373);


var G__51376 = cljs.core.next(seq__51230_51365__$1);
var G__51377 = null;
var G__51378 = (0);
var G__51379 = (0);
seq__51230_51351 = G__51376;
chunk__51232_51352 = G__51377;
count__51233_51353 = G__51378;
i__51234_51354 = G__51379;
continue;
}
} else {
}
}
break;
}


var G__51381 = seq__51213;
var G__51382 = chunk__51214;
var G__51383 = count__51215;
var G__51384 = (i__51216 + (1));
seq__51213 = G__51381;
chunk__51214 = G__51382;
count__51215 = G__51383;
i__51216 = G__51384;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51213);
if(temp__5735__auto__){
var seq__51213__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51213__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51213__$1);
var G__51387 = cljs.core.chunk_rest(seq__51213__$1);
var G__51388 = c__4550__auto__;
var G__51389 = cljs.core.count(c__4550__auto__);
var G__51390 = (0);
seq__51213 = G__51387;
chunk__51214 = G__51388;
count__51215 = G__51389;
i__51216 = G__51390;
continue;
} else {
var class$ = cljs.core.first(seq__51213__$1);
var seq__51245_51391 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__51247_51392 = null;
var count__51248_51393 = (0);
var i__51249_51394 = (0);
while(true){
if((i__51249_51394 < count__51248_51393)){
var component_51396 = chunk__51247_51392.cljs$core$IIndexed$_nth$arity$2(null,i__51249_51394);
var component_ident_51397 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_51396);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_51397,component_51396);


var G__51398 = seq__51245_51391;
var G__51399 = chunk__51247_51392;
var G__51400 = count__51248_51393;
var G__51401 = (i__51249_51394 + (1));
seq__51245_51391 = G__51398;
chunk__51247_51392 = G__51399;
count__51248_51393 = G__51400;
i__51249_51394 = G__51401;
continue;
} else {
var temp__5735__auto___51402__$1 = cljs.core.seq(seq__51245_51391);
if(temp__5735__auto___51402__$1){
var seq__51245_51404__$1 = temp__5735__auto___51402__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51245_51404__$1)){
var c__4550__auto___51405 = cljs.core.chunk_first(seq__51245_51404__$1);
var G__51406 = cljs.core.chunk_rest(seq__51245_51404__$1);
var G__51407 = c__4550__auto___51405;
var G__51408 = cljs.core.count(c__4550__auto___51405);
var G__51409 = (0);
seq__51245_51391 = G__51406;
chunk__51247_51392 = G__51407;
count__51248_51393 = G__51408;
i__51249_51394 = G__51409;
continue;
} else {
var component_51411 = cljs.core.first(seq__51245_51404__$1);
var component_ident_51412 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_51411);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_51412,component_51411);


var G__51413 = cljs.core.next(seq__51245_51404__$1);
var G__51414 = null;
var G__51415 = (0);
var G__51416 = (0);
seq__51245_51391 = G__51413;
chunk__51247_51392 = G__51414;
count__51248_51393 = G__51415;
i__51249_51394 = G__51416;
continue;
}
} else {
}
}
break;
}


var G__51418 = cljs.core.next(seq__51213__$1);
var G__51419 = null;
var G__51420 = (0);
var G__51421 = (0);
seq__51213 = G__51418;
chunk__51214 = G__51419;
count__51215 = G__51420;
i__51216 = G__51421;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__51263 = app__$1;
var map__51263__$1 = (((((!((map__51263 == null))))?(((((map__51263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51263):map__51263);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51263__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__51264 = cljs.core.deref(runtime_atom);
var map__51264__$1 = (((((!((map__51264 == null))))?(((((map__51264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51264):map__51264);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51264__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__51265 = indexes;
var map__51265__$1 = (((((!((map__51265 == null))))?(((((map__51265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51265):map__51265);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51265__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51265__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__51261_SHARP_,p2__51262_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__51261_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__51262_SHARP_) : class__GT_components.call(null,p2__51262_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__51269 = app__$1;
var map__51269__$1 = (((((!((map__51269 == null))))?(((((map__51269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51269):map__51269);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51269__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51269__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__51270 = cljs.core.deref(runtime_atom);
var map__51270__$1 = (((((!((map__51270 == null))))?(((((map__51270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51270):map__51270);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51270__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51270__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51270__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51270__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__51271 = indexes;
var map__51271__$1 = (((((!((map__51271 == null))))?(((((map__51271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51271):map__51271);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51271__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51271__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51271__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51271__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__51278 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__51278__$1 = (((((!((map__51278 == null))))?(((((map__51278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51278):map__51278);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51278__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51278__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__51283_51432 = cljs.core.seq(limited_to_render);
var chunk__51285_51433 = null;
var count__51286_51434 = (0);
var i__51287_51435 = (0);
while(true){
if((i__51287_51435 < count__51286_51434)){
var c_51436 = chunk__51285_51433.cljs$core$IIndexed$_nth$arity$2(null,i__51287_51435);
var ident_51437 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_51436);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_51437,c_51436);


var G__51438 = seq__51283_51432;
var G__51439 = chunk__51285_51433;
var G__51440 = count__51286_51434;
var G__51441 = (i__51287_51435 + (1));
seq__51283_51432 = G__51438;
chunk__51285_51433 = G__51439;
count__51286_51434 = G__51440;
i__51287_51435 = G__51441;
continue;
} else {
var temp__5735__auto___51443 = cljs.core.seq(seq__51283_51432);
if(temp__5735__auto___51443){
var seq__51283_51444__$1 = temp__5735__auto___51443;
if(cljs.core.chunked_seq_QMARK_(seq__51283_51444__$1)){
var c__4550__auto___51446 = cljs.core.chunk_first(seq__51283_51444__$1);
var G__51447 = cljs.core.chunk_rest(seq__51283_51444__$1);
var G__51448 = c__4550__auto___51446;
var G__51449 = cljs.core.count(c__4550__auto___51446);
var G__51450 = (0);
seq__51283_51432 = G__51447;
chunk__51285_51433 = G__51448;
count__51286_51434 = G__51449;
i__51287_51435 = G__51450;
continue;
} else {
var c_51452 = cljs.core.first(seq__51283_51444__$1);
var ident_51453 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_51452);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_51453,c_51452);


var G__51454 = cljs.core.next(seq__51283_51444__$1);
var G__51455 = null;
var G__51456 = (0);
var G__51457 = (0);
seq__51283_51432 = G__51454;
chunk__51285_51433 = G__51455;
count__51286_51434 = G__51456;
i__51287_51435 = G__51457;
continue;
}
} else {
}
}
break;
}

var seq__51289 = cljs.core.seq(limited_idents);
var chunk__51290 = null;
var count__51291 = (0);
var i__51292 = (0);
while(true){
if((i__51292 < count__51291)){
var i = chunk__51290.cljs$core$IIndexed$_nth$arity$2(null,i__51292);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__51459 = seq__51289;
var G__51460 = chunk__51290;
var G__51461 = count__51291;
var G__51462 = (i__51292 + (1));
seq__51289 = G__51459;
chunk__51290 = G__51460;
count__51291 = G__51461;
i__51292 = G__51462;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51289);
if(temp__5735__auto__){
var seq__51289__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51289__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51289__$1);
var G__51463 = cljs.core.chunk_rest(seq__51289__$1);
var G__51464 = c__4550__auto__;
var G__51465 = cljs.core.count(c__4550__auto__);
var G__51466 = (0);
seq__51289 = G__51463;
chunk__51290 = G__51464;
count__51291 = G__51465;
i__51292 = G__51466;
continue;
} else {
var i = cljs.core.first(seq__51289__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__51467 = cljs.core.next(seq__51289__$1);
var G__51468 = null;
var G__51469 = (0);
var G__51470 = (0);
seq__51289 = G__51467;
chunk__51290 = G__51468;
count__51291 = G__51469;
i__51292 = G__51470;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4120__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__51299 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__51299__$1 = (((((!((map__51299 == null))))?(((((map__51299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51299):map__51299);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51299__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51299__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__51301_51475 = cljs.core.seq(all_idents);
var chunk__51302_51476 = null;
var count__51303_51477 = (0);
var i__51304_51478 = (0);
while(true){
if((i__51304_51478 < count__51303_51477)){
var i_51480 = chunk__51302_51476.cljs$core$IIndexed$_nth$arity$2(null,i__51304_51478);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_51480);


var G__51481 = seq__51301_51475;
var G__51482 = chunk__51302_51476;
var G__51483 = count__51303_51477;
var G__51484 = (i__51304_51478 + (1));
seq__51301_51475 = G__51481;
chunk__51302_51476 = G__51482;
count__51303_51477 = G__51483;
i__51304_51478 = G__51484;
continue;
} else {
var temp__5735__auto___51485 = cljs.core.seq(seq__51301_51475);
if(temp__5735__auto___51485){
var seq__51301_51486__$1 = temp__5735__auto___51485;
if(cljs.core.chunked_seq_QMARK_(seq__51301_51486__$1)){
var c__4550__auto___51487 = cljs.core.chunk_first(seq__51301_51486__$1);
var G__51488 = cljs.core.chunk_rest(seq__51301_51486__$1);
var G__51489 = c__4550__auto___51487;
var G__51490 = cljs.core.count(c__4550__auto___51487);
var G__51491 = (0);
seq__51301_51475 = G__51488;
chunk__51302_51476 = G__51489;
count__51303_51477 = G__51490;
i__51304_51478 = G__51491;
continue;
} else {
var i_51492 = cljs.core.first(seq__51301_51486__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_51492);


var G__51494 = cljs.core.next(seq__51301_51486__$1);
var G__51495 = null;
var G__51496 = (0);
var G__51497 = (0);
seq__51301_51475 = G__51494;
chunk__51302_51476 = G__51495;
count__51303_51477 = G__51496;
i__51304_51478 = G__51497;
continue;
}
} else {
}
}
break;
}

var seq__51308 = cljs.core.seq(extra_to_force);
var chunk__51309 = null;
var count__51310 = (0);
var i__51311 = (0);
while(true){
if((i__51311 < count__51310)){
var c = chunk__51309.cljs$core$IIndexed$_nth$arity$2(null,i__51311);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__51498 = seq__51308;
var G__51499 = chunk__51309;
var G__51500 = count__51310;
var G__51501 = (i__51311 + (1));
seq__51308 = G__51498;
chunk__51309 = G__51499;
count__51310 = G__51500;
i__51311 = G__51501;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51308);
if(temp__5735__auto__){
var seq__51308__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51308__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51308__$1);
var G__51504 = cljs.core.chunk_rest(seq__51308__$1);
var G__51505 = c__4550__auto__;
var G__51506 = cljs.core.count(c__4550__auto__);
var G__51507 = (0);
seq__51308 = G__51504;
chunk__51309 = G__51505;
count__51310 = G__51506;
i__51311 = G__51507;
continue;
} else {
var c = cljs.core.first(seq__51308__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__51510 = cljs.core.next(seq__51308__$1);
var G__51511 = null;
var G__51512 = (0);
var G__51513 = (0);
seq__51308 = G__51510;
chunk__51309 = G__51511;
count__51310 = G__51512;
i__51311 = G__51513;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__51319 = arguments.length;
switch (G__51319) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__51323){
var map__51324 = p__51323;
var map__51324__$1 = (((((!((map__51324 == null))))?(((((map__51324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51324):map__51324);
var options = map__51324__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51324__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51324__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4120__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e51326){var e = e51326;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,145,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-114452450);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
