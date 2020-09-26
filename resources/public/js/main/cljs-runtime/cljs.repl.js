goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__63262){
var map__63263 = p__63262;
var map__63263__$1 = (((((!((map__63263 == null))))?(((((map__63263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63263):map__63263);
var m = map__63263__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63263__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63263__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4120__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__63265_63366 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63266_63367 = null;
var count__63267_63368 = (0);
var i__63268_63369 = (0);
while(true){
if((i__63268_63369 < count__63267_63368)){
var f_63370 = chunk__63266_63367.cljs$core$IIndexed$_nth$arity$2(null,i__63268_63369);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_63370], 0));


var G__63371 = seq__63265_63366;
var G__63372 = chunk__63266_63367;
var G__63373 = count__63267_63368;
var G__63374 = (i__63268_63369 + (1));
seq__63265_63366 = G__63371;
chunk__63266_63367 = G__63372;
count__63267_63368 = G__63373;
i__63268_63369 = G__63374;
continue;
} else {
var temp__5735__auto___63375 = cljs.core.seq(seq__63265_63366);
if(temp__5735__auto___63375){
var seq__63265_63376__$1 = temp__5735__auto___63375;
if(cljs.core.chunked_seq_QMARK_(seq__63265_63376__$1)){
var c__4550__auto___63377 = cljs.core.chunk_first(seq__63265_63376__$1);
var G__63378 = cljs.core.chunk_rest(seq__63265_63376__$1);
var G__63379 = c__4550__auto___63377;
var G__63380 = cljs.core.count(c__4550__auto___63377);
var G__63381 = (0);
seq__63265_63366 = G__63378;
chunk__63266_63367 = G__63379;
count__63267_63368 = G__63380;
i__63268_63369 = G__63381;
continue;
} else {
var f_63382 = cljs.core.first(seq__63265_63376__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_63382], 0));


var G__63383 = cljs.core.next(seq__63265_63376__$1);
var G__63384 = null;
var G__63385 = (0);
var G__63386 = (0);
seq__63265_63366 = G__63383;
chunk__63266_63367 = G__63384;
count__63267_63368 = G__63385;
i__63268_63369 = G__63386;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_63387 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_63387], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_63387)))?cljs.core.second(arglists_63387):arglists_63387)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__63269_63388 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63270_63389 = null;
var count__63271_63390 = (0);
var i__63272_63391 = (0);
while(true){
if((i__63272_63391 < count__63271_63390)){
var vec__63283_63392 = chunk__63270_63389.cljs$core$IIndexed$_nth$arity$2(null,i__63272_63391);
var name_63393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63283_63392,(0),null);
var map__63286_63394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63283_63392,(1),null);
var map__63286_63395__$1 = (((((!((map__63286_63394 == null))))?(((((map__63286_63394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63286_63394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63286_63394):map__63286_63394);
var doc_63396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63286_63395__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63286_63395__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_63393], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_63397], 0));

if(cljs.core.truth_(doc_63396)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_63396], 0));
} else {
}


var G__63398 = seq__63269_63388;
var G__63399 = chunk__63270_63389;
var G__63400 = count__63271_63390;
var G__63401 = (i__63272_63391 + (1));
seq__63269_63388 = G__63398;
chunk__63270_63389 = G__63399;
count__63271_63390 = G__63400;
i__63272_63391 = G__63401;
continue;
} else {
var temp__5735__auto___63402 = cljs.core.seq(seq__63269_63388);
if(temp__5735__auto___63402){
var seq__63269_63403__$1 = temp__5735__auto___63402;
if(cljs.core.chunked_seq_QMARK_(seq__63269_63403__$1)){
var c__4550__auto___63404 = cljs.core.chunk_first(seq__63269_63403__$1);
var G__63405 = cljs.core.chunk_rest(seq__63269_63403__$1);
var G__63406 = c__4550__auto___63404;
var G__63407 = cljs.core.count(c__4550__auto___63404);
var G__63408 = (0);
seq__63269_63388 = G__63405;
chunk__63270_63389 = G__63406;
count__63271_63390 = G__63407;
i__63272_63391 = G__63408;
continue;
} else {
var vec__63288_63409 = cljs.core.first(seq__63269_63403__$1);
var name_63410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63288_63409,(0),null);
var map__63291_63411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63288_63409,(1),null);
var map__63291_63412__$1 = (((((!((map__63291_63411 == null))))?(((((map__63291_63411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63291_63411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63291_63411):map__63291_63411);
var doc_63413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63291_63412__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63291_63412__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_63410], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_63414], 0));

if(cljs.core.truth_(doc_63413)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_63413], 0));
} else {
}


var G__63415 = cljs.core.next(seq__63269_63403__$1);
var G__63416 = null;
var G__63417 = (0);
var G__63418 = (0);
seq__63269_63388 = G__63415;
chunk__63270_63389 = G__63416;
count__63271_63390 = G__63417;
i__63272_63391 = G__63418;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__63293 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__63294 = null;
var count__63295 = (0);
var i__63296 = (0);
while(true){
if((i__63296 < count__63295)){
var role = chunk__63294.cljs$core$IIndexed$_nth$arity$2(null,i__63296);
var temp__5735__auto___63419__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___63419__$1)){
var spec_63420 = temp__5735__auto___63419__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_63420)], 0));
} else {
}


var G__63421 = seq__63293;
var G__63422 = chunk__63294;
var G__63423 = count__63295;
var G__63424 = (i__63296 + (1));
seq__63293 = G__63421;
chunk__63294 = G__63422;
count__63295 = G__63423;
i__63296 = G__63424;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__63293);
if(temp__5735__auto____$1){
var seq__63293__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__63293__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63293__$1);
var G__63425 = cljs.core.chunk_rest(seq__63293__$1);
var G__63426 = c__4550__auto__;
var G__63427 = cljs.core.count(c__4550__auto__);
var G__63428 = (0);
seq__63293 = G__63425;
chunk__63294 = G__63426;
count__63295 = G__63427;
i__63296 = G__63428;
continue;
} else {
var role = cljs.core.first(seq__63293__$1);
var temp__5735__auto___63429__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___63429__$2)){
var spec_63430 = temp__5735__auto___63429__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_63430)], 0));
} else {
}


var G__63431 = cljs.core.next(seq__63293__$1);
var G__63432 = null;
var G__63433 = (0);
var G__63434 = (0);
seq__63293 = G__63431;
chunk__63294 = G__63432;
count__63295 = G__63433;
i__63296 = G__63434;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__63435 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__63436 = cljs.core.ex_cause(t);
via = G__63435;
t = G__63436;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__63299 = datafied_throwable;
var map__63299__$1 = (((((!((map__63299 == null))))?(((((map__63299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63299):map__63299);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63299__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63299__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63299__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__63300 = cljs.core.last(via);
var map__63300__$1 = (((((!((map__63300 == null))))?(((((map__63300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63300):map__63300);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__63301 = data;
var map__63301__$1 = (((((!((map__63301 == null))))?(((((map__63301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63301):map__63301);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63301__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63301__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63301__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__63302 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__63302__$1 = (((((!((map__63302 == null))))?(((((map__63302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63302):map__63302);
var top_data = map__63302__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63302__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__63307 = phase;
var G__63307__$1 = (((G__63307 instanceof cljs.core.Keyword))?G__63307.fqn:null);
switch (G__63307__$1) {
case "read-source":
var map__63308 = data;
var map__63308__$1 = (((((!((map__63308 == null))))?(((((map__63308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63308):map__63308);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63308__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63308__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__63310 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__63310__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63310,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__63310);
var G__63310__$2 = (cljs.core.truth_((function (){var fexpr__63311 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63311.cljs$core$IFn$_invoke$arity$1 ? fexpr__63311.cljs$core$IFn$_invoke$arity$1(source) : fexpr__63311.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63310__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__63310__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63310__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__63310__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__63312 = top_data;
var G__63312__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63312,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__63312);
var G__63312__$2 = (cljs.core.truth_((function (){var fexpr__63313 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63313.cljs$core$IFn$_invoke$arity$1 ? fexpr__63313.cljs$core$IFn$_invoke$arity$1(source) : fexpr__63313.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63312__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__63312__$1);
var G__63312__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63312__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__63312__$2);
var G__63312__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63312__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__63312__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63312__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__63312__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__63314 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63314,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63314,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63314,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63314,(3),null);
var G__63317 = top_data;
var G__63317__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63317,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__63317);
var G__63317__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63317__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__63317__$1);
var G__63317__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63317__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__63317__$2);
var G__63317__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63317__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__63317__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63317__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__63317__$4;
}

break;
case "execution":
var vec__63318 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63318,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63318,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63318,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63318,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63298_SHARP_){
var or__4120__auto__ = (p1__63298_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
var fexpr__63322 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63322.cljs$core$IFn$_invoke$arity$1 ? fexpr__63322.cljs$core$IFn$_invoke$arity$1(p1__63298_SHARP_) : fexpr__63322.call(null,p1__63298_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__63323 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__63323__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63323,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__63323);
var G__63323__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63323__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__63323__$1);
var G__63323__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63323__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__63323__$2);
var G__63323__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63323__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__63323__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63323__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__63323__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63307__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__63326){
var map__63327 = p__63326;
var map__63327__$1 = (((((!((map__63327 == null))))?(((((map__63327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63327):map__63327);
var triage_data = map__63327__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63327__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63327__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63327__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63327__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63327__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63327__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63327__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63327__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = source;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = line;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4120__auto__ = class$;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__63329 = phase;
var G__63329__$1 = (((G__63329 instanceof cljs.core.Keyword))?G__63329.fqn:null);
switch (G__63329__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__63330 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__63331 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63332 = loc;
var G__63333 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__63334_63439 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__63335_63440 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__63336_63441 = true;
var _STAR_print_fn_STAR__temp_val__63337_63442 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63336_63441);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63337_63442);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63324_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63324_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63335_63440);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63334_63439);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__63330,G__63331,G__63332,G__63333) : format.call(null,G__63330,G__63331,G__63332,G__63333));

break;
case "macroexpansion":
var G__63338 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__63339 = cause_type;
var G__63340 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63341 = loc;
var G__63342 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63338,G__63339,G__63340,G__63341,G__63342) : format.call(null,G__63338,G__63339,G__63340,G__63341,G__63342));

break;
case "compile-syntax-check":
var G__63343 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__63344 = cause_type;
var G__63345 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63346 = loc;
var G__63347 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63343,G__63344,G__63345,G__63346,G__63347) : format.call(null,G__63343,G__63344,G__63345,G__63346,G__63347));

break;
case "compilation":
var G__63348 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__63349 = cause_type;
var G__63350 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63351 = loc;
var G__63352 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63348,G__63349,G__63350,G__63351,G__63352) : format.call(null,G__63348,G__63349,G__63350,G__63351,G__63352));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__63353 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__63354 = symbol;
var G__63355 = loc;
var G__63356 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__63357_63443 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__63358_63444 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__63359_63445 = true;
var _STAR_print_fn_STAR__temp_val__63360_63446 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63359_63445);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63360_63446);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63325_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63325_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63358_63444);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63357_63443);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__63353,G__63354,G__63355,G__63356) : format.call(null,G__63353,G__63354,G__63355,G__63356));
} else {
var G__63361 = "Execution error%s at %s(%s).\n%s\n";
var G__63362 = cause_type;
var G__63363 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63364 = loc;
var G__63365 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63361,G__63362,G__63363,G__63364,G__63365) : format.call(null,G__63361,G__63362,G__63363,G__63364,G__63365));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63329__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
