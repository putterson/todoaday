goog.provide('com.fulcrologic.fulcro.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.components');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('com.fulcrologic.fulcro.dom.inputs');
goog.require('com.fulcrologic.fulcro.dom_common');
goog.require('taoensso.timbre');





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return React.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__53853){
var vec__53854 = p__53853;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53854,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53854,(1),null);
var pair = vec__53854;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__53859){
var vec__53861 = p__53859;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53861,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53861,(1),null);
var pair = vec__53861;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__53866){
var vec__53867 = p__53866;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53867,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53867,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__53870 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53870,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__53870;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__53883 = arguments.length;
switch (G__53883) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__53884 = component.refs;
var G__53884__$1 = (((G__53884 == null))?null:goog.object.get(G__53884,name));
if((G__53884__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__53884__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5733__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5733__auto__)){
var ref = temp__5733__auto__;
var G__53887 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__53890 = (function (){var G__53891 = r;
if((G__53891 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__53891);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__53890) : ref.call(null,G__53890));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__53887) : factory.call(null,G__53887));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__53898 = arguments.length;
switch (G__53898) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___55917 = arguments.length;
var i__4731__auto___55918 = (0);
while(true){
if((i__4731__auto___55918 < len__4730__auto___55917)){
args_arr__4751__auto__.push((arguments[i__4731__auto___55918]));

var G__55919 = (i__4731__auto___55918 + (1));
i__4731__auto___55918 = G__55919;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq53895){
var G__53896 = cljs.core.first(seq53895);
var seq53895__$1 = cljs.core.next(seq53895);
var G__53897 = cljs.core.first(seq53895__$1);
var seq53895__$2 = cljs.core.next(seq53895__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53896,G__53897,seq53895__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4109__auto__ = tag;
if(cljs.core.truth_(and__4109__auto__)){
var G__53939 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__53939) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__53939));
} else {
return and__4109__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return React.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,React.Component);

var x53957_55920 = ctor.prototype;
(x53957_55920.onChange = (function (event){
var this$ = this;
var temp__5735__auto__ = goog.object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x53957_55920.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__53943_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__53943_SHARP_);
})));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4109__auto__ = state_value;
if(cljs.core.truth_(and__4109__auto__)){
var and__4109__auto____$1 = element_value;
if(cljs.core.truth_(and__4109__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4109__auto____$1;
}
} else {
return and__4109__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
}),null)),null,-840958646);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
}));

(x53957_55920.render = (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__55921__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__55921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55922__i = 0, G__55922__a = new Array(arguments.length -  0);
while (G__55922__i < G__55922__a.length) {G__55922__a[G__55922__i] = arguments[G__55922__i + 0]; ++G__55922__i;}
  args = new cljs.core.IndexedSeq(G__55922__a,0,null);
} 
return G__55921__delegate.call(this,args);};
G__55921.cljs$lang$maxFixedArity = 0;
G__55921.cljs$lang$applyTo = (function (arglist__55923){
var args = cljs.core.seq(arglist__55923);
return G__55921__delegate(args);
});
G__55921.cljs$core$IFn$_invoke$arity$variadic = G__55921__delegate;
return G__55921;
})()
;
return (function() { 
var G__55924__delegate = function (props,children){
var t = goog.object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"input",props,children);
} else {
var temp__5733__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__55924 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__55925__i = 0, G__55925__a = new Array(arguments.length -  1);
while (G__55925__i < G__55925__a.length) {G__55925__a[G__55925__i] = arguments[G__55925__i + 1]; ++G__55925__i;}
  children = new cljs.core.IndexedSeq(G__55925__a,0,null);
} 
return G__55924__delegate.call(this,props,children);};
G__55924.cljs$lang$maxFixedArity = 1;
G__55924.cljs$lang$applyTo = (function (arglist__55926){
var props = cljs.core.first(arglist__55926);
var children = cljs.core.rest(arglist__55926);
return G__55924__delegate(props,children);
});
G__55924.cljs$core$IFn$_invoke$arity$variadic = G__55924__delegate;
return G__55924;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__53997 = tag;
switch (G__53997) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53997)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__54004 = arguments.length;
switch (G__54004) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__54009 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__54010 = cljs.core.seq(vec__54009);
var first__54011 = cljs.core.first(seq__54010);
var seq__54010__$1 = cljs.core.next(seq__54010);
var head = first__54011;
var tail = seq__54010__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__54012 = (function (){var G__54013 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__54013,tail);

return G__54013;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54012) : f.call(null,G__54012));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__54014 = (function (){var G__54016 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__54016,args);

return G__54016;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54014) : f.call(null,G__54014));
} else {
if(cljs.core.object_QMARK_(head)){
var G__54020 = (function (){var G__54021 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__54021,tail);

return G__54021;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54020) : f.call(null,G__54020));
} else {
if(cljs.core.map_QMARK_(head)){
var G__54024 = (function (){var G__54025 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__54025,tail);

return G__54025;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54024) : f.call(null,G__54024));
} else {
var G__54026 = (function (){var G__54027 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__54027,args);

return G__54027;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54026) : f.call(null,G__54026));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__54036 = arguments.length;
switch (G__54036) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__54045 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__54046 = cljs.core.seq(vec__54045);
var first__54047 = cljs.core.first(seq__54046);
var seq__54046__$1 = cljs.core.next(seq__54046);
var head = first__54047;
var tail = seq__54046__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__54052 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__54052,tail);

return G__54052;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__54053 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__54053,args);

return G__54053;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__54055 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__54055,tail);

return G__54055;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__54058 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__54058,tail);

return G__54058;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__54061 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__54061,args);

return G__54061;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55930 = arguments.length;
var i__4731__auto___55931 = (0);
while(true){
if((i__4731__auto___55931 < len__4730__auto___55930)){
args__4736__auto__.push((arguments[i__4731__auto___55931]));

var G__55932 = (i__4731__auto___55931 + (1));
i__4731__auto___55931 = G__55932;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54094 = conformed_args__52231__auto__;
var map__54094__$1 = (((((!((map__54094 == null))))?(((((map__54094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54094):map__54094);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq54090){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54090));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55933 = arguments.length;
var i__4731__auto___55934 = (0);
while(true){
if((i__4731__auto___55934 < len__4730__auto___55933)){
args__4736__auto__.push((arguments[i__4731__auto___55934]));

var G__55935 = (i__4731__auto___55934 + (1));
i__4731__auto___55934 = G__55935;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54117 = conformed_args__52231__auto__;
var map__54117__$1 = (((((!((map__54117 == null))))?(((((map__54117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54117):map__54117);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq54116){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54116));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55936 = arguments.length;
var i__4731__auto___55937 = (0);
while(true){
if((i__4731__auto___55937 < len__4730__auto___55936)){
args__4736__auto__.push((arguments[i__4731__auto___55937]));

var G__55938 = (i__4731__auto___55937 + (1));
i__4731__auto___55937 = G__55938;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54143 = conformed_args__52231__auto__;
var map__54143__$1 = (((((!((map__54143 == null))))?(((((map__54143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54143):map__54143);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq54135){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54135));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55939 = arguments.length;
var i__4731__auto___55940 = (0);
while(true){
if((i__4731__auto___55940 < len__4730__auto___55939)){
args__4736__auto__.push((arguments[i__4731__auto___55940]));

var G__55941 = (i__4731__auto___55940 + (1));
i__4731__auto___55940 = G__55941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54163 = conformed_args__52231__auto__;
var map__54163__$1 = (((((!((map__54163 == null))))?(((((map__54163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54163):map__54163);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54163__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54163__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq54154){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54154));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55942 = arguments.length;
var i__4731__auto___55943 = (0);
while(true){
if((i__4731__auto___55943 < len__4730__auto___55942)){
args__4736__auto__.push((arguments[i__4731__auto___55943]));

var G__55944 = (i__4731__auto___55943 + (1));
i__4731__auto___55943 = G__55944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54186 = conformed_args__52231__auto__;
var map__54186__$1 = (((((!((map__54186 == null))))?(((((map__54186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54186):map__54186);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54186__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54186__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54186__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq54175){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54175));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55945 = arguments.length;
var i__4731__auto___55946 = (0);
while(true){
if((i__4731__auto___55946 < len__4730__auto___55945)){
args__4736__auto__.push((arguments[i__4731__auto___55946]));

var G__55947 = (i__4731__auto___55946 + (1));
i__4731__auto___55946 = G__55947;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54219 = conformed_args__52231__auto__;
var map__54219__$1 = (((((!((map__54219 == null))))?(((((map__54219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54219):map__54219);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq54201){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54201));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55948 = arguments.length;
var i__4731__auto___55949 = (0);
while(true){
if((i__4731__auto___55949 < len__4730__auto___55948)){
args__4736__auto__.push((arguments[i__4731__auto___55949]));

var G__55950 = (i__4731__auto___55949 + (1));
i__4731__auto___55949 = G__55950;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54245 = conformed_args__52231__auto__;
var map__54245__$1 = (((((!((map__54245 == null))))?(((((map__54245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54245):map__54245);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54245__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54245__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54245__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq54243){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54243));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55951 = arguments.length;
var i__4731__auto___55952 = (0);
while(true){
if((i__4731__auto___55952 < len__4730__auto___55951)){
args__4736__auto__.push((arguments[i__4731__auto___55952]));

var G__55953 = (i__4731__auto___55952 + (1));
i__4731__auto___55952 = G__55953;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54283 = conformed_args__52231__auto__;
var map__54283__$1 = (((((!((map__54283 == null))))?(((((map__54283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54283):map__54283);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54283__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54283__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq54271){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54271));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55954 = arguments.length;
var i__4731__auto___55955 = (0);
while(true){
if((i__4731__auto___55955 < len__4730__auto___55954)){
args__4736__auto__.push((arguments[i__4731__auto___55955]));

var G__55956 = (i__4731__auto___55955 + (1));
i__4731__auto___55955 = G__55956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54300 = conformed_args__52231__auto__;
var map__54300__$1 = (((((!((map__54300 == null))))?(((((map__54300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54300):map__54300);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq54292){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54292));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55957 = arguments.length;
var i__4731__auto___55958 = (0);
while(true){
if((i__4731__auto___55958 < len__4730__auto___55957)){
args__4736__auto__.push((arguments[i__4731__auto___55958]));

var G__55959 = (i__4731__auto___55958 + (1));
i__4731__auto___55958 = G__55959;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54308 = conformed_args__52231__auto__;
var map__54308__$1 = (((((!((map__54308 == null))))?(((((map__54308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54308):map__54308);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54308__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54308__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54308__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq54306){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54306));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55960 = arguments.length;
var i__4731__auto___55961 = (0);
while(true){
if((i__4731__auto___55961 < len__4730__auto___55960)){
args__4736__auto__.push((arguments[i__4731__auto___55961]));

var G__55962 = (i__4731__auto___55961 + (1));
i__4731__auto___55961 = G__55962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54321 = conformed_args__52231__auto__;
var map__54321__$1 = (((((!((map__54321 == null))))?(((((map__54321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54321):map__54321);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq54314){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54314));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55963 = arguments.length;
var i__4731__auto___55964 = (0);
while(true){
if((i__4731__auto___55964 < len__4730__auto___55963)){
args__4736__auto__.push((arguments[i__4731__auto___55964]));

var G__55965 = (i__4731__auto___55964 + (1));
i__4731__auto___55964 = G__55965;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54327 = conformed_args__52231__auto__;
var map__54327__$1 = (((((!((map__54327 == null))))?(((((map__54327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54327):map__54327);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq54324){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54324));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55966 = arguments.length;
var i__4731__auto___55967 = (0);
while(true){
if((i__4731__auto___55967 < len__4730__auto___55966)){
args__4736__auto__.push((arguments[i__4731__auto___55967]));

var G__55968 = (i__4731__auto___55967 + (1));
i__4731__auto___55967 = G__55968;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54350 = conformed_args__52231__auto__;
var map__54350__$1 = (((((!((map__54350 == null))))?(((((map__54350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54350):map__54350);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq54341){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54341));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55969 = arguments.length;
var i__4731__auto___55970 = (0);
while(true){
if((i__4731__auto___55970 < len__4730__auto___55969)){
args__4736__auto__.push((arguments[i__4731__auto___55970]));

var G__55971 = (i__4731__auto___55970 + (1));
i__4731__auto___55970 = G__55971;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54379 = conformed_args__52231__auto__;
var map__54379__$1 = (((((!((map__54379 == null))))?(((((map__54379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54379):map__54379);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq54362){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54362));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55972 = arguments.length;
var i__4731__auto___55973 = (0);
while(true){
if((i__4731__auto___55973 < len__4730__auto___55972)){
args__4736__auto__.push((arguments[i__4731__auto___55973]));

var G__55974 = (i__4731__auto___55973 + (1));
i__4731__auto___55973 = G__55974;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54405 = conformed_args__52231__auto__;
var map__54405__$1 = (((((!((map__54405 == null))))?(((((map__54405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54405):map__54405);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq54394){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54394));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55975 = arguments.length;
var i__4731__auto___55976 = (0);
while(true){
if((i__4731__auto___55976 < len__4730__auto___55975)){
args__4736__auto__.push((arguments[i__4731__auto___55976]));

var G__55977 = (i__4731__auto___55976 + (1));
i__4731__auto___55976 = G__55977;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54413 = conformed_args__52231__auto__;
var map__54413__$1 = (((((!((map__54413 == null))))?(((((map__54413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54413):map__54413);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54413__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54413__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54413__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq54410){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54410));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55978 = arguments.length;
var i__4731__auto___55979 = (0);
while(true){
if((i__4731__auto___55979 < len__4730__auto___55978)){
args__4736__auto__.push((arguments[i__4731__auto___55979]));

var G__55980 = (i__4731__auto___55979 + (1));
i__4731__auto___55979 = G__55980;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54428 = conformed_args__52231__auto__;
var map__54428__$1 = (((((!((map__54428 == null))))?(((((map__54428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54428):map__54428);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq54426){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54426));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55981 = arguments.length;
var i__4731__auto___55982 = (0);
while(true){
if((i__4731__auto___55982 < len__4730__auto___55981)){
args__4736__auto__.push((arguments[i__4731__auto___55982]));

var G__55983 = (i__4731__auto___55982 + (1));
i__4731__auto___55982 = G__55983;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54454 = conformed_args__52231__auto__;
var map__54454__$1 = (((((!((map__54454 == null))))?(((((map__54454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54454):map__54454);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq54441){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54441));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55984 = arguments.length;
var i__4731__auto___55985 = (0);
while(true){
if((i__4731__auto___55985 < len__4730__auto___55984)){
args__4736__auto__.push((arguments[i__4731__auto___55985]));

var G__55986 = (i__4731__auto___55985 + (1));
i__4731__auto___55985 = G__55986;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54464 = conformed_args__52231__auto__;
var map__54464__$1 = (((((!((map__54464 == null))))?(((((map__54464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54464):map__54464);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq54459){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54459));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55987 = arguments.length;
var i__4731__auto___55988 = (0);
while(true){
if((i__4731__auto___55988 < len__4730__auto___55987)){
args__4736__auto__.push((arguments[i__4731__auto___55988]));

var G__55989 = (i__4731__auto___55988 + (1));
i__4731__auto___55988 = G__55989;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54475 = conformed_args__52231__auto__;
var map__54475__$1 = (((((!((map__54475 == null))))?(((((map__54475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54475):map__54475);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq54470){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54470));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55990 = arguments.length;
var i__4731__auto___55991 = (0);
while(true){
if((i__4731__auto___55991 < len__4730__auto___55990)){
args__4736__auto__.push((arguments[i__4731__auto___55991]));

var G__55992 = (i__4731__auto___55991 + (1));
i__4731__auto___55991 = G__55992;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54493 = conformed_args__52231__auto__;
var map__54493__$1 = (((((!((map__54493 == null))))?(((((map__54493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54493):map__54493);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq54485){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54485));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55993 = arguments.length;
var i__4731__auto___55994 = (0);
while(true){
if((i__4731__auto___55994 < len__4730__auto___55993)){
args__4736__auto__.push((arguments[i__4731__auto___55994]));

var G__55995 = (i__4731__auto___55994 + (1));
i__4731__auto___55994 = G__55995;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54509 = conformed_args__52231__auto__;
var map__54509__$1 = (((((!((map__54509 == null))))?(((((map__54509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54509):map__54509);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq54504){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54504));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55996 = arguments.length;
var i__4731__auto___55997 = (0);
while(true){
if((i__4731__auto___55997 < len__4730__auto___55996)){
args__4736__auto__.push((arguments[i__4731__auto___55997]));

var G__55998 = (i__4731__auto___55997 + (1));
i__4731__auto___55997 = G__55998;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54520 = conformed_args__52231__auto__;
var map__54520__$1 = (((((!((map__54520 == null))))?(((((map__54520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54520):map__54520);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq54519){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54519));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55999 = arguments.length;
var i__4731__auto___56000 = (0);
while(true){
if((i__4731__auto___56000 < len__4730__auto___55999)){
args__4736__auto__.push((arguments[i__4731__auto___56000]));

var G__56001 = (i__4731__auto___56000 + (1));
i__4731__auto___56000 = G__56001;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54525 = conformed_args__52231__auto__;
var map__54525__$1 = (((((!((map__54525 == null))))?(((((map__54525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54525):map__54525);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54525__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54525__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54525__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq54524){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54524));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56002 = arguments.length;
var i__4731__auto___56003 = (0);
while(true){
if((i__4731__auto___56003 < len__4730__auto___56002)){
args__4736__auto__.push((arguments[i__4731__auto___56003]));

var G__56004 = (i__4731__auto___56003 + (1));
i__4731__auto___56003 = G__56004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54534 = conformed_args__52231__auto__;
var map__54534__$1 = (((((!((map__54534 == null))))?(((((map__54534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54534):map__54534);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq54528){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54528));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56005 = arguments.length;
var i__4731__auto___56006 = (0);
while(true){
if((i__4731__auto___56006 < len__4730__auto___56005)){
args__4736__auto__.push((arguments[i__4731__auto___56006]));

var G__56007 = (i__4731__auto___56006 + (1));
i__4731__auto___56006 = G__56007;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54549 = conformed_args__52231__auto__;
var map__54549__$1 = (((((!((map__54549 == null))))?(((((map__54549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54549):map__54549);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54549__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54549__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54549__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq54541){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54541));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56008 = arguments.length;
var i__4731__auto___56009 = (0);
while(true){
if((i__4731__auto___56009 < len__4730__auto___56008)){
args__4736__auto__.push((arguments[i__4731__auto___56009]));

var G__56010 = (i__4731__auto___56009 + (1));
i__4731__auto___56009 = G__56010;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54557 = conformed_args__52231__auto__;
var map__54557__$1 = (((((!((map__54557 == null))))?(((((map__54557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54557):map__54557);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq54551){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54551));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56011 = arguments.length;
var i__4731__auto___56012 = (0);
while(true){
if((i__4731__auto___56012 < len__4730__auto___56011)){
args__4736__auto__.push((arguments[i__4731__auto___56012]));

var G__56013 = (i__4731__auto___56012 + (1));
i__4731__auto___56012 = G__56013;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54567 = conformed_args__52231__auto__;
var map__54567__$1 = (((((!((map__54567 == null))))?(((((map__54567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54567):map__54567);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54567__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54567__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54567__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq54565){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54565));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56014 = arguments.length;
var i__4731__auto___56015 = (0);
while(true){
if((i__4731__auto___56015 < len__4730__auto___56014)){
args__4736__auto__.push((arguments[i__4731__auto___56015]));

var G__56016 = (i__4731__auto___56015 + (1));
i__4731__auto___56015 = G__56016;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54577 = conformed_args__52231__auto__;
var map__54577__$1 = (((((!((map__54577 == null))))?(((((map__54577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54577):map__54577);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq54575){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54575));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56017 = arguments.length;
var i__4731__auto___56018 = (0);
while(true){
if((i__4731__auto___56018 < len__4730__auto___56017)){
args__4736__auto__.push((arguments[i__4731__auto___56018]));

var G__56019 = (i__4731__auto___56018 + (1));
i__4731__auto___56018 = G__56019;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54589 = conformed_args__52231__auto__;
var map__54589__$1 = (((((!((map__54589 == null))))?(((((map__54589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54589):map__54589);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54589__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54589__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54589__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq54588){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54588));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56020 = arguments.length;
var i__4731__auto___56021 = (0);
while(true){
if((i__4731__auto___56021 < len__4730__auto___56020)){
args__4736__auto__.push((arguments[i__4731__auto___56021]));

var G__56022 = (i__4731__auto___56021 + (1));
i__4731__auto___56021 = G__56022;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54602 = conformed_args__52231__auto__;
var map__54602__$1 = (((((!((map__54602 == null))))?(((((map__54602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54602):map__54602);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54602__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54602__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54602__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq54597){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54597));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56023 = arguments.length;
var i__4731__auto___56024 = (0);
while(true){
if((i__4731__auto___56024 < len__4730__auto___56023)){
args__4736__auto__.push((arguments[i__4731__auto___56024]));

var G__56025 = (i__4731__auto___56024 + (1));
i__4731__auto___56024 = G__56025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54610 = conformed_args__52231__auto__;
var map__54610__$1 = (((((!((map__54610 == null))))?(((((map__54610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54610):map__54610);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54610__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54610__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54610__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq54605){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54605));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56026 = arguments.length;
var i__4731__auto___56027 = (0);
while(true){
if((i__4731__auto___56027 < len__4730__auto___56026)){
args__4736__auto__.push((arguments[i__4731__auto___56027]));

var G__56028 = (i__4731__auto___56027 + (1));
i__4731__auto___56027 = G__56028;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54623 = conformed_args__52231__auto__;
var map__54623__$1 = (((((!((map__54623 == null))))?(((((map__54623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54623):map__54623);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54623__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54623__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54623__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq54616){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54616));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56029 = arguments.length;
var i__4731__auto___56030 = (0);
while(true){
if((i__4731__auto___56030 < len__4730__auto___56029)){
args__4736__auto__.push((arguments[i__4731__auto___56030]));

var G__56031 = (i__4731__auto___56030 + (1));
i__4731__auto___56030 = G__56031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54634 = conformed_args__52231__auto__;
var map__54634__$1 = (((((!((map__54634 == null))))?(((((map__54634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54634):map__54634);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq54628){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54628));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56032 = arguments.length;
var i__4731__auto___56033 = (0);
while(true){
if((i__4731__auto___56033 < len__4730__auto___56032)){
args__4736__auto__.push((arguments[i__4731__auto___56033]));

var G__56034 = (i__4731__auto___56033 + (1));
i__4731__auto___56033 = G__56034;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54645 = conformed_args__52231__auto__;
var map__54645__$1 = (((((!((map__54645 == null))))?(((((map__54645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54645):map__54645);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq54638){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54638));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56035 = arguments.length;
var i__4731__auto___56036 = (0);
while(true){
if((i__4731__auto___56036 < len__4730__auto___56035)){
args__4736__auto__.push((arguments[i__4731__auto___56036]));

var G__56037 = (i__4731__auto___56036 + (1));
i__4731__auto___56036 = G__56037;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54654 = conformed_args__52231__auto__;
var map__54654__$1 = (((((!((map__54654 == null))))?(((((map__54654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54654):map__54654);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54654__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54654__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54654__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq54651){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54651));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56038 = arguments.length;
var i__4731__auto___56039 = (0);
while(true){
if((i__4731__auto___56039 < len__4730__auto___56038)){
args__4736__auto__.push((arguments[i__4731__auto___56039]));

var G__56040 = (i__4731__auto___56039 + (1));
i__4731__auto___56039 = G__56040;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54663 = conformed_args__52231__auto__;
var map__54663__$1 = (((((!((map__54663 == null))))?(((((map__54663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54663):map__54663);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq54659){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54659));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56041 = arguments.length;
var i__4731__auto___56042 = (0);
while(true){
if((i__4731__auto___56042 < len__4730__auto___56041)){
args__4736__auto__.push((arguments[i__4731__auto___56042]));

var G__56043 = (i__4731__auto___56042 + (1));
i__4731__auto___56042 = G__56043;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54673 = conformed_args__52231__auto__;
var map__54673__$1 = (((((!((map__54673 == null))))?(((((map__54673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54673):map__54673);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54673__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54673__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq54668){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54668));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56044 = arguments.length;
var i__4731__auto___56045 = (0);
while(true){
if((i__4731__auto___56045 < len__4730__auto___56044)){
args__4736__auto__.push((arguments[i__4731__auto___56045]));

var G__56046 = (i__4731__auto___56045 + (1));
i__4731__auto___56045 = G__56046;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54685 = conformed_args__52231__auto__;
var map__54685__$1 = (((((!((map__54685 == null))))?(((((map__54685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54685):map__54685);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq54680){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56047 = arguments.length;
var i__4731__auto___56048 = (0);
while(true){
if((i__4731__auto___56048 < len__4730__auto___56047)){
args__4736__auto__.push((arguments[i__4731__auto___56048]));

var G__56049 = (i__4731__auto___56048 + (1));
i__4731__auto___56048 = G__56049;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54703 = conformed_args__52231__auto__;
var map__54703__$1 = (((((!((map__54703 == null))))?(((((map__54703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54703):map__54703);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq54690){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54690));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56050 = arguments.length;
var i__4731__auto___56051 = (0);
while(true){
if((i__4731__auto___56051 < len__4730__auto___56050)){
args__4736__auto__.push((arguments[i__4731__auto___56051]));

var G__56052 = (i__4731__auto___56051 + (1));
i__4731__auto___56051 = G__56052;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54720 = conformed_args__52231__auto__;
var map__54720__$1 = (((((!((map__54720 == null))))?(((((map__54720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54720):map__54720);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq54715){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54715));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56053 = arguments.length;
var i__4731__auto___56054 = (0);
while(true){
if((i__4731__auto___56054 < len__4730__auto___56053)){
args__4736__auto__.push((arguments[i__4731__auto___56054]));

var G__56055 = (i__4731__auto___56054 + (1));
i__4731__auto___56054 = G__56055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54728 = conformed_args__52231__auto__;
var map__54728__$1 = (((((!((map__54728 == null))))?(((((map__54728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54728):map__54728);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54728__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54728__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54728__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq54723){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56056 = arguments.length;
var i__4731__auto___56057 = (0);
while(true){
if((i__4731__auto___56057 < len__4730__auto___56056)){
args__4736__auto__.push((arguments[i__4731__auto___56057]));

var G__56058 = (i__4731__auto___56057 + (1));
i__4731__auto___56057 = G__56058;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54738 = conformed_args__52231__auto__;
var map__54738__$1 = (((((!((map__54738 == null))))?(((((map__54738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54738):map__54738);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq54733){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54733));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56059 = arguments.length;
var i__4731__auto___56060 = (0);
while(true){
if((i__4731__auto___56060 < len__4730__auto___56059)){
args__4736__auto__.push((arguments[i__4731__auto___56060]));

var G__56061 = (i__4731__auto___56060 + (1));
i__4731__auto___56060 = G__56061;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54749 = conformed_args__52231__auto__;
var map__54749__$1 = (((((!((map__54749 == null))))?(((((map__54749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54749):map__54749);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54749__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54749__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq54742){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54742));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56062 = arguments.length;
var i__4731__auto___56063 = (0);
while(true){
if((i__4731__auto___56063 < len__4730__auto___56062)){
args__4736__auto__.push((arguments[i__4731__auto___56063]));

var G__56064 = (i__4731__auto___56063 + (1));
i__4731__auto___56063 = G__56064;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54761 = conformed_args__52231__auto__;
var map__54761__$1 = (((((!((map__54761 == null))))?(((((map__54761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54761):map__54761);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54761__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54761__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54761__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq54757){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54757));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56065 = arguments.length;
var i__4731__auto___56066 = (0);
while(true){
if((i__4731__auto___56066 < len__4730__auto___56065)){
args__4736__auto__.push((arguments[i__4731__auto___56066]));

var G__56067 = (i__4731__auto___56066 + (1));
i__4731__auto___56066 = G__56067;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54770 = conformed_args__52231__auto__;
var map__54770__$1 = (((((!((map__54770 == null))))?(((((map__54770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54770):map__54770);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54770__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54770__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54770__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq54768){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54768));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56068 = arguments.length;
var i__4731__auto___56069 = (0);
while(true){
if((i__4731__auto___56069 < len__4730__auto___56068)){
args__4736__auto__.push((arguments[i__4731__auto___56069]));

var G__56070 = (i__4731__auto___56069 + (1));
i__4731__auto___56069 = G__56070;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54783 = conformed_args__52231__auto__;
var map__54783__$1 = (((((!((map__54783 == null))))?(((((map__54783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54783):map__54783);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq54779){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54779));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56071 = arguments.length;
var i__4731__auto___56072 = (0);
while(true){
if((i__4731__auto___56072 < len__4730__auto___56071)){
args__4736__auto__.push((arguments[i__4731__auto___56072]));

var G__56073 = (i__4731__auto___56072 + (1));
i__4731__auto___56072 = G__56073;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54789 = conformed_args__52231__auto__;
var map__54789__$1 = (((((!((map__54789 == null))))?(((((map__54789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54789):map__54789);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq54787){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54787));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56074 = arguments.length;
var i__4731__auto___56075 = (0);
while(true){
if((i__4731__auto___56075 < len__4730__auto___56074)){
args__4736__auto__.push((arguments[i__4731__auto___56075]));

var G__56076 = (i__4731__auto___56075 + (1));
i__4731__auto___56075 = G__56076;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54807 = conformed_args__52231__auto__;
var map__54807__$1 = (((((!((map__54807 == null))))?(((((map__54807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54807):map__54807);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54807__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54807__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54807__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq54799){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54799));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56077 = arguments.length;
var i__4731__auto___56078 = (0);
while(true){
if((i__4731__auto___56078 < len__4730__auto___56077)){
args__4736__auto__.push((arguments[i__4731__auto___56078]));

var G__56079 = (i__4731__auto___56078 + (1));
i__4731__auto___56078 = G__56079;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54814 = conformed_args__52231__auto__;
var map__54814__$1 = (((((!((map__54814 == null))))?(((((map__54814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54814):map__54814);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq54811){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54811));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56080 = arguments.length;
var i__4731__auto___56081 = (0);
while(true){
if((i__4731__auto___56081 < len__4730__auto___56080)){
args__4736__auto__.push((arguments[i__4731__auto___56081]));

var G__56082 = (i__4731__auto___56081 + (1));
i__4731__auto___56081 = G__56082;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54824 = conformed_args__52231__auto__;
var map__54824__$1 = (((((!((map__54824 == null))))?(((((map__54824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54824):map__54824);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54824__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54824__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54824__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq54821){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54821));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56083 = arguments.length;
var i__4731__auto___56084 = (0);
while(true){
if((i__4731__auto___56084 < len__4730__auto___56083)){
args__4736__auto__.push((arguments[i__4731__auto___56084]));

var G__56085 = (i__4731__auto___56084 + (1));
i__4731__auto___56084 = G__56085;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54830 = conformed_args__52231__auto__;
var map__54830__$1 = (((((!((map__54830 == null))))?(((((map__54830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54830):map__54830);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54830__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54830__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54830__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq54827){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54827));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56086 = arguments.length;
var i__4731__auto___56087 = (0);
while(true){
if((i__4731__auto___56087 < len__4730__auto___56086)){
args__4736__auto__.push((arguments[i__4731__auto___56087]));

var G__56088 = (i__4731__auto___56087 + (1));
i__4731__auto___56087 = G__56088;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54851 = conformed_args__52231__auto__;
var map__54851__$1 = (((((!((map__54851 == null))))?(((((map__54851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54851):map__54851);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq54835){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54835));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56089 = arguments.length;
var i__4731__auto___56090 = (0);
while(true){
if((i__4731__auto___56090 < len__4730__auto___56089)){
args__4736__auto__.push((arguments[i__4731__auto___56090]));

var G__56091 = (i__4731__auto___56090 + (1));
i__4731__auto___56090 = G__56091;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54865 = conformed_args__52231__auto__;
var map__54865__$1 = (((((!((map__54865 == null))))?(((((map__54865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54865):map__54865);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq54859){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54859));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56092 = arguments.length;
var i__4731__auto___56093 = (0);
while(true){
if((i__4731__auto___56093 < len__4730__auto___56092)){
args__4736__auto__.push((arguments[i__4731__auto___56093]));

var G__56094 = (i__4731__auto___56093 + (1));
i__4731__auto___56093 = G__56094;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54870 = conformed_args__52231__auto__;
var map__54870__$1 = (((((!((map__54870 == null))))?(((((map__54870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54870):map__54870);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54870__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54870__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54870__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq54868){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54868));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56095 = arguments.length;
var i__4731__auto___56096 = (0);
while(true){
if((i__4731__auto___56096 < len__4730__auto___56095)){
args__4736__auto__.push((arguments[i__4731__auto___56096]));

var G__56097 = (i__4731__auto___56096 + (1));
i__4731__auto___56096 = G__56097;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54884 = conformed_args__52231__auto__;
var map__54884__$1 = (((((!((map__54884 == null))))?(((((map__54884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54884):map__54884);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq54878){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54878));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56098 = arguments.length;
var i__4731__auto___56099 = (0);
while(true){
if((i__4731__auto___56099 < len__4730__auto___56098)){
args__4736__auto__.push((arguments[i__4731__auto___56099]));

var G__56100 = (i__4731__auto___56099 + (1));
i__4731__auto___56099 = G__56100;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54897 = conformed_args__52231__auto__;
var map__54897__$1 = (((((!((map__54897 == null))))?(((((map__54897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54897):map__54897);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq54896){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54896));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56101 = arguments.length;
var i__4731__auto___56102 = (0);
while(true){
if((i__4731__auto___56102 < len__4730__auto___56101)){
args__4736__auto__.push((arguments[i__4731__auto___56102]));

var G__56103 = (i__4731__auto___56102 + (1));
i__4731__auto___56102 = G__56103;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54906 = conformed_args__52231__auto__;
var map__54906__$1 = (((((!((map__54906 == null))))?(((((map__54906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54906):map__54906);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq54903){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54903));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56104 = arguments.length;
var i__4731__auto___56105 = (0);
while(true){
if((i__4731__auto___56105 < len__4730__auto___56104)){
args__4736__auto__.push((arguments[i__4731__auto___56105]));

var G__56106 = (i__4731__auto___56105 + (1));
i__4731__auto___56105 = G__56106;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54912 = conformed_args__52231__auto__;
var map__54912__$1 = (((((!((map__54912 == null))))?(((((map__54912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54912):map__54912);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq54910){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54910));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56107 = arguments.length;
var i__4731__auto___56108 = (0);
while(true){
if((i__4731__auto___56108 < len__4730__auto___56107)){
args__4736__auto__.push((arguments[i__4731__auto___56108]));

var G__56109 = (i__4731__auto___56108 + (1));
i__4731__auto___56108 = G__56109;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54922 = conformed_args__52231__auto__;
var map__54922__$1 = (((((!((map__54922 == null))))?(((((map__54922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54922):map__54922);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54922__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54922__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54922__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq54918){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54918));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56110 = arguments.length;
var i__4731__auto___56111 = (0);
while(true){
if((i__4731__auto___56111 < len__4730__auto___56110)){
args__4736__auto__.push((arguments[i__4731__auto___56111]));

var G__56112 = (i__4731__auto___56111 + (1));
i__4731__auto___56111 = G__56112;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54927 = conformed_args__52231__auto__;
var map__54927__$1 = (((((!((map__54927 == null))))?(((((map__54927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54927):map__54927);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54927__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54927__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54927__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq54925){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54925));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56113 = arguments.length;
var i__4731__auto___56114 = (0);
while(true){
if((i__4731__auto___56114 < len__4730__auto___56113)){
args__4736__auto__.push((arguments[i__4731__auto___56114]));

var G__56115 = (i__4731__auto___56114 + (1));
i__4731__auto___56114 = G__56115;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54932 = conformed_args__52231__auto__;
var map__54932__$1 = (((((!((map__54932 == null))))?(((((map__54932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54932):map__54932);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54932__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54932__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54932__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq54930){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54930));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56116 = arguments.length;
var i__4731__auto___56117 = (0);
while(true){
if((i__4731__auto___56117 < len__4730__auto___56116)){
args__4736__auto__.push((arguments[i__4731__auto___56117]));

var G__56118 = (i__4731__auto___56117 + (1));
i__4731__auto___56117 = G__56118;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54937 = conformed_args__52231__auto__;
var map__54937__$1 = (((((!((map__54937 == null))))?(((((map__54937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54937):map__54937);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq54935){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54935));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56119 = arguments.length;
var i__4731__auto___56120 = (0);
while(true){
if((i__4731__auto___56120 < len__4730__auto___56119)){
args__4736__auto__.push((arguments[i__4731__auto___56120]));

var G__56121 = (i__4731__auto___56120 + (1));
i__4731__auto___56120 = G__56121;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54943 = conformed_args__52231__auto__;
var map__54943__$1 = (((((!((map__54943 == null))))?(((((map__54943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54943):map__54943);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq54941){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54941));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56122 = arguments.length;
var i__4731__auto___56123 = (0);
while(true){
if((i__4731__auto___56123 < len__4730__auto___56122)){
args__4736__auto__.push((arguments[i__4731__auto___56123]));

var G__56124 = (i__4731__auto___56123 + (1));
i__4731__auto___56123 = G__56124;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54948 = conformed_args__52231__auto__;
var map__54948__$1 = (((((!((map__54948 == null))))?(((((map__54948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54948):map__54948);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54948__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54948__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54948__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq54946){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54946));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56125 = arguments.length;
var i__4731__auto___56126 = (0);
while(true){
if((i__4731__auto___56126 < len__4730__auto___56125)){
args__4736__auto__.push((arguments[i__4731__auto___56126]));

var G__56127 = (i__4731__auto___56126 + (1));
i__4731__auto___56126 = G__56127;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54953 = conformed_args__52231__auto__;
var map__54953__$1 = (((((!((map__54953 == null))))?(((((map__54953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54953):map__54953);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54953__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54953__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54953__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq54951){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54951));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56128 = arguments.length;
var i__4731__auto___56129 = (0);
while(true){
if((i__4731__auto___56129 < len__4730__auto___56128)){
args__4736__auto__.push((arguments[i__4731__auto___56129]));

var G__56130 = (i__4731__auto___56129 + (1));
i__4731__auto___56129 = G__56130;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54965 = conformed_args__52231__auto__;
var map__54965__$1 = (((((!((map__54965 == null))))?(((((map__54965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54965):map__54965);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54965__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54965__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54965__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq54960){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54960));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56131 = arguments.length;
var i__4731__auto___56132 = (0);
while(true){
if((i__4731__auto___56132 < len__4730__auto___56131)){
args__4736__auto__.push((arguments[i__4731__auto___56132]));

var G__56133 = (i__4731__auto___56132 + (1));
i__4731__auto___56132 = G__56133;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54976 = conformed_args__52231__auto__;
var map__54976__$1 = (((((!((map__54976 == null))))?(((((map__54976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54976):map__54976);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq54975){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54975));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56134 = arguments.length;
var i__4731__auto___56135 = (0);
while(true){
if((i__4731__auto___56135 < len__4730__auto___56134)){
args__4736__auto__.push((arguments[i__4731__auto___56135]));

var G__56136 = (i__4731__auto___56135 + (1));
i__4731__auto___56135 = G__56136;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54987 = conformed_args__52231__auto__;
var map__54987__$1 = (((((!((map__54987 == null))))?(((((map__54987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54987):map__54987);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq54981){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54981));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56137 = arguments.length;
var i__4731__auto___56138 = (0);
while(true){
if((i__4731__auto___56138 < len__4730__auto___56137)){
args__4736__auto__.push((arguments[i__4731__auto___56138]));

var G__56139 = (i__4731__auto___56138 + (1));
i__4731__auto___56138 = G__56139;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54997 = conformed_args__52231__auto__;
var map__54997__$1 = (((((!((map__54997 == null))))?(((((map__54997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54997):map__54997);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54997__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54997__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54997__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq54992){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54992));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56140 = arguments.length;
var i__4731__auto___56141 = (0);
while(true){
if((i__4731__auto___56141 < len__4730__auto___56140)){
args__4736__auto__.push((arguments[i__4731__auto___56141]));

var G__56142 = (i__4731__auto___56141 + (1));
i__4731__auto___56141 = G__56142;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55005 = conformed_args__52231__auto__;
var map__55005__$1 = (((((!((map__55005 == null))))?(((((map__55005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55005):map__55005);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq55000){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55000));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56143 = arguments.length;
var i__4731__auto___56144 = (0);
while(true){
if((i__4731__auto___56144 < len__4730__auto___56143)){
args__4736__auto__.push((arguments[i__4731__auto___56144]));

var G__56145 = (i__4731__auto___56144 + (1));
i__4731__auto___56144 = G__56145;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55013 = conformed_args__52231__auto__;
var map__55013__$1 = (((((!((map__55013 == null))))?(((((map__55013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55013):map__55013);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55013__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55013__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55013__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq55010){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55010));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56146 = arguments.length;
var i__4731__auto___56147 = (0);
while(true){
if((i__4731__auto___56147 < len__4730__auto___56146)){
args__4736__auto__.push((arguments[i__4731__auto___56147]));

var G__56148 = (i__4731__auto___56147 + (1));
i__4731__auto___56147 = G__56148;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55020 = conformed_args__52231__auto__;
var map__55020__$1 = (((((!((map__55020 == null))))?(((((map__55020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55020):map__55020);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55020__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55020__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55020__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq55019){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55019));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56149 = arguments.length;
var i__4731__auto___56150 = (0);
while(true){
if((i__4731__auto___56150 < len__4730__auto___56149)){
args__4736__auto__.push((arguments[i__4731__auto___56150]));

var G__56151 = (i__4731__auto___56150 + (1));
i__4731__auto___56150 = G__56151;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55027 = conformed_args__52231__auto__;
var map__55027__$1 = (((((!((map__55027 == null))))?(((((map__55027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55027):map__55027);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55027__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55027__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55027__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq55024){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55024));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56152 = arguments.length;
var i__4731__auto___56153 = (0);
while(true){
if((i__4731__auto___56153 < len__4730__auto___56152)){
args__4736__auto__.push((arguments[i__4731__auto___56153]));

var G__56154 = (i__4731__auto___56153 + (1));
i__4731__auto___56153 = G__56154;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55037 = conformed_args__52231__auto__;
var map__55037__$1 = (((((!((map__55037 == null))))?(((((map__55037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55037):map__55037);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq55029){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55029));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56155 = arguments.length;
var i__4731__auto___56156 = (0);
while(true){
if((i__4731__auto___56156 < len__4730__auto___56155)){
args__4736__auto__.push((arguments[i__4731__auto___56156]));

var G__56157 = (i__4731__auto___56156 + (1));
i__4731__auto___56156 = G__56157;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55046 = conformed_args__52231__auto__;
var map__55046__$1 = (((((!((map__55046 == null))))?(((((map__55046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55046):map__55046);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55046__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55046__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55046__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq55042){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55042));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56158 = arguments.length;
var i__4731__auto___56159 = (0);
while(true){
if((i__4731__auto___56159 < len__4730__auto___56158)){
args__4736__auto__.push((arguments[i__4731__auto___56159]));

var G__56160 = (i__4731__auto___56159 + (1));
i__4731__auto___56159 = G__56160;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55053 = conformed_args__52231__auto__;
var map__55053__$1 = (((((!((map__55053 == null))))?(((((map__55053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55053):map__55053);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq55052){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55052));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56161 = arguments.length;
var i__4731__auto___56162 = (0);
while(true){
if((i__4731__auto___56162 < len__4730__auto___56161)){
args__4736__auto__.push((arguments[i__4731__auto___56162]));

var G__56163 = (i__4731__auto___56162 + (1));
i__4731__auto___56162 = G__56163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55063 = conformed_args__52231__auto__;
var map__55063__$1 = (((((!((map__55063 == null))))?(((((map__55063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55063):map__55063);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55063__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55063__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55063__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq55061){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55061));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56164 = arguments.length;
var i__4731__auto___56165 = (0);
while(true){
if((i__4731__auto___56165 < len__4730__auto___56164)){
args__4736__auto__.push((arguments[i__4731__auto___56165]));

var G__56166 = (i__4731__auto___56165 + (1));
i__4731__auto___56165 = G__56166;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55072 = conformed_args__52231__auto__;
var map__55072__$1 = (((((!((map__55072 == null))))?(((((map__55072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55072):map__55072);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55072__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55072__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55072__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq55070){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55070));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56167 = arguments.length;
var i__4731__auto___56168 = (0);
while(true){
if((i__4731__auto___56168 < len__4730__auto___56167)){
args__4736__auto__.push((arguments[i__4731__auto___56168]));

var G__56169 = (i__4731__auto___56168 + (1));
i__4731__auto___56168 = G__56169;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55088 = conformed_args__52231__auto__;
var map__55088__$1 = (((((!((map__55088 == null))))?(((((map__55088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55088):map__55088);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq55076){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55076));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56170 = arguments.length;
var i__4731__auto___56171 = (0);
while(true){
if((i__4731__auto___56171 < len__4730__auto___56170)){
args__4736__auto__.push((arguments[i__4731__auto___56171]));

var G__56172 = (i__4731__auto___56171 + (1));
i__4731__auto___56171 = G__56172;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55098 = conformed_args__52231__auto__;
var map__55098__$1 = (((((!((map__55098 == null))))?(((((map__55098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55098):map__55098);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55098__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55098__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55098__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq55095){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55095));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56173 = arguments.length;
var i__4731__auto___56174 = (0);
while(true){
if((i__4731__auto___56174 < len__4730__auto___56173)){
args__4736__auto__.push((arguments[i__4731__auto___56174]));

var G__56175 = (i__4731__auto___56174 + (1));
i__4731__auto___56174 = G__56175;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55119 = conformed_args__52231__auto__;
var map__55119__$1 = (((((!((map__55119 == null))))?(((((map__55119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55119):map__55119);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq55109){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55109));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56176 = arguments.length;
var i__4731__auto___56177 = (0);
while(true){
if((i__4731__auto___56177 < len__4730__auto___56176)){
args__4736__auto__.push((arguments[i__4731__auto___56177]));

var G__56178 = (i__4731__auto___56177 + (1));
i__4731__auto___56177 = G__56178;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55131 = conformed_args__52231__auto__;
var map__55131__$1 = (((((!((map__55131 == null))))?(((((map__55131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55131):map__55131);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55131__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55131__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55131__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq55130){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55130));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56179 = arguments.length;
var i__4731__auto___56180 = (0);
while(true){
if((i__4731__auto___56180 < len__4730__auto___56179)){
args__4736__auto__.push((arguments[i__4731__auto___56180]));

var G__56181 = (i__4731__auto___56180 + (1));
i__4731__auto___56180 = G__56181;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55141 = conformed_args__52231__auto__;
var map__55141__$1 = (((((!((map__55141 == null))))?(((((map__55141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55141):map__55141);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55141__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55141__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55141__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq55135){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55135));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56182 = arguments.length;
var i__4731__auto___56183 = (0);
while(true){
if((i__4731__auto___56183 < len__4730__auto___56182)){
args__4736__auto__.push((arguments[i__4731__auto___56183]));

var G__56184 = (i__4731__auto___56183 + (1));
i__4731__auto___56183 = G__56184;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55148 = conformed_args__52231__auto__;
var map__55148__$1 = (((((!((map__55148 == null))))?(((((map__55148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55148):map__55148);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55148__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55148__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55148__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq55146){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55146));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56185 = arguments.length;
var i__4731__auto___56186 = (0);
while(true){
if((i__4731__auto___56186 < len__4730__auto___56185)){
args__4736__auto__.push((arguments[i__4731__auto___56186]));

var G__56187 = (i__4731__auto___56186 + (1));
i__4731__auto___56186 = G__56187;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55157 = conformed_args__52231__auto__;
var map__55157__$1 = (((((!((map__55157 == null))))?(((((map__55157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55157):map__55157);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55157__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55157__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55157__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq55153){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55153));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56188 = arguments.length;
var i__4731__auto___56189 = (0);
while(true){
if((i__4731__auto___56189 < len__4730__auto___56188)){
args__4736__auto__.push((arguments[i__4731__auto___56189]));

var G__56190 = (i__4731__auto___56189 + (1));
i__4731__auto___56189 = G__56190;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55164 = conformed_args__52231__auto__;
var map__55164__$1 = (((((!((map__55164 == null))))?(((((map__55164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55164):map__55164);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq55162){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55162));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56191 = arguments.length;
var i__4731__auto___56192 = (0);
while(true){
if((i__4731__auto___56192 < len__4730__auto___56191)){
args__4736__auto__.push((arguments[i__4731__auto___56192]));

var G__56193 = (i__4731__auto___56192 + (1));
i__4731__auto___56192 = G__56193;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55172 = conformed_args__52231__auto__;
var map__55172__$1 = (((((!((map__55172 == null))))?(((((map__55172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55172):map__55172);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq55170){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55170));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56194 = arguments.length;
var i__4731__auto___56195 = (0);
while(true){
if((i__4731__auto___56195 < len__4730__auto___56194)){
args__4736__auto__.push((arguments[i__4731__auto___56195]));

var G__56196 = (i__4731__auto___56195 + (1));
i__4731__auto___56195 = G__56196;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55184 = conformed_args__52231__auto__;
var map__55184__$1 = (((((!((map__55184 == null))))?(((((map__55184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55184):map__55184);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55184__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55184__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55184__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq55177){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55177));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56197 = arguments.length;
var i__4731__auto___56198 = (0);
while(true){
if((i__4731__auto___56198 < len__4730__auto___56197)){
args__4736__auto__.push((arguments[i__4731__auto___56198]));

var G__56199 = (i__4731__auto___56198 + (1));
i__4731__auto___56198 = G__56199;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55195 = conformed_args__52231__auto__;
var map__55195__$1 = (((((!((map__55195 == null))))?(((((map__55195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55195):map__55195);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq55192){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55192));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56200 = arguments.length;
var i__4731__auto___56201 = (0);
while(true){
if((i__4731__auto___56201 < len__4730__auto___56200)){
args__4736__auto__.push((arguments[i__4731__auto___56201]));

var G__56202 = (i__4731__auto___56201 + (1));
i__4731__auto___56201 = G__56202;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55201 = conformed_args__52231__auto__;
var map__55201__$1 = (((((!((map__55201 == null))))?(((((map__55201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55201):map__55201);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55201__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55201__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55201__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq55200){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55200));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56203 = arguments.length;
var i__4731__auto___56204 = (0);
while(true){
if((i__4731__auto___56204 < len__4730__auto___56203)){
args__4736__auto__.push((arguments[i__4731__auto___56204]));

var G__56205 = (i__4731__auto___56204 + (1));
i__4731__auto___56204 = G__56205;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55205 = conformed_args__52231__auto__;
var map__55205__$1 = (((((!((map__55205 == null))))?(((((map__55205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55205):map__55205);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq55203){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55203));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56206 = arguments.length;
var i__4731__auto___56207 = (0);
while(true){
if((i__4731__auto___56207 < len__4730__auto___56206)){
args__4736__auto__.push((arguments[i__4731__auto___56207]));

var G__56208 = (i__4731__auto___56207 + (1));
i__4731__auto___56207 = G__56208;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55213 = conformed_args__52231__auto__;
var map__55213__$1 = (((((!((map__55213 == null))))?(((((map__55213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55213):map__55213);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq55210){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55210));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56209 = arguments.length;
var i__4731__auto___56210 = (0);
while(true){
if((i__4731__auto___56210 < len__4730__auto___56209)){
args__4736__auto__.push((arguments[i__4731__auto___56210]));

var G__56211 = (i__4731__auto___56210 + (1));
i__4731__auto___56210 = G__56211;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55216 = conformed_args__52231__auto__;
var map__55216__$1 = (((((!((map__55216 == null))))?(((((map__55216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55216):map__55216);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55216__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55216__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55216__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq55215){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55215));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56212 = arguments.length;
var i__4731__auto___56213 = (0);
while(true){
if((i__4731__auto___56213 < len__4730__auto___56212)){
args__4736__auto__.push((arguments[i__4731__auto___56213]));

var G__56214 = (i__4731__auto___56213 + (1));
i__4731__auto___56213 = G__56214;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55221 = conformed_args__52231__auto__;
var map__55221__$1 = (((((!((map__55221 == null))))?(((((map__55221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55221):map__55221);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq55220){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55220));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56215 = arguments.length;
var i__4731__auto___56216 = (0);
while(true){
if((i__4731__auto___56216 < len__4730__auto___56215)){
args__4736__auto__.push((arguments[i__4731__auto___56216]));

var G__56217 = (i__4731__auto___56216 + (1));
i__4731__auto___56216 = G__56217;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55224 = conformed_args__52231__auto__;
var map__55224__$1 = (((((!((map__55224 == null))))?(((((map__55224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55224):map__55224);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq55223){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55223));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56218 = arguments.length;
var i__4731__auto___56219 = (0);
while(true){
if((i__4731__auto___56219 < len__4730__auto___56218)){
args__4736__auto__.push((arguments[i__4731__auto___56219]));

var G__56220 = (i__4731__auto___56219 + (1));
i__4731__auto___56219 = G__56220;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55229 = conformed_args__52231__auto__;
var map__55229__$1 = (((((!((map__55229 == null))))?(((((map__55229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55229):map__55229);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55229__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55229__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55229__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq55228){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55228));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56221 = arguments.length;
var i__4731__auto___56222 = (0);
while(true){
if((i__4731__auto___56222 < len__4730__auto___56221)){
args__4736__auto__.push((arguments[i__4731__auto___56222]));

var G__56223 = (i__4731__auto___56222 + (1));
i__4731__auto___56222 = G__56223;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55235 = conformed_args__52231__auto__;
var map__55235__$1 = (((((!((map__55235 == null))))?(((((map__55235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55235):map__55235);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq55231){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55231));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56224 = arguments.length;
var i__4731__auto___56225 = (0);
while(true){
if((i__4731__auto___56225 < len__4730__auto___56224)){
args__4736__auto__.push((arguments[i__4731__auto___56225]));

var G__56226 = (i__4731__auto___56225 + (1));
i__4731__auto___56225 = G__56226;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55238 = conformed_args__52231__auto__;
var map__55238__$1 = (((((!((map__55238 == null))))?(((((map__55238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55238):map__55238);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55238__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55238__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55238__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq55237){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55237));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56227 = arguments.length;
var i__4731__auto___56228 = (0);
while(true){
if((i__4731__auto___56228 < len__4730__auto___56227)){
args__4736__auto__.push((arguments[i__4731__auto___56228]));

var G__56229 = (i__4731__auto___56228 + (1));
i__4731__auto___56228 = G__56229;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55241 = conformed_args__52231__auto__;
var map__55241__$1 = (((((!((map__55241 == null))))?(((((map__55241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55241):map__55241);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55241__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55241__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55241__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq55240){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55240));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56230 = arguments.length;
var i__4731__auto___56231 = (0);
while(true){
if((i__4731__auto___56231 < len__4730__auto___56230)){
args__4736__auto__.push((arguments[i__4731__auto___56231]));

var G__56232 = (i__4731__auto___56231 + (1));
i__4731__auto___56231 = G__56232;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55249 = conformed_args__52231__auto__;
var map__55249__$1 = (((((!((map__55249 == null))))?(((((map__55249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55249):map__55249);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55249__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55249__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55249__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq55243){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55243));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56233 = arguments.length;
var i__4731__auto___56234 = (0);
while(true){
if((i__4731__auto___56234 < len__4730__auto___56233)){
args__4736__auto__.push((arguments[i__4731__auto___56234]));

var G__56235 = (i__4731__auto___56234 + (1));
i__4731__auto___56234 = G__56235;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55254 = conformed_args__52231__auto__;
var map__55254__$1 = (((((!((map__55254 == null))))?(((((map__55254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55254):map__55254);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq55252){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55252));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56236 = arguments.length;
var i__4731__auto___56237 = (0);
while(true){
if((i__4731__auto___56237 < len__4730__auto___56236)){
args__4736__auto__.push((arguments[i__4731__auto___56237]));

var G__56238 = (i__4731__auto___56237 + (1));
i__4731__auto___56237 = G__56238;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55258 = conformed_args__52231__auto__;
var map__55258__$1 = (((((!((map__55258 == null))))?(((((map__55258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55258):map__55258);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55258__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55258__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55258__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq55257){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55257));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56239 = arguments.length;
var i__4731__auto___56240 = (0);
while(true){
if((i__4731__auto___56240 < len__4730__auto___56239)){
args__4736__auto__.push((arguments[i__4731__auto___56240]));

var G__56241 = (i__4731__auto___56240 + (1));
i__4731__auto___56240 = G__56241;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55264 = conformed_args__52231__auto__;
var map__55264__$1 = (((((!((map__55264 == null))))?(((((map__55264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55264):map__55264);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55264__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55264__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55264__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq55263){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55263));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56242 = arguments.length;
var i__4731__auto___56243 = (0);
while(true){
if((i__4731__auto___56243 < len__4730__auto___56242)){
args__4736__auto__.push((arguments[i__4731__auto___56243]));

var G__56244 = (i__4731__auto___56243 + (1));
i__4731__auto___56243 = G__56244;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55270 = conformed_args__52231__auto__;
var map__55270__$1 = (((((!((map__55270 == null))))?(((((map__55270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55270):map__55270);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55270__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55270__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55270__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq55269){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55269));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56245 = arguments.length;
var i__4731__auto___56246 = (0);
while(true){
if((i__4731__auto___56246 < len__4730__auto___56245)){
args__4736__auto__.push((arguments[i__4731__auto___56246]));

var G__56247 = (i__4731__auto___56246 + (1));
i__4731__auto___56246 = G__56247;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55277 = conformed_args__52231__auto__;
var map__55277__$1 = (((((!((map__55277 == null))))?(((((map__55277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55277):map__55277);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55277__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55277__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55277__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq55273){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55273));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56248 = arguments.length;
var i__4731__auto___56249 = (0);
while(true){
if((i__4731__auto___56249 < len__4730__auto___56248)){
args__4736__auto__.push((arguments[i__4731__auto___56249]));

var G__56250 = (i__4731__auto___56249 + (1));
i__4731__auto___56249 = G__56250;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55283 = conformed_args__52231__auto__;
var map__55283__$1 = (((((!((map__55283 == null))))?(((((map__55283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55283):map__55283);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55283__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55283__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq55279){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55279));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56251 = arguments.length;
var i__4731__auto___56252 = (0);
while(true){
if((i__4731__auto___56252 < len__4730__auto___56251)){
args__4736__auto__.push((arguments[i__4731__auto___56252]));

var G__56253 = (i__4731__auto___56252 + (1));
i__4731__auto___56252 = G__56253;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55287 = conformed_args__52231__auto__;
var map__55287__$1 = (((((!((map__55287 == null))))?(((((map__55287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55287):map__55287);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55287__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55287__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55287__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq55286){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55286));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56254 = arguments.length;
var i__4731__auto___56255 = (0);
while(true){
if((i__4731__auto___56255 < len__4730__auto___56254)){
args__4736__auto__.push((arguments[i__4731__auto___56255]));

var G__56256 = (i__4731__auto___56255 + (1));
i__4731__auto___56255 = G__56256;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55292 = conformed_args__52231__auto__;
var map__55292__$1 = (((((!((map__55292 == null))))?(((((map__55292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55292):map__55292);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq55291){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55291));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56257 = arguments.length;
var i__4731__auto___56258 = (0);
while(true){
if((i__4731__auto___56258 < len__4730__auto___56257)){
args__4736__auto__.push((arguments[i__4731__auto___56258]));

var G__56259 = (i__4731__auto___56258 + (1));
i__4731__auto___56258 = G__56259;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55295 = conformed_args__52231__auto__;
var map__55295__$1 = (((((!((map__55295 == null))))?(((((map__55295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55295):map__55295);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq55294){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55294));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56260 = arguments.length;
var i__4731__auto___56261 = (0);
while(true){
if((i__4731__auto___56261 < len__4730__auto___56260)){
args__4736__auto__.push((arguments[i__4731__auto___56261]));

var G__56262 = (i__4731__auto___56261 + (1));
i__4731__auto___56261 = G__56262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55301 = conformed_args__52231__auto__;
var map__55301__$1 = (((((!((map__55301 == null))))?(((((map__55301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55301):map__55301);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55301__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq55300){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55300));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56263 = arguments.length;
var i__4731__auto___56264 = (0);
while(true){
if((i__4731__auto___56264 < len__4730__auto___56263)){
args__4736__auto__.push((arguments[i__4731__auto___56264]));

var G__56265 = (i__4731__auto___56264 + (1));
i__4731__auto___56264 = G__56265;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55309 = conformed_args__52231__auto__;
var map__55309__$1 = (((((!((map__55309 == null))))?(((((map__55309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55309):map__55309);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq55306){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55306));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56266 = arguments.length;
var i__4731__auto___56267 = (0);
while(true){
if((i__4731__auto___56267 < len__4730__auto___56266)){
args__4736__auto__.push((arguments[i__4731__auto___56267]));

var G__56268 = (i__4731__auto___56267 + (1));
i__4731__auto___56267 = G__56268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55314 = conformed_args__52231__auto__;
var map__55314__$1 = (((((!((map__55314 == null))))?(((((map__55314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55314):map__55314);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55314__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55314__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55314__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq55313){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55313));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56269 = arguments.length;
var i__4731__auto___56270 = (0);
while(true){
if((i__4731__auto___56270 < len__4730__auto___56269)){
args__4736__auto__.push((arguments[i__4731__auto___56270]));

var G__56271 = (i__4731__auto___56270 + (1));
i__4731__auto___56270 = G__56271;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55320 = conformed_args__52231__auto__;
var map__55320__$1 = (((((!((map__55320 == null))))?(((((map__55320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55320):map__55320);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55320__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55320__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55320__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq55319){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55319));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56272 = arguments.length;
var i__4731__auto___56273 = (0);
while(true){
if((i__4731__auto___56273 < len__4730__auto___56272)){
args__4736__auto__.push((arguments[i__4731__auto___56273]));

var G__56274 = (i__4731__auto___56273 + (1));
i__4731__auto___56273 = G__56274;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55326 = conformed_args__52231__auto__;
var map__55326__$1 = (((((!((map__55326 == null))))?(((((map__55326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55326):map__55326);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq55325){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55325));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56275 = arguments.length;
var i__4731__auto___56276 = (0);
while(true){
if((i__4731__auto___56276 < len__4730__auto___56275)){
args__4736__auto__.push((arguments[i__4731__auto___56276]));

var G__56277 = (i__4731__auto___56276 + (1));
i__4731__auto___56276 = G__56277;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55332 = conformed_args__52231__auto__;
var map__55332__$1 = (((((!((map__55332 == null))))?(((((map__55332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55332):map__55332);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq55331){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55331));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56278 = arguments.length;
var i__4731__auto___56279 = (0);
while(true){
if((i__4731__auto___56279 < len__4730__auto___56278)){
args__4736__auto__.push((arguments[i__4731__auto___56279]));

var G__56280 = (i__4731__auto___56279 + (1));
i__4731__auto___56279 = G__56280;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55346 = conformed_args__52231__auto__;
var map__55346__$1 = (((((!((map__55346 == null))))?(((((map__55346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55346):map__55346);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq55345){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55345));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56281 = arguments.length;
var i__4731__auto___56282 = (0);
while(true){
if((i__4731__auto___56282 < len__4730__auto___56281)){
args__4736__auto__.push((arguments[i__4731__auto___56282]));

var G__56283 = (i__4731__auto___56282 + (1));
i__4731__auto___56282 = G__56283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55351 = conformed_args__52231__auto__;
var map__55351__$1 = (((((!((map__55351 == null))))?(((((map__55351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55351):map__55351);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55351__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55351__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55351__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq55348){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55348));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56284 = arguments.length;
var i__4731__auto___56285 = (0);
while(true){
if((i__4731__auto___56285 < len__4730__auto___56284)){
args__4736__auto__.push((arguments[i__4731__auto___56285]));

var G__56286 = (i__4731__auto___56285 + (1));
i__4731__auto___56285 = G__56286;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55361 = conformed_args__52231__auto__;
var map__55361__$1 = (((((!((map__55361 == null))))?(((((map__55361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55361):map__55361);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55361__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55361__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55361__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq55360){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55360));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56287 = arguments.length;
var i__4731__auto___56288 = (0);
while(true){
if((i__4731__auto___56288 < len__4730__auto___56287)){
args__4736__auto__.push((arguments[i__4731__auto___56288]));

var G__56289 = (i__4731__auto___56288 + (1));
i__4731__auto___56288 = G__56289;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55373 = conformed_args__52231__auto__;
var map__55373__$1 = (((((!((map__55373 == null))))?(((((map__55373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55373):map__55373);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55373__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55373__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55373__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq55365){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55365));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56290 = arguments.length;
var i__4731__auto___56291 = (0);
while(true){
if((i__4731__auto___56291 < len__4730__auto___56290)){
args__4736__auto__.push((arguments[i__4731__auto___56291]));

var G__56292 = (i__4731__auto___56291 + (1));
i__4731__auto___56291 = G__56292;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55376 = conformed_args__52231__auto__;
var map__55376__$1 = (((((!((map__55376 == null))))?(((((map__55376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55376):map__55376);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55376__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55376__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55376__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq55375){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55375));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56293 = arguments.length;
var i__4731__auto___56294 = (0);
while(true){
if((i__4731__auto___56294 < len__4730__auto___56293)){
args__4736__auto__.push((arguments[i__4731__auto___56294]));

var G__56295 = (i__4731__auto___56294 + (1));
i__4731__auto___56294 = G__56295;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55381 = conformed_args__52231__auto__;
var map__55381__$1 = (((((!((map__55381 == null))))?(((((map__55381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55381):map__55381);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55381__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55381__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55381__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq55378){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55378));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56296 = arguments.length;
var i__4731__auto___56297 = (0);
while(true){
if((i__4731__auto___56297 < len__4730__auto___56296)){
args__4736__auto__.push((arguments[i__4731__auto___56297]));

var G__56298 = (i__4731__auto___56297 + (1));
i__4731__auto___56297 = G__56298;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55391 = conformed_args__52231__auto__;
var map__55391__$1 = (((((!((map__55391 == null))))?(((((map__55391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55391):map__55391);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55391__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55391__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55391__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq55386){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55386));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56299 = arguments.length;
var i__4731__auto___56300 = (0);
while(true){
if((i__4731__auto___56300 < len__4730__auto___56299)){
args__4736__auto__.push((arguments[i__4731__auto___56300]));

var G__56301 = (i__4731__auto___56300 + (1));
i__4731__auto___56300 = G__56301;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55394 = conformed_args__52231__auto__;
var map__55394__$1 = (((((!((map__55394 == null))))?(((((map__55394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55394):map__55394);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq55393){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55393));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56302 = arguments.length;
var i__4731__auto___56303 = (0);
while(true){
if((i__4731__auto___56303 < len__4730__auto___56302)){
args__4736__auto__.push((arguments[i__4731__auto___56303]));

var G__56304 = (i__4731__auto___56303 + (1));
i__4731__auto___56303 = G__56304;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55403 = conformed_args__52231__auto__;
var map__55403__$1 = (((((!((map__55403 == null))))?(((((map__55403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55403):map__55403);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55403__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq55398){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55398));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56305 = arguments.length;
var i__4731__auto___56306 = (0);
while(true){
if((i__4731__auto___56306 < len__4730__auto___56305)){
args__4736__auto__.push((arguments[i__4731__auto___56306]));

var G__56307 = (i__4731__auto___56306 + (1));
i__4731__auto___56306 = G__56307;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55406 = conformed_args__52231__auto__;
var map__55406__$1 = (((((!((map__55406 == null))))?(((((map__55406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55406):map__55406);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq55405){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55405));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56308 = arguments.length;
var i__4731__auto___56309 = (0);
while(true){
if((i__4731__auto___56309 < len__4730__auto___56308)){
args__4736__auto__.push((arguments[i__4731__auto___56309]));

var G__56310 = (i__4731__auto___56309 + (1));
i__4731__auto___56309 = G__56310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55412 = conformed_args__52231__auto__;
var map__55412__$1 = (((((!((map__55412 == null))))?(((((map__55412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55412):map__55412);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq55411){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55411));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56311 = arguments.length;
var i__4731__auto___56312 = (0);
while(true){
if((i__4731__auto___56312 < len__4730__auto___56311)){
args__4736__auto__.push((arguments[i__4731__auto___56312]));

var G__56313 = (i__4731__auto___56312 + (1));
i__4731__auto___56312 = G__56313;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55415 = conformed_args__52231__auto__;
var map__55415__$1 = (((((!((map__55415 == null))))?(((((map__55415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55415):map__55415);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55415__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55415__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55415__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq55414){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55414));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56314 = arguments.length;
var i__4731__auto___56315 = (0);
while(true){
if((i__4731__auto___56315 < len__4730__auto___56314)){
args__4736__auto__.push((arguments[i__4731__auto___56315]));

var G__56316 = (i__4731__auto___56315 + (1));
i__4731__auto___56315 = G__56316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55421 = conformed_args__52231__auto__;
var map__55421__$1 = (((((!((map__55421 == null))))?(((((map__55421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55421):map__55421);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq55419){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55419));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56317 = arguments.length;
var i__4731__auto___56318 = (0);
while(true){
if((i__4731__auto___56318 < len__4730__auto___56317)){
args__4736__auto__.push((arguments[i__4731__auto___56318]));

var G__56319 = (i__4731__auto___56318 + (1));
i__4731__auto___56318 = G__56319;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55427 = conformed_args__52231__auto__;
var map__55427__$1 = (((((!((map__55427 == null))))?(((((map__55427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55427):map__55427);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq55425){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55425));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56320 = arguments.length;
var i__4731__auto___56321 = (0);
while(true){
if((i__4731__auto___56321 < len__4730__auto___56320)){
args__4736__auto__.push((arguments[i__4731__auto___56321]));

var G__56322 = (i__4731__auto___56321 + (1));
i__4731__auto___56321 = G__56322;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55433 = conformed_args__52231__auto__;
var map__55433__$1 = (((((!((map__55433 == null))))?(((((map__55433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55433):map__55433);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55433__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55433__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55433__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq55430){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55430));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56323 = arguments.length;
var i__4731__auto___56324 = (0);
while(true){
if((i__4731__auto___56324 < len__4730__auto___56323)){
args__4736__auto__.push((arguments[i__4731__auto___56324]));

var G__56325 = (i__4731__auto___56324 + (1));
i__4731__auto___56324 = G__56325;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55437 = conformed_args__52231__auto__;
var map__55437__$1 = (((((!((map__55437 == null))))?(((((map__55437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55437):map__55437);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq55435){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55435));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56326 = arguments.length;
var i__4731__auto___56327 = (0);
while(true){
if((i__4731__auto___56327 < len__4730__auto___56326)){
args__4736__auto__.push((arguments[i__4731__auto___56327]));

var G__56328 = (i__4731__auto___56327 + (1));
i__4731__auto___56327 = G__56328;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55443 = conformed_args__52231__auto__;
var map__55443__$1 = (((((!((map__55443 == null))))?(((((map__55443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55443):map__55443);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq55440){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55440));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56329 = arguments.length;
var i__4731__auto___56330 = (0);
while(true){
if((i__4731__auto___56330 < len__4730__auto___56329)){
args__4736__auto__.push((arguments[i__4731__auto___56330]));

var G__56331 = (i__4731__auto___56330 + (1));
i__4731__auto___56330 = G__56331;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55451 = conformed_args__52231__auto__;
var map__55451__$1 = (((((!((map__55451 == null))))?(((((map__55451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55451):map__55451);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55451__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55451__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55451__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq55448){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55448));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56332 = arguments.length;
var i__4731__auto___56333 = (0);
while(true){
if((i__4731__auto___56333 < len__4730__auto___56332)){
args__4736__auto__.push((arguments[i__4731__auto___56333]));

var G__56334 = (i__4731__auto___56333 + (1));
i__4731__auto___56333 = G__56334;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55456 = conformed_args__52231__auto__;
var map__55456__$1 = (((((!((map__55456 == null))))?(((((map__55456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55456):map__55456);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq55454){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55454));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56335 = arguments.length;
var i__4731__auto___56336 = (0);
while(true){
if((i__4731__auto___56336 < len__4730__auto___56335)){
args__4736__auto__.push((arguments[i__4731__auto___56336]));

var G__56337 = (i__4731__auto___56336 + (1));
i__4731__auto___56336 = G__56337;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55459 = conformed_args__52231__auto__;
var map__55459__$1 = (((((!((map__55459 == null))))?(((((map__55459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55459):map__55459);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55459__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55459__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55459__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq55458){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55458));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56338 = arguments.length;
var i__4731__auto___56339 = (0);
while(true){
if((i__4731__auto___56339 < len__4730__auto___56338)){
args__4736__auto__.push((arguments[i__4731__auto___56339]));

var G__56340 = (i__4731__auto___56339 + (1));
i__4731__auto___56339 = G__56340;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55462 = conformed_args__52231__auto__;
var map__55462__$1 = (((((!((map__55462 == null))))?(((((map__55462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55462):map__55462);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq55461){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55461));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56341 = arguments.length;
var i__4731__auto___56342 = (0);
while(true){
if((i__4731__auto___56342 < len__4730__auto___56341)){
args__4736__auto__.push((arguments[i__4731__auto___56342]));

var G__56343 = (i__4731__auto___56342 + (1));
i__4731__auto___56342 = G__56343;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55468 = conformed_args__52231__auto__;
var map__55468__$1 = (((((!((map__55468 == null))))?(((((map__55468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55468):map__55468);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq55464){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55464));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56344 = arguments.length;
var i__4731__auto___56345 = (0);
while(true){
if((i__4731__auto___56345 < len__4730__auto___56344)){
args__4736__auto__.push((arguments[i__4731__auto___56345]));

var G__56346 = (i__4731__auto___56345 + (1));
i__4731__auto___56345 = G__56346;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55474 = conformed_args__52231__auto__;
var map__55474__$1 = (((((!((map__55474 == null))))?(((((map__55474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55474):map__55474);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55474__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55474__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq55473){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55473));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56347 = arguments.length;
var i__4731__auto___56348 = (0);
while(true){
if((i__4731__auto___56348 < len__4730__auto___56347)){
args__4736__auto__.push((arguments[i__4731__auto___56348]));

var G__56349 = (i__4731__auto___56348 + (1));
i__4731__auto___56348 = G__56349;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55482 = conformed_args__52231__auto__;
var map__55482__$1 = (((((!((map__55482 == null))))?(((((map__55482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55482):map__55482);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq55479){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55479));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56350 = arguments.length;
var i__4731__auto___56351 = (0);
while(true){
if((i__4731__auto___56351 < len__4730__auto___56350)){
args__4736__auto__.push((arguments[i__4731__auto___56351]));

var G__56352 = (i__4731__auto___56351 + (1));
i__4731__auto___56351 = G__56352;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55492 = conformed_args__52231__auto__;
var map__55492__$1 = (((((!((map__55492 == null))))?(((((map__55492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55492):map__55492);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55492__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55492__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55492__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq55485){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55485));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56353 = arguments.length;
var i__4731__auto___56354 = (0);
while(true){
if((i__4731__auto___56354 < len__4730__auto___56353)){
args__4736__auto__.push((arguments[i__4731__auto___56354]));

var G__56355 = (i__4731__auto___56354 + (1));
i__4731__auto___56354 = G__56355;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55513 = conformed_args__52231__auto__;
var map__55513__$1 = (((((!((map__55513 == null))))?(((((map__55513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55513):map__55513);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq55512){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55512));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56356 = arguments.length;
var i__4731__auto___56357 = (0);
while(true){
if((i__4731__auto___56357 < len__4730__auto___56356)){
args__4736__auto__.push((arguments[i__4731__auto___56357]));

var G__56358 = (i__4731__auto___56357 + (1));
i__4731__auto___56357 = G__56358;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55520 = conformed_args__52231__auto__;
var map__55520__$1 = (((((!((map__55520 == null))))?(((((map__55520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55520):map__55520);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq55518){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55518));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56359 = arguments.length;
var i__4731__auto___56360 = (0);
while(true){
if((i__4731__auto___56360 < len__4730__auto___56359)){
args__4736__auto__.push((arguments[i__4731__auto___56360]));

var G__56361 = (i__4731__auto___56360 + (1));
i__4731__auto___56360 = G__56361;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55524 = conformed_args__52231__auto__;
var map__55524__$1 = (((((!((map__55524 == null))))?(((((map__55524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55524):map__55524);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq55523){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55523));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56362 = arguments.length;
var i__4731__auto___56363 = (0);
while(true){
if((i__4731__auto___56363 < len__4730__auto___56362)){
args__4736__auto__.push((arguments[i__4731__auto___56363]));

var G__56364 = (i__4731__auto___56363 + (1));
i__4731__auto___56363 = G__56364;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55527 = conformed_args__52231__auto__;
var map__55527__$1 = (((((!((map__55527 == null))))?(((((map__55527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55527):map__55527);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55527__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55527__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55527__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq55526){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55526));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56365 = arguments.length;
var i__4731__auto___56366 = (0);
while(true){
if((i__4731__auto___56366 < len__4730__auto___56365)){
args__4736__auto__.push((arguments[i__4731__auto___56366]));

var G__56367 = (i__4731__auto___56366 + (1));
i__4731__auto___56366 = G__56367;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55532 = conformed_args__52231__auto__;
var map__55532__$1 = (((((!((map__55532 == null))))?(((((map__55532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55532):map__55532);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq55529){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55529));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56368 = arguments.length;
var i__4731__auto___56369 = (0);
while(true){
if((i__4731__auto___56369 < len__4730__auto___56368)){
args__4736__auto__.push((arguments[i__4731__auto___56369]));

var G__56370 = (i__4731__auto___56369 + (1));
i__4731__auto___56369 = G__56370;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55551 = conformed_args__52231__auto__;
var map__55551__$1 = (((((!((map__55551 == null))))?(((((map__55551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55551):map__55551);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55551__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55551__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55551__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq55535){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55535));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56371 = arguments.length;
var i__4731__auto___56372 = (0);
while(true){
if((i__4731__auto___56372 < len__4730__auto___56371)){
args__4736__auto__.push((arguments[i__4731__auto___56372]));

var G__56373 = (i__4731__auto___56372 + (1));
i__4731__auto___56372 = G__56373;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55581 = conformed_args__52231__auto__;
var map__55581__$1 = (((((!((map__55581 == null))))?(((((map__55581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55581):map__55581);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55581__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55581__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55581__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq55573){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55573));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56374 = arguments.length;
var i__4731__auto___56375 = (0);
while(true){
if((i__4731__auto___56375 < len__4730__auto___56374)){
args__4736__auto__.push((arguments[i__4731__auto___56375]));

var G__56376 = (i__4731__auto___56375 + (1));
i__4731__auto___56375 = G__56376;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55613 = conformed_args__52231__auto__;
var map__55613__$1 = (((((!((map__55613 == null))))?(((((map__55613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55613):map__55613);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55613__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55613__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55613__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq55605){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55605));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56377 = arguments.length;
var i__4731__auto___56378 = (0);
while(true){
if((i__4731__auto___56378 < len__4730__auto___56377)){
args__4736__auto__.push((arguments[i__4731__auto___56378]));

var G__56379 = (i__4731__auto___56378 + (1));
i__4731__auto___56378 = G__56379;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55635 = conformed_args__52231__auto__;
var map__55635__$1 = (((((!((map__55635 == null))))?(((((map__55635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55635):map__55635);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55635__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55635__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55635__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq55627){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55627));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56380 = arguments.length;
var i__4731__auto___56381 = (0);
while(true){
if((i__4731__auto___56381 < len__4730__auto___56380)){
args__4736__auto__.push((arguments[i__4731__auto___56381]));

var G__56382 = (i__4731__auto___56381 + (1));
i__4731__auto___56381 = G__56382;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55667 = conformed_args__52231__auto__;
var map__55667__$1 = (((((!((map__55667 == null))))?(((((map__55667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55667):map__55667);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55667__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55667__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55667__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq55657){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55657));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56383 = arguments.length;
var i__4731__auto___56384 = (0);
while(true){
if((i__4731__auto___56384 < len__4730__auto___56383)){
args__4736__auto__.push((arguments[i__4731__auto___56384]));

var G__56385 = (i__4731__auto___56384 + (1));
i__4731__auto___56384 = G__56385;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55677 = conformed_args__52231__auto__;
var map__55677__$1 = (((((!((map__55677 == null))))?(((((map__55677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55677):map__55677);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq55675){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55675));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56386 = arguments.length;
var i__4731__auto___56387 = (0);
while(true){
if((i__4731__auto___56387 < len__4730__auto___56386)){
args__4736__auto__.push((arguments[i__4731__auto___56387]));

var G__56388 = (i__4731__auto___56387 + (1));
i__4731__auto___56387 = G__56388;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55690 = conformed_args__52231__auto__;
var map__55690__$1 = (((((!((map__55690 == null))))?(((((map__55690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55690):map__55690);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55690__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55690__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55690__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq55681){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55681));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56389 = arguments.length;
var i__4731__auto___56390 = (0);
while(true){
if((i__4731__auto___56390 < len__4730__auto___56389)){
args__4736__auto__.push((arguments[i__4731__auto___56390]));

var G__56391 = (i__4731__auto___56390 + (1));
i__4731__auto___56390 = G__56391;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55696 = conformed_args__52231__auto__;
var map__55696__$1 = (((((!((map__55696 == null))))?(((((map__55696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55696):map__55696);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq55695){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55695));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56392 = arguments.length;
var i__4731__auto___56393 = (0);
while(true){
if((i__4731__auto___56393 < len__4730__auto___56392)){
args__4736__auto__.push((arguments[i__4731__auto___56393]));

var G__56394 = (i__4731__auto___56393 + (1));
i__4731__auto___56393 = G__56394;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55705 = conformed_args__52231__auto__;
var map__55705__$1 = (((((!((map__55705 == null))))?(((((map__55705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55705):map__55705);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55705__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55705__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55705__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq55704){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55704));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56395 = arguments.length;
var i__4731__auto___56396 = (0);
while(true){
if((i__4731__auto___56396 < len__4730__auto___56395)){
args__4736__auto__.push((arguments[i__4731__auto___56396]));

var G__56397 = (i__4731__auto___56396 + (1));
i__4731__auto___56396 = G__56397;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55710 = conformed_args__52231__auto__;
var map__55710__$1 = (((((!((map__55710 == null))))?(((((map__55710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55710):map__55710);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55710__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55710__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55710__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq55707){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55707));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56398 = arguments.length;
var i__4731__auto___56399 = (0);
while(true){
if((i__4731__auto___56399 < len__4730__auto___56398)){
args__4736__auto__.push((arguments[i__4731__auto___56399]));

var G__56400 = (i__4731__auto___56399 + (1));
i__4731__auto___56399 = G__56400;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55716 = conformed_args__52231__auto__;
var map__55716__$1 = (((((!((map__55716 == null))))?(((((map__55716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55716):map__55716);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq55715){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55715));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56401 = arguments.length;
var i__4731__auto___56402 = (0);
while(true){
if((i__4731__auto___56402 < len__4730__auto___56401)){
args__4736__auto__.push((arguments[i__4731__auto___56402]));

var G__56403 = (i__4731__auto___56402 + (1));
i__4731__auto___56402 = G__56403;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55724 = conformed_args__52231__auto__;
var map__55724__$1 = (((((!((map__55724 == null))))?(((((map__55724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55724):map__55724);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq55722){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55722));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56404 = arguments.length;
var i__4731__auto___56405 = (0);
while(true){
if((i__4731__auto___56405 < len__4730__auto___56404)){
args__4736__auto__.push((arguments[i__4731__auto___56405]));

var G__56406 = (i__4731__auto___56405 + (1));
i__4731__auto___56405 = G__56406;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55733 = conformed_args__52231__auto__;
var map__55733__$1 = (((((!((map__55733 == null))))?(((((map__55733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55733):map__55733);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq55729){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55729));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56407 = arguments.length;
var i__4731__auto___56408 = (0);
while(true){
if((i__4731__auto___56408 < len__4730__auto___56407)){
args__4736__auto__.push((arguments[i__4731__auto___56408]));

var G__56409 = (i__4731__auto___56408 + (1));
i__4731__auto___56408 = G__56409;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55742 = conformed_args__52231__auto__;
var map__55742__$1 = (((((!((map__55742 == null))))?(((((map__55742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55742):map__55742);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq55738){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55738));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56410 = arguments.length;
var i__4731__auto___56411 = (0);
while(true){
if((i__4731__auto___56411 < len__4730__auto___56410)){
args__4736__auto__.push((arguments[i__4731__auto___56411]));

var G__56412 = (i__4731__auto___56411 + (1));
i__4731__auto___56411 = G__56412;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55747 = conformed_args__52231__auto__;
var map__55747__$1 = (((((!((map__55747 == null))))?(((((map__55747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55747):map__55747);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55747__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55747__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq55746){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55746));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56413 = arguments.length;
var i__4731__auto___56414 = (0);
while(true){
if((i__4731__auto___56414 < len__4730__auto___56413)){
args__4736__auto__.push((arguments[i__4731__auto___56414]));

var G__56415 = (i__4731__auto___56414 + (1));
i__4731__auto___56414 = G__56415;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55752 = conformed_args__52231__auto__;
var map__55752__$1 = (((((!((map__55752 == null))))?(((((map__55752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55752):map__55752);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq55750){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55750));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56416 = arguments.length;
var i__4731__auto___56417 = (0);
while(true){
if((i__4731__auto___56417 < len__4730__auto___56416)){
args__4736__auto__.push((arguments[i__4731__auto___56417]));

var G__56418 = (i__4731__auto___56417 + (1));
i__4731__auto___56417 = G__56418;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55760 = conformed_args__52231__auto__;
var map__55760__$1 = (((((!((map__55760 == null))))?(((((map__55760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55760):map__55760);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq55756){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55756));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56419 = arguments.length;
var i__4731__auto___56420 = (0);
while(true){
if((i__4731__auto___56420 < len__4730__auto___56419)){
args__4736__auto__.push((arguments[i__4731__auto___56420]));

var G__56421 = (i__4731__auto___56420 + (1));
i__4731__auto___56420 = G__56421;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55765 = conformed_args__52231__auto__;
var map__55765__$1 = (((((!((map__55765 == null))))?(((((map__55765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55765):map__55765);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq55762){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55762));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56422 = arguments.length;
var i__4731__auto___56423 = (0);
while(true){
if((i__4731__auto___56423 < len__4730__auto___56422)){
args__4736__auto__.push((arguments[i__4731__auto___56423]));

var G__56424 = (i__4731__auto___56423 + (1));
i__4731__auto___56423 = G__56424;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55769 = conformed_args__52231__auto__;
var map__55769__$1 = (((((!((map__55769 == null))))?(((((map__55769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55769):map__55769);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq55767){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55767));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56425 = arguments.length;
var i__4731__auto___56426 = (0);
while(true){
if((i__4731__auto___56426 < len__4730__auto___56425)){
args__4736__auto__.push((arguments[i__4731__auto___56426]));

var G__56427 = (i__4731__auto___56426 + (1));
i__4731__auto___56426 = G__56427;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55773 = conformed_args__52231__auto__;
var map__55773__$1 = (((((!((map__55773 == null))))?(((((map__55773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55773):map__55773);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55773__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55773__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55773__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq55772){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55772));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56428 = arguments.length;
var i__4731__auto___56429 = (0);
while(true){
if((i__4731__auto___56429 < len__4730__auto___56428)){
args__4736__auto__.push((arguments[i__4731__auto___56429]));

var G__56430 = (i__4731__auto___56429 + (1));
i__4731__auto___56429 = G__56430;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55777 = conformed_args__52231__auto__;
var map__55777__$1 = (((((!((map__55777 == null))))?(((((map__55777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55777):map__55777);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq55776){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55776));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56431 = arguments.length;
var i__4731__auto___56432 = (0);
while(true){
if((i__4731__auto___56432 < len__4730__auto___56431)){
args__4736__auto__.push((arguments[i__4731__auto___56432]));

var G__56433 = (i__4731__auto___56432 + (1));
i__4731__auto___56432 = G__56433;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55792 = conformed_args__52231__auto__;
var map__55792__$1 = (((((!((map__55792 == null))))?(((((map__55792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55792):map__55792);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq55780){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55780));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56434 = arguments.length;
var i__4731__auto___56435 = (0);
while(true){
if((i__4731__auto___56435 < len__4730__auto___56434)){
args__4736__auto__.push((arguments[i__4731__auto___56435]));

var G__56436 = (i__4731__auto___56435 + (1));
i__4731__auto___56435 = G__56436;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55813 = conformed_args__52231__auto__;
var map__55813__$1 = (((((!((map__55813 == null))))?(((((map__55813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55813):map__55813);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55813__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55813__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55813__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq55805){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55805));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56437 = arguments.length;
var i__4731__auto___56438 = (0);
while(true){
if((i__4731__auto___56438 < len__4730__auto___56437)){
args__4736__auto__.push((arguments[i__4731__auto___56438]));

var G__56439 = (i__4731__auto___56438 + (1));
i__4731__auto___56438 = G__56439;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55817 = conformed_args__52231__auto__;
var map__55817__$1 = (((((!((map__55817 == null))))?(((((map__55817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55817):map__55817);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55817__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55817__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55817__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq55816){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55816));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56440 = arguments.length;
var i__4731__auto___56441 = (0);
while(true){
if((i__4731__auto___56441 < len__4730__auto___56440)){
args__4736__auto__.push((arguments[i__4731__auto___56441]));

var G__56442 = (i__4731__auto___56441 + (1));
i__4731__auto___56441 = G__56442;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55820 = conformed_args__52231__auto__;
var map__55820__$1 = (((((!((map__55820 == null))))?(((((map__55820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55820):map__55820);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55820__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55820__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq55819){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55819));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56443 = arguments.length;
var i__4731__auto___56444 = (0);
while(true){
if((i__4731__auto___56444 < len__4730__auto___56443)){
args__4736__auto__.push((arguments[i__4731__auto___56444]));

var G__56445 = (i__4731__auto___56444 + (1));
i__4731__auto___56444 = G__56445;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55824 = conformed_args__52231__auto__;
var map__55824__$1 = (((((!((map__55824 == null))))?(((((map__55824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55824):map__55824);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq55823){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55823));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56446 = arguments.length;
var i__4731__auto___56447 = (0);
while(true){
if((i__4731__auto___56447 < len__4730__auto___56446)){
args__4736__auto__.push((arguments[i__4731__auto___56447]));

var G__56448 = (i__4731__auto___56447 + (1));
i__4731__auto___56447 = G__56448;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55827 = conformed_args__52231__auto__;
var map__55827__$1 = (((((!((map__55827 == null))))?(((((map__55827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55827):map__55827);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55827__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55827__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55827__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq55826){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55826));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56449 = arguments.length;
var i__4731__auto___56450 = (0);
while(true){
if((i__4731__auto___56450 < len__4730__auto___56449)){
args__4736__auto__.push((arguments[i__4731__auto___56450]));

var G__56451 = (i__4731__auto___56450 + (1));
i__4731__auto___56450 = G__56451;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55831 = conformed_args__52231__auto__;
var map__55831__$1 = (((((!((map__55831 == null))))?(((((map__55831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55831):map__55831);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55831__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55831__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55831__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq55830){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55830));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56452 = arguments.length;
var i__4731__auto___56453 = (0);
while(true){
if((i__4731__auto___56453 < len__4730__auto___56452)){
args__4736__auto__.push((arguments[i__4731__auto___56453]));

var G__56454 = (i__4731__auto___56453 + (1));
i__4731__auto___56453 = G__56454;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55835 = conformed_args__52231__auto__;
var map__55835__$1 = (((((!((map__55835 == null))))?(((((map__55835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55835):map__55835);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55835__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55835__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq55834){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55834));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56455 = arguments.length;
var i__4731__auto___56456 = (0);
while(true){
if((i__4731__auto___56456 < len__4730__auto___56455)){
args__4736__auto__.push((arguments[i__4731__auto___56456]));

var G__56457 = (i__4731__auto___56456 + (1));
i__4731__auto___56456 = G__56457;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55838 = conformed_args__52231__auto__;
var map__55838__$1 = (((((!((map__55838 == null))))?(((((map__55838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55838):map__55838);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55838__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55838__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55838__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq55837){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55837));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56458 = arguments.length;
var i__4731__auto___56459 = (0);
while(true){
if((i__4731__auto___56459 < len__4730__auto___56458)){
args__4736__auto__.push((arguments[i__4731__auto___56459]));

var G__56460 = (i__4731__auto___56459 + (1));
i__4731__auto___56459 = G__56460;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55841 = conformed_args__52231__auto__;
var map__55841__$1 = (((((!((map__55841 == null))))?(((((map__55841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55841):map__55841);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq55840){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55840));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56461 = arguments.length;
var i__4731__auto___56462 = (0);
while(true){
if((i__4731__auto___56462 < len__4730__auto___56461)){
args__4736__auto__.push((arguments[i__4731__auto___56462]));

var G__56463 = (i__4731__auto___56462 + (1));
i__4731__auto___56462 = G__56463;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55844 = conformed_args__52231__auto__;
var map__55844__$1 = (((((!((map__55844 == null))))?(((((map__55844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55844):map__55844);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq55843){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55843));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56464 = arguments.length;
var i__4731__auto___56465 = (0);
while(true){
if((i__4731__auto___56465 < len__4730__auto___56464)){
args__4736__auto__.push((arguments[i__4731__auto___56465]));

var G__56466 = (i__4731__auto___56465 + (1));
i__4731__auto___56465 = G__56466;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55847 = conformed_args__52231__auto__;
var map__55847__$1 = (((((!((map__55847 == null))))?(((((map__55847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55847):map__55847);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55847__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55847__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55847__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq55846){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55846));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56467 = arguments.length;
var i__4731__auto___56468 = (0);
while(true){
if((i__4731__auto___56468 < len__4730__auto___56467)){
args__4736__auto__.push((arguments[i__4731__auto___56468]));

var G__56469 = (i__4731__auto___56468 + (1));
i__4731__auto___56468 = G__56469;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55850 = conformed_args__52231__auto__;
var map__55850__$1 = (((((!((map__55850 == null))))?(((((map__55850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55850):map__55850);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq55849){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55849));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56470 = arguments.length;
var i__4731__auto___56471 = (0);
while(true){
if((i__4731__auto___56471 < len__4730__auto___56470)){
args__4736__auto__.push((arguments[i__4731__auto___56471]));

var G__56472 = (i__4731__auto___56471 + (1));
i__4731__auto___56471 = G__56472;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55853 = conformed_args__52231__auto__;
var map__55853__$1 = (((((!((map__55853 == null))))?(((((map__55853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55853):map__55853);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq55852){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55852));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56473 = arguments.length;
var i__4731__auto___56474 = (0);
while(true){
if((i__4731__auto___56474 < len__4730__auto___56473)){
args__4736__auto__.push((arguments[i__4731__auto___56474]));

var G__56475 = (i__4731__auto___56474 + (1));
i__4731__auto___56474 = G__56475;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55856 = conformed_args__52231__auto__;
var map__55856__$1 = (((((!((map__55856 == null))))?(((((map__55856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55856):map__55856);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq55855){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55855));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56476 = arguments.length;
var i__4731__auto___56477 = (0);
while(true){
if((i__4731__auto___56477 < len__4730__auto___56476)){
args__4736__auto__.push((arguments[i__4731__auto___56477]));

var G__56478 = (i__4731__auto___56477 + (1));
i__4731__auto___56477 = G__56478;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55859 = conformed_args__52231__auto__;
var map__55859__$1 = (((((!((map__55859 == null))))?(((((map__55859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55859):map__55859);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55859__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq55858){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55858));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56479 = arguments.length;
var i__4731__auto___56480 = (0);
while(true){
if((i__4731__auto___56480 < len__4730__auto___56479)){
args__4736__auto__.push((arguments[i__4731__auto___56480]));

var G__56481 = (i__4731__auto___56480 + (1));
i__4731__auto___56480 = G__56481;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55862 = conformed_args__52231__auto__;
var map__55862__$1 = (((((!((map__55862 == null))))?(((((map__55862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55862):map__55862);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55862__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55862__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55862__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq55861){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55861));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56482 = arguments.length;
var i__4731__auto___56483 = (0);
while(true){
if((i__4731__auto___56483 < len__4730__auto___56482)){
args__4736__auto__.push((arguments[i__4731__auto___56483]));

var G__56484 = (i__4731__auto___56483 + (1));
i__4731__auto___56483 = G__56484;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55865 = conformed_args__52231__auto__;
var map__55865__$1 = (((((!((map__55865 == null))))?(((((map__55865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55865):map__55865);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq55864){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55864));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56485 = arguments.length;
var i__4731__auto___56486 = (0);
while(true){
if((i__4731__auto___56486 < len__4730__auto___56485)){
args__4736__auto__.push((arguments[i__4731__auto___56486]));

var G__56487 = (i__4731__auto___56486 + (1));
i__4731__auto___56486 = G__56487;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55868 = conformed_args__52231__auto__;
var map__55868__$1 = (((((!((map__55868 == null))))?(((((map__55868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55868):map__55868);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq55867){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55867));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56488 = arguments.length;
var i__4731__auto___56489 = (0);
while(true){
if((i__4731__auto___56489 < len__4730__auto___56488)){
args__4736__auto__.push((arguments[i__4731__auto___56489]));

var G__56490 = (i__4731__auto___56489 + (1));
i__4731__auto___56489 = G__56490;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55871 = conformed_args__52231__auto__;
var map__55871__$1 = (((((!((map__55871 == null))))?(((((map__55871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55871):map__55871);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55871__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq55870){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55870));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56491 = arguments.length;
var i__4731__auto___56492 = (0);
while(true){
if((i__4731__auto___56492 < len__4730__auto___56491)){
args__4736__auto__.push((arguments[i__4731__auto___56492]));

var G__56493 = (i__4731__auto___56492 + (1));
i__4731__auto___56492 = G__56493;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55874 = conformed_args__52231__auto__;
var map__55874__$1 = (((((!((map__55874 == null))))?(((((map__55874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55874):map__55874);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55874__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55874__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55874__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq55873){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55873));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56494 = arguments.length;
var i__4731__auto___56495 = (0);
while(true){
if((i__4731__auto___56495 < len__4730__auto___56494)){
args__4736__auto__.push((arguments[i__4731__auto___56495]));

var G__56496 = (i__4731__auto___56495 + (1));
i__4731__auto___56495 = G__56496;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55877 = conformed_args__52231__auto__;
var map__55877__$1 = (((((!((map__55877 == null))))?(((((map__55877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55877):map__55877);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq55876){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55876));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56497 = arguments.length;
var i__4731__auto___56498 = (0);
while(true){
if((i__4731__auto___56498 < len__4730__auto___56497)){
args__4736__auto__.push((arguments[i__4731__auto___56498]));

var G__56499 = (i__4731__auto___56498 + (1));
i__4731__auto___56498 = G__56499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55880 = conformed_args__52231__auto__;
var map__55880__$1 = (((((!((map__55880 == null))))?(((((map__55880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55880):map__55880);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55880__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55880__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55880__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq55879){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55879));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56500 = arguments.length;
var i__4731__auto___56501 = (0);
while(true){
if((i__4731__auto___56501 < len__4730__auto___56500)){
args__4736__auto__.push((arguments[i__4731__auto___56501]));

var G__56502 = (i__4731__auto___56501 + (1));
i__4731__auto___56501 = G__56502;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55883 = conformed_args__52231__auto__;
var map__55883__$1 = (((((!((map__55883 == null))))?(((((map__55883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55883):map__55883);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55883__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55883__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55883__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq55882){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55882));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56503 = arguments.length;
var i__4731__auto___56504 = (0);
while(true){
if((i__4731__auto___56504 < len__4730__auto___56503)){
args__4736__auto__.push((arguments[i__4731__auto___56504]));

var G__56505 = (i__4731__auto___56504 + (1));
i__4731__auto___56504 = G__56505;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55886 = conformed_args__52231__auto__;
var map__55886__$1 = (((((!((map__55886 == null))))?(((((map__55886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55886):map__55886);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55886__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55886__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55886__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq55885){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55885));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56506 = arguments.length;
var i__4731__auto___56507 = (0);
while(true){
if((i__4731__auto___56507 < len__4730__auto___56506)){
args__4736__auto__.push((arguments[i__4731__auto___56507]));

var G__56508 = (i__4731__auto___56507 + (1));
i__4731__auto___56507 = G__56508;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55889 = conformed_args__52231__auto__;
var map__55889__$1 = (((((!((map__55889 == null))))?(((((map__55889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55889):map__55889);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55889__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55889__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55889__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq55888){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55888));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56509 = arguments.length;
var i__4731__auto___56510 = (0);
while(true){
if((i__4731__auto___56510 < len__4730__auto___56509)){
args__4736__auto__.push((arguments[i__4731__auto___56510]));

var G__56511 = (i__4731__auto___56510 + (1));
i__4731__auto___56510 = G__56511;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55892 = conformed_args__52231__auto__;
var map__55892__$1 = (((((!((map__55892 == null))))?(((((map__55892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55892):map__55892);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55892__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55892__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55892__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq55891){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55891));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56512 = arguments.length;
var i__4731__auto___56513 = (0);
while(true){
if((i__4731__auto___56513 < len__4730__auto___56512)){
args__4736__auto__.push((arguments[i__4731__auto___56513]));

var G__56514 = (i__4731__auto___56513 + (1));
i__4731__auto___56513 = G__56514;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55895 = conformed_args__52231__auto__;
var map__55895__$1 = (((((!((map__55895 == null))))?(((((map__55895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55895):map__55895);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq55894){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55894));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56515 = arguments.length;
var i__4731__auto___56516 = (0);
while(true){
if((i__4731__auto___56516 < len__4730__auto___56515)){
args__4736__auto__.push((arguments[i__4731__auto___56516]));

var G__56517 = (i__4731__auto___56516 + (1));
i__4731__auto___56516 = G__56517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55898 = conformed_args__52231__auto__;
var map__55898__$1 = (((((!((map__55898 == null))))?(((((map__55898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55898):map__55898);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55898__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55898__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55898__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq55897){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55897));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56518 = arguments.length;
var i__4731__auto___56519 = (0);
while(true){
if((i__4731__auto___56519 < len__4730__auto___56518)){
args__4736__auto__.push((arguments[i__4731__auto___56519]));

var G__56520 = (i__4731__auto___56519 + (1));
i__4731__auto___56519 = G__56520;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55901 = conformed_args__52231__auto__;
var map__55901__$1 = (((((!((map__55901 == null))))?(((((map__55901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55901):map__55901);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq55900){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55900));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56521 = arguments.length;
var i__4731__auto___56522 = (0);
while(true){
if((i__4731__auto___56522 < len__4730__auto___56521)){
args__4736__auto__.push((arguments[i__4731__auto___56522]));

var G__56523 = (i__4731__auto___56522 + (1));
i__4731__auto___56522 = G__56523;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52231__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55904 = conformed_args__52231__auto__;
var map__55904__$1 = (((((!((map__55904 == null))))?(((((map__55904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55904):map__55904);
var css__52234__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55904__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52233__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55904__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__52232__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55904__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52233__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52233__auto__);
var attrs_value__52235__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__52232__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52235__auto__], null),children__52233__auto____$1),css__52234__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq55903){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55903));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
