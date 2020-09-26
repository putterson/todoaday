goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45518 = arguments.length;
switch (G__45518) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45519 = (function (f,blockable,meta45520){
this.f = f;
this.blockable = blockable;
this.meta45520 = meta45520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45521,meta45520__$1){
var self__ = this;
var _45521__$1 = this;
return (new cljs.core.async.t_cljs$core$async45519(self__.f,self__.blockable,meta45520__$1));
}));

(cljs.core.async.t_cljs$core$async45519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45521){
var self__ = this;
var _45521__$1 = this;
return self__.meta45520;
}));

(cljs.core.async.t_cljs$core$async45519.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45520","meta45520",-203877509,null)], null);
}));

(cljs.core.async.t_cljs$core$async45519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45519");

(cljs.core.async.t_cljs$core$async45519.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async45519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45519.
 */
cljs.core.async.__GT_t_cljs$core$async45519 = (function cljs$core$async$__GT_t_cljs$core$async45519(f__$1,blockable__$1,meta45520){
return (new cljs.core.async.t_cljs$core$async45519(f__$1,blockable__$1,meta45520));
});

}

return (new cljs.core.async.t_cljs$core$async45519(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45524 = arguments.length;
switch (G__45524) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45526 = arguments.length;
switch (G__45526) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45528 = arguments.length;
switch (G__45528) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46998 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46998) : fn1.call(null,val_46998));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46998) : fn1.call(null,val_46998));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45530 = arguments.length;
switch (G__45530) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___47000 = n;
var x_47001 = (0);
while(true){
if((x_47001 < n__4607__auto___47000)){
(a[x_47001] = x_47001);

var G__47002 = (x_47001 + (1));
x_47001 = G__47002;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45531 = (function (flag,meta45532){
this.flag = flag;
this.meta45532 = meta45532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45533,meta45532__$1){
var self__ = this;
var _45533__$1 = this;
return (new cljs.core.async.t_cljs$core$async45531(self__.flag,meta45532__$1));
}));

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45533){
var self__ = this;
var _45533__$1 = this;
return self__.meta45532;
}));

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45532","meta45532",357685130,null)], null);
}));

(cljs.core.async.t_cljs$core$async45531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45531");

(cljs.core.async.t_cljs$core$async45531.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async45531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45531.
 */
cljs.core.async.__GT_t_cljs$core$async45531 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45531(flag__$1,meta45532){
return (new cljs.core.async.t_cljs$core$async45531(flag__$1,meta45532));
});

}

return (new cljs.core.async.t_cljs$core$async45531(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45534 = (function (flag,cb,meta45535){
this.flag = flag;
this.cb = cb;
this.meta45535 = meta45535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45536,meta45535__$1){
var self__ = this;
var _45536__$1 = this;
return (new cljs.core.async.t_cljs$core$async45534(self__.flag,self__.cb,meta45535__$1));
}));

(cljs.core.async.t_cljs$core$async45534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45536){
var self__ = this;
var _45536__$1 = this;
return self__.meta45535;
}));

(cljs.core.async.t_cljs$core$async45534.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45535","meta45535",581600281,null)], null);
}));

(cljs.core.async.t_cljs$core$async45534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45534");

(cljs.core.async.t_cljs$core$async45534.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async45534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45534.
 */
cljs.core.async.__GT_t_cljs$core$async45534 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45534(flag__$1,cb__$1,meta45535){
return (new cljs.core.async.t_cljs$core$async45534(flag__$1,cb__$1,meta45535));
});

}

return (new cljs.core.async.t_cljs$core$async45534(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45537_SHARP_){
var G__45539 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45537_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45539) : fret.call(null,G__45539));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45538_SHARP_){
var G__45540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45538_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45540) : fret.call(null,G__45540));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47026 = (i + (1));
i = G__47026;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4109__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47032 = arguments.length;
var i__4731__auto___47033 = (0);
while(true){
if((i__4731__auto___47033 < len__4730__auto___47032)){
args__4736__auto__.push((arguments[i__4731__auto___47033]));

var G__47034 = (i__4731__auto___47033 + (1));
i__4731__auto___47033 = G__47034;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45543){
var map__45544 = p__45543;
var map__45544__$1 = (((((!((map__45544 == null))))?(((((map__45544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45544):map__45544);
var opts = map__45544__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45541){
var G__45542 = cljs.core.first(seq45541);
var seq45541__$1 = cljs.core.next(seq45541);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45542,seq45541__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45547 = arguments.length;
switch (G__45547) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45460__auto___47048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_45571){
var state_val_45572 = (state_45571[(1)]);
if((state_val_45572 === (7))){
var inst_45567 = (state_45571[(2)]);
var state_45571__$1 = state_45571;
var statearr_45573_47050 = state_45571__$1;
(statearr_45573_47050[(2)] = inst_45567);

(statearr_45573_47050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (1))){
var state_45571__$1 = state_45571;
var statearr_45574_47051 = state_45571__$1;
(statearr_45574_47051[(2)] = null);

(statearr_45574_47051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (4))){
var inst_45550 = (state_45571[(7)]);
var inst_45550__$1 = (state_45571[(2)]);
var inst_45551 = (inst_45550__$1 == null);
var state_45571__$1 = (function (){var statearr_45575 = state_45571;
(statearr_45575[(7)] = inst_45550__$1);

return statearr_45575;
})();
if(cljs.core.truth_(inst_45551)){
var statearr_45576_47054 = state_45571__$1;
(statearr_45576_47054[(1)] = (5));

} else {
var statearr_45577_47055 = state_45571__$1;
(statearr_45577_47055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (13))){
var state_45571__$1 = state_45571;
var statearr_45578_47058 = state_45571__$1;
(statearr_45578_47058[(2)] = null);

(statearr_45578_47058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (6))){
var inst_45550 = (state_45571[(7)]);
var state_45571__$1 = state_45571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45571__$1,(11),to,inst_45550);
} else {
if((state_val_45572 === (3))){
var inst_45569 = (state_45571[(2)]);
var state_45571__$1 = state_45571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45571__$1,inst_45569);
} else {
if((state_val_45572 === (12))){
var state_45571__$1 = state_45571;
var statearr_45579_47059 = state_45571__$1;
(statearr_45579_47059[(2)] = null);

(statearr_45579_47059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (2))){
var state_45571__$1 = state_45571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45571__$1,(4),from);
} else {
if((state_val_45572 === (11))){
var inst_45560 = (state_45571[(2)]);
var state_45571__$1 = state_45571;
if(cljs.core.truth_(inst_45560)){
var statearr_45580_47060 = state_45571__$1;
(statearr_45580_47060[(1)] = (12));

} else {
var statearr_45581_47061 = state_45571__$1;
(statearr_45581_47061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (9))){
var state_45571__$1 = state_45571;
var statearr_45582_47062 = state_45571__$1;
(statearr_45582_47062[(2)] = null);

(statearr_45582_47062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (5))){
var state_45571__$1 = state_45571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45583_47065 = state_45571__$1;
(statearr_45583_47065[(1)] = (8));

} else {
var statearr_45584_47066 = state_45571__$1;
(statearr_45584_47066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (14))){
var inst_45565 = (state_45571[(2)]);
var state_45571__$1 = state_45571;
var statearr_45585_47068 = state_45571__$1;
(statearr_45585_47068[(2)] = inst_45565);

(statearr_45585_47068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (10))){
var inst_45557 = (state_45571[(2)]);
var state_45571__$1 = state_45571;
var statearr_45586_47071 = state_45571__$1;
(statearr_45586_47071[(2)] = inst_45557);

(statearr_45586_47071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (8))){
var inst_45554 = cljs.core.async.close_BANG_(to);
var state_45571__$1 = state_45571;
var statearr_45587_47073 = state_45571__$1;
(statearr_45587_47073[(2)] = inst_45554);

(statearr_45587_47073[(1)] = (10));


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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45291__auto__ = null;
var cljs$core$async$state_machine__45291__auto____0 = (function (){
var statearr_45588 = [null,null,null,null,null,null,null,null];
(statearr_45588[(0)] = cljs$core$async$state_machine__45291__auto__);

(statearr_45588[(1)] = (1));

return statearr_45588;
});
var cljs$core$async$state_machine__45291__auto____1 = (function (state_45571){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_45571);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e45589){var ex__45294__auto__ = e45589;
var statearr_45590_47078 = state_45571;
(statearr_45590_47078[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_45571[(4)]))){
var statearr_45591_47079 = state_45571;
(statearr_45591_47079[(1)] = cljs.core.first((state_45571[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47080 = state_45571;
state_45571 = G__47080;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$state_machine__45291__auto__ = function(state_45571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45291__auto____1.call(this,state_45571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45291__auto____0;
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45291__auto____1;
return cljs$core$async$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_45592 = f__45461__auto__();
(statearr_45592[(6)] = c__45460__auto___47048);

return statearr_45592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__45593){
var vec__45594 = p__45593;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45594,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45594,(1),null);
var job = vec__45594;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45460__auto___47083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_45601){
var state_val_45602 = (state_45601[(1)]);
if((state_val_45602 === (1))){
var state_45601__$1 = state_45601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45601__$1,(2),res,v);
} else {
if((state_val_45602 === (2))){
var inst_45598 = (state_45601[(2)]);
var inst_45599 = cljs.core.async.close_BANG_(res);
var state_45601__$1 = (function (){var statearr_45603 = state_45601;
(statearr_45603[(7)] = inst_45598);

return statearr_45603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45601__$1,inst_45599);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0 = (function (){
var statearr_45604 = [null,null,null,null,null,null,null,null];
(statearr_45604[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__);

(statearr_45604[(1)] = (1));

return statearr_45604;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1 = (function (state_45601){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_45601);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e45605){var ex__45294__auto__ = e45605;
var statearr_45606_47087 = state_45601;
(statearr_45606_47087[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_45601[(4)]))){
var statearr_45607_47089 = state_45601;
(statearr_45607_47089[(1)] = cljs.core.first((state_45601[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47091 = state_45601;
state_45601 = G__47091;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__ = function(state_45601){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1.call(this,state_45601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_45608 = f__45461__auto__();
(statearr_45608[(6)] = c__45460__auto___47083);

return statearr_45608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45609){
var vec__45610 = p__45609;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45610,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45610,(1),null);
var job = vec__45610;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4607__auto___47102 = n;
var __47103 = (0);
while(true){
if((__47103 < n__4607__auto___47102)){
var G__45613_47104 = type;
var G__45613_47105__$1 = (((G__45613_47104 instanceof cljs.core.Keyword))?G__45613_47104.fqn:null);
switch (G__45613_47105__$1) {
case "compute":
var c__45460__auto___47107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47103,c__45460__auto___47107,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async){
return (function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = ((function (__47103,c__45460__auto___47107,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async){
return (function (state_45626){
var state_val_45627 = (state_45626[(1)]);
if((state_val_45627 === (1))){
var state_45626__$1 = state_45626;
var statearr_45628_47111 = state_45626__$1;
(statearr_45628_47111[(2)] = null);

(statearr_45628_47111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45627 === (2))){
var state_45626__$1 = state_45626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45626__$1,(4),jobs);
} else {
if((state_val_45627 === (3))){
var inst_45624 = (state_45626[(2)]);
var state_45626__$1 = state_45626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45626__$1,inst_45624);
} else {
if((state_val_45627 === (4))){
var inst_45616 = (state_45626[(2)]);
var inst_45617 = process(inst_45616);
var state_45626__$1 = state_45626;
if(cljs.core.truth_(inst_45617)){
var statearr_45629_47113 = state_45626__$1;
(statearr_45629_47113[(1)] = (5));

} else {
var statearr_45630_47114 = state_45626__$1;
(statearr_45630_47114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45627 === (5))){
var state_45626__$1 = state_45626;
var statearr_45631_47115 = state_45626__$1;
(statearr_45631_47115[(2)] = null);

(statearr_45631_47115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45627 === (6))){
var state_45626__$1 = state_45626;
var statearr_45632_47116 = state_45626__$1;
(statearr_45632_47116[(2)] = null);

(statearr_45632_47116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45627 === (7))){
var inst_45622 = (state_45626[(2)]);
var state_45626__$1 = state_45626;
var statearr_45633_47117 = state_45626__$1;
(statearr_45633_47117[(2)] = inst_45622);

(statearr_45633_47117[(1)] = (3));


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
});})(__47103,c__45460__auto___47107,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async))
;
return ((function (__47103,switch__45290__auto__,c__45460__auto___47107,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0 = (function (){
var statearr_45634 = [null,null,null,null,null,null,null];
(statearr_45634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__);

(statearr_45634[(1)] = (1));

return statearr_45634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1 = (function (state_45626){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_45626);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e45635){var ex__45294__auto__ = e45635;
var statearr_45636_47124 = state_45626;
(statearr_45636_47124[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_45626[(4)]))){
var statearr_45637_47125 = state_45626;
(statearr_45637_47125[(1)] = cljs.core.first((state_45626[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47126 = state_45626;
state_45626 = G__47126;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__ = function(state_45626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1.call(this,state_45626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__;
})()
;})(__47103,switch__45290__auto__,c__45460__auto___47107,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async))
})();
var state__45462__auto__ = (function (){var statearr_45638 = f__45461__auto__();
(statearr_45638[(6)] = c__45460__auto___47107);

return statearr_45638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
});})(__47103,c__45460__auto___47107,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async))
);


break;
case "async":
var c__45460__auto___47128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47103,c__45460__auto___47128,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async){
return (function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = ((function (__47103,c__45460__auto___47128,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async){
return (function (state_45651){
var state_val_45652 = (state_45651[(1)]);
if((state_val_45652 === (1))){
var state_45651__$1 = state_45651;
var statearr_45653_47132 = state_45651__$1;
(statearr_45653_47132[(2)] = null);

(statearr_45653_47132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (2))){
var state_45651__$1 = state_45651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45651__$1,(4),jobs);
} else {
if((state_val_45652 === (3))){
var inst_45649 = (state_45651[(2)]);
var state_45651__$1 = state_45651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45651__$1,inst_45649);
} else {
if((state_val_45652 === (4))){
var inst_45641 = (state_45651[(2)]);
var inst_45642 = async(inst_45641);
var state_45651__$1 = state_45651;
if(cljs.core.truth_(inst_45642)){
var statearr_45654_47133 = state_45651__$1;
(statearr_45654_47133[(1)] = (5));

} else {
var statearr_45655_47134 = state_45651__$1;
(statearr_45655_47134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (5))){
var state_45651__$1 = state_45651;
var statearr_45656_47135 = state_45651__$1;
(statearr_45656_47135[(2)] = null);

(statearr_45656_47135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (6))){
var state_45651__$1 = state_45651;
var statearr_45657_47136 = state_45651__$1;
(statearr_45657_47136[(2)] = null);

(statearr_45657_47136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (7))){
var inst_45647 = (state_45651[(2)]);
var state_45651__$1 = state_45651;
var statearr_45658_47139 = state_45651__$1;
(statearr_45658_47139[(2)] = inst_45647);

(statearr_45658_47139[(1)] = (3));


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
});})(__47103,c__45460__auto___47128,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async))
;
return ((function (__47103,switch__45290__auto__,c__45460__auto___47128,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0 = (function (){
var statearr_45659 = [null,null,null,null,null,null,null];
(statearr_45659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__);

(statearr_45659[(1)] = (1));

return statearr_45659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1 = (function (state_45651){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_45651);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e45660){var ex__45294__auto__ = e45660;
var statearr_45661_47144 = state_45651;
(statearr_45661_47144[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_45651[(4)]))){
var statearr_45662_47145 = state_45651;
(statearr_45662_47145[(1)] = cljs.core.first((state_45651[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47146 = state_45651;
state_45651 = G__47146;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__ = function(state_45651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1.call(this,state_45651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__;
})()
;})(__47103,switch__45290__auto__,c__45460__auto___47128,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async))
})();
var state__45462__auto__ = (function (){var statearr_45663 = f__45461__auto__();
(statearr_45663[(6)] = c__45460__auto___47128);

return statearr_45663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
});})(__47103,c__45460__auto___47128,G__45613_47104,G__45613_47105__$1,n__4607__auto___47102,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45613_47105__$1)].join('')));

}

var G__47150 = (__47103 + (1));
__47103 = G__47150;
continue;
} else {
}
break;
}

var c__45460__auto___47151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_45685){
var state_val_45686 = (state_45685[(1)]);
if((state_val_45686 === (7))){
var inst_45681 = (state_45685[(2)]);
var state_45685__$1 = state_45685;
var statearr_45687_47152 = state_45685__$1;
(statearr_45687_47152[(2)] = inst_45681);

(statearr_45687_47152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45686 === (1))){
var state_45685__$1 = state_45685;
var statearr_45688_47153 = state_45685__$1;
(statearr_45688_47153[(2)] = null);

(statearr_45688_47153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45686 === (4))){
var inst_45666 = (state_45685[(7)]);
var inst_45666__$1 = (state_45685[(2)]);
var inst_45667 = (inst_45666__$1 == null);
var state_45685__$1 = (function (){var statearr_45689 = state_45685;
(statearr_45689[(7)] = inst_45666__$1);

return statearr_45689;
})();
if(cljs.core.truth_(inst_45667)){
var statearr_45690_47161 = state_45685__$1;
(statearr_45690_47161[(1)] = (5));

} else {
var statearr_45691_47162 = state_45685__$1;
(statearr_45691_47162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45686 === (6))){
var inst_45666 = (state_45685[(7)]);
var inst_45671 = (state_45685[(8)]);
var inst_45671__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45672 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45673 = [inst_45666,inst_45671__$1];
var inst_45674 = (new cljs.core.PersistentVector(null,2,(5),inst_45672,inst_45673,null));
var state_45685__$1 = (function (){var statearr_45692 = state_45685;
(statearr_45692[(8)] = inst_45671__$1);

return statearr_45692;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45685__$1,(8),jobs,inst_45674);
} else {
if((state_val_45686 === (3))){
var inst_45683 = (state_45685[(2)]);
var state_45685__$1 = state_45685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45685__$1,inst_45683);
} else {
if((state_val_45686 === (2))){
var state_45685__$1 = state_45685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45685__$1,(4),from);
} else {
if((state_val_45686 === (9))){
var inst_45678 = (state_45685[(2)]);
var state_45685__$1 = (function (){var statearr_45693 = state_45685;
(statearr_45693[(9)] = inst_45678);

return statearr_45693;
})();
var statearr_45694_47166 = state_45685__$1;
(statearr_45694_47166[(2)] = null);

(statearr_45694_47166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45686 === (5))){
var inst_45669 = cljs.core.async.close_BANG_(jobs);
var state_45685__$1 = state_45685;
var statearr_45695_47167 = state_45685__$1;
(statearr_45695_47167[(2)] = inst_45669);

(statearr_45695_47167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45686 === (8))){
var inst_45671 = (state_45685[(8)]);
var inst_45676 = (state_45685[(2)]);
var state_45685__$1 = (function (){var statearr_45696 = state_45685;
(statearr_45696[(10)] = inst_45676);

return statearr_45696;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45685__$1,(9),results,inst_45671);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0 = (function (){
var statearr_45697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__);

(statearr_45697[(1)] = (1));

return statearr_45697;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1 = (function (state_45685){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_45685);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e45698){var ex__45294__auto__ = e45698;
var statearr_45699_47171 = state_45685;
(statearr_45699_47171[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_45685[(4)]))){
var statearr_45700_47173 = state_45685;
(statearr_45700_47173[(1)] = cljs.core.first((state_45685[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47175 = state_45685;
state_45685 = G__47175;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__ = function(state_45685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1.call(this,state_45685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_45701 = f__45461__auto__();
(statearr_45701[(6)] = c__45460__auto___47151);

return statearr_45701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


var c__45460__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_45739){
var state_val_45740 = (state_45739[(1)]);
if((state_val_45740 === (7))){
var inst_45735 = (state_45739[(2)]);
var state_45739__$1 = state_45739;
var statearr_45741_47177 = state_45739__$1;
(statearr_45741_47177[(2)] = inst_45735);

(statearr_45741_47177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (20))){
var state_45739__$1 = state_45739;
var statearr_45742_47179 = state_45739__$1;
(statearr_45742_47179[(2)] = null);

(statearr_45742_47179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (1))){
var state_45739__$1 = state_45739;
var statearr_45743_47180 = state_45739__$1;
(statearr_45743_47180[(2)] = null);

(statearr_45743_47180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (4))){
var inst_45704 = (state_45739[(7)]);
var inst_45704__$1 = (state_45739[(2)]);
var inst_45705 = (inst_45704__$1 == null);
var state_45739__$1 = (function (){var statearr_45744 = state_45739;
(statearr_45744[(7)] = inst_45704__$1);

return statearr_45744;
})();
if(cljs.core.truth_(inst_45705)){
var statearr_45745_47185 = state_45739__$1;
(statearr_45745_47185[(1)] = (5));

} else {
var statearr_45746_47186 = state_45739__$1;
(statearr_45746_47186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (15))){
var inst_45717 = (state_45739[(8)]);
var state_45739__$1 = state_45739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45739__$1,(18),to,inst_45717);
} else {
if((state_val_45740 === (21))){
var inst_45730 = (state_45739[(2)]);
var state_45739__$1 = state_45739;
var statearr_45747_47189 = state_45739__$1;
(statearr_45747_47189[(2)] = inst_45730);

(statearr_45747_47189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (13))){
var inst_45732 = (state_45739[(2)]);
var state_45739__$1 = (function (){var statearr_45748 = state_45739;
(statearr_45748[(9)] = inst_45732);

return statearr_45748;
})();
var statearr_45749_47192 = state_45739__$1;
(statearr_45749_47192[(2)] = null);

(statearr_45749_47192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (6))){
var inst_45704 = (state_45739[(7)]);
var state_45739__$1 = state_45739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45739__$1,(11),inst_45704);
} else {
if((state_val_45740 === (17))){
var inst_45725 = (state_45739[(2)]);
var state_45739__$1 = state_45739;
if(cljs.core.truth_(inst_45725)){
var statearr_45750_47193 = state_45739__$1;
(statearr_45750_47193[(1)] = (19));

} else {
var statearr_45751_47194 = state_45739__$1;
(statearr_45751_47194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (3))){
var inst_45737 = (state_45739[(2)]);
var state_45739__$1 = state_45739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45739__$1,inst_45737);
} else {
if((state_val_45740 === (12))){
var inst_45714 = (state_45739[(10)]);
var state_45739__$1 = state_45739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45739__$1,(14),inst_45714);
} else {
if((state_val_45740 === (2))){
var state_45739__$1 = state_45739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45739__$1,(4),results);
} else {
if((state_val_45740 === (19))){
var state_45739__$1 = state_45739;
var statearr_45752_47200 = state_45739__$1;
(statearr_45752_47200[(2)] = null);

(statearr_45752_47200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (11))){
var inst_45714 = (state_45739[(2)]);
var state_45739__$1 = (function (){var statearr_45753 = state_45739;
(statearr_45753[(10)] = inst_45714);

return statearr_45753;
})();
var statearr_45754_47202 = state_45739__$1;
(statearr_45754_47202[(2)] = null);

(statearr_45754_47202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (9))){
var state_45739__$1 = state_45739;
var statearr_45755_47204 = state_45739__$1;
(statearr_45755_47204[(2)] = null);

(statearr_45755_47204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (5))){
var state_45739__$1 = state_45739;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45756_47205 = state_45739__$1;
(statearr_45756_47205[(1)] = (8));

} else {
var statearr_45757_47206 = state_45739__$1;
(statearr_45757_47206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (14))){
var inst_45717 = (state_45739[(8)]);
var inst_45717__$1 = (state_45739[(2)]);
var inst_45718 = (inst_45717__$1 == null);
var inst_45719 = cljs.core.not(inst_45718);
var state_45739__$1 = (function (){var statearr_45758 = state_45739;
(statearr_45758[(8)] = inst_45717__$1);

return statearr_45758;
})();
if(inst_45719){
var statearr_45759_47208 = state_45739__$1;
(statearr_45759_47208[(1)] = (15));

} else {
var statearr_45760_47209 = state_45739__$1;
(statearr_45760_47209[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (16))){
var state_45739__$1 = state_45739;
var statearr_45761_47212 = state_45739__$1;
(statearr_45761_47212[(2)] = false);

(statearr_45761_47212[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (10))){
var inst_45711 = (state_45739[(2)]);
var state_45739__$1 = state_45739;
var statearr_45762_47213 = state_45739__$1;
(statearr_45762_47213[(2)] = inst_45711);

(statearr_45762_47213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (18))){
var inst_45722 = (state_45739[(2)]);
var state_45739__$1 = state_45739;
var statearr_45763_47214 = state_45739__$1;
(statearr_45763_47214[(2)] = inst_45722);

(statearr_45763_47214[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (8))){
var inst_45708 = cljs.core.async.close_BANG_(to);
var state_45739__$1 = state_45739;
var statearr_45764_47216 = state_45739__$1;
(statearr_45764_47216[(2)] = inst_45708);

(statearr_45764_47216[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0 = (function (){
var statearr_45765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__);

(statearr_45765[(1)] = (1));

return statearr_45765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1 = (function (state_45739){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_45739);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e45766){var ex__45294__auto__ = e45766;
var statearr_45767_47219 = state_45739;
(statearr_45767_47219[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_45739[(4)]))){
var statearr_45768_47220 = state_45739;
(statearr_45768_47220[(1)] = cljs.core.first((state_45739[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47223 = state_45739;
state_45739 = G__47223;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__ = function(state_45739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1.call(this,state_45739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_45769 = f__45461__auto__();
(statearr_45769[(6)] = c__45460__auto__);

return statearr_45769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));

return c__45460__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45771 = arguments.length;
switch (G__45771) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45773 = arguments.length;
switch (G__45773) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45775 = arguments.length;
switch (G__45775) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45460__auto___47238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_45801){
var state_val_45802 = (state_45801[(1)]);
if((state_val_45802 === (7))){
var inst_45797 = (state_45801[(2)]);
var state_45801__$1 = state_45801;
var statearr_45803_47239 = state_45801__$1;
(statearr_45803_47239[(2)] = inst_45797);

(statearr_45803_47239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (1))){
var state_45801__$1 = state_45801;
var statearr_45804_47241 = state_45801__$1;
(statearr_45804_47241[(2)] = null);

(statearr_45804_47241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (4))){
var inst_45778 = (state_45801[(7)]);
var inst_45778__$1 = (state_45801[(2)]);
var inst_45779 = (inst_45778__$1 == null);
var state_45801__$1 = (function (){var statearr_45805 = state_45801;
(statearr_45805[(7)] = inst_45778__$1);

return statearr_45805;
})();
if(cljs.core.truth_(inst_45779)){
var statearr_45806_47242 = state_45801__$1;
(statearr_45806_47242[(1)] = (5));

} else {
var statearr_45807_47244 = state_45801__$1;
(statearr_45807_47244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (13))){
var state_45801__$1 = state_45801;
var statearr_45808_47245 = state_45801__$1;
(statearr_45808_47245[(2)] = null);

(statearr_45808_47245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (6))){
var inst_45778 = (state_45801[(7)]);
var inst_45784 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45778) : p.call(null,inst_45778));
var state_45801__$1 = state_45801;
if(cljs.core.truth_(inst_45784)){
var statearr_45809_47247 = state_45801__$1;
(statearr_45809_47247[(1)] = (9));

} else {
var statearr_45810_47248 = state_45801__$1;
(statearr_45810_47248[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (3))){
var inst_45799 = (state_45801[(2)]);
var state_45801__$1 = state_45801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45801__$1,inst_45799);
} else {
if((state_val_45802 === (12))){
var state_45801__$1 = state_45801;
var statearr_45811_47254 = state_45801__$1;
(statearr_45811_47254[(2)] = null);

(statearr_45811_47254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (2))){
var state_45801__$1 = state_45801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45801__$1,(4),ch);
} else {
if((state_val_45802 === (11))){
var inst_45778 = (state_45801[(7)]);
var inst_45788 = (state_45801[(2)]);
var state_45801__$1 = state_45801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45801__$1,(8),inst_45788,inst_45778);
} else {
if((state_val_45802 === (9))){
var state_45801__$1 = state_45801;
var statearr_45812_47256 = state_45801__$1;
(statearr_45812_47256[(2)] = tc);

(statearr_45812_47256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (5))){
var inst_45781 = cljs.core.async.close_BANG_(tc);
var inst_45782 = cljs.core.async.close_BANG_(fc);
var state_45801__$1 = (function (){var statearr_45813 = state_45801;
(statearr_45813[(8)] = inst_45781);

return statearr_45813;
})();
var statearr_45814_47258 = state_45801__$1;
(statearr_45814_47258[(2)] = inst_45782);

(statearr_45814_47258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (14))){
var inst_45795 = (state_45801[(2)]);
var state_45801__$1 = state_45801;
var statearr_45815_47259 = state_45801__$1;
(statearr_45815_47259[(2)] = inst_45795);

(statearr_45815_47259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (10))){
var state_45801__$1 = state_45801;
var statearr_45816_47260 = state_45801__$1;
(statearr_45816_47260[(2)] = fc);

(statearr_45816_47260[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45802 === (8))){
var inst_45790 = (state_45801[(2)]);
var state_45801__$1 = state_45801;
if(cljs.core.truth_(inst_45790)){
var statearr_45817_47262 = state_45801__$1;
(statearr_45817_47262[(1)] = (12));

} else {
var statearr_45818_47263 = state_45801__$1;
(statearr_45818_47263[(1)] = (13));

}

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45291__auto__ = null;
var cljs$core$async$state_machine__45291__auto____0 = (function (){
var statearr_45819 = [null,null,null,null,null,null,null,null,null];
(statearr_45819[(0)] = cljs$core$async$state_machine__45291__auto__);

(statearr_45819[(1)] = (1));

return statearr_45819;
});
var cljs$core$async$state_machine__45291__auto____1 = (function (state_45801){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_45801);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e45820){var ex__45294__auto__ = e45820;
var statearr_45821_47266 = state_45801;
(statearr_45821_47266[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_45801[(4)]))){
var statearr_45822_47268 = state_45801;
(statearr_45822_47268[(1)] = cljs.core.first((state_45801[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47270 = state_45801;
state_45801 = G__47270;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$state_machine__45291__auto__ = function(state_45801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45291__auto____1.call(this,state_45801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45291__auto____0;
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45291__auto____1;
return cljs$core$async$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_45823 = f__45461__auto__();
(statearr_45823[(6)] = c__45460__auto___47238);

return statearr_45823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45460__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_45845){
var state_val_45846 = (state_45845[(1)]);
if((state_val_45846 === (7))){
var inst_45841 = (state_45845[(2)]);
var state_45845__$1 = state_45845;
var statearr_45847_47272 = state_45845__$1;
(statearr_45847_47272[(2)] = inst_45841);

(statearr_45847_47272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45846 === (1))){
var inst_45824 = init;
var inst_45825 = inst_45824;
var state_45845__$1 = (function (){var statearr_45848 = state_45845;
(statearr_45848[(7)] = inst_45825);

return statearr_45848;
})();
var statearr_45849_47278 = state_45845__$1;
(statearr_45849_47278[(2)] = null);

(statearr_45849_47278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45846 === (4))){
var inst_45828 = (state_45845[(8)]);
var inst_45828__$1 = (state_45845[(2)]);
var inst_45829 = (inst_45828__$1 == null);
var state_45845__$1 = (function (){var statearr_45850 = state_45845;
(statearr_45850[(8)] = inst_45828__$1);

return statearr_45850;
})();
if(cljs.core.truth_(inst_45829)){
var statearr_45851_47280 = state_45845__$1;
(statearr_45851_47280[(1)] = (5));

} else {
var statearr_45852_47281 = state_45845__$1;
(statearr_45852_47281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45846 === (6))){
var inst_45825 = (state_45845[(7)]);
var inst_45832 = (state_45845[(9)]);
var inst_45828 = (state_45845[(8)]);
var inst_45832__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45825,inst_45828) : f.call(null,inst_45825,inst_45828));
var inst_45833 = cljs.core.reduced_QMARK_(inst_45832__$1);
var state_45845__$1 = (function (){var statearr_45853 = state_45845;
(statearr_45853[(9)] = inst_45832__$1);

return statearr_45853;
})();
if(inst_45833){
var statearr_45854_47286 = state_45845__$1;
(statearr_45854_47286[(1)] = (8));

} else {
var statearr_45855_47287 = state_45845__$1;
(statearr_45855_47287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45846 === (3))){
var inst_45843 = (state_45845[(2)]);
var state_45845__$1 = state_45845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45845__$1,inst_45843);
} else {
if((state_val_45846 === (2))){
var state_45845__$1 = state_45845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45845__$1,(4),ch);
} else {
if((state_val_45846 === (9))){
var inst_45832 = (state_45845[(9)]);
var inst_45825 = inst_45832;
var state_45845__$1 = (function (){var statearr_45856 = state_45845;
(statearr_45856[(7)] = inst_45825);

return statearr_45856;
})();
var statearr_45857_47289 = state_45845__$1;
(statearr_45857_47289[(2)] = null);

(statearr_45857_47289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45846 === (5))){
var inst_45825 = (state_45845[(7)]);
var state_45845__$1 = state_45845;
var statearr_45858_47290 = state_45845__$1;
(statearr_45858_47290[(2)] = inst_45825);

(statearr_45858_47290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45846 === (10))){
var inst_45839 = (state_45845[(2)]);
var state_45845__$1 = state_45845;
var statearr_45859_47292 = state_45845__$1;
(statearr_45859_47292[(2)] = inst_45839);

(statearr_45859_47292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45846 === (8))){
var inst_45832 = (state_45845[(9)]);
var inst_45835 = cljs.core.deref(inst_45832);
var state_45845__$1 = state_45845;
var statearr_45860_47293 = state_45845__$1;
(statearr_45860_47293[(2)] = inst_45835);

(statearr_45860_47293[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45291__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45291__auto____0 = (function (){
var statearr_45861 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45861[(0)] = cljs$core$async$reduce_$_state_machine__45291__auto__);

(statearr_45861[(1)] = (1));

return statearr_45861;
});
var cljs$core$async$reduce_$_state_machine__45291__auto____1 = (function (state_45845){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_45845);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e45862){var ex__45294__auto__ = e45862;
var statearr_45863_47299 = state_45845;
(statearr_45863_47299[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_45845[(4)]))){
var statearr_45864_47300 = state_45845;
(statearr_45864_47300[(1)] = cljs.core.first((state_45845[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47301 = state_45845;
state_45845 = G__47301;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45291__auto__ = function(state_45845){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45291__auto____1.call(this,state_45845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45291__auto____0;
cljs$core$async$reduce_$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45291__auto____1;
return cljs$core$async$reduce_$_state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_45865 = f__45461__auto__();
(statearr_45865[(6)] = c__45460__auto__);

return statearr_45865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));

return c__45460__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45460__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_45871){
var state_val_45872 = (state_45871[(1)]);
if((state_val_45872 === (1))){
var inst_45866 = cljs.core.async.reduce(f__$1,init,ch);
var state_45871__$1 = state_45871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45871__$1,(2),inst_45866);
} else {
if((state_val_45872 === (2))){
var inst_45868 = (state_45871[(2)]);
var inst_45869 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45868) : f__$1.call(null,inst_45868));
var state_45871__$1 = state_45871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45871__$1,inst_45869);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45291__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45291__auto____0 = (function (){
var statearr_45873 = [null,null,null,null,null,null,null];
(statearr_45873[(0)] = cljs$core$async$transduce_$_state_machine__45291__auto__);

(statearr_45873[(1)] = (1));

return statearr_45873;
});
var cljs$core$async$transduce_$_state_machine__45291__auto____1 = (function (state_45871){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_45871);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e45874){var ex__45294__auto__ = e45874;
var statearr_45875_47308 = state_45871;
(statearr_45875_47308[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_45871[(4)]))){
var statearr_45876_47310 = state_45871;
(statearr_45876_47310[(1)] = cljs.core.first((state_45871[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47312 = state_45871;
state_45871 = G__47312;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45291__auto__ = function(state_45871){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45291__auto____1.call(this,state_45871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45291__auto____0;
cljs$core$async$transduce_$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45291__auto____1;
return cljs$core$async$transduce_$_state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_45877 = f__45461__auto__();
(statearr_45877[(6)] = c__45460__auto__);

return statearr_45877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));

return c__45460__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45879 = arguments.length;
switch (G__45879) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45460__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_45904){
var state_val_45905 = (state_45904[(1)]);
if((state_val_45905 === (7))){
var inst_45886 = (state_45904[(2)]);
var state_45904__$1 = state_45904;
var statearr_45906_47316 = state_45904__$1;
(statearr_45906_47316[(2)] = inst_45886);

(statearr_45906_47316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (1))){
var inst_45880 = cljs.core.seq(coll);
var inst_45881 = inst_45880;
var state_45904__$1 = (function (){var statearr_45907 = state_45904;
(statearr_45907[(7)] = inst_45881);

return statearr_45907;
})();
var statearr_45908_47317 = state_45904__$1;
(statearr_45908_47317[(2)] = null);

(statearr_45908_47317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (4))){
var inst_45881 = (state_45904[(7)]);
var inst_45884 = cljs.core.first(inst_45881);
var state_45904__$1 = state_45904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45904__$1,(7),ch,inst_45884);
} else {
if((state_val_45905 === (13))){
var inst_45898 = (state_45904[(2)]);
var state_45904__$1 = state_45904;
var statearr_45909_47319 = state_45904__$1;
(statearr_45909_47319[(2)] = inst_45898);

(statearr_45909_47319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (6))){
var inst_45889 = (state_45904[(2)]);
var state_45904__$1 = state_45904;
if(cljs.core.truth_(inst_45889)){
var statearr_45910_47321 = state_45904__$1;
(statearr_45910_47321[(1)] = (8));

} else {
var statearr_45911_47322 = state_45904__$1;
(statearr_45911_47322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (3))){
var inst_45902 = (state_45904[(2)]);
var state_45904__$1 = state_45904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45904__$1,inst_45902);
} else {
if((state_val_45905 === (12))){
var state_45904__$1 = state_45904;
var statearr_45912_47325 = state_45904__$1;
(statearr_45912_47325[(2)] = null);

(statearr_45912_47325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (2))){
var inst_45881 = (state_45904[(7)]);
var state_45904__$1 = state_45904;
if(cljs.core.truth_(inst_45881)){
var statearr_45913_47327 = state_45904__$1;
(statearr_45913_47327[(1)] = (4));

} else {
var statearr_45914_47328 = state_45904__$1;
(statearr_45914_47328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (11))){
var inst_45895 = cljs.core.async.close_BANG_(ch);
var state_45904__$1 = state_45904;
var statearr_45915_47329 = state_45904__$1;
(statearr_45915_47329[(2)] = inst_45895);

(statearr_45915_47329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (9))){
var state_45904__$1 = state_45904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45916_47330 = state_45904__$1;
(statearr_45916_47330[(1)] = (11));

} else {
var statearr_45917_47331 = state_45904__$1;
(statearr_45917_47331[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (5))){
var inst_45881 = (state_45904[(7)]);
var state_45904__$1 = state_45904;
var statearr_45918_47332 = state_45904__$1;
(statearr_45918_47332[(2)] = inst_45881);

(statearr_45918_47332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (10))){
var inst_45900 = (state_45904[(2)]);
var state_45904__$1 = state_45904;
var statearr_45919_47333 = state_45904__$1;
(statearr_45919_47333[(2)] = inst_45900);

(statearr_45919_47333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (8))){
var inst_45881 = (state_45904[(7)]);
var inst_45891 = cljs.core.next(inst_45881);
var inst_45881__$1 = inst_45891;
var state_45904__$1 = (function (){var statearr_45920 = state_45904;
(statearr_45920[(7)] = inst_45881__$1);

return statearr_45920;
})();
var statearr_45921_47334 = state_45904__$1;
(statearr_45921_47334[(2)] = null);

(statearr_45921_47334[(1)] = (2));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45291__auto__ = null;
var cljs$core$async$state_machine__45291__auto____0 = (function (){
var statearr_45922 = [null,null,null,null,null,null,null,null];
(statearr_45922[(0)] = cljs$core$async$state_machine__45291__auto__);

(statearr_45922[(1)] = (1));

return statearr_45922;
});
var cljs$core$async$state_machine__45291__auto____1 = (function (state_45904){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_45904);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e45923){var ex__45294__auto__ = e45923;
var statearr_45924_47339 = state_45904;
(statearr_45924_47339[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_45904[(4)]))){
var statearr_45925_47341 = state_45904;
(statearr_45925_47341[(1)] = cljs.core.first((state_45904[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47342 = state_45904;
state_45904 = G__47342;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$state_machine__45291__auto__ = function(state_45904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45291__auto____1.call(this,state_45904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45291__auto____0;
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45291__auto____1;
return cljs$core$async$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_45926 = f__45461__auto__();
(statearr_45926[(6)] = c__45460__auto__);

return statearr_45926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));

return c__45460__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45928 = arguments.length;
switch (G__45928) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47347 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4423__auto__.call(null,_));
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4420__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47347(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47351 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4423__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4420__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47351(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47355 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47355(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47357 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47357(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45929 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45929 = (function (ch,cs,meta45930){
this.ch = ch;
this.cs = cs;
this.meta45930 = meta45930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45931,meta45930__$1){
var self__ = this;
var _45931__$1 = this;
return (new cljs.core.async.t_cljs$core$async45929(self__.ch,self__.cs,meta45930__$1));
}));

(cljs.core.async.t_cljs$core$async45929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45931){
var self__ = this;
var _45931__$1 = this;
return self__.meta45930;
}));

(cljs.core.async.t_cljs$core$async45929.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45929.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45929.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45929.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45929.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45929.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45930","meta45930",-1911062588,null)], null);
}));

(cljs.core.async.t_cljs$core$async45929.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45929");

(cljs.core.async.t_cljs$core$async45929.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async45929");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45929.
 */
cljs.core.async.__GT_t_cljs$core$async45929 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45929(ch__$1,cs__$1,meta45930){
return (new cljs.core.async.t_cljs$core$async45929(ch__$1,cs__$1,meta45930));
});

}

return (new cljs.core.async.t_cljs$core$async45929(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45460__auto___47361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_46064){
var state_val_46065 = (state_46064[(1)]);
if((state_val_46065 === (7))){
var inst_46060 = (state_46064[(2)]);
var state_46064__$1 = state_46064;
var statearr_46066_47362 = state_46064__$1;
(statearr_46066_47362[(2)] = inst_46060);

(statearr_46066_47362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (20))){
var inst_45965 = (state_46064[(7)]);
var inst_45977 = cljs.core.first(inst_45965);
var inst_45978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45977,(0),null);
var inst_45979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45977,(1),null);
var state_46064__$1 = (function (){var statearr_46067 = state_46064;
(statearr_46067[(8)] = inst_45978);

return statearr_46067;
})();
if(cljs.core.truth_(inst_45979)){
var statearr_46068_47364 = state_46064__$1;
(statearr_46068_47364[(1)] = (22));

} else {
var statearr_46069_47365 = state_46064__$1;
(statearr_46069_47365[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (27))){
var inst_46014 = (state_46064[(9)]);
var inst_46007 = (state_46064[(10)]);
var inst_46009 = (state_46064[(11)]);
var inst_45934 = (state_46064[(12)]);
var inst_46014__$1 = cljs.core._nth(inst_46007,inst_46009);
var inst_46015 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46014__$1,inst_45934,done);
var state_46064__$1 = (function (){var statearr_46070 = state_46064;
(statearr_46070[(9)] = inst_46014__$1);

return statearr_46070;
})();
if(cljs.core.truth_(inst_46015)){
var statearr_46071_47366 = state_46064__$1;
(statearr_46071_47366[(1)] = (30));

} else {
var statearr_46072_47367 = state_46064__$1;
(statearr_46072_47367[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (1))){
var state_46064__$1 = state_46064;
var statearr_46073_47368 = state_46064__$1;
(statearr_46073_47368[(2)] = null);

(statearr_46073_47368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (24))){
var inst_45965 = (state_46064[(7)]);
var inst_45984 = (state_46064[(2)]);
var inst_45985 = cljs.core.next(inst_45965);
var inst_45943 = inst_45985;
var inst_45944 = null;
var inst_45945 = (0);
var inst_45946 = (0);
var state_46064__$1 = (function (){var statearr_46074 = state_46064;
(statearr_46074[(13)] = inst_45984);

(statearr_46074[(14)] = inst_45946);

(statearr_46074[(15)] = inst_45944);

(statearr_46074[(16)] = inst_45943);

(statearr_46074[(17)] = inst_45945);

return statearr_46074;
})();
var statearr_46075_47370 = state_46064__$1;
(statearr_46075_47370[(2)] = null);

(statearr_46075_47370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (39))){
var state_46064__$1 = state_46064;
var statearr_46079_47371 = state_46064__$1;
(statearr_46079_47371[(2)] = null);

(statearr_46079_47371[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (4))){
var inst_45934 = (state_46064[(12)]);
var inst_45934__$1 = (state_46064[(2)]);
var inst_45935 = (inst_45934__$1 == null);
var state_46064__$1 = (function (){var statearr_46080 = state_46064;
(statearr_46080[(12)] = inst_45934__$1);

return statearr_46080;
})();
if(cljs.core.truth_(inst_45935)){
var statearr_46081_47374 = state_46064__$1;
(statearr_46081_47374[(1)] = (5));

} else {
var statearr_46082_47375 = state_46064__$1;
(statearr_46082_47375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (15))){
var inst_45946 = (state_46064[(14)]);
var inst_45944 = (state_46064[(15)]);
var inst_45943 = (state_46064[(16)]);
var inst_45945 = (state_46064[(17)]);
var inst_45961 = (state_46064[(2)]);
var inst_45962 = (inst_45946 + (1));
var tmp46076 = inst_45944;
var tmp46077 = inst_45943;
var tmp46078 = inst_45945;
var inst_45943__$1 = tmp46077;
var inst_45944__$1 = tmp46076;
var inst_45945__$1 = tmp46078;
var inst_45946__$1 = inst_45962;
var state_46064__$1 = (function (){var statearr_46083 = state_46064;
(statearr_46083[(14)] = inst_45946__$1);

(statearr_46083[(15)] = inst_45944__$1);

(statearr_46083[(16)] = inst_45943__$1);

(statearr_46083[(17)] = inst_45945__$1);

(statearr_46083[(18)] = inst_45961);

return statearr_46083;
})();
var statearr_46084_47376 = state_46064__$1;
(statearr_46084_47376[(2)] = null);

(statearr_46084_47376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (21))){
var inst_45988 = (state_46064[(2)]);
var state_46064__$1 = state_46064;
var statearr_46088_47377 = state_46064__$1;
(statearr_46088_47377[(2)] = inst_45988);

(statearr_46088_47377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (31))){
var inst_46014 = (state_46064[(9)]);
var inst_46018 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46014);
var state_46064__$1 = state_46064;
var statearr_46089_47379 = state_46064__$1;
(statearr_46089_47379[(2)] = inst_46018);

(statearr_46089_47379[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (32))){
var inst_46006 = (state_46064[(19)]);
var inst_46007 = (state_46064[(10)]);
var inst_46008 = (state_46064[(20)]);
var inst_46009 = (state_46064[(11)]);
var inst_46020 = (state_46064[(2)]);
var inst_46021 = (inst_46009 + (1));
var tmp46085 = inst_46006;
var tmp46086 = inst_46007;
var tmp46087 = inst_46008;
var inst_46006__$1 = tmp46085;
var inst_46007__$1 = tmp46086;
var inst_46008__$1 = tmp46087;
var inst_46009__$1 = inst_46021;
var state_46064__$1 = (function (){var statearr_46090 = state_46064;
(statearr_46090[(21)] = inst_46020);

(statearr_46090[(19)] = inst_46006__$1);

(statearr_46090[(10)] = inst_46007__$1);

(statearr_46090[(20)] = inst_46008__$1);

(statearr_46090[(11)] = inst_46009__$1);

return statearr_46090;
})();
var statearr_46091_47381 = state_46064__$1;
(statearr_46091_47381[(2)] = null);

(statearr_46091_47381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (40))){
var inst_46033 = (state_46064[(22)]);
var inst_46037 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46033);
var state_46064__$1 = state_46064;
var statearr_46092_47383 = state_46064__$1;
(statearr_46092_47383[(2)] = inst_46037);

(statearr_46092_47383[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (33))){
var inst_46024 = (state_46064[(23)]);
var inst_46026 = cljs.core.chunked_seq_QMARK_(inst_46024);
var state_46064__$1 = state_46064;
if(inst_46026){
var statearr_46093_47384 = state_46064__$1;
(statearr_46093_47384[(1)] = (36));

} else {
var statearr_46094_47385 = state_46064__$1;
(statearr_46094_47385[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (13))){
var inst_45955 = (state_46064[(24)]);
var inst_45958 = cljs.core.async.close_BANG_(inst_45955);
var state_46064__$1 = state_46064;
var statearr_46095_47386 = state_46064__$1;
(statearr_46095_47386[(2)] = inst_45958);

(statearr_46095_47386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (22))){
var inst_45978 = (state_46064[(8)]);
var inst_45981 = cljs.core.async.close_BANG_(inst_45978);
var state_46064__$1 = state_46064;
var statearr_46096_47387 = state_46064__$1;
(statearr_46096_47387[(2)] = inst_45981);

(statearr_46096_47387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (36))){
var inst_46024 = (state_46064[(23)]);
var inst_46028 = cljs.core.chunk_first(inst_46024);
var inst_46029 = cljs.core.chunk_rest(inst_46024);
var inst_46030 = cljs.core.count(inst_46028);
var inst_46006 = inst_46029;
var inst_46007 = inst_46028;
var inst_46008 = inst_46030;
var inst_46009 = (0);
var state_46064__$1 = (function (){var statearr_46097 = state_46064;
(statearr_46097[(19)] = inst_46006);

(statearr_46097[(10)] = inst_46007);

(statearr_46097[(20)] = inst_46008);

(statearr_46097[(11)] = inst_46009);

return statearr_46097;
})();
var statearr_46098_47389 = state_46064__$1;
(statearr_46098_47389[(2)] = null);

(statearr_46098_47389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (41))){
var inst_46024 = (state_46064[(23)]);
var inst_46039 = (state_46064[(2)]);
var inst_46040 = cljs.core.next(inst_46024);
var inst_46006 = inst_46040;
var inst_46007 = null;
var inst_46008 = (0);
var inst_46009 = (0);
var state_46064__$1 = (function (){var statearr_46099 = state_46064;
(statearr_46099[(19)] = inst_46006);

(statearr_46099[(10)] = inst_46007);

(statearr_46099[(20)] = inst_46008);

(statearr_46099[(11)] = inst_46009);

(statearr_46099[(25)] = inst_46039);

return statearr_46099;
})();
var statearr_46100_47390 = state_46064__$1;
(statearr_46100_47390[(2)] = null);

(statearr_46100_47390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (43))){
var state_46064__$1 = state_46064;
var statearr_46101_47391 = state_46064__$1;
(statearr_46101_47391[(2)] = null);

(statearr_46101_47391[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (29))){
var inst_46048 = (state_46064[(2)]);
var state_46064__$1 = state_46064;
var statearr_46102_47392 = state_46064__$1;
(statearr_46102_47392[(2)] = inst_46048);

(statearr_46102_47392[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (44))){
var inst_46057 = (state_46064[(2)]);
var state_46064__$1 = (function (){var statearr_46103 = state_46064;
(statearr_46103[(26)] = inst_46057);

return statearr_46103;
})();
var statearr_46104_47394 = state_46064__$1;
(statearr_46104_47394[(2)] = null);

(statearr_46104_47394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (6))){
var inst_45998 = (state_46064[(27)]);
var inst_45997 = cljs.core.deref(cs);
var inst_45998__$1 = cljs.core.keys(inst_45997);
var inst_45999 = cljs.core.count(inst_45998__$1);
var inst_46000 = cljs.core.reset_BANG_(dctr,inst_45999);
var inst_46005 = cljs.core.seq(inst_45998__$1);
var inst_46006 = inst_46005;
var inst_46007 = null;
var inst_46008 = (0);
var inst_46009 = (0);
var state_46064__$1 = (function (){var statearr_46105 = state_46064;
(statearr_46105[(19)] = inst_46006);

(statearr_46105[(10)] = inst_46007);

(statearr_46105[(20)] = inst_46008);

(statearr_46105[(28)] = inst_46000);

(statearr_46105[(27)] = inst_45998__$1);

(statearr_46105[(11)] = inst_46009);

return statearr_46105;
})();
var statearr_46106_47395 = state_46064__$1;
(statearr_46106_47395[(2)] = null);

(statearr_46106_47395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (28))){
var inst_46024 = (state_46064[(23)]);
var inst_46006 = (state_46064[(19)]);
var inst_46024__$1 = cljs.core.seq(inst_46006);
var state_46064__$1 = (function (){var statearr_46107 = state_46064;
(statearr_46107[(23)] = inst_46024__$1);

return statearr_46107;
})();
if(inst_46024__$1){
var statearr_46108_47396 = state_46064__$1;
(statearr_46108_47396[(1)] = (33));

} else {
var statearr_46109_47397 = state_46064__$1;
(statearr_46109_47397[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (25))){
var inst_46008 = (state_46064[(20)]);
var inst_46009 = (state_46064[(11)]);
var inst_46011 = (inst_46009 < inst_46008);
var inst_46012 = inst_46011;
var state_46064__$1 = state_46064;
if(cljs.core.truth_(inst_46012)){
var statearr_46110_47399 = state_46064__$1;
(statearr_46110_47399[(1)] = (27));

} else {
var statearr_46111_47400 = state_46064__$1;
(statearr_46111_47400[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (34))){
var state_46064__$1 = state_46064;
var statearr_46112_47401 = state_46064__$1;
(statearr_46112_47401[(2)] = null);

(statearr_46112_47401[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (17))){
var state_46064__$1 = state_46064;
var statearr_46113_47402 = state_46064__$1;
(statearr_46113_47402[(2)] = null);

(statearr_46113_47402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (3))){
var inst_46062 = (state_46064[(2)]);
var state_46064__$1 = state_46064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46064__$1,inst_46062);
} else {
if((state_val_46065 === (12))){
var inst_45993 = (state_46064[(2)]);
var state_46064__$1 = state_46064;
var statearr_46114_47403 = state_46064__$1;
(statearr_46114_47403[(2)] = inst_45993);

(statearr_46114_47403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (2))){
var state_46064__$1 = state_46064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46064__$1,(4),ch);
} else {
if((state_val_46065 === (23))){
var state_46064__$1 = state_46064;
var statearr_46115_47406 = state_46064__$1;
(statearr_46115_47406[(2)] = null);

(statearr_46115_47406[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (35))){
var inst_46046 = (state_46064[(2)]);
var state_46064__$1 = state_46064;
var statearr_46116_47408 = state_46064__$1;
(statearr_46116_47408[(2)] = inst_46046);

(statearr_46116_47408[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (19))){
var inst_45965 = (state_46064[(7)]);
var inst_45969 = cljs.core.chunk_first(inst_45965);
var inst_45970 = cljs.core.chunk_rest(inst_45965);
var inst_45971 = cljs.core.count(inst_45969);
var inst_45943 = inst_45970;
var inst_45944 = inst_45969;
var inst_45945 = inst_45971;
var inst_45946 = (0);
var state_46064__$1 = (function (){var statearr_46117 = state_46064;
(statearr_46117[(14)] = inst_45946);

(statearr_46117[(15)] = inst_45944);

(statearr_46117[(16)] = inst_45943);

(statearr_46117[(17)] = inst_45945);

return statearr_46117;
})();
var statearr_46118_47409 = state_46064__$1;
(statearr_46118_47409[(2)] = null);

(statearr_46118_47409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (11))){
var inst_45943 = (state_46064[(16)]);
var inst_45965 = (state_46064[(7)]);
var inst_45965__$1 = cljs.core.seq(inst_45943);
var state_46064__$1 = (function (){var statearr_46119 = state_46064;
(statearr_46119[(7)] = inst_45965__$1);

return statearr_46119;
})();
if(inst_45965__$1){
var statearr_46120_47411 = state_46064__$1;
(statearr_46120_47411[(1)] = (16));

} else {
var statearr_46121_47412 = state_46064__$1;
(statearr_46121_47412[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (9))){
var inst_45995 = (state_46064[(2)]);
var state_46064__$1 = state_46064;
var statearr_46122_47415 = state_46064__$1;
(statearr_46122_47415[(2)] = inst_45995);

(statearr_46122_47415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (5))){
var inst_45941 = cljs.core.deref(cs);
var inst_45942 = cljs.core.seq(inst_45941);
var inst_45943 = inst_45942;
var inst_45944 = null;
var inst_45945 = (0);
var inst_45946 = (0);
var state_46064__$1 = (function (){var statearr_46123 = state_46064;
(statearr_46123[(14)] = inst_45946);

(statearr_46123[(15)] = inst_45944);

(statearr_46123[(16)] = inst_45943);

(statearr_46123[(17)] = inst_45945);

return statearr_46123;
})();
var statearr_46124_47425 = state_46064__$1;
(statearr_46124_47425[(2)] = null);

(statearr_46124_47425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (14))){
var state_46064__$1 = state_46064;
var statearr_46125_47439 = state_46064__$1;
(statearr_46125_47439[(2)] = null);

(statearr_46125_47439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (45))){
var inst_46054 = (state_46064[(2)]);
var state_46064__$1 = state_46064;
var statearr_46126_47445 = state_46064__$1;
(statearr_46126_47445[(2)] = inst_46054);

(statearr_46126_47445[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (26))){
var inst_45998 = (state_46064[(27)]);
var inst_46050 = (state_46064[(2)]);
var inst_46051 = cljs.core.seq(inst_45998);
var state_46064__$1 = (function (){var statearr_46127 = state_46064;
(statearr_46127[(29)] = inst_46050);

return statearr_46127;
})();
if(inst_46051){
var statearr_46128_47446 = state_46064__$1;
(statearr_46128_47446[(1)] = (42));

} else {
var statearr_46129_47447 = state_46064__$1;
(statearr_46129_47447[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (16))){
var inst_45965 = (state_46064[(7)]);
var inst_45967 = cljs.core.chunked_seq_QMARK_(inst_45965);
var state_46064__$1 = state_46064;
if(inst_45967){
var statearr_46130_47448 = state_46064__$1;
(statearr_46130_47448[(1)] = (19));

} else {
var statearr_46131_47450 = state_46064__$1;
(statearr_46131_47450[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (38))){
var inst_46043 = (state_46064[(2)]);
var state_46064__$1 = state_46064;
var statearr_46132_47451 = state_46064__$1;
(statearr_46132_47451[(2)] = inst_46043);

(statearr_46132_47451[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (30))){
var state_46064__$1 = state_46064;
var statearr_46133_47453 = state_46064__$1;
(statearr_46133_47453[(2)] = null);

(statearr_46133_47453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (10))){
var inst_45946 = (state_46064[(14)]);
var inst_45944 = (state_46064[(15)]);
var inst_45954 = cljs.core._nth(inst_45944,inst_45946);
var inst_45955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45954,(0),null);
var inst_45956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45954,(1),null);
var state_46064__$1 = (function (){var statearr_46134 = state_46064;
(statearr_46134[(24)] = inst_45955);

return statearr_46134;
})();
if(cljs.core.truth_(inst_45956)){
var statearr_46135_47455 = state_46064__$1;
(statearr_46135_47455[(1)] = (13));

} else {
var statearr_46136_47456 = state_46064__$1;
(statearr_46136_47456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (18))){
var inst_45991 = (state_46064[(2)]);
var state_46064__$1 = state_46064;
var statearr_46137_47457 = state_46064__$1;
(statearr_46137_47457[(2)] = inst_45991);

(statearr_46137_47457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (42))){
var state_46064__$1 = state_46064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46064__$1,(45),dchan);
} else {
if((state_val_46065 === (37))){
var inst_46024 = (state_46064[(23)]);
var inst_46033 = (state_46064[(22)]);
var inst_45934 = (state_46064[(12)]);
var inst_46033__$1 = cljs.core.first(inst_46024);
var inst_46034 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46033__$1,inst_45934,done);
var state_46064__$1 = (function (){var statearr_46138 = state_46064;
(statearr_46138[(22)] = inst_46033__$1);

return statearr_46138;
})();
if(cljs.core.truth_(inst_46034)){
var statearr_46139_47461 = state_46064__$1;
(statearr_46139_47461[(1)] = (39));

} else {
var statearr_46140_47462 = state_46064__$1;
(statearr_46140_47462[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46065 === (8))){
var inst_45946 = (state_46064[(14)]);
var inst_45945 = (state_46064[(17)]);
var inst_45948 = (inst_45946 < inst_45945);
var inst_45949 = inst_45948;
var state_46064__$1 = state_46064;
if(cljs.core.truth_(inst_45949)){
var statearr_46141_47463 = state_46064__$1;
(statearr_46141_47463[(1)] = (10));

} else {
var statearr_46142_47464 = state_46064__$1;
(statearr_46142_47464[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__45291__auto__ = null;
var cljs$core$async$mult_$_state_machine__45291__auto____0 = (function (){
var statearr_46143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46143[(0)] = cljs$core$async$mult_$_state_machine__45291__auto__);

(statearr_46143[(1)] = (1));

return statearr_46143;
});
var cljs$core$async$mult_$_state_machine__45291__auto____1 = (function (state_46064){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_46064);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e46144){var ex__45294__auto__ = e46144;
var statearr_46145_47470 = state_46064;
(statearr_46145_47470[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_46064[(4)]))){
var statearr_46146_47472 = state_46064;
(statearr_46146_47472[(1)] = cljs.core.first((state_46064[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47473 = state_46064;
state_46064 = G__47473;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45291__auto__ = function(state_46064){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45291__auto____1.call(this,state_46064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45291__auto____0;
cljs$core$async$mult_$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45291__auto____1;
return cljs$core$async$mult_$_state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_46147 = f__45461__auto__();
(statearr_46147[(6)] = c__45460__auto___47361);

return statearr_46147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46149 = arguments.length;
switch (G__46149) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47479 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47479(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47481 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47481(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47484 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47484(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47486 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4423__auto__.call(null,m,state_map));
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4420__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47486(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47489 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4423__auto__.call(null,m,mode));
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4420__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47489(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47490 = arguments.length;
var i__4731__auto___47492 = (0);
while(true){
if((i__4731__auto___47492 < len__4730__auto___47490)){
args__4736__auto__.push((arguments[i__4731__auto___47492]));

var G__47493 = (i__4731__auto___47492 + (1));
i__4731__auto___47492 = G__47493;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46154){
var map__46155 = p__46154;
var map__46155__$1 = (((((!((map__46155 == null))))?(((((map__46155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46155):map__46155);
var opts = map__46155__$1;
var statearr_46157_47495 = state;
(statearr_46157_47495[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46158_47496 = state;
(statearr_46158_47496[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46159_47497 = state;
(statearr_46159_47497[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46150){
var G__46151 = cljs.core.first(seq46150);
var seq46150__$1 = cljs.core.next(seq46150);
var G__46152 = cljs.core.first(seq46150__$1);
var seq46150__$2 = cljs.core.next(seq46150__$1);
var G__46153 = cljs.core.first(seq46150__$2);
var seq46150__$3 = cljs.core.next(seq46150__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46151,G__46152,G__46153,seq46150__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46160 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46161){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46161 = meta46161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46162,meta46161__$1){
var self__ = this;
var _46162__$1 = this;
return (new cljs.core.async.t_cljs$core$async46160(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46161__$1));
}));

(cljs.core.async.t_cljs$core$async46160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46162){
var self__ = this;
var _46162__$1 = this;
return self__.meta46161;
}));

(cljs.core.async.t_cljs$core$async46160.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46160.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46160.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46160.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46160.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46160.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46160.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46160.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46161","meta46161",-1587027595,null)], null);
}));

(cljs.core.async.t_cljs$core$async46160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46160");

(cljs.core.async.t_cljs$core$async46160.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async46160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46160.
 */
cljs.core.async.__GT_t_cljs$core$async46160 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46160(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46161){
return (new cljs.core.async.t_cljs$core$async46160(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46161));
});

}

return (new cljs.core.async.t_cljs$core$async46160(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45460__auto___47509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_46264){
var state_val_46265 = (state_46264[(1)]);
if((state_val_46265 === (7))){
var inst_46179 = (state_46264[(2)]);
var state_46264__$1 = state_46264;
var statearr_46266_47510 = state_46264__$1;
(statearr_46266_47510[(2)] = inst_46179);

(statearr_46266_47510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (20))){
var inst_46191 = (state_46264[(7)]);
var state_46264__$1 = state_46264;
var statearr_46267_47514 = state_46264__$1;
(statearr_46267_47514[(2)] = inst_46191);

(statearr_46267_47514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (27))){
var state_46264__$1 = state_46264;
var statearr_46268_47515 = state_46264__$1;
(statearr_46268_47515[(2)] = null);

(statearr_46268_47515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (1))){
var inst_46166 = (state_46264[(8)]);
var inst_46166__$1 = calc_state();
var inst_46168 = (inst_46166__$1 == null);
var inst_46169 = cljs.core.not(inst_46168);
var state_46264__$1 = (function (){var statearr_46269 = state_46264;
(statearr_46269[(8)] = inst_46166__$1);

return statearr_46269;
})();
if(inst_46169){
var statearr_46270_47517 = state_46264__$1;
(statearr_46270_47517[(1)] = (2));

} else {
var statearr_46271_47522 = state_46264__$1;
(statearr_46271_47522[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (24))){
var inst_46215 = (state_46264[(9)]);
var inst_46238 = (state_46264[(10)]);
var inst_46224 = (state_46264[(11)]);
var inst_46238__$1 = (inst_46215.cljs$core$IFn$_invoke$arity$1 ? inst_46215.cljs$core$IFn$_invoke$arity$1(inst_46224) : inst_46215.call(null,inst_46224));
var state_46264__$1 = (function (){var statearr_46272 = state_46264;
(statearr_46272[(10)] = inst_46238__$1);

return statearr_46272;
})();
if(cljs.core.truth_(inst_46238__$1)){
var statearr_46273_47523 = state_46264__$1;
(statearr_46273_47523[(1)] = (29));

} else {
var statearr_46274_47524 = state_46264__$1;
(statearr_46274_47524[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (4))){
var inst_46182 = (state_46264[(2)]);
var state_46264__$1 = state_46264;
if(cljs.core.truth_(inst_46182)){
var statearr_46275_47525 = state_46264__$1;
(statearr_46275_47525[(1)] = (8));

} else {
var statearr_46276_47527 = state_46264__$1;
(statearr_46276_47527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (15))){
var inst_46209 = (state_46264[(2)]);
var state_46264__$1 = state_46264;
if(cljs.core.truth_(inst_46209)){
var statearr_46277_47529 = state_46264__$1;
(statearr_46277_47529[(1)] = (19));

} else {
var statearr_46278_47530 = state_46264__$1;
(statearr_46278_47530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (21))){
var inst_46214 = (state_46264[(12)]);
var inst_46214__$1 = (state_46264[(2)]);
var inst_46215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46214__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46214__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46214__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46264__$1 = (function (){var statearr_46279 = state_46264;
(statearr_46279[(13)] = inst_46216);

(statearr_46279[(12)] = inst_46214__$1);

(statearr_46279[(9)] = inst_46215);

return statearr_46279;
})();
return cljs.core.async.ioc_alts_BANG_(state_46264__$1,(22),inst_46217);
} else {
if((state_val_46265 === (31))){
var inst_46246 = (state_46264[(2)]);
var state_46264__$1 = state_46264;
if(cljs.core.truth_(inst_46246)){
var statearr_46280_47531 = state_46264__$1;
(statearr_46280_47531[(1)] = (32));

} else {
var statearr_46281_47532 = state_46264__$1;
(statearr_46281_47532[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (32))){
var inst_46223 = (state_46264[(14)]);
var state_46264__$1 = state_46264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46264__$1,(35),out,inst_46223);
} else {
if((state_val_46265 === (33))){
var inst_46214 = (state_46264[(12)]);
var inst_46191 = inst_46214;
var state_46264__$1 = (function (){var statearr_46282 = state_46264;
(statearr_46282[(7)] = inst_46191);

return statearr_46282;
})();
var statearr_46283_47533 = state_46264__$1;
(statearr_46283_47533[(2)] = null);

(statearr_46283_47533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (13))){
var inst_46191 = (state_46264[(7)]);
var inst_46198 = inst_46191.cljs$lang$protocol_mask$partition0$;
var inst_46199 = (inst_46198 & (64));
var inst_46200 = inst_46191.cljs$core$ISeq$;
var inst_46201 = (cljs.core.PROTOCOL_SENTINEL === inst_46200);
var inst_46202 = ((inst_46199) || (inst_46201));
var state_46264__$1 = state_46264;
if(cljs.core.truth_(inst_46202)){
var statearr_46284_47534 = state_46264__$1;
(statearr_46284_47534[(1)] = (16));

} else {
var statearr_46285_47535 = state_46264__$1;
(statearr_46285_47535[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (22))){
var inst_46223 = (state_46264[(14)]);
var inst_46224 = (state_46264[(11)]);
var inst_46222 = (state_46264[(2)]);
var inst_46223__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46222,(0),null);
var inst_46224__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46222,(1),null);
var inst_46225 = (inst_46223__$1 == null);
var inst_46226 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46224__$1,change);
var inst_46227 = ((inst_46225) || (inst_46226));
var state_46264__$1 = (function (){var statearr_46286 = state_46264;
(statearr_46286[(14)] = inst_46223__$1);

(statearr_46286[(11)] = inst_46224__$1);

return statearr_46286;
})();
if(cljs.core.truth_(inst_46227)){
var statearr_46287_47545 = state_46264__$1;
(statearr_46287_47545[(1)] = (23));

} else {
var statearr_46288_47546 = state_46264__$1;
(statearr_46288_47546[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (36))){
var inst_46214 = (state_46264[(12)]);
var inst_46191 = inst_46214;
var state_46264__$1 = (function (){var statearr_46289 = state_46264;
(statearr_46289[(7)] = inst_46191);

return statearr_46289;
})();
var statearr_46290_47550 = state_46264__$1;
(statearr_46290_47550[(2)] = null);

(statearr_46290_47550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (29))){
var inst_46238 = (state_46264[(10)]);
var state_46264__$1 = state_46264;
var statearr_46291_47551 = state_46264__$1;
(statearr_46291_47551[(2)] = inst_46238);

(statearr_46291_47551[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (6))){
var state_46264__$1 = state_46264;
var statearr_46292_47555 = state_46264__$1;
(statearr_46292_47555[(2)] = false);

(statearr_46292_47555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (28))){
var inst_46234 = (state_46264[(2)]);
var inst_46235 = calc_state();
var inst_46191 = inst_46235;
var state_46264__$1 = (function (){var statearr_46293 = state_46264;
(statearr_46293[(7)] = inst_46191);

(statearr_46293[(15)] = inst_46234);

return statearr_46293;
})();
var statearr_46294_47558 = state_46264__$1;
(statearr_46294_47558[(2)] = null);

(statearr_46294_47558[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (25))){
var inst_46260 = (state_46264[(2)]);
var state_46264__$1 = state_46264;
var statearr_46295_47561 = state_46264__$1;
(statearr_46295_47561[(2)] = inst_46260);

(statearr_46295_47561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (34))){
var inst_46258 = (state_46264[(2)]);
var state_46264__$1 = state_46264;
var statearr_46296_47565 = state_46264__$1;
(statearr_46296_47565[(2)] = inst_46258);

(statearr_46296_47565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (17))){
var state_46264__$1 = state_46264;
var statearr_46297_47566 = state_46264__$1;
(statearr_46297_47566[(2)] = false);

(statearr_46297_47566[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (3))){
var state_46264__$1 = state_46264;
var statearr_46298_47567 = state_46264__$1;
(statearr_46298_47567[(2)] = false);

(statearr_46298_47567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (12))){
var inst_46262 = (state_46264[(2)]);
var state_46264__$1 = state_46264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46264__$1,inst_46262);
} else {
if((state_val_46265 === (2))){
var inst_46166 = (state_46264[(8)]);
var inst_46171 = inst_46166.cljs$lang$protocol_mask$partition0$;
var inst_46172 = (inst_46171 & (64));
var inst_46173 = inst_46166.cljs$core$ISeq$;
var inst_46174 = (cljs.core.PROTOCOL_SENTINEL === inst_46173);
var inst_46175 = ((inst_46172) || (inst_46174));
var state_46264__$1 = state_46264;
if(cljs.core.truth_(inst_46175)){
var statearr_46299_47572 = state_46264__$1;
(statearr_46299_47572[(1)] = (5));

} else {
var statearr_46300_47573 = state_46264__$1;
(statearr_46300_47573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (23))){
var inst_46223 = (state_46264[(14)]);
var inst_46229 = (inst_46223 == null);
var state_46264__$1 = state_46264;
if(cljs.core.truth_(inst_46229)){
var statearr_46301_47577 = state_46264__$1;
(statearr_46301_47577[(1)] = (26));

} else {
var statearr_46302_47578 = state_46264__$1;
(statearr_46302_47578[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (35))){
var inst_46249 = (state_46264[(2)]);
var state_46264__$1 = state_46264;
if(cljs.core.truth_(inst_46249)){
var statearr_46303_47579 = state_46264__$1;
(statearr_46303_47579[(1)] = (36));

} else {
var statearr_46304_47580 = state_46264__$1;
(statearr_46304_47580[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (19))){
var inst_46191 = (state_46264[(7)]);
var inst_46211 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46191);
var state_46264__$1 = state_46264;
var statearr_46305_47583 = state_46264__$1;
(statearr_46305_47583[(2)] = inst_46211);

(statearr_46305_47583[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (11))){
var inst_46191 = (state_46264[(7)]);
var inst_46195 = (inst_46191 == null);
var inst_46196 = cljs.core.not(inst_46195);
var state_46264__$1 = state_46264;
if(inst_46196){
var statearr_46306_47587 = state_46264__$1;
(statearr_46306_47587[(1)] = (13));

} else {
var statearr_46307_47589 = state_46264__$1;
(statearr_46307_47589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (9))){
var inst_46166 = (state_46264[(8)]);
var state_46264__$1 = state_46264;
var statearr_46308_47590 = state_46264__$1;
(statearr_46308_47590[(2)] = inst_46166);

(statearr_46308_47590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (5))){
var state_46264__$1 = state_46264;
var statearr_46309_47591 = state_46264__$1;
(statearr_46309_47591[(2)] = true);

(statearr_46309_47591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (14))){
var state_46264__$1 = state_46264;
var statearr_46310_47595 = state_46264__$1;
(statearr_46310_47595[(2)] = false);

(statearr_46310_47595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (26))){
var inst_46224 = (state_46264[(11)]);
var inst_46231 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46224);
var state_46264__$1 = state_46264;
var statearr_46311_47596 = state_46264__$1;
(statearr_46311_47596[(2)] = inst_46231);

(statearr_46311_47596[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (16))){
var state_46264__$1 = state_46264;
var statearr_46312_47599 = state_46264__$1;
(statearr_46312_47599[(2)] = true);

(statearr_46312_47599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (38))){
var inst_46254 = (state_46264[(2)]);
var state_46264__$1 = state_46264;
var statearr_46313_47600 = state_46264__$1;
(statearr_46313_47600[(2)] = inst_46254);

(statearr_46313_47600[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (30))){
var inst_46216 = (state_46264[(13)]);
var inst_46215 = (state_46264[(9)]);
var inst_46224 = (state_46264[(11)]);
var inst_46241 = cljs.core.empty_QMARK_(inst_46215);
var inst_46242 = (inst_46216.cljs$core$IFn$_invoke$arity$1 ? inst_46216.cljs$core$IFn$_invoke$arity$1(inst_46224) : inst_46216.call(null,inst_46224));
var inst_46243 = cljs.core.not(inst_46242);
var inst_46244 = ((inst_46241) && (inst_46243));
var state_46264__$1 = state_46264;
var statearr_46314_47604 = state_46264__$1;
(statearr_46314_47604[(2)] = inst_46244);

(statearr_46314_47604[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (10))){
var inst_46166 = (state_46264[(8)]);
var inst_46187 = (state_46264[(2)]);
var inst_46188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46187,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46187,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46187,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46191 = inst_46166;
var state_46264__$1 = (function (){var statearr_46315 = state_46264;
(statearr_46315[(16)] = inst_46189);

(statearr_46315[(7)] = inst_46191);

(statearr_46315[(17)] = inst_46188);

(statearr_46315[(18)] = inst_46190);

return statearr_46315;
})();
var statearr_46316_47605 = state_46264__$1;
(statearr_46316_47605[(2)] = null);

(statearr_46316_47605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (18))){
var inst_46206 = (state_46264[(2)]);
var state_46264__$1 = state_46264;
var statearr_46317_47606 = state_46264__$1;
(statearr_46317_47606[(2)] = inst_46206);

(statearr_46317_47606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (37))){
var state_46264__$1 = state_46264;
var statearr_46318_47607 = state_46264__$1;
(statearr_46318_47607[(2)] = null);

(statearr_46318_47607[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46265 === (8))){
var inst_46166 = (state_46264[(8)]);
var inst_46184 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46166);
var state_46264__$1 = state_46264;
var statearr_46319_47609 = state_46264__$1;
(statearr_46319_47609[(2)] = inst_46184);

(statearr_46319_47609[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__45291__auto__ = null;
var cljs$core$async$mix_$_state_machine__45291__auto____0 = (function (){
var statearr_46320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46320[(0)] = cljs$core$async$mix_$_state_machine__45291__auto__);

(statearr_46320[(1)] = (1));

return statearr_46320;
});
var cljs$core$async$mix_$_state_machine__45291__auto____1 = (function (state_46264){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_46264);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e46321){var ex__45294__auto__ = e46321;
var statearr_46322_47613 = state_46264;
(statearr_46322_47613[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_46264[(4)]))){
var statearr_46323_47614 = state_46264;
(statearr_46323_47614[(1)] = cljs.core.first((state_46264[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47615 = state_46264;
state_46264 = G__47615;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45291__auto__ = function(state_46264){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45291__auto____1.call(this,state_46264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45291__auto____0;
cljs$core$async$mix_$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45291__auto____1;
return cljs$core$async$mix_$_state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_46324 = f__45461__auto__();
(statearr_46324[(6)] = c__45460__auto___47509);

return statearr_46324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47620 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4423__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4420__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47620(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47621 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4423__auto__.call(null,p,v,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4420__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47621(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47624 = (function() {
var G__47625 = null;
var G__47625__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4423__auto__.call(null,p));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4420__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47625__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4423__auto__.call(null,p,v));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4420__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47625 = function(p,v){
switch(arguments.length){
case 1:
return G__47625__1.call(this,p);
case 2:
return G__47625__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47625.cljs$core$IFn$_invoke$arity$1 = G__47625__1;
G__47625.cljs$core$IFn$_invoke$arity$2 = G__47625__2;
return G__47625;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46326 = arguments.length;
switch (G__46326) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47624(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47624(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46329 = arguments.length;
switch (G__46329) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46327_SHARP_){
if(cljs.core.truth_((p1__46327_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46327_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46327_SHARP_.call(null,topic)))){
return p1__46327_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46327_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46330 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46331){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46331 = meta46331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46332,meta46331__$1){
var self__ = this;
var _46332__$1 = this;
return (new cljs.core.async.t_cljs$core$async46330(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46331__$1));
}));

(cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46332){
var self__ = this;
var _46332__$1 = this;
return self__.meta46331;
}));

(cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46331","meta46331",-674866342,null)], null);
}));

(cljs.core.async.t_cljs$core$async46330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46330");

(cljs.core.async.t_cljs$core$async46330.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async46330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46330.
 */
cljs.core.async.__GT_t_cljs$core$async46330 = (function cljs$core$async$__GT_t_cljs$core$async46330(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46331){
return (new cljs.core.async.t_cljs$core$async46330(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46331));
});

}

return (new cljs.core.async.t_cljs$core$async46330(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45460__auto___47639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_46404){
var state_val_46405 = (state_46404[(1)]);
if((state_val_46405 === (7))){
var inst_46400 = (state_46404[(2)]);
var state_46404__$1 = state_46404;
var statearr_46406_47646 = state_46404__$1;
(statearr_46406_47646[(2)] = inst_46400);

(statearr_46406_47646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (20))){
var state_46404__$1 = state_46404;
var statearr_46407_47647 = state_46404__$1;
(statearr_46407_47647[(2)] = null);

(statearr_46407_47647[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (1))){
var state_46404__$1 = state_46404;
var statearr_46408_47648 = state_46404__$1;
(statearr_46408_47648[(2)] = null);

(statearr_46408_47648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (24))){
var inst_46383 = (state_46404[(7)]);
var inst_46392 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46383);
var state_46404__$1 = state_46404;
var statearr_46409_47650 = state_46404__$1;
(statearr_46409_47650[(2)] = inst_46392);

(statearr_46409_47650[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (4))){
var inst_46335 = (state_46404[(8)]);
var inst_46335__$1 = (state_46404[(2)]);
var inst_46336 = (inst_46335__$1 == null);
var state_46404__$1 = (function (){var statearr_46410 = state_46404;
(statearr_46410[(8)] = inst_46335__$1);

return statearr_46410;
})();
if(cljs.core.truth_(inst_46336)){
var statearr_46411_47652 = state_46404__$1;
(statearr_46411_47652[(1)] = (5));

} else {
var statearr_46412_47653 = state_46404__$1;
(statearr_46412_47653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (15))){
var inst_46377 = (state_46404[(2)]);
var state_46404__$1 = state_46404;
var statearr_46413_47654 = state_46404__$1;
(statearr_46413_47654[(2)] = inst_46377);

(statearr_46413_47654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (21))){
var inst_46397 = (state_46404[(2)]);
var state_46404__$1 = (function (){var statearr_46414 = state_46404;
(statearr_46414[(9)] = inst_46397);

return statearr_46414;
})();
var statearr_46415_47655 = state_46404__$1;
(statearr_46415_47655[(2)] = null);

(statearr_46415_47655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (13))){
var inst_46359 = (state_46404[(10)]);
var inst_46361 = cljs.core.chunked_seq_QMARK_(inst_46359);
var state_46404__$1 = state_46404;
if(inst_46361){
var statearr_46416_47658 = state_46404__$1;
(statearr_46416_47658[(1)] = (16));

} else {
var statearr_46417_47661 = state_46404__$1;
(statearr_46417_47661[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (22))){
var inst_46389 = (state_46404[(2)]);
var state_46404__$1 = state_46404;
if(cljs.core.truth_(inst_46389)){
var statearr_46418_47663 = state_46404__$1;
(statearr_46418_47663[(1)] = (23));

} else {
var statearr_46419_47664 = state_46404__$1;
(statearr_46419_47664[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (6))){
var inst_46385 = (state_46404[(11)]);
var inst_46335 = (state_46404[(8)]);
var inst_46383 = (state_46404[(7)]);
var inst_46383__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46335) : topic_fn.call(null,inst_46335));
var inst_46384 = cljs.core.deref(mults);
var inst_46385__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46384,inst_46383__$1);
var state_46404__$1 = (function (){var statearr_46420 = state_46404;
(statearr_46420[(11)] = inst_46385__$1);

(statearr_46420[(7)] = inst_46383__$1);

return statearr_46420;
})();
if(cljs.core.truth_(inst_46385__$1)){
var statearr_46421_47667 = state_46404__$1;
(statearr_46421_47667[(1)] = (19));

} else {
var statearr_46422_47668 = state_46404__$1;
(statearr_46422_47668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (25))){
var inst_46394 = (state_46404[(2)]);
var state_46404__$1 = state_46404;
var statearr_46423_47673 = state_46404__$1;
(statearr_46423_47673[(2)] = inst_46394);

(statearr_46423_47673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (17))){
var inst_46359 = (state_46404[(10)]);
var inst_46368 = cljs.core.first(inst_46359);
var inst_46369 = cljs.core.async.muxch_STAR_(inst_46368);
var inst_46370 = cljs.core.async.close_BANG_(inst_46369);
var inst_46371 = cljs.core.next(inst_46359);
var inst_46345 = inst_46371;
var inst_46346 = null;
var inst_46347 = (0);
var inst_46348 = (0);
var state_46404__$1 = (function (){var statearr_46424 = state_46404;
(statearr_46424[(12)] = inst_46348);

(statearr_46424[(13)] = inst_46347);

(statearr_46424[(14)] = inst_46345);

(statearr_46424[(15)] = inst_46346);

(statearr_46424[(16)] = inst_46370);

return statearr_46424;
})();
var statearr_46425_47678 = state_46404__$1;
(statearr_46425_47678[(2)] = null);

(statearr_46425_47678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (3))){
var inst_46402 = (state_46404[(2)]);
var state_46404__$1 = state_46404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46404__$1,inst_46402);
} else {
if((state_val_46405 === (12))){
var inst_46379 = (state_46404[(2)]);
var state_46404__$1 = state_46404;
var statearr_46426_47679 = state_46404__$1;
(statearr_46426_47679[(2)] = inst_46379);

(statearr_46426_47679[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (2))){
var state_46404__$1 = state_46404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46404__$1,(4),ch);
} else {
if((state_val_46405 === (23))){
var state_46404__$1 = state_46404;
var statearr_46427_47680 = state_46404__$1;
(statearr_46427_47680[(2)] = null);

(statearr_46427_47680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (19))){
var inst_46385 = (state_46404[(11)]);
var inst_46335 = (state_46404[(8)]);
var inst_46387 = cljs.core.async.muxch_STAR_(inst_46385);
var state_46404__$1 = state_46404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46404__$1,(22),inst_46387,inst_46335);
} else {
if((state_val_46405 === (11))){
var inst_46359 = (state_46404[(10)]);
var inst_46345 = (state_46404[(14)]);
var inst_46359__$1 = cljs.core.seq(inst_46345);
var state_46404__$1 = (function (){var statearr_46428 = state_46404;
(statearr_46428[(10)] = inst_46359__$1);

return statearr_46428;
})();
if(inst_46359__$1){
var statearr_46429_47688 = state_46404__$1;
(statearr_46429_47688[(1)] = (13));

} else {
var statearr_46430_47689 = state_46404__$1;
(statearr_46430_47689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (9))){
var inst_46381 = (state_46404[(2)]);
var state_46404__$1 = state_46404;
var statearr_46431_47696 = state_46404__$1;
(statearr_46431_47696[(2)] = inst_46381);

(statearr_46431_47696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (5))){
var inst_46342 = cljs.core.deref(mults);
var inst_46343 = cljs.core.vals(inst_46342);
var inst_46344 = cljs.core.seq(inst_46343);
var inst_46345 = inst_46344;
var inst_46346 = null;
var inst_46347 = (0);
var inst_46348 = (0);
var state_46404__$1 = (function (){var statearr_46432 = state_46404;
(statearr_46432[(12)] = inst_46348);

(statearr_46432[(13)] = inst_46347);

(statearr_46432[(14)] = inst_46345);

(statearr_46432[(15)] = inst_46346);

return statearr_46432;
})();
var statearr_46433_47697 = state_46404__$1;
(statearr_46433_47697[(2)] = null);

(statearr_46433_47697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (14))){
var state_46404__$1 = state_46404;
var statearr_46437_47698 = state_46404__$1;
(statearr_46437_47698[(2)] = null);

(statearr_46437_47698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (16))){
var inst_46359 = (state_46404[(10)]);
var inst_46363 = cljs.core.chunk_first(inst_46359);
var inst_46364 = cljs.core.chunk_rest(inst_46359);
var inst_46365 = cljs.core.count(inst_46363);
var inst_46345 = inst_46364;
var inst_46346 = inst_46363;
var inst_46347 = inst_46365;
var inst_46348 = (0);
var state_46404__$1 = (function (){var statearr_46438 = state_46404;
(statearr_46438[(12)] = inst_46348);

(statearr_46438[(13)] = inst_46347);

(statearr_46438[(14)] = inst_46345);

(statearr_46438[(15)] = inst_46346);

return statearr_46438;
})();
var statearr_46439_47700 = state_46404__$1;
(statearr_46439_47700[(2)] = null);

(statearr_46439_47700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (10))){
var inst_46348 = (state_46404[(12)]);
var inst_46347 = (state_46404[(13)]);
var inst_46345 = (state_46404[(14)]);
var inst_46346 = (state_46404[(15)]);
var inst_46353 = cljs.core._nth(inst_46346,inst_46348);
var inst_46354 = cljs.core.async.muxch_STAR_(inst_46353);
var inst_46355 = cljs.core.async.close_BANG_(inst_46354);
var inst_46356 = (inst_46348 + (1));
var tmp46434 = inst_46347;
var tmp46435 = inst_46345;
var tmp46436 = inst_46346;
var inst_46345__$1 = tmp46435;
var inst_46346__$1 = tmp46436;
var inst_46347__$1 = tmp46434;
var inst_46348__$1 = inst_46356;
var state_46404__$1 = (function (){var statearr_46440 = state_46404;
(statearr_46440[(12)] = inst_46348__$1);

(statearr_46440[(17)] = inst_46355);

(statearr_46440[(13)] = inst_46347__$1);

(statearr_46440[(14)] = inst_46345__$1);

(statearr_46440[(15)] = inst_46346__$1);

return statearr_46440;
})();
var statearr_46441_47701 = state_46404__$1;
(statearr_46441_47701[(2)] = null);

(statearr_46441_47701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (18))){
var inst_46374 = (state_46404[(2)]);
var state_46404__$1 = state_46404;
var statearr_46442_47702 = state_46404__$1;
(statearr_46442_47702[(2)] = inst_46374);

(statearr_46442_47702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46405 === (8))){
var inst_46348 = (state_46404[(12)]);
var inst_46347 = (state_46404[(13)]);
var inst_46350 = (inst_46348 < inst_46347);
var inst_46351 = inst_46350;
var state_46404__$1 = state_46404;
if(cljs.core.truth_(inst_46351)){
var statearr_46443_47709 = state_46404__$1;
(statearr_46443_47709[(1)] = (10));

} else {
var statearr_46444_47710 = state_46404__$1;
(statearr_46444_47710[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45291__auto__ = null;
var cljs$core$async$state_machine__45291__auto____0 = (function (){
var statearr_46445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46445[(0)] = cljs$core$async$state_machine__45291__auto__);

(statearr_46445[(1)] = (1));

return statearr_46445;
});
var cljs$core$async$state_machine__45291__auto____1 = (function (state_46404){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_46404);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e46446){var ex__45294__auto__ = e46446;
var statearr_46447_47711 = state_46404;
(statearr_46447_47711[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_46404[(4)]))){
var statearr_46448_47712 = state_46404;
(statearr_46448_47712[(1)] = cljs.core.first((state_46404[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47713 = state_46404;
state_46404 = G__47713;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$state_machine__45291__auto__ = function(state_46404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45291__auto____1.call(this,state_46404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45291__auto____0;
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45291__auto____1;
return cljs$core$async$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_46449 = f__45461__auto__();
(statearr_46449[(6)] = c__45460__auto___47639);

return statearr_46449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46451 = arguments.length;
switch (G__46451) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46453 = arguments.length;
switch (G__46453) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46455 = arguments.length;
switch (G__46455) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__45460__auto___47729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_46498){
var state_val_46499 = (state_46498[(1)]);
if((state_val_46499 === (7))){
var state_46498__$1 = state_46498;
var statearr_46500_47730 = state_46498__$1;
(statearr_46500_47730[(2)] = null);

(statearr_46500_47730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (1))){
var state_46498__$1 = state_46498;
var statearr_46501_47731 = state_46498__$1;
(statearr_46501_47731[(2)] = null);

(statearr_46501_47731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (4))){
var inst_46458 = (state_46498[(7)]);
var inst_46459 = (state_46498[(8)]);
var inst_46461 = (inst_46459 < inst_46458);
var state_46498__$1 = state_46498;
if(cljs.core.truth_(inst_46461)){
var statearr_46502_47734 = state_46498__$1;
(statearr_46502_47734[(1)] = (6));

} else {
var statearr_46503_47735 = state_46498__$1;
(statearr_46503_47735[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (15))){
var inst_46484 = (state_46498[(9)]);
var inst_46489 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46484);
var state_46498__$1 = state_46498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46498__$1,(17),out,inst_46489);
} else {
if((state_val_46499 === (13))){
var inst_46484 = (state_46498[(9)]);
var inst_46484__$1 = (state_46498[(2)]);
var inst_46485 = cljs.core.some(cljs.core.nil_QMARK_,inst_46484__$1);
var state_46498__$1 = (function (){var statearr_46504 = state_46498;
(statearr_46504[(9)] = inst_46484__$1);

return statearr_46504;
})();
if(cljs.core.truth_(inst_46485)){
var statearr_46505_47737 = state_46498__$1;
(statearr_46505_47737[(1)] = (14));

} else {
var statearr_46506_47744 = state_46498__$1;
(statearr_46506_47744[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (6))){
var state_46498__$1 = state_46498;
var statearr_46507_47745 = state_46498__$1;
(statearr_46507_47745[(2)] = null);

(statearr_46507_47745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (17))){
var inst_46491 = (state_46498[(2)]);
var state_46498__$1 = (function (){var statearr_46509 = state_46498;
(statearr_46509[(10)] = inst_46491);

return statearr_46509;
})();
var statearr_46510_47747 = state_46498__$1;
(statearr_46510_47747[(2)] = null);

(statearr_46510_47747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (3))){
var inst_46496 = (state_46498[(2)]);
var state_46498__$1 = state_46498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46498__$1,inst_46496);
} else {
if((state_val_46499 === (12))){
var _ = (function (){var statearr_46511 = state_46498;
(statearr_46511[(4)] = cljs.core.rest((state_46498[(4)])));

return statearr_46511;
})();
var state_46498__$1 = state_46498;
var ex46508 = (state_46498__$1[(2)]);
var statearr_46512_47748 = state_46498__$1;
(statearr_46512_47748[(5)] = ex46508);


if((ex46508 instanceof Object)){
var statearr_46513_47749 = state_46498__$1;
(statearr_46513_47749[(1)] = (11));

(statearr_46513_47749[(5)] = null);

} else {
throw ex46508;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (2))){
var inst_46457 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46458 = cnt;
var inst_46459 = (0);
var state_46498__$1 = (function (){var statearr_46514 = state_46498;
(statearr_46514[(7)] = inst_46458);

(statearr_46514[(8)] = inst_46459);

(statearr_46514[(11)] = inst_46457);

return statearr_46514;
})();
var statearr_46515_47750 = state_46498__$1;
(statearr_46515_47750[(2)] = null);

(statearr_46515_47750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (11))){
var inst_46463 = (state_46498[(2)]);
var inst_46464 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46498__$1 = (function (){var statearr_46516 = state_46498;
(statearr_46516[(12)] = inst_46463);

return statearr_46516;
})();
var statearr_46517_47751 = state_46498__$1;
(statearr_46517_47751[(2)] = inst_46464);

(statearr_46517_47751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (9))){
var inst_46459 = (state_46498[(8)]);
var _ = (function (){var statearr_46518 = state_46498;
(statearr_46518[(4)] = cljs.core.cons((12),(state_46498[(4)])));

return statearr_46518;
})();
var inst_46470 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46459) : chs__$1.call(null,inst_46459));
var inst_46471 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46459) : done.call(null,inst_46459));
var inst_46472 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46470,inst_46471);
var ___$1 = (function (){var statearr_46519 = state_46498;
(statearr_46519[(4)] = cljs.core.rest((state_46498[(4)])));

return statearr_46519;
})();
var state_46498__$1 = state_46498;
var statearr_46520_47752 = state_46498__$1;
(statearr_46520_47752[(2)] = inst_46472);

(statearr_46520_47752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (5))){
var inst_46482 = (state_46498[(2)]);
var state_46498__$1 = (function (){var statearr_46521 = state_46498;
(statearr_46521[(13)] = inst_46482);

return statearr_46521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46498__$1,(13),dchan);
} else {
if((state_val_46499 === (14))){
var inst_46487 = cljs.core.async.close_BANG_(out);
var state_46498__$1 = state_46498;
var statearr_46522_47753 = state_46498__$1;
(statearr_46522_47753[(2)] = inst_46487);

(statearr_46522_47753[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (16))){
var inst_46494 = (state_46498[(2)]);
var state_46498__$1 = state_46498;
var statearr_46523_47754 = state_46498__$1;
(statearr_46523_47754[(2)] = inst_46494);

(statearr_46523_47754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (10))){
var inst_46459 = (state_46498[(8)]);
var inst_46475 = (state_46498[(2)]);
var inst_46476 = (inst_46459 + (1));
var inst_46459__$1 = inst_46476;
var state_46498__$1 = (function (){var statearr_46524 = state_46498;
(statearr_46524[(8)] = inst_46459__$1);

(statearr_46524[(14)] = inst_46475);

return statearr_46524;
})();
var statearr_46525_47755 = state_46498__$1;
(statearr_46525_47755[(2)] = null);

(statearr_46525_47755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (8))){
var inst_46480 = (state_46498[(2)]);
var state_46498__$1 = state_46498;
var statearr_46526_47757 = state_46498__$1;
(statearr_46526_47757[(2)] = inst_46480);

(statearr_46526_47757[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45291__auto__ = null;
var cljs$core$async$state_machine__45291__auto____0 = (function (){
var statearr_46527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46527[(0)] = cljs$core$async$state_machine__45291__auto__);

(statearr_46527[(1)] = (1));

return statearr_46527;
});
var cljs$core$async$state_machine__45291__auto____1 = (function (state_46498){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_46498);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e46528){var ex__45294__auto__ = e46528;
var statearr_46529_47760 = state_46498;
(statearr_46529_47760[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_46498[(4)]))){
var statearr_46530_47761 = state_46498;
(statearr_46530_47761[(1)] = cljs.core.first((state_46498[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47766 = state_46498;
state_46498 = G__47766;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$state_machine__45291__auto__ = function(state_46498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45291__auto____1.call(this,state_46498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45291__auto____0;
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45291__auto____1;
return cljs$core$async$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_46531 = f__45461__auto__();
(statearr_46531[(6)] = c__45460__auto___47729);

return statearr_46531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46534 = arguments.length;
switch (G__46534) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45460__auto___47774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_46566){
var state_val_46567 = (state_46566[(1)]);
if((state_val_46567 === (7))){
var inst_46545 = (state_46566[(7)]);
var inst_46546 = (state_46566[(8)]);
var inst_46545__$1 = (state_46566[(2)]);
var inst_46546__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46545__$1,(0),null);
var inst_46547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46545__$1,(1),null);
var inst_46548 = (inst_46546__$1 == null);
var state_46566__$1 = (function (){var statearr_46568 = state_46566;
(statearr_46568[(9)] = inst_46547);

(statearr_46568[(7)] = inst_46545__$1);

(statearr_46568[(8)] = inst_46546__$1);

return statearr_46568;
})();
if(cljs.core.truth_(inst_46548)){
var statearr_46569_47779 = state_46566__$1;
(statearr_46569_47779[(1)] = (8));

} else {
var statearr_46570_47781 = state_46566__$1;
(statearr_46570_47781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (1))){
var inst_46535 = cljs.core.vec(chs);
var inst_46536 = inst_46535;
var state_46566__$1 = (function (){var statearr_46571 = state_46566;
(statearr_46571[(10)] = inst_46536);

return statearr_46571;
})();
var statearr_46572_47784 = state_46566__$1;
(statearr_46572_47784[(2)] = null);

(statearr_46572_47784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (4))){
var inst_46536 = (state_46566[(10)]);
var state_46566__$1 = state_46566;
return cljs.core.async.ioc_alts_BANG_(state_46566__$1,(7),inst_46536);
} else {
if((state_val_46567 === (6))){
var inst_46562 = (state_46566[(2)]);
var state_46566__$1 = state_46566;
var statearr_46573_47788 = state_46566__$1;
(statearr_46573_47788[(2)] = inst_46562);

(statearr_46573_47788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (3))){
var inst_46564 = (state_46566[(2)]);
var state_46566__$1 = state_46566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46566__$1,inst_46564);
} else {
if((state_val_46567 === (2))){
var inst_46536 = (state_46566[(10)]);
var inst_46538 = cljs.core.count(inst_46536);
var inst_46539 = (inst_46538 > (0));
var state_46566__$1 = state_46566;
if(cljs.core.truth_(inst_46539)){
var statearr_46575_47789 = state_46566__$1;
(statearr_46575_47789[(1)] = (4));

} else {
var statearr_46576_47790 = state_46566__$1;
(statearr_46576_47790[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (11))){
var inst_46536 = (state_46566[(10)]);
var inst_46555 = (state_46566[(2)]);
var tmp46574 = inst_46536;
var inst_46536__$1 = tmp46574;
var state_46566__$1 = (function (){var statearr_46577 = state_46566;
(statearr_46577[(10)] = inst_46536__$1);

(statearr_46577[(11)] = inst_46555);

return statearr_46577;
})();
var statearr_46578_47791 = state_46566__$1;
(statearr_46578_47791[(2)] = null);

(statearr_46578_47791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (9))){
var inst_46546 = (state_46566[(8)]);
var state_46566__$1 = state_46566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46566__$1,(11),out,inst_46546);
} else {
if((state_val_46567 === (5))){
var inst_46560 = cljs.core.async.close_BANG_(out);
var state_46566__$1 = state_46566;
var statearr_46579_47792 = state_46566__$1;
(statearr_46579_47792[(2)] = inst_46560);

(statearr_46579_47792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (10))){
var inst_46558 = (state_46566[(2)]);
var state_46566__$1 = state_46566;
var statearr_46580_47793 = state_46566__$1;
(statearr_46580_47793[(2)] = inst_46558);

(statearr_46580_47793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46567 === (8))){
var inst_46547 = (state_46566[(9)]);
var inst_46545 = (state_46566[(7)]);
var inst_46546 = (state_46566[(8)]);
var inst_46536 = (state_46566[(10)]);
var inst_46550 = (function (){var cs = inst_46536;
var vec__46541 = inst_46545;
var v = inst_46546;
var c = inst_46547;
return (function (p1__46532_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46532_SHARP_);
});
})();
var inst_46551 = cljs.core.filterv(inst_46550,inst_46536);
var inst_46536__$1 = inst_46551;
var state_46566__$1 = (function (){var statearr_46581 = state_46566;
(statearr_46581[(10)] = inst_46536__$1);

return statearr_46581;
})();
var statearr_46582_47794 = state_46566__$1;
(statearr_46582_47794[(2)] = null);

(statearr_46582_47794[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45291__auto__ = null;
var cljs$core$async$state_machine__45291__auto____0 = (function (){
var statearr_46583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46583[(0)] = cljs$core$async$state_machine__45291__auto__);

(statearr_46583[(1)] = (1));

return statearr_46583;
});
var cljs$core$async$state_machine__45291__auto____1 = (function (state_46566){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_46566);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e46584){var ex__45294__auto__ = e46584;
var statearr_46585_47797 = state_46566;
(statearr_46585_47797[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_46566[(4)]))){
var statearr_46586_47798 = state_46566;
(statearr_46586_47798[(1)] = cljs.core.first((state_46566[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47799 = state_46566;
state_46566 = G__47799;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$state_machine__45291__auto__ = function(state_46566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45291__auto____1.call(this,state_46566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45291__auto____0;
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45291__auto____1;
return cljs$core$async$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_46587 = f__45461__auto__();
(statearr_46587[(6)] = c__45460__auto___47774);

return statearr_46587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46589 = arguments.length;
switch (G__46589) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45460__auto___47801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_46613){
var state_val_46614 = (state_46613[(1)]);
if((state_val_46614 === (7))){
var inst_46595 = (state_46613[(7)]);
var inst_46595__$1 = (state_46613[(2)]);
var inst_46596 = (inst_46595__$1 == null);
var inst_46597 = cljs.core.not(inst_46596);
var state_46613__$1 = (function (){var statearr_46615 = state_46613;
(statearr_46615[(7)] = inst_46595__$1);

return statearr_46615;
})();
if(inst_46597){
var statearr_46616_47802 = state_46613__$1;
(statearr_46616_47802[(1)] = (8));

} else {
var statearr_46617_47803 = state_46613__$1;
(statearr_46617_47803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (1))){
var inst_46590 = (0);
var state_46613__$1 = (function (){var statearr_46618 = state_46613;
(statearr_46618[(8)] = inst_46590);

return statearr_46618;
})();
var statearr_46619_47805 = state_46613__$1;
(statearr_46619_47805[(2)] = null);

(statearr_46619_47805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (4))){
var state_46613__$1 = state_46613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46613__$1,(7),ch);
} else {
if((state_val_46614 === (6))){
var inst_46608 = (state_46613[(2)]);
var state_46613__$1 = state_46613;
var statearr_46620_47807 = state_46613__$1;
(statearr_46620_47807[(2)] = inst_46608);

(statearr_46620_47807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (3))){
var inst_46610 = (state_46613[(2)]);
var inst_46611 = cljs.core.async.close_BANG_(out);
var state_46613__$1 = (function (){var statearr_46621 = state_46613;
(statearr_46621[(9)] = inst_46610);

return statearr_46621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46613__$1,inst_46611);
} else {
if((state_val_46614 === (2))){
var inst_46590 = (state_46613[(8)]);
var inst_46592 = (inst_46590 < n);
var state_46613__$1 = state_46613;
if(cljs.core.truth_(inst_46592)){
var statearr_46622_47808 = state_46613__$1;
(statearr_46622_47808[(1)] = (4));

} else {
var statearr_46623_47809 = state_46613__$1;
(statearr_46623_47809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (11))){
var inst_46590 = (state_46613[(8)]);
var inst_46600 = (state_46613[(2)]);
var inst_46601 = (inst_46590 + (1));
var inst_46590__$1 = inst_46601;
var state_46613__$1 = (function (){var statearr_46624 = state_46613;
(statearr_46624[(10)] = inst_46600);

(statearr_46624[(8)] = inst_46590__$1);

return statearr_46624;
})();
var statearr_46625_47810 = state_46613__$1;
(statearr_46625_47810[(2)] = null);

(statearr_46625_47810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (9))){
var state_46613__$1 = state_46613;
var statearr_46626_47812 = state_46613__$1;
(statearr_46626_47812[(2)] = null);

(statearr_46626_47812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (5))){
var state_46613__$1 = state_46613;
var statearr_46627_47813 = state_46613__$1;
(statearr_46627_47813[(2)] = null);

(statearr_46627_47813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (10))){
var inst_46605 = (state_46613[(2)]);
var state_46613__$1 = state_46613;
var statearr_46628_47814 = state_46613__$1;
(statearr_46628_47814[(2)] = inst_46605);

(statearr_46628_47814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (8))){
var inst_46595 = (state_46613[(7)]);
var state_46613__$1 = state_46613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46613__$1,(11),out,inst_46595);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45291__auto__ = null;
var cljs$core$async$state_machine__45291__auto____0 = (function (){
var statearr_46629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46629[(0)] = cljs$core$async$state_machine__45291__auto__);

(statearr_46629[(1)] = (1));

return statearr_46629;
});
var cljs$core$async$state_machine__45291__auto____1 = (function (state_46613){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_46613);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e46630){var ex__45294__auto__ = e46630;
var statearr_46631_47815 = state_46613;
(statearr_46631_47815[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_46613[(4)]))){
var statearr_46632_47816 = state_46613;
(statearr_46632_47816[(1)] = cljs.core.first((state_46613[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47817 = state_46613;
state_46613 = G__47817;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$state_machine__45291__auto__ = function(state_46613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45291__auto____1.call(this,state_46613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45291__auto____0;
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45291__auto____1;
return cljs$core$async$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_46633 = f__45461__auto__();
(statearr_46633[(6)] = c__45460__auto___47801);

return statearr_46633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46635 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46635 = (function (f,ch,meta46636){
this.f = f;
this.ch = ch;
this.meta46636 = meta46636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46637,meta46636__$1){
var self__ = this;
var _46637__$1 = this;
return (new cljs.core.async.t_cljs$core$async46635(self__.f,self__.ch,meta46636__$1));
}));

(cljs.core.async.t_cljs$core$async46635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46637){
var self__ = this;
var _46637__$1 = this;
return self__.meta46636;
}));

(cljs.core.async.t_cljs$core$async46635.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46635.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46635.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46638 = (function (f,ch,meta46636,_,fn1,meta46639){
this.f = f;
this.ch = ch;
this.meta46636 = meta46636;
this._ = _;
this.fn1 = fn1;
this.meta46639 = meta46639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46640,meta46639__$1){
var self__ = this;
var _46640__$1 = this;
return (new cljs.core.async.t_cljs$core$async46638(self__.f,self__.ch,self__.meta46636,self__._,self__.fn1,meta46639__$1));
}));

(cljs.core.async.t_cljs$core$async46638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46640){
var self__ = this;
var _46640__$1 = this;
return self__.meta46639;
}));

(cljs.core.async.t_cljs$core$async46638.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46634_SHARP_){
var G__46641 = (((p1__46634_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46634_SHARP_) : self__.f.call(null,p1__46634_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46641) : f1.call(null,G__46641));
});
}));

(cljs.core.async.t_cljs$core$async46638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46636","meta46636",1187585491,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46635","cljs.core.async/t_cljs$core$async46635",1040411982,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46639","meta46639",272671401,null)], null);
}));

(cljs.core.async.t_cljs$core$async46638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46638");

(cljs.core.async.t_cljs$core$async46638.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async46638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46638.
 */
cljs.core.async.__GT_t_cljs$core$async46638 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46638(f__$1,ch__$1,meta46636__$1,___$2,fn1__$1,meta46639){
return (new cljs.core.async.t_cljs$core$async46638(f__$1,ch__$1,meta46636__$1,___$2,fn1__$1,meta46639));
});

}

return (new cljs.core.async.t_cljs$core$async46638(self__.f,self__.ch,self__.meta46636,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46642 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46642) : self__.f.call(null,G__46642));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46635.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46636","meta46636",1187585491,null)], null);
}));

(cljs.core.async.t_cljs$core$async46635.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46635");

(cljs.core.async.t_cljs$core$async46635.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async46635");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46635.
 */
cljs.core.async.__GT_t_cljs$core$async46635 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46635(f__$1,ch__$1,meta46636){
return (new cljs.core.async.t_cljs$core$async46635(f__$1,ch__$1,meta46636));
});

}

return (new cljs.core.async.t_cljs$core$async46635(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46643 = (function (f,ch,meta46644){
this.f = f;
this.ch = ch;
this.meta46644 = meta46644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46645,meta46644__$1){
var self__ = this;
var _46645__$1 = this;
return (new cljs.core.async.t_cljs$core$async46643(self__.f,self__.ch,meta46644__$1));
}));

(cljs.core.async.t_cljs$core$async46643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46645){
var self__ = this;
var _46645__$1 = this;
return self__.meta46644;
}));

(cljs.core.async.t_cljs$core$async46643.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46643.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46643.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46644","meta46644",1049235356,null)], null);
}));

(cljs.core.async.t_cljs$core$async46643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46643");

(cljs.core.async.t_cljs$core$async46643.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async46643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46643.
 */
cljs.core.async.__GT_t_cljs$core$async46643 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46643(f__$1,ch__$1,meta46644){
return (new cljs.core.async.t_cljs$core$async46643(f__$1,ch__$1,meta46644));
});

}

return (new cljs.core.async.t_cljs$core$async46643(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46646 = (function (p,ch,meta46647){
this.p = p;
this.ch = ch;
this.meta46647 = meta46647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46648,meta46647__$1){
var self__ = this;
var _46648__$1 = this;
return (new cljs.core.async.t_cljs$core$async46646(self__.p,self__.ch,meta46647__$1));
}));

(cljs.core.async.t_cljs$core$async46646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46648){
var self__ = this;
var _46648__$1 = this;
return self__.meta46647;
}));

(cljs.core.async.t_cljs$core$async46646.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46646.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46646.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46646.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46647","meta46647",546758799,null)], null);
}));

(cljs.core.async.t_cljs$core$async46646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46646");

(cljs.core.async.t_cljs$core$async46646.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async46646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46646.
 */
cljs.core.async.__GT_t_cljs$core$async46646 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46646(p__$1,ch__$1,meta46647){
return (new cljs.core.async.t_cljs$core$async46646(p__$1,ch__$1,meta46647));
});

}

return (new cljs.core.async.t_cljs$core$async46646(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46650 = arguments.length;
switch (G__46650) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45460__auto___47833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_46671){
var state_val_46672 = (state_46671[(1)]);
if((state_val_46672 === (7))){
var inst_46667 = (state_46671[(2)]);
var state_46671__$1 = state_46671;
var statearr_46673_47837 = state_46671__$1;
(statearr_46673_47837[(2)] = inst_46667);

(statearr_46673_47837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46672 === (1))){
var state_46671__$1 = state_46671;
var statearr_46674_47838 = state_46671__$1;
(statearr_46674_47838[(2)] = null);

(statearr_46674_47838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46672 === (4))){
var inst_46653 = (state_46671[(7)]);
var inst_46653__$1 = (state_46671[(2)]);
var inst_46654 = (inst_46653__$1 == null);
var state_46671__$1 = (function (){var statearr_46675 = state_46671;
(statearr_46675[(7)] = inst_46653__$1);

return statearr_46675;
})();
if(cljs.core.truth_(inst_46654)){
var statearr_46676_47842 = state_46671__$1;
(statearr_46676_47842[(1)] = (5));

} else {
var statearr_46677_47843 = state_46671__$1;
(statearr_46677_47843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46672 === (6))){
var inst_46653 = (state_46671[(7)]);
var inst_46658 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46653) : p.call(null,inst_46653));
var state_46671__$1 = state_46671;
if(cljs.core.truth_(inst_46658)){
var statearr_46678_47847 = state_46671__$1;
(statearr_46678_47847[(1)] = (8));

} else {
var statearr_46679_47849 = state_46671__$1;
(statearr_46679_47849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46672 === (3))){
var inst_46669 = (state_46671[(2)]);
var state_46671__$1 = state_46671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46671__$1,inst_46669);
} else {
if((state_val_46672 === (2))){
var state_46671__$1 = state_46671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46671__$1,(4),ch);
} else {
if((state_val_46672 === (11))){
var inst_46661 = (state_46671[(2)]);
var state_46671__$1 = state_46671;
var statearr_46680_47853 = state_46671__$1;
(statearr_46680_47853[(2)] = inst_46661);

(statearr_46680_47853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46672 === (9))){
var state_46671__$1 = state_46671;
var statearr_46681_47854 = state_46671__$1;
(statearr_46681_47854[(2)] = null);

(statearr_46681_47854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46672 === (5))){
var inst_46656 = cljs.core.async.close_BANG_(out);
var state_46671__$1 = state_46671;
var statearr_46682_47855 = state_46671__$1;
(statearr_46682_47855[(2)] = inst_46656);

(statearr_46682_47855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46672 === (10))){
var inst_46664 = (state_46671[(2)]);
var state_46671__$1 = (function (){var statearr_46683 = state_46671;
(statearr_46683[(8)] = inst_46664);

return statearr_46683;
})();
var statearr_46684_47856 = state_46671__$1;
(statearr_46684_47856[(2)] = null);

(statearr_46684_47856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46672 === (8))){
var inst_46653 = (state_46671[(7)]);
var state_46671__$1 = state_46671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46671__$1,(11),out,inst_46653);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45291__auto__ = null;
var cljs$core$async$state_machine__45291__auto____0 = (function (){
var statearr_46685 = [null,null,null,null,null,null,null,null,null];
(statearr_46685[(0)] = cljs$core$async$state_machine__45291__auto__);

(statearr_46685[(1)] = (1));

return statearr_46685;
});
var cljs$core$async$state_machine__45291__auto____1 = (function (state_46671){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_46671);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e46686){var ex__45294__auto__ = e46686;
var statearr_46687_47859 = state_46671;
(statearr_46687_47859[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_46671[(4)]))){
var statearr_46688_47860 = state_46671;
(statearr_46688_47860[(1)] = cljs.core.first((state_46671[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47861 = state_46671;
state_46671 = G__47861;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$state_machine__45291__auto__ = function(state_46671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45291__auto____1.call(this,state_46671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45291__auto____0;
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45291__auto____1;
return cljs$core$async$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_46689 = f__45461__auto__();
(statearr_46689[(6)] = c__45460__auto___47833);

return statearr_46689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46691 = arguments.length;
switch (G__46691) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45460__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_46753){
var state_val_46754 = (state_46753[(1)]);
if((state_val_46754 === (7))){
var inst_46749 = (state_46753[(2)]);
var state_46753__$1 = state_46753;
var statearr_46755_47863 = state_46753__$1;
(statearr_46755_47863[(2)] = inst_46749);

(statearr_46755_47863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (20))){
var inst_46719 = (state_46753[(7)]);
var inst_46730 = (state_46753[(2)]);
var inst_46731 = cljs.core.next(inst_46719);
var inst_46705 = inst_46731;
var inst_46706 = null;
var inst_46707 = (0);
var inst_46708 = (0);
var state_46753__$1 = (function (){var statearr_46756 = state_46753;
(statearr_46756[(8)] = inst_46706);

(statearr_46756[(9)] = inst_46708);

(statearr_46756[(10)] = inst_46705);

(statearr_46756[(11)] = inst_46730);

(statearr_46756[(12)] = inst_46707);

return statearr_46756;
})();
var statearr_46757_47864 = state_46753__$1;
(statearr_46757_47864[(2)] = null);

(statearr_46757_47864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (1))){
var state_46753__$1 = state_46753;
var statearr_46758_47865 = state_46753__$1;
(statearr_46758_47865[(2)] = null);

(statearr_46758_47865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (4))){
var inst_46694 = (state_46753[(13)]);
var inst_46694__$1 = (state_46753[(2)]);
var inst_46695 = (inst_46694__$1 == null);
var state_46753__$1 = (function (){var statearr_46759 = state_46753;
(statearr_46759[(13)] = inst_46694__$1);

return statearr_46759;
})();
if(cljs.core.truth_(inst_46695)){
var statearr_46760_47866 = state_46753__$1;
(statearr_46760_47866[(1)] = (5));

} else {
var statearr_46761_47867 = state_46753__$1;
(statearr_46761_47867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (15))){
var state_46753__$1 = state_46753;
var statearr_46765_47868 = state_46753__$1;
(statearr_46765_47868[(2)] = null);

(statearr_46765_47868[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (21))){
var state_46753__$1 = state_46753;
var statearr_46766_47869 = state_46753__$1;
(statearr_46766_47869[(2)] = null);

(statearr_46766_47869[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (13))){
var inst_46706 = (state_46753[(8)]);
var inst_46708 = (state_46753[(9)]);
var inst_46705 = (state_46753[(10)]);
var inst_46707 = (state_46753[(12)]);
var inst_46715 = (state_46753[(2)]);
var inst_46716 = (inst_46708 + (1));
var tmp46762 = inst_46706;
var tmp46763 = inst_46705;
var tmp46764 = inst_46707;
var inst_46705__$1 = tmp46763;
var inst_46706__$1 = tmp46762;
var inst_46707__$1 = tmp46764;
var inst_46708__$1 = inst_46716;
var state_46753__$1 = (function (){var statearr_46767 = state_46753;
(statearr_46767[(8)] = inst_46706__$1);

(statearr_46767[(9)] = inst_46708__$1);

(statearr_46767[(14)] = inst_46715);

(statearr_46767[(10)] = inst_46705__$1);

(statearr_46767[(12)] = inst_46707__$1);

return statearr_46767;
})();
var statearr_46768_47874 = state_46753__$1;
(statearr_46768_47874[(2)] = null);

(statearr_46768_47874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (22))){
var state_46753__$1 = state_46753;
var statearr_46769_47875 = state_46753__$1;
(statearr_46769_47875[(2)] = null);

(statearr_46769_47875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (6))){
var inst_46694 = (state_46753[(13)]);
var inst_46703 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46694) : f.call(null,inst_46694));
var inst_46704 = cljs.core.seq(inst_46703);
var inst_46705 = inst_46704;
var inst_46706 = null;
var inst_46707 = (0);
var inst_46708 = (0);
var state_46753__$1 = (function (){var statearr_46770 = state_46753;
(statearr_46770[(8)] = inst_46706);

(statearr_46770[(9)] = inst_46708);

(statearr_46770[(10)] = inst_46705);

(statearr_46770[(12)] = inst_46707);

return statearr_46770;
})();
var statearr_46771_47876 = state_46753__$1;
(statearr_46771_47876[(2)] = null);

(statearr_46771_47876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (17))){
var inst_46719 = (state_46753[(7)]);
var inst_46723 = cljs.core.chunk_first(inst_46719);
var inst_46724 = cljs.core.chunk_rest(inst_46719);
var inst_46725 = cljs.core.count(inst_46723);
var inst_46705 = inst_46724;
var inst_46706 = inst_46723;
var inst_46707 = inst_46725;
var inst_46708 = (0);
var state_46753__$1 = (function (){var statearr_46772 = state_46753;
(statearr_46772[(8)] = inst_46706);

(statearr_46772[(9)] = inst_46708);

(statearr_46772[(10)] = inst_46705);

(statearr_46772[(12)] = inst_46707);

return statearr_46772;
})();
var statearr_46773_47877 = state_46753__$1;
(statearr_46773_47877[(2)] = null);

(statearr_46773_47877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (3))){
var inst_46751 = (state_46753[(2)]);
var state_46753__$1 = state_46753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46753__$1,inst_46751);
} else {
if((state_val_46754 === (12))){
var inst_46739 = (state_46753[(2)]);
var state_46753__$1 = state_46753;
var statearr_46774_47880 = state_46753__$1;
(statearr_46774_47880[(2)] = inst_46739);

(statearr_46774_47880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (2))){
var state_46753__$1 = state_46753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46753__$1,(4),in$);
} else {
if((state_val_46754 === (23))){
var inst_46747 = (state_46753[(2)]);
var state_46753__$1 = state_46753;
var statearr_46775_47883 = state_46753__$1;
(statearr_46775_47883[(2)] = inst_46747);

(statearr_46775_47883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (19))){
var inst_46734 = (state_46753[(2)]);
var state_46753__$1 = state_46753;
var statearr_46776_47884 = state_46753__$1;
(statearr_46776_47884[(2)] = inst_46734);

(statearr_46776_47884[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (11))){
var inst_46719 = (state_46753[(7)]);
var inst_46705 = (state_46753[(10)]);
var inst_46719__$1 = cljs.core.seq(inst_46705);
var state_46753__$1 = (function (){var statearr_46777 = state_46753;
(statearr_46777[(7)] = inst_46719__$1);

return statearr_46777;
})();
if(inst_46719__$1){
var statearr_46778_47885 = state_46753__$1;
(statearr_46778_47885[(1)] = (14));

} else {
var statearr_46779_47886 = state_46753__$1;
(statearr_46779_47886[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (9))){
var inst_46741 = (state_46753[(2)]);
var inst_46742 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46753__$1 = (function (){var statearr_46780 = state_46753;
(statearr_46780[(15)] = inst_46741);

return statearr_46780;
})();
if(cljs.core.truth_(inst_46742)){
var statearr_46781_47887 = state_46753__$1;
(statearr_46781_47887[(1)] = (21));

} else {
var statearr_46782_47888 = state_46753__$1;
(statearr_46782_47888[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (5))){
var inst_46697 = cljs.core.async.close_BANG_(out);
var state_46753__$1 = state_46753;
var statearr_46783_47890 = state_46753__$1;
(statearr_46783_47890[(2)] = inst_46697);

(statearr_46783_47890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (14))){
var inst_46719 = (state_46753[(7)]);
var inst_46721 = cljs.core.chunked_seq_QMARK_(inst_46719);
var state_46753__$1 = state_46753;
if(inst_46721){
var statearr_46784_47891 = state_46753__$1;
(statearr_46784_47891[(1)] = (17));

} else {
var statearr_46785_47892 = state_46753__$1;
(statearr_46785_47892[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (16))){
var inst_46737 = (state_46753[(2)]);
var state_46753__$1 = state_46753;
var statearr_46786_47893 = state_46753__$1;
(statearr_46786_47893[(2)] = inst_46737);

(statearr_46786_47893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46754 === (10))){
var inst_46706 = (state_46753[(8)]);
var inst_46708 = (state_46753[(9)]);
var inst_46713 = cljs.core._nth(inst_46706,inst_46708);
var state_46753__$1 = state_46753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46753__$1,(13),out,inst_46713);
} else {
if((state_val_46754 === (18))){
var inst_46719 = (state_46753[(7)]);
var inst_46728 = cljs.core.first(inst_46719);
var state_46753__$1 = state_46753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46753__$1,(20),out,inst_46728);
} else {
if((state_val_46754 === (8))){
var inst_46708 = (state_46753[(9)]);
var inst_46707 = (state_46753[(12)]);
var inst_46710 = (inst_46708 < inst_46707);
var inst_46711 = inst_46710;
var state_46753__$1 = state_46753;
if(cljs.core.truth_(inst_46711)){
var statearr_46787_47894 = state_46753__$1;
(statearr_46787_47894[(1)] = (10));

} else {
var statearr_46788_47895 = state_46753__$1;
(statearr_46788_47895[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45291__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45291__auto____0 = (function (){
var statearr_46789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46789[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45291__auto__);

(statearr_46789[(1)] = (1));

return statearr_46789;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45291__auto____1 = (function (state_46753){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_46753);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e46790){var ex__45294__auto__ = e46790;
var statearr_46791_47897 = state_46753;
(statearr_46791_47897[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_46753[(4)]))){
var statearr_46792_47898 = state_46753;
(statearr_46792_47898[(1)] = cljs.core.first((state_46753[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47903 = state_46753;
state_46753 = G__47903;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45291__auto__ = function(state_46753){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45291__auto____1.call(this,state_46753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45291__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45291__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_46793 = f__45461__auto__();
(statearr_46793[(6)] = c__45460__auto__);

return statearr_46793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));

return c__45460__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46795 = arguments.length;
switch (G__46795) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46797 = arguments.length;
switch (G__46797) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46799 = arguments.length;
switch (G__46799) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45460__auto___47907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_46823){
var state_val_46824 = (state_46823[(1)]);
if((state_val_46824 === (7))){
var inst_46818 = (state_46823[(2)]);
var state_46823__$1 = state_46823;
var statearr_46825_47908 = state_46823__$1;
(statearr_46825_47908[(2)] = inst_46818);

(statearr_46825_47908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46824 === (1))){
var inst_46800 = null;
var state_46823__$1 = (function (){var statearr_46826 = state_46823;
(statearr_46826[(7)] = inst_46800);

return statearr_46826;
})();
var statearr_46827_47909 = state_46823__$1;
(statearr_46827_47909[(2)] = null);

(statearr_46827_47909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46824 === (4))){
var inst_46803 = (state_46823[(8)]);
var inst_46803__$1 = (state_46823[(2)]);
var inst_46804 = (inst_46803__$1 == null);
var inst_46805 = cljs.core.not(inst_46804);
var state_46823__$1 = (function (){var statearr_46828 = state_46823;
(statearr_46828[(8)] = inst_46803__$1);

return statearr_46828;
})();
if(inst_46805){
var statearr_46829_47910 = state_46823__$1;
(statearr_46829_47910[(1)] = (5));

} else {
var statearr_46830_47911 = state_46823__$1;
(statearr_46830_47911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46824 === (6))){
var state_46823__$1 = state_46823;
var statearr_46831_47912 = state_46823__$1;
(statearr_46831_47912[(2)] = null);

(statearr_46831_47912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46824 === (3))){
var inst_46820 = (state_46823[(2)]);
var inst_46821 = cljs.core.async.close_BANG_(out);
var state_46823__$1 = (function (){var statearr_46832 = state_46823;
(statearr_46832[(9)] = inst_46820);

return statearr_46832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46823__$1,inst_46821);
} else {
if((state_val_46824 === (2))){
var state_46823__$1 = state_46823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46823__$1,(4),ch);
} else {
if((state_val_46824 === (11))){
var inst_46803 = (state_46823[(8)]);
var inst_46812 = (state_46823[(2)]);
var inst_46800 = inst_46803;
var state_46823__$1 = (function (){var statearr_46833 = state_46823;
(statearr_46833[(7)] = inst_46800);

(statearr_46833[(10)] = inst_46812);

return statearr_46833;
})();
var statearr_46834_47913 = state_46823__$1;
(statearr_46834_47913[(2)] = null);

(statearr_46834_47913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46824 === (9))){
var inst_46803 = (state_46823[(8)]);
var state_46823__$1 = state_46823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46823__$1,(11),out,inst_46803);
} else {
if((state_val_46824 === (5))){
var inst_46800 = (state_46823[(7)]);
var inst_46803 = (state_46823[(8)]);
var inst_46807 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46803,inst_46800);
var state_46823__$1 = state_46823;
if(inst_46807){
var statearr_46836_47914 = state_46823__$1;
(statearr_46836_47914[(1)] = (8));

} else {
var statearr_46837_47915 = state_46823__$1;
(statearr_46837_47915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46824 === (10))){
var inst_46815 = (state_46823[(2)]);
var state_46823__$1 = state_46823;
var statearr_46838_47916 = state_46823__$1;
(statearr_46838_47916[(2)] = inst_46815);

(statearr_46838_47916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46824 === (8))){
var inst_46800 = (state_46823[(7)]);
var tmp46835 = inst_46800;
var inst_46800__$1 = tmp46835;
var state_46823__$1 = (function (){var statearr_46839 = state_46823;
(statearr_46839[(7)] = inst_46800__$1);

return statearr_46839;
})();
var statearr_46840_47917 = state_46823__$1;
(statearr_46840_47917[(2)] = null);

(statearr_46840_47917[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45291__auto__ = null;
var cljs$core$async$state_machine__45291__auto____0 = (function (){
var statearr_46841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46841[(0)] = cljs$core$async$state_machine__45291__auto__);

(statearr_46841[(1)] = (1));

return statearr_46841;
});
var cljs$core$async$state_machine__45291__auto____1 = (function (state_46823){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_46823);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e46842){var ex__45294__auto__ = e46842;
var statearr_46843_47920 = state_46823;
(statearr_46843_47920[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_46823[(4)]))){
var statearr_46844_47921 = state_46823;
(statearr_46844_47921[(1)] = cljs.core.first((state_46823[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47922 = state_46823;
state_46823 = G__47922;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$state_machine__45291__auto__ = function(state_46823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45291__auto____1.call(this,state_46823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45291__auto____0;
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45291__auto____1;
return cljs$core$async$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_46845 = f__45461__auto__();
(statearr_46845[(6)] = c__45460__auto___47907);

return statearr_46845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46847 = arguments.length;
switch (G__46847) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45460__auto___47925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_46885){
var state_val_46886 = (state_46885[(1)]);
if((state_val_46886 === (7))){
var inst_46881 = (state_46885[(2)]);
var state_46885__$1 = state_46885;
var statearr_46887_47926 = state_46885__$1;
(statearr_46887_47926[(2)] = inst_46881);

(statearr_46887_47926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46886 === (1))){
var inst_46848 = (new Array(n));
var inst_46849 = inst_46848;
var inst_46850 = (0);
var state_46885__$1 = (function (){var statearr_46888 = state_46885;
(statearr_46888[(7)] = inst_46849);

(statearr_46888[(8)] = inst_46850);

return statearr_46888;
})();
var statearr_46889_47927 = state_46885__$1;
(statearr_46889_47927[(2)] = null);

(statearr_46889_47927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46886 === (4))){
var inst_46853 = (state_46885[(9)]);
var inst_46853__$1 = (state_46885[(2)]);
var inst_46854 = (inst_46853__$1 == null);
var inst_46855 = cljs.core.not(inst_46854);
var state_46885__$1 = (function (){var statearr_46890 = state_46885;
(statearr_46890[(9)] = inst_46853__$1);

return statearr_46890;
})();
if(inst_46855){
var statearr_46891_47928 = state_46885__$1;
(statearr_46891_47928[(1)] = (5));

} else {
var statearr_46892_47929 = state_46885__$1;
(statearr_46892_47929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46886 === (15))){
var inst_46875 = (state_46885[(2)]);
var state_46885__$1 = state_46885;
var statearr_46893_47930 = state_46885__$1;
(statearr_46893_47930[(2)] = inst_46875);

(statearr_46893_47930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46886 === (13))){
var state_46885__$1 = state_46885;
var statearr_46894_47931 = state_46885__$1;
(statearr_46894_47931[(2)] = null);

(statearr_46894_47931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46886 === (6))){
var inst_46850 = (state_46885[(8)]);
var inst_46871 = (inst_46850 > (0));
var state_46885__$1 = state_46885;
if(cljs.core.truth_(inst_46871)){
var statearr_46895_47932 = state_46885__$1;
(statearr_46895_47932[(1)] = (12));

} else {
var statearr_46896_47933 = state_46885__$1;
(statearr_46896_47933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46886 === (3))){
var inst_46883 = (state_46885[(2)]);
var state_46885__$1 = state_46885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46885__$1,inst_46883);
} else {
if((state_val_46886 === (12))){
var inst_46849 = (state_46885[(7)]);
var inst_46873 = cljs.core.vec(inst_46849);
var state_46885__$1 = state_46885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46885__$1,(15),out,inst_46873);
} else {
if((state_val_46886 === (2))){
var state_46885__$1 = state_46885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46885__$1,(4),ch);
} else {
if((state_val_46886 === (11))){
var inst_46865 = (state_46885[(2)]);
var inst_46866 = (new Array(n));
var inst_46849 = inst_46866;
var inst_46850 = (0);
var state_46885__$1 = (function (){var statearr_46897 = state_46885;
(statearr_46897[(7)] = inst_46849);

(statearr_46897[(10)] = inst_46865);

(statearr_46897[(8)] = inst_46850);

return statearr_46897;
})();
var statearr_46898_47934 = state_46885__$1;
(statearr_46898_47934[(2)] = null);

(statearr_46898_47934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46886 === (9))){
var inst_46849 = (state_46885[(7)]);
var inst_46863 = cljs.core.vec(inst_46849);
var state_46885__$1 = state_46885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46885__$1,(11),out,inst_46863);
} else {
if((state_val_46886 === (5))){
var inst_46853 = (state_46885[(9)]);
var inst_46849 = (state_46885[(7)]);
var inst_46858 = (state_46885[(11)]);
var inst_46850 = (state_46885[(8)]);
var inst_46857 = (inst_46849[inst_46850] = inst_46853);
var inst_46858__$1 = (inst_46850 + (1));
var inst_46859 = (inst_46858__$1 < n);
var state_46885__$1 = (function (){var statearr_46899 = state_46885;
(statearr_46899[(12)] = inst_46857);

(statearr_46899[(11)] = inst_46858__$1);

return statearr_46899;
})();
if(cljs.core.truth_(inst_46859)){
var statearr_46900_47936 = state_46885__$1;
(statearr_46900_47936[(1)] = (8));

} else {
var statearr_46901_47937 = state_46885__$1;
(statearr_46901_47937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46886 === (14))){
var inst_46878 = (state_46885[(2)]);
var inst_46879 = cljs.core.async.close_BANG_(out);
var state_46885__$1 = (function (){var statearr_46903 = state_46885;
(statearr_46903[(13)] = inst_46878);

return statearr_46903;
})();
var statearr_46904_47938 = state_46885__$1;
(statearr_46904_47938[(2)] = inst_46879);

(statearr_46904_47938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46886 === (10))){
var inst_46869 = (state_46885[(2)]);
var state_46885__$1 = state_46885;
var statearr_46905_47939 = state_46885__$1;
(statearr_46905_47939[(2)] = inst_46869);

(statearr_46905_47939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46886 === (8))){
var inst_46849 = (state_46885[(7)]);
var inst_46858 = (state_46885[(11)]);
var tmp46902 = inst_46849;
var inst_46849__$1 = tmp46902;
var inst_46850 = inst_46858;
var state_46885__$1 = (function (){var statearr_46906 = state_46885;
(statearr_46906[(7)] = inst_46849__$1);

(statearr_46906[(8)] = inst_46850);

return statearr_46906;
})();
var statearr_46907_47940 = state_46885__$1;
(statearr_46907_47940[(2)] = null);

(statearr_46907_47940[(1)] = (2));


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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45291__auto__ = null;
var cljs$core$async$state_machine__45291__auto____0 = (function (){
var statearr_46908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46908[(0)] = cljs$core$async$state_machine__45291__auto__);

(statearr_46908[(1)] = (1));

return statearr_46908;
});
var cljs$core$async$state_machine__45291__auto____1 = (function (state_46885){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_46885);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e46909){var ex__45294__auto__ = e46909;
var statearr_46910_47941 = state_46885;
(statearr_46910_47941[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_46885[(4)]))){
var statearr_46911_47942 = state_46885;
(statearr_46911_47942[(1)] = cljs.core.first((state_46885[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47947 = state_46885;
state_46885 = G__47947;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$state_machine__45291__auto__ = function(state_46885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45291__auto____1.call(this,state_46885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45291__auto____0;
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45291__auto____1;
return cljs$core$async$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_46912 = f__45461__auto__();
(statearr_46912[(6)] = c__45460__auto___47925);

return statearr_46912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46914 = arguments.length;
switch (G__46914) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45460__auto___47950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45461__auto__ = (function (){var switch__45290__auto__ = (function (state_46956){
var state_val_46957 = (state_46956[(1)]);
if((state_val_46957 === (7))){
var inst_46952 = (state_46956[(2)]);
var state_46956__$1 = state_46956;
var statearr_46958_47951 = state_46956__$1;
(statearr_46958_47951[(2)] = inst_46952);

(statearr_46958_47951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46957 === (1))){
var inst_46915 = [];
var inst_46916 = inst_46915;
var inst_46917 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46956__$1 = (function (){var statearr_46959 = state_46956;
(statearr_46959[(7)] = inst_46917);

(statearr_46959[(8)] = inst_46916);

return statearr_46959;
})();
var statearr_46960_47952 = state_46956__$1;
(statearr_46960_47952[(2)] = null);

(statearr_46960_47952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46957 === (4))){
var inst_46920 = (state_46956[(9)]);
var inst_46920__$1 = (state_46956[(2)]);
var inst_46921 = (inst_46920__$1 == null);
var inst_46922 = cljs.core.not(inst_46921);
var state_46956__$1 = (function (){var statearr_46961 = state_46956;
(statearr_46961[(9)] = inst_46920__$1);

return statearr_46961;
})();
if(inst_46922){
var statearr_46962_47954 = state_46956__$1;
(statearr_46962_47954[(1)] = (5));

} else {
var statearr_46963_47955 = state_46956__$1;
(statearr_46963_47955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46957 === (15))){
var inst_46946 = (state_46956[(2)]);
var state_46956__$1 = state_46956;
var statearr_46964_47956 = state_46956__$1;
(statearr_46964_47956[(2)] = inst_46946);

(statearr_46964_47956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46957 === (13))){
var state_46956__$1 = state_46956;
var statearr_46965_47957 = state_46956__$1;
(statearr_46965_47957[(2)] = null);

(statearr_46965_47957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46957 === (6))){
var inst_46916 = (state_46956[(8)]);
var inst_46941 = inst_46916.length;
var inst_46942 = (inst_46941 > (0));
var state_46956__$1 = state_46956;
if(cljs.core.truth_(inst_46942)){
var statearr_46966_47962 = state_46956__$1;
(statearr_46966_47962[(1)] = (12));

} else {
var statearr_46967_47963 = state_46956__$1;
(statearr_46967_47963[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46957 === (3))){
var inst_46954 = (state_46956[(2)]);
var state_46956__$1 = state_46956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46956__$1,inst_46954);
} else {
if((state_val_46957 === (12))){
var inst_46916 = (state_46956[(8)]);
var inst_46944 = cljs.core.vec(inst_46916);
var state_46956__$1 = state_46956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46956__$1,(15),out,inst_46944);
} else {
if((state_val_46957 === (2))){
var state_46956__$1 = state_46956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46956__$1,(4),ch);
} else {
if((state_val_46957 === (11))){
var inst_46920 = (state_46956[(9)]);
var inst_46924 = (state_46956[(10)]);
var inst_46934 = (state_46956[(2)]);
var inst_46935 = [];
var inst_46936 = inst_46935.push(inst_46920);
var inst_46916 = inst_46935;
var inst_46917 = inst_46924;
var state_46956__$1 = (function (){var statearr_46968 = state_46956;
(statearr_46968[(7)] = inst_46917);

(statearr_46968[(11)] = inst_46934);

(statearr_46968[(8)] = inst_46916);

(statearr_46968[(12)] = inst_46936);

return statearr_46968;
})();
var statearr_46969_47964 = state_46956__$1;
(statearr_46969_47964[(2)] = null);

(statearr_46969_47964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46957 === (9))){
var inst_46916 = (state_46956[(8)]);
var inst_46932 = cljs.core.vec(inst_46916);
var state_46956__$1 = state_46956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46956__$1,(11),out,inst_46932);
} else {
if((state_val_46957 === (5))){
var inst_46920 = (state_46956[(9)]);
var inst_46924 = (state_46956[(10)]);
var inst_46917 = (state_46956[(7)]);
var inst_46924__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46920) : f.call(null,inst_46920));
var inst_46925 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46924__$1,inst_46917);
var inst_46926 = cljs.core.keyword_identical_QMARK_(inst_46917,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46927 = ((inst_46925) || (inst_46926));
var state_46956__$1 = (function (){var statearr_46970 = state_46956;
(statearr_46970[(10)] = inst_46924__$1);

return statearr_46970;
})();
if(cljs.core.truth_(inst_46927)){
var statearr_46971_47965 = state_46956__$1;
(statearr_46971_47965[(1)] = (8));

} else {
var statearr_46972_47966 = state_46956__$1;
(statearr_46972_47966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46957 === (14))){
var inst_46949 = (state_46956[(2)]);
var inst_46950 = cljs.core.async.close_BANG_(out);
var state_46956__$1 = (function (){var statearr_46974 = state_46956;
(statearr_46974[(13)] = inst_46949);

return statearr_46974;
})();
var statearr_46975_47967 = state_46956__$1;
(statearr_46975_47967[(2)] = inst_46950);

(statearr_46975_47967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46957 === (10))){
var inst_46939 = (state_46956[(2)]);
var state_46956__$1 = state_46956;
var statearr_46976_47968 = state_46956__$1;
(statearr_46976_47968[(2)] = inst_46939);

(statearr_46976_47968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46957 === (8))){
var inst_46920 = (state_46956[(9)]);
var inst_46924 = (state_46956[(10)]);
var inst_46916 = (state_46956[(8)]);
var inst_46929 = inst_46916.push(inst_46920);
var tmp46973 = inst_46916;
var inst_46916__$1 = tmp46973;
var inst_46917 = inst_46924;
var state_46956__$1 = (function (){var statearr_46977 = state_46956;
(statearr_46977[(14)] = inst_46929);

(statearr_46977[(7)] = inst_46917);

(statearr_46977[(8)] = inst_46916__$1);

return statearr_46977;
})();
var statearr_46978_47969 = state_46956__$1;
(statearr_46978_47969[(2)] = null);

(statearr_46978_47969[(1)] = (2));


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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45291__auto__ = null;
var cljs$core$async$state_machine__45291__auto____0 = (function (){
var statearr_46979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46979[(0)] = cljs$core$async$state_machine__45291__auto__);

(statearr_46979[(1)] = (1));

return statearr_46979;
});
var cljs$core$async$state_machine__45291__auto____1 = (function (state_46956){
while(true){
var ret_value__45292__auto__ = (function (){try{while(true){
var result__45293__auto__ = switch__45290__auto__(state_46956);
if(cljs.core.keyword_identical_QMARK_(result__45293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45293__auto__;
}
break;
}
}catch (e46980){var ex__45294__auto__ = e46980;
var statearr_46981_47970 = state_46956;
(statearr_46981_47970[(2)] = ex__45294__auto__);


if(cljs.core.seq((state_46956[(4)]))){
var statearr_46982_47971 = state_46956;
(statearr_46982_47971[(1)] = cljs.core.first((state_46956[(4)])));

} else {
throw ex__45294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47972 = state_46956;
state_46956 = G__47972;
continue;
} else {
return ret_value__45292__auto__;
}
break;
}
});
cljs$core$async$state_machine__45291__auto__ = function(state_46956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45291__auto____1.call(this,state_46956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45291__auto____0;
cljs$core$async$state_machine__45291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45291__auto____1;
return cljs$core$async$state_machine__45291__auto__;
})()
})();
var state__45462__auto__ = (function (){var statearr_46983 = f__45461__auto__();
(statearr_46983[(6)] = c__45460__auto___47950);

return statearr_46983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45462__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
