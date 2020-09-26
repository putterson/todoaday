goog.provide('com.fulcrologic.fulcro.components');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljsjs.react');
goog.require('edn_query_language.core');
goog.require('cljs.spec.alpha');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('com.fulcrologic.guardrails.core');
goog.require('clojure.set');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.components !== 'undefined') && (typeof com.fulcrologic.fulcro.components.component_registry !== 'undefined')){
} else {
com.fulcrologic.fulcro.components.component_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.fulcro.components._STAR_query_state_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_app_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_parent_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_depth_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_shared_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = false;
/**
 * DEPRECATED: use from com.fulcrologic.fulcro.react.hooks
 * 
 *   A simple wrapper around React/useEffect that auto-converts cljs arrays of deps to js.
 */
com.fulcrologic.fulcro.components.use_effect = (function com$fulcrologic$fulcro$components$use_effect(var_args){
var G__49476 = arguments.length;
switch (G__49476) {
case 1:
return com.fulcrologic.fulcro.components.use_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.use_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.use_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return React.useEffect(f);
}));

(com.fulcrologic.fulcro.components.use_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return React.useEffect(f,cljs.core.clj__GT_js(deps));
}));

(com.fulcrologic.fulcro.components.use_effect.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: use from com.fulcrologic.fulcro.react.hooks
 *   A simple wrapper around React/useState. Returns a cljs vector for easy destructuring
 */
com.fulcrologic.fulcro.components.use_state = (function com$fulcrologic$fulcro$components$use_state(initial_value){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(React.useState(initial_value));
});
/**
 * Like get-in, but for js objects, and in CLJC. In clj, it is just get-in. In cljs it is
 *   gobj/getValueByKeys.
 */
com.fulcrologic.fulcro.components.isoget_in = (function com$fulcrologic$fulcro$components$isoget_in(var_args){
var G__49478 = arguments.length;
switch (G__49478) {
case 2:
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,kvs){
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3(obj,kvs,null);
}));

(com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,kvs,default$){
var ks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (k){
var G__49479 = k;
if((G__49479 == null)){
return null;
} else {
return cljs.core.name(G__49479);
}
}),kvs);
var or__4120__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,obj,ks);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.components.isoget_in.cljs$lang$maxFixedArity = 3);

/**
 * Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.components.isoget = (function com$fulcrologic$fulcro$components$isoget(var_args){
var G__49483 = arguments.length;
switch (G__49483) {
case 2:
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$3(obj,k,null);
}));

(com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,default$){
var or__4120__auto__ = goog.object.get(obj,(function (){var G__49495 = k;
if((G__49495 == null)){
return null;
} else {
return cljs.core.name(G__49495);
}
})());
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.components.isoget.cljs$lang$maxFixedArity = 3);

/**
 * Add a component to Fulcro's component registry.  This is used by defsc to ensure that all Fulcro classes
 *   that have been compiled (transitively required) will be accessible for lookup by fully-qualified symbol/keyword.
 *   Not meant for public use, unless you're creating your own component macro that doesn't directly leverage defsc.
 */
com.fulcrologic.fulcro.components.register_component_BANG_ = (function com$fulcrologic$fulcro$components$register_component_BANG_(k,component_class){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.components.component_registry,cljs.core.assoc,k,component_class);

return component_class;
});
/**
 * Utility function that will force a lazy sequence of children (recursively) into realized
 *   vectors (React cannot deal with lazy seqs in production mode)
 */
com.fulcrologic.fulcro.components.force_children = (function com$fulcrologic$fulcro$components$force_children(x){
var G__49499 = x;
if(cljs.core.seq_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.force_children),G__49499);
} else {
return G__49499;
}
});
/**
 * Returns whichever of the given Fulcro props were most recently generated according to `denormalization-time`. This
 *   is part of props 'tunnelling', an optimization to get updated props to instances without going through the root.
 */
com.fulcrologic.fulcro.components.newer_props = (function com$fulcrologic$fulcro$components$newer_props(props_a,props_b){
if((props_a == null)){
return props_b;
} else {
if((props_b == null)){
return props_a;
} else {
if(((function (){var or__4120__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.denormalization_time(props_a);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (2);
}
})() > (function (){var or__4120__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.denormalization_time(props_b);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})())){
return props_a;
} else {
return props_b;

}
}
}
});
/**
 * Returns true if the argument is a component. A component is defined as a *mounted component*.
 * This function returns false for component classes, and also returns false for the output of a Fulcro component factory.
 */
com.fulcrologic.fulcro.components.component_instance_QMARK_ = (function com$fulcrologic$fulcro$components$component_instance_QMARK_(x){
if((!((x == null)))){
return goog.object.get(x,"fulcro$isComponent") === true;
} else {
return false;
}
});
/**
 * Returns true if the argument is a component instance.
 * 
 * DEPRECATED for terminology clarity. Use `component-instance?` instead.
 */
com.fulcrologic.fulcro.components.component_QMARK_ = com.fulcrologic.fulcro.components.component_instance_QMARK_;
/**
 * Returns true if the argument is a component class.
 */
com.fulcrologic.fulcro.components.component_class_QMARK_ = (function com$fulcrologic$fulcro$components$component_class_QMARK_(x){
return cljs.core.boolean$(goog.object.containsKey(x,"fulcro$class"));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),com.fulcrologic.fulcro.components.component_class_QMARK_);
/**
 * Returns a string version of the given react component's name. Works on component instances and classes.
 */
com.fulcrologic.fulcro.components.component_name = (function com$fulcrologic$fulcro$components$component_name(class$){
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(class$,new cljs.core.Keyword(null,"displayName","displayName",-809144601));
});
/**
 * Returns the registry key for the given component class.
 */
com.fulcrologic.fulcro.components.class__GT_registry_key = (function com$fulcrologic$fulcro$components$class__GT_registry_key(class$){
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(class$,new cljs.core.Keyword(null,"fulcro$registryKey","fulcro$registryKey",-155509270));
});
/**
 * Look up the given component in Fulcro's global component registry. Will only be able to find components that have
 *   been (transitively) required by your application.
 * 
 *   `classname` can be a fully-qualified keyword or symbol.
 */
com.fulcrologic.fulcro.components.registry_key__GT_class = (function com$fulcrologic$fulcro$components$registry_key__GT_class(classname){
if((classname instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.components.component_registry),classname);
} else {
if((classname instanceof cljs.core.Symbol)){
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(classname),cljs.core.name(classname));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.components.component_registry),k);
} else {
if(((typeof classname === 'string') && (clojure.string.includes_QMARK_(classname,"/")))){
var vec__49509 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(classname,/\//);
var nspc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49509,(0),null);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49509,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(nspc,nm);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.components.component_registry),k);
} else {
return null;

}
}
}
});
/**
 * Add computed properties to props. This will *replace* any pre-existing computed properties. Computed props are
 *   necessary when a parent component wishes to pass callbacks or other data to children that *have a query*. This
 *   is not necessary for "stateless" components, though it will work properly for both.
 * 
 *   Computed props are "remembered" so that a targeted update (which can only happen on a component with a query
 *   and ident) can use new props from the database without "losing" the computed props that were originally passed
 *   from the parent. If you pass things like callbacks through normal props, then targeted updates will seem to "lose
 *   track of" them.
 *   
 */
com.fulcrologic.fulcro.components.computed = (function com$fulcrologic$fulcro$components$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__49512 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__49512,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__49512;
}
} else {
var G__49513 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49513,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__49513;
}
}
}
});
/**
 * Return the computed properties on a component or its props. Note that it requires that the normal properties are not nil.
 */
com.fulcrologic.fulcro.components.get_computed = (function com$fulcrologic$fulcro$components$get_computed(var_args){
var G__49518 = arguments.length;
switch (G__49518) {
case 1:
return com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__49519 = x;
if(com.fulcrologic.fulcro.components.component_instance_QMARK_(x)){
return (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(G__49519) : com.fulcrologic.fulcro.components.props.call(null,G__49519));
} else {
return G__49519;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962)], null),(function (){var G__49520 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__49520],null));
} else {
return G__49520;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
}));

(com.fulcrologic.fulcro.components.get_computed.cljs$lang$maxFixedArity = 2);

/**
 * Get any data (as a map) that props extensions have associated with the given Fulcro component. Extra props will
 *   be empty unless you've installed props-middleware (on your app) that sets them.
 */
com.fulcrologic.fulcro.components.get_extra_props = (function com$fulcrologic$fulcro$components$get_extra_props(this$){
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$extra_props","fulcro$extra_props",-499585470)], null),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Return a component's props.
 */
com.fulcrologic.fulcro.components.props = (function com$fulcrologic$fulcro$components$props(component){
var props_from_parent = com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554)], null));
var computed_from_parent = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(props_from_parent);
var props_from_updates = com.fulcrologic.fulcro.components.computed(com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554)], null)),computed_from_parent);
return com.fulcrologic.fulcro.components.newer_props(props_from_parent,props_from_updates);
});
/**
 * Get the sequence of react children of the given component.
 */
com.fulcrologic.fulcro.components.children = (function com$fulcrologic$fulcro$components$children(component){
var cs = goog.object.getValueByKeys(component,"props","children");
if(((cljs.core.coll_QMARK_(cs)) || (cljs.core.array_QMARK_(cs)))){
return cs;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs], null);
}
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
com.fulcrologic.fulcro.components.react_type = (function com$fulcrologic$fulcro$components$react_type(x){
var or__4120__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the react type (component class) of the given React element (instance). Is identity if used on a class.
 */
com.fulcrologic.fulcro.components.get_class = (function com$fulcrologic$fulcro$components$get_class(instance){
return com.fulcrologic.fulcro.components.react_type(instance);
});
/**
 * Returns the map of options that was specified (via `defsc`) for the component class.
 */
com.fulcrologic.fulcro.components.component_options = (function com$fulcrologic$fulcro$components$component_options(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50153 = arguments.length;
var i__4731__auto___50154 = (0);
while(true){
if((i__4731__auto___50154 < len__4730__auto___50153)){
args__4736__auto__.push((arguments[i__4731__auto___50154]));

var G__50155 = (i__4731__auto___50154 + (1));
i__4731__auto___50154 = G__50155;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic = (function (instance_or_class,ks){
var c = com.fulcrologic.fulcro.components.react_type(instance_or_class);
var options = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(instance_or_class,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
}
})();
if(cljs.core.seq(options)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,cljs.core.vec(ks));
} else {
return options;
}
}));

(com.fulcrologic.fulcro.components.component_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.components.component_options.cljs$lang$applyTo = (function (seq49527){
var G__49528 = cljs.core.first(seq49527);
var seq49527__$1 = cljs.core.next(seq49527);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49528,seq49527__$1);
}));

com.fulcrologic.fulcro.components.has_feature_QMARK_ = (function com$fulcrologic$fulcro$components$has_feature_QMARK_(component,option_key){
return cljs.core.contains_QMARK_(com.fulcrologic.fulcro.components.component_options(component),option_key);
});
com.fulcrologic.fulcro.components.has_initial_app_state_QMARK_ = (function com$fulcrologic$fulcro$components$has_initial_app_state_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
});
com.fulcrologic.fulcro.components.has_ident_QMARK_ = (function com$fulcrologic$fulcro$components$has_ident_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"ident","ident",-742346));
});
com.fulcrologic.fulcro.components.has_query_QMARK_ = (function com$fulcrologic$fulcro$components$has_query_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"query","query",-1288509510));
});
com.fulcrologic.fulcro.components.has_pre_merge_QMARK_ = (function com$fulcrologic$fulcro$components$has_pre_merge_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148));
});
com.fulcrologic.fulcro.components.ident = (function com$fulcrologic$fulcro$components$ident(this$,props){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"ident","ident",-742346))){
var fexpr__49545 = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ident","ident",-742346)], 0));
return (fexpr__49545.cljs$core$IFn$_invoke$arity$2 ? fexpr__49545.cljs$core$IFn$_invoke$arity$2(this$,props) : fexpr__49545.call(null,this$,props));
} else {
return null;
}
});
com.fulcrologic.fulcro.components.query = (function com$fulcrologic$fulcro$components$query(this$){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"query","query",-1288509510))){
var fexpr__49548 = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510)], 0));
return (fexpr__49548.cljs$core$IFn$_invoke$arity$1 ? fexpr__49548.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__49548.call(null,this$));
} else {
return null;
}
});
com.fulcrologic.fulcro.components.initial_state = (function com$fulcrologic$fulcro$components$initial_state(clz,params){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(clz,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806))){
var fexpr__49553 = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(clz,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)], 0));
return (fexpr__49553.cljs$core$IFn$_invoke$arity$1 ? fexpr__49553.cljs$core$IFn$_invoke$arity$1(params) : fexpr__49553.call(null,params));
} else {
return null;
}
});
com.fulcrologic.fulcro.components.pre_merge = (function com$fulcrologic$fulcro$components$pre_merge(this$,data){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148))){
var fexpr__49554 = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148)], 0));
return (fexpr__49554.cljs$core$IFn$_invoke$arity$1 ? fexpr__49554.cljs$core$IFn$_invoke$arity$1(data) : fexpr__49554.call(null,data));
} else {
return null;
}
});
com.fulcrologic.fulcro.components.depth = (function com$fulcrologic$fulcro$components$depth(this$){
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$depth","fulcro$depth",1963025807)], null));
});
/**
 * GET a RAW react prop. Used internally. Safe in CLJC, but equivalent to `(gobj/getValueByKeys this "props" (name k)`.
 */
com.fulcrologic.fulcro.components.get_raw_react_prop = (function com$fulcrologic$fulcro$components$get_raw_react_prop(c,k){
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),k], null));
});
/**
 * Attempt to coerce `x` to an app.  Legal inputs are a fulcro application, a mounted component,
 *   or an atom holding any of the above.
 */
com.fulcrologic.fulcro.components.any__GT_app = (function com$fulcrologic$fulcro$components$any__GT_app(x){
var fulcro_app_QMARK_ = (function com$fulcrologic$fulcro$components$any__GT_app_$_fulcro_app_QMARK_(x__$1){
return ((cljs.core.map_QMARK_(x__$1)) && (cljs.core.contains_QMARK_(x__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366))));
});
if(com.fulcrologic.fulcro.components.component_instance_QMARK_(x)){
return com.fulcrologic.fulcro.components.get_raw_react_prop(x,new cljs.core.Keyword(null,"fulcro$app","fulcro$app",-1270465306));
} else {
if(cljs.core.truth_(fulcro_app_QMARK_(x))){
return x;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
var G__49562 = cljs.core.deref(x);
return (com.fulcrologic.fulcro.components.any__GT_app.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.any__GT_app.cljs$core$IFn$_invoke$arity$1(G__49562) : com.fulcrologic.fulcro.components.any__GT_app.call(null,G__49562));
} else {
return null;
}
}
}
});
/**
 * Using raw react props/state returns the newest Fulcro props. This is part of "props tunneling", where component
 *   local state is leveraged as a communication mechanism of updated props directly to a component that has an ident.
 *   This function will return the correct version of props based on timestamps.
 */
com.fulcrologic.fulcro.components.raw__GT_newest_props = (function com$fulcrologic$fulcro$components$raw__GT_newest_props(raw_props,raw_state){
var next_props = goog.object.get(raw_props,"fulcro$value");
var opt_props = goog.object.get(raw_state,"fulcro$value");
return com.fulcrologic.fulcro.components.newer_props(next_props,opt_props);
});
/**
 * Return the global shared properties of the root. See :shared and
 * :shared-fn app options. NOTE: Shared props only update on root render and by explicit calls to
 * `app/update-shared!`.
 * 
 * This function attempts to rely on the dynamic var *shared* (first), but will make a best-effort of
 * finding shared props when run within a component's render or lifecycle. Passing your app will
 * ensure this returns the current shared props.
 */
com.fulcrologic.fulcro.components.shared = (function com$fulcrologic$fulcro$components$shared(var_args){
var G__49570 = arguments.length;
switch (G__49570) {
case 1:
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1 = (function (comp_or_app){
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2(comp_or_app,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2 = (function (comp_or_app,k_or_ks){
var shared = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var G__49580 = com.fulcrologic.fulcro.components.any__GT_app(comp_or_app);
var G__49580__$1 = (((G__49580 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__49580));
var G__49580__$2 = (((G__49580__$1 == null))?null:cljs.core.deref(G__49580__$1));
if((G__49580__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157).cljs$core$IFn$_invoke$arity$1(G__49580__$2);
}
}
})();
var ks = (function (){var G__49581 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__49581],null));
} else {
return G__49581;
}
})();
var G__49585 = shared;
if((!(cljs.core.empty_QMARK_(ks)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__49585,ks);
} else {
return G__49585;
}
}));

(com.fulcrologic.fulcro.components.shared.cljs$lang$maxFixedArity = 2);

var static_wrap_props_state_handler = (function com$fulcrologic$fulcro$components$static_wrap_props_state_handler(handler){
return (function (raw_props,raw_state){
var props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state);
var state = goog.object.get(raw_state,"fulcro$state");
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(props,state) : handler.call(null,props,state));
});
});
var wrap_props_state_handler = (function() {
var com$fulcrologic$fulcro$components$wrap_props_state_handler = null;
var com$fulcrologic$fulcro$components$wrap_props_state_handler__1 = (function (handler){
return com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$2(handler,true);
});
var com$fulcrologic$fulcro$components$wrap_props_state_handler__2 = (function (handler,check_for_fresh_props_in_state_QMARK_){
return (function (raw_props,raw_state){
var this$ = this;
var props = (cljs.core.truth_(check_for_fresh_props_in_state_QMARK_)?com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state):goog.object.get(raw_props,"fulcro$props"));
var state = goog.object.get(raw_state,"fulcro$state");
return (handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(this$,props,state) : handler.call(null,this$,props,state));
});
});
com$fulcrologic$fulcro$components$wrap_props_state_handler = function(handler,check_for_fresh_props_in_state_QMARK_){
switch(arguments.length){
case 1:
return com$fulcrologic$fulcro$components$wrap_props_state_handler__1.call(this,handler);
case 2:
return com$fulcrologic$fulcro$components$wrap_props_state_handler__2.call(this,handler,check_for_fresh_props_in_state_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$components$wrap_props_state_handler__1;
com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$components$wrap_props_state_handler__2;
return com$fulcrologic$fulcro$components$wrap_props_state_handler;
})()
;
var component_did_mount = (function com$fulcrologic$fulcro$components$component_did_mount(){
var this$ = this;
goog.object.set(this$,"fulcro$mounted",true);

var map__49665 = com.fulcrologic.fulcro.components.component_options(this$);
var map__49665__$1 = (((((!((map__49665 == null))))?(((((map__49665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49665):map__49665);
var componentDidMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49665__$1,new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936));
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var index_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-component!","index-component!",-1202750708));
(index_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : index_component_BANG_.call(null,this$));

if(cljs.core.truth_(componentDidMount)){
return (componentDidMount.cljs$core$IFn$_invoke$arity$1 ? componentDidMount.cljs$core$IFn$_invoke$arity$1(this$) : componentDidMount.call(null,this$));
} else {
return null;
}
});
var component_did_update = (function com$fulcrologic$fulcro$components$component_did_update(raw_prev_props,raw_prev_state,snapshot){
var this$ = this;
var map__49670 = com.fulcrologic.fulcro.components.component_options(this$);
var map__49670__$1 = (((((!((map__49670 == null))))?(((((map__49670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49670):map__49670);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49670__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var componentDidUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49670__$1,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981));
var prev_state = goog.object.get(raw_prev_state,"fulcro$state");
var prev_props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_prev_props,raw_prev_state);
if(cljs.core.truth_(componentDidUpdate)){
(componentDidUpdate.cljs$core$IFn$_invoke$arity$4 ? componentDidUpdate.cljs$core$IFn$_invoke$arity$4(this$,prev_props,prev_state,snapshot) : componentDidUpdate.call(null,this$,prev_props,prev_state,snapshot));
} else {
}

if(cljs.core.truth_(ident)){
var old_ident = (ident.cljs$core$IFn$_invoke$arity$2 ? ident.cljs$core$IFn$_invoke$arity$2(this$,prev_props) : ident.call(null,this$,prev_props));
var next_ident = (function (){var G__49673 = this$;
var G__49674 = com.fulcrologic.fulcro.components.props(this$);
return (ident.cljs$core$IFn$_invoke$arity$2 ? ident.cljs$core$IFn$_invoke$arity$2(G__49673,G__49674) : ident.call(null,G__49673,G__49674));
})();
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var drop_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"drop-component!","drop-component!",183893156));
var index_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-component!","index-component!",-1202750708));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_ident,next_ident)){
(drop_component_BANG_.cljs$core$IFn$_invoke$arity$2 ? drop_component_BANG_.cljs$core$IFn$_invoke$arity$2(this$,old_ident) : drop_component_BANG_.call(null,this$,old_ident));

return (index_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : index_component_BANG_.call(null,this$));
} else {
return null;
}
} else {
return null;
}
});
var should_component_update_QMARK_ = (function com$fulcrologic$fulcro$components$should_component_update_QMARK_(raw_next_props,raw_next_state){
if(cljs.core.truth_(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_)){
return true;
} else {
var this$ = this;
var current_props = com.fulcrologic.fulcro.components.props(this$);
var next_props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_next_props,raw_next_state);
var next_state = goog.object.get(raw_next_state,"fulcro$state");
var current_state = goog.object.getValueByKeys(this$,"state","fulcro$state");
var props_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props,next_props);
var state_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_state,next_state);
var next_children = goog.object.get(raw_next_props,"children");
var children_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.getValueByKeys(this$,"props","children"),next_children);
return ((props_changed_QMARK_) || (state_changed_QMARK_) || (children_changed_QMARK_));
}
});
var wrap_props_handler = (function() {
var com$fulcrologic$fulcro$components$wrap_props_handler = null;
var com$fulcrologic$fulcro$components$wrap_props_handler__1 = (function (handler){
return com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$2(handler,true);
});
var com$fulcrologic$fulcro$components$wrap_props_handler__2 = (function (handler,check_for_fresh_props_in_state_QMARK_){
return (function (raw_props){
var this$ = this;
var raw_state = this$.state;
var props = (cljs.core.truth_(check_for_fresh_props_in_state_QMARK_)?com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state):goog.object.get(raw_props,"fulcro$props"));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(this$,props) : handler.call(null,this$,props));
});
});
com$fulcrologic$fulcro$components$wrap_props_handler = function(handler,check_for_fresh_props_in_state_QMARK_){
switch(arguments.length){
case 1:
return com$fulcrologic$fulcro$components$wrap_props_handler__1.call(this,handler);
case 2:
return com$fulcrologic$fulcro$components$wrap_props_handler__2.call(this,handler,check_for_fresh_props_in_state_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$components$wrap_props_handler__1;
com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$components$wrap_props_handler__2;
return com$fulcrologic$fulcro$components$wrap_props_handler;
})()
;
var wrap_this = (function com$fulcrologic$fulcro$components$wrap_this(handler){
return (function() { 
var G__50189__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,this$,args);
};
var G__50189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50190__i = 0, G__50190__a = new Array(arguments.length -  0);
while (G__50190__i < G__50190__a.length) {G__50190__a[G__50190__i] = arguments[G__50190__i + 0]; ++G__50190__i;}
  args = new cljs.core.IndexedSeq(G__50190__a,0,null);
} 
return G__50189__delegate.call(this,args);};
G__50189.cljs$lang$maxFixedArity = 0;
G__50189.cljs$lang$applyTo = (function (arglist__50191){
var args = cljs.core.seq(arglist__50191);
return G__50189__delegate(args);
});
G__50189.cljs$core$IFn$_invoke$arity$variadic = G__50189__delegate;
return G__50189;
})()
;
});
var wrap_base_render = (function com$fulcrologic$fulcro$components$wrap_base_render(render){
return (function() { 
var G__50192__delegate = function (args){
var this$ = this;
var temp__5733__auto__ = com.fulcrologic.fulcro.components.any__GT_app(this$);
if(cljs.core.truth_(temp__5733__auto__)){
var app__$1 = temp__5733__auto__;
var _STAR_app_STAR__orig_val__49679 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__49680 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__49681 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__49682 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__49683 = app__$1;
var _STAR_depth_STAR__temp_val__49684 = (com.fulcrologic.fulcro.components.depth(this$) + (1));
var _STAR_shared_STAR__temp_val__49685 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(this$);
var _STAR_parent_STAR__temp_val__49686 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__49683);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__49684);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__49685);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__49686);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render,this$,args);
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__49682);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__49681);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__49680);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__49679);
}} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.components",null,400,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot find app on component!"], null);
}),null)),null,2000743940);
}
};
var G__50192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50193__i = 0, G__50193__a = new Array(arguments.length -  0);
while (G__50193__i < G__50193__a.length) {G__50193__a[G__50193__i] = arguments[G__50193__i + 0]; ++G__50193__i;}
  args = new cljs.core.IndexedSeq(G__50193__a,0,null);
} 
return G__50192__delegate.call(this,args);};
G__50192.cljs$lang$maxFixedArity = 0;
G__50192.cljs$lang$applyTo = (function (arglist__50194){
var args = cljs.core.seq(arglist__50194);
return G__50192__delegate(args);
});
G__50192.cljs$core$IFn$_invoke$arity$variadic = G__50192__delegate;
return G__50192;
})()
;
});
var component_will_unmount = (function com$fulcrologic$fulcro$components$component_will_unmount(){
var this$ = this;
var map__49694 = com.fulcrologic.fulcro.components.component_options(this$);
var map__49694__$1 = (((((!((map__49694 == null))))?(((((map__49694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49694):map__49694);
var componentWillUnmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49694__$1,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814));
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var drop_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"drop-component!","drop-component!",183893156));
if(cljs.core.truth_(componentWillUnmount)){
(componentWillUnmount.cljs$core$IFn$_invoke$arity$1 ? componentWillUnmount.cljs$core$IFn$_invoke$arity$1(this$) : componentWillUnmount.call(null,this$));
} else {
}

goog.object.set(this$,"fulcro$mounted",false);

return (drop_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? drop_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : drop_component_BANG_.call(null,this$));
});
/**
 * Configure the given `cls` (a function) to act as a react component within the Fulcro ecosystem.
 * 
 *  cls - A js function (in clj, this is ignored)
 *  fqkw - A keyword that shares the exact fully-qualified name of the component class
 *  options - A component options map (no magic) containing things like `:query` and `:ident`.
 * 
 * 
 *  NOTE: the `options` map expects proper function signatures for:
 * 
 *  `:query` - (fn [this] ...)
 *  `:ident` - (fn [this props] ...)
 *  `:initial-state` - (fn [cls params] ...)
 * 
 *  Returns (and registers) a new react class.
 *  
 */
com.fulcrologic.fulcro.components.configure_component_BANG_ = (function com$fulcrologic$fulcro$components$configure_component_BANG_(cls,fqkw,options){
var map__49714 = options;
var map__49714__$1 = (((((!((map__49714 == null))))?(((((map__49714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49714):map__49714);
var initLocalState = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
var componentWillMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619));
var componentDidCatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733));
var UNSAFE_componentWillMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillMount","UNSAFE_componentWillMount",1700079910));
var getSnapshotBeforeUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"getSnapshotBeforeUpdate","getSnapshotBeforeUpdate",861122184));
var UNSAFE_componentWillUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillUpdate","UNSAFE_componentWillUpdate",-271932214));
var getDerivedStateFromProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739));
var getDerivedStateFromError = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477));
var componentWillReceiveProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974));
var shouldComponentUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var componentWillUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932));
var UNSAFE_componentWillReceiveProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49714__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillReceiveProps","UNSAFE_componentWillReceiveProps",349396983));
var name = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(fqkw),cljs.core.name(fqkw)], null));
var js_instance_props = cljs.core.clj__GT_js((function (){var G__49721 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),component_did_mount,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),component_will_unmount,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),component_did_update,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(cljs.core.truth_(shouldComponentUpdate)?wrap_props_state_handler(shouldComponentUpdate):should_component_update_QMARK_),new cljs.core.Keyword(null,"fulcro$isComponent","fulcro$isComponent",2094954844),true,new cljs.core.Keyword(null,"type","type",1174270348),cls,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name], null);
var G__49721__$1 = (cljs.core.truth_(render)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49721,new cljs.core.Keyword(null,"render","render",-1408033454),wrap_base_render(render)):G__49721);
var G__49721__$2 = (cljs.core.truth_(getSnapshotBeforeUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49721__$1,new cljs.core.Keyword(null,"getSnapshotBeforeUpdate","getSnapshotBeforeUpdate",861122184),wrap_props_state_handler(getSnapshotBeforeUpdate)):G__49721__$1);
var G__49721__$3 = (cljs.core.truth_(componentDidCatch)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49721__$2,new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),wrap_this(componentDidCatch)):G__49721__$2);
var G__49721__$4 = (cljs.core.truth_(UNSAFE_componentWillMount)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49721__$3,new cljs.core.Keyword(null,"UNSAFE_componentWillMount","UNSAFE_componentWillMount",1700079910),wrap_this(UNSAFE_componentWillMount)):G__49721__$3);
var G__49721__$5 = (cljs.core.truth_(UNSAFE_componentWillUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49721__$4,new cljs.core.Keyword(null,"UNSAFE_componentWillUpdate","UNSAFE_componentWillUpdate",-271932214),wrap_props_state_handler(UNSAFE_componentWillUpdate)):G__49721__$4);
var G__49721__$6 = (cljs.core.truth_(UNSAFE_componentWillReceiveProps)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49721__$5,new cljs.core.Keyword(null,"UNSAFE_componentWillReceiveProps","UNSAFE_componentWillReceiveProps",349396983),wrap_props_handler(UNSAFE_componentWillReceiveProps)):G__49721__$5);
var G__49721__$7 = (cljs.core.truth_(componentWillMount)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49721__$6,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),wrap_this(componentWillMount)):G__49721__$6);
var G__49721__$8 = (cljs.core.truth_(componentWillUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49721__$7,new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),wrap_this(componentWillUpdate)):G__49721__$7);
var G__49721__$9 = (cljs.core.truth_(componentWillReceiveProps)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49721__$8,new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),wrap_props_handler(componentWillReceiveProps)):G__49721__$8);
if(cljs.core.truth_(initLocalState)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49721__$9,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),wrap_this(initLocalState));
} else {
return G__49721__$9;
}
})());
var statics = (function (){var G__49727 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"displayName","displayName",-809144601),name,new cljs.core.Keyword(null,"fulcro$class","fulcro$class",-1213203837),cls,new cljs.core.Keyword(null,"cljs$lang$type","cljs$lang$type",2136418717),true,new cljs.core.Keyword(null,"cljs$lang$ctorStr","cljs$lang$ctorStr",1406571315),name,new cljs.core.Keyword(null,"cljs$lang$ctorPrWriter","cljs$lang$ctorPrWriter",-112192216),(function (_,writer,___$1){
return cljs.core._write(writer,name);
})], null);
var G__49727__$1 = (cljs.core.truth_(getDerivedStateFromError)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49727,new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477),(function (error){
var v = (getDerivedStateFromError.cljs$core$IFn$_invoke$arity$1 ? getDerivedStateFromError.cljs$core$IFn$_invoke$arity$1(error) : getDerivedStateFromError.call(null,error));
if(cljs.core.coll_QMARK_(v)){
return ({"fulcro$state": v});
} else {
return v;
}
})):G__49727);
if(cljs.core.truth_(getDerivedStateFromProps)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49727__$1,new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739),static_wrap_props_state_handler(getDerivedStateFromProps));
} else {
return G__49727__$1;
}
})();
goog.object.extend(cls.prototype,React.Component.prototype,js_instance_props,({"fulcro$options": options}));

goog.object.extend(cls,cljs.core.clj__GT_js(statics),({"fulcro$options": options}));

goog.object.set(cls,"fulcro$registryKey",fqkw);

return com.fulcrologic.fulcro.components.register_component_BANG_(fqkw,cls);
});
/**
 * Make a given `cls` (a plain fn) act like a a Fulcro component with the given component options map. Registers the
 *   new component in the component-registry. Component options MUST contain :componentName as be a fully-qualified
 *   keyword to name the component in the registry.
 * 
 *   component-options *must* include a unique `:componentName` (keyword) that will be used for registering the given
 *   function as the faux class in the component registry.
 */
com.fulcrologic.fulcro.components.add_hook_options_BANG_ = (function com$fulcrologic$fulcro$components$add_hook_options_BANG_(render_fn,component_options){
var k = new cljs.core.Keyword(null,"componentName","componentName",-2103437555).cljs$core$IFn$_invoke$arity$1(component_options);
var faux_classname = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = k;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing :componentName for hooks component",cljs.core.PersistentArrayMap.EMPTY);
}
})());
goog.object.extend(render_fn,({"fulcro$options": component_options, "displayName": faux_classname, "fulcro$class": render_fn, "type": render_fn, "cljs$lang$type": true, "cljs$lang$ctorStr": faux_classname, "cljs$lang$ctorPrWriter": (function (_,writer,___$1){
return cljs.core._write(writer,faux_classname);
}), "fulcro$registryKey": new cljs.core.Keyword(null,"componentName","componentName",-2103437555).cljs$core$IFn$_invoke$arity$1(component_options)}));

com.fulcrologic.fulcro.components.register_component_BANG_(k,render_fn);

return render_fn;
});
/**
 * Allows you to use a plain function as a Fulcro-managed React hooks component.
 * 
 *   * `js-props` - The React js props from the parent.
 *   * `faux-class` - A Fulcro faux class, which is a fn that has had `add-options!` called on it.
 * 
 *   Returns a cljs vector containing `this` and fulcro `props`. You should *not* use the returned `this` directly,
 *   as it is a placeholder.
 * 
 *   Prefer `defsc` or `configure-hooks-component! over using this directly.`
 *   
 */
com.fulcrologic.fulcro.components.use_fulcro = (function com$fulcrologic$fulcro$components$use_fulcro(js_props,faux_class){
var app__$1 = com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,new cljs.core.Keyword(null,"fulcro$app","fulcro$app",-1270465306));
var tunnelled_props_state = React.useState(({}));
var js_set_tunnelled_props_BANG_ = (tunnelled_props_state[(1)]);
var map__49731 = com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(faux_class,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
var map__49731__$1 = (((((!((map__49731 == null))))?(((((map__49731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49731):map__49731);
var options = map__49731__$1;
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49731__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var faux_component_state = React.useState((function (){
if(cljs.core.truth_(app__$1)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,515,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot create proper fulcro component, as *app* isn't bound.","This happens when something renders a Fulcro component outside of Fulcro's render context.","See `with-parent-context`."], null);
}),null)),null,-1192196189);
}

var depth = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,new cljs.core.Keyword(null,"fulcro$depth","fulcro$depth",1963025807));
}
})();
var set_tunnelled_props_BANG_ = (function (updater){
var new_props = (updater.cljs$core$IFn$_invoke$arity$1 ? updater.cljs$core$IFn$_invoke$arity$1(null) : updater.call(null,null));
return (js_set_tunnelled_props_BANG_.cljs$core$IFn$_invoke$arity$1 ? js_set_tunnelled_props_BANG_.cljs$core$IFn$_invoke$arity$1(new_props) : js_set_tunnelled_props_BANG_.call(null,new_props));
});
return ({"setState": set_tunnelled_props_BANG_, "fulcro$isComponent": true, "fulcro$class": faux_class, "type": faux_class, "fulcro$options": options, "fulcro$mounted": false, "props": ({"fulcro$app": app__$1, "fulcro$depth": (depth + (1))})});
}));
var faux_component = (faux_component_state[(0)]);
var current_state = (tunnelled_props_state[(0)]["fulcro$value"]);
var props = com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554));
var children = com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,new cljs.core.Keyword(null,"children","children",-940561982));
var current_props = com.fulcrologic.fulcro.components.newer_props(props,current_state);
var current_ident = (cljs.core.truth_(ident)?(ident.cljs$core$IFn$_invoke$arity$2 ? ident.cljs$core$IFn$_invoke$arity$2(faux_class,current_props) : ident.call(null,faux_class,current_props)):null);
var shared_props = (cljs.core.truth_(app__$1)?com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__$1):null);
var G__49733_50231 = goog.object.get(faux_component,"props");
goog.object.set(G__49733_50231,"fulcro$shared",shared_props);

goog.object.set(G__49733_50231,"fulcro$value",current_props);

goog.object.set(G__49733_50231,"children",children);


React.useEffect((function (){
var original_ident = current_ident;
var index_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-component!","index-component!",-1202750708));
var drop_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"drop-component!","drop-component!",183893156));
goog.object.set(faux_component,"fulcro$mounted",true);

(index_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_component_BANG_.cljs$core$IFn$_invoke$arity$1(faux_component) : index_component_BANG_.call(null,faux_component));

return (function (){
goog.object.set(faux_component,"fulcro$mounted",false);

return (drop_component_BANG_.cljs$core$IFn$_invoke$arity$2 ? drop_component_BANG_.cljs$core$IFn$_invoke$arity$2(faux_component,original_ident) : drop_component_BANG_.call(null,faux_component,original_ident));
});
}),[cljs.core.second(current_ident)]);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [faux_component,current_props], null);
});
/**
 * Returns true if the given component instance is mounted on the DOM.
 */
com.fulcrologic.fulcro.components.mounted_QMARK_ = (function com$fulcrologic$fulcro$components$mounted_QMARK_(this$){
return goog.object.get(this$,"fulcro$mounted",false);
});
/**
 * Set React component-local state.  The `new-state` is actually merged with the existing state (as per React docs),
 *   but is wrapped so that cljs maps are used (instead of js objs).  `callback` is an optional callback that will be
 *   called as per the React docs on setState.
 */
com.fulcrologic.fulcro.components.set_state_BANG_ = (function com$fulcrologic$fulcro$components$set_state_BANG_(var_args){
var G__49736 = arguments.length;
switch (G__49736) {
case 3:
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,callback){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(component))){
return component.setState((function (prev_state,props){
return ({"fulcro$state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goog.object.get(prev_state,"fulcro$state"),new_state], 0))});
}),callback);
} else {
return null;
}
}));

(com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
}));

(com.fulcrologic.fulcro.components.set_state_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state. NOTE: This is Fulcro's wrapped component
 * local state. The low-level React state is as described in the React docs (e.g. `(.-state this)`).
 */
com.fulcrologic.fulcro.components.get_state = (function com$fulcrologic$fulcro$components$get_state(var_args){
var G__49741 = arguments.length;
switch (G__49741) {
case 1:
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
var cst = goog.object.getValueByKeys(component,"state","fulcro$state");
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
}));

(com.fulcrologic.fulcro.components.get_state.cljs$lang$maxFixedArity = 2);

var update_fn_50250 = (function (component,f,args){
return component.setState((function (prev_state,props){
return ({"fulcro$state": cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,goog.object.get(prev_state,"fulcro$state"),args)});
}));
});
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 * 
 *  This function affects a managed cljs map maintained in React state.  If you want to affect the low-level
 *  js state itself use React's own `.setState` directly on the component.
 */
com.fulcrologic.fulcro.components.update_state_BANG_ = (function com$fulcrologic$fulcro$components$update_state_BANG_(var_args){
var G__49746 = arguments.length;
switch (G__49746) {
case 2:
return com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___50252 = arguments.length;
var i__4731__auto___50253 = (0);
while(true){
if((i__4731__auto___50253 < len__4730__auto___50252)){
args_arr__4751__auto__.push((arguments[i__4731__auto___50253]));

var G__50254 = (i__4731__auto___50253 + (1));
i__4731__auto___50253 = G__50254;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return update_fn_50250(component,f,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,args){
return update_fn_50250(component,f,args);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$lang$applyTo = (function (seq49743){
var G__49744 = cljs.core.first(seq49743);
var seq49743__$1 = cljs.core.next(seq49743);
var G__49745 = cljs.core.first(seq49743__$1);
var seq49743__$2 = cljs.core.next(seq49743__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49744,G__49745,seq49743__$2);
}));

(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Get the declared :initial-state value for a component.
 */
com.fulcrologic.fulcro.components.get_initial_state = (function com$fulcrologic$fulcro$components$get_initial_state(var_args){
var G__49751 = arguments.length;
switch (G__49751) {
case 1:
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$1 = (function (class$){
var G__49752 = com.fulcrologic.fulcro.components.initial_state(class$,cljs.core.PersistentArrayMap.EMPTY);
if((G__49752 == null)){
return null;
} else {
return cljs.core.with_meta(G__49752,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"computed","computed",-1482016762),true], null));
}
}));

(com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 = (function (class$,params){
var G__49753 = com.fulcrologic.fulcro.components.initial_state(class$,params);
if((G__49753 == null)){
return null;
} else {
return cljs.core.with_meta(G__49753,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"computed","computed",-1482016762),true], null));
}
}));

(com.fulcrologic.fulcro.components.get_initial_state.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the given initial state was returned from a call to get-initial-state. This is used by internal
 *   algorithms when interpreting initial state shorthand in `defsc`.
 */
com.fulcrologic.fulcro.components.computed_initial_state_QMARK_ = (function com$fulcrologic$fulcro$components$computed_initial_state_QMARK_(s){
if(cljs.core.map_QMARK_(s)){
var G__49757 = s;
var G__49757__$1 = (((G__49757 == null))?null:cljs.core.meta(G__49757));
if((G__49757__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"computed","computed",-1482016762).cljs$core$IFn$_invoke$arity$1(G__49757__$1);
}
} else {
return false;
}
});
/**
 * Get the ident for a mounted component OR using a component class.
 * 
 *   That arity-2 will return the ident using the supplied props map.
 * 
 *   The single-arity version should only be used with a mounted component (e.g. `this` from `render`), and will derive the
 *   props that were sent to it most recently.
 */
com.fulcrologic.fulcro.components.get_ident = (function com$fulcrologic$fulcro$components$get_ident(var_args){
var G__49761 = arguments.length;
switch (G__49761) {
case 1:
return com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(com.fulcrologic.fulcro.components.component_instance_QMARK_(x)){
} else {
throw (new Error("Assert failed: (component-instance? x)"));
}

var temp__5733__auto__ = com.fulcrologic.fulcro.components.props(x);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
return com.fulcrologic.fulcro.components.ident(x,m);
} else {
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,626,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-ident was invoked on ",com.fulcrologic.fulcro.components.component_name(x)," with nil props (this could mean it wasn't yet mounted): ",x], null);
}),null)),null,-1801970486);
} else {
return null;
}
}
}));

(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 = (function (class$,props){
var temp__5733__auto__ = com.fulcrologic.fulcro.components.ident(class$,props);
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
if(cljs.core.truth_((function (){var and__4109__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4109__auto__)){
return (!(edn_query_language.core.ident_QMARK_(id)));
} else {
return and__4109__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,631,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-ident returned an invalid ident:",id,new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_options(class$))], null);
}),null)),null,-1784297163);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.second(id))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(id),null], null);
} else {
return id;
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,634,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-ident called with something that is either not a class or does not implement ident: ",class$], null);
}),null)),null,1816231233);

return null;
} else {
return null;
}
}
}));

(com.fulcrologic.fulcro.components.get_ident.cljs$lang$maxFixedArity = 2);

/**
 * CLJS-only.  When the `component` is mounted this will tunnel `new-props` to that component through React `setState`. If you're in
 *   an event handler, this means the tunnelling will be synchronous, and can be useful when updating props that could affect DOM
 *   inputs. This is typically used internally (see `transact!!`, and should generally not be used in applications unless it is a very advanced
 *   scenario and you've studied how this works. NOTE: You should `tick!` the application clock and bind *denormalize-time*
 *   when generating `new-props` so they are properly time-stamped by `db->tree`, or manually add time to `new-props`
 *   using `fdn/with-time` directly.
 */
com.fulcrologic.fulcro.components.tunnel_props_BANG_ = (function com$fulcrologic$fulcro$components$tunnel_props_BANG_(component,new_props){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(component))){
return component.setState((function (s){
return ({"fulcro$value": new_props});
}));
} else {
return null;
}
});
/**
 * Returns true if the given argument is a component factory.
 */
com.fulcrologic.fulcro.components.is_factory_QMARK_ = (function com$fulcrologic$fulcro$components$is_factory_QMARK_(class_or_factory){
return ((cljs.core.fn_QMARK_(class_or_factory)) && (cljs.core.contains_QMARK_(cljs.core.meta(class_or_factory),new cljs.core.Keyword(null,"qualifier","qualifier",125841738))));
});
/**
 * Returns a string ID for the query of the given class with qualifier.
 */
com.fulcrologic.fulcro.components.query_id = (function com$fulcrologic$fulcro$components$query_id(class$,qualifier){
if((class$ == null)){
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,660,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query ID received no class (if you see this warning, it probably means metadata was lost on your query)",cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY)], null);
}),null)),null,1892720054);
} else {
return null;
}
} else {
var temp__5735__auto__ = com.fulcrologic.fulcro.components.component_name(class$);
if(cljs.core.truth_(temp__5735__auto__)){
var classname = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname),(cljs.core.truth_(qualifier)?["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualifier)].join(''):null)].join('');
} else {
return null;
}
}
});
/**
 * Takes a state map that may contain normalized queries and a query ID. Returns the stored query or nil.
 */
com.fulcrologic.fulcro.components.denormalize_query = (function com$fulcrologic$fulcro$components$denormalize_query(state_map,ID){
var get_stored_query = (function (id){
var map__49769 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),id], null));
var map__49769__$1 = (((((!((map__49769 == null))))?(((((map__49769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49769):map__49769);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49769__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49769__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var component = com.fulcrologic.fulcro.components.registry_key__GT_class(component_key);
if(cljs.core.truth_(component)){
} else {
cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),id], null));
}

var G__49774 = query;
if((G__49774 == null)){
return null;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(G__49774,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"queryid","queryid",-271432056),id);
}
});
var temp__5735__auto__ = get_stored_query(ID);
if(cljs.core.truth_(temp__5735__auto__)){
var normalized_query = temp__5735__auto__;
return clojure.walk.prewalk((function (ele){
var temp__5733__auto__ = ((typeof ele === 'string')?get_stored_query(ele):false);
if(cljs.core.truth_(temp__5733__auto__)){
var q = temp__5733__auto__;
return q;
} else {
return ele;
}
}),normalized_query);
} else {
return null;
}
});
/**
 * Get the query id that is cached in the component's props.
 */
com.fulcrologic.fulcro.components.get_query_id = (function com$fulcrologic$fulcro$components$get_query_id(component){
return com.fulcrologic.fulcro.components.get_raw_react_prop(component,"fulcro$queryid");
});
com.fulcrologic.fulcro.components.get_query_by_id = (function com$fulcrologic$fulcro$components$get_query_by_id(state_map,class$,queryid){
var query = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components.denormalize_query(state_map,queryid);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return com.fulcrologic.fulcro.components.query(class$);
}
})();
return cljs.core.with_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid], null));
});
/**
 * Get the query for the given class or factory. If called without a state map, then you'll get the declared static
 *   query of the class. If a state map is supplied, then the dynamically set queries in that state will result in
 *   the current dynamically-set query according to that state.
 */
com.fulcrologic.fulcro.components.get_query = (function com$fulcrologic$fulcro$components$get_query(var_args){
var G__49777 = arguments.length;
switch (G__49777) {
case 1:
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1 = (function (class_or_factory){
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,(function (){var or__4120__auto__ = com.fulcrologic.fulcro.components._STAR_query_state_STAR_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var or__4120__auto____$1 = (function (){var G__49779 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__49779__$1 = (((G__49779 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__49779));
if((G__49779__$1 == null)){
return null;
} else {
return cljs.core.deref(G__49779__$1);
}
})();
if(cljs.core.truth_(or__4120__auto____$1)){
return or__4120__auto____$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
})());
}));

(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2 = (function (class_or_factory,state_map){
if((class_or_factory == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nil passed to get-query",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var _STAR_query_state_STAR__orig_val__49781 = com.fulcrologic.fulcro.components._STAR_query_state_STAR_;
var _STAR_query_state_STAR__temp_val__49782 = state_map;
(com.fulcrologic.fulcro.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__temp_val__49782);

try{var class$ = ((com.fulcrologic.fulcro.components.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):((com.fulcrologic.fulcro.components.component_instance_QMARK_(class_or_factory))?com.fulcrologic.fulcro.components.react_type(class_or_factory):class_or_factory
));
var class$__$1 = (cljs.core.truth_(goog.DEBUG)?com.fulcrologic.fulcro.components.registry_key__GT_class(com.fulcrologic.fulcro.components.class__GT_registry_key(class$)):class$);
var qualifier = ((com.fulcrologic.fulcro.components.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"qualifier","qualifier",125841738).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):null);
var queryid = ((com.fulcrologic.fulcro.components.component_instance_QMARK_(class_or_factory))?com.fulcrologic.fulcro.components.get_query_id(class_or_factory):com.fulcrologic.fulcro.components.query_id(class$__$1,qualifier));
if(cljs.core.truth_((function (){var and__4109__auto__ = class$__$1;
if(cljs.core.truth_(and__4109__auto__)){
return com.fulcrologic.fulcro.components.has_query_QMARK_(class$__$1);
} else {
return and__4109__auto__;
}
})())){
return com.fulcrologic.fulcro.components.get_query_by_id(state_map,class$__$1,queryid);
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__orig_val__49781);
}}));

(com.fulcrologic.fulcro.components.get_query.cljs$lang$maxFixedArity = 2);

/**
 * Build a component's initial state using the defsc initial-state-data from
 *   options, the children from options, and the params from the invocation of get-initial-state.
 */
com.fulcrologic.fulcro.components.make_state_map = (function com$fulcrologic$fulcro$components$make_state_map(initial_state,children_by_query_key,params){
var join_keys = cljs.core.set(cljs.core.keys(children_by_query_key));
var init_keys = cljs.core.set(cljs.core.keys(initial_state));
var is_child_QMARK_ = (function (k){
return cljs.core.contains_QMARK_(join_keys,k);
});
var value_of = (function com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_(p__49789){
var vec__49791 = p__49789;
var isk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49791,(0),null);
var isv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49791,(1),null);
var param_name = (function (v){
if((v instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param",cljs.core.namespace(v))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(v));
} else {
return false;
}
} else {
return false;
}
});
var substitute = (function (ele){
var temp__5733__auto__ = param_name(ele);
if(cljs.core.truth_(temp__5733__auto__)){
var k = temp__5733__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
} else {
return ele;
}
});
var param_key = param_name(isv);
var param_exists_QMARK_ = cljs.core.contains_QMARK_(params,param_key);
var param_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,param_key);
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(children_by_query_key,isk);
if(cljs.core.truth_((function (){var and__4109__auto__ = param_key;
if(cljs.core.truth_(and__4109__auto__)){
return (!(param_exists_QMARK_));
} else {
return and__4109__auto__;
}
})())){
return null;
} else {
if(((cljs.core.map_QMARK_(isv)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,isv)))], null);
} else {
if(cljs.core.map_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,isv))], null);
} else {
if(((cljs.core.vector_QMARK_(isv)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,m)));
}),isv)], null);
} else {
if(((cljs.core.vector_QMARK_(param_value)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (params__$1){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.computed_initial_state_QMARK_(params__$1))){
return params__$1;
} else {
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,params__$1);
}
}),param_value)], null);
} else {
if(cljs.core.vector_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ele){
return substitute(ele);
}),isv)], null);
} else {
if(cljs.core.truth_((function (){var and__4109__auto__ = param_key;
if(cljs.core.truth_(and__4109__auto__)){
return ((is_child_QMARK_(isk)) && (param_exists_QMARK_));
} else {
return and__4109__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,(cljs.core.truth_(com.fulcrologic.fulcro.components.computed_initial_state_QMARK_(param_value))?param_value:com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,param_value))], null);
} else {
if(cljs.core.truth_(param_key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,param_value], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,isv], null);

}
}
}
}
}
}
}
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(value_of,initial_state));
});
/**
 * Run `real-render`, possibly through :render-middleware configured on your app.
 */
com.fulcrologic.fulcro.components.wrapped_render = (function com$fulcrologic$fulcro$components$wrapped_render(this$,real_render){
var app__$1 = goog.object.getValueByKeys(this$,"props","fulcro$app");
var render_middleware = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render-middleware","render-middleware",1183628797));
if(cljs.core.truth_(render_middleware)){
return (render_middleware.cljs$core$IFn$_invoke$arity$2 ? render_middleware.cljs$core$IFn$_invoke$arity$2(this$,real_render) : render_middleware.call(null,this$,real_render));
} else {
return (real_render.cljs$core$IFn$_invoke$arity$0 ? real_render.cljs$core$IFn$_invoke$arity$0() : real_render.call(null));
}
});
/**
 * Configure a function `(f [this fulcro-props] ...)` to work properly as a hook-based react component. This can be
 *   used in leiu of `defsc` to create a component, where `options` is the (non-magic) map of component options
 *   (i.e. :query is a `(fn [this])`, not a vector).
 * 
 *   IMPORTANT: Your options must include `:componentName`, a fully-qualified keyword to use in the component registry.
 * 
 *   Returns a new function that wraps yours (to properly extract Fulcro props) and installs the proper Fulcro component
 *   options on the low-level function so that it will act properly when used within React as a hook-based component.
 * 
 *   (def MyComponent
 *  (configure-hooks-component!
 *    (fn [this props]
 *      (let [[v set-v!] (use-state this 0)
 *        (dom/div ...)))
 *    {:query ... :ident (fn [_ props] ...) :componentName ::MyComponent}))
 * 
 *   (def ui-my-component (comp/factory MyComponent {:keyfn :id})
 * 
 *   This can be used to easily generate dynamic components at runtime (as can `configure-component!`).
 *   
 */
com.fulcrologic.fulcro.components.configure_hooks_component_BANG_ = (function com$fulcrologic$fulcro$components$configure_hooks_component_BANG_(f,options){
var cls_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var js_fn = (function (js_props){
var vec__49815 = com.fulcrologic.fulcro.components.use_fulcro(js_props,cljs.core.deref(cls_atom));
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49815,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49815,(1),null);
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__49819 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__49820 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__49821 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__49822 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__49823 = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return com.fulcrologic.fulcro.components.any__GT_app(this$);
}
})();
var _STAR_depth_STAR__temp_val__49824 = (com.fulcrologic.fulcro.components.depth(this$) + (1));
var _STAR_shared_STAR__temp_val__49825 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components._STAR_app_STAR_);
var _STAR_parent_STAR__temp_val__49826 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__49823);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__49824);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__49825);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__49826);

try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,props) : f.call(null,this$,props));
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__49822);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__49821);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__49820);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__49819);
}}));
});
cljs.core.reset_BANG_(cls_atom,js_fn);

return com.fulcrologic.fulcro.components.add_hook_options_BANG_(js_fn,options);
});
/**
 * Create a react element for a Fulcro class.  In CLJ this returns the same thing as a mounted instance, whereas in CLJS it is an
 *   element (which has yet to instantiate an instance).
 */
com.fulcrologic.fulcro.components.create_element = (function com$fulcrologic$fulcro$components$create_element(class$,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,class$,props,com.fulcrologic.fulcro.components.force_children(children));
});
/**
 * Create a factory constructor from a component class created with
 * defsc.
 */
com.fulcrologic.fulcro.components.factory = (function com$fulcrologic$fulcro$components$factory(var_args){
var G__49872 = arguments.length;
switch (G__49872) {
case 1:
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
}));

(com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__49875){
var map__49877 = p__49875;
var map__49877__$1 = (((((!((map__49877 == null))))?(((((map__49877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49877):map__49877);
var opts = map__49877__$1;
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49877__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var qualifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49877__$1,new cljs.core.Keyword(null,"qualifier","qualifier",125841738));
var qid = com.fulcrologic.fulcro.components.query_id(class$,qualifier);
return cljs.core.with_meta((function() { 
var com$fulcrologic$fulcro$components$element_factory__delegate = function (props,children){
var key = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
var key__$1 = (cljs.core.truth_(key)?key:(cljs.core.truth_(keyfn)?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):null));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__49882 = ref;
if((ref instanceof cljs.core.Keyword)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49882);
} else {
return G__49882;
}
})();
var props_middleware = (function (){var G__49884 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if((G__49884 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(G__49884,new cljs.core.Keyword(null,"props-middleware","props-middleware",358176739));
}
})();
var props__$1 = ({"fulcro$value": props, "fulcro$queryid": qid, "fulcro$app": com.fulcrologic.fulcro.components._STAR_app_STAR_, "fulcro$parent": com.fulcrologic.fulcro.components._STAR_parent_STAR_, "fulcro$depth": com.fulcrologic.fulcro.components._STAR_depth_STAR_});
var props__$2 = (cljs.core.truth_(props_middleware)?(props_middleware.cljs$core$IFn$_invoke$arity$2 ? props_middleware.cljs$core$IFn$_invoke$arity$2(class$,props__$1) : props_middleware.call(null,class$,props__$1)):props__$1);
if(cljs.core.truth_(key__$1)){
goog.object.set(props__$2,"key",key__$1);
} else {
}

if(cljs.core.truth_(ref__$1)){
goog.object.set(props__$2,"ref",ref__$1);
} else {
}

if(cljs.core.truth_(goog.DEBUG)){
if((com.fulcrologic.fulcro.components._STAR_app_STAR_ == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,863,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A Fulcro component was rendered outside of a parent context. This probably means you are using a library that has you pass rendering code to it as a lambda. Use `with-parent-context` to fix this."], null);
}),null)),null,1505102678);
} else {
}

if(((cljs.core.map_QMARK_(key__$1)) || (cljs.core.vector_QMARK_(key__$1)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,865,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["React key for ",com.fulcrologic.fulcro.components.component_name(class$)," is not a simple scalar value. This could cause spurious component remounts."], null);
}),null)),null,-120988080);
} else {
}

if(typeof ref__$1 === 'string'){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,868,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String ref on ",com.fulcrologic.fulcro.components.component_name(class$)," should be a function."], null);
}),null)),null,1216415999);
} else {
}

if((((props__$2 == null)) || (cljs.core.not(goog.object.containsKey(props__$2,"fulcro$value"))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,871,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Props middleware seems to have the corrupted props for ",com.fulcrologic.fulcro.components.component_name(class$)], null);
}),null)),null,1239180326);
} else {
}
} else {
}

return com.fulcrologic.fulcro.components.create_element(class$,props__$2,children);
};
var com$fulcrologic$fulcro$components$element_factory = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__50293__i = 0, G__50293__a = new Array(arguments.length -  1);
while (G__50293__i < G__50293__a.length) {G__50293__a[G__50293__i] = arguments[G__50293__i + 1]; ++G__50293__i;}
  children = new cljs.core.IndexedSeq(G__50293__a,0,null);
} 
return com$fulcrologic$fulcro$components$element_factory__delegate.call(this,props,children);};
com$fulcrologic$fulcro$components$element_factory.cljs$lang$maxFixedArity = 1;
com$fulcrologic$fulcro$components$element_factory.cljs$lang$applyTo = (function (arglist__50294){
var props = cljs.core.first(arglist__50294);
var children = cljs.core.rest(arglist__50294);
return com$fulcrologic$fulcro$components$element_factory__delegate(props,children);
});
com$fulcrologic$fulcro$components$element_factory.cljs$core$IFn$_invoke$arity$variadic = com$fulcrologic$fulcro$components$element_factory__delegate;
return com$fulcrologic$fulcro$components$element_factory;
})()
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),qid,new cljs.core.Keyword(null,"qualifier","qualifier",125841738),qualifier], null));
}));

(com.fulcrologic.fulcro.components.factory.cljs$lang$maxFixedArity = 2);

/**
 * Similar to factory, but returns a function with the signature
 *   [props computed & children] instead of default [props & children].
 *   This makes easier to send computed.
 */
com.fulcrologic.fulcro.components.computed_factory = (function com$fulcrologic$fulcro$components$computed_factory(var_args){
var G__49895 = arguments.length;
switch (G__49895) {
case 1:
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,options){
var real_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(class$,options);
return (function() {
var G__50301 = null;
var G__50301__1 = (function (props){
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(props) : real_factory.call(null,props));
});
var G__50301__2 = (function (props,computed_props){
var G__49903 = com.fulcrologic.fulcro.components.computed(props,computed_props);
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(G__49903) : real_factory.call(null,G__49903));
});
var G__50301__3 = (function() { 
var G__50308__delegate = function (props,computed_props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,com.fulcrologic.fulcro.components.computed(props,computed_props),children);
};
var G__50308 = function (props,computed_props,var_args){
var children = null;
if (arguments.length > 2) {
var G__50311__i = 0, G__50311__a = new Array(arguments.length -  2);
while (G__50311__i < G__50311__a.length) {G__50311__a[G__50311__i] = arguments[G__50311__i + 2]; ++G__50311__i;}
  children = new cljs.core.IndexedSeq(G__50311__a,0,null);
} 
return G__50308__delegate.call(this,props,computed_props,children);};
G__50308.cljs$lang$maxFixedArity = 2;
G__50308.cljs$lang$applyTo = (function (arglist__50314){
var props = cljs.core.first(arglist__50314);
arglist__50314 = cljs.core.next(arglist__50314);
var computed_props = cljs.core.first(arglist__50314);
var children = cljs.core.rest(arglist__50314);
return G__50308__delegate(props,computed_props,children);
});
G__50308.cljs$core$IFn$_invoke$arity$variadic = G__50308__delegate;
return G__50308;
})()
;
G__50301 = function(props,computed_props,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return G__50301__1.call(this,props);
case 2:
return G__50301__2.call(this,props,computed_props);
default:
var G__50316 = null;
if (arguments.length > 2) {
var G__50317__i = 0, G__50317__a = new Array(arguments.length -  2);
while (G__50317__i < G__50317__a.length) {G__50317__a[G__50317__i] = arguments[G__50317__i + 2]; ++G__50317__i;}
G__50316 = new cljs.core.IndexedSeq(G__50317__a,0,null);
}
return G__50301__3.cljs$core$IFn$_invoke$arity$variadic(props,computed_props, G__50316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50301.cljs$lang$maxFixedArity = 2;
G__50301.cljs$lang$applyTo = G__50301__3.cljs$lang$applyTo;
G__50301.cljs$core$IFn$_invoke$arity$1 = G__50301__1;
G__50301.cljs$core$IFn$_invoke$arity$2 = G__50301__2;
G__50301.cljs$core$IFn$_invoke$arity$variadic = G__50301__3.cljs$core$IFn$_invoke$arity$variadic;
return G__50301;
})()
}));

(com.fulcrologic.fulcro.components.computed_factory.cljs$lang$maxFixedArity = 2);

/**
 * Dynamic var that affects the activation of transactions run via `transact!`. Defaults to false. When set to true
 * this option prevents a transaction from running until after the next render is complete. This typically should not be set
 * to true in scenarios where you are unsure if a render will occur, since that could make the transaction appear to
 * "hang".
 */
com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = false;
/**
 * Submit a transaction for processing.
 * 
 *   The underlying transaction system is pluggable, but the *default* supported options are:
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The ident of the component used to submit this transaction. This is set automatically if you use a component to call this function.
 *   - `:component` - React element. Set automatically if you call this function using a component.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 *   - `:abort-id` - An ID (you make up) that makes it possible (if the plugins you're using support it) to cancel
 *  the network portion of the transaction (assuming it has not already completed).
 *   - `:compressible?` - boolean. Check compressible-transact! docs.
 *   - `:synchronous?` - boolean. When turned on the transaction will run immediately on the calling thread. If run against
 *   a component then the props will be immediately tunneled back to the calling component, allowing for React (raw) input
 *   event handlers to behave as described in standard React Forms docs (uses setState behind the scenes). Any remote operations
 *   will still be queued as normal. Calling `transact!!` is a shorthand for this option. WARNING: ONLY the given component will
 *   be refreshed in the UI. If you have dependent data elsewhere in the UI you must either use `transact!` or schedule
 *   your own global render using `app/schedule-render!`.
 *   ` `:after-render?` - Wait until the next render completes before allowing this transaction to run. This can be used
 *   when calling `transact!` from *within* another mutation to ensure that the effects of the current mutation finish
 *   before this transaction takes control of the CPU. This option defaults to `false`, but `defmutation` causes it to
 *   be set to true for any transactions run within mutation action sections. You can affect the default for this value
 *   in a dynamic scope by binding `*after-render*` to true
 * 
 *   NOTE: This function calls the application's `tx!` function (which is configurable). Fulcro 2 'follow-on reads' are
 *   supported by the default version and are added to the `:refresh` entries. Your choice of rendering algorithm will
 *   influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.components.transact_BANG_ = (function com$fulcrologic$fulcro$components$transact_BANG_(var_args){
var G__49908 = arguments.length;
switch (G__49908) {
case 3:
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_or_component,tx,options){
var temp__5735__auto__ = com.fulcrologic.fulcro.components.any__GT_app(app_or_component);
if(cljs.core.truth_(temp__5735__auto__)){
var app__$1 = temp__5735__auto__;
var tx_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"tx!","tx!",-1308106263));
var options__$1 = (function (){var G__49912 = options;
var G__49912__$1 = (((((!(cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"after-render?","after-render?",595994030))))) && (com.fulcrologic.fulcro.components._STAR_after_render_STAR_ === true)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49912,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),true):G__49912);
var G__49912__$2 = (((((new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(options) == null)) && (com.fulcrologic.fulcro.components.has_ident_QMARK_(app_or_component))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49912__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(app_or_component)):G__49912__$1);
if((((new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(options) == null)) && (com.fulcrologic.fulcro.components.component_instance_QMARK_(app_or_component)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49912__$2,new cljs.core.Keyword(null,"component","component",1555936782),app_or_component);
} else {
return G__49912__$2;
}
})();
return (tx_BANG_.cljs$core$IFn$_invoke$arity$3 ? tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,options__$1) : tx_BANG_.call(null,app__$1,tx,options__$1));
} else {
return null;
}
}));

(com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_or_comp,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_or_comp,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.components.transact_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Shorthand for exactly `(transact! component tx (merge options {:synchronous? true}))`.
 * 
 *   Runs a synchronous transaction, which is an optimized mode where the optimistic behaviors of the mutations in the
 *   transaction run on the calling thread, and new props are immediately made available to the calling component via
 *   "props tunneling" (a behind-the-scenes mechanism using js/setState).
 * 
 *   This mode is meant to be used in form input event handlers, since React is designed to only work properly with
 *   raw DOM inputs via component-local state. This prevents things like the cursor jumping to the end of inputs
 *   unexpectedly.
 * 
 *   WARNING: Using an `app` instead of a component in synchronous transactions makes no sense. You must pass a component
 *   that has an ident.
 * 
 *   If you're using this, you can also set the compiler option:
 * 
 *   ```
 *   :compiler-options {:external-config {:fulcro     {:wrap-inputs? false}}}
 *   ```
 * 
 *   to turn off Fulcro DOM's generation of wrapped inputs (which try to solve this problem in a less-effective way).
 * 
 *   WARNING: Synchronous rendering does *not* refresh the full UI, only the component.
 *   
 */
com.fulcrologic.fulcro.components.transact_BANG__BANG_ = (function com$fulcrologic$fulcro$components$transact_BANG__BANG_(var_args){
var G__49916 = arguments.length;
switch (G__49916) {
case 2:
return com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,tx){
return com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(component,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,tx,options){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component,tx,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391),true], null)], 0)));
}));

(com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Part of internal implementation of dynamic queries.
 */
com.fulcrologic.fulcro.components.link_element = (function com$fulcrologic$fulcro$components$link_element(element){
return clojure.walk.prewalk((function com$fulcrologic$fulcro$components$link_element_$_link_element_helper(ele){
var map__49918 = cljs.core.meta(ele);
var map__49918__$1 = (((((!((map__49918 == null))))?(((((map__49918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49918):map__49918);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49918__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
if(cljs.core.truth_(queryid)){
return queryid;
} else {
return ele;
}
}),element);
});
/**
 * Part of internal implementation of dynamic queries.
 * 
 *   Determines if there are query elements in the `query` that need to be normalized. If so, it does so.
 * 
 *   Returns the new state map containing potentially-updated normalized queries.
 */
com.fulcrologic.fulcro.components.normalize_query_elements = (function com$fulcrologic$fulcro$components$normalize_query_elements(state_map,query){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$components$normalize_query_elements_$_normalize_query_elements_reducer(state,ele){
try{var parameterized_QMARK_ = cljs.core.seq_QMARK_(ele);
var raw_element = ((parameterized_QMARK_)?cljs.core.first(ele):ele);
if(com.fulcrologic.fulcro.algorithms.do_not_use.union_QMARK_(raw_element)){
var union_alternates = cljs.core.first(cljs.core.vals(raw_element));
var union_meta = cljs.core.meta(union_alternates);
var normalized_union_alternates = cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.link_element,union_alternates)),union_meta);
var union_query_id = new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(union_alternates));
var union_component_key = com.fulcrologic.fulcro.components.class__GT_registry_key(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(union_alternates)));
if(cljs.core.truth_(union_query_id)){
} else {
throw (new Error(["Assert failed: ","Union query has an ID. Did you use extended get-query?","\n","union-query-id"].join('')));
}

return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.createAsIfByAssoc([union_query_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),normalized_union_alternates,new cljs.core.Keyword(null,"component-key","component-key",1189239034),union_component_key,new cljs.core.Keyword(null,"id","id",-1388402092),union_query_id], null)])], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$components$normalize_query_elements_$_normalize_query_elements_reducer_$_normalize_union_reducer(s,p__49937){
var vec__49938 = p__49937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49938,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49938,(1),null);
return (com.fulcrologic.fulcro.components.normalize_query.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.normalize_query.cljs$core$IFn$_invoke$arity$2(s,subquery) : com.fulcrologic.fulcro.components.normalize_query.call(null,s,subquery));
}),state,union_alternates)], 0));
} else {
if(((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(raw_element)) && (com.fulcrologic.fulcro.algorithms.do_not_use.recursion_QMARK_(com.fulcrologic.fulcro.algorithms.do_not_use.join_value(raw_element))))){
return state;
} else {
if(com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(raw_element)){
var G__49943 = state;
var G__49944 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(raw_element);
return (com.fulcrologic.fulcro.components.normalize_query.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.normalize_query.cljs$core$IFn$_invoke$arity$2(G__49943,G__49944) : com.fulcrologic.fulcro.components.normalize_query.call(null,G__49943,G__49944));
} else {
return state;

}
}
}
}catch (e49935){var e = e49935;
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,1016,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Query normalization failed. Perhaps you tried to set a query with a syntax error?"], null);
}),null)),null,2054114675);
} else {
return null;
}
}}),state_map,query);
});
/**
 * Part of dyn query implementation. Find all of the elements (only at the top level) of the given query and replace them
 *   with their query ID.
 */
com.fulcrologic.fulcro.components.link_query = (function com$fulcrologic$fulcro$components$link_query(query){
var metadata = cljs.core.meta(query);
if(cljs.core.map_QMARK_(query)){
return cljs.core.with_meta(taoensso.encore.map_vals((function (ele){
var map__49952 = cljs.core.meta(ele);
var map__49952__$1 = (((((!((map__49952 == null))))?(((((map__49952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49952):map__49952);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49952__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
return queryid;
}),query),metadata);
} else {
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.link_element,query),metadata);
}
});
/**
 * Given a state map and a query, returns a state map with the query normalized into the database. Query fragments
 *   that already appear in the state will not be added.  Part of dynamic query implementation.
 */
com.fulcrologic.fulcro.components.normalize_query = (function com$fulcrologic$fulcro$components$normalize_query(state_map,query){
var queryid = (function (){var G__49960 = query;
var G__49960__$1 = (((G__49960 == null))?null:cljs.core.meta(G__49960));
if((G__49960__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__49960__$1);
}
})();
var component_key = com.fulcrologic.fulcro.components.class__GT_registry_key((function (){var G__49961 = query;
var G__49961__$1 = (((G__49961 == null))?null:cljs.core.meta(G__49961));
if((G__49961__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__49961__$1);
}
})());
var query_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.dissoc,new cljs.core.Keyword(null,"queryid","queryid",-271432056),new cljs.core.Keyword(null,"component","component",1555936782));
var new_state = com.fulcrologic.fulcro.components.normalize_query_elements(state_map,query_SINGLEQUOTE_);
var new_state__$1 = (((new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452).cljs$core$IFn$_invoke$arity$1(new_state) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.EMPTY):new_state);
var top_query = com.fulcrologic.fulcro.components.link_query(query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__4109__auto__ = queryid;
if(cljs.core.truth_(and__4109__auto__)){
return component_key;
} else {
return and__4109__auto__;
}
})())){
return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.createAsIfByAssoc([queryid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),top_query,new cljs.core.Keyword(null,"id","id",-1388402092),queryid,new cljs.core.Keyword(null,"component-key","component-key",1189239034),component_key], null)])], null),new_state__$1], 0));
} else {
return new_state__$1;
}
});
/**
 * Put a query in app state.
 * 
 *   NOTE: Indexes must be rebuilt after setting a query, so this function should primarily be used to build
 *   up an initial app state.
 */
com.fulcrologic.fulcro.components.set_query_STAR_ = (function com$fulcrologic$fulcro$components$set_query_STAR_(state_map,class_or_factory,p__49966){
var map__49970 = p__49966;
var map__49970__$1 = (((((!((map__49970 == null))))?(((((map__49970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49970):map__49970);
var args = map__49970__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49970__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var queryid = (((class_or_factory == null))?null:(cljs.core.truth_((function (){var G__49972 = class_or_factory;
var G__49972__$1 = (((G__49972 == null))?null:cljs.core.meta(G__49972));
if((G__49972__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__49972__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__49977 = class_or_factory;
var G__49977__$1 = (((G__49977 == null))?null:cljs.core.meta(G__49977));
if((G__49977__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__49977__$1);
}
})():com.fulcrologic.fulcro.components.query_id(class_or_factory,null)
));
var component = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return class_or_factory;
}
})();
var setq_STAR_ = (function (state){
return com.fulcrologic.fulcro.components.normalize_query(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.dissoc,queryid),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(query,cljs.core.assoc,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"component","component",1555936782),component));
});
if(typeof queryid === 'string'){
var G__49980 = state_map;
if(cljs.core.contains_QMARK_(args,new cljs.core.Keyword(null,"query","query",-1288509510))){
return setq_STAR_(G__49980);
} else {
return G__49980;
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,1072,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Set query failed. There was no query ID. Use a class or factory for the second argument."], null);
}),null)),null,-1610931229);
} else {
}

return state_map;
}
});
/**
 * Public API for setting a dynamic query on a component. This function alters the query and rebuilds internal indexes.
 * 
 *   * `x` : is anything that any->app accepts.
 *   * `class-or-factory` : A component class or factory for that class (if using query qualifiers)
 *   * `opts` : A map with `query` and optionally `params` (substitutions on queries)
 *   
 */
com.fulcrologic.fulcro.components.set_query_BANG_ = (function com$fulcrologic$fulcro$components$set_query_BANG_(x,class_or_factory,p__49984){
var map__49985 = p__49984;
var map__49985__$1 = (((((!((map__49985 == null))))?(((((map__49985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49985):map__49985);
var opts = map__49985__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49985__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49985__$1,new cljs.core.Keyword(null,"params","params",710516235));
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(x);
var state_atom = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var queryid = ((typeof class_or_factory === 'string')?class_or_factory:(cljs.core.truth_((function (){var G__49987 = class_or_factory;
var G__49987__$1 = (((G__49987 == null))?null:cljs.core.meta(G__49987));
if((G__49987__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__49987__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__49988 = class_or_factory;
var G__49988__$1 = (((G__49988 == null))?null:cljs.core.meta(G__49988));
if((G__49988__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__49988__$1);
}
})():com.fulcrologic.fulcro.components.query_id(class_or_factory,null)
));
if(cljs.core.truth_(((typeof queryid === 'string')?(function (){var or__4120__auto__ = query;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return params;
}
})():false))){
var index_root_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-root!","index-root!",-981026266));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,com.fulcrologic.fulcro.components.set_query_STAR_,class_or_factory,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params], null));

if(cljs.core.truth_(index_root_BANG_)){
(index_root_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_root_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : index_root_BANG_.call(null,app__$1));
} else {
}

if(cljs.core.truth_(schedule_render_BANG_)){
var G__49992 = app__$1;
var G__49993 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__49992,G__49993) : schedule_render_BANG_.call(null,G__49992,G__49993));
} else {
return null;
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,1096,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to set query. Invalid arguments."], null);
}),null)),null,-214546116);
} else {
return null;
}
}
});
var __set_query_BANG_ = (function com$fulcrologic$fulcro$components$__set_query_BANG_(app__$1,class_or_factory,p__50005){
var map__50006 = p__50005;
var map__50006__$1 = (((((!((map__50006 == null))))?(((((map__50006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50006):map__50006);
var params = map__50006__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50006__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_atom = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var queryid = ((typeof class_or_factory === 'string')?class_or_factory:(cljs.core.truth_((function (){var G__50009 = class_or_factory;
var G__50009__$1 = (((G__50009 == null))?null:cljs.core.meta(G__50009));
if((G__50009__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__50009__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__50012 = class_or_factory;
var G__50012__$1 = (((G__50012 == null))?null:cljs.core.meta(G__50012));
if((G__50012__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__50012__$1);
}
})():com.fulcrologic.fulcro.components.query_id(class_or_factory,null)
));
if(cljs.core.truth_(((typeof queryid === 'string')?(function (){var or__4120__auto__ = query;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return params;
}
})():false))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,com.fulcrologic.fulcro.components.set_query_STAR_,class_or_factory,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params], null));
} else {
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,1107,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to set query. Invalid arguments."], null);
}),null)),null,1182103562);
} else {
return null;
}
}
});
/**
 * Refresh the current dynamic queries in app state to reflect any updates to the static queries of the components.
 * 
 *   This can be used at development time to update queries that have changed but that hot code reload does not
 *   reflect (because there is a current saved query in state). This is *not* always what you want, since a component
 *   may have a custom query whose prop-level elements are set to a particular thing on purpose.
 * 
 *   An component that has `:preserve-dynamic-query? true` in its component options will be ignored by
 *   this function.
 */
com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_ = (function com$fulcrologic$fulcro$components$refresh_dynamic_queries_BANG_(var_args){
var G__50018 = arguments.length;
switch (G__50018) {
case 3:
return com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,cls,force_QMARK_){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
var preserve_QMARK_ = ((cljs.core.not(force_QMARK_))?com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(cls,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297)], 0)):false);
if(cljs.core.truth_(preserve_QMARK_)){
return null;
} else {
return com.fulcrologic.fulcro.components.set_query_BANG_(app__$1,cls,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls,cljs.core.PersistentArrayMap.EMPTY)], null));
}
}));

(com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app_ish){
var map__50030 = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
var map__50030__$1 = (((((!((map__50030 == null))))?(((((map__50030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50030):map__50030);
var app__$1 = map__50030__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50030__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452));
var classnames = cljs.core.keys(queries);
var seq__50032_50434 = cljs.core.seq(classnames);
var chunk__50034_50435 = null;
var count__50035_50436 = (0);
var i__50036_50437 = (0);
while(true){
if((i__50036_50437 < count__50035_50436)){
var nm_50458 = chunk__50034_50435.cljs$core$IIndexed$_nth$arity$2(null,i__50036_50437);
var cls_50461 = com.fulcrologic.fulcro.components.registry_key__GT_class(nm_50458);
var preserve_QMARK__50462 = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(cls_50461,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297)], 0));
if(cljs.core.truth_(preserve_QMARK__50462)){
} else {
__set_query_BANG_(app__$1,cls_50461,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_50461,cljs.core.PersistentArrayMap.EMPTY)], null));
}


var G__50475 = seq__50032_50434;
var G__50476 = chunk__50034_50435;
var G__50477 = count__50035_50436;
var G__50478 = (i__50036_50437 + (1));
seq__50032_50434 = G__50475;
chunk__50034_50435 = G__50476;
count__50035_50436 = G__50477;
i__50036_50437 = G__50478;
continue;
} else {
var temp__5735__auto___50480 = cljs.core.seq(seq__50032_50434);
if(temp__5735__auto___50480){
var seq__50032_50482__$1 = temp__5735__auto___50480;
if(cljs.core.chunked_seq_QMARK_(seq__50032_50482__$1)){
var c__4550__auto___50483 = cljs.core.chunk_first(seq__50032_50482__$1);
var G__50485 = cljs.core.chunk_rest(seq__50032_50482__$1);
var G__50486 = c__4550__auto___50483;
var G__50487 = cljs.core.count(c__4550__auto___50483);
var G__50488 = (0);
seq__50032_50434 = G__50485;
chunk__50034_50435 = G__50486;
count__50035_50436 = G__50487;
i__50036_50437 = G__50488;
continue;
} else {
var nm_50494 = cljs.core.first(seq__50032_50482__$1);
var cls_50496 = com.fulcrologic.fulcro.components.registry_key__GT_class(nm_50494);
var preserve_QMARK__50497 = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(cls_50496,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297)], 0));
if(cljs.core.truth_(preserve_QMARK__50497)){
} else {
__set_query_BANG_(app__$1,cls_50496,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_50496,cljs.core.PersistentArrayMap.EMPTY)], null));
}


var G__50501 = cljs.core.next(seq__50032_50482__$1);
var G__50502 = null;
var G__50503 = (0);
var G__50504 = (0);
seq__50032_50434 = G__50501;
chunk__50034_50435 = G__50502;
count__50035_50436 = G__50503;
i__50036_50437 = G__50504;
continue;
}
} else {
}
}
break;
}

var index_root_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-root!","index-root!",-981026266));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
if(cljs.core.truth_(index_root_BANG_)){
(index_root_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_root_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : index_root_BANG_.call(null,app__$1));
} else {
}

if(cljs.core.truth_(schedule_render_BANG_)){
var G__50044 = app__$1;
var G__50045 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__50044,G__50045) : schedule_render_BANG_.call(null,G__50044,G__50045));
} else {
return null;
}
}));

(com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Get all of the indexes from a component instance or app. See also `ident->any`, `class->any`, etc.
 */
com.fulcrologic.fulcro.components.get_indexes = (function com$fulcrologic$fulcro$components$get_indexes(x){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(x);
var G__50046 = app__$1;
var G__50046__$1 = (((G__50046 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__50046));
var G__50046__$2 = (((G__50046__$1 == null))?null:cljs.core.deref(G__50046__$1));
if((G__50046__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938).cljs$core$IFn$_invoke$arity$1(G__50046__$2);
}
});
/**
 * Return all on-screen component instances that are rendering the data for a given ident. `x` is anything any->app accepts.
 */
com.fulcrologic.fulcro.components.ident__GT_components = (function com$fulcrologic$fulcro$components$ident__GT_components(x,ident){
var G__50048 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__50048__$1 = (((G__50048 == null))?null:new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224).cljs$core$IFn$_invoke$arity$1(G__50048));
if((G__50048__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__50048__$1,ident);
}
});
/**
 * Return some (random) on-screen components that uses the given ident. `x` is anything any->app accepts.
 */
com.fulcrologic.fulcro.components.ident__GT_any = (function com$fulcrologic$fulcro$components$ident__GT_any(x,ident){
return cljs.core.first(com.fulcrologic.fulcro.components.ident__GT_components(x,ident));
});
/**
 * Get all component classes that query for the given prop.
 *   `x` can be anything `any->app` is ok with.
 * 
 *   Returns all classes that query for that prop (or ident)
 */
com.fulcrologic.fulcro.components.prop__GT_classes = (function com$fulcrologic$fulcro$components$prop__GT_classes(x,prop){
var G__50050 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__50050__$1 = (((G__50050 == null))?null:new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717).cljs$core$IFn$_invoke$arity$1(G__50050));
if((G__50050__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__50050__$1,prop);
}
});
/**
 * Get all of the on-screen component instances from the indexes that have the type of the component class.
 *   `x` can be anything `any->app` is ok with.
 */
com.fulcrologic.fulcro.components.class__GT_all = (function com$fulcrologic$fulcro$components$class__GT_all(x,class$){
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(class$);
var G__50054 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__50054__$1 = (((G__50054 == null))?null:new cljs.core.Keyword(null,"class->components","class->components",436435919).cljs$core$IFn$_invoke$arity$1(G__50054));
if((G__50054__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__50054__$1,k);
}
});
/**
 * Get a (random) on-screen component instance from the indexes that has type of the given component class.
 *   `x` can be anything `any->app` is ok with.
 */
com.fulcrologic.fulcro.components.class__GT_any = (function com$fulcrologic$fulcro$components$class__GT_any(x,cls){
return cljs.core.first(com.fulcrologic.fulcro.components.class__GT_all(x,cls));
});
/**
 * Returns the current value of the state map via a component instance. Note that it is not safe to render
 *   arbitrary data from the state map since Fulcro will have no idea that it should refresh a component that
 *   does so; however, it is sometimes useful to look at the state map for information that doesn't
 *   change over time.
 */
com.fulcrologic.fulcro.components.component__GT_state_map = (function com$fulcrologic$fulcro$components$component__GT_state_map(this$){
var G__50063 = this$;
var G__50063__$1 = (((G__50063 == null))?null:com.fulcrologic.fulcro.components.any__GT_app(G__50063));
var G__50063__$2 = (((G__50063__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__50063__$1));
if((G__50063__$2 == null)){
return null;
} else {
return cljs.core.deref(G__50063__$2);
}
});
/**
 * Wrap the props middleware such that `f` is called to get extra props that should be placed
 *   in the extra-props arg of the component.
 * 
 *   `handler` - (optional) The next item in the props middleware chain.
 *   `f` - A (fn [cls extra-props] new-extra-props)
 * 
 *   `f` will be passed the class being rendered and the current map of extra props. It should augment
 *   those and return a new version.
 */
com.fulcrologic.fulcro.components.wrap_update_extra_props = (function com$fulcrologic$fulcro$components$wrap_update_extra_props(var_args){
var G__50072 = arguments.length;
switch (G__50072) {
case 1:
return com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (cls,raw_props){
var existing = (function (){var or__4120__auto__ = goog.object.get(raw_props,"fulcro$extra_props");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var new$ = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cls,existing) : f.call(null,cls,existing));
goog.object.set(raw_props,"fulcro$extra_props",new$);

return raw_props;
});
}));

(com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$2 = (function (handler,f){
return (function (cls,raw_props){
var existing = (function (){var or__4120__auto__ = goog.object.get(raw_props,"fulcro$extra_props");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var new$ = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cls,existing) : f.call(null,cls,existing));
goog.object.set(raw_props,"fulcro$extra_props",new$);

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(cls,raw_props) : handler.call(null,cls,raw_props));
});
}));

(com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$lang$maxFixedArity = 2);

/**
 * Wraps children in a React.Fragment. Props are optional, like normal DOM elements.
 */
com.fulcrologic.fulcro.components.fragment = (function com$fulcrologic$fulcro$components$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50577 = arguments.length;
var i__4731__auto___50578 = (0);
while(true){
if((i__4731__auto___50578 < len__4730__auto___50577)){
args__4736__auto__.push((arguments[i__4731__auto___50578]));

var G__50579 = (i__4731__auto___50578 + (1));
i__4731__auto___50578 = G__50579;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__50086 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({}),args], null));
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50086,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50086,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,React.Fragment,cljs.core.clj__GT_js(props),com.fulcrologic.fulcro.components.force_children(children));
}));

(com.fulcrologic.fulcro.components.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.components.fragment.cljs$lang$applyTo = (function (seq50082){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50082));
}));

/**
 * 
 *   DEPRECATED: Generally use `result-action` in mutations to chain sequences instead. This call is equivalent
 *   to `transact!` with an `:optimistic? false` option.
 * 
 *   Like `transact!`, but ensures each call completes (in a full-stack, pessimistic manner) before the next call starts
 *   in any way. Note that two calls of this function have no guaranteed relationship to each other. They could end up
 *   intermingled at runtime. The only guarantee is that for *a single call* to `ptransact!`, the calls in the given tx will run
 *   pessimistically (one at a time) in the order given. Follow-on reads in the given transaction will be repeated after each remote
 *   interaction.
 * 
 *   `component-or-app` a mounted component or the app
 *   `tx` the tx to run
 *   `ref` the ident (ref context) in which to run the transaction (including all deferrals)
 */
com.fulcrologic.fulcro.components.ptransact_BANG_ = (function com$fulcrologic$fulcro$components$ptransact_BANG_(var_args){
var G__50095 = arguments.length;
switch (G__50095) {
case 2:
return com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component_or_app,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component_or_app,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false], null));
}));

(com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component_or_app,ref,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component_or_app,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false,new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
}));

(com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Identical to `transact!` with `:compressible? true` option. This means that if more than one
 *   adjacent history transition edge is compressible, only the more recent of the sequence of them is kept. This
 *   is useful for things like form input fields, where storing every keystoke in history is undesirable. This
 *   also compress the transactions in Fulcro Inspect.
 * 
 *   NOTE: history events that trigger remote interactions are not compressible, since they may be needed for
 *   automatic network error recovery handling.
 */
com.fulcrologic.fulcro.components.compressible_transact_BANG_ = (function com$fulcrologic$fulcro$components$compressible_transact_BANG_(var_args){
var G__50099 = arguments.length;
switch (G__50099) {
case 2:
return com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
}));

(com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,ref,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true,new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
}));

(com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.components.external_config = (function com$fulcrologic$fulcro$components$external_config(app_ish,k){
var G__50125 = app_ish;
var G__50125__$1 = (((G__50125 == null))?null:com.fulcrologic.fulcro.components.any__GT_app(G__50125));
if((G__50125__$1 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__50125__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"external-config","external-config",-471423941),k], null));
}
});
/**
 * Request that the given subtree starting a component be refreshed from the app database without re-rendering any parent. This
 *   is a synchronous call that will tunnel the props to the given component via an internal call to React setState.
 */
com.fulcrologic.fulcro.components.refresh_component_BANG_ = (function com$fulcrologic$fulcro$components$refresh_component_BANG_(component){
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,component)))){
var map__50128 = com.fulcrologic.fulcro.components.any__GT_app(component);
var map__50128__$1 = (((((!((map__50128 == null))))?(((((map__50128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50128):map__50128);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50128__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50128__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_map = cljs.core.deref(state_atom);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",-1038783437),cljs.core.inc);

var _STAR_denormalize_time_STAR__orig_val__50132 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__50133 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",-1038783437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__50133);

try{var ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
var ui_props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ident),state_map);
return com.fulcrologic.fulcro.components.tunnel_props_BANG_(component,ui_props);
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__50132);
}} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,1674,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot re-render a non-component"], null);
}),null)),null,-2012198497);
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.components.js.map
