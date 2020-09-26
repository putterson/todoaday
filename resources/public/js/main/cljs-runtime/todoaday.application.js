goog.provide('todoaday.application');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
if((typeof todoaday !== 'undefined') && (typeof todoaday.application !== 'undefined') && (typeof todoaday.application.app !== 'undefined')){
} else {
todoaday.application.app = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}

//# sourceMappingURL=todoaday.application.js.map
