goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48066 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48066(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48067 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48067(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47372 = coll;
var G__47373 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47372,G__47373) : shadow.dom.lazy_native_coll_seq.call(null,G__47372,G__47373));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4120__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47407 = arguments.length;
switch (G__47407) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47423 = arguments.length;
switch (G__47423) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47454 = arguments.length;
switch (G__47454) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47469 = arguments.length;
switch (G__47469) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47483 = arguments.length;
switch (G__47483) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47494 = arguments.length;
switch (G__47494) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47503){if((e47503 instanceof Object)){
var e = e47503;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47503;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47504 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47505 = null;
var count__47506 = (0);
var i__47507 = (0);
while(true){
if((i__47507 < count__47506)){
var el = chunk__47505.cljs$core$IIndexed$_nth$arity$2(null,i__47507);
var handler_48079__$1 = ((function (seq__47504,chunk__47505,count__47506,i__47507,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47504,chunk__47505,count__47506,i__47507,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48079__$1);


var G__48081 = seq__47504;
var G__48082 = chunk__47505;
var G__48083 = count__47506;
var G__48084 = (i__47507 + (1));
seq__47504 = G__48081;
chunk__47505 = G__48082;
count__47506 = G__48083;
i__47507 = G__48084;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47504);
if(temp__5735__auto__){
var seq__47504__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47504__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47504__$1);
var G__48088 = cljs.core.chunk_rest(seq__47504__$1);
var G__48089 = c__4550__auto__;
var G__48090 = cljs.core.count(c__4550__auto__);
var G__48091 = (0);
seq__47504 = G__48088;
chunk__47505 = G__48089;
count__47506 = G__48090;
i__47507 = G__48091;
continue;
} else {
var el = cljs.core.first(seq__47504__$1);
var handler_48092__$1 = ((function (seq__47504,chunk__47505,count__47506,i__47507,el,seq__47504__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47504,chunk__47505,count__47506,i__47507,el,seq__47504__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48092__$1);


var G__48094 = cljs.core.next(seq__47504__$1);
var G__48095 = null;
var G__48096 = (0);
var G__48097 = (0);
seq__47504 = G__48094;
chunk__47505 = G__48095;
count__47506 = G__48096;
i__47507 = G__48097;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47528 = arguments.length;
switch (G__47528) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47536 = cljs.core.seq(events);
var chunk__47537 = null;
var count__47538 = (0);
var i__47539 = (0);
while(true){
if((i__47539 < count__47538)){
var vec__47552 = chunk__47537.cljs$core$IIndexed$_nth$arity$2(null,i__47539);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47552,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47552,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48099 = seq__47536;
var G__48100 = chunk__47537;
var G__48101 = count__47538;
var G__48102 = (i__47539 + (1));
seq__47536 = G__48099;
chunk__47537 = G__48100;
count__47538 = G__48101;
i__47539 = G__48102;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47536);
if(temp__5735__auto__){
var seq__47536__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47536__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47536__$1);
var G__48103 = cljs.core.chunk_rest(seq__47536__$1);
var G__48104 = c__4550__auto__;
var G__48105 = cljs.core.count(c__4550__auto__);
var G__48106 = (0);
seq__47536 = G__48103;
chunk__47537 = G__48104;
count__47538 = G__48105;
i__47539 = G__48106;
continue;
} else {
var vec__47562 = cljs.core.first(seq__47536__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47562,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47562,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48107 = cljs.core.next(seq__47536__$1);
var G__48108 = null;
var G__48109 = (0);
var G__48110 = (0);
seq__47536 = G__48107;
chunk__47537 = G__48108;
count__47538 = G__48109;
i__47539 = G__48110;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47568 = cljs.core.seq(styles);
var chunk__47569 = null;
var count__47570 = (0);
var i__47571 = (0);
while(true){
if((i__47571 < count__47570)){
var vec__47592 = chunk__47569.cljs$core$IIndexed$_nth$arity$2(null,i__47571);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47592,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47592,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48111 = seq__47568;
var G__48112 = chunk__47569;
var G__48113 = count__47570;
var G__48114 = (i__47571 + (1));
seq__47568 = G__48111;
chunk__47569 = G__48112;
count__47570 = G__48113;
i__47571 = G__48114;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47568);
if(temp__5735__auto__){
var seq__47568__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47568__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47568__$1);
var G__48115 = cljs.core.chunk_rest(seq__47568__$1);
var G__48116 = c__4550__auto__;
var G__48117 = cljs.core.count(c__4550__auto__);
var G__48118 = (0);
seq__47568 = G__48115;
chunk__47569 = G__48116;
count__47570 = G__48117;
i__47571 = G__48118;
continue;
} else {
var vec__47601 = cljs.core.first(seq__47568__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47601,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47601,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48119 = cljs.core.next(seq__47568__$1);
var G__48120 = null;
var G__48121 = (0);
var G__48122 = (0);
seq__47568 = G__48119;
chunk__47569 = G__48120;
count__47570 = G__48121;
i__47571 = G__48122;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47608_48123 = key;
var G__47608_48124__$1 = (((G__47608_48123 instanceof cljs.core.Keyword))?G__47608_48123.fqn:null);
switch (G__47608_48124__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48126 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_48126,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_48126,"aria-");
}
})())){
el.setAttribute(ks_48126,value);
} else {
(el[ks_48126] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47633){
var map__47634 = p__47633;
var map__47634__$1 = (((((!((map__47634 == null))))?(((((map__47634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47634):map__47634);
var props = map__47634__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47634__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47636 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47636,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47636,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47636,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47640 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47640,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47640;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47651 = arguments.length;
switch (G__47651) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47666){
var vec__47669 = p__47666;
var seq__47670 = cljs.core.seq(vec__47669);
var first__47671 = cljs.core.first(seq__47670);
var seq__47670__$1 = cljs.core.next(seq__47670);
var nn = first__47671;
var first__47671__$1 = cljs.core.first(seq__47670__$1);
var seq__47670__$2 = cljs.core.next(seq__47670__$1);
var np = first__47671__$1;
var nc = seq__47670__$2;
var node = vec__47669;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47674 = nn;
var G__47675 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47674,G__47675) : create_fn.call(null,G__47674,G__47675));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47676 = nn;
var G__47677 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47676,G__47677) : create_fn.call(null,G__47676,G__47677));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47681 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47681,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47681,(1),null);
var seq__47684_48133 = cljs.core.seq(node_children);
var chunk__47685_48134 = null;
var count__47686_48135 = (0);
var i__47687_48136 = (0);
while(true){
if((i__47687_48136 < count__47686_48135)){
var child_struct_48137 = chunk__47685_48134.cljs$core$IIndexed$_nth$arity$2(null,i__47687_48136);
var children_48138 = shadow.dom.dom_node(child_struct_48137);
if(cljs.core.seq_QMARK_(children_48138)){
var seq__47717_48139 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48138));
var chunk__47719_48140 = null;
var count__47720_48141 = (0);
var i__47721_48142 = (0);
while(true){
if((i__47721_48142 < count__47720_48141)){
var child_48145 = chunk__47719_48140.cljs$core$IIndexed$_nth$arity$2(null,i__47721_48142);
if(cljs.core.truth_(child_48145)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48145);


var G__48146 = seq__47717_48139;
var G__48147 = chunk__47719_48140;
var G__48148 = count__47720_48141;
var G__48149 = (i__47721_48142 + (1));
seq__47717_48139 = G__48146;
chunk__47719_48140 = G__48147;
count__47720_48141 = G__48148;
i__47721_48142 = G__48149;
continue;
} else {
var G__48150 = seq__47717_48139;
var G__48151 = chunk__47719_48140;
var G__48152 = count__47720_48141;
var G__48153 = (i__47721_48142 + (1));
seq__47717_48139 = G__48150;
chunk__47719_48140 = G__48151;
count__47720_48141 = G__48152;
i__47721_48142 = G__48153;
continue;
}
} else {
var temp__5735__auto___48154 = cljs.core.seq(seq__47717_48139);
if(temp__5735__auto___48154){
var seq__47717_48155__$1 = temp__5735__auto___48154;
if(cljs.core.chunked_seq_QMARK_(seq__47717_48155__$1)){
var c__4550__auto___48156 = cljs.core.chunk_first(seq__47717_48155__$1);
var G__48157 = cljs.core.chunk_rest(seq__47717_48155__$1);
var G__48158 = c__4550__auto___48156;
var G__48159 = cljs.core.count(c__4550__auto___48156);
var G__48160 = (0);
seq__47717_48139 = G__48157;
chunk__47719_48140 = G__48158;
count__47720_48141 = G__48159;
i__47721_48142 = G__48160;
continue;
} else {
var child_48161 = cljs.core.first(seq__47717_48155__$1);
if(cljs.core.truth_(child_48161)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48161);


var G__48162 = cljs.core.next(seq__47717_48155__$1);
var G__48163 = null;
var G__48164 = (0);
var G__48165 = (0);
seq__47717_48139 = G__48162;
chunk__47719_48140 = G__48163;
count__47720_48141 = G__48164;
i__47721_48142 = G__48165;
continue;
} else {
var G__48166 = cljs.core.next(seq__47717_48155__$1);
var G__48167 = null;
var G__48168 = (0);
var G__48169 = (0);
seq__47717_48139 = G__48166;
chunk__47719_48140 = G__48167;
count__47720_48141 = G__48168;
i__47721_48142 = G__48169;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48138);
}


var G__48171 = seq__47684_48133;
var G__48172 = chunk__47685_48134;
var G__48173 = count__47686_48135;
var G__48174 = (i__47687_48136 + (1));
seq__47684_48133 = G__48171;
chunk__47685_48134 = G__48172;
count__47686_48135 = G__48173;
i__47687_48136 = G__48174;
continue;
} else {
var temp__5735__auto___48175 = cljs.core.seq(seq__47684_48133);
if(temp__5735__auto___48175){
var seq__47684_48177__$1 = temp__5735__auto___48175;
if(cljs.core.chunked_seq_QMARK_(seq__47684_48177__$1)){
var c__4550__auto___48178 = cljs.core.chunk_first(seq__47684_48177__$1);
var G__48179 = cljs.core.chunk_rest(seq__47684_48177__$1);
var G__48180 = c__4550__auto___48178;
var G__48181 = cljs.core.count(c__4550__auto___48178);
var G__48182 = (0);
seq__47684_48133 = G__48179;
chunk__47685_48134 = G__48180;
count__47686_48135 = G__48181;
i__47687_48136 = G__48182;
continue;
} else {
var child_struct_48183 = cljs.core.first(seq__47684_48177__$1);
var children_48184 = shadow.dom.dom_node(child_struct_48183);
if(cljs.core.seq_QMARK_(children_48184)){
var seq__47738_48185 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48184));
var chunk__47740_48186 = null;
var count__47741_48187 = (0);
var i__47742_48188 = (0);
while(true){
if((i__47742_48188 < count__47741_48187)){
var child_48189 = chunk__47740_48186.cljs$core$IIndexed$_nth$arity$2(null,i__47742_48188);
if(cljs.core.truth_(child_48189)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48189);


var G__48190 = seq__47738_48185;
var G__48191 = chunk__47740_48186;
var G__48192 = count__47741_48187;
var G__48193 = (i__47742_48188 + (1));
seq__47738_48185 = G__48190;
chunk__47740_48186 = G__48191;
count__47741_48187 = G__48192;
i__47742_48188 = G__48193;
continue;
} else {
var G__48194 = seq__47738_48185;
var G__48195 = chunk__47740_48186;
var G__48196 = count__47741_48187;
var G__48197 = (i__47742_48188 + (1));
seq__47738_48185 = G__48194;
chunk__47740_48186 = G__48195;
count__47741_48187 = G__48196;
i__47742_48188 = G__48197;
continue;
}
} else {
var temp__5735__auto___48198__$1 = cljs.core.seq(seq__47738_48185);
if(temp__5735__auto___48198__$1){
var seq__47738_48201__$1 = temp__5735__auto___48198__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47738_48201__$1)){
var c__4550__auto___48203 = cljs.core.chunk_first(seq__47738_48201__$1);
var G__48204 = cljs.core.chunk_rest(seq__47738_48201__$1);
var G__48205 = c__4550__auto___48203;
var G__48206 = cljs.core.count(c__4550__auto___48203);
var G__48207 = (0);
seq__47738_48185 = G__48204;
chunk__47740_48186 = G__48205;
count__47741_48187 = G__48206;
i__47742_48188 = G__48207;
continue;
} else {
var child_48209 = cljs.core.first(seq__47738_48201__$1);
if(cljs.core.truth_(child_48209)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48209);


var G__48210 = cljs.core.next(seq__47738_48201__$1);
var G__48211 = null;
var G__48212 = (0);
var G__48213 = (0);
seq__47738_48185 = G__48210;
chunk__47740_48186 = G__48211;
count__47741_48187 = G__48212;
i__47742_48188 = G__48213;
continue;
} else {
var G__48214 = cljs.core.next(seq__47738_48201__$1);
var G__48215 = null;
var G__48216 = (0);
var G__48217 = (0);
seq__47738_48185 = G__48214;
chunk__47740_48186 = G__48215;
count__47741_48187 = G__48216;
i__47742_48188 = G__48217;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48184);
}


var G__48218 = cljs.core.next(seq__47684_48177__$1);
var G__48219 = null;
var G__48220 = (0);
var G__48222 = (0);
seq__47684_48133 = G__48218;
chunk__47685_48134 = G__48219;
count__47686_48135 = G__48220;
i__47687_48136 = G__48222;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47783 = cljs.core.seq(node);
var chunk__47785 = null;
var count__47786 = (0);
var i__47787 = (0);
while(true){
if((i__47787 < count__47786)){
var n = chunk__47785.cljs$core$IIndexed$_nth$arity$2(null,i__47787);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48223 = seq__47783;
var G__48224 = chunk__47785;
var G__48225 = count__47786;
var G__48226 = (i__47787 + (1));
seq__47783 = G__48223;
chunk__47785 = G__48224;
count__47786 = G__48225;
i__47787 = G__48226;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47783);
if(temp__5735__auto__){
var seq__47783__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47783__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47783__$1);
var G__48227 = cljs.core.chunk_rest(seq__47783__$1);
var G__48228 = c__4550__auto__;
var G__48229 = cljs.core.count(c__4550__auto__);
var G__48230 = (0);
seq__47783 = G__48227;
chunk__47785 = G__48228;
count__47786 = G__48229;
i__47787 = G__48230;
continue;
} else {
var n = cljs.core.first(seq__47783__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48234 = cljs.core.next(seq__47783__$1);
var G__48235 = null;
var G__48236 = (0);
var G__48237 = (0);
seq__47783 = G__48234;
chunk__47785 = G__48235;
count__47786 = G__48236;
i__47787 = G__48237;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47796 = arguments.length;
switch (G__47796) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47806 = arguments.length;
switch (G__47806) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47819 = arguments.length;
switch (G__47819) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4120__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48253 = arguments.length;
var i__4731__auto___48254 = (0);
while(true){
if((i__4731__auto___48254 < len__4730__auto___48253)){
args__4736__auto__.push((arguments[i__4731__auto___48254]));

var G__48256 = (i__4731__auto___48254 + (1));
i__4731__auto___48254 = G__48256;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47821_48257 = cljs.core.seq(nodes);
var chunk__47822_48258 = null;
var count__47823_48259 = (0);
var i__47824_48260 = (0);
while(true){
if((i__47824_48260 < count__47823_48259)){
var node_48261 = chunk__47822_48258.cljs$core$IIndexed$_nth$arity$2(null,i__47824_48260);
fragment.appendChild(shadow.dom._to_dom(node_48261));


var G__48262 = seq__47821_48257;
var G__48263 = chunk__47822_48258;
var G__48264 = count__47823_48259;
var G__48265 = (i__47824_48260 + (1));
seq__47821_48257 = G__48262;
chunk__47822_48258 = G__48263;
count__47823_48259 = G__48264;
i__47824_48260 = G__48265;
continue;
} else {
var temp__5735__auto___48266 = cljs.core.seq(seq__47821_48257);
if(temp__5735__auto___48266){
var seq__47821_48268__$1 = temp__5735__auto___48266;
if(cljs.core.chunked_seq_QMARK_(seq__47821_48268__$1)){
var c__4550__auto___48269 = cljs.core.chunk_first(seq__47821_48268__$1);
var G__48271 = cljs.core.chunk_rest(seq__47821_48268__$1);
var G__48272 = c__4550__auto___48269;
var G__48273 = cljs.core.count(c__4550__auto___48269);
var G__48274 = (0);
seq__47821_48257 = G__48271;
chunk__47822_48258 = G__48272;
count__47823_48259 = G__48273;
i__47824_48260 = G__48274;
continue;
} else {
var node_48276 = cljs.core.first(seq__47821_48268__$1);
fragment.appendChild(shadow.dom._to_dom(node_48276));


var G__48277 = cljs.core.next(seq__47821_48268__$1);
var G__48278 = null;
var G__48279 = (0);
var G__48280 = (0);
seq__47821_48257 = G__48277;
chunk__47822_48258 = G__48278;
count__47823_48259 = G__48279;
i__47824_48260 = G__48280;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47820){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47820));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47826_48281 = cljs.core.seq(scripts);
var chunk__47827_48282 = null;
var count__47828_48283 = (0);
var i__47829_48284 = (0);
while(true){
if((i__47829_48284 < count__47828_48283)){
var vec__47839_48285 = chunk__47827_48282.cljs$core$IIndexed$_nth$arity$2(null,i__47829_48284);
var script_tag_48286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47839_48285,(0),null);
var script_body_48287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47839_48285,(1),null);
eval(script_body_48287);


var G__48289 = seq__47826_48281;
var G__48290 = chunk__47827_48282;
var G__48291 = count__47828_48283;
var G__48292 = (i__47829_48284 + (1));
seq__47826_48281 = G__48289;
chunk__47827_48282 = G__48290;
count__47828_48283 = G__48291;
i__47829_48284 = G__48292;
continue;
} else {
var temp__5735__auto___48293 = cljs.core.seq(seq__47826_48281);
if(temp__5735__auto___48293){
var seq__47826_48294__$1 = temp__5735__auto___48293;
if(cljs.core.chunked_seq_QMARK_(seq__47826_48294__$1)){
var c__4550__auto___48295 = cljs.core.chunk_first(seq__47826_48294__$1);
var G__48296 = cljs.core.chunk_rest(seq__47826_48294__$1);
var G__48297 = c__4550__auto___48295;
var G__48298 = cljs.core.count(c__4550__auto___48295);
var G__48299 = (0);
seq__47826_48281 = G__48296;
chunk__47827_48282 = G__48297;
count__47828_48283 = G__48298;
i__47829_48284 = G__48299;
continue;
} else {
var vec__47844_48300 = cljs.core.first(seq__47826_48294__$1);
var script_tag_48301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47844_48300,(0),null);
var script_body_48302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47844_48300,(1),null);
eval(script_body_48302);


var G__48303 = cljs.core.next(seq__47826_48294__$1);
var G__48304 = null;
var G__48305 = (0);
var G__48306 = (0);
seq__47826_48281 = G__48303;
chunk__47827_48282 = G__48304;
count__47828_48283 = G__48305;
i__47829_48284 = G__48306;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47848){
var vec__47850 = p__47848;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47850,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47850,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47858 = arguments.length;
switch (G__47858) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47870 = cljs.core.seq(style_keys);
var chunk__47871 = null;
var count__47872 = (0);
var i__47873 = (0);
while(true){
if((i__47873 < count__47872)){
var it = chunk__47871.cljs$core$IIndexed$_nth$arity$2(null,i__47873);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48317 = seq__47870;
var G__48318 = chunk__47871;
var G__48319 = count__47872;
var G__48320 = (i__47873 + (1));
seq__47870 = G__48317;
chunk__47871 = G__48318;
count__47872 = G__48319;
i__47873 = G__48320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47870);
if(temp__5735__auto__){
var seq__47870__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47870__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47870__$1);
var G__48321 = cljs.core.chunk_rest(seq__47870__$1);
var G__48322 = c__4550__auto__;
var G__48323 = cljs.core.count(c__4550__auto__);
var G__48324 = (0);
seq__47870 = G__48321;
chunk__47871 = G__48322;
count__47872 = G__48323;
i__47873 = G__48324;
continue;
} else {
var it = cljs.core.first(seq__47870__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48325 = cljs.core.next(seq__47870__$1);
var G__48326 = null;
var G__48327 = (0);
var G__48328 = (0);
seq__47870 = G__48325;
chunk__47871 = G__48326;
count__47872 = G__48327;
i__47873 = G__48328;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k47879,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__47896 = k47879;
var G__47896__$1 = (((G__47896 instanceof cljs.core.Keyword))?G__47896.fqn:null);
switch (G__47896__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47879,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__47899){
var vec__47900 = p__47899;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47900,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47900,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47878){
var self__ = this;
var G__47878__$1 = this;
return (new cljs.core.RecordIter((0),G__47878__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47881,other47882){
var self__ = this;
var this47881__$1 = this;
return (((!((other47882 == null)))) && ((this47881__$1.constructor === other47882.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47881__$1.x,other47882.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47881__$1.y,other47882.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47881__$1.__extmap,other47882.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__47878){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__47918 = cljs.core.keyword_identical_QMARK_;
var expr__47919 = k__4382__auto__;
if(cljs.core.truth_((pred__47918.cljs$core$IFn$_invoke$arity$2 ? pred__47918.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47919) : pred__47918.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47919)))){
return (new shadow.dom.Coordinate(G__47878,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47918.cljs$core$IFn$_invoke$arity$2 ? pred__47918.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47919) : pred__47918.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47919)))){
return (new shadow.dom.Coordinate(self__.x,G__47878,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__47878),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__47878){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47878,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47889){
var extmap__4413__auto__ = (function (){var G__47935 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47889,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47889)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47935);
} else {
return G__47935;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47889),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47889),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k47944,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__47953 = k47944;
var G__47953__$1 = (((G__47953 instanceof cljs.core.Keyword))?G__47953.fqn:null);
switch (G__47953__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47944,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__47958){
var vec__47959 = p__47958;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47959,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47959,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Size{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47943){
var self__ = this;
var G__47943__$1 = this;
return (new cljs.core.RecordIter((0),G__47943__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47945,other47946){
var self__ = this;
var this47945__$1 = this;
return (((!((other47946 == null)))) && ((this47945__$1.constructor === other47946.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47945__$1.w,other47946.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47945__$1.h,other47946.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47945__$1.__extmap,other47946.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__47943){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__47973 = cljs.core.keyword_identical_QMARK_;
var expr__47974 = k__4382__auto__;
if(cljs.core.truth_((pred__47973.cljs$core$IFn$_invoke$arity$2 ? pred__47973.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47974) : pred__47973.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47974)))){
return (new shadow.dom.Size(G__47943,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47973.cljs$core$IFn$_invoke$arity$2 ? pred__47973.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47974) : pred__47973.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47974)))){
return (new shadow.dom.Size(self__.w,G__47943,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__47943),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__47943){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47943,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47948){
var extmap__4413__auto__ = (function (){var G__47976 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47948,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47948)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47976);
} else {
return G__47976;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47948),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47948),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__48365 = (i + (1));
var G__48366 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48365;
ret = G__48366;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47985){
var vec__47987 = p__47985;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47987,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47987,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47991 = arguments.length;
switch (G__47991) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48371 = ps;
var G__48372 = (i + (1));
el__$1 = G__48371;
i = G__48372;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47993 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47993,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47993,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47993,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47996_48373 = cljs.core.seq(props);
var chunk__47997_48374 = null;
var count__47998_48375 = (0);
var i__47999_48376 = (0);
while(true){
if((i__47999_48376 < count__47998_48375)){
var vec__48006_48377 = chunk__47997_48374.cljs$core$IIndexed$_nth$arity$2(null,i__47999_48376);
var k_48378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48006_48377,(0),null);
var v_48379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48006_48377,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48378);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48378),v_48379);


var G__48380 = seq__47996_48373;
var G__48381 = chunk__47997_48374;
var G__48382 = count__47998_48375;
var G__48383 = (i__47999_48376 + (1));
seq__47996_48373 = G__48380;
chunk__47997_48374 = G__48381;
count__47998_48375 = G__48382;
i__47999_48376 = G__48383;
continue;
} else {
var temp__5735__auto___48384 = cljs.core.seq(seq__47996_48373);
if(temp__5735__auto___48384){
var seq__47996_48385__$1 = temp__5735__auto___48384;
if(cljs.core.chunked_seq_QMARK_(seq__47996_48385__$1)){
var c__4550__auto___48386 = cljs.core.chunk_first(seq__47996_48385__$1);
var G__48387 = cljs.core.chunk_rest(seq__47996_48385__$1);
var G__48388 = c__4550__auto___48386;
var G__48389 = cljs.core.count(c__4550__auto___48386);
var G__48390 = (0);
seq__47996_48373 = G__48387;
chunk__47997_48374 = G__48388;
count__47998_48375 = G__48389;
i__47999_48376 = G__48390;
continue;
} else {
var vec__48012_48391 = cljs.core.first(seq__47996_48385__$1);
var k_48392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48012_48391,(0),null);
var v_48393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48012_48391,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48392);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48392),v_48393);


var G__48394 = cljs.core.next(seq__47996_48385__$1);
var G__48395 = null;
var G__48396 = (0);
var G__48397 = (0);
seq__47996_48373 = G__48394;
chunk__47997_48374 = G__48395;
count__47998_48375 = G__48396;
i__47999_48376 = G__48397;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48016 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48016,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48016,(1),null);
var seq__48019_48400 = cljs.core.seq(node_children);
var chunk__48021_48401 = null;
var count__48022_48402 = (0);
var i__48023_48403 = (0);
while(true){
if((i__48023_48403 < count__48022_48402)){
var child_struct_48405 = chunk__48021_48401.cljs$core$IIndexed$_nth$arity$2(null,i__48023_48403);
if((!((child_struct_48405 == null)))){
if(typeof child_struct_48405 === 'string'){
var text_48406 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48406),child_struct_48405].join(''));
} else {
var children_48408 = shadow.dom.svg_node(child_struct_48405);
if(cljs.core.seq_QMARK_(children_48408)){
var seq__48037_48409 = cljs.core.seq(children_48408);
var chunk__48039_48410 = null;
var count__48040_48411 = (0);
var i__48041_48412 = (0);
while(true){
if((i__48041_48412 < count__48040_48411)){
var child_48413 = chunk__48039_48410.cljs$core$IIndexed$_nth$arity$2(null,i__48041_48412);
if(cljs.core.truth_(child_48413)){
node.appendChild(child_48413);


var G__48414 = seq__48037_48409;
var G__48415 = chunk__48039_48410;
var G__48416 = count__48040_48411;
var G__48417 = (i__48041_48412 + (1));
seq__48037_48409 = G__48414;
chunk__48039_48410 = G__48415;
count__48040_48411 = G__48416;
i__48041_48412 = G__48417;
continue;
} else {
var G__48418 = seq__48037_48409;
var G__48419 = chunk__48039_48410;
var G__48420 = count__48040_48411;
var G__48421 = (i__48041_48412 + (1));
seq__48037_48409 = G__48418;
chunk__48039_48410 = G__48419;
count__48040_48411 = G__48420;
i__48041_48412 = G__48421;
continue;
}
} else {
var temp__5735__auto___48422 = cljs.core.seq(seq__48037_48409);
if(temp__5735__auto___48422){
var seq__48037_48423__$1 = temp__5735__auto___48422;
if(cljs.core.chunked_seq_QMARK_(seq__48037_48423__$1)){
var c__4550__auto___48424 = cljs.core.chunk_first(seq__48037_48423__$1);
var G__48425 = cljs.core.chunk_rest(seq__48037_48423__$1);
var G__48426 = c__4550__auto___48424;
var G__48427 = cljs.core.count(c__4550__auto___48424);
var G__48428 = (0);
seq__48037_48409 = G__48425;
chunk__48039_48410 = G__48426;
count__48040_48411 = G__48427;
i__48041_48412 = G__48428;
continue;
} else {
var child_48429 = cljs.core.first(seq__48037_48423__$1);
if(cljs.core.truth_(child_48429)){
node.appendChild(child_48429);


var G__48430 = cljs.core.next(seq__48037_48423__$1);
var G__48431 = null;
var G__48432 = (0);
var G__48433 = (0);
seq__48037_48409 = G__48430;
chunk__48039_48410 = G__48431;
count__48040_48411 = G__48432;
i__48041_48412 = G__48433;
continue;
} else {
var G__48434 = cljs.core.next(seq__48037_48423__$1);
var G__48435 = null;
var G__48436 = (0);
var G__48437 = (0);
seq__48037_48409 = G__48434;
chunk__48039_48410 = G__48435;
count__48040_48411 = G__48436;
i__48041_48412 = G__48437;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48408);
}
}


var G__48438 = seq__48019_48400;
var G__48439 = chunk__48021_48401;
var G__48440 = count__48022_48402;
var G__48441 = (i__48023_48403 + (1));
seq__48019_48400 = G__48438;
chunk__48021_48401 = G__48439;
count__48022_48402 = G__48440;
i__48023_48403 = G__48441;
continue;
} else {
var G__48442 = seq__48019_48400;
var G__48443 = chunk__48021_48401;
var G__48444 = count__48022_48402;
var G__48445 = (i__48023_48403 + (1));
seq__48019_48400 = G__48442;
chunk__48021_48401 = G__48443;
count__48022_48402 = G__48444;
i__48023_48403 = G__48445;
continue;
}
} else {
var temp__5735__auto___48446 = cljs.core.seq(seq__48019_48400);
if(temp__5735__auto___48446){
var seq__48019_48447__$1 = temp__5735__auto___48446;
if(cljs.core.chunked_seq_QMARK_(seq__48019_48447__$1)){
var c__4550__auto___48448 = cljs.core.chunk_first(seq__48019_48447__$1);
var G__48449 = cljs.core.chunk_rest(seq__48019_48447__$1);
var G__48450 = c__4550__auto___48448;
var G__48451 = cljs.core.count(c__4550__auto___48448);
var G__48452 = (0);
seq__48019_48400 = G__48449;
chunk__48021_48401 = G__48450;
count__48022_48402 = G__48451;
i__48023_48403 = G__48452;
continue;
} else {
var child_struct_48457 = cljs.core.first(seq__48019_48447__$1);
if((!((child_struct_48457 == null)))){
if(typeof child_struct_48457 === 'string'){
var text_48458 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48458),child_struct_48457].join(''));
} else {
var children_48459 = shadow.dom.svg_node(child_struct_48457);
if(cljs.core.seq_QMARK_(children_48459)){
var seq__48043_48463 = cljs.core.seq(children_48459);
var chunk__48045_48464 = null;
var count__48046_48465 = (0);
var i__48047_48466 = (0);
while(true){
if((i__48047_48466 < count__48046_48465)){
var child_48467 = chunk__48045_48464.cljs$core$IIndexed$_nth$arity$2(null,i__48047_48466);
if(cljs.core.truth_(child_48467)){
node.appendChild(child_48467);


var G__48468 = seq__48043_48463;
var G__48469 = chunk__48045_48464;
var G__48470 = count__48046_48465;
var G__48471 = (i__48047_48466 + (1));
seq__48043_48463 = G__48468;
chunk__48045_48464 = G__48469;
count__48046_48465 = G__48470;
i__48047_48466 = G__48471;
continue;
} else {
var G__48472 = seq__48043_48463;
var G__48473 = chunk__48045_48464;
var G__48474 = count__48046_48465;
var G__48475 = (i__48047_48466 + (1));
seq__48043_48463 = G__48472;
chunk__48045_48464 = G__48473;
count__48046_48465 = G__48474;
i__48047_48466 = G__48475;
continue;
}
} else {
var temp__5735__auto___48476__$1 = cljs.core.seq(seq__48043_48463);
if(temp__5735__auto___48476__$1){
var seq__48043_48477__$1 = temp__5735__auto___48476__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48043_48477__$1)){
var c__4550__auto___48478 = cljs.core.chunk_first(seq__48043_48477__$1);
var G__48479 = cljs.core.chunk_rest(seq__48043_48477__$1);
var G__48480 = c__4550__auto___48478;
var G__48481 = cljs.core.count(c__4550__auto___48478);
var G__48482 = (0);
seq__48043_48463 = G__48479;
chunk__48045_48464 = G__48480;
count__48046_48465 = G__48481;
i__48047_48466 = G__48482;
continue;
} else {
var child_48483 = cljs.core.first(seq__48043_48477__$1);
if(cljs.core.truth_(child_48483)){
node.appendChild(child_48483);


var G__48484 = cljs.core.next(seq__48043_48477__$1);
var G__48485 = null;
var G__48486 = (0);
var G__48487 = (0);
seq__48043_48463 = G__48484;
chunk__48045_48464 = G__48485;
count__48046_48465 = G__48486;
i__48047_48466 = G__48487;
continue;
} else {
var G__48488 = cljs.core.next(seq__48043_48477__$1);
var G__48489 = null;
var G__48490 = (0);
var G__48491 = (0);
seq__48043_48463 = G__48488;
chunk__48045_48464 = G__48489;
count__48046_48465 = G__48490;
i__48047_48466 = G__48491;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48459);
}
}


var G__48492 = cljs.core.next(seq__48019_48447__$1);
var G__48493 = null;
var G__48494 = (0);
var G__48495 = (0);
seq__48019_48400 = G__48492;
chunk__48021_48401 = G__48493;
count__48022_48402 = G__48494;
i__48023_48403 = G__48495;
continue;
} else {
var G__48496 = cljs.core.next(seq__48019_48447__$1);
var G__48497 = null;
var G__48498 = (0);
var G__48499 = (0);
seq__48019_48400 = G__48496;
chunk__48021_48401 = G__48497;
count__48022_48402 = G__48498;
i__48023_48403 = G__48499;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48503 = arguments.length;
var i__4731__auto___48504 = (0);
while(true){
if((i__4731__auto___48504 < len__4730__auto___48503)){
args__4736__auto__.push((arguments[i__4731__auto___48504]));

var G__48506 = (i__4731__auto___48504 + (1));
i__4731__auto___48504 = G__48506;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48049){
var G__48050 = cljs.core.first(seq48049);
var seq48049__$1 = cljs.core.next(seq48049);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48050,seq48049__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48052 = arguments.length;
switch (G__48052) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4109__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4109__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4109__auto__;
}
})())){
var c__45460__auto___48515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_48057){
var state_val_48058 = (state_48057[(1)]);
if((state_val_48058 === (1))){
var state_48057__$1 = state_48057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48057__$1,(2),once_or_cleanup);
} else {
if((state_val_48058 === (2))){
var inst_48054 = (state_48057[(2)]);
var inst_48055 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48057__$1 = (function (){var statearr_48059 = state_48057;
(statearr_48059[(7)] = inst_48054);

return statearr_48059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48057__$1,inst_48055);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45291__auto__ = null;
var shadow$dom$state_machine__45291__auto____0 = (function (){
var statearr_48060 = [null,null,null,null,null,null,null,null];
(statearr_48060[(0)] = shadow$dom$state_machine__45291__auto__);

(statearr_48060[(1)] = (1));

return statearr_48060;
});
var shadow$dom$state_machine__45291__auto____1 = (function (state_48057){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_48057);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e48061){var ex__45294__auto__ = e48061;
var statearr_48062_48522 = state_48057;
(statearr_48062_48522[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_48057[(4)]))){
var statearr_48063_48523 = state_48057;
(statearr_48063_48523[(1)] = cljs.core.first((state_48057[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48524 = state_48057;
state_48057 = G__48524;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
shadow$dom$state_machine__45291__auto__ = function(state_48057){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45291__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45291__auto____1.call(this,state_48057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45291__auto____0;
shadow$dom$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45291__auto____1;
return shadow$dom$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_48064 = f__45461__auto__();
(statearr_48064[(6)] = c__45460__auto___48515);

return statearr_48064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
