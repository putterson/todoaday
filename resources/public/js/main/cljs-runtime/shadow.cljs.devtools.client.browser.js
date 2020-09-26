goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50357 = arguments.length;
var i__4731__auto___50358 = (0);
while(true){
if((i__4731__auto___50358 < len__4730__auto___50357)){
args__4736__auto__.push((arguments[i__4731__auto___50358]));

var G__50359 = (i__4731__auto___50358 + (1));
i__4731__auto___50358 = G__50359;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50096){
var G__50097 = cljs.core.first(seq50096);
var seq50096__$1 = cljs.core.next(seq50096);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50097,seq50096__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50105 = cljs.core.seq(sources);
var chunk__50106 = null;
var count__50107 = (0);
var i__50108 = (0);
while(true){
if((i__50108 < count__50107)){
var map__50129 = chunk__50106.cljs$core$IIndexed$_nth$arity$2(null,i__50108);
var map__50129__$1 = (((((!((map__50129 == null))))?(((((map__50129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50129):map__50129);
var src = map__50129__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50129__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50129__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50129__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50129__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50135){var e_50364 = e50135;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50364);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50364.message)].join('')));
}

var G__50365 = seq__50105;
var G__50366 = chunk__50106;
var G__50367 = count__50107;
var G__50368 = (i__50108 + (1));
seq__50105 = G__50365;
chunk__50106 = G__50366;
count__50107 = G__50367;
i__50108 = G__50368;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50105);
if(temp__5735__auto__){
var seq__50105__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50105__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50105__$1);
var G__50369 = cljs.core.chunk_rest(seq__50105__$1);
var G__50370 = c__4550__auto__;
var G__50371 = cljs.core.count(c__4550__auto__);
var G__50372 = (0);
seq__50105 = G__50369;
chunk__50106 = G__50370;
count__50107 = G__50371;
i__50108 = G__50372;
continue;
} else {
var map__50136 = cljs.core.first(seq__50105__$1);
var map__50136__$1 = (((((!((map__50136 == null))))?(((((map__50136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50136):map__50136);
var src = map__50136__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50138){var e_50374 = e50138;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50374);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50374.message)].join('')));
}

var G__50375 = cljs.core.next(seq__50105__$1);
var G__50376 = null;
var G__50377 = (0);
var G__50378 = (0);
seq__50105 = G__50375;
chunk__50106 = G__50376;
count__50107 = G__50377;
i__50108 = G__50378;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50142 = cljs.core.seq(js_requires);
var chunk__50143 = null;
var count__50144 = (0);
var i__50145 = (0);
while(true){
if((i__50145 < count__50144)){
var js_ns = chunk__50143.cljs$core$IIndexed$_nth$arity$2(null,i__50145);
var require_str_50381 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50381);


var G__50382 = seq__50142;
var G__50383 = chunk__50143;
var G__50384 = count__50144;
var G__50385 = (i__50145 + (1));
seq__50142 = G__50382;
chunk__50143 = G__50383;
count__50144 = G__50384;
i__50145 = G__50385;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50142);
if(temp__5735__auto__){
var seq__50142__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50142__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50142__$1);
var G__50386 = cljs.core.chunk_rest(seq__50142__$1);
var G__50387 = c__4550__auto__;
var G__50388 = cljs.core.count(c__4550__auto__);
var G__50389 = (0);
seq__50142 = G__50386;
chunk__50143 = G__50387;
count__50144 = G__50388;
i__50145 = G__50389;
continue;
} else {
var js_ns = cljs.core.first(seq__50142__$1);
var require_str_50390 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50390);


var G__50391 = cljs.core.next(seq__50142__$1);
var G__50392 = null;
var G__50393 = (0);
var G__50394 = (0);
seq__50142 = G__50391;
chunk__50143 = G__50392;
count__50144 = G__50393;
i__50145 = G__50394;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__50146 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__50146) : callback.call(null,G__50146));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__50150){
var map__50151 = p__50150;
var map__50151__$1 = (((((!((map__50151 == null))))?(((((map__50151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50151):map__50151);
var msg = map__50151__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50156(s__50157){
return (new cljs.core.LazySeq(null,(function (){
var s__50157__$1 = s__50157;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50157__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50162 = cljs.core.first(xs__6292__auto__);
var map__50162__$1 = (((((!((map__50162 == null))))?(((((map__50162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50162):map__50162);
var src = map__50162__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50162__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50162__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__50157__$1,map__50162,map__50162__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50151,map__50151__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50156_$_iter__50158(s__50159){
return (new cljs.core.LazySeq(null,((function (s__50157__$1,map__50162,map__50162__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50151,map__50151__$1,msg,info,reload_info){
return (function (){
var s__50159__$1 = s__50159;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50159__$1);
if(temp__5735__auto____$1){
var s__50159__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50159__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50159__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50161 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50160 = (0);
while(true){
if((i__50160 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__50160);
cljs.core.chunk_append(b__50161,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50398 = (i__50160 + (1));
i__50160 = G__50398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50161),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50156_$_iter__50158(cljs.core.chunk_rest(s__50159__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50161),null);
}
} else {
var warning = cljs.core.first(s__50159__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50156_$_iter__50158(cljs.core.rest(s__50159__$2)));
}
} else {
return null;
}
break;
}
});})(s__50157__$1,map__50162,map__50162__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50151,map__50151__$1,msg,info,reload_info))
,null,null));
});})(s__50157__$1,map__50162,map__50162__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50151,map__50151__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50156(cljs.core.rest(s__50157__$1)));
} else {
var G__50400 = cljs.core.rest(s__50157__$1);
s__50157__$1 = G__50400;
continue;
}
} else {
var G__50401 = cljs.core.rest(s__50157__$1);
s__50157__$1 = G__50401;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__50173_50403 = cljs.core.seq(warnings);
var chunk__50174_50404 = null;
var count__50175_50405 = (0);
var i__50176_50406 = (0);
while(true){
if((i__50176_50406 < count__50175_50405)){
var map__50185_50409 = chunk__50174_50404.cljs$core$IIndexed$_nth$arity$2(null,i__50176_50406);
var map__50185_50410__$1 = (((((!((map__50185_50409 == null))))?(((((map__50185_50409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50185_50409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50185_50409):map__50185_50409);
var w_50411 = map__50185_50410__$1;
var msg_50412__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185_50410__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185_50410__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185_50410__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185_50410__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50415)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50413),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50414),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50412__$1)].join(''));


var G__50416 = seq__50173_50403;
var G__50417 = chunk__50174_50404;
var G__50418 = count__50175_50405;
var G__50419 = (i__50176_50406 + (1));
seq__50173_50403 = G__50416;
chunk__50174_50404 = G__50417;
count__50175_50405 = G__50418;
i__50176_50406 = G__50419;
continue;
} else {
var temp__5735__auto___50420 = cljs.core.seq(seq__50173_50403);
if(temp__5735__auto___50420){
var seq__50173_50421__$1 = temp__5735__auto___50420;
if(cljs.core.chunked_seq_QMARK_(seq__50173_50421__$1)){
var c__4550__auto___50422 = cljs.core.chunk_first(seq__50173_50421__$1);
var G__50423 = cljs.core.chunk_rest(seq__50173_50421__$1);
var G__50424 = c__4550__auto___50422;
var G__50425 = cljs.core.count(c__4550__auto___50422);
var G__50426 = (0);
seq__50173_50403 = G__50423;
chunk__50174_50404 = G__50424;
count__50175_50405 = G__50425;
i__50176_50406 = G__50426;
continue;
} else {
var map__50187_50427 = cljs.core.first(seq__50173_50421__$1);
var map__50187_50428__$1 = (((((!((map__50187_50427 == null))))?(((((map__50187_50427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50187_50427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50187_50427):map__50187_50427);
var w_50429 = map__50187_50428__$1;
var msg_50430__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50187_50428__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50187_50428__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50187_50428__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50187_50428__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50433)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50431),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50432),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50430__$1)].join(''));


var G__50438 = cljs.core.next(seq__50173_50421__$1);
var G__50439 = null;
var G__50440 = (0);
var G__50441 = (0);
seq__50173_50403 = G__50438;
chunk__50174_50404 = G__50439;
count__50175_50405 = G__50440;
i__50176_50406 = G__50441;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__50149_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50149_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__50196){
var map__50200 = p__50196;
var map__50200__$1 = (((((!((map__50200 == null))))?(((((map__50200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50200):map__50200);
var msg = map__50200__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50200__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50206 = cljs.core.seq(updates);
var chunk__50208 = null;
var count__50209 = (0);
var i__50210 = (0);
while(true){
if((i__50210 < count__50209)){
var path = chunk__50208.cljs$core$IIndexed$_nth$arity$2(null,i__50210);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50260_50453 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50263_50454 = null;
var count__50264_50455 = (0);
var i__50265_50456 = (0);
while(true){
if((i__50265_50456 < count__50264_50455)){
var node_50457 = chunk__50263_50454.cljs$core$IIndexed$_nth$arity$2(null,i__50265_50456);
var path_match_50459 = shadow.cljs.devtools.client.browser.match_paths(node_50457.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50459)){
var new_link_50463 = (function (){var G__50270 = node_50457.cloneNode(true);
G__50270.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50459),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50270;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50459], 0));

goog.dom.insertSiblingAfter(new_link_50463,node_50457);

goog.dom.removeNode(node_50457);


var G__50467 = seq__50260_50453;
var G__50468 = chunk__50263_50454;
var G__50469 = count__50264_50455;
var G__50470 = (i__50265_50456 + (1));
seq__50260_50453 = G__50467;
chunk__50263_50454 = G__50468;
count__50264_50455 = G__50469;
i__50265_50456 = G__50470;
continue;
} else {
var G__50471 = seq__50260_50453;
var G__50472 = chunk__50263_50454;
var G__50473 = count__50264_50455;
var G__50474 = (i__50265_50456 + (1));
seq__50260_50453 = G__50471;
chunk__50263_50454 = G__50472;
count__50264_50455 = G__50473;
i__50265_50456 = G__50474;
continue;
}
} else {
var temp__5735__auto___50479 = cljs.core.seq(seq__50260_50453);
if(temp__5735__auto___50479){
var seq__50260_50481__$1 = temp__5735__auto___50479;
if(cljs.core.chunked_seq_QMARK_(seq__50260_50481__$1)){
var c__4550__auto___50484 = cljs.core.chunk_first(seq__50260_50481__$1);
var G__50489 = cljs.core.chunk_rest(seq__50260_50481__$1);
var G__50490 = c__4550__auto___50484;
var G__50491 = cljs.core.count(c__4550__auto___50484);
var G__50492 = (0);
seq__50260_50453 = G__50489;
chunk__50263_50454 = G__50490;
count__50264_50455 = G__50491;
i__50265_50456 = G__50492;
continue;
} else {
var node_50495 = cljs.core.first(seq__50260_50481__$1);
var path_match_50498 = shadow.cljs.devtools.client.browser.match_paths(node_50495.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50498)){
var new_link_50500 = (function (){var G__50272 = node_50495.cloneNode(true);
G__50272.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50498),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50272;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50498], 0));

goog.dom.insertSiblingAfter(new_link_50500,node_50495);

goog.dom.removeNode(node_50495);


var G__50505 = cljs.core.next(seq__50260_50481__$1);
var G__50506 = null;
var G__50507 = (0);
var G__50508 = (0);
seq__50260_50453 = G__50505;
chunk__50263_50454 = G__50506;
count__50264_50455 = G__50507;
i__50265_50456 = G__50508;
continue;
} else {
var G__50509 = cljs.core.next(seq__50260_50481__$1);
var G__50510 = null;
var G__50511 = (0);
var G__50512 = (0);
seq__50260_50453 = G__50509;
chunk__50263_50454 = G__50510;
count__50264_50455 = G__50511;
i__50265_50456 = G__50512;
continue;
}
}
} else {
}
}
break;
}


var G__50516 = seq__50206;
var G__50517 = chunk__50208;
var G__50518 = count__50209;
var G__50519 = (i__50210 + (1));
seq__50206 = G__50516;
chunk__50208 = G__50517;
count__50209 = G__50518;
i__50210 = G__50519;
continue;
} else {
var G__50520 = seq__50206;
var G__50521 = chunk__50208;
var G__50522 = count__50209;
var G__50523 = (i__50210 + (1));
seq__50206 = G__50520;
chunk__50208 = G__50521;
count__50209 = G__50522;
i__50210 = G__50523;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50206);
if(temp__5735__auto__){
var seq__50206__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50206__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50206__$1);
var G__50524 = cljs.core.chunk_rest(seq__50206__$1);
var G__50525 = c__4550__auto__;
var G__50526 = cljs.core.count(c__4550__auto__);
var G__50527 = (0);
seq__50206 = G__50524;
chunk__50208 = G__50525;
count__50209 = G__50526;
i__50210 = G__50527;
continue;
} else {
var path = cljs.core.first(seq__50206__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50273_50528 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50276_50529 = null;
var count__50277_50530 = (0);
var i__50278_50531 = (0);
while(true){
if((i__50278_50531 < count__50277_50530)){
var node_50532 = chunk__50276_50529.cljs$core$IIndexed$_nth$arity$2(null,i__50278_50531);
var path_match_50533 = shadow.cljs.devtools.client.browser.match_paths(node_50532.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50533)){
var new_link_50534 = (function (){var G__50285 = node_50532.cloneNode(true);
G__50285.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50533),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50285;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50533], 0));

goog.dom.insertSiblingAfter(new_link_50534,node_50532);

goog.dom.removeNode(node_50532);


var G__50535 = seq__50273_50528;
var G__50536 = chunk__50276_50529;
var G__50537 = count__50277_50530;
var G__50538 = (i__50278_50531 + (1));
seq__50273_50528 = G__50535;
chunk__50276_50529 = G__50536;
count__50277_50530 = G__50537;
i__50278_50531 = G__50538;
continue;
} else {
var G__50539 = seq__50273_50528;
var G__50540 = chunk__50276_50529;
var G__50541 = count__50277_50530;
var G__50542 = (i__50278_50531 + (1));
seq__50273_50528 = G__50539;
chunk__50276_50529 = G__50540;
count__50277_50530 = G__50541;
i__50278_50531 = G__50542;
continue;
}
} else {
var temp__5735__auto___50543__$1 = cljs.core.seq(seq__50273_50528);
if(temp__5735__auto___50543__$1){
var seq__50273_50545__$1 = temp__5735__auto___50543__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50273_50545__$1)){
var c__4550__auto___50546 = cljs.core.chunk_first(seq__50273_50545__$1);
var G__50547 = cljs.core.chunk_rest(seq__50273_50545__$1);
var G__50548 = c__4550__auto___50546;
var G__50549 = cljs.core.count(c__4550__auto___50546);
var G__50550 = (0);
seq__50273_50528 = G__50547;
chunk__50276_50529 = G__50548;
count__50277_50530 = G__50549;
i__50278_50531 = G__50550;
continue;
} else {
var node_50552 = cljs.core.first(seq__50273_50545__$1);
var path_match_50554 = shadow.cljs.devtools.client.browser.match_paths(node_50552.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50554)){
var new_link_50555 = (function (){var G__50291 = node_50552.cloneNode(true);
G__50291.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50554),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50291;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50554], 0));

goog.dom.insertSiblingAfter(new_link_50555,node_50552);

goog.dom.removeNode(node_50552);


var G__50557 = cljs.core.next(seq__50273_50545__$1);
var G__50558 = null;
var G__50559 = (0);
var G__50560 = (0);
seq__50273_50528 = G__50557;
chunk__50276_50529 = G__50558;
count__50277_50530 = G__50559;
i__50278_50531 = G__50560;
continue;
} else {
var G__50561 = cljs.core.next(seq__50273_50545__$1);
var G__50562 = null;
var G__50563 = (0);
var G__50564 = (0);
seq__50273_50528 = G__50561;
chunk__50276_50529 = G__50562;
count__50277_50530 = G__50563;
i__50278_50531 = G__50564;
continue;
}
}
} else {
}
}
break;
}


var G__50565 = cljs.core.next(seq__50206__$1);
var G__50566 = null;
var G__50567 = (0);
var G__50568 = (0);
seq__50206 = G__50565;
chunk__50208 = G__50566;
count__50209 = G__50567;
i__50210 = G__50568;
continue;
} else {
var G__50569 = cljs.core.next(seq__50206__$1);
var G__50570 = null;
var G__50571 = (0);
var G__50572 = (0);
seq__50206 = G__50569;
chunk__50208 = G__50570;
count__50209 = G__50571;
i__50210 = G__50572;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__50296){
var map__50297 = p__50296;
var map__50297__$1 = (((((!((map__50297 == null))))?(((((map__50297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50297):map__50297);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50297__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50297__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__50318,done){
var map__50319 = p__50318;
var map__50319__$1 = (((((!((map__50319 == null))))?(((((map__50319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50319):map__50319);
var msg = map__50319__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50319__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50319__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50319__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50319__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50322){
var map__50323 = p__50322;
var map__50323__$1 = (((((!((map__50323 == null))))?(((((map__50323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50323):map__50323);
var src = map__50323__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50323__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e50326){var e = e50326;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__50328,done){
var map__50329 = p__50328;
var map__50329__$1 = (((((!((map__50329 == null))))?(((((map__50329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50329):map__50329);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50329__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50329__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__50331){
var map__50332 = p__50331;
var map__50332__$1 = (((((!((map__50332 == null))))?(((((map__50332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50332):map__50332);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50332__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50332__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__50334,done){
var map__50335 = p__50334;
var map__50335__$1 = (((((!((map__50335 == null))))?(((((map__50335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50335):map__50335);
var msg = map__50335__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50335__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__50337_50585 = type;
var G__50337_50586__$1 = (((G__50337_50585 instanceof cljs.core.Keyword))?G__50337_50585.fqn:null);
switch (G__50337_50586__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__50340 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__50340.cljs$core$IFn$_invoke$arity$1 ? fexpr__50340.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__50340.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4120__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e50347){var e = e50347;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50592 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50592)){
var s_50593 = temp__5735__auto___50592;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50593.onclose = (function (e){
return null;
}));

s_50593.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4109__auto__ = goog.global.document;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4109__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
