var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z([[4],[[5],[[5],[1,'mask']],[[2,'?:'],[[2,'!'],[[7],[3,'value']]],[1,''],[1,'mask-show']]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tapMask']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'=='],[[7],[3,'type']],[1,'default']])
Z([[2,'=='],[[7],[3,'type']],[1,'select']])
Z(z[0])
Z([3,'select-view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'mData']])
Z(z[9])
Z(z[0])
Z([3,'select-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'tapConfirm']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'mData']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z([[2,'=='],[[7],[3,'type']],[1,'multiSelect']])
Z(z[0])
Z(z[7])
Z(z[8])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'checkboxChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[9])
Z(z[16])
Z([[2,'=='],[[7],[3,'type']],[1,'advert']])
Z([[2,'=='],[[7],[3,'type']],[1,'notify']])
Z([3,'notify-view'])
Z([[6],[[7],[3,'mData']],[3,'title']])
Z([[6],[[7],[3,'mData']],[3,'src']])
Z([[2,'=='],[[7],[3,'type']],[1,'share']])
Z(z[0])
Z([3,'share-view'])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[9])
Z(z[0])
Z([3,'share-box'])
Z(z[15])
Z(z[16])
Z([[2,'&&'],[[2,'=='],[[7],[3,'type']],[1,'input']],[[7],[3,'value']]])
Z(z[0])
Z([3,'input-view'])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[6],[[7],[3,'mData']],[3,'content']])
Z(z[9])
Z([3,'input-box'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'number']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'password']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'digit']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'idcard']])
Z([[2,'||'],[[2,'!'],[[6],[[7],[3,'item']],[3,'type']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'text']]])
Z([[2,'=='],[[7],[3,'type']],[1,'custom']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'newList']])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'item data-v-9a10b902']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'left']],[[7],[3,'index']]],[1,1]],[1,'left'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'choose']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([[2,'+'],[[2,'+'],[1,'top:'],[[6],[[7],[3,'top']],[[7],[3,'index']]]],[1,'px;background-color:#fff;']])
Z([3,'pic fall-item-container data-v-9a10b902'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'showType']],[1,0]])
Z([3,'__l'])
Z([3,'data-v-9a10b902'])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([3,'jly-video-container data-v-9a10b902'])
Z(z[11])
Z(z[12])
Z(z[13])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[11])
Z(z[12])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'VerticalMain data-v-16c8b907'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'VerticalMain']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[1,'main-'],[[7],[3,'mainCur']]])
Z([3,'height:calc(100vh - 250rpx);'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[5])
Z([3,'index2'])
Z([3,'item2'])
Z([[6],[[7],[3,'item']],[3,'arr']])
Z(z[9])
Z(z[0])
Z([3,'image data-v-16c8b907'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[1,'arr']],[1,'']],[[7],[3,'index2']]]]]]]]]]]]]]]])
Z([[2,'==='],[[6],[[7],[3,'item2']],[3,'showType']],[1,0]])
Z([3,'__l'])
Z([3,'data-v-16c8b907'])
Z([[6],[[7],[3,'item2']],[3,'image']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'1-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'index2']]])
Z([3,'jly-video-container data-v-16c8b907'])
Z(z[17])
Z(z[18])
Z(z[19])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'index2']]])
Z(z[17])
Z(z[18])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'3-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'index2']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__e'])
Z([3,'cu-item bg-img shadow-blur color-item data-v-09c9a959'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'preview']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'__l'])
Z([3,'data-v-09c9a959'])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-cbd16c8c'])
Z([1,true])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[5],[1,'card-swiper data-v-cbd16c8c']],[[2,'?:'],[[7],[3,'dotStyle']],[1,'square-dot'],[1,'round-dot']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'cardSwiper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'500'])
Z([3,'#39b54a'])
Z([3,'#8799a3'])
Z(z[1])
Z([3,'5000'])
Z([3,'padding-top:40px;box-sizing:content-box;'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'swiperArr']])
Z(z[12])
Z(z[2])
Z([[4],[[5],[[5],[1,'data-v-cbd16c8c']],[[2,'?:'],[[2,'=='],[[7],[3,'cardCur']],[[7],[3,'index']]],[1,'cur'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'preview']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'swiper']]]]]]]]]]])
Z([3,'__l'])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[12])
Z(z[13])
Z([[7],[3,'list']])
Z(z[12])
Z(z[2])
Z([3,'image-container data-v-cbd16c8c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'showType']],[1,0]])
Z(z[19])
Z(z[0])
Z(z[21])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([3,'jly-video-container data-v-cbd16c8c'])
Z(z[19])
Z(z[0])
Z(z[21])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z(z[19])
Z(z[0])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
Z(z[12])
Z(z[13])
Z([[7],[3,'list2']])
Z(z[12])
Z(z[2])
Z(z[28])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'list2']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z(z[30])
Z(z[19])
Z(z[0])
Z(z[21])
Z([[2,'+'],[1,'5-'],[[7],[3,'index']]])
Z(z[35])
Z(z[19])
Z(z[0])
Z(z[21])
Z([[2,'+'],[1,'6-'],[[7],[3,'index']]])
Z(z[19])
Z(z[0])
Z([[2,'+'],[1,'7-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'image-container data-v-18bfc6be'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toPreview']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'==='],[[6],[[7],[3,'productDetail']],[3,'showType']],[1,0]])
Z([3,'__l'])
Z([3,'data-v-18bfc6be'])
Z([[6],[[7],[3,'productDetail']],[3,'image']])
Z([3,'1'])
Z(z[4])
Z(z[5])
Z([[6],[[7],[3,'productDetail']],[3,'video']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-23299a1e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'choose']]]]]]]]])
Z([[7],[3,'list']])
Z([1,false])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!=='],[[7],[3,'userInfo']],[1,null]])
Z([3,'__e'])
Z([3,'avatar-container data-v-f62d1fea'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toPersonalInfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'avatar data-v-f62d1fea'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toPreview']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'data-v-f62d1fea vue-ref'])
Z([3,'imageCache'])
Z([[6],[[7],[3,'userInfo']],[3,'avatar']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-f7f36ce2'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'choose']]]]]]]]])
Z([[7],[3,'list']])
Z([1,false])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-93120b46'])
Z([3,'__e'])
Z([3,'cu-form-group margin-top data-v-93120b46'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'uploadImage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'data-v-93120b46 vue-ref'])
Z([3,'imageCache'])
Z([[6],[[7],[3,'userInfo']],[3,'avatar']])
Z([3,'1'])
Z(z[4])
Z(z[1])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'cpimgOk']]]]]]]]])
Z([3,'cpimg'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/common/chunLei-modal/chunLei-modal.wxml','./components/common/cpimg/cpimg.wxml','./components/common/image-cache/image-cache.wxml','./components/common/loading/loading.wxml','./components/common/nairenk-waterfall-flow/nairenk-waterfall-flow.wxml','./components/current/video-cache/video-cache.wxml','./components/current/video-play/video-play.wxml','./pages/category/category/category.wxml','./pages/color/color/color.wxml','./pages/index/index/index.wxml','./pages/index/productDetail/productDetail.wxml','./pages/index/productList/productList.wxml','./pages/my/about/about.wxml','./pages/my/login/login.wxml','./pages/my/masterWeixin/masterWeixin.wxml','./pages/my/moreResource/moreResource.wxml','./pages/my/my/my.wxml','./pages/my/myCollection/myCollection.wxml','./pages/my/personalInfo/personalInfo.wxml','./pages/my/recharge/recharge.wxml','./pages/my/register/register.wxml','./pages/my/retrievePassword/retrievePassword.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['bindtap',0,'catchtouchmove',1,'class',1,'data-event-opts',2],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,5,e,s,gg)){oD.wxVkey=1
var lK=_mz(z,'view',['catchtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var aL=_v()
_(lK,aL)
var tM=function(bO,eN,oP,gg){
var oR=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],bO,eN,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,16,bO,eN,gg)){fS.wxVkey=1
}
fS.wxXCkey=1
_(oP,oR)
return oP
}
aL.wxXCkey=2
_2z(z,11,tM,e,s,gg,aL,'item','index','index')
_(oD,lK)
}
var fE=_v()
_(oB,fE)
if(_oz(z,17,e,s,gg)){fE.wxVkey=1
var cT=_mz(z,'view',['catchtap',18,'class',1,'data-event-opts',2],[],e,s,gg)
var hU=_mz(z,'checkbox-group',['bindchange',21,'data-event-opts',1],[],e,s,gg)
var oV=_v()
_(hU,oV)
var cW=function(lY,oX,aZ,gg){
var e2=_v()
_(aZ,e2)
if(_oz(z,27,lY,oX,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
return aZ
}
oV.wxXCkey=2
_2z(z,25,cW,e,s,gg,oV,'item','index','index')
_(cT,hU)
_(fE,cT)
}
var cF=_v()
_(oB,cF)
if(_oz(z,28,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(oB,hG)
if(_oz(z,29,e,s,gg)){hG.wxVkey=1
var b3=_n('view')
_rz(z,b3,'class',30,e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,31,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,32,e,s,gg)){x5.wxVkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
_(hG,b3)
}
var oH=_v()
_(oB,oH)
if(_oz(z,33,e,s,gg)){oH.wxVkey=1
var o6=_mz(z,'view',['catchtap',34,'class',1,'data-event-opts',2],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],o0,h9,gg)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,44,o0,h9,gg)){aDB.wxVkey=1
}
aDB.wxXCkey=1
_(cAB,lCB)
return cAB
}
f7.wxXCkey=2
_2z(z,39,c8,e,s,gg,f7,'item','index','index')
_(oH,o6)
}
var cI=_v()
_(oB,cI)
if(_oz(z,45,e,s,gg)){cI.wxVkey=1
var tEB=_mz(z,'view',['catchtap',46,'class',1,'data-event-opts',2],[],e,s,gg)
var eFB=_v()
_(tEB,eFB)
var bGB=function(xIB,oHB,oJB,gg){
var cLB=_n('view')
_rz(z,cLB,'class',53,xIB,oHB,gg)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,54,xIB,oHB,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(cLB,oNB)
if(_oz(z,55,xIB,oHB,gg)){oNB.wxVkey=1
}
var cOB=_v()
_(cLB,cOB)
if(_oz(z,56,xIB,oHB,gg)){cOB.wxVkey=1
}
var oPB=_v()
_(cLB,oPB)
if(_oz(z,57,xIB,oHB,gg)){oPB.wxVkey=1
}
var lQB=_v()
_(cLB,lQB)
if(_oz(z,58,xIB,oHB,gg)){lQB.wxVkey=1
}
hMB.wxXCkey=1
oNB.wxXCkey=1
cOB.wxXCkey=1
oPB.wxXCkey=1
lQB.wxXCkey=1
_(oJB,cLB)
return oJB
}
eFB.wxXCkey=2
_2z(z,51,bGB,e,s,gg,eFB,'item','index','index')
_(cI,tEB)
}
var oJ=_v()
_(oB,oJ)
if(_oz(z,59,e,s,gg)){oJ.wxVkey=1
var aRB=_n('slot')
_(oJ,aRB)
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oVB=_v()
_(r,oVB)
if(_oz(z,0,e,s,gg)){oVB.wxVkey=1
}
oVB.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oXB=_v()
_(r,oXB)
var fYB=function(h1B,cZB,o2B,gg){
var o4B=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2,'data-index',3,'style',4],[],h1B,cZB,gg)
var l5B=_n('view')
_rz(z,l5B,'class',9,h1B,cZB,gg)
var a6B=_v()
_(l5B,a6B)
if(_oz(z,10,h1B,cZB,gg)){a6B.wxVkey=1
var t7B=_mz(z,'image-cache',['bind:__l',11,'class',1,'src',2,'vueId',3],[],h1B,cZB,gg)
_(a6B,t7B)
}
else{a6B.wxVkey=2
var e8B=_n('view')
_rz(z,e8B,'class',15,h1B,cZB,gg)
var b9B=_mz(z,'image-cache',['bind:__l',16,'class',1,'src',2,'vueId',3],[],h1B,cZB,gg)
_(e8B,b9B)
var o0B=_mz(z,'video-play',['bind:__l',20,'class',1,'vueId',2],[],h1B,cZB,gg)
_(e8B,o0B)
_(a6B,e8B)
}
a6B.wxXCkey=1
a6B.wxXCkey=3
a6B.wxXCkey=3
_(o4B,l5B)
_(o2B,o4B)
return o2B
}
oXB.wxXCkey=4
_2z(z,2,fYB,e,s,gg,oXB,'item','index','index')
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var cDC=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'bindscroll',0,'class',1,'data-event-opts',1,'scrollIntoView',2,'style',3],[],e,s,gg)
var hEC=_v()
_(cDC,hEC)
var oFC=function(oHC,cGC,lIC,gg){
var tKC=_v()
_(lIC,tKC)
var eLC=function(oNC,bMC,xOC,gg){
var fQC=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],oNC,bMC,gg)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,16,oNC,bMC,gg)){cRC.wxVkey=1
var hSC=_mz(z,'image-cache',['bind:__l',17,'class',1,'src',2,'vueId',3],[],oNC,bMC,gg)
_(cRC,hSC)
}
else{cRC.wxVkey=2
var oTC=_n('view')
_rz(z,oTC,'class',21,oNC,bMC,gg)
var cUC=_mz(z,'image-cache',['bind:__l',22,'class',1,'src',2,'vueId',3],[],oNC,bMC,gg)
_(oTC,cUC)
var oVC=_mz(z,'video-play',['bind:__l',26,'class',1,'vueId',2],[],oNC,bMC,gg)
_(oTC,oVC)
_(cRC,oTC)
}
cRC.wxXCkey=1
cRC.wxXCkey=3
cRC.wxXCkey=3
_(xOC,fQC)
return xOC
}
tKC.wxXCkey=4
_2z(z,11,eLC,oHC,cGC,gg,tKC,'item2','index2','index2')
return lIC
}
hEC.wxXCkey=4
_2z(z,7,oFC,e,s,gg,hEC,'item','index','index')
_(r,cDC)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aXC=_v()
_(r,aXC)
var tYC=function(b1C,eZC,o2C,gg){
var o4C=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],b1C,eZC,gg)
var f5C=_mz(z,'image-cache',['bind:__l',7,'class',1,'src',2,'vueId',3],[],b1C,eZC,gg)
_(o4C,f5C)
_(o2C,o4C)
return o2C
}
aXC.wxXCkey=4
_2z(z,2,tYC,e,s,gg,aXC,'item','index','index')
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var h7C=_n('view')
_rz(z,h7C,'class',0,e,s,gg)
var o8C=_mz(z,'swiper',['autoplay',1,'bindchange',1,'circular',2,'class',3,'data-event-opts',4,'duration',5,'indicatorActiveColor',6,'indicatorColor',7,'indicatorDots',8,'interval',9,'style',10],[],e,s,gg)
var c9C=_v()
_(o8C,c9C)
var o0C=function(aBD,lAD,tCD,gg){
var bED=_mz(z,'swiper-item',['catchtap',16,'class',1,'data-event-opts',2],[],aBD,lAD,gg)
var oFD=_mz(z,'image-cache',['bind:__l',19,'class',1,'src',2,'vueId',3],[],aBD,lAD,gg)
_(bED,oFD)
_(tCD,bED)
return tCD
}
c9C.wxXCkey=4
_2z(z,14,o0C,e,s,gg,c9C,'item','index','index')
_(h7C,o8C)
var xGD=_v()
_(h7C,xGD)
var oHD=function(cJD,fID,hKD,gg){
var cMD=_mz(z,'view',['bindtap',27,'class',1,'data-event-opts',2],[],cJD,fID,gg)
var oND=_v()
_(cMD,oND)
if(_oz(z,30,cJD,fID,gg)){oND.wxVkey=1
var lOD=_mz(z,'image-cache',['bind:__l',31,'class',1,'src',2,'vueId',3],[],cJD,fID,gg)
_(oND,lOD)
}
else{oND.wxVkey=2
var aPD=_n('view')
_rz(z,aPD,'class',35,cJD,fID,gg)
var tQD=_mz(z,'image-cache',['bind:__l',36,'class',1,'src',2,'vueId',3],[],cJD,fID,gg)
_(aPD,tQD)
var eRD=_mz(z,'video-play',['bind:__l',40,'class',1,'vueId',2],[],cJD,fID,gg)
_(aPD,eRD)
_(oND,aPD)
}
oND.wxXCkey=1
oND.wxXCkey=3
oND.wxXCkey=3
_(hKD,cMD)
return hKD
}
xGD.wxXCkey=4
_2z(z,25,oHD,e,s,gg,xGD,'item','index','index')
var bSD=_v()
_(h7C,bSD)
var oTD=function(oVD,xUD,fWD,gg){
var hYD=_mz(z,'view',['bindtap',47,'class',1,'data-event-opts',2],[],oVD,xUD,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,50,oVD,xUD,gg)){oZD.wxVkey=1
var c1D=_mz(z,'image-cache',['bind:__l',51,'class',1,'src',2,'vueId',3],[],oVD,xUD,gg)
_(oZD,c1D)
}
else{oZD.wxVkey=2
var o2D=_n('view')
_rz(z,o2D,'class',55,oVD,xUD,gg)
var l3D=_mz(z,'image-cache',['bind:__l',56,'class',1,'src',2,'vueId',3],[],oVD,xUD,gg)
_(o2D,l3D)
var a4D=_mz(z,'video-play',['bind:__l',60,'class',1,'vueId',2],[],oVD,xUD,gg)
_(o2D,a4D)
_(oZD,o2D)
}
oZD.wxXCkey=1
oZD.wxXCkey=3
oZD.wxXCkey=3
_(fWD,hYD)
return fWD
}
bSD.wxXCkey=4
_2z(z,45,oTD,e,s,gg,bSD,'item','index','index')
_(r,h7C)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var e6D=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var b7D=_v()
_(e6D,b7D)
if(_oz(z,3,e,s,gg)){b7D.wxVkey=1
var o8D=_mz(z,'image-cache',['bind:__l',4,'class',1,'src',2,'vueId',3],[],e,s,gg)
_(b7D,o8D)
}
else{b7D.wxVkey=2
var x9D=_mz(z,'video-cache',['bind:__l',8,'class',1,'src',2,'vueId',3],[],e,s,gg)
_(b7D,x9D)
}
b7D.wxXCkey=1
b7D.wxXCkey=3
b7D.wxXCkey=3
_(r,e6D)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var fAE=_mz(z,'waterfall-flow',['bind:__l',0,'bind:click',1,'class',1,'data-event-opts',2,'list',3,'loading',4,'vueId',5],[],e,s,gg)
_(r,fAE)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var lGE=_v()
_(r,lGE)
if(_oz(z,0,e,s,gg)){lGE.wxVkey=1
var aHE=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var tIE=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var eJE=_mz(z,'image-cache',['bind:__l',7,'class',1,'data-ref',2,'src',3,'vueId',4],[],e,s,gg)
_(tIE,eJE)
_(aHE,tIE)
_(lGE,aHE)
}
lGE.wxXCkey=1
lGE.wxXCkey=3
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oLE=_mz(z,'waterfall-flow',['bind:__l',0,'bind:click',1,'class',1,'data-event-opts',2,'list',3,'loading',4,'vueId',5],[],e,s,gg)
_(r,oLE)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var oNE=_n('view')
_rz(z,oNE,'class',0,e,s,gg)
var fOE=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var cPE=_mz(z,'image-cache',['bind:__l',4,'class',1,'data-ref',2,'src',3,'vueId',4],[],e,s,gg)
_(fOE,cPE)
_(oNE,fOE)
var hQE=_mz(z,'cpimg',['bind:__l',9,'bind:result',1,'class',2,'data-event-opts',3,'data-ref',4,'vueId',5],[],e,s,gg)
_(oNE,hQE)
_(r,oNE)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index/index","pages/my/login/login","pages/color/color/color","pages/category/category/category","pages/my/my/my","pages/index/productList/productList","pages/my/recharge/recharge","pages/my/myCollection/myCollection","pages/index/productDetail/productDetail","pages/my/about/about","pages/my/moreResource/moreResource","pages/my/register/register","pages/my/retrievePassword/retrievePassword","pages/my/personalInfo/personalInfo","pages/my/masterWeixin/masterWeixin"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"white","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/index/index/index","iconPath":"static/component.png","selectedIconPath":"static/componentHL.png","text":"推荐"},{"pagePath":"pages/color/color/color","iconPath":"static/extui.png","selectedIconPath":"static/extuiHL.png","text":"色板"},{"pagePath":"pages/category/category/category","iconPath":"static/api.png","selectedIconPath":"static/apiHL.png","text":"类别"},{"pagePath":"pages/my/my/my","iconPath":"static/template.png","selectedIconPath":"static/templateHL.png","text":"我"}]},"networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":15000,"downloadFile":15000},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"MX美甲","compilerVersion":"2.4.6","usingComponents":{"loading":"/components/common/loading/loading","image-cache":"/components/common/image-cache/image-cache","video-cache":"/components/current/video-cache/video-cache","video-play":"/components/current/video-play/video-play","chun-lei-modal":"/components/common/chunLei-modal/chunLei-modal","cpimg":"/components/common/cpimg/cpimg"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/common/chunLei-modal/chunLei-modal.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/common/chunLei-modal/chunLei-modal.wxml']=$gwx('./components/common/chunLei-modal/chunLei-modal.wxml');

__wxAppCode__['components/common/cpimg/cpimg.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/common/cpimg/cpimg.wxml']=$gwx('./components/common/cpimg/cpimg.wxml');

__wxAppCode__['components/common/image-cache/image-cache.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/common/image-cache/image-cache.wxml']=$gwx('./components/common/image-cache/image-cache.wxml');

__wxAppCode__['components/common/loading/loading.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/common/loading/loading.wxml']=$gwx('./components/common/loading/loading.wxml');

__wxAppCode__['components/common/nairenk-waterfall-flow/nairenk-waterfall-flow.json']={"component":true,"usingComponents":{"image-cache":"/components/common/image-cache/image-cache","video-play":"/components/current/video-play/video-play"}};
__wxAppCode__['components/common/nairenk-waterfall-flow/nairenk-waterfall-flow.wxml']=$gwx('./components/common/nairenk-waterfall-flow/nairenk-waterfall-flow.wxml');

__wxAppCode__['components/current/video-cache/video-cache.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/current/video-cache/video-cache.wxml']=$gwx('./components/current/video-cache/video-cache.wxml');

__wxAppCode__['components/current/video-play/video-play.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/current/video-play/video-play.wxml']=$gwx('./components/current/video-play/video-play.wxml');

__wxAppCode__['pages/category/category/category.json']={"navigationBarTitleText":"类别","enablePullDownRefresh":true,"usingComponents":{"image-cache":"/components/common/image-cache/image-cache","video-play":"/components/current/video-play/video-play"}};
__wxAppCode__['pages/category/category/category.wxml']=$gwx('./pages/category/category/category.wxml');

__wxAppCode__['pages/color/color/color.json']={"navigationBarTitleText":"色板","enablePullDownRefresh":true,"usingComponents":{"image-cache":"/components/common/image-cache/image-cache"}};
__wxAppCode__['pages/color/color/color.wxml']=$gwx('./pages/color/color/color.wxml');

__wxAppCode__['pages/index/index/index.json']={"navigationBarTitleText":"MX美甲","enablePullDownRefresh":true,"usingComponents":{"image-cache":"/components/common/image-cache/image-cache","video-play":"/components/current/video-play/video-play"}};
__wxAppCode__['pages/index/index/index.wxml']=$gwx('./pages/index/index/index.wxml');

__wxAppCode__['pages/index/productDetail/productDetail.json']={"navigationBarTitleText":"详情","usingComponents":{"image-cache":"/components/common/image-cache/image-cache","video-cache":"/components/current/video-cache/video-cache"}};
__wxAppCode__['pages/index/productDetail/productDetail.wxml']=$gwx('./pages/index/productDetail/productDetail.wxml');

__wxAppCode__['pages/index/productList/productList.json']={"usingComponents":{"waterfall-flow":"/components/common/nairenk-waterfall-flow/nairenk-waterfall-flow"}};
__wxAppCode__['pages/index/productList/productList.wxml']=$gwx('./pages/index/productList/productList.wxml');

__wxAppCode__['pages/my/about/about.json']={"navigationBarTitleText":"关于","usingComponents":{}};
__wxAppCode__['pages/my/about/about.wxml']=$gwx('./pages/my/about/about.wxml');

__wxAppCode__['pages/my/login/login.json']={"navigationBarTitleText":"登录","usingComponents":{}};
__wxAppCode__['pages/my/login/login.wxml']=$gwx('./pages/my/login/login.wxml');

__wxAppCode__['pages/my/masterWeixin/masterWeixin.json']={"navigationBarTitleText":"加微信","usingComponents":{}};
__wxAppCode__['pages/my/masterWeixin/masterWeixin.wxml']=$gwx('./pages/my/masterWeixin/masterWeixin.wxml');

__wxAppCode__['pages/my/moreResource/moreResource.json']={"navigationBarTitleText":"更多美甲款式","usingComponents":{}};
__wxAppCode__['pages/my/moreResource/moreResource.wxml']=$gwx('./pages/my/moreResource/moreResource.wxml');

__wxAppCode__['pages/my/my/my.json']={"navigationBarTitleText":"我","enablePullDownRefresh":true,"usingComponents":{"image-cache":"/components/common/image-cache/image-cache"}};
__wxAppCode__['pages/my/my/my.wxml']=$gwx('./pages/my/my/my.wxml');

__wxAppCode__['pages/my/myCollection/myCollection.json']={"navigationBarTitleText":"我的收藏","usingComponents":{"waterfall-flow":"/components/common/nairenk-waterfall-flow/nairenk-waterfall-flow"}};
__wxAppCode__['pages/my/myCollection/myCollection.wxml']=$gwx('./pages/my/myCollection/myCollection.wxml');

__wxAppCode__['pages/my/personalInfo/personalInfo.json']={"navigationBarTitleText":"我的信息","usingComponents":{"image-cache":"/components/common/image-cache/image-cache","cpimg":"/components/common/cpimg/cpimg"}};
__wxAppCode__['pages/my/personalInfo/personalInfo.wxml']=$gwx('./pages/my/personalInfo/personalInfo.wxml');

__wxAppCode__['pages/my/recharge/recharge.json']={"navigationBarTitleText":"充值优惠","usingComponents":{}};
__wxAppCode__['pages/my/recharge/recharge.wxml']=$gwx('./pages/my/recharge/recharge.wxml');

__wxAppCode__['pages/my/register/register.json']={"navigationBarTitleText":"注册","usingComponents":{}};
__wxAppCode__['pages/my/register/register.wxml']=$gwx('./pages/my/register/register.wxml');

__wxAppCode__['pages/my/retrievePassword/retrievePassword.json']={"navigationBarTitleText":"找回密码","usingComponents":{}};
__wxAppCode__['pages/my/retrievePassword/retrievePassword.wxml']=$gwx('./pages/my/retrievePassword/retrievePassword.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"1bc8":function(n,e,t){"use strict";t.r(e);var o=t("6814");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("3c18");var r,c,a=t("2877"),i=Object(a["a"])(o["default"],r,c,!1,null,null,null);e["default"]=i.exports},"3c18":function(n,e,t){"use strict";var o=t("7e3f"),u=t.n(o);u.a},6814:function(n,e,t){"use strict";t.r(e);var o=t("df90"),u=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=u.a},"7cb2":function(n,e,t){"use strict";(function(n){t("d1f0"),t("921b");var e=r(t("66fd")),o=r(t("1bc8")),u=r(t("6a19"));function r(n){return n&&n.__esModule?n:{default:n}}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){a(n,e,t[e])})}return n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default.config.productionTip=!1,e.default.prototype.$util=u.default,o.default.mpType="app";var i=function(){return t.e("components/common/loading/loading").then(t.bind(null,"1078"))};e.default.component("loading",i);var l=function(){return t.e("components/common/image-cache/image-cache").then(t.bind(null,"d613"))};e.default.component("image-cache",l);var f=function(){return t.e("components/current/video-cache/video-cache").then(t.bind(null,"1936"))};e.default.component("video-cache",f);var d=function(){return t.e("components/current/video-play/video-play").then(t.bind(null,"8779"))};e.default.component("video-play",d);var s=function(){return t.e("components/common/chunLei-modal/chunLei-modal").then(t.bind(null,"c1ab"))};e.default.component("chunLei-modal",s);var p=function(){return t.e("components/common/cpimg/cpimg").then(t.bind(null,"caa9"))};e.default.component("cpimg",p);var m=new e.default(c({},o.default));n(m).$mount()}).call(this,t("6e42")["createApp"])},"7e3f":function(n,e,t){},df90:function(n,e,t){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function c(n,e,t,o,u,r,c){try{var a=n[r](c),i=a.value}catch(l){return void t(l)}a.done?e(i):Promise.resolve(i).then(o,u)}function a(n){return function(){var e=this,t=arguments;return new Promise(function(o,u){var r=n.apply(e,t);function a(n){c(r,o,u,a,i,"next",n)}function i(n){c(r,o,u,a,i,"throw",n)}a(void 0)})}}var i={onLaunch:function(){console.log(n("App Launch"," at App.vue:4")),this.checkVersion()},onShow:function(){},onHide:function(){},methods:{judgeUpgrade:function(n,e){return Number(n[0])>Number(e[0])||Number(n[0])===Number(e[0])&&(Number(n[1])>Number(e[1])||Number(n[1])===Number(e[1])&&Number(n[2])>Number(e[2]))},checkVersion:function(){var e=a(u.default.mark(function e(){var t,r,c,a,i,l,f,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this,r=plus.os.name,c=plus.runtime.version,c=c.split(".").join(""),a=1,"iOS"===r&&(a=0),e.next=8,this.$util.request({requestUrl:"api/versions",data:{checkVersion:!0,platform:a}});case 8:i=e.sent,console.log(n("查询最新版本：",i," at App.vue:49")),i&&1===i.data.data[0].length&&(l=i.data.data[0][0],f=l.realAppVersion.split("."),d=this.judgeUpgrade(f,c),d&&(1===l.allUpdate?o.showModal({title:"升级",content:"检测到有新版本，是否更新",success:function(n){n.confirm&&plus.runtime.openURL(l.downloadUrl)}}):t.downLoad(l.downloadUrl)));case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),downLoad:function(e){o.downloadFile({url:e,success:function(e){200===e.statusCode&&plus.runtime.install(e.tempFilePath,{force:!1},function(){o.showModal({title:"升级",content:"新版本已更新，重启生效，是否立即重启",success:function(n){n.confirm&&plus.runtime.restart()}})},function(e){console.log(n(e," at App.vue:97"))})},fail:function(n){}})}}};e.default=i}).call(this,t("0de9")["default"],t("6e42")["default"])}},[["7cb2","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var t, r, i = n[0], l = n[1], m = n[2], u = 0, p = []; u < i.length; u++) {
      r = i[u], c[r] && p.push(c[r][0]), c[r] = 0;
    }

    for (t in l) {
      Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
    }

    s && s(n);

    while (p.length) {
      p.shift()();
    }

    return a.push.apply(a, m || []), o();
  }

  function o() {
    for (var e, n = 0; n < a.length; n++) {
      for (var o = a[n], t = !0, r = 1; r < o.length; r++) {
        var i = o[r];
        0 !== c[i] && (t = !1);
      }

      t && (a.splice(n--, 1), e = l(l.s = o[0]));
    }

    return e;
  }

  var t = {},
      r = {
    "common/runtime": 0
  },
      c = {
    "common/runtime": 0
  },
      a = [];

  function i(e) {
    return l.p + "" + e + ".js";
  }

  function l(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, l), o.l = !0, o.exports;
  }

  l.e = function (e) {
    var n = [],
        o = {
      "components/common/chunLei-modal/chunLei-modal": 1,
      "components/common/cpimg/cpimg": 1,
      "components/common/image-cache/image-cache": 1,
      "components/common/loading/loading": 1,
      "components/current/video-cache/video-cache": 1,
      "components/common/nairenk-waterfall-flow/nairenk-waterfall-flow": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && o[e] && n.push(r[e] = new Promise(function (n, o) {
      for (var t = ({
        "components/common/chunLei-modal/chunLei-modal": "components/common/chunLei-modal/chunLei-modal",
        "components/common/cpimg/cpimg": "components/common/cpimg/cpimg",
        "components/common/image-cache/image-cache": "components/common/image-cache/image-cache",
        "components/common/loading/loading": "components/common/loading/loading",
        "components/current/video-cache/video-cache": "components/current/video-cache/video-cache",
        "components/current/video-play/video-play": "components/current/video-play/video-play",
        "components/common/nairenk-waterfall-flow/nairenk-waterfall-flow": "components/common/nairenk-waterfall-flow/nairenk-waterfall-flow"
      }[e] || e) + ".wxss", c = l.p + t, a = document.getElementsByTagName("link"), i = 0; i < a.length; i++) {
        var m = a[i],
            u = m.getAttribute("data-href") || m.getAttribute("href");
        if ("stylesheet" === m.rel && (u === t || u === c)) return n();
      }

      var p = document.getElementsByTagName("style");

      for (i = 0; i < p.length; i++) {
        m = p[i], u = m.getAttribute("data-href");
        if (u === t || u === c) return n();
      }

      var s = document.createElement("link");
      s.rel = "stylesheet", s.type = "text/css", s.onload = n, s.onerror = function (n) {
        var t = n && n.target && n.target.src || c,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
        a.request = t, delete r[e], s.parentNode.removeChild(s), o(a);
      }, s.href = c;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(s);
    }).then(function () {
      r[e] = 0;
    }));
    var t = c[e];
    if (0 !== t) if (t) n.push(t[2]);else {
      var a = new Promise(function (n, o) {
        t = c[e] = [n, o];
      });
      n.push(t[2] = a);
      var m,
          u = document.createElement("script");
      u.charset = "utf-8", u.timeout = 120, l.nc && u.setAttribute("nonce", l.nc), u.src = i(e), m = function m(n) {
        u.onerror = u.onload = null, clearTimeout(p);
        var o = c[e];

        if (0 !== o) {
          if (o) {
            var t = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + t + ": " + r + ")");
            a.type = t, a.request = r, o[1](a);
          }

          c[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        m({
          type: "timeout",
          target: u
        });
      }, 12e4);
      u.onerror = u.onload = m, document.head.appendChild(u);
    }
    return Promise.all(n);
  }, l.m = e, l.c = t, l.d = function (e, n, o) {
    l.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, n) {
    if (1 & n && (e = l(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (l.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var t in e) {
      l.d(o, t, function (n) {
        return e[n];
      }.bind(null, t));
    }
    return o;
  }, l.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(n, "a", n), n;
  }, l.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, l.p = "/", l.oe = function (e) {
    throw console.error(e), e;
  };
  var m = global["webpackJsonp"] = global["webpackJsonp"] || [],
      u = m.push.bind(m);
  m.push = n, m = m.slice();

  for (var p = 0; p < m.length; p++) {
    n(m[p]);
  }

  var s = u;
  o();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"25a7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__E150125"};e.default=r},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"5a73":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index/index":{navigationBarTitleText:"MX美甲",enablePullDownRefresh:!0},"pages/my/login/login":{navigationBarTitleText:"登录"},"pages/color/color/color":{navigationBarTitleText:"色板",enablePullDownRefresh:!0},"pages/category/category/category":{navigationBarTitleText:"类别",enablePullDownRefresh:!0},"pages/my/my/my":{navigationBarTitleText:"我",enablePullDownRefresh:!0},"pages/index/productList/productList":{},"pages/my/recharge/recharge":{navigationBarTitleText:"充值优惠"},"pages/my/myCollection/myCollection":{navigationBarTitleText:"我的收藏"},"pages/index/productDetail/productDetail":{navigationBarTitleText:"详情"},"pages/my/about/about":{navigationBarTitleText:"关于"},"pages/my/moreResource/moreResource":{navigationBarTitleText:"更多美甲款式"},"pages/my/register/register":{navigationBarTitleText:"注册"},"pages/my/retrievePassword/retrievePassword":{navigationBarTitleText:"找回密码"},"pages/my/personalInfo/personalInfo":{navigationBarTitleText:"我的信息"},"pages/my/masterWeixin/masterWeixin":{navigationBarTitleText:"加微信"}},globalStyle:{navigationBarTextStyle:"black",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=r},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var g=y("key,ref,slot,slot-scope,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,O=w(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),k=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/\B([A-Z])/g,x=w(function(t){return t.replace(A,"-$1").toLowerCase()});function S(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function j(t,e){return t.bind(e)}var E=Function.prototype.bind?j:S;function D(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function T(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function I(t,e,n){}var C=function(t,e,n){return!1},N=function(t){return t};function R(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return R(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return R(t[n],e[n])})}catch(c){return!1}}function B(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function L(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var M=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:C,isReservedAttr:C,isUnknownElement:C,getTagNamespace:I,parsePlatformTagName:N,mustUseProp:C,async:!0,_lifecycleHooks:U},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+F.source+".$_\\d]");function J(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,W="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(eo){}var ot=function(){return void 0===G&&(G=!K&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},it=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=I,ft=0,lt=function(){this.id=ft++,this.subs=[]};function pt(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function ht(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){_(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var dt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var yt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function gt(t){return new dt(void 0,void 0,void 0,String(t))}function _t(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=mt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var $t=Object.getOwnPropertyNames(bt),Ot=!0;function kt(t){Ot=t}var At=function(t){this.value=t,this.dep=new lt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(W?t.push!==t.__proto__.push?St(t,bt,$t):xt(t,bt):St(t,bt,$t),this.observeArray(t)):this.walk(t)};function xt(t,e){t.__proto__=e}function St(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function jt(t,e){var n;if(u(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:Ot&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function Et(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&jt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Tt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&jt(e),i.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Et(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Pt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Tt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Tt(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Et(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)jt(t[e])};var It=V.optionMergeStrategies;function Ct(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&Ct(r,o):Dt(t,n,o));return t}function Nt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Ct(r,o):o}:e?t?function(){return Ct("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Bt(n):n}function Bt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Lt(t,e,n,r){var o=Object.create(t||null);return e?P(o,e):o}It.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},U.forEach(function(t){It[t]=Rt}),M.forEach(function(t){It[t+"s"]=Lt}),It.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in P(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},It.props=It.methods=It.inject=It.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return P(o,t),e&&P(o,e),o},It.provide=Nt;var Mt=function(t,e){return void 0===e?t:e};function Ut(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=O(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=O(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function Vt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?P({from:i},a):{from:a}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function qt(t,e,n){if("function"===typeof e&&(e=e.options),Ut(e,n),Vt(e,n),Ft(e),!e._base&&(e.extends&&(t=qt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=qt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=It[r]||Mt;a[r]=o(t[r],e[r],n,r)}return a}function Ht(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=O(n);if(b(o,i))return o[i];var a=k(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function zt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Kt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===x(t)){var u=Kt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Jt(r,o,t);var c=Ot;kt(!0),jt(a),kt(c)}return a}function Jt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Gt(e.type)?r.call(t):r}}function Gt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Wt(t,e){return Gt(t)===Gt(e)}function Kt(t,e){if(!Array.isArray(e))return Wt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Wt(e[n],t))return n;return-1}function Xt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(eo){Zt(eo,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{ht()}}function Yt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Xt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(eo){Xt(eo,r,o)}return i}function Zt(t,e,n){if(V.errorHandler)try{return V.errorHandler.call(null,t,e,n)}catch(eo){eo!==t&&Qt(eo,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!K&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(I)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(eo){Xt(eo,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function fe(t){le(t,ce),ce.clear()}function le(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)le(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Yt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Yt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,a,s){var u,c,f,l;for(u in t)c=t[u],f=e[u],l=pe(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=he(c,s)),i(l.once)&&(c=t[u]=a(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(l=pe(u),o(l.name,e[u],l.capture))}function ve(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in i){var f=x(c);ye(a,u,c,f,!0)||ye(a,s,c,f,!1)}return a}}function ye(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ge(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return s(t)?[gt(t)]:Array.isArray(t)?be(t):void 0}function me(t){return o(t)&&o(t.text)&&a(t.isComment)}function be(t,e){var n,a,u,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=f.length-1,c=f[u],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(c)&&(f[u]=gt(c.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?me(c)?f[u]=gt(c.text+a):""!==a&&f.push(gt(a)):me(a)&&me(c)?f[u]=gt(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function $e(t){var e=Oe(t.$options.inject,t);e&&(kt(!1),Object.keys(e).forEach(function(n){Et(t,n,e[n])}),kt(!0))}function Oe(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function ke(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(Ae)&&delete n[c];return n}function Ae(t){return t.isComment&&!t.asyncFactory||" "===t.text}function xe(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=Se(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=je(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",a),H(o,"$key",s),H(o,"$hasNormal",i),o}function Se(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function je(t,e){return function(){return t[e]}}function Ee(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function De(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=P(P({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Pe(t){return Ht(this.$options,"filters",t,!0)||N}function Te(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,o){var i=V.keyCodes[e]||n;return o&&r&&!V.keyCodes[e]?Te(o,r):i?Te(i,t):r?x(r)!==e:void 0}function Ce(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=T(n));var a=function(a){if("class"===a||"style"===a||g(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||V.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=O(a),c=x(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ne(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Be(r,"__static__"+t,!1),r)}function Re(t,e,n){return Be(t,"__once__"+e+(n?"_"+n:""),!0),t}function Be(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Le(t[r],e+"_"+r,n);else Le(t,e,n)}function Le(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Me(t,e){if(e)if(f(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ue(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ue(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Ve(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function qe(t){t._o=Re,t._n=v,t._s=d,t._l=Ee,t._t=De,t._q=R,t._i=B,t._m=Ne,t._f=Pe,t._k=Ie,t._b=Ce,t._v=gt,t._e=yt,t._u=Ue,t._g=Me,t._d=Ve,t._p=Fe}function He(t,e,r,o,a){var s,u=this,c=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Oe(c.inject,o),this.slots=function(){return u.$slots||xe(t.scopedSlots,u.$slots=ke(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return xe(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=xe(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=rn(s,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,l)}}function ze(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var f in c)u[f]=zt(f,c,e||n);else o(r.attrs)&&Ge(u,r.attrs),o(r.props)&&Ge(u,r.props);var l=new He(r,u,a,i,t),p=s.render.call(null,l._c,l);if(p instanceof dt)return Je(p,r,l.parent,s,l);if(Array.isArray(p)){for(var h=_e(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Je(h[v],r,l.parent,s,l);return d}}function Je(t,e,n,r,o){var i=_t(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Ge(t,e){for(var n in e)t[O(n)]=e[n]}qe(He.prototype);var We={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;We.prepatch(n,n)}else{var r=t.componentInstance=Ye(t,On);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Sn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Pn(n,"mounted")),t.data.keepAlive&&(e._isMounted?qn(n):En(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Dn(e,!0):e.$destroy())}},Ke=Object.keys(We);function Xe(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=dn(f,c),void 0===t))return hn(f,e,n,a,s);e=e||{},pr(t),o(e.model)&&tn(t.options,e);var l=ve(e,t,s);if(i(t.options.functional))return ze(t,l,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:a},f);return v}}}function Ye(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var r=Ke[n],o=e[r],i=We[r];o===i||o&&o._merged||(e[r]=o?Qe(i,o):i)}}function Qe(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var en=1,nn=2;function rn(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=nn),on(t,e,n,r,o)}function on(t,e,n,r,i){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===nn?r=_e(r):i===en&&(r=ge(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||V.getTagNamespace(e),a=V.isReservedTag(e)?new dt(V.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Ht(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Xe(u,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&an(a,s),o(n)&&sn(n),a):yt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&an(u,e,n)}}function sn(t){u(t.style)&&fe(t.style),u(t.class)&&fe(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=ke(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return rn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return rn(t,e,n,r,o,!0)};var i=r&&r.data;Et(t,"$attrs",i&&i.attrs||n,null,!0),Et(t,"$listeners",e._parentListeners||n,null,!0)}var cn,fn=null;function ln(t){qe(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=xe(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(eo){Xt(eo,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=yt()),t.parent=o,t}}function pn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=yt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function dn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return _(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},p=L(function(n){t.resolved=pn(n,e),s?a.length=0:l(!0)}),d=L(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(p,d);return u(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),o(v.error)&&(t.errorComp=pn(v.error,e)),o(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||vn(n)))return n}}function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function _n(t,e){cn.$on(t,e)}function mn(t,e){cn.$off(t,e)}function bn(t,e){var n=cn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function wn(t,e,n){cn=t,de(e,n||{},_n,mn,bn,t),cn=void 0}function $n(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var r=D(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Yt(n[i],e,r,e,o)}return e}}var On=null;function kn(t){var e=On;return On=t,function(){On=e}}function An(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function xn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=kn(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Sn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){kt(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=t.$options.props;f[h]=zt(h,d,e,t)}kt(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,wn(t,r,v),c&&(t.$slots=ke(i,o.context),t.$forceUpdate())}function jn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function En(t,e){if(e){if(t._directInactive=!1,jn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)En(t.$children[n]);Pn(t,"activated")}}function Dn(t,e){if((!e||(t._directInactive=!0,!jn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Pn(t,"deactivated")}}function Pn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Yt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Tn=[],In=[],Cn={},Nn=!1,Rn=!1,Bn=0;function Ln(){Bn=Tn.length=In.length=0,Cn={},Nn=Rn=!1}var Mn=Date.now;if(K&&!Q){var Un=window.performance;Un&&"function"===typeof Un.now&&Mn()>document.createEvent("Event").timeStamp&&(Mn=function(){return Un.now()})}function Vn(){var t,e;for(Mn(),Rn=!0,Tn.sort(function(t,e){return t.id-e.id}),Bn=0;Bn<Tn.length;Bn++)t=Tn[Bn],t.before&&t.before(),e=t.id,Cn[e]=null,t.run();var n=In.slice(),r=Tn.slice();Ln(),Hn(n),Fn(r),it&&V.devtools&&it.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Pn(r,"updated")}}function qn(t){t._inactive=!1,In.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,En(t[e],!0)}function zn(t){var e=t.id;if(null==Cn[e]){if(Cn[e]=!0,Rn){var n=Tn.length-1;while(n>Bn&&Tn[n].id>t.id)n--;Tn.splice(n+1,0,t)}else Tn.push(t);Nn||(Nn=!0,ue(Vn))}}var Jn=0,Gn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Jn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=J(e),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};Gn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(eo){if(!this.user)throw eo;Xt(eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),ht(),this.cleanupDeps()}return t},Gn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Gn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zn(this)},Gn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(eo){Xt(eo,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Gn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Wn={enumerable:!0,configurable:!0,get:I,set:I};function Kn(t,e,n){Wn.get=function(){return this[e][n]},Wn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Wn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Yn(t,e.props),e.methods&&ir(t,e.methods),e.data?Zn(t):jt(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Yn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||kt(!1);var a=function(i){o.push(i);var a=zt(i,e,n,t);Et(r,i,a),i in t||Kn(t,"_props",i)};for(var s in e)a(s);kt(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||q(i)||Kn(t,"_data",i)}jt(e,!0)}function Qn(t,e){pt();try{return t.call(e,e)}catch(eo){return Xt(eo,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Gn(t,a||I,I,tr)),o in t||nr(t,o,i)}}function nr(t,e,n){var r=!ot();"function"===typeof n?(Wn.get=r?rr(e):or(n),Wn.set=I):(Wn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):I,Wn.set=n.set||I),Object.defineProperty(t,e,Wn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?I:E(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)sr(t,n,r[o]);else sr(t,n,r)}}function sr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return sr(r,t,e,n);n=n||{},n.user=!0;var o=new Gn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Xt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var cr=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?lr(e,t):e.$options=qt(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,An(e),gn(e),un(e),Pn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&$e(e),Xn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&Pn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function lr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&P(t.extendOptions,o),e=t.options=qt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=qt(this.options,t),this}}function gr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=qt(n.options,t),a["super"]=n,a.options.props&&_r(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),o[r]=a,a}}function _r(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wr(t){return t&&(t.Ctor.options.name||t.tag)}function $r(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Or(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=wr(a.componentOptions);s&&!e(s)&&kr(n,i,r,o)}}}function kr(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,_(n,e)}fr(dr),ur(dr),$n(dr),xn(dr),ln(dr);var Ar=[String,RegExp,Array],xr={name:"keep-alive",abstract:!0,props:{include:Ar,exclude:Ar,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)kr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Or(t,function(t){return $r(e,t)})}),this.$watch("exclude",function(e){Or(t,function(t){return!$r(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=wr(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!$r(i,r))||a&&r&&$r(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,_(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&kr(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Sr={KeepAlive:xr};function jr(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:P,mergeOptions:qt,defineReactive:Et},t.set=Dt,t.delete=Pt,t.nextTick=ue,t.observable=function(t){return jt(t),t},t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,Sr),vr(t),yr(t),gr(t),br(t)}jr(dr),Object.defineProperty(dr.prototype,"$isServer",{get:ot}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:He}),dr.version="2.6.10";var Er="[object Array]",Dr="[object Object]";function Pr(t,e){var n={};return Tr(t,e),Ir(t,e,"",n),n}function Tr(t,e){if(t!==e){var n=Nr(t),r=Nr(e);if(n==Dr&&r==Dr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Tr(i,e[o])}}else n==Er&&r==Er&&t.length>=e.length&&e.forEach(function(e,n){Tr(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var o=Nr(t),i=Nr(e);if(o==Dr)if(i!=Dr||Object.keys(t).length<Object.keys(e).length)Cr(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Nr(i),u=Nr(a);if(s!=Er&&s!=Dr)i!=e[o]&&Cr(r,(""==n?"":n+".")+o,i);else if(s==Er)u!=Er?Cr(r,(""==n?"":n+".")+o,i):i.length<a.length?Cr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ir(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Dr)if(u!=Dr||Object.keys(i).length<Object.keys(a).length)Cr(r,(""==n?"":n+".")+o,i);else for(var c in i)Ir(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==Er?i!=Er?Cr(r,n,t):t.length<e.length?Cr(r,n,t):t.forEach(function(t,o){Ir(t,e[o],n+"["+o+"]",r)}):Cr(r,n,t)}}function Cr(t,e,n){t[e]=n}function Nr(t){return Object.prototype.toString.call(t)}function Rr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Br(t){return Tn.find(function(e){return t._watcher===e})}function Lr(t,e){if(!t.__next_tick_pending&&!Br(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(eo){Xt(eo,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Mr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ur=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Mr(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Pr(o,i);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Rr(n)})):Rr(this)}};function Vr(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Vr),t.$options.render||(t.$options.render=Vr),"mp-toutiao"!==t.mpHost&&Pn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Gn(t,r,I,{before:function(){t._isMounted&&!t._isDestroyed&&Pn(t,"beforeUpdate")}},!0),n=!1,t}function qr(t,e){return o(t)||o(e)?Hr(t,zr(e)):""}function Hr(t,e){return t?e?t+" "+e:t:e||""}function zr(t){return Array.isArray(t)?Jr(t):u(t)?Gr(t):"string"===typeof t?t:""}function Jr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=zr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Gr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Wr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Kr(t){return Array.isArray(t)?T(t):"string"===typeof t?Wr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Yr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Lr(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=$e,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Yt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yr(e||this,t)},t.prototype.__get_class=function(t,e){return qr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Kr(t),r=e?P(e,n):n;return Object.keys(r).map(function(t){return x(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var Qr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Qr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Qr}dr.prototype.__patch__=Ur,dr.prototype.$mount=function(t,e){return Fr(this,t,e)},to(dr),Zr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6a19":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,s,"next",t)}function s(t){c(i,r,o,a,s,"throw",t)}a(void 0)})}}var l="http://180.76.175.210:81/";function p(t){return h.apply(this,arguments)}function h(){return h=f(r.default.mark(function e(n){var o,a,s,u,c,f,p,h;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=n.requestUrl,a=n.method,s=void 0===a?"GET":a,u=n.data,c=void 0===u?{}:u,e.next=3,t.request({url:l+o,method:s,data:c});case 3:if(f=e.sent,p=i(f,2),p[0],h=p[1],void 0!==h){e.next=12;break}return d("连接服务失败"),e.abrupt("return",!1);case 12:if(200!=h.statusCode){e.next=18;break}if(1!==h.data.code){e.next=17;break}return e.abrupt("return",h);case 17:d(h.data.message);case 18:if(400!=h.statusCode){e.next=21;break}return d("参数错误"),e.abrupt("return",!1);case 21:if(404!=h.statusCode){e.next=24;break}return d("请求地址错误"),e.abrupt("return",!1);case 24:if(415!=h.statusCode){e.next=27;break}return d("请求方式错误"),e.abrupt("return",!1);case 27:if(500!=h.statusCode){e.next=30;break}return d("服务器内部错误"),e.abrupt("return",!1);case 30:case"end":return e.stop()}},e,this)})),h.apply(this,arguments)}function d(e){t.showToast({title:e,icon:"none"})}function v(){return y.apply(this,arguments)}function y(){return y=f(r.default.mark(function e(){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){t.chooseImage({count:1,sizeType:["compressed"],success:function(t){e(t.tempFilePaths[0])}})}));case 1:case"end":return e.stop()}},e,this)})),y.apply(this,arguments)}function g(t){return _.apply(this,arguments)}function _(){return _=f(r.default.mark(function e(n){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,r){t.uploadFile({url:"".concat(l,"api/upload"),filePath:n,fileType:"image",name:"file",success:function(t){d("上传成功"),e(JSON.parse(t.data).data.url)},fail:function(t){d("上传失败")}})}));case 1:case"end":return e.stop()}},e,this)})),_.apply(this,arguments)}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e+="?params="+JSON.stringify(n),t.navigateTo({url:e})}function b(){m("/pages/my/login/login")}function w(t){var e={productDetail:t};m("/pages/index/productDetail/productDetail",e)}var $={url:l,request:p,toast:d,selectImage:v,uploadImage:g,navigateTo:m,toLogin:b,toProductDetail:w};e.default=$}).call(this,n("6e42")["default"])},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=ke,e.createPage=Oe,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return h(t)||p(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function g(t){return"string"===typeof t}function _(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,O=w(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),k=["invoke","success","fail","complete","returnValue"],A={},x={};function S(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?j(n):n}function j(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function E(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function D(t,e){Object.keys(e).forEach(function(n){-1!==k.indexOf(n)&&y(e[n])&&(t[n]=S(t[n],e[n]))})}function P(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==k.indexOf(n)&&y(e[n])&&E(t[n],e[n])})}function T(t,e){"string"===typeof t&&_(e)?D(x[t]||(x[t]={}),e):_(t)&&D(A,t)}function I(t,e){"string"===typeof t?_(e)?P(x[t],e):delete x[t]:_(t)&&P(A,t)}function C(t){return function(e){return t(e)||e}}function N(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function R(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(C(o));else{var i=o(e);if(N(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){R(t[n],e).then(function(t){return y(r)&&r(t)||t})}}}),e}function L(t,e){var n=[];Array.isArray(A.returnValue)&&n.push.apply(n,f(A.returnValue));var r=x[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function M(t){var e=Object.create(null);Object.keys(A).forEach(function(t){"returnValue"!==t&&(e[t]=A[t].slice())});var n=x[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function U(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=M(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=R(a.invoke,n);return s.then(function(t){return e.apply(void 0,[B(a,t)].concat(o))})}return e.apply(void 0,[B(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var V={returnValue:function(t){return N(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,q=/^create|Manager$/,H=/^on/;function z(t){return q.test(t)}function J(t){return F.test(t)}function G(t){return H.test(t)&&"onPush"!==t}function W(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(z(t)||J(t)||G(t))}function X(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return y(n.success)||y(n.fail)||y(n.complete)?L(t,U.apply(void 0,[t,e,n].concat(o))):L(t,W(new Promise(function(r,i){U.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Q="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&Q?.5:1:t<0?-n:n}var ot={promiseInterceptor:V},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:T,removeInterceptor:I}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(pt(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(e)){var i=!0===o?e:{};for(var a in y(n)&&(n=n(e,i)||{}),e)if(m(n,a)){var s=n[a];y(s)&&(s=s(e[a],e,i)),s?g(s)?i[s]=e[a]:_(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return y(e)&&(e=ft(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var o=n;y(n)&&(o=n(e)),e=lt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return J(t)?pt(t,a,o.returnValue,z(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(o),y(r)&&r(o)}}vt.forEach(function(t){dt[t]=yt(t)});var gt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function _t(t,e,n){return t[e].apply(t,n)}function mt(){return _t(gt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return _t(gt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return _t(gt(),"$once",Array.prototype.slice.call(arguments))}function $t(){return _t(gt(),"$emit",Array.prototype.slice.call(arguments))}var Ot=Object.freeze({$on:mt,$off:bt,$once:wt,$emit:$t});function kt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function At(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;kt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function xt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&At(e),e}var St=Object.freeze({getSubNVueById:xt,requireNativePlugin:kt}),jt=Page,Et=Component,Dt=/:/g,Pt=w(function(t){return O(t.replace(Dt,"-"))});function Tt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Pt(n)].concat(o))}}}function It(t,e){var n=e[t];e[t]=n?function(){Tt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Tt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("onLoad",t),jt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("created",t),Et(t)};var Ct=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Rt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Rt(t,e)}):void 0}function Bt(t,e,n){e.forEach(function(e){Rt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Lt(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Mt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ut(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Vt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return _(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function qt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(r)&&r.props&&a.push(e({properties:Jt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){_(t)&&t.props&&a.push(e({properties:Jt(t.props,!0)}))}),a}function zt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Jt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:qt(t)}}):_(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(_(r)){var o=r["default"];y(o)&&(o=o()),r.type=zt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:o,observer:qt(e)}}else{var i=zt(e,r);n[e]={type:-1!==Ft.indexOf(i)?i:null,observer:qt(e)}}}),n}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),_(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Wt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):_(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Wt(t,e)}),r}function Xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Kt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Xt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Gt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Qt;r=s?r.slice(1):r;var u=r.charAt(0)===Zt;r=u?r.slice(1):r,a&&te(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;if(o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent),"$emit"===r)return void o.$emit.apply(o,Yt(e.$vm,t,n[1],n[2],s,r));var a=o[r];if(!y(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Yt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Nt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};i.globalData=t.$options.globalData||{};var a=t.$options.methods;return a&&Object.keys(a).forEach(function(t){i[t]=a[t]}),Bt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function le(t){return re(t,{mocks:oe,initRefs:ce})}var pe=["onUniNViewMessage"];function he(t){var e=le(t);return Bt(e,pe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Lt(r.default,t),s=i(a,2),u=s[0],c=s[1],f={multipleSlots:!0,addGlobalClass:!0},l={options:f,data:Vt(c,r.default.prototype),behaviors:Ht(c,ae),properties:Jt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ut(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Mt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){l.methods[t]=function(e){return this.$vm[t](e)}}),n?l:[l,u]}function ye(t){return ve(t,{isPage:se,initRelation:ue})}function ge(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var _e=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ge(t);return Bt(n.methods,_e,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ue})}_e.push.apply(_e,Ct);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $e(t){var e=be(t);return Bt(e.methods,we),e}function Oe(t){return Component($e(t))}function ke(t){return Component(ge(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Ae={};Object.keys(it).forEach(function(t){Ae[t]=it[t]}),Object.keys(Ot).forEach(function(t){Ae[t]=Ot[t]}),Object.keys(St).forEach(function(t){Ae[t]=X(t,St[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Ae[t]=X(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Ae,t.UniEmitter=Ot),wx.createApp=de,wx.createPage=Oe,wx.createComponent=ke;var xe=Ae,Se=xe;e.default=Se}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_id:"@dcloudio/uni-stat@2.0.0-v3-24020191018001",_inBundle:!1,_integrity:"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"^2.0.0-alpha-24420191128001",saveSpec:null,fetchSpec:"^2.0.0-alpha-24420191128001"},_requiredBy:["/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz",_shasum:"6ef04326cc0b945726413eebe442ab8f47c7536c",_spec:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-v3-24020191018001"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var l=e.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,y=10,g="__DC_STAT_UUID",_="__DC_UUID_VALUE";function m(){var e="";if("n"===O()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(g)}catch(n){e=_}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(g,e)}catch(n){t.setStorageSync(g,_)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},$=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},k=function(){var e="";return"wx"!==O()&&"qq"!==O()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},A=function(){return"n"===O()?plus.runtime.version:""},x=function(){var t=O(),e="";return"n"===t&&(e=plus.runtime.channel),e},S=function(e){var n=O(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},j="First__Visit__Time",E="Last__Visit__Time",D=function(){var e=t.getStorageSync(j),n=0;return e?n=e:(n=$(),t.setStorageSync(j,n),t.removeStorageSync(E)),n},P=function(){var e=t.getStorageSync(E),n=0;return n=e||"",t.setStorageSync(E,$()),n},T="__page__residence__time",I=0,C=0,N=function(){return I=$(),"n"===O()&&t.setStorageSync(T,$()),I},R=function(){return C=$(),"n"===O()&&(I=t.getStorageSync(T)),C-I},B="Total__Visit__Count",L=function(){var e=t.getStorageSync(B),n=1;return e&&(n=e,n++),t.setStorageSync(B,n),n},M=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},U=0,V=0,F=function(){var t=(new Date).getTime();return U=t,V=0,t},q=function(){var t=(new Date).getTime();return V=t,t},H=function(t){var e=0;if(0!==U&&(e=V-U),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},z=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===O()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},J=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===O()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},G=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},W=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("5a73").default,X=n("25a7").default||n("25a7"),Y=t.getSystemInfoSync(),Z=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:O(),mpn:k(),ak:X.appid,usv:l,v:A(),ch:x(),cn:"",pn:"",ct:"",t:$(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){q();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,q();var n=H();F();var r=J(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=J(this),e=z();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);q(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){q();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=$(),this.statData.sc=S(t.scene),this.statData.fvts=D(),this.statData.lvts=P(),this.statData.tvc=L(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:$(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=$(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===O()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===O()&&t.setStorageSync("__UNI__STAT__DATA",a),!(R()<y)||n){var s=this._reportingRequestData;"n"===O()&&(s=t.getStorageSync("__UNI__STAT__DATA")),N();var u=[],c=[],f=[],p=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?u.push(n):3===t?f.push(n):c.push(n)})};for(var h in s)p(h);u.push.apply(u,c.concat(f));var d={usv:l,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===O()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(M(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){W(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return u(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,N(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,G(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,G(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"===typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{f=e.regeneratorRuntime=c?t.exports:{},f.wrap=b;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,_=g&&g(g(T([])));_&&_!==r&&o.call(_,a)&&(y=_);var m=k.prototype=$.prototype=Object.create(y);O.prototype=m.constructor=k,k.constructor=O,k[u]=O.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},A(x.prototype),x.prototype[s]=function(){return this},f.AsyncIterator=x,f.async=function(t,e,n,r){var o=new x(b(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},A(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),D(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;D(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof $?e:$,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=S(t,n,a),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function $(){}function O(){}function k(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function x(t){function e(n,r,i,a){var s=w(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function S(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return I()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=w(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d1f0:function(t,e,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/common/chunLei-modal/chunLei-modal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/chunLei-modal/chunLei-modal.js';

define('components/common/chunLei-modal/chunLei-modal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/chunLei-modal/chunLei-modal"], {
  "30cb": function cb(t, n, e) {
    "use strict";

    var a = e("f136"),
        i = e.n(a);
    i.a;
  },
  "621e": function e(t, n, _e) {
    "use strict";

    _e.r(n);

    var a = _e("ede3"),
        i = _e.n(a);

    for (var r in a) {
      "default" !== r && function (t) {
        _e.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    n["default"] = i.a;
  },
  be54: function be54(t, n, e) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return a;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  c1ab: function c1ab(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("be54"),
        i = e("621e");

    for (var r in i) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(r);
    }

    e("30cb");
    var o = e("2877"),
        u = Object(o["a"])(i["default"], a["a"], a["b"], !1, null, null, null);
    n["default"] = u.exports;
  },
  ede3: function ede3(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = i(e("a34a"));

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function r(t, n, e, a, i, r, o) {
        try {
          var u = t[r](o),
              s = u.value;
        } catch (c) {
          return void e(c);
        }

        u.done ? n(s) : Promise.resolve(s).then(a, i);
      }

      function o(t) {
        return function () {
          var n = this,
              e = arguments;
          return new Promise(function (a, i) {
            var o = t.apply(n, e);

            function u(t) {
              r(o, a, i, u, s, "next", t);
            }

            function s(t) {
              r(o, a, i, u, s, "throw", t);
            }

            u(void 0);
          });
        };
      }

      var u = {
        props: {
          type: {
            type: String,
            default: "default"
          },
          value: {
            type: Boolean,
            default: !1
          },
          maskEnable: {
            type: Boolean,
            default: !0
          },
          mData: {
            type: [Object, Array],
            default: function _default() {}
          },
          nav: {
            type: Boolean,
            default: !0
          },
          navMask: {
            type: Boolean,
            default: !1
          }
        },
        data: function data() {
          return {
            navList: [],
            tabbarList: []
          };
        },
        mounted: function mounted() {
          this.init();
        },
        methods: {
          checkboxChange: function checkboxChange(t) {
            for (var n = this.mData, e = t.detail.value, a = 0, i = n.length; a < i; ++a) {
              var r = n[a];
              e.includes(r.title) ? this.$set(r, "flag", !0) : this.$set(r, "flag", !1);
            }
          },
          inputConfirm: function inputConfirm() {
            this.$emit("onConfirm", this.mData.content);
          },
          tapCancel: function tapCancel() {
            this.$emit("cancel"), this.$emit("input", !1);
          },
          tapConfirm: function tapConfirm(t) {
            this.$emit("onConfirm", t), this.$emit("input", !1);
          },
          tapMask: function tapMask() {
            this.maskEnable && ("multiSelect" == this.type ? this.$emit("onConfirm", this.mData) : this.$emit("cancel", this.mData), this.$emit("input", !1));
          },
          creatPlusMask: function creatPlusMask(t, n, e) {
            for (var a = this, i = 1; i <= 10; i++) {
              var r = new plus.nativeObj.View("nav", {
                top: "0px",
                left: "0px",
                height: "".concat(t, "px"),
                width: "100%"
              });
              r.draw([{
                tag: "rect",
                id: "rect",
                color: "rgba(0,0,0,0.1)",
                position: {
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%"
                }
              }]), r.addEventListener("click", function (t) {
                a.tapMask();
              }, !1);
              var o = new plus.nativeObj.View("tabbar", {
                bottom: "0px",
                left: "0px",
                height: "".concat(n, "px"),
                width: "100%"
              });
              o.draw([{
                tag: "rect",
                id: "rect",
                color: "rgba(0,0,0,0.1)",
                position: {
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%"
                }
              }]), o.addEventListener("click", function (t) {
                a.tapMask();
              }, !1), this.navList.push(r), this.tabbarList.push(o);
            }
          },
          init: function () {
            var n = o(a.default.mark(function n() {
              var e, i, r;
              return a.default.wrap(function (n) {
                while (1) {
                  switch (n.prev = n.next) {
                    case 0:
                      return e = new Promise(function (n, e) {
                        t.getSystemInfo({
                          success: function success(t) {
                            var e;
                            e = t.statusBarHeight + 44, n(e);
                          }
                        });
                      }), n.next = 3, e;

                    case 3:
                      i = n.sent, i = this.nav ? i : 0, r = t.getSystemInfoSync().screenHeight - t.getSystemInfoSync().windowHeight - i, this.creatPlusMask(i, r, .6);

                    case 7:
                    case "end":
                      return n.stop();
                  }
                }
              }, n, this);
            }));

            function e() {
              return n.apply(this, arguments);
            }

            return e;
          }(),
          showPlusMask: function showPlusMask() {
            var t = this,
                n = 0,
                e = setInterval(function () {
              9 == n ? clearInterval(e) : (t.navList[n] && t.navList[n].show(), t.tabbarList[n] && t.tabbarList[n].show(), n++);
            }, 30);
          }
        },
        watch: {
          value: {
            immediate: !0,
            handler: function handler(t, n) {
              if (this.navMask) if (t) this.showPlusMask(.6);else {
                var e = !0,
                    a = !1,
                    i = void 0;

                try {
                  for (var r, o = this.navList[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                    var u = r.value;
                    u.hide();
                  }
                } catch (v) {
                  a = !0, i = v;
                } finally {
                  try {
                    e || null == o.return || o.return();
                  } finally {
                    if (a) throw i;
                  }
                }

                var s = !0,
                    c = !1,
                    l = void 0;

                try {
                  for (var f, h = this.tabbarList[Symbol.iterator](); !(s = (f = h.next()).done); s = !0) {
                    var d = f.value;
                    d.hide();
                  }
                } catch (v) {
                  c = !0, l = v;
                } finally {
                  try {
                    s || null == h.return || h.return();
                  } finally {
                    if (c) throw l;
                  }
                }
              }
            }
          }
        }
      };
      n.default = u;
    }).call(this, e("6e42")["default"]);
  },
  f136: function f136(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/chunLei-modal/chunLei-modal-create-component', {
  'components/common/chunLei-modal/chunLei-modal-create-component': function componentsCommonChunLeiModalChunLeiModalCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c1ab"));
  }
}, [['components/common/chunLei-modal/chunLei-modal-create-component']]]);
});
require('components/common/chunLei-modal/chunLei-modal.js');
__wxRoute = 'components/common/cpimg/cpimg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/cpimg/cpimg.js';

define('components/common/cpimg/cpimg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/cpimg/cpimg"], {
  "2fcc": function fcc(t, e, i) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = [],
          n = "",
          r = 0,
          a = {
        name: "cpimg",
        props: {
          maxWidth: {
            type: Number,
            default: 750
          },
          type: {
            type: String,
            default: "url"
          },
          ql: {
            type: Number,
            default: .92
          },
          src: {
            type: String,
            default: ""
          },
          number: {
            type: Number,
            default: 1
          },
          fixOrientation: {
            type: Boolean,
            default: !0
          },
          size: {
            type: Number,
            default: 5e5
          }
        },
        data: function data() {
          return {
            cWidth: 750,
            cHeight: 750
          };
        },
        onUnload: function onUnload() {},
        methods: {
          _changImg: function _changImg() {
            var e = this;
            "" == e.src ? t.chooseImage({
              count: e.number,
              sizeType: ["compressed"],
              success: function success(t) {
                i = [], n = t.tempFilePaths, r = 0, e._cpImg();
              },
              fail: function fail(t) {
                e._err(t);
              }
            }) : _cpImg(e.src);
          },
          _cpImg: function _cpImg() {
            var e = this,
                i = n[r];

            function a(n, r) {
              var a,
                  s,
                  o = n.width,
                  h = n.height,
                  u = 1,
                  c = 1;
              (r / 1024 >= e.size || n.width >= e.maxWidth) && (n.width >= n.height && n.width >= e.maxWidth ? (n.height = e.maxWidth * n.height / n.width, n.width = e.maxWidth) : n.width < n.height && n.height >= e.maxWidth && (n.width = e.maxWidth * n.width / n.height, n.height = e.maxWidth), u = n.width / o, c = n.height / h), a = o * u, s = h * c;
              var d = t.createCanvasContext("_myCanvas", e);

              if (e.cWidth = n.width, e.cHeight = n.height, e.fixOrientation) {
                var f = n.orientation;
                [5, 6, 7, 8, "right", "left", "right-mirrored", "left-mirrored"].indexOf(f) > -1 && (e.cWidth = n.height, e.cHeight = n.width), 2 == f || "up-mirrored" == f ? (d.translate(a, 0), d.scale(-1, 1)) : 3 == f || "down" == f ? (d.translate(a, s), d.rotate(Math.PI)) : 4 == f || "down-mirrored" == f ? (d.translate(0, s), d.scale(1, -1)) : 5 == f || "right-mirrored" == f ? (d.rotate(.5 * Math.PI), d.scale(1, -1)) : 6 == f || "right" == f ? (d.rotate(.5 * Math.PI), d.translate(0, -s)) : 7 == f || "left-mirrored" == f ? (d.rotate(.5 * Math.PI), d.translate(a, -s), d.scale(-1, 1)) : 8 == f || "left" == f ? (d.rotate(-.5 * Math.PI), d.translate(-a, 0)) : d.translate(0, 0);
              }

              var l = 0;
              l = 10, setTimeout(function () {
                d.drawImage(i, 0, 0, a, s), d.draw(!1, function () {
                  var i = 0;
                  i = 10, setTimeout(function () {
                    t.canvasToTempFilePath({
                      width: Number(e.cWidth),
                      height: Number(e.cHeight),
                      destWidth: Number(e.cWidth),
                      destHeight: Number(e.cHeight),
                      canvasId: "_myCanvas",
                      fileType: "jpg",
                      quality: Number(e.ql),
                      success: function success(t) {
                        if ("base64" == e.type) {
                          plus.io.resolveLocalFileSystemURL(t.tempFilePath, function (t) {
                            t.file(function (t) {
                              var i = new plus.io.FileReader();
                              i.readAsDataURL(t), i.onloadend = function (t) {
                                2 == t.target.readyState ? e._result(t.target.result) : e._err(t);
                              };
                            });
                          }, function (t) {
                            e._err(t);
                          });
                        } else e._result(t.tempFilePath);
                      },
                      fail: function fail(t) {
                        e._err(t);
                      }
                    }, e);
                  }, i);
                });
              }, l);
            }

            t.getImageInfo({
              src: i,
              success: function success(n) {
                t.getFileInfo({
                  filePath: i,
                  success: function success(t) {
                    a(n, t.size);
                  },
                  fail: function fail(t) {
                    e._err(t);
                  }
                });
              },
              fail: function fail(t) {
                e._err(t);
              }
            });
          },
          _reverseImgData: function _reverseImgData(t) {
            for (var e = t.width, i = t.height, n = 0, r = 0; r < i / 2; r++) {
              for (var a = 0; a < 4 * e; a++) {
                n = t.data[r * e * 4 + a], t.data[r * e * 4 + a] = t.data[(i - r - 1) * e * 4 + a], t.data[(i - r - 1) * e * 4 + a] = n;
              }
            }

            return t;
          },
          _getH5ImageInfo: function _getH5ImageInfo(t, e) {
            var i = new Image();
            i.src = t, i.onload = function (i) {
              var n = this,
                  r = new XMLHttpRequest();
              r.open("GET", t, !0), r.responseType = "blob", r.onload = function (t) {
                var i = this;

                if (200 == i.status || 0 === i.status) {
                  var r = new FileReader();
                  r.onload = function (t) {
                    var r = new DataView(this.result);
                    if (65496 != r.getUint16(0, !1)) return e({
                      size: i.response.size,
                      type: i.response.type,
                      width: n.width,
                      height: n.height,
                      orientation: -1
                    });
                    var a = r.byteLength,
                        s = 2;

                    while (s < a) {
                      var o = r.getUint16(s, !1);

                      if (s += 2, 65505 == o) {
                        if (1165519206 != r.getUint32(s += 2, !1)) return e({
                          size: i.response.size,
                          type: i.response.type,
                          width: n.width,
                          height: n.height,
                          orientation: -1
                        });
                        var h = 18761 == r.getUint16(s += 6, !1);
                        s += r.getUint32(s + 4, h);
                        var u = r.getUint16(s, h);
                        s += 2;

                        for (var c = 0; c < u; c++) {
                          if (274 == r.getUint16(s + 12 * c, h)) return e({
                            size: i.response.size,
                            type: i.response.type,
                            width: n.width,
                            height: n.height,
                            orientation: r.getUint16(s + 12 * c + 8, h)
                          });
                        }
                      } else {
                        if (65280 != (65280 & o)) break;
                        s += r.getUint16(s, !1);
                      }
                    }

                    return e({
                      size: i.response.size,
                      type: i.response.type,
                      width: n.width,
                      height: n.height,
                      orientation: -1
                    });
                  }, r.readAsArrayBuffer(i.response);
                }
              }, r.send();
            };
          },
          _result: function _result(t, e) {
            i.push(t), r += 1, n.length - 1 >= r ? this._cpImg() : this.$emit("result", i);
          },
          _err: function _err(t) {
            this.$util.toast("图片压缩处理失败"), this.$emit("err", t);
          }
        }
      };
      e.default = a;
    }).call(this, i("6e42")["default"]);
  },
  "31d2": function d2(t, e, i) {
    "use strict";

    var n = i("3d97"),
        r = i.n(n);
    r.a;
  },
  "3d97": function d97(t, e, i) {},
  5941: function _(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("2fcc"),
        r = i.n(n);

    for (var a in n) {
      "default" !== a && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(a);
    }

    e["default"] = r.a;
  },
  caa9: function caa9(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("e40c"),
        r = i("5941");

    for (var a in r) {
      "default" !== a && function (t) {
        i.d(e, t, function () {
          return r[t];
        });
      }(a);
    }

    i("31d2");
    var s = i("2877"),
        o = Object(s["a"])(r["default"], n["a"], n["b"], !1, null, "efd5dba8", null);
    e["default"] = o.exports;
  },
  e40c: function e40c(t, e, i) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    i.d(e, "a", function () {
      return n;
    }), i.d(e, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/cpimg/cpimg-create-component', {
  'components/common/cpimg/cpimg-create-component': function componentsCommonCpimgCpimgCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("caa9"));
  }
}, [['components/common/cpimg/cpimg-create-component']]]);
});
require('components/common/cpimg/cpimg.js');
__wxRoute = 'components/common/image-cache/image-cache';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/image-cache/image-cache.js';

define('components/common/image-cache/image-cache.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/image-cache/image-cache"], {
  4617: function _(e, t, n) {
    "use strict";

    var i = function i() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "b", function () {
      return r;
    });
  },
  "7b09": function b09(e, t, n) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = r(n("a34a"));

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function a(e, t, n, i, r, a, c) {
        try {
          var o = e[a](c),
              u = o.value;
        } catch (s) {
          return void n(s);
        }

        o.done ? t(u) : Promise.resolve(u).then(i, r);
      }

      function c(e) {
        return function () {
          var t = this,
              n = arguments;
          return new Promise(function (i, r) {
            var c = e.apply(t, n);

            function o(e) {
              a(c, i, r, o, u, "next", e);
            }

            function u(e) {
              a(c, i, r, o, u, "throw", e);
            }

            o(void 0);
          });
        };
      }

      var o = {
        props: {
          imageStyle: String,
          src: {
            type: String,
            default: "",
            required: !0
          },
          saveDirectory: {
            type: String,
            default: "_doc/uniapp_save/images/"
          },
          errorImage: {
            type: String,
            default: "/static/avatar.jpg"
          },
          loadingImage: {
            type: String,
            default: "/static/avatar.jpg"
          }
        },
        computed: {
          resource: function resource() {
            return this.init(), !this.isCached && this.error ? this.errorImage : this.isCached ? this.localFile : this.isCached || this.error ? void 0 : this.loadingImage;
          }
        },
        created: function created() {
          this.init();
        },
        data: function data() {
          return {
            error: !1,
            isCached: !1,
            localFile: null
          };
        },
        methods: {
          init: function () {
            var e = c(i.default.mark(function e() {
              var t,
                  n,
                  r = this;
              return i.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, this.isCache(this.src);

                    case 2:
                      if (t = e.sent, t) {
                        e.next = 11;
                        break;
                      }

                      return e.next = 6, this.downloadFile(this.src).catch(function (e) {
                        r.error = !0;
                      });

                    case 6:
                      n = e.sent, this.isCached = !0, this.localFile = n, e.next = 13;
                      break;

                    case 11:
                      this.isCached = !0, this.localFile = t;

                    case 13:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function t() {
              return e.apply(this, arguments);
            }

            return t;
          }(),
          downloadFile: function downloadFile(t) {
            var n = this;
            return new Promise(function (i, r) {
              var a = n.saveDirectory + n.getFileName(t),
                  c = plus.downloader.createDownload(t, {
                filename: a
              }, function (t, n) {
                200 == n ? i(a) : (console.log(e("文件下载失败", " at components\\common\\image-cache\\image-cache.vue:83")), r());
              });
              c.start();
            });
          },
          isCache: function isCache(t) {
            var n = this.saveDirectory + this.getFileName(t);
            return new Promise(function (t, i) {
              plus.io.resolveLocalFileSystemURL(n, function (e) {
                t(n);
              }, function (n) {
                console.log(e(n, " at components\\common\\image-cache\\image-cache.vue:100")), t(null);
              });
            });
          },
          getFileName: function getFileName(e) {
            return e.substring(e.lastIndexOf("/") + 1);
          },
          imageLoadError: function imageLoadError() {}
        }
      };
      t.default = o;
    }).call(this, n("0de9")["default"]);
  },
  "7c88": function c88(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("7b09"),
        r = n.n(i);

    for (var a in i) {
      "default" !== a && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(a);
    }

    t["default"] = r.a;
  },
  c756: function c756(e, t, n) {
    "use strict";

    var i = n("cde9"),
        r = n.n(i);
    r.a;
  },
  cde9: function cde9(e, t, n) {},
  d613: function d613(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("4617"),
        r = n("7c88");

    for (var a in r) {
      "default" !== a && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(a);
    }

    n("c756");
    var c = n("2877"),
        o = Object(c["a"])(r["default"], i["a"], i["b"], !1, null, null, null);
    t["default"] = o.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/image-cache/image-cache-create-component', {
  'components/common/image-cache/image-cache-create-component': function componentsCommonImageCacheImageCacheCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d613"));
  }
}, [['components/common/image-cache/image-cache-create-component']]]);
});
require('components/common/image-cache/image-cache.js');
__wxRoute = 'components/common/loading/loading';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/loading/loading.js';

define('components/common/loading/loading.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/loading/loading"], {
  1078: function _(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("ad37"),
        u = e("3a7e");

    for (var o in u) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(o);
    }

    e("4ab0");
    var r = e("2877"),
        f = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, "01fa6af8", null);
    t["default"] = f.exports;
  },
  "3a7e": function a7e(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("de36"),
        u = e.n(a);

    for (var o in a) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(o);
    }

    t["default"] = u.a;
  },
  "4ab0": function ab0(n, t, e) {
    "use strict";

    var a = e("520f"),
        u = e.n(a);
    u.a;
  },
  "520f": function f(n, t, e) {},
  ad37: function ad37(n, t, e) {
    "use strict";

    var a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    e.d(t, "a", function () {
      return a;
    }), e.d(t, "b", function () {
      return u;
    });
  },
  de36: function de36(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = {
      props: {
        isShow: {
          type: Boolean,
          default: !1
        }
      }
    };
    t.default = a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/loading/loading-create-component', {
  'components/common/loading/loading-create-component': function componentsCommonLoadingLoadingCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1078"));
  }
}, [['components/common/loading/loading-create-component']]]);
});
require('components/common/loading/loading.js');
__wxRoute = 'components/common/nairenk-waterfall-flow/nairenk-waterfall-flow';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/nairenk-waterfall-flow/nairenk-waterfall-flow.js';

define('components/common/nairenk-waterfall-flow/nairenk-waterfall-flow.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/nairenk-waterfall-flow/nairenk-waterfall-flow"], {
  "8cf6": function cf6(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("e701"),
        o = n("9fde");

    for (var a in o) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(a);
    }

    n("f099");
    var r = n("2877"),
        u = Object(r["a"])(o["default"], i["a"], i["b"], !1, null, "9a10b902", null);
    e["default"] = u.exports;
  },
  9116: function _(t, e, n) {},
  "9fde": function fde(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("ab0c"),
        o = n.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    e["default"] = o.a;
  },
  ab0c: function ab0c(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        props: {
          list: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          loading: {
            type: Boolean,
            default: !1
          }
        },
        data: function data() {
          return {
            mark: 0,
            newList: [],
            boxHeight: [],
            top: [],
            left: [],
            loadingTop: 0
          };
        },
        watch: {
          list: function list(t, e) {
            this.mark = e.length, t != e && (this.newList = this.list, this.$nextTick(function () {
              var t = this;
              setTimeout(function () {
                t.waterFall();
              }, 120);
            }));
          }
        },
        methods: {
          waterFall: function waterFall() {
            var e = this,
                n = t.createSelectorQuery().in(this);
            n.selectAll(".flow-box .item").boundingClientRect(function (t) {
              for (var n = e.newList.length, i = 0, o = e.mark; o < n; o++) {
                if (i = t[o].height, o < 2) e.$set(e.newList[o], "top", 0), e.$set(e.newList[o], "left", o), e.boxHeight.push(i), e.top.push(0), e.left.push(o);else {
                  var a = e.boxHeight[0],
                      r = 0;
                  a > e.boxHeight[1] && (a = e.boxHeight[1], r = 1), e.boxHeight[r] = a + i + 5, e.top.push(a + 5), e.left.push(r), e.$set(e.newList[o], "top", a + 5), e.$set(e.newList[o], "left", r), e.loadingTop = e.boxHeight[r];
                }
              }
            }).exec();
          },
          choose: function choose(t) {
            var e = t.currentTarget.dataset.index;
            this.$emit("click", this.newList[e]);
          }
        }
      };
      e.default = n;
    }).call(this, n("6e42")["default"]);
  },
  e701: function e701(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return o;
    });
  },
  f099: function f099(t, e, n) {
    "use strict";

    var i = n("9116"),
        o = n.n(i);
    o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/nairenk-waterfall-flow/nairenk-waterfall-flow-create-component', {
  'components/common/nairenk-waterfall-flow/nairenk-waterfall-flow-create-component': function componentsCommonNairenkWaterfallFlowNairenkWaterfallFlowCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8cf6"));
  }
}, [['components/common/nairenk-waterfall-flow/nairenk-waterfall-flow-create-component']]]);
});
require('components/common/nairenk-waterfall-flow/nairenk-waterfall-flow.js');
__wxRoute = 'components/current/video-cache/video-cache';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/current/video-cache/video-cache.js';

define('components/current/video-cache/video-cache.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/current/video-cache/video-cache"], {
  "0642": function _(e, t, n) {
    "use strict";

    var r = function r() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        i = [];

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "b", function () {
      return i;
    });
  },
  1936: function _(e, t, n) {
    "use strict";

    n.r(t);
    var r = n("0642"),
        i = n("f562");

    for (var o in i) {
      "default" !== o && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(o);
    }

    n("24a4");
    var c = n("2877"),
        a = Object(c["a"])(i["default"], r["a"], r["b"], !1, null, "cfec05e8", null);
    t["default"] = a.exports;
  },
  "24a4": function a4(e, t, n) {
    "use strict";

    var r = n("2685"),
        i = n.n(r);
    i.a;
  },
  2685: function _(e, t, n) {},
  f562: function f562(e, t, n) {
    "use strict";

    n.r(t);
    var r = n("fe90"),
        i = n.n(r);

    for (var o in r) {
      "default" !== o && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(o);
    }

    t["default"] = i.a;
  },
  fe90: function fe90(e, t, n) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var r = i(n("a34a"));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function o(e, t, n, r, i, o, c) {
        try {
          var a = e[o](c),
              u = a.value;
        } catch (s) {
          return void n(s);
        }

        a.done ? t(u) : Promise.resolve(u).then(r, i);
      }

      function c(e) {
        return function () {
          var t = this,
              n = arguments;
          return new Promise(function (r, i) {
            var c = e.apply(t, n);

            function a(e) {
              o(c, r, i, a, u, "next", e);
            }

            function u(e) {
              o(c, r, i, a, u, "throw", e);
            }

            a(void 0);
          });
        };
      }

      var a = {
        props: {
          src: {
            type: String,
            default: "",
            required: !0
          },
          saveDirectory: {
            type: String,
            default: "_downloads/"
          },
          errorUrl: {
            type: String,
            default: ""
          }
        },
        computed: {
          resource: function resource() {
            return !this.isCached && this.error ? this.errorUrl : this.isCached ? this.localFile : this.isCached || this.error ? void 0 : this.errorUrl;
          }
        },
        mounted: function mounted() {
          this.init();
        },
        data: function data() {
          return {
            error: !1,
            isCached: !1,
            localFile: null
          };
        },
        methods: {
          init: function () {
            var e = c(r.default.mark(function e() {
              var t,
                  n,
                  i = this;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, this.isCache(this.src);

                    case 2:
                      if (t = e.sent, t) {
                        e.next = 11;
                        break;
                      }

                      return e.next = 6, this.downloadFile(this.src).catch(function (e) {
                        i.error = !0;
                      });

                    case 6:
                      n = e.sent, this.isCached = !0, this.localFile = n, e.next = 13;
                      break;

                    case 11:
                      this.isCached = !0, this.localFile = t;

                    case 13:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function t() {
              return e.apply(this, arguments);
            }

            return t;
          }(),
          downloadFile: function downloadFile(t) {
            var n = this;
            return new Promise(function (r, i) {
              var o = n.saveDirectory + n.getFileName(t),
                  c = plus.downloader.createDownload(t, {
                filename: o
              }, function (t, n) {
                200 == n ? r(o) : (console.log(e("文件下载失败", " at components\\current\\video-cache\\video-cache.vue:77")), i());
              });
              c.start();
            });
          },
          isCache: function isCache(t) {
            var n = this.saveDirectory + this.getFileName(t);
            return new Promise(function (t, r) {
              plus.io.resolveLocalFileSystemURL(n, function (e) {
                t(n);
              }, function (n) {
                console.log(e(n, " at components\\current\\video-cache\\video-cache.vue:94")), t(null);
              });
            });
          },
          getFileName: function getFileName(e) {
            return e.substring(e.lastIndexOf("/") + 1);
          }
        }
      };
      t.default = a;
    }).call(this, n("0de9")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/current/video-cache/video-cache-create-component', {
  'components/current/video-cache/video-cache-create-component': function componentsCurrentVideoCacheVideoCacheCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1936"));
  }
}, [['components/current/video-cache/video-cache-create-component']]]);
});
require('components/current/video-cache/video-cache.js');
__wxRoute = 'components/current/video-play/video-play';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/current/video-play/video-play.js';

define('components/current/video-play/video-play.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/current/video-play/video-play"], {
  1625: function _(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("90e2"),
        r = u.n(e);

    for (var a in e) {
      "default" !== a && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(a);
    }

    t["default"] = r.a;
  },
  7663: function _(n, t, u) {
    "use strict";

    var e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    u.d(t, "a", function () {
      return e;
    }), u.d(t, "b", function () {
      return r;
    });
  },
  8779: function _(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("7663"),
        r = u("1625");

    for (var a in r) {
      "default" !== a && function (n) {
        u.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    var o = u("2877"),
        c = Object(o["a"])(r["default"], e["a"], e["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  "90e2": function e2(n, t, u) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/current/video-play/video-play-create-component', {
  'components/current/video-play/video-play-create-component': function componentsCurrentVideoPlayVideoPlayCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8779"));
  }
}, [['components/current/video-play/video-play-create-component']]]);
});
require('components/current/video-play/video-play.js');

__wxRoute = 'pages/index/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index/index.js';

define('pages/index/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index/index"],{"08df":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i})},1648:function(e,t,r){},"4d21":function(e,t,r){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,n,i,a,s){try{var u=e[a](s),c=u.value}catch(o){return void r(o)}u.done?t(c):Promise.resolve(c).then(n,i)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function u(e){s(a,n,i,u,c,"next",e)}function c(e){s(a,n,i,u,c,"throw",e)}u(void 0)})}}var c={data:function(){return{swiperArr:[],swiperImageArr:[],dotStyle:!1,cardCur:0,list:[],imageList:[],list2:[],imageList2:[],msg:[]}},onShow:function(){},onHide:function(){},onLoad:function(){this.selectNotice(),this.selectAd(),this.selectSelfProducts(),this.selectCurrPopularProducts()},onPullDownRefresh:function(){this.selectNotice(),this.selectAd(),this.selectSelfProducts(),this.selectCurrPopularProducts()},methods:{preview:function(t,r){var n=[];"swiper"===r&&(n=this.swiperImageArr),e.previewImage({current:t,loop:!0,indicator:"default",urls:n})},toDetail:function(e){this.$util.toProductDetail(e)},toMore:function(t){e.navigateTo({url:"../productList/productList?type=".concat(t)})},cardSwiper:function(e){this.cardCur=e.detail.current},selectNotice:function(){var t=u(i.default.mark(function t(){var r;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/notices"});case 2:r=t.sent,console.log(n("公告：",r," at pages\\index\\index\\index.vue:136")),r?this.msg=r.data.data:e.stopPullDownRefresh();case 5:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}(),selectAd:function(){var t=u(i.default.mark(function t(){var r,a,s,u,c,o,l;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/ads"});case 2:if(r=t.sent,console.log(n("广告：",r," at pages\\index\\index\\index.vue:148")),!r){t.next=28;break}for(this.swiperArr=r.data.data,this.swiperImageArr=[],a=!0,s=!1,u=void 0,t.prev=10,c=this.swiperArr[Symbol.iterator]();!(a=(o=c.next()).done);a=!0)l=o.value,this.swiperImageArr.push(l.image);t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,a||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:t.next=29;break;case 28:e.stopPullDownRefresh();case 29:case"end":return t.stop()}},t,this,[[10,14,18,26],[19,,21,25]])}));function r(){return t.apply(this,arguments)}return r}(),selectSelfProducts:function(){var t=u(i.default.mark(function t(){var r,a,s,u,c,o,l;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/products",data:{limit:6,page:1,name:null,pType:1,online:1}});case 2:if(r=t.sent,console.log(n("本店：",r," at pages\\index\\index\\index.vue:171")),!r){t.next=28;break}for(this.list=r.data.data,this.imageList=[],a=!0,s=!1,u=void 0,t.prev=10,c=this.list[Symbol.iterator]();!(a=(o=c.next()).done);a=!0)l=o.value,this.imageList.push(l.image);t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,a||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:t.next=29;break;case 28:e.stopPullDownRefresh();case 29:case"end":return t.stop()}},t,this,[[10,14,18,26],[19,,21,25]])}));function r(){return t.apply(this,arguments)}return r}(),selectCurrPopularProducts:function(){var t=u(i.default.mark(function t(){var r,a,s,u,c,o,l;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/products",data:{limit:6,page:1,name:null,pType:0,online:1}});case 2:if(r=t.sent,e.stopPullDownRefresh(),console.log(n("流行：",r," at pages\\index\\index\\index.vue:195")),!r){t.next=27;break}for(this.list2=r.data.data,this.imageList2=[],a=!0,s=!1,u=void 0,t.prev=11,c=this.list2[Symbol.iterator]();!(a=(o=c.next()).done);a=!0)l=o.value,this.imageList2.push(l.image);t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](11),s=!0,u=t.t0;case 19:t.prev=19,t.prev=20,a||null==c.return||c.return();case 22:if(t.prev=22,!s){t.next=25;break}throw u;case 25:return t.finish(22);case 26:return t.finish(19);case 27:case"end":return t.stop()}},t,this,[[11,15,19,27],[20,,22,26]])}));function r(){return t.apply(this,arguments)}return r}()}};t.default=c}).call(this,r("6e42")["default"],r("0de9")["default"])},"566d":function(e,t,r){"use strict";var n=r("1648"),i=r.n(n);i.a},"8c52":function(e,t,r){"use strict";(function(e){r("d1f0"),r("921b");n(r("66fd"));var t=n(r("ab4c"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},ab4c:function(e,t,r){"use strict";r.r(t);var n=r("08df"),i=r("fea9");for(var a in i)"default"!==a&&function(e){r.d(t,e,function(){return i[e]})}(a);r("566d");var s=r("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"cbd16c8c",null);t["default"]=u.exports},fea9:function(e,t,r){"use strict";r.r(t);var n=r("4d21"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a);t["default"]=i.a}},[["8c52","common/runtime","common/vendor"]]]);
});
require('pages/index/index/index.js');
__wxRoute = 'pages/my/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/login/login.js';

define('pages/my/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/login/login"],{"188d":function(t,n,e){"use strict";(function(t){e("d1f0"),e("921b");a(e("66fd"));var n=a(e("7959"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"41cf":function(t,n,e){"use strict";var a=e("c6f5"),u=e.n(a);u.a},7959:function(t,n,e){"use strict";e.r(n);var a=e("d87b"),u=e("e9db");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("41cf");var c=e("2877"),r=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,"047b8c4e",null);n["default"]=r.exports},c6f5:function(t,n,e){},ca60:function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=o(e("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function c(t,n,e,a,u,o,c){try{var r=t[o](c),i=r.value}catch(s){return void e(s)}r.done?n(i):Promise.resolve(i).then(a,u)}function r(t){return function(){var n=this,e=arguments;return new Promise(function(a,u){var o=t.apply(n,e);function r(t){c(o,a,u,r,i,"next",t)}function i(t){c(o,a,u,r,i,"throw",t)}r(void 0)})}}var i={onLoad:function(){var n=t.getStorageSync("account");void 0!==n&&(this.account=n)},data:function(){return{account:"",password:""}},methods:{bindLogin:function(){""!==this.account?""!==this.password?this.login():this.$util.toast("请输入密码"):this.$util.toast("请输入账号")},login:function(){var n=r(u.default.mark(function n(){var e;return u.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$util.request({requestUrl:"api/userByAccountAndPass",data:{account:this.account,password:this.password}});case 2:e=n.sent,console.log(a("登录:",e," at pages\\my\\login\\login.vue:64")),e&&(t.setStorageSync("userInfo",e.data.data),t.setStorageSync("account",e.data.data.account),this.$util.toast("登录成功"),setTimeout(function(){t.navigateBack()},500));case 5:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}()}};n.default=i}).call(this,e("6e42")["default"],e("0de9")["default"])},d87b:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},e9db:function(t,n,e){"use strict";e.r(n);var a=e("ca60"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a}},[["188d","common/runtime","common/vendor"]]]);
});
require('pages/my/login/login.js');
__wxRoute = 'pages/color/color/color';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/color/color/color.js';

define('pages/color/color/color.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/color/color/color"],{1574:function(t,e,n){"use strict";n.r(e);var r=n("241e"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=o.a},"241e":function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,o,u,a){try{var i=t[u](a),c=i.value}catch(s){return void n(s)}i.done?e(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var u=t.apply(e,n);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)})}}var c={data:function(){return{list:[],imageList:[]}},onPullDownRefresh:function(){this.selectColors()},onLoad:function(){this.selectColors()},methods:{preview:function(e){t.previewImage({current:e,urls:this.imageList})},selectColors:function(){var e=i(o.default.mark(function e(){var n,u,a,i,c,s,l;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$util.request({requestUrl:"api/colors"});case 2:if(n=e.sent,console.log(r("查询色板：",n," at pages\\color\\color\\color.vue:40")),t.stopPullDownRefresh(),!n){e.next=27;break}for(this.list=n.data.data,this.imageList=[],u=!0,a=!1,i=void 0,e.prev=11,c=this.list[Symbol.iterator]();!(u=(s=c.next()).done);u=!0)l=s.value,this.imageList.push(l.image);e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](11),a=!0,i=e.t0;case 19:e.prev=19,e.prev=20,u||null==c.return||c.return();case 22:if(e.prev=22,!a){e.next=25;break}throw i;case 25:return e.finish(22);case 26:return e.finish(19);case 27:case"end":return e.stop()}},e,this,[[11,15,19,27],[20,,22,26]])}));function n(){return e.apply(this,arguments)}return n}()}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},"3c1b":function(t,e,n){"use strict";var r=n("cdad"),o=n.n(r);o.a},"5f66":function(t,e,n){"use strict";n.r(e);var r=n("b909"),o=n("1574");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("3c1b");var a=n("2877"),i=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"09c9a959",null);e["default"]=i.exports},b909:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},cdad:function(t,e,n){},d36d:function(t,e,n){"use strict";(function(t){n("d1f0"),n("921b");r(n("66fd"));var e=r(n("5f66"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["d36d","common/runtime","common/vendor"]]]);
});
require('pages/color/color/color.js');
__wxRoute = 'pages/category/category/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/category/category.js';

define('pages/category/category/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category/category"],{"1f2f":function(e,t,r){"use strict";(function(e){r("d1f0"),r("921b");a(r("66fd"));var t=a(r("c641"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},"358f":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},n=[];r.d(t,"a",function(){return a}),r.d(t,"b",function(){return n})},"7bf9":function(e,t,r){"use strict";var a=r("c708"),n=r.n(a);n.a},bfdc:function(e,t,r){"use strict";r.r(t);var a=r("f677"),n=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,function(){return a[e]})}(i);t["default"]=n.a},c641:function(e,t,r){"use strict";r.r(t);var a=r("358f"),n=r("bfdc");for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);r("7bf9");var s=r("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"16c8b907",null);t["default"]=c.exports},c708:function(e,t,r){},f677:function(e,t,r){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,a,n,i,s){try{var c=e[i](s),o=c.value}catch(u){return void r(u)}c.done?t(o):Promise.resolve(o).then(a,n)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function c(e){s(i,a,n,c,o,"next",e)}function o(e){s(i,a,n,c,o,"throw",e)}c(void 0)})}}var o={data:function(){return{list:[],tabCur:0,mainCur:0,verticalNavTop:0}},onPullDownRefresh:function(){var t=this;c(n.default.mark(function r(){var a,i,s,c,o,u;return n.default.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.selectCategory();case 2:if(!(t.list.length>0)){r.next=30;break}a=!0,i=!1,s=void 0,r.prev=6,c=t.list[Symbol.iterator]();case 8:if(a=(o=c.next()).done){r.next=15;break}return u=o.value,r.next=12,t.selectProductsByCategory(u.id);case 12:a=!0,r.next=8;break;case 15:r.next=21;break;case 17:r.prev=17,r.t0=r["catch"](6),i=!0,s=r.t0;case 21:r.prev=21,r.prev=22,a||null==c.return||c.return();case 24:if(r.prev=24,!i){r.next=27;break}throw s;case 27:return r.finish(24);case 28:return r.finish(21);case 29:console.log(e(t.list," at pages\\category\\category\\category.vue:52"));case 30:case"end":return r.stop()}},r,this,[[6,17,21,29],[22,,24,28]])}))()},onLoad:function(){var t=this;c(n.default.mark(function r(){var a,i,s,c,o,u;return n.default.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.selectCategory();case 2:if(!(t.list.length>0)){r.next=30;break}a=!0,i=!1,s=void 0,r.prev=6,c=t.list[Symbol.iterator]();case 8:if(a=(o=c.next()).done){r.next=15;break}return u=o.value,r.next=12,t.selectProductsByCategory(u.id);case 12:a=!0,r.next=8;break;case 15:r.next=21;break;case 17:r.prev=17,r.t0=r["catch"](6),i=!0,s=r.t0;case 21:r.prev=21,r.prev=22,a||null==c.return||c.return();case 24:if(r.prev=24,!i){r.next=27;break}throw s;case 27:return r.finish(24);case 28:return r.finish(21);case 29:console.log(e(t.list," at pages\\category\\category\\category.vue:63"));case 30:case"end":return r.stop()}},r,this,[[6,17,21,29],[22,,24,28]])}))()},methods:{toDetail:function(e){this.$util.toProductDetail(e)},selectProductsByCategory:function(){var t=c(n.default.mark(function t(r){var i,s,c,o,u,l,f;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/productsByCategory/"+r});case 2:if(i=t.sent,console.log(e("某类下的商品：",i," at pages\\category\\category\\category.vue:75")),!i){t.next=27;break}for(s=!0,c=!1,o=void 0,t.prev=8,u=this.list[Symbol.iterator]();!(s=(l=u.next()).done);s=!0)f=l.value,f.id===r&&(f.arr=i.data.data);t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](8),c=!0,o=t.t0;case 16:t.prev=16,t.prev=17,s||null==u.return||u.return();case 19:if(t.prev=19,!c){t.next=22;break}throw o;case 22:return t.finish(19);case 23:return t.finish(16);case 24:this.list[this.list.length-1].id===r&&a.stopPullDownRefresh(),t.next=28;break;case 27:a.stopPullDownRefresh();case 28:case"end":return t.stop()}},t,this,[[8,12,16,24],[17,,19,23]])}));function r(e){return t.apply(this,arguments)}return r}(),selectCategory:function(){var t=c(n.default.mark(function t(){var r,i,s,c,o,u,l;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/category"});case 2:if(r=t.sent,console.log(e("查询所有类别：",r," at pages\\category\\category\\category.vue:93")),!r){t.next=27;break}for(this.list=r.data.data,i=!0,s=!1,c=void 0,t.prev=9,o=this.list[Symbol.iterator]();!(i=(u=o.next()).done);i=!0)l=u.value,this.$set(l,"arr",[]);t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](9),s=!0,c=t.t0;case 17:t.prev=17,t.prev=18,i||null==o.return||o.return();case 20:if(t.prev=20,!s){t.next=23;break}throw c;case 23:return t.finish(20);case 24:return t.finish(17);case 25:t.next=28;break;case 27:a.stopPullDownRefresh();case 28:case"end":return t.stop()}},t,this,[[9,13,17,25],[18,,20,24]])}));function r(){return t.apply(this,arguments)}return r}(),TabSelect:function(e){this.tabCur=e.currentTarget.dataset.id,this.mainCur=e.currentTarget.dataset.id,this.verticalNavTop=50*(e.currentTarget.dataset.id-1)},VerticalMain:function(e){for(var t=this,r=0,n=function(e){var n=a.createSelectorQuery().select("#main-"+e);n.fields({size:!0},function(a){t.list[e].top=r,r+=a.height,t.list[e].bottom=r}).exec()},i=0;i<this.list.length;i++)n(i);var s=e.detail.scrollTop+10;for(i=0;i<this.list.length;i++)if(s>this.list[i].top&&s<this.list[i].bottom)return this.verticalNavTop=50*(this.list[i].id-1),this.tabCur=this.list[i].id,!1}}};t.default=o}).call(this,r("0de9")["default"],r("6e42")["default"])}},[["1f2f","common/runtime","common/vendor"]]]);
});
require('pages/category/category/category.js');
__wxRoute = 'pages/my/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my/my.js';

define('pages/my/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my/my"],{2114:function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{userInfo:null}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},500)},onShow:function(){var n=t.getStorageSync("userInfo");null===n||void 0===n||""===n?this.$util.toLogin():this.userInfo=n},methods:{toPreview:function(){t.previewImage({current:0,urls:[this.userInfo.avatar]})},toNavigation:function(){plus.geolocation.getCurrentPosition(function(t){console.log(e(t," at pages\\my\\my\\my.vue:79"));var n=new plus.maps.Point(120.078045,30.333191),o=new plus.maps.Point(t.coords.longitude,t.coords.latitude);plus.maps.openSysMap(n,"303生活广场",o)},function(t){console.log(e(t," at pages\\my\\my\\my.vue:85"))})},toPersonalInfo:function(){this.$util.navigateTo("../personalInfo/personalInfo")},toChatUs:function(){t.makePhoneCall({phoneNumber:"15180699664"})},toChatUsWeixin:function(){this.$util.navigateTo("../masterWeixin/masterWeixin")},toMoreResource:function(){this.$util.navigateTo("../moreResource/moreResource")},toManageSystem:function(){this.$util.navigateTo("../manageSystem/manageSystem")},toWeb:function(){this.$util.navigateTo("../web/web")},toMyCollection:function(){this.$util.navigateTo("../myCollection/myCollection")},toRecharge:function(){this.$util.navigateTo("../recharge/recharge")},toAbout:function(){this.$util.navigateTo("../about/about")},out:function(){var n=this;t.showModal({title:"提示",content:"确定要退出登录",success:function(e){e.confirm&&(t.removeStorageSync("userInfo"),n.$util.toLogin())}})}}};n.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])},"21ea":function(t,n,e){"use strict";(function(t){e("d1f0"),e("921b");o(e("66fd"));var n=o(e("a9e8"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},4871:function(t,n,e){},"75b6":function(t,n,e){"use strict";var o=e("4871"),i=e.n(o);i.a},"98c4":function(t,n,e){"use strict";e.r(n);var o=e("2114"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=i.a},a9e8:function(t,n,e){"use strict";e.r(n);var o=e("f54e"),i=e("98c4");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("75b6");var a=e("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"f62d1fea",null);n["default"]=r.exports},f54e:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})}},[["21ea","common/runtime","common/vendor"]]]);
});
require('pages/my/my/my.js');
__wxRoute = 'pages/index/productList/productList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/productList/productList.js';

define('pages/index/productList/productList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/productList/productList"],{"4bf2":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"4dde":function(t,e,n){},5727:function(t,e,n){"use strict";n.r(e);var r=n("4bf2"),a=n("6c2f");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("96e5");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,"23299a1e",null);e["default"]=o.exports},"6c2f":function(t,e,n){"use strict";n.r(e);var r=n("c861"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},"96e5":function(t,e,n){"use strict";var r=n("4dde"),a=n.n(r);a.a},c861:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,a,i,u){try{var o=t[i](u),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function o(t){u(i,r,a,o,c,"next",t)}function c(t){u(i,r,a,o,c,"throw",t)}o(void 0)})}}var c=function(){return n.e("components/common/nairenk-waterfall-flow/nairenk-waterfall-flow").then(n.bind(null,"8cf6"))},s={components:{WaterfallFlow:c},onShow:function(){},onHide:function(){},data:function(){return{page:1,list:[],type:null}},onReachBottom:function(){1==this.type&&this.selectSelfProducts("more"),2==this.type&&this.selectCurrPopularProducts("more")},onLoad:function(e){this.type=e.type,1==e.type&&(t.setNavigationBarTitle({title:"本店热款"}),this.selectSelfProducts()),2==e.type&&(t.setNavigationBarTitle({title:"当季流行"}),this.selectCurrPopularProducts())},methods:{choose:function(t){this.$util.toProductDetail(t)},selectSelfProducts:function(){var t=o(a.default.mark(function t(e){var n,i,u,o,c,s,l;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return"more"===e?this.page++:this.page=1,t.next=3,this.$util.request({requestUrl:"api/products",data:{limit:10,page:this.page,name:null,pType:1,online:1}});case 3:if(n=t.sent,console.log(r("本店：",n," at pages\\index\\productList\\productList.vue:71")),!n){t.next=26;break}for(i=!0,u=!1,o=void 0,t.prev=9,c=n.data.data[Symbol.iterator]();!(i=(s=c.next()).done);i=!0)l=s.value,l.load=!1;t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](9),u=!0,o=t.t0;case 17:t.prev=17,t.prev=18,i||null==c.return||c.return();case 20:if(t.prev=20,!u){t.next=23;break}throw o;case 23:return t.finish(20);case 24:return t.finish(17);case 25:this.list="more"===e?this.list.concat(n.data.data):n.data.data;case 26:case"end":return t.stop()}},t,this,[[9,13,17,25],[18,,20,24]])}));function e(e){return t.apply(this,arguments)}return e}(),selectCurrPopularProducts:function(){var t=o(a.default.mark(function t(e){var n,i,u,o,c,s,l;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return"more"===e?this.page++:this.page=1,t.next=3,this.$util.request({requestUrl:"api/products",data:{limit:10,page:this.page,name:null,pType:0,online:1}});case 3:if(n=t.sent,console.log(r("流行：",n," at pages\\index\\productList\\productList.vue:100")),!n){t.next=26;break}for(i=!0,u=!1,o=void 0,t.prev=9,c=n.data.data[Symbol.iterator]();!(i=(s=c.next()).done);i=!0)l=s.value,l.load=!1;t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](9),u=!0,o=t.t0;case 17:t.prev=17,t.prev=18,i||null==c.return||c.return();case 20:if(t.prev=20,!u){t.next=23;break}throw o;case 23:return t.finish(20);case 24:return t.finish(17);case 25:this.list="more"===e?this.list.concat(n.data.data):n.data.data;case 26:case"end":return t.stop()}},t,this,[[9,13,17,25],[18,,20,24]])}));function e(e){return t.apply(this,arguments)}return e}()}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},f201:function(t,e,n){"use strict";(function(t){n("d1f0"),n("921b");r(n("66fd"));var e=r(n("5727"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f201","common/runtime","common/vendor"]]]);
});
require('pages/index/productList/productList.js');
__wxRoute = 'pages/my/recharge/recharge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/recharge/recharge.js';

define('pages/my/recharge/recharge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/recharge/recharge"],{"0bb5":function(e,t,n){"use strict";var r=n("190e"),a=n.n(r);a.a},"190e":function(e,t,n){},"80b5":function(e,t,n){"use strict";n.r(t);var r=n("fbdf"),a=n("9283");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("0bb5");var c=n("2877"),o=Object(c["a"])(a["default"],r["a"],r["b"],!1,null,"28a3f266",null);t["default"]=o.exports},9283:function(e,t,n){"use strict";n.r(t);var r=n("a6ee"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=a.a},a6ee:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,a,u,c){try{var o=e[u](c),i=o.value}catch(f){return void n(f)}o.done?t(i):Promise.resolve(i).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var c=e.apply(t,n);function o(e){u(c,r,a,o,i,"next",e)}function i(e){u(c,r,a,o,i,"throw",e)}o(void 0)})}}var o={data:function(){return{items:[]}},onLoad:function(){this.selectRecharges()},methods:{selectRecharges:function(){var t=c(r.default.mark(function t(){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/recharges"});case 2:n=t.sent,console.log(e("查询所有充值优惠：",n," at pages\\my\\recharge\\recharge.vue:24")),n&&(this.items=n.data.data);case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};t.default=o}).call(this,n("0de9")["default"])},c3de:function(e,t,n){"use strict";(function(e){n("d1f0"),n("921b");r(n("66fd"));var t=r(n("80b5"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},fbdf:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})}},[["c3de","common/runtime","common/vendor"]]]);
});
require('pages/my/recharge/recharge.js');
__wxRoute = 'pages/my/myCollection/myCollection';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/myCollection/myCollection.js';

define('pages/my/myCollection/myCollection.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myCollection/myCollection"],{"384d":function(t,e,n){"use strict";n.r(e);var o=n("43eb"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},"43eb":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,o,a,u,r){try{var c=t[u](r),i=c.value}catch(l){return void n(l)}c.done?e(i):Promise.resolve(i).then(o,a)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(o,a){var u=t.apply(e,n);function c(t){r(u,o,a,c,i,"next",t)}function i(t){r(u,o,a,c,i,"throw",t)}c(void 0)})}}var i=function(){return n.e("components/common/nairenk-waterfall-flow/nairenk-waterfall-flow").then(n.bind(null,"8cf6"))},l={components:{WaterfallFlow:i},data:function(){return{userInfo:null,page:1,list:[]}},onReachBottom:function(){this.selectMyCollections("more")},onShow:function(){this.userInfo=t.getStorageSync("userInfo"),this.selectMyCollections()},methods:{choose:function(t){this.$util.toProductDetail(t)},selectMyCollections:function(){var t=c(a.default.mark(function t(e){var n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return"more"===e?this.page++:this.page=1,t.next=3,this.$util.request({requestUrl:"api/collections",data:{userId:this.userInfo.account,page:this.page,limit:10}});case 3:n=t.sent,console.log(o("我的收藏:",n," at pages\\my\\myCollection\\myCollection.vue:45")),n&&(this.list="more"===e?this.list.concat(n.data.data):n.data.data);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}};e.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},6305:function(t,e,n){"use strict";n.r(e);var o=n("ac69"),a=n("384d");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("b807");var r=n("2877"),c=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"f7f36ce2",null);e["default"]=c.exports},"83c2":function(t,e,n){},ac69:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},b807:function(t,e,n){"use strict";var o=n("83c2"),a=n.n(o);a.a},ec18:function(t,e,n){"use strict";(function(t){n("d1f0"),n("921b");o(n("66fd"));var e=o(n("6305"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["ec18","common/runtime","common/vendor"]]]);
});
require('pages/my/myCollection/myCollection.js');
__wxRoute = 'pages/index/productDetail/productDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/productDetail/productDetail.js';

define('pages/index/productDetail/productDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/productDetail/productDetail"],{"0dfd":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o,u,r,i){try{var c=t[r](i),a=c.value}catch(l){return void n(l)}c.done?e(a):Promise.resolve(a).then(o,u)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(o,u){var r=t.apply(e,n);function c(t){i(r,o,u,c,a,"next",t)}function a(t){i(r,o,u,c,a,"throw",t)}c(void 0)})}}var a={data:function(){return{productDetail:null,userInfo:null,collected:!1,collection:null}},computed:{collectionName:function(){return this.collected?"取消收藏":"收藏"}},onLoad:function(t){var e=JSON.parse(t.params);this.productDetail=e.productDetail},onShow:function(){this.userInfo=t.getStorageSync("userInfo"),null!==this.userInfo&&""!==this.userInfo&&this.selectIsCollected()},methods:{selectIsCollected:function(){var t=c(u.default.mark(function t(){var e;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/isCollected",data:{userId:this.userInfo.account,productId:this.productDetail.id}});case 2:e=t.sent,console.log(o("是否已收藏:",e," at pages\\index\\productDetail\\productDetail.vue:53")),e&&(1===e.data.data.length?(this.collected=!0,this.collection=e.data.data[0]):this.collected=!1);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),toPreview:function(){0===this.productDetail.showType&&t.previewImage({current:0,urls:[this.productDetail.image]})},toCollect:function(){var t=c(u.default.mark(function t(){var e,n;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(null!==this.userInfo&&""!==this.userInfo){t.next=4;break}this.$util.toLogin(),t.next=17;break;case 4:if(this.collected){t.next=12;break}return t.next=7,this.$util.request({requestUrl:"api/collection",method:"POST",data:{userId:this.userInfo.account,productId:this.productDetail.id}});case 7:e=t.sent,console.log(o("收藏:",e," at pages\\index\\productDetail\\productDetail.vue:84")),e&&(this.$util.toast("收藏成功"),this.collected=!0,this.collection=e.data.data),t.next=17;break;case 12:return t.next=14,this.$util.request({requestUrl:"api/collection/".concat(this.collection.id),method:"DELETE"});case 14:n=t.sent,console.log(o("取消收藏:",n," at pages\\index\\productDetail\\productDetail.vue:95")),n&&(this.$util.toast("已从收藏中移除"),this.collected=!1,this.collection=null);case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},4975:function(t,e,n){"use strict";n.r(e);var o=n("9c5d"),u=n("7ef7");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("d358");var i=n("2877"),c=Object(i["a"])(u["default"],o["a"],o["b"],!1,null,"18bfc6be",null);e["default"]=c.exports},"6fa4":function(t,e,n){},"7ef7":function(t,e,n){"use strict";n.r(e);var o=n("0dfd"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=u.a},"9c5d":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})},"9d6b":function(t,e,n){"use strict";(function(t){n("d1f0"),n("921b");o(n("66fd"));var e=o(n("4975"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d358:function(t,e,n){"use strict";var o=n("6fa4"),u=n.n(o);u.a}},[["9d6b","common/runtime","common/vendor"]]]);
});
require('pages/index/productDetail/productDetail.js');
__wxRoute = 'pages/my/about/about';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/about/about.js';

define('pages/my/about/about.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/about/about"],{"15d4":function(n,t,e){},"2b4a":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},"2d35":function(n,t,e){"use strict";e.r(t);var u=e("2b4a"),r=e("c4f4");for(var o in r)"default"!==o&&function(n){e.d(t,n,function(){return r[n]})}(o);e("4556");var a=e("2877"),i=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,"6e972ad9",null);t["default"]=i.exports},4556:function(n,t,e){"use strict";var u=e("15d4"),r=e.n(u);r.a},a2f4:function(n,t,e){"use strict";(function(n){e("d1f0"),e("921b");u(e("66fd"));var t=u(e("2d35"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},b74e:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{currVersion:""}},onLoad:function(){this.getCurrVersion()},methods:{getCurrVersion:function(){this.currVersion=plus.runtime.version}}};t.default=u},c4f4:function(n,t,e){"use strict";e.r(t);var u=e("b74e"),r=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=r.a}},[["a2f4","common/runtime","common/vendor"]]]);
});
require('pages/my/about/about.js');
__wxRoute = 'pages/my/moreResource/moreResource';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/moreResource/moreResource.js';

define('pages/my/moreResource/moreResource.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/moreResource/moreResource"],{"3c96":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{webviewStyles:{progress:{color:"007AFF"}}}},methods:{}};t.default=u},"4f16":function(e,t,n){"use strict";(function(e){n("d1f0"),n("921b");u(n("66fd"));var t=u(n("7b37"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"6c19":function(e,t,n){"use strict";n.r(t);var u=n("3c96"),r=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);t["default"]=r.a},"7b37":function(e,t,n){"use strict";n.r(t);var u=n("ae87"),r=n("6c19");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var c=n("2877"),a=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports},ae87:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})}},[["4f16","common/runtime","common/vendor"]]]);
});
require('pages/my/moreResource/moreResource.js');
__wxRoute = 'pages/my/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/register/register.js';

define('pages/my/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/register/register"],{"308e":function(t,e,n){"use strict";n.r(e);var i=n("83a5"),a=n("3c94");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("9eb6");var u=n("2877"),s=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"7d1aa67e",null);e["default"]=s.exports},"3c94":function(t,e,n){"use strict";n.r(e);var i=n("4c0d"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"4c0d":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,i,a,r,u){try{var s=t[r](u),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(i,a)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var r=t.apply(e,n);function s(t){u(r,i,a,s,o,"next",t)}function o(t){u(r,i,a,s,o,"throw",t)}s(void 0)})}}var o={onLoad:function(){},data:function(){return{account:"",password:"",passwordAgain:"",question:""}},methods:{bindRegister:function(){""!==this.account?""!==this.question?""!==this.password?""!==this.passwordAgain?this.password===this.passwordAgain?this.register():this.$util.toast("两次密码输入不一致"):this.$util.toast("请再次输入密码"):this.$util.toast("请输入密码"):this.$util.toast("请回答密保问题"):this.$util.toast("请输入账号")},register:function(){var e=s(a.default.mark(function e(){var n;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$util.request({requestUrl:"api/user",method:"POST",data:{account:this.account,password:this.password,question:this.question}});case 2:n=e.sent,console.log(t("注册:",n," at pages\\my\\register\\register.vue:75")),n&&(this.$util.toast("注册成功"),setTimeout(function(){i.navigateBack()},500));case 5:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},"64a3":function(t,e,n){},"83a5":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"9eb6":function(t,e,n){"use strict";var i=n("64a3"),a=n.n(i);a.a},c0fd:function(t,e,n){"use strict";(function(t){n("d1f0"),n("921b");i(n("66fd"));var e=i(n("308e"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["c0fd","common/runtime","common/vendor"]]]);
});
require('pages/my/register/register.js');
__wxRoute = 'pages/my/retrievePassword/retrievePassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/retrievePassword/retrievePassword.js';

define('pages/my/retrievePassword/retrievePassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/retrievePassword/retrievePassword"],{"0ce3":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"2b6c":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,i,u,r){try{var s=t[u](r),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(a,i)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var u=t.apply(e,n);function s(t){r(u,a,i,s,o,"next",t)}function o(t){r(u,a,i,s,o,"throw",t)}s(void 0)})}}var o={data:function(){return{account:"",password:"",passwordAgain:"",question:""}},onLoad:function(){},methods:{bindModify:function(){""!==this.account?""!==this.question?""!==this.password?""!==this.passwordAgain?this.password===this.passwordAgain?this.modify():this.$util.toast("两次密码输入不一致"):this.$util.toast("请再次输入密码"):this.$util.toast("请输入密码"):this.$util.toast("请回答密保问题"):this.$util.toast("请输入账号")},modify:function(){var e=s(i.default.mark(function e(){var n;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$util.request({requestUrl:"api/user",method:"PUT",data:{account:this.account,password:this.password,question:this.question}});case 2:n=e.sent,console.log(t("找回密码:",n," at pages\\my\\retrievePassword\\retrievePassword.vue:73")),n&&(this.$util.toast("修改成功"),setTimeout(function(){a.navigateBack()},500));case 5:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},"5cfb":function(t,e,n){"use strict";(function(t){n("d1f0"),n("921b");a(n("66fd"));var e=a(n("b32b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9c69":function(t,e,n){"use strict";n.r(e);var a=n("2b6c"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},b32b:function(t,e,n){"use strict";n.r(e);var a=n("0ce3"),i=n("9c69");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("cfae");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"0010606a",null);e["default"]=s.exports},cfae:function(t,e,n){"use strict";var a=n("e42f"),i=n.n(a);i.a},e42f:function(t,e,n){}},[["5cfb","common/runtime","common/vendor"]]]);
});
require('pages/my/retrievePassword/retrievePassword.js');
__wxRoute = 'pages/my/personalInfo/personalInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/personalInfo/personalInfo.js';

define('pages/my/personalInfo/personalInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/personalInfo/personalInfo"],{"4a63":function(t,e,n){"use strict";var a=n("7952"),r=n.n(a);r.a},"57ac":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},7952:function(t,e,n){},a7fa:function(t,e,n){"use strict";n.r(e);var a=n("a81d"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=r.a},a81d:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,a,r,u,o){try{var i=t[u](o),s=i.value}catch(f){return void n(f)}i.done?e(s):Promise.resolve(s).then(a,r)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var u=t.apply(e,n);function i(t){o(u,a,r,i,s,"next",t)}function s(t){o(u,a,r,i,s,"throw",t)}i(void 0)})}}var s={data:function(){return{userInfo:null}},onLoad:function(){this.userInfo=t.getStorageSync("userInfo")},methods:{cpimgOk:function(){var t=i(r.default.mark(function t(e){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(a(e," at pages\\my\\personalInfo\\personalInfo.vue:36")),t.next=3,this.$util.uploadImage(e[0]);case 3:n=t.sent,this.userInfo.avatar=n,this.toModifyAvatar();case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),uploadImage:function(){var t=i(r.default.mark(function t(){var e,n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.selectImage();case 2:return e=t.sent,t.next=5,this.$util.uploadImage(e);case 5:n=t.sent,this.userInfo.avatar=n,this.toModifyAvatar();case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),toModifyAvatar:function(){var e=i(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$util.request({requestUrl:"api/user",method:"PUT",data:{id:this.userInfo.id,avatar:this.userInfo.avatar}});case 2:n=e.sent,n&&(t.setStorageSync("userInfo",this.userInfo),this.$util.toast("修改成功"));case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},de00:function(t,e,n){"use strict";n.r(e);var a=n("57ac"),r=n("a7fa");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("4a63");var o=n("2877"),i=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"93120b46",null);e["default"]=i.exports},fd50:function(t,e,n){"use strict";(function(t){n("d1f0"),n("921b");a(n("66fd"));var e=a(n("de00"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["fd50","common/runtime","common/vendor"]]]);
});
require('pages/my/personalInfo/personalInfo.js');
__wxRoute = 'pages/my/masterWeixin/masterWeixin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/masterWeixin/masterWeixin.js';

define('pages/my/masterWeixin/masterWeixin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/masterWeixin/masterWeixin"],{"4c2e":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return c})},"5c15":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u},"91cf":function(t,n,e){"use strict";e.r(n);var u=e("4c2e"),c=e("f875");for(var r in c)"default"!==r&&function(t){e.d(n,t,function(){return c[t]})}(r);e("c841");var a=e("2877"),f=Object(a["a"])(c["default"],u["a"],u["b"],!1,null,"f232ac38",null);n["default"]=f.exports},c841:function(t,n,e){"use strict";var u=e("d54d"),c=e.n(u);c.a},d54d:function(t,n,e){},f798:function(t,n,e){"use strict";(function(t){e("d1f0"),e("921b");u(e("66fd"));var n=u(e("91cf"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},f875:function(t,n,e){"use strict";e.r(n);var u=e("5c15"),c=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=c.a}},[["f798","common/runtime","common/vendor"]]]);
});
require('pages/my/masterWeixin/masterWeixin.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

