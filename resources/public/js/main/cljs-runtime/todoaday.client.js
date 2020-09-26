goog.provide('todoaday.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('todoaday.application');
goog.require('todoaday.ui');
/**
 * Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build.
 */
todoaday.client.init = (function todoaday$client$init(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(todoaday.application.app,todoaday.ui.Root,"app");

return console.log("Loaded");
});
goog.exportSymbol('todoaday.client.init', todoaday.client.init);
/**
 * During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn
 */
todoaday.client.refresh = (function todoaday$client$refresh(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(todoaday.application.app,todoaday.ui.Root,"app");

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(todoaday.application.app);

return console.log("Hot reload");
});
goog.exportSymbol('todoaday.client.refresh', todoaday.client.refresh);

//# sourceMappingURL=todoaday.client.js.map
