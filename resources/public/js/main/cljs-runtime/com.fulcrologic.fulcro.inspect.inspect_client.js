goog.provide('com.fulcrologic.fulcro.inspect.inspect_client');
goog.require('cljs.core');
goog.require('edn_query_language.core');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('goog.object');
goog.require('com.fulcrologic.fulcro.inspect.diff');
goog.require('com.fulcrologic.fulcro.inspect.transit');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
/**
 * @define {boolean}
 */
com.fulcrologic.fulcro.inspect.inspect_client.INSPECT = goog.define("com.fulcrologic.fulcro.inspect.inspect_client.INSPECT",false);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key = new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.send_ch !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((50000)));
}
com.fulcrologic.fulcro.inspect.inspect_client.post_message = (function com$fulcrologic$fulcro$inspect$inspect_client$post_message(type,data){
try{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.send_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,data], null));
}catch (e47318){var e = e47318;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot send to inspect. Channel closed."], null);
}),null)),null,1755142662);
}});
/**
 * Returns true when env is a cljs macro &env
 */
com.fulcrologic.fulcro.inspect.inspect_client.cljs_QMARK_ = (function com$fulcrologic$fulcro$inspect$inspect_client$cljs_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
/**
 * Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.inspect.inspect_client.isoget = (function com$fulcrologic$fulcro$inspect$inspect_client$isoget(var_args){
var G__47338 = arguments.length;
switch (G__47338) {
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3(obj,k,null);
}));

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,default$){
var or__4120__auto__ = goog.object.get(obj,(function (){var G__47350 = k;
if((G__47350 == null)){
return null;
} else {
return cljs.core.name(G__47350);
}
})());
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.inspect.inspect_client.app_state = (function com$fulcrologic$fulcro$inspect$inspect_client$app_state(app__$1){
var G__47354 = app__$1;
var G__47354__$1 = (((G__47354 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__47354));
if((G__47354__$1 == null)){
return null;
} else {
return cljs.core.deref(G__47354__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$runtime_atom(app__$1){
var G__47356 = app__$1;
if((G__47356 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__47356);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.state_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$state_atom(app__$1){
var G__47358 = app__$1;
if((G__47358 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__47358);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid = (function com$fulcrologic$fulcro$inspect$inspect_client$app_uuid(app__$1){
var G__47359 = app__$1;
var G__47359__$1 = (((G__47359 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__47359));
var G__47359__$2 = (((G__47359__$1 == null))?null:cljs.core.deref(G__47359__$1));
if((G__47359__$2 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__47359__$2,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.remotes = (function com$fulcrologic$fulcro$inspect$inspect_client$remotes(app__$1){
var G__47360 = com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1);
var G__47360__$1 = (((G__47360 == null))?null:cljs.core.deref(G__47360));
if((G__47360__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(G__47360__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$app_id(app__$1){
var G__47363 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
if((G__47363 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(G__47363);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$fulcro_app_id(app__$1){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
});
com.fulcrologic.fulcro.inspect.inspect_client.get_component_name = (function com$fulcrologic$fulcro$inspect$inspect_client$get_component_name(component){
if(cljs.core.truth_(component)){
var G__47369 = com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
if((G__47369 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(G__47369);
}
} else {
return null;
}
});
com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$comp_transact_BANG_(app__$1,tx,options){
var tx_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"tx!","tx!",-1308106263));
return (tx_BANG_.cljs$core$IFn$_invoke$arity$3 ? tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,options) : tx_BANG_.call(null,app__$1,tx,options));
});
com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE = (100);
com.fulcrologic.fulcro.inspect.inspect_client.fixed_size_assoc = (function com$fulcrologic$fulcro$inspect$inspect_client$fixed_size_assoc(size,db,key,value){
var map__47380 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,value),new cljs.core.Keyword("fulcro.inspect.client","history","fulcro.inspect.client/history",1037107964),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),key);
var map__47380__$1 = (((((!((map__47380 == null))))?(((((map__47380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47380):map__47380);
var db_SINGLEQUOTE_ = map__47380__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47380__$1,new cljs.core.Keyword("fulcro.inspect.client","history","fulcro.inspect.client/history",1037107964));
if((cljs.core.count(history) > size)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db_SINGLEQUOTE_,cljs.core.first(history)),new cljs.core.Keyword("fulcro.inspect.client","history","fulcro.inspect.client/history",1037107964),(function (p1__47378_SHARP_){
return cljs.core.vec(cljs.core.next(p1__47378_SHARP_));
}));
} else {
return db_SINGLEQUOTE_;
}
});
/**
 * Record a snapshot of history on the app itself for inspect to reference via events to do things like preview
 * history.
 */
com.fulcrologic.fulcro.inspect.inspect_client.update_state_history = (function com$fulcrologic$fulcro$inspect$inspect_client$update_state_history(app__$1,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1),cljs.core.update,new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187),(function (p1__47388_SHARP_){
return com.fulcrologic.fulcro.inspect.inspect_client.fixed_size_assoc(com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE,p1__47388_SHARP_,cljs.core.hash(state),state);
}));
});
com.fulcrologic.fulcro.inspect.inspect_client.db_from_history = (function com$fulcrologic$fulcro$inspect$inspect_client$db_from_history(app__$1,state_hash){
var G__47393 = com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1);
var G__47393__$1 = (((G__47393 == null))?null:cljs.core.deref(G__47393));
var G__47393__$2 = (((G__47393__$1 == null))?null:new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187).cljs$core$IFn$_invoke$arity$1(G__47393__$1));
if((G__47393__$2 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__47393__$2,state_hash);
}
});
/**
 * Notify Inspect that the database changed
 */
com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$db_changed_BANG_(app__$1,old_state,new_state){
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.update_state_history(app__$1,new_state);

var diff = com.fulcrologic.fulcro.inspect.diff.diff(old_state,new_state);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","db-update","fulcro.inspect.client/db-update",587693556),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","prev-state-hash","fulcro.inspect.client/prev-state-hash",413242088),cljs.core.hash(old_state),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(new_state),new cljs.core.Keyword("fulcro.inspect.client","state-delta","fulcro.inspect.client/state-delta",1518835964),diff]));
});
com.fulcrologic.fulcro.inspect.inspect_client.event_data = (function com$fulcrologic$fulcro$inspect$inspect_client$event_data(event){
var G__47404 = event;
var G__47404__$1 = (((G__47404 == null))?null:goog.object.getValueByKeys(G__47404,"data","fulcro-inspect-devtool-message"));
if((G__47404__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.inspect.transit.read(G__47404__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop = (function com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop(){
var c__45460__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_47443){
var state_val_47444 = (state_47443[(1)]);
if((state_val_47444 === (1))){
var state_47443__$1 = state_47443;
var statearr_47449_47715 = state_47443__$1;
(statearr_47449_47715[(2)] = null);

(statearr_47449_47715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (2))){
var state_47443__$1 = state_47443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47443__$1,(4),com.fulcrologic.fulcro.inspect.inspect_client.send_ch);
} else {
if((state_val_47444 === (3))){
var inst_47441 = (state_47443[(2)]);
var state_47443__$1 = state_47443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47443__$1,inst_47441);
} else {
if((state_val_47444 === (4))){
var inst_47414 = (state_47443[(7)]);
var inst_47414__$1 = (state_47443[(2)]);
var state_47443__$1 = (function (){var statearr_47458 = state_47443;
(statearr_47458[(7)] = inst_47414__$1);

return statearr_47458;
})();
if(cljs.core.truth_(inst_47414__$1)){
var statearr_47459_47723 = state_47443__$1;
(statearr_47459_47723[(1)] = (5));

} else {
var statearr_47460_47724 = state_47443__$1;
(statearr_47460_47724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (5))){
var inst_47414 = (state_47443[(7)]);
var inst_47421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47414,(0),null);
var inst_47422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47414,(1),null);
var inst_47424 = [new cljs.core.Keyword(null,"fulcro-inspect-remote-message","fulcro-inspect-remote-message",1518065210)];
var inst_47426 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)];
var inst_47427 = (new Date());
var inst_47428 = [inst_47421,inst_47422,inst_47427];
var inst_47429 = cljs.core.PersistentHashMap.fromArrays(inst_47426,inst_47428);
var inst_47430 = com.fulcrologic.fulcro.inspect.transit.write(inst_47429);
var inst_47431 = [inst_47430];
var inst_47432 = cljs.core.PersistentHashMap.fromArrays(inst_47424,inst_47431);
var inst_47433 = cljs.core.clj__GT_js(inst_47432);
var inst_47434 = window.postMessage(inst_47433,"*");
var state_47443__$1 = (function (){var statearr_47465 = state_47443;
(statearr_47465[(8)] = inst_47434);

return statearr_47465;
})();
var statearr_47466_47726 = state_47443__$1;
(statearr_47466_47726[(2)] = null);

(statearr_47466_47726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (6))){
var state_47443__$1 = state_47443;
var statearr_47468_47727 = state_47443__$1;
(statearr_47468_47727[(2)] = null);

(statearr_47468_47727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (7))){
var inst_47438 = (state_47443[(2)]);
var state_47443__$1 = state_47443;
var statearr_47471_47728 = state_47443__$1;
(statearr_47471_47728[(2)] = inst_47438);

(statearr_47471_47728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto__ = null;
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto____0 = (function (){
var statearr_47474 = [null,null,null,null,null,null,null,null,null];
(statearr_47474[(0)] = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto__);

(statearr_47474[(1)] = (1));

return statearr_47474;
});
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto____1 = (function (state_47443){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_47443);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e47476){var ex__45294__auto__ = e47476;
var statearr_47477_47732 = state_47443;
(statearr_47477_47732[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_47443[(4)]))){
var statearr_47478_47733 = state_47443;
(statearr_47478_47733[(1)] = cljs.core.first((state_47443[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47736 = state_47443;
state_47443 = G__47736;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto__ = function(state_47443){
switch(arguments.length){
case 0:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto____0.call(this);
case 1:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto____1.call(this,state_47443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto____0;
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto____1;
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_47480 = f__45461__auto__();
(statearr_47480[(6)] = c__45460__auto__);

return statearr_47480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));

return c__45460__auto__;
});
com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages = (function com$fulcrologic$fulcro$inspect$inspect_client$listen_local_messages(){
return window.addEventListener("message",(function (event){
if(cljs.core.truth_((((event.source === window))?goog.object.getValueByKeys(event,"data","fulcro-inspect-devtool-message"):false))){
var G__47485 = com.fulcrologic.fulcro.inspect.inspect_client.event_data(event);
return (com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1(G__47485) : com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.call(null,G__47485));
} else {
if(cljs.core.truth_((((event.source === window))?goog.object.getValueByKeys(event,"data","fulcro-inspect-start-consume"):false))){
return com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop();
} else {
return null;
}
}
}),false);
});
com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$transact_inspector_BANG_(var_args){
var G__47488 = arguments.length;
switch (G__47488) {
case 1:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
}));

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ref,tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","tx-ref","fulcro.inspect.client/tx-ref",-1370560773),ref,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
}));

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.inspect.inspect_client.dispose_app = (function com$fulcrologic$fulcro$inspect$inspect_client$dispose_app(app_uuid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.dissoc,app_uuid);

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","dispose-app","fulcro.inspect.client/dispose-app",-574872452),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.set_active_app = (function com$fulcrologic$fulcro$inspect$inspect_client$set_active_app(app_uuid){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","set-active-app","fulcro.inspect.client/set-active-app",-2049837528),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_started_BANG_(app__$1,remote,tx_id,txn){
var start = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-start","fulcro.inspect.ui.network/request-start",-1415257884,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),remote,new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),start,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),txn], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_finished_BANG_(app__$1,remote,tx_id,response){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),response], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_failed_BANG_(app__$1,tx_id,error){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),error], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message = (function com$fulcrologic$fulcro$inspect$inspect_client$handle_devtool_message(p__47511){
var map__47512 = p__47511;
var map__47512__$1 = (((((!((map__47512 == null))))?(((((map__47512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47512):map__47512);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__47516 = type;
var G__47516__$1 = (((G__47516 instanceof cljs.core.Keyword))?G__47516.fqn:null);
switch (G__47516__$1) {
case "fulcro.inspect.client/request-page-apps":
var seq__47518 = cljs.core.seq(cljs.core.vals(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_)));
var chunk__47519 = null;
var count__47520 = (0);
var i__47521 = (0);
while(true){
if((i__47521 < count__47520)){
var app__$1 = chunk__47519.cljs$core$IIndexed$_nth$arity$2(null,i__47521);
var state_47758 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
var remote_names_47759 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__47518,chunk__47519,count__47520,i__47521,state_47758,remote_names_47759,app__$1,G__47516,G__47516__$1,map__47512,map__47512__$1,type,data){
return (function (p1__47508_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__47508_SHARP_);
});})(seq__47518,chunk__47519,count__47520,i__47521,state_47758,remote_names_47759,app__$1,G__47516,G__47516__$1,map__47512,map__47512__$1,type,data))
,cljs.core.str),cljs.core.keys(remote_names_47759)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),state_47758,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(state_47758)]));


var G__47762 = seq__47518;
var G__47763 = chunk__47519;
var G__47764 = count__47520;
var G__47765 = (i__47521 + (1));
seq__47518 = G__47762;
chunk__47519 = G__47763;
count__47520 = G__47764;
i__47521 = G__47765;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47518);
if(temp__5735__auto__){
var seq__47518__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47518__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47518__$1);
var G__47767 = cljs.core.chunk_rest(seq__47518__$1);
var G__47768 = c__4550__auto__;
var G__47769 = cljs.core.count(c__4550__auto__);
var G__47770 = (0);
seq__47518 = G__47767;
chunk__47519 = G__47768;
count__47520 = G__47769;
i__47521 = G__47770;
continue;
} else {
var app__$1 = cljs.core.first(seq__47518__$1);
var state_47771 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
var remote_names_47772 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__47518,chunk__47519,count__47520,i__47521,state_47771,remote_names_47772,app__$1,seq__47518__$1,temp__5735__auto__,G__47516,G__47516__$1,map__47512,map__47512__$1,type,data){
return (function (p1__47508_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__47508_SHARP_);
});})(seq__47518,chunk__47519,count__47520,i__47521,state_47771,remote_names_47772,app__$1,seq__47518__$1,temp__5735__auto__,G__47516,G__47516__$1,map__47512,map__47512__$1,type,data))
,cljs.core.str),cljs.core.keys(remote_names_47772)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),state_47771,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(state_47771)]));


var G__47775 = cljs.core.next(seq__47518__$1);
var G__47776 = null;
var G__47777 = (0);
var G__47778 = (0);
seq__47518 = G__47775;
chunk__47519 = G__47776;
count__47520 = G__47777;
i__47521 = G__47778;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "fulcro.inspect.client/reset-app-state":
var map__47543 = data;
var map__47543__$1 = (((((!((map__47543 == null))))?(((((map__47543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47543):map__47543);
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47543__$1,new cljs.core.Keyword(null,"target-state","target-state",-682429993));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47543__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5733__auto__)){
var app__$1 = temp__5733__auto__;
var render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
if(cljs.core.truth_(target_state)){
var target_state_47782__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target_state,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid);
cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app__$1),target_state_47782__$1);
} else {
}

var G__47556 = app__$1;
var G__47557 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__47556,G__47557) : render_BANG_.call(null,G__47556,G__47557));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,205,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reset app on invalid uuid",app_uuid], null);
}),null)),null,1899413930);
}

break;
case "fulcro.inspect.client/transact":
var map__47559 = data;
var map__47559__$1 = (((((!((map__47559 == null))))?(((((map__47559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47559):map__47559);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47559__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var tx_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47559__$1,new cljs.core.Keyword(null,"tx-ref","tx-ref",-216104949));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47559__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5733__auto__)){
var app__$1 = temp__5733__auto__;
if(cljs.core.truth_(tx_ref)){
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app__$1,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),tx_ref], null));
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,214,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transact on invalid uuid",app_uuid], null);
}),null)),null,250167833);
}

break;
case "fulcro.inspect.client/pick-element":
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,217,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pick Element Not implemented for Inspect v3"], null);
}),null)),null,78214065);

break;
case "fulcro.inspect.client/show-dom-preview":
var b2__38954__auto__ = data;
if(cljs.core.truth_(b2__38954__auto__)){
var map__47581 = b2__38954__auto__;
var map__47581__$1 = (((((!((map__47581 == null))))?(((((map__47581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47581):map__47581);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47581__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__38954__auto____$1 = (function (){var G__47588 = cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_);
if((G__47588 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__47588,app_uuid);
}
})();
if(cljs.core.truth_(b2__38954__auto____$1)){
var app__$1 = b2__38954__auto____$1;
var b2__38954__auto____$2 = com.fulcrologic.fulcro.inspect.inspect_client.db_from_history(app__$1,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(b2__38954__auto____$2)){
var historical_state = b2__38954__auto____$2;
var b2__38954__auto____$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(historical_state));
if(cljs.core.truth_(b2__38954__auto____$3)){
var historical_app = b2__38954__auto____$3;
var b2__38954__auto____$4 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(b2__38954__auto____$4)){
var render_BANG_ = b2__38954__auto____$4;
var G__47597 = historical_app;
var G__47598 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__47597,G__47598) : render_BANG_.call(null,G__47597,G__47598));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,227,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
}),null)),null,1297977116);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,227,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
}),null)),null,1718108604);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,227,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
}),null)),null,-1301485369);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,227,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
}),null)),null,-1496461750);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,227,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
}),null)),null,-786690442);
}

break;
case "fulcro.inspect.client/hide-dom-preview":
var b2__38954__auto__ = data;
if(cljs.core.truth_(b2__38954__auto__)){
var map__47610 = b2__38954__auto__;
var map__47610__$1 = (((((!((map__47610 == null))))?(((((map__47610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47610):map__47610);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47610__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__38954__auto____$1 = (function (){var G__47612 = cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_);
if((G__47612 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__47612,app_uuid);
}
})();
if(cljs.core.truth_(b2__38954__auto____$1)){
var app__$1 = b2__38954__auto____$1;
var b2__38954__auto____$2 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(b2__38954__auto____$2)){
var render_BANG_ = b2__38954__auto____$2;
var G__47616 = app__$1;
var G__47617 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__47616,G__47617) : render_BANG_.call(null,G__47616,G__47617));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/network-request":
var map__47618 = data;
var map__47618__$1 = (((((!((map__47618 == null))))?(((((map__47618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47618):map__47618);
var remote_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47618__$1,new cljs.core.Keyword("fulcro.inspect.client","remote","fulcro.inspect.client/remote",-306964848));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47618__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var msg_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47618__$1,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47618__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__38954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(b2__38954__auto__)){
var app__$1 = b2__38954__auto__;
var b2__38954__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__38954__auto____$1)){
var remote = b2__38954__auto____$1;
var b2__38954__auto____$2 = new cljs.core.Keyword(null,"transmit!","transmit!",-107149039).cljs$core$IFn$_invoke$arity$1(remote);
if(cljs.core.truth_(b2__38954__auto____$2)){
var transmit_BANG_ = b2__38954__auto____$2;
var b2__38954__auto____$3 = edn_query_language.core.query__GT_ast(query);
if(cljs.core.truth_(b2__38954__auto____$3)){
var ast = b2__38954__auto____$3;
var b2__38954__auto____$4 = cljs.core.random_uuid();
if(cljs.core.truth_(b2__38954__auto____$4)){
var tx_id = b2__38954__auto____$4;
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,tx_id,query);

var G__47622 = remote;
var G__47623 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),tx_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),(0),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),cljs.core.identity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__47626){
var map__47627 = p__47626;
var map__47627__$1 = (((((!((map__47627 == null))))?(((((map__47627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47627):map__47627);
var result = map__47627__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47627__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var error_QMARK__47811 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((error_QMARK__47811.cljs$core$IFn$_invoke$arity$1 ? error_QMARK__47811.cljs$core$IFn$_invoke$arity$1(result) : error_QMARK__47811.call(null,result)))){
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,tx_id,result);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,tx_id,body);
}

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","message-response","fulcro.inspect.client/message-response",587955053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998),msg_id,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-response","fulcro.inspect.ui-parser/msg-response",1721295840),body], null));
})], null);
return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(G__47622,G__47623) : transmit_BANG_.call(null,G__47622,G__47623));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/console-log":
var map__47630 = data;
var map__47630__$1 = (((((!((map__47630 == null))))?(((((map__47630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47630):map__47630);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47630__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var log_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47630__$1,new cljs.core.Keyword(null,"log-js","log-js",-1565471667));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47630__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47630__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(log)){
return console.log(log);
} else {
if(cljs.core.truth_(log_js)){
return console.log(cljs.core.clj__GT_js(log_js));
} else {
if(cljs.core.truth_(warn)){
return console.warn(warn);
} else {
if(cljs.core.truth_(error)){
return console.error(error);
} else {
return null;
}
}
}
}

break;
case "fulcro.inspect.client/check-client-version":
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","client-version","fulcro.inspect.client/client-version",728119531),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),"2.2.5"], null));

break;
default:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.inspect.inspect-client",null,278,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown message",type], null);
}),null)),null,117928348);

}
});
com.fulcrologic.fulcro.inspect.inspect_client.install = (function com$fulcrologic$fulcro$inspect$inspect_client$install(_){
document.documentElement.setAttribute("__fulcro-inspect-remote-installed__",true);

if(cljs.core.truth_(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_))){
return null;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,287,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Installing Fulcro 3.x Inspect",cljs.core.PersistentArrayMap.EMPTY], null);
}),null)),null,-1349398421);

cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_,true);

return com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages();
}
});
/**
 * Register the application with Inspect, if it is available.
 */
com.fulcrologic.fulcro.inspect.inspect_client.app_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$app_started_BANG_(app__$1){
if(cljs.core.truth_((function (){var and__4109__auto__ = (function (){var or__4120__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4109__auto__;
}
})())){
var networking = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
var state_STAR_ = com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app__$1);
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.assoc,app_uuid,app__$1);

com.fulcrologic.fulcro.inspect.inspect_client.update_state_history(app__$1,cljs.core.deref(state_STAR_));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid);

com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__47641_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__47641_SHARP_);
}),cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(state_STAR_),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(state_STAR_))]));

return cljs.core.add_watch(state_STAR_,app_uuid,(function (p1__47644_SHARP_,p2__47645_SHARP_,p3__47642_SHARP_,p4__47643_SHARP_){
return com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_(app__$1,p3__47642_SHARP_,p4__47643_SHARP_);
}));
} else {
return null;
}
});
/**
 * Notify inspect that a transaction finished.
 * 
 * app - The app
 * env - The mutation env that completed.
 */
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$optimistic_action_finished_BANG_(app__$1,p__47656,p__47657){
var map__47659 = p__47656;
var map__47659__$1 = (((((!((map__47659 == null))))?(((((map__47659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47659):map__47659);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47659__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47659__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47659__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47659__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var map__47660 = p__47657;
var map__47660__$1 = (((((!((map__47660 == null))))?(((((map__47660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47660):map__47660);
var tx_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47660__$1,new cljs.core.Keyword(null,"tx-id","tx-id",638275288));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47660__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var state_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47660__$1,new cljs.core.Keyword(null,"state-before","state-before",759087843));
var component_name = com.fulcrologic.fulcro.inspect.inspect_client.get_component_name(component);
var tx__$1 = (function (){var G__47672 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),tx_id,new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),(new Date()),new cljs.core.Keyword("fulcro.history","tx","fulcro.history/tx",1485693993),tx,new cljs.core.Keyword("fulcro.history","db-before-hash","fulcro.history/db-before-hash",-1020674495),cljs.core.hash(state_before),new cljs.core.Keyword("fulcro.history","db-after-hash","fulcro.history/db-after-hash",-1603617752),cljs.core.hash(cljs.core.deref(state)),new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options], null);
var G__47672__$1 = (cljs.core.truth_(component_name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47672,new cljs.core.Keyword(null,"component","component",1555936782),component_name):G__47672);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47672__$1,new cljs.core.Keyword(null,"ident-ref","ident-ref",663643478),ref);
} else {
return G__47672__$1;
}
})();
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","new-client-transaction","fulcro.inspect.client/new-client-transaction",-1086637148),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx__$1]));
});

//# sourceMappingURL=com.fulcrologic.fulcro.inspect.inspect_client.js.map
