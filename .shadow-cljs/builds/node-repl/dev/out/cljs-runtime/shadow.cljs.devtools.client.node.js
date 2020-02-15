goog.provide('shadow.cljs.devtools.client.node');
goog.require('cljs.core');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.js.shim.module$ws');
goog.require('cljs.reader');
goog.require('goog.object');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.node !== 'undefined') && (typeof shadow.cljs.devtools.client.node.client_id !== 'undefined')){
} else {
shadow.cljs.devtools.client.node.client_id = cljs.core.random_uuid();
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.node !== 'undefined') && (typeof shadow.cljs.devtools.client.node.ws_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.node.ws_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.node.ws_close = (function shadow$cljs$devtools$client$node$ws_close(){
var temp__5724__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5724__auto__ == null)){
return null;
} else {
var tcp = temp__5724__auto__;
tcp.close();

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,null);
}
});
shadow.cljs.devtools.client.node.ws_msg = (function shadow$cljs$devtools$client$node$ws_msg(msg){
var temp__5724__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5724__auto__ == null)){
return null;
} else {
var ws = temp__5724__auto__;
return ws.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)),((function (ws,temp__5724__auto__){
return (function (err){
if(cljs.core.truth_(err)){
return console.error("REPL msg send failed",err);
} else {
return null;
}
});})(ws,temp__5724__auto__))
);
}
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__29261){
var map__29262 = p__29261;
var map__29262__$1 = (((((!((map__29262 == null))))?(((((map__29262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29262):map__29262);
var msg = map__29262__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29262__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29262__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__29270){
var map__29271 = p__29270;
var map__29271__$1 = (((((!((map__29271 == null))))?(((((map__29271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29271):map__29271);
var msg = map__29271__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29271__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29271__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__29273 = repl_state;
var map__29273__$1 = (((((!((map__29273 == null))))?(((((map__29273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29273):map__29273);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29273__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__29275_29370 = cljs.core.seq(repl_sources);
var chunk__29277_29371 = null;
var count__29278_29372 = (0);
var i__29279_29373 = (0);
while(true){
if((i__29279_29373 < count__29278_29372)){
var map__29285_29374 = chunk__29277_29371.cljs$core$IIndexed$_nth$arity$2(null,i__29279_29373);
var map__29285_29375__$1 = (((((!((map__29285_29374 == null))))?(((((map__29285_29374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29285_29374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29285_29374):map__29285_29374);
var src_29376 = map__29285_29375__$1;
var output_name_29377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29285_29375__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29377)))){
shadow.cljs.devtools.client.node.closure_import(output_name_29377);


var G__29378 = seq__29275_29370;
var G__29379 = chunk__29277_29371;
var G__29380 = count__29278_29372;
var G__29381 = (i__29279_29373 + (1));
seq__29275_29370 = G__29378;
chunk__29277_29371 = G__29379;
count__29278_29372 = G__29380;
i__29279_29373 = G__29381;
continue;
} else {
var G__29382 = seq__29275_29370;
var G__29383 = chunk__29277_29371;
var G__29384 = count__29278_29372;
var G__29385 = (i__29279_29373 + (1));
seq__29275_29370 = G__29382;
chunk__29277_29371 = G__29383;
count__29278_29372 = G__29384;
i__29279_29373 = G__29385;
continue;
}
} else {
var temp__5720__auto___29386 = cljs.core.seq(seq__29275_29370);
if(temp__5720__auto___29386){
var seq__29275_29387__$1 = temp__5720__auto___29386;
if(cljs.core.chunked_seq_QMARK_(seq__29275_29387__$1)){
var c__4550__auto___29388 = cljs.core.chunk_first(seq__29275_29387__$1);
var G__29389 = cljs.core.chunk_rest(seq__29275_29387__$1);
var G__29390 = c__4550__auto___29388;
var G__29391 = cljs.core.count(c__4550__auto___29388);
var G__29392 = (0);
seq__29275_29370 = G__29389;
chunk__29277_29371 = G__29390;
count__29278_29372 = G__29391;
i__29279_29373 = G__29392;
continue;
} else {
var map__29288_29397 = cljs.core.first(seq__29275_29387__$1);
var map__29288_29398__$1 = (((((!((map__29288_29397 == null))))?(((((map__29288_29397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29288_29397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29288_29397):map__29288_29397);
var src_29399 = map__29288_29398__$1;
var output_name_29400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29288_29398__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29400)))){
shadow.cljs.devtools.client.node.closure_import(output_name_29400);


var G__29401 = cljs.core.next(seq__29275_29387__$1);
var G__29402 = null;
var G__29403 = (0);
var G__29404 = (0);
seq__29275_29370 = G__29401;
chunk__29277_29371 = G__29402;
count__29278_29372 = G__29403;
i__29279_29373 = G__29404;
continue;
} else {
var G__29405 = cljs.core.next(seq__29275_29387__$1);
var G__29406 = null;
var G__29407 = (0);
var G__29408 = (0);
seq__29275_29370 = G__29405;
chunk__29277_29371 = G__29406;
count__29278_29372 = G__29407;
i__29279_29373 = G__29408;
continue;
}
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__29290){
var map__29291 = p__29290;
var map__29291__$1 = (((((!((map__29291 == null))))?(((((map__29291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29291):map__29291);
var msg = map__29291__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29291__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__29291,map__29291__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__29291,map__29291__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__29293){
var map__29294 = p__29293;
var map__29294__$1 = (((((!((map__29294 == null))))?(((((map__29294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29294):map__29294);
var msg = map__29294__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29294__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__29309){
var map__29311 = p__29309;
var map__29311__$1 = (((((!((map__29311 == null))))?(((((map__29311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29311):map__29311);
var msg = map__29311__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29311__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29311__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29311__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__29319_29413 = cljs.core.seq(sources);
var chunk__29320_29414 = null;
var count__29321_29415 = (0);
var i__29322_29416 = (0);
while(true){
if((i__29322_29416 < count__29321_29415)){
var map__29336_29417 = chunk__29320_29414.cljs$core$IIndexed$_nth$arity$2(null,i__29322_29416);
var map__29336_29418__$1 = (((((!((map__29336_29417 == null))))?(((((map__29336_29417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29336_29417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29336_29417):map__29336_29417);
var src_29419 = map__29336_29418__$1;
var provides_29420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29336_29418__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29336_29418__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4131__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29421)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29420);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29421);
} else {
}


var G__29422 = seq__29319_29413;
var G__29423 = chunk__29320_29414;
var G__29424 = count__29321_29415;
var G__29425 = (i__29322_29416 + (1));
seq__29319_29413 = G__29422;
chunk__29320_29414 = G__29423;
count__29321_29415 = G__29424;
i__29322_29416 = G__29425;
continue;
} else {
var temp__5720__auto___29426 = cljs.core.seq(seq__29319_29413);
if(temp__5720__auto___29426){
var seq__29319_29427__$1 = temp__5720__auto___29426;
if(cljs.core.chunked_seq_QMARK_(seq__29319_29427__$1)){
var c__4550__auto___29428 = cljs.core.chunk_first(seq__29319_29427__$1);
var G__29429 = cljs.core.chunk_rest(seq__29319_29427__$1);
var G__29430 = c__4550__auto___29428;
var G__29431 = cljs.core.count(c__4550__auto___29428);
var G__29432 = (0);
seq__29319_29413 = G__29429;
chunk__29320_29414 = G__29430;
count__29321_29415 = G__29431;
i__29322_29416 = G__29432;
continue;
} else {
var map__29338_29436 = cljs.core.first(seq__29319_29427__$1);
var map__29338_29437__$1 = (((((!((map__29338_29436 == null))))?(((((map__29338_29436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29338_29436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29338_29436):map__29338_29436);
var src_29438 = map__29338_29437__$1;
var provides_29439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29338_29437__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29338_29437__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4131__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29440)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29439);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29440);
} else {
}


var G__29446 = cljs.core.next(seq__29319_29427__$1);
var G__29447 = null;
var G__29448 = (0);
var G__29449 = (0);
seq__29319_29413 = G__29446;
chunk__29320_29414 = G__29447;
count__29321_29415 = G__29448;
i__29322_29416 = G__29449;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e29314){var e = e29314;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__29340){
var map__29341 = p__29340;
var map__29341__$1 = (((((!((map__29341 == null))))?(((((map__29341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29341):map__29341);
var msg = map__29341__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29341__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29341__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__29343 = info;
var map__29343__$1 = (((((!((map__29343 == null))))?(((((map__29343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29343):map__29343);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29343__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29343__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__29343,map__29343__$1,sources,compiled,map__29341,map__29341__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29345(s__29346){
return (new cljs.core.LazySeq(null,((function (map__29343,map__29343__$1,sources,compiled,map__29341,map__29341__$1,msg,info,reload_info){
return (function (){
var s__29346__$1 = s__29346;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29346__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__29351 = cljs.core.first(xs__6277__auto__);
var map__29351__$1 = (((((!((map__29351 == null))))?(((((map__29351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29351):map__29351);
var src = map__29351__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29351__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29351__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__29346__$1,map__29351,map__29351__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29343,map__29343__$1,sources,compiled,map__29341,map__29341__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29345_$_iter__29347(s__29348){
return (new cljs.core.LazySeq(null,((function (s__29346__$1,map__29351,map__29351__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29343,map__29343__$1,sources,compiled,map__29341,map__29341__$1,msg,info,reload_info){
return (function (){
var s__29348__$1 = s__29348;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__29348__$1);
if(temp__5720__auto____$1){
var s__29348__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29348__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29348__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29350 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29349 = (0);
while(true){
if((i__29349 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29349);
cljs.core.chunk_append(b__29350,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__29450 = (i__29349 + (1));
i__29349 = G__29450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29350),shadow$cljs$devtools$client$node$build_complete_$_iter__29345_$_iter__29347(cljs.core.chunk_rest(s__29348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29350),null);
}
} else {
var warning = cljs.core.first(s__29348__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__29345_$_iter__29347(cljs.core.rest(s__29348__$2)));
}
} else {
return null;
}
break;
}
});})(s__29346__$1,map__29351,map__29351__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29343,map__29343__$1,sources,compiled,map__29341,map__29341__$1,msg,info,reload_info))
,null,null));
});})(s__29346__$1,map__29351,map__29351__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29343,map__29343__$1,sources,compiled,map__29341,map__29341__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__29345(cljs.core.rest(s__29346__$1)));
} else {
var G__29451 = cljs.core.rest(s__29346__$1);
s__29346__$1 = G__29451;
continue;
}
} else {
var G__29452 = cljs.core.rest(s__29346__$1);
s__29346__$1 = G__29452;
continue;
}
} else {
return null;
}
break;
}
});})(map__29343,map__29343__$1,sources,compiled,map__29341,map__29341__$1,msg,info,reload_info))
,null,null));
});})(map__29343,map__29343__$1,sources,compiled,map__29341,map__29341__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__29353 = info;
var map__29353__$1 = (((((!((map__29353 == null))))?(((((map__29353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29353):map__29353);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29353__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29353__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__29353,map__29353__$1,sources__$1,compiled__$1,map__29343,map__29343__$1,sources,compiled,warnings,map__29341,map__29341__$1,msg,info,reload_info){
return (function (p__29355){
var map__29356 = p__29355;
var map__29356__$1 = (((((!((map__29356 == null))))?(((((map__29356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29356):map__29356);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29356__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29356__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__29353,map__29353__$1,sources__$1,compiled__$1,map__29343,map__29343__$1,sources,compiled,warnings,map__29341,map__29341__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__29353,map__29353__$1,sources__$1,compiled__$1,map__29343,map__29343__$1,sources,compiled,warnings,map__29341,map__29341__$1,msg,info,reload_info){
return (function (p__29358){
var map__29359 = p__29358;
var map__29359__$1 = (((((!((map__29359 == null))))?(((((map__29359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29359):map__29359);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29359__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__29353,map__29353__$1,sources__$1,compiled__$1,map__29343,map__29343__$1,sources,compiled,warnings,map__29341,map__29341__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__29353,map__29353__$1,sources__$1,compiled__$1,files_to_require,map__29343,map__29343__$1,sources,compiled,warnings,map__29341,map__29341__$1,msg,info,reload_info){
return (function (){
var seq__29361 = cljs.core.seq(files_to_require);
var chunk__29362 = null;
var count__29363 = (0);
var i__29364 = (0);
while(true){
if((i__29364 < count__29363)){
var src = chunk__29362.cljs$core$IIndexed$_nth$arity$2(null,i__29364);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29457 = seq__29361;
var G__29458 = chunk__29362;
var G__29459 = count__29363;
var G__29460 = (i__29364 + (1));
seq__29361 = G__29457;
chunk__29362 = G__29458;
count__29363 = G__29459;
i__29364 = G__29460;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__29361);
if(temp__5720__auto__){
var seq__29361__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29361__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__29361__$1);
var G__29461 = cljs.core.chunk_rest(seq__29361__$1);
var G__29462 = c__4550__auto__;
var G__29463 = cljs.core.count(c__4550__auto__);
var G__29464 = (0);
seq__29361 = G__29461;
chunk__29362 = G__29462;
count__29363 = G__29463;
i__29364 = G__29464;
continue;
} else {
var src = cljs.core.first(seq__29361__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29465 = cljs.core.next(seq__29361__$1);
var G__29466 = null;
var G__29467 = (0);
var G__29468 = (0);
seq__29361 = G__29465;
chunk__29362 = G__29466;
count__29363 = G__29467;
i__29364 = G__29468;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__29353,map__29353__$1,sources__$1,compiled__$1,files_to_require,map__29343,map__29343__$1,sources,compiled,warnings,map__29341,map__29341__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__29365){
var map__29366 = p__29365;
var map__29366__$1 = (((((!((map__29366 == null))))?(((((map__29366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29366):map__29366);
var msg = map__29366__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29366__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__29368 = type;
var G__29368__$1 = (((G__29368 instanceof cljs.core.Keyword))?G__29368.fqn:null);
switch (G__29368__$1) {
case "repl/init":
return shadow.cljs.devtools.client.node.repl_init(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.node.repl_invoke(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.node.repl_set_ns(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.node.repl_require(msg);

break;
case "build-configure":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-start":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-complete":
return shadow.cljs.devtools.client.node.build_complete(msg);

break;
case "build-failure":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "worker-shutdown":
return cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref).terminate();

break;
default:
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-unknown","repl-unknown",-1898463611),msg], null)], 0));

}
});
shadow.cljs.devtools.client.node.ws_connect = (function shadow$cljs$devtools$client$node$ws_connect(){
var url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"node","node",581201198));
var client = (new shadow.js.shim.module$ws(url,cljs.core.PersistentVector.EMPTY));
client.on("open",((function (url,client){
return (function (){
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,client);
});})(url,client))
);

client.on("unexpected-response",((function (url,client){
return (function (req,res){
var status = res.statusCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((406),status)){
return console.log("REPL connection rejected, probably stale JS connecting to new server.");
} else {
return console.log("REPL unexpected error",res.statusCode);
}
});})(url,client))
);

client.on("message",((function (url,client){
return (function (data,flags){
try{return shadow.cljs.devtools.client.env.process_ws_msg(data,shadow.cljs.devtools.client.node.process_message);
}catch (e29369){var e = e29369;
return console.error("failed to process message",data,e);
}});})(url,client))
);

client.on("close",((function (url,client){
return (function (){
return console.log("REPL client disconnected");
});})(url,client))
);

return client.on("error",((function (url,client){
return (function (err){
return console.log("REPL client error",err);
});})(url,client))
);
});
if(shadow.cljs.devtools.client.env.enabled){
shadow.cljs.devtools.client.node.ws_close();

shadow.cljs.devtools.client.node.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
