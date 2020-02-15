goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26541){
var map__26542 = p__26541;
var map__26542__$1 = (((((!((map__26542 == null))))?(((((map__26542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26542):map__26542);
var m = map__26542__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26542__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26542__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
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
var seq__26544_26726 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26545_26727 = null;
var count__26546_26728 = (0);
var i__26547_26729 = (0);
while(true){
if((i__26547_26729 < count__26546_26728)){
var f_26730 = chunk__26545_26727.cljs$core$IIndexed$_nth$arity$2(null,i__26547_26729);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26730], 0));


var G__26731 = seq__26544_26726;
var G__26732 = chunk__26545_26727;
var G__26733 = count__26546_26728;
var G__26734 = (i__26547_26729 + (1));
seq__26544_26726 = G__26731;
chunk__26545_26727 = G__26732;
count__26546_26728 = G__26733;
i__26547_26729 = G__26734;
continue;
} else {
var temp__5720__auto___26735 = cljs.core.seq(seq__26544_26726);
if(temp__5720__auto___26735){
var seq__26544_26736__$1 = temp__5720__auto___26735;
if(cljs.core.chunked_seq_QMARK_(seq__26544_26736__$1)){
var c__4550__auto___26737 = cljs.core.chunk_first(seq__26544_26736__$1);
var G__26755 = cljs.core.chunk_rest(seq__26544_26736__$1);
var G__26756 = c__4550__auto___26737;
var G__26757 = cljs.core.count(c__4550__auto___26737);
var G__26758 = (0);
seq__26544_26726 = G__26755;
chunk__26545_26727 = G__26756;
count__26546_26728 = G__26757;
i__26547_26729 = G__26758;
continue;
} else {
var f_26759 = cljs.core.first(seq__26544_26736__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26759], 0));


var G__26760 = cljs.core.next(seq__26544_26736__$1);
var G__26761 = null;
var G__26762 = (0);
var G__26763 = (0);
seq__26544_26726 = G__26760;
chunk__26545_26727 = G__26761;
count__26546_26728 = G__26762;
i__26547_26729 = G__26763;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26764 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_26764], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_26764)))?cljs.core.second(arglists_26764):arglists_26764)], 0));
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
var seq__26561_26769 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26562_26770 = null;
var count__26563_26771 = (0);
var i__26564_26772 = (0);
while(true){
if((i__26564_26772 < count__26563_26771)){
var vec__26578_26774 = chunk__26562_26770.cljs$core$IIndexed$_nth$arity$2(null,i__26564_26772);
var name_26775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578_26774,(0),null);
var map__26581_26776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578_26774,(1),null);
var map__26581_26777__$1 = (((((!((map__26581_26776 == null))))?(((((map__26581_26776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26581_26776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26581_26776):map__26581_26776);
var doc_26778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26581_26777__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26581_26777__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26775], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26779], 0));

if(cljs.core.truth_(doc_26778)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26778], 0));
} else {
}


var G__26787 = seq__26561_26769;
var G__26788 = chunk__26562_26770;
var G__26789 = count__26563_26771;
var G__26790 = (i__26564_26772 + (1));
seq__26561_26769 = G__26787;
chunk__26562_26770 = G__26788;
count__26563_26771 = G__26789;
i__26564_26772 = G__26790;
continue;
} else {
var temp__5720__auto___26791 = cljs.core.seq(seq__26561_26769);
if(temp__5720__auto___26791){
var seq__26561_26792__$1 = temp__5720__auto___26791;
if(cljs.core.chunked_seq_QMARK_(seq__26561_26792__$1)){
var c__4550__auto___26794 = cljs.core.chunk_first(seq__26561_26792__$1);
var G__26795 = cljs.core.chunk_rest(seq__26561_26792__$1);
var G__26796 = c__4550__auto___26794;
var G__26797 = cljs.core.count(c__4550__auto___26794);
var G__26798 = (0);
seq__26561_26769 = G__26795;
chunk__26562_26770 = G__26796;
count__26563_26771 = G__26797;
i__26564_26772 = G__26798;
continue;
} else {
var vec__26583_26799 = cljs.core.first(seq__26561_26792__$1);
var name_26800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26583_26799,(0),null);
var map__26586_26801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26583_26799,(1),null);
var map__26586_26802__$1 = (((((!((map__26586_26801 == null))))?(((((map__26586_26801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26586_26801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26586_26801):map__26586_26801);
var doc_26803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26586_26802__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26586_26802__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26800], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26804], 0));

if(cljs.core.truth_(doc_26803)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26803], 0));
} else {
}


var G__26820 = cljs.core.next(seq__26561_26792__$1);
var G__26821 = null;
var G__26822 = (0);
var G__26823 = (0);
seq__26561_26769 = G__26820;
chunk__26562_26770 = G__26821;
count__26563_26771 = G__26822;
i__26564_26772 = G__26823;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__26588 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26589 = null;
var count__26590 = (0);
var i__26591 = (0);
while(true){
if((i__26591 < count__26590)){
var role = chunk__26589.cljs$core$IIndexed$_nth$arity$2(null,i__26591);
var temp__5720__auto___26824__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___26824__$1)){
var spec_26825 = temp__5720__auto___26824__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26825)], 0));
} else {
}


var G__26826 = seq__26588;
var G__26827 = chunk__26589;
var G__26828 = count__26590;
var G__26829 = (i__26591 + (1));
seq__26588 = G__26826;
chunk__26589 = G__26827;
count__26590 = G__26828;
i__26591 = G__26829;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__26588);
if(temp__5720__auto____$1){
var seq__26588__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26588__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26588__$1);
var G__26830 = cljs.core.chunk_rest(seq__26588__$1);
var G__26831 = c__4550__auto__;
var G__26832 = cljs.core.count(c__4550__auto__);
var G__26833 = (0);
seq__26588 = G__26830;
chunk__26589 = G__26831;
count__26590 = G__26832;
i__26591 = G__26833;
continue;
} else {
var role = cljs.core.first(seq__26588__$1);
var temp__5720__auto___26834__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___26834__$2)){
var spec_26835 = temp__5720__auto___26834__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26835)], 0));
} else {
}


var G__26836 = cljs.core.next(seq__26588__$1);
var G__26837 = null;
var G__26838 = (0);
var G__26839 = (0);
seq__26588 = G__26836;
chunk__26589 = G__26837;
count__26590 = G__26838;
i__26591 = G__26839;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
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
var G__26851 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__26852 = cljs.core.ex_cause(t);
via = G__26851;
t = G__26852;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
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
var map__26598 = datafied_throwable;
var map__26598__$1 = (((((!((map__26598 == null))))?(((((map__26598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26598):map__26598);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26598__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26598__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26598__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26599 = cljs.core.last(via);
var map__26599__$1 = (((((!((map__26599 == null))))?(((((map__26599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26599):map__26599);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26599__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26599__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26599__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26600 = data;
var map__26600__$1 = (((((!((map__26600 == null))))?(((((map__26600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26600):map__26600);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26600__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26600__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26600__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26601 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__26601__$1 = (((((!((map__26601 == null))))?(((((map__26601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26601):map__26601);
var top_data = map__26601__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26601__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__26611 = phase;
var G__26611__$1 = (((G__26611 instanceof cljs.core.Keyword))?G__26611.fqn:null);
switch (G__26611__$1) {
case "read-source":
var map__26612 = data;
var map__26612__$1 = (((((!((map__26612 == null))))?(((((map__26612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26612):map__26612);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26612__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26612__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26617 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__26617__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26617,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26617);
var G__26617__$2 = (cljs.core.truth_((function (){var fexpr__26618 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26618.cljs$core$IFn$_invoke$arity$1 ? fexpr__26618.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26618.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26617__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26617__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26617__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26620 = top_data;
var G__26620__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26620,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26620);
var G__26620__$2 = (cljs.core.truth_((function (){var fexpr__26621 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26621.cljs$core$IFn$_invoke$arity$1 ? fexpr__26621.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26621.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26620__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26620__$1);
var G__26620__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26620__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26620__$2);
var G__26620__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26620__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26620__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26620__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26620__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26624 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(3),null);
var G__26629 = top_data;
var G__26629__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26629,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26629);
var G__26629__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26629__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26629__$1);
var G__26629__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26629__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26629__$2);
var G__26629__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26629__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26629__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26629__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26629__$4;
}

break;
case "execution":
var vec__26630 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26630,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26630,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26630,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26630,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__26630,source__$1,method,file,line,G__26611,G__26611__$1,map__26598,map__26598__$1,via,trace,phase,map__26599,map__26599__$1,type,message,data,map__26600,map__26600__$1,problems,fn,caller,map__26601,map__26601__$1,top_data,source){
return (function (p1__26597_SHARP_){
var or__4131__auto__ = (p1__26597_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__26634 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26634.cljs$core$IFn$_invoke$arity$1 ? fexpr__26634.cljs$core$IFn$_invoke$arity$1(p1__26597_SHARP_) : fexpr__26634.call(null,p1__26597_SHARP_));
}
});})(vec__26630,source__$1,method,file,line,G__26611,G__26611__$1,map__26598,map__26598__$1,via,trace,phase,map__26599,map__26599__$1,type,message,data,map__26600,map__26600__$1,problems,fn,caller,map__26601,map__26601__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__26635 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26635__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26635,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26635);
var G__26635__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26635__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26635__$1);
var G__26635__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26635__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26635__$2);
var G__26635__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26635__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26635__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26635__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26635__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26611__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26643){
var map__26644 = p__26643;
var map__26644__$1 = (((((!((map__26644 == null))))?(((((map__26644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26644):map__26644);
var triage_data = map__26644__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26644__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26644__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26644__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26644__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26644__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26644__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26644__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26644__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26649 = phase;
var G__26649__$1 = (((G__26649 instanceof cljs.core.Keyword))?G__26649.fqn:null);
switch (G__26649__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__26650 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__26651 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26652 = loc;
var G__26653 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26673_26901 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26674_26902 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26675_26903 = true;
var _STAR_print_fn_STAR__temp_val__26676_26904 = ((function (_STAR_print_newline_STAR__orig_val__26673_26901,_STAR_print_fn_STAR__orig_val__26674_26902,_STAR_print_newline_STAR__temp_val__26675_26903,sb__4661__auto__,G__26650,G__26651,G__26652,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26673_26901,_STAR_print_fn_STAR__orig_val__26674_26902,_STAR_print_newline_STAR__temp_val__26675_26903,sb__4661__auto__,G__26650,G__26651,G__26652,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26675_26903;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26676_26904;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26673_26901,_STAR_print_fn_STAR__orig_val__26674_26902,_STAR_print_newline_STAR__temp_val__26675_26903,_STAR_print_fn_STAR__temp_val__26676_26904,sb__4661__auto__,G__26650,G__26651,G__26652,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__26673_26901,_STAR_print_fn_STAR__orig_val__26674_26902,_STAR_print_newline_STAR__temp_val__26675_26903,_STAR_print_fn_STAR__temp_val__26676_26904,sb__4661__auto__,G__26650,G__26651,G__26652,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26640_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26640_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26673_26901,_STAR_print_fn_STAR__orig_val__26674_26902,_STAR_print_newline_STAR__temp_val__26675_26903,_STAR_print_fn_STAR__temp_val__26676_26904,sb__4661__auto__,G__26650,G__26651,G__26652,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26673_26901,_STAR_print_fn_STAR__orig_val__26674_26902,_STAR_print_newline_STAR__temp_val__26675_26903,_STAR_print_fn_STAR__temp_val__26676_26904,sb__4661__auto__,G__26650,G__26651,G__26652,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26674_26902;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26673_26901;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26650,G__26651,G__26652,G__26653) : format.call(null,G__26650,G__26651,G__26652,G__26653));

break;
case "macroexpansion":
var G__26684 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__26685 = cause_type;
var G__26686 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26687 = loc;
var G__26688 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26684,G__26685,G__26686,G__26687,G__26688) : format.call(null,G__26684,G__26685,G__26686,G__26687,G__26688));

break;
case "compile-syntax-check":
var G__26689 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__26690 = cause_type;
var G__26691 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26692 = loc;
var G__26693 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26689,G__26690,G__26691,G__26692,G__26693) : format.call(null,G__26689,G__26690,G__26691,G__26692,G__26693));

break;
case "compilation":
var G__26694 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__26695 = cause_type;
var G__26696 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26697 = loc;
var G__26698 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26694,G__26695,G__26696,G__26697,G__26698) : format.call(null,G__26694,G__26695,G__26696,G__26697,G__26698));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__26700 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__26701 = symbol;
var G__26702 = loc;
var G__26703 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26704_26913 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26705_26914 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26706_26915 = true;
var _STAR_print_fn_STAR__temp_val__26707_26916 = ((function (_STAR_print_newline_STAR__orig_val__26704_26913,_STAR_print_fn_STAR__orig_val__26705_26914,_STAR_print_newline_STAR__temp_val__26706_26915,sb__4661__auto__,G__26700,G__26701,G__26702,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26704_26913,_STAR_print_fn_STAR__orig_val__26705_26914,_STAR_print_newline_STAR__temp_val__26706_26915,sb__4661__auto__,G__26700,G__26701,G__26702,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26706_26915;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26707_26916;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26704_26913,_STAR_print_fn_STAR__orig_val__26705_26914,_STAR_print_newline_STAR__temp_val__26706_26915,_STAR_print_fn_STAR__temp_val__26707_26916,sb__4661__auto__,G__26700,G__26701,G__26702,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__26704_26913,_STAR_print_fn_STAR__orig_val__26705_26914,_STAR_print_newline_STAR__temp_val__26706_26915,_STAR_print_fn_STAR__temp_val__26707_26916,sb__4661__auto__,G__26700,G__26701,G__26702,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26641_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26641_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26704_26913,_STAR_print_fn_STAR__orig_val__26705_26914,_STAR_print_newline_STAR__temp_val__26706_26915,_STAR_print_fn_STAR__temp_val__26707_26916,sb__4661__auto__,G__26700,G__26701,G__26702,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26704_26913,_STAR_print_fn_STAR__orig_val__26705_26914,_STAR_print_newline_STAR__temp_val__26706_26915,_STAR_print_fn_STAR__temp_val__26707_26916,sb__4661__auto__,G__26700,G__26701,G__26702,G__26649,G__26649__$1,loc,class_name,simple_class,cause_type,format,map__26644,map__26644__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26705_26914;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26704_26913;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26700,G__26701,G__26702,G__26703) : format.call(null,G__26700,G__26701,G__26702,G__26703));
} else {
var G__26708 = "Execution error%s at %s(%s).\n%s\n";
var G__26709 = cause_type;
var G__26710 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26711 = loc;
var G__26712 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26708,G__26709,G__26710,G__26711,G__26712) : format.call(null,G__26708,G__26709,G__26710,G__26711,G__26712));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26649__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
