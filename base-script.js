// Input 0
'use strict';var j = void 0, k = true, m = null, n = false, o, r = this;
function aa() {
}
function ba(a) {
  a.c = function() {
    return a.Sc || (a.Sc = new a)
  }
}
function ca(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return b
        }
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function da(a) {
  return a != m
}
function ea(a) {
  var b = ca(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function s(a) {
  return typeof a == "string"
}
function fa(a) {
  return ca(a) == "function"
}
function ga(a) {
  a = ca(a);
  return a == "object" || a == "array" || a == "function"
}
var ha = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ia = 0;
function ja(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ka(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }else {
    return function() {
      return a.apply(b, arguments)
    }
  }
}
function t(a, b, c) {
  t = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ja : ka;
  return t.apply(m, arguments)
}
function la(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var u = Date.now || function() {
  return+new Date
};
function v(a, b) {
  var c = a.split("."), d = r;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var e;c.length && (e = c.shift());) {
    !c.length && b !== j ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
  }
}
function w(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.nb = b.prototype;
  a.prototype = new c
}
;
// Input 1
var ma;
function x() {
  this.H = 0;
  this.ac = []
}
ba(x);
function na(a, b) {
  a.ac.push(b)
}
x.prototype.update = function(a) {
  if(this.H != a) {
    this.H = a, _gaq.push(["_trackEvent", "Map", "Zoom level change", a]), y(this.ac, function(a) {
      a()
    })
  }
};
function oa() {
  var a = x.c();
  return a.H > 15 ? 0 : a.H == 15 ? 1 : 9 - Math.ceil(a.H / 2)
}
function pa() {
  var a = x.c();
  return a.H >= 18 ? 1 : a.H >= 16 ? 0.8 : a.H >= 14 ? 0.6 : 0.4
}
;
// Input 2
function qa() {
  this.Y = {};
  this.jb = this.Jd = "";
  this.o = 0
}
;
// Input 3
function ra(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
w(ra, Error);
ra.prototype.name = "CustomError";
// Input 4
function sa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function z(a, b) {
  var c = String(a), d = c.indexOf(".");
  if(d == -1) {
    d = c.length
  }
  d = Math.max(0, b - d);
  return Array(d + 1).join("0") + c
}
function ta(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0;c == 0 && g < f;g++) {
    var h = d[g] || "", i = e[g] || "", l = /(\d*)(\D*)/g, q = /(\d*)(\D*)/g;
    do {
      var p = l.exec(h) || ["", "", ""], E = q.exec(i) || ["", "", ""];
      if(p[0].length == 0 && E[0].length == 0) {
        break
      }
      c = ua(p[1].length == 0 ? 0 : parseInt(p[1], 10), E[1].length == 0 ? 0 : parseInt(E[1], 10)) || ua(p[2].length == 0, E[2].length == 0) || ua(p[2], E[2])
    }while(c == 0)
  }
  return c
}
function ua(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
var va = {};
function wa(a) {
  return va[a] || (va[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;
// Input 5
function xa(a, b) {
  b.unshift(a);
  ra.call(this, sa.apply(m, b));
  b.shift();
  this.Ld = a
}
w(xa, ra);
xa.prototype.name = "AssertionError";
function ya(a, b) {
  throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;
// Input 6
// Input 7
var za, Aa, Ba, Ca, Da;
function Ea() {
  return r.navigator ? r.navigator.userAgent : m
}
function Fa() {
  return r.navigator
}
Ca = Ba = Aa = za = n;
var Ga;
if(Ga = Ea()) {
  var Ha = Fa();
  za = Ga.indexOf("Opera") == 0;
  Aa = !za && Ga.indexOf("MSIE") != -1;
  Ba = !za && Ga.indexOf("WebKit") != -1;
  Ca = !za && !Ba && Ha.product == "Gecko"
}
var Ia = za, A = Aa, Ja = Ca, Ka = Ba, La = Fa();
Da = (La && La.platform || "").indexOf("Mac") != -1;
var Ma = !!Fa() && (Fa().appVersion || "").indexOf("X11") != -1, Na;
a: {
  var Oa = "", Pa;
  if(Ia && r.opera) {
    var Qa = r.opera.version, Oa = typeof Qa == "function" ? Qa() : Qa
  }else {
    if(Ja ? Pa = /rv\:([^\);]+)(\)|;)/ : A ? Pa = /MSIE\s+([^\);]+)(\)|;)/ : Ka && (Pa = /WebKit\/(\S+)/), Pa) {
      var Ra = Pa.exec(Ea()), Oa = Ra ? Ra[1] : ""
    }
  }
  if(A) {
    var Sa, Ta = r.document;
    Sa = Ta ? Ta.documentMode : j;
    if(Sa > parseFloat(Oa)) {
      Na = String(Sa);
      break a
    }
  }
  Na = Oa
}
var Ua = {};
function Va(a) {
  return Ua[a] || (Ua[a] = ta(Na, a) >= 0)
}
var Wa = {};
function Xa() {
  return Wa[9] || (Wa[9] = A && document.documentMode && document.documentMode >= 9)
}
;
// Input 8
function B(a, b, c) {
  for(var d in a) {
    b.call(c, a[d], d, a)
  }
}
function Ya(a, b, c) {
  var d = {}, e;
  for(e in a) {
    b.call(c, a[e], e, a) && (d[e] = a[e])
  }
  return d
}
function Za(a) {
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
}
function $a(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function ab(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function bb(a) {
  for(var b in a) {
    return n
  }
  return k
}
function cb(a, b) {
  var c = MAP_PARAMS;
  return a in c ? c[a] : b
}
;
// Input 9
!A || Xa();
var db = !A || Xa();
A && Va("8");
// Input 10
var C = Array.prototype, eb = C.indexOf ? function(a, b, c) {
  return C.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == m ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(s(a)) {
    return!s(b) || b.length != 1 ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, y = C.forEach ? function(a, b, c) {
  C.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = s(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
}, fb = C.filter ? function(a, b, c) {
  return C.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, g = s(a) ? a.split("") : a, h = 0;h < d;h++) {
    if(h in g) {
      var i = g[h];
      b.call(c, i, h, a) && (e[f++] = i)
    }
  }
  return e
}, D = C.map ? function(a, b, c) {
  return C.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), f = s(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && (e[g] = b.call(c, f[g], g, a))
  }
  return e
};
function gb(a, b, c) {
  if(a.reduce) {
    return a.reduce(b, c)
  }
  var d = c;
  y(a, function(c, f) {
    d = b.call(j, d, c, f, a)
  });
  return d
}
function hb(a, b) {
  var c = eb(a, b);
  c >= 0 && C.splice.call(a, c, 1)
}
function ib(a) {
  return C.concat.apply(C, arguments)
}
function jb(a) {
  if(ca(a) == "array") {
    return ib(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function kb(a, b, c, d) {
  C.splice.apply(a, lb(arguments, 1))
}
function lb(a, b, c) {
  return arguments.length <= 2 ? C.slice.call(a, b) : C.slice.call(a, b, c)
}
function mb(a, b, c) {
  if(!ea(a) || !ea(b) || a.length != b.length) {
    return n
  }
  for(var d = a.length, c = c || nb, e = 0;e < d;e++) {
    if(!c(a[e], b[e])) {
      return n
    }
  }
  return k
}
function nb(a, b) {
  return a === b
}
;
// Input 11
// Input 12
// Input 13
// Input 14
// Input 15
function ob() {
}
ob.prototype.xb = n;
ob.prototype.P = function() {
  if(!this.xb) {
    this.xb = k, this.Q()
  }
};
ob.prototype.Q = function() {
  this.Mc && pb.apply(m, this.Mc)
};
function pb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ea(d) ? pb.apply(m, d) : d && typeof d.P == "function" && d.P()
  }
}
;
// Input 16
function F(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
w(F, ob);
F.prototype.Q = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
F.prototype.Ea = n;
F.prototype.kd = k;
F.prototype.stopPropagation = function() {
  this.Ea = k
};
// Input 17
function qb(a) {
  qb[" "](a);
  return a
}
qb[" "] = aa;
// Input 18
function rb(a, b) {
  a && this.v(a, b)
}
w(rb, F);
o = rb.prototype;
o.target = m;
o.relatedTarget = m;
o.offsetX = 0;
o.offsetY = 0;
o.clientX = 0;
o.clientY = 0;
o.screenX = 0;
o.screenY = 0;
o.button = 0;
o.keyCode = 0;
o.charCode = 0;
o.ctrlKey = n;
o.altKey = n;
o.shiftKey = n;
o.metaKey = n;
o.cd = n;
o.ea = m;
o.v = function(a, b) {
  var c = this.type = a.type;
  F.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ja) {
      var e;
      a: {
        try {
          qb(d.nodeName);
          e = k;
          break a
        }catch(f) {
        }
        e = n
      }
      e || (d = m)
    }
  }else {
    if(c == "mouseover") {
      d = a.fromElement
    }else {
      if(c == "mouseout") {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== j ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== j ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== j ? a.clientX : a.pageX;
  this.clientY = a.clientY !== j ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.cd = Da ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ea = a;
  delete this.kd;
  delete this.Ea
};
o.stopPropagation = function() {
  rb.nb.stopPropagation.call(this);
  this.ea.stopPropagation ? this.ea.stopPropagation() : this.ea.cancelBubble = k
};
o.Q = function() {
  rb.nb.Q.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ea = m
};
// Input 19
function sb() {
}
var tb = 0;
o = sb.prototype;
o.key = 0;
o.W = n;
o.tb = n;
o.v = function(a, b, c, d, e, f) {
  if(fa(a)) {
    this.Gb = k
  }else {
    if(a && a.handleEvent && fa(a.handleEvent)) {
      this.Gb = n
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.wa = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Cb = f;
  this.tb = n;
  this.key = ++tb;
  this.W = n
};
o.handleEvent = function(a) {
  return this.Gb ? this.wa.call(this.Cb || this.src, a) : this.wa.handleEvent.call(this.wa, a)
};
// Input 20
var ub, vb = (ub = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
// Input 21
function G(a, b) {
  this.Lb = b;
  this.K = [];
  if(a > this.Lb) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var c = 0;c < a;c++) {
    this.K.push(this.A ? this.A() : {})
  }
}
w(G, ob);
G.prototype.A = m;
G.prototype.wb = m;
function wb(a) {
  return a.K.length ? a.K.pop() : a.A ? a.A() : {}
}
function xb(a, b) {
  a.K.length < a.Lb ? a.K.push(b) : yb(a, b)
}
function yb(a, b) {
  if(a.wb) {
    a.wb(b)
  }else {
    if(ga(b)) {
      if(fa(b.P)) {
        b.P()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
G.prototype.Q = function() {
  G.nb.Q.call(this);
  for(var a = this.K;a.length;) {
    yb(this, a.pop())
  }
  delete this.K
};
// Input 22
var zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb;
(function() {
  function a() {
    return{G:0, V:0}
  }
  function b() {
    return[]
  }
  function c() {
    var a = db ? function(b) {
      return g.call(a.src, a.key, b)
    } : function(b) {
      b = g.call(a.src, a.key, b);
      if(!b) {
        return b
      }
    };
    return a
  }
  function d() {
    return new sb
  }
  function e() {
    return new rb
  }
  var f = ub && !(ta(vb, "5.7") >= 0), g;
  Eb = function(a) {
    g = a
  };
  if(f) {
    zb = function() {
      return wb(h)
    };
    Ab = function(a) {
      xb(h, a)
    };
    Bb = function() {
      return wb(i)
    };
    Cb = function(a) {
      xb(i, a)
    };
    Db = function() {
      return wb(l)
    };
    Fb = function() {
      xb(l, c())
    };
    Gb = function() {
      return wb(q)
    };
    Hb = function(a) {
      xb(q, a)
    };
    Ib = function() {
      return wb(p)
    };
    Jb = function(a) {
      xb(p, a)
    };
    var h = new G(0, 600);
    h.A = a;
    var i = new G(0, 600);
    i.A = b;
    var l = new G(0, 600);
    l.A = c;
    var q = new G(0, 600);
    q.A = d;
    var p = new G(0, 600);
    p.A = e
  }else {
    zb = a, Ab = aa, Bb = b, Cb = aa, Db = c, Fb = aa, Gb = d, Hb = aa, Ib = e, Jb = aa
  }
})();
// Input 23
var Kb = {}, H = {}, Lb = {}, Mb = {};
function I(a, b, c, d, e) {
  if(b) {
    if(ca(b) == "array") {
      for(var f = 0;f < b.length;f++) {
        I(a, b[f], c, d, e)
      }
      return m
    }else {
      var d = !!d, g = H;
      b in g || (g[b] = zb());
      g = g[b];
      d in g || (g[d] = zb(), g.G++);
      var g = g[d], h = a[ha] || (a[ha] = ++ia), i;
      g.V++;
      if(g[h]) {
        i = g[h];
        for(f = 0;f < i.length;f++) {
          if(g = i[f], g.wa == c && g.Cb == e) {
            if(g.W) {
              break
            }
            return i[f].key
          }
        }
      }else {
        i = g[h] = Bb(), g.G++
      }
      f = Db();
      f.src = a;
      g = Gb();
      g.v(c, f, a, b, d, e);
      c = g.key;
      f.key = c;
      i.push(g);
      Kb[c] = g;
      Lb[h] || (Lb[h] = Bb());
      Lb[h].push(g);
      a.addEventListener ? (a == r || !a.Kc) && a.addEventListener(b, f, d) : a.attachEvent(b in Mb ? Mb[b] : Mb[b] = "on" + b, f);
      return c
    }
  }else {
    throw Error("Invalid event type");
  }
}
function Nb(a) {
  if(Kb[a]) {
    var b = Kb[a];
    if(!b.W) {
      var c = b.src, d = b.type, e = b.proxy, f = b.capture;
      c.removeEventListener ? (c == r || !c.Kc) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Mb ? Mb[d] : Mb[d] = "on" + d, e);
      c = c[ha] || (c[ha] = ++ia);
      e = H[d][f][c];
      if(Lb[c]) {
        var g = Lb[c];
        hb(g, b);
        g.length == 0 && delete Lb[c]
      }
      b.W = k;
      e.Mb = k;
      Ob(d, f, c, e);
      delete Kb[a]
    }
  }
}
function Ob(a, b, c, d) {
  if(!d.xa && d.Mb) {
    for(var e = 0, f = 0;e < d.length;e++) {
      if(d[e].W) {
        var g = d[e].proxy;
        g.src = m;
        Fb(g);
        Hb(d[e])
      }else {
        e != f && (d[f] = d[e]), f++
      }
    }
    d.length = f;
    d.Mb = n;
    f == 0 && (Cb(d), delete H[a][b][c], H[a][b].G--, H[a][b].G == 0 && (Ab(H[a][b]), delete H[a][b], H[a].G--), H[a].G == 0 && (Ab(H[a]), delete H[a]))
  }
}
function Pb(a, b, c, d, e) {
  var f = 1, b = b[ha] || (b[ha] = ++ia);
  if(a[b]) {
    a.V--;
    a = a[b];
    a.xa ? a.xa++ : a.xa = 1;
    try {
      for(var g = a.length, h = 0;h < g;h++) {
        var i = a[h];
        i && !i.W && (f &= Qb(i, e) !== n)
      }
    }finally {
      a.xa--, Ob(c, d, b, a)
    }
  }
  return Boolean(f)
}
function Qb(a, b) {
  var c = a.handleEvent(b);
  a.tb && Nb(a.key);
  return c
}
Eb(function(a, b) {
  if(!Kb[a]) {
    return k
  }
  var c = Kb[a], d = c.type, e = H;
  if(!(d in e)) {
    return k
  }
  var e = e[d], f, g;
  if(!db) {
    var h;
    if(!(h = b)) {
      a: {
        h = "window.event".split(".");
        for(var i = r;f = h.shift();) {
          if(da(i[f])) {
            i = i[f]
          }else {
            h = m;
            break a
          }
        }
        h = i
      }
    }
    f = h;
    h = k in e;
    i = n in e;
    if(h) {
      if(f.keyCode < 0 || f.returnValue != j) {
        return k
      }
      a: {
        var l = n;
        if(f.keyCode == 0) {
          try {
            f.keyCode = -1;
            break a
          }catch(q) {
            l = k
          }
        }
        if(l || f.returnValue == j) {
          f.returnValue = k
        }
      }
    }
    l = Ib();
    l.v(f, this);
    f = k;
    try {
      if(h) {
        for(var p = Bb(), E = l.currentTarget;E;E = E.parentNode) {
          p.push(E)
        }
        g = e[k];
        g.V = g.G;
        for(var O = p.length - 1;!l.Ea && O >= 0 && g.V;O--) {
          l.currentTarget = p[O], f &= Pb(g, p[O], d, k, l)
        }
        if(i) {
          g = e[n];
          g.V = g.G;
          for(O = 0;!l.Ea && O < p.length && g.V;O++) {
            l.currentTarget = p[O], f &= Pb(g, p[O], d, n, l)
          }
        }
      }else {
        f = Qb(c, l)
      }
    }finally {
      if(p) {
        p.length = 0, Cb(p)
      }
      l.P();
      Jb(l)
    }
    return f
  }
  d = new rb(b, this);
  try {
    f = Qb(c, d)
  }finally {
    d.P()
  }
  return f
});
// Input 24
function J(a, b) {
  this.q = ub ? [] : "";
  a != m && this.append.apply(this, arguments)
}
ub ? (J.prototype.Na = 0, J.prototype.append = function(a, b, c) {
  b == m ? this.q[this.Na++] = a : (this.q.push.apply(this.q, arguments), this.Na = this.q.length);
  return this
}) : J.prototype.append = function(a, b, c) {
  this.q += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.q += arguments[d]
    }
  }
  return this
};
J.prototype.clear = function() {
  ub ? this.Na = this.q.length = 0 : this.q = ""
};
J.prototype.toString = function() {
  if(ub) {
    var a = this.q.join("");
    this.clear();
    a && this.append(a);
    return a
  }else {
    return this.q
  }
};
// Input 25
var Rb;
function Sb(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function K(a, b) {
  for(var c = Sb(a), d = lb(arguments, 1), e = c, f = 0, g = 0;g < d.length;g++) {
    eb(e, d[g]) >= 0 || (e.push(d[g]), f++)
  }
  a.className = c.join(" ")
}
function L(a, b) {
  for(var c = Sb(a), d = lb(arguments, 1), e = c, f = 0, g = 0;g < e.length;g++) {
    eb(d, e[g]) >= 0 && (kb(e, g--, 1), f++)
  }
  a.className = c.join(" ")
}
function Tb(a, b, c) {
  for(var d = Sb(a), e = n, f = 0;f < d.length;f++) {
    d[f] == b && (kb(d, f--, 1), e = k)
  }
  if(e) {
    d.push(c), a.className = d.join(" ")
  }
}
function Ub(a, b) {
  var c = !(eb(Sb(a), b) >= 0);
  c ? K(a, b) : L(a, b);
  return c
}
;
// Input 26
// Input 27
// Input 28
!A || Xa();
!Ja && !A || A && Xa() || Ja && Va("1.9.1");
A && Va("9");
// Input 29
// Input 30
function Vb(a, b, c) {
  function d(c) {
    c && b.appendChild(s(c) ? a.createTextNode(c) : c)
  }
  for(var e = 1;e < c.length;e++) {
    var f = c[e];
    ea(f) && !(ga(f) && f.nodeType > 0) ? y(Wb(f) ? jb(f) : f, d) : d(f)
  }
}
function Xb(a, b) {
  Vb(a.nodeType == 9 ? a : a.ownerDocument || a.document, a, arguments)
}
function Yb(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : m
}
function Zb(a) {
  var b, c = a.parentNode;
  if(c && c.nodeType != 11) {
    if(a.removeNode) {
      a.removeNode(n)
    }else {
      for(;b = a.firstChild;) {
        c.insertBefore(b, a)
      }
      Yb(a)
    }
  }
}
function Wb(a) {
  if(a && typeof a.length == "number") {
    if(ga(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(fa(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return n
}
function $b(a) {
  this.yb = a || r.document || document
}
o = $b.prototype;
o.createElement = function(a) {
  return this.yb.createElement(a)
};
o.createTextNode = function(a) {
  return this.yb.createTextNode(a)
};
o.appendChild = function(a, b) {
  a.appendChild(b)
};
o.append = Xb;
o.removeNode = Yb;
o.contains = function(a, b) {
  if(a.contains && b.nodeType == 1) {
    return a == b || a.contains(b)
  }
  if(typeof a.compareDocumentPosition != "undefined") {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
};
// Input 31
function ac(a, b) {
  var c = (Rb || (Rb = new $b)).createElement("DIV");
  c.innerHTML = a(b || bc, j, j);
  if(c.childNodes.length == 1) {
    var d = c.firstChild;
    if(d.nodeType == 1) {
      return d
    }
  }
  return c
}
var bc = {};
// Input 32
// Input 33
// Input 34
A && Va(8);
// Input 35
// Input 36
// Input 37
function M(a, b, c) {
  a.innerHTML = b(c || bc, j, j)
}
function cc(a, b) {
  function c() {
  }
  c.prototype = a;
  var d = new c, e;
  for(e in b) {
    d[e] = b[e]
  }
  return d
}
function N(a) {
  return typeof a === "object" && a && a.Ic === 0 ? a.content : String(a).replace(dc, ec)
}
function P(a) {
  typeof a === "object" && a && a.Ic === 0 ? (a = String(a.content).replace(fc, ""), a = String(a).replace(gc, ec)) : a = String(a).replace(dc, ec);
  return a
}
function Q(a) {
  if(a == m) {
    return" null "
  }
  switch(typeof a) {
    case "boolean":
    ;
    case "number":
      return" " + a + " ";
    default:
      return"'" + String(String(a)).replace(hc, ic) + "'"
  }
}
var jc = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\u000b":"&#11;", "\u000c":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function ec(a) {
  return jc[a]
}
var kc = {"\x00":"\\x00", "\u0008":"\\x08", "\t":"\\t", "\n":"\\n", "\u000b":"\\x0b", "\u000c":"\\f", "\r":"\\r", '"':"\\x22", "&":"\\x26", "'":"\\x27", "/":"\\/", "<":"\\x3c", "=":"\\x3d", ">":"\\x3e", "\\":"\\\\", "\u0085":"\\x85", "\u2028":"\\u2028", "\u2029":"\\u2029", $:"\\x24", "(":"\\x28", ")":"\\x29", "*":"\\x2a", "+":"\\x2b", ",":"\\x2c", "-":"\\x2d", ".":"\\x2e", ":":"\\x3a", "?":"\\x3f", "[":"\\x5b", "]":"\\x5d", "^":"\\x5e", "{":"\\x7b", "|":"\\x7c", "}":"\\x7d"};
function ic(a) {
  return kc[a]
}
var lc = {"\x00":"%00", "\u0001":"%01", "\u0002":"%02", "\u0003":"%03", "\u0004":"%04", "\u0005":"%05", "\u0006":"%06", "\u0007":"%07", "\u0008":"%08", "\t":"%09", "\n":"%0A", "\u000b":"%0B", "\u000c":"%0C", "\r":"%0D", "\u000e":"%0E", "\u000f":"%0F", "\u0010":"%10", "\u0011":"%11", "\u0012":"%12", "\u0013":"%13", "\u0014":"%14", "\u0015":"%15", "\u0016":"%16", "\u0017":"%17", "\u0018":"%18", "\u0019":"%19", "\u001a":"%1A", "\u001b":"%1B", "\u001c":"%1C", "\u001d":"%1D", "\u001e":"%1E", "\u001f":"%1F", 
" ":"%20", '"':"%22", "'":"%27", "(":"%28", ")":"%29", "<":"%3C", ">":"%3E", "\\":"%5C", "{":"%7B", "}":"%7D", "\u007f":"%7F", "\u0085":"%C2%85", "\u00a0":"%C2%A0", "\u2028":"%E2%80%A8", "\u2029":"%E2%80%A9", "\uff01":"%EF%BC%81", "\uff03":"%EF%BC%83", "\uff04":"%EF%BC%84", "\uff06":"%EF%BC%86", "\uff07":"%EF%BC%87", "\uff08":"%EF%BC%88", "\uff09":"%EF%BC%89", "\uff0a":"%EF%BC%8A", "\uff0b":"%EF%BC%8B", "\uff0c":"%EF%BC%8C", "\uff0f":"%EF%BC%8F", "\uff1a":"%EF%BC%9A", "\uff1b":"%EF%BC%9B", "\uff1d":"%EF%BC%9D", 
"\uff1f":"%EF%BC%9F", "\uff20":"%EF%BC%A0", "\uff3b":"%EF%BC%BB", "\uff3d":"%EF%BC%BD"};
function mc(a) {
  return lc[a]
}
var dc = /[\x00\x22\x26\x27\x3c\x3e]/g, gc = /[\x00\x22\x27\x3c\x3e]/g, hc = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g, nc = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, oc = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i, pc = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
function qc(a) {
  a = String(a);
  return!oc.test(a) ? (ya("Bad value `%s` for |filterCssValue", [a]), "zSoyz") : a
}
function rc(a) {
  a = String(a);
  return!pc.test(a) ? (ya("Bad value `%s` for |filterNormalizeUri", [a]), "zSoyz") : a.replace(nc, mc)
}
var fc = /<(?:!|\/?[a-zA-Z])(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
// Input 38
function sc(a, b) {
  var c = b || new J;
  c.append('<div id="player_ap_icon"><div class="SPRITE_ap_icon_', P(a.g.b.pa), "_", P(a.g.sb), '"><div id="player_level">', N(a.g.e), '</div></div></div><div class="', P(a.g.b.css), '"><div class="player_nickname">', N(a.g.M), '</div><div id="xm_slot"><div id="xm_indicator" style="width: ', a.g.pb == m ? "" : qc(a.g.pb), 'px;"></div></div><div id="xm">', N(a.g.Ma), ' <span id="xm_reward"></span><span class="color_orange"> / ', N(a.g.Xa), ' XM</span></div><div id="ap" class="visible_on_show_box"><div><span class="number">', 
  N(a.g.O), "</span> AP  Level ", N(a.g.e), "</div>", a.g.ka > 0 ? '<div><span class="color_orange">[ </span><span class="number">' + N(a.g.ab) + '</span> AP<span class="color_orange"> required for level ' + N(a.g.ka) + " ]</span></div>" : "", "</div></div>");
  return b ? "" : c.toString()
}
function tc(a, b) {
  var c = b || new J;
  c.append('<div id="redeem_results"><span id="redeem_error"></span><span id="redeemed_rewards" class="color_orange"></span></div><form onSubmit="redeem(); return false;" name="redeem_reward"><input type="submit" value="Input passcode" ontouchstart="showpi(true);"  onclick="showpi(true);" onmouseover="showpi(true);" /><input type="text" id="passcode" class="form_input" onmouseout="showpi(false);" /></form>');
  return b ? "" : c.toString()
}
;
// Input 39
function uc(a, b, c, d) {
  this.Qa = a;
  this.color = b;
  this.css = c;
  this.pa = d;
  this.Pc = d + "_symbol_black";
  this.Wc = "mod_icon_" + d + "_L1"
}
var vc = new uc("Neutral", "#cccc00", "NEUTRAL", "neutral"), wc = new uc("Enlightened", "#00cc00", "ALIENS", "enl"), xc = new uc("Resistance", "#0000cc", "RESISTANCE", "hum");
function yc(a) {
  return a == "ALIENS" ? wc : a == "RESISTANCE" ? xc : vc
}
;
// Input 40
function R(a, b, c) {
  this.a = a;
  this.b = yc(b);
  this.o = c
}
R.prototype.toString = function() {
  return"guid:" + this.a + ",team:" + this.b.Qa
};
function zc(a, b) {
  var c = fb(a, da), d = fb(b, da);
  return c.length != d.length ? n : mb(c, d, function(a, b) {
    y(ab(a), function(c) {
      if(a[c] != b[c]) {
        return n
      }
    });
    return k
  })
}
;
// Input 41
function Ac(a, b, c, d, e) {
  R.call(this, a, b, u());
  this.M = c;
  this.sb = this.pb = this.Xa = this.ab = this.ka = this.e = this.Ma = this.O = 0;
  Bc(this, d, e)
}
w(Ac, R);
function Bc(a, b, c) {
  var d = Cc;
  a.O = b;
  a.Ma = c;
  a.e = Dc(a.O);
  a.ka = a.e == d.length ? 0 : a.e + 1;
  a.ab = a.ka > 0 ? d[a.ka - 1] : 0;
  a.Xa = 2E3 + Dc(a.O) * 1E3;
  a.pb = Math.ceil(330 * a.Ma / a.Xa);
  a.sb = a.ab == 0 ? 0 : Math.floor(8 * ((a.O - d[a.e - 1]) / (d[a.e] - d[a.e - 1])))
}
var Cc = [0, 1E4, 3E4, 7E4, 15E4, 3E5, 6E5, 12E5];
Ac.prototype.ga = function() {
  return!!this.M
};
Ac.prototype.merge = function(a) {
  if(this.a == a.a) {
    this.b = a.b, this.M = a.M, Bc(this, a.O, a.Ma)
  }
};
function Dc(a) {
  for(var b = Cc, c = b.length;c > 0;c--) {
    if(a >= b[c - 1]) {
      return c
    }
  }
  return 1
}
function Ec(a) {
  return new Ac(a.guid, a.team, a.nickname, +a.ap, +a.energy)
}
;
// Input 42
function Fc(a, b) {
  R.call(this, a, "", u());
  this.type = b
}
w(Fc, R);
var Gc = {xd:"Resonator", yd:"Xmp Burster", Dd:"Media", Fd:"Portal Key", Gd:"Portal Shield"};
function Hc() {
  this.L = {}
}
function Ic(a) {
  var b = "";
  B(Gc, function(a) {
    this.L[a] && this.L[a].length && (b && (b += ", "), b += a + "(" + (this.L[a] ? this.L[a].length : 0) + ")")
  }, a);
  return b
}
function Jc(a) {
  var b = new Hc;
  y(a, function(a) {
    a && (b.L[a.type] || (b.L[a.type] = []), b.L[a.type].push(a))
  });
  return b
}
;
// Input 43
function Kc() {
}
Kc.prototype.Nc = function(a) {
  var b = a.result;
  document.getElementById("redeem_error").innerHTML = (b ? 0 : a.error) ? (b ? "" : a.error) == "INVALID_PASSCODE" ? "The passcode entered was invalid." : (b ? "" : a.error) == "ALREADY_REDEEMED_BY_PLAYER" ? "You have already used the passcode entered." : (b ? "" : a.error) == "ALREADY_REDEEMED" ? "The passcode entered was already redeemed." : "The passcode entered cannot be redeemed." : "";
  var a = b ? b.apAward : "", c = b ? b.xmAward : "", b = b ? b.inventoryAward : [], d = D(b || [], function(a) {
    a: {
      var b = a[2], c;
      "resourceWithLevels" in b ? c = b.resourceWithLevels.resourceType : "resource" in b && (c = b.resource.resourceType);
      if(c && (b = Gc[c])) {
        a = new Fc(a[0], b);
        break a
      }
      a = m
    }
    return a
  }), d = Jc(d), e = document.getElementById("redeemed_rewards");
  a || c || b.length > 0 ? (e.innerHTML = "Passcode accepted." + (a ? " " + a + " AP rewarded." : "") + (c ? " " + c + " XM rewarded." : "") + (b.length > 0 ? " " + Ic(d) + " unlocked." : ""), _gaq.push(["_trackEvent", "Action", "Passcode accepted"])) : e.innerHTML = ""
};
Kc.prototype.mb = function(a) {
  var b = this.fb;
  a ? K(b, "show_box") : L(b, "show_box")
};
Kc.prototype.qd = function() {
  Ub(this.fb, "show_box")
};
// Input 44
function Lc() {
  this.lb = {};
  this.Kd = []
}
function Mc(a, b) {
  a.lb[b] || (a.lb[b] = []);
  return a.lb[b]
}
Lc.prototype.Fc = function(a, b) {
  var c = Mc(this, a);
  c.length >= (b || 1) && c.shift().abort()
};
Lc.prototype.gd = function(a, b) {
  hb(Mc(this, a), b)
};
function S(a, b, c, d, e, f) {
  c.method = b;
  var g = t(a.Fc, a, b, e), h = t(a.bd, a, b, d), i = t(a.gd, a);
  _gaq.push(["_trackEvent", "RPC", b]);
  c = $.ajax({type:"POST", url:"/rpc/" + b, dataType:"json", contentType:"application/json; charset=utf-8", data:JSON.stringify(c), Id:function() {
    g()
  }, success:function(a) {
    h(a)
  }, error:function(a, c, d) {
    _gaq.push(["_trackEvent", "RPC_error", b]);
    f && f({error:c || "unknown", httpError:d})
  }, complete:function(a) {
    i(b, a)
  }});
  Mc(a, b).push(c)
}
Lc.prototype.bd = function(a, b, c) {
  a = Mc(this, a).length > 1;
  b(c, a)
};
function Nc(a, b, c) {
  var d = [];
  y(c, function(a, b) {
    for(var c = b % 4;d.length <= c;) {
      d.push({minLevelOfDetail:-1, boundsParamsList:[]})
    }
    d[c].boundsParamsList.push({id:a.jb, minLatE6:Math.round(a.Y.bounds.sw.lat() * 1E6), minLngE6:Math.round(a.Y.bounds.sw.lng() * 1E6), maxLatE6:Math.round(a.Y.bounds.ne.lat() * 1E6), maxLngE6:Math.round(a.Y.bounds.ne.lng() * 1E6), timestampMs:a.D, qk:a.jb})
  });
  var e = d.length;
  y(d, function(a) {
    S(this, "dashboard.getThinnedEntitiesV2", a, b, e)
  }, a)
}
Lc.prototype.Ra = function(a, b, c, d, e, f) {
  if(!d) {
    d = new qa;
    d.o = u();
    var g = {};
    g.sw = new google.maps.LatLng(-90, -180);
    g.ne = new google.maps.LatLng(90, 180);
    d.bounds = g
  }
  e = e || -1;
  f = f || -1;
  b = {desiredNumItems:b, minLatE6:Math.round(d.bounds.sw.lat() * 1E6), minLngE6:Math.round(d.bounds.sw.lng() * 1E6), maxLatE6:Math.round(d.bounds.ne.lat() * 1E6), maxLngE6:Math.round(d.bounds.ne.lng() * 1E6), minTimestampMs:e, maxTimestampMs:f};
  c && (b.factionOnly = k);
  e > -1 && (b.ascendingTimestampOrder = k);
  S(this, "dashboard.getPaginatedPlextsV2", b, a, 12)
};
function Oc(a, b, c) {
  S(a, "dashboard.getPlayersByGuids", {guids:b}, c)
}
;
// Input 45
function Pc(a, b, c) {
  this.a = a;
  this.lat = b;
  this.lng = c
}
function Qc(a) {
  return!!a.lat && !!a.lng
}
;
// Input 46
function Rc(a, b, c) {
  R.call(this, a, b, c);
  this.m = this.origin = m
}
w(Rc, R);
Rc.prototype.merge = function(a) {
  if(this.a != a.a) {
    return m
  }
  if(this.a == a.a && this.origin.lat == a.origin.lat && this.origin.lng == a.origin.lng && this.m.lat == a.m.lat && this.m.lng == a.m.lng) {
    return this
  }
  if(!Qc(this.origin) && Qc(a.origin)) {
    this.origin = a.origin
  }else {
    if(!Qc(this.m) && Qc(a.m)) {
      this.m = a.m
    }
  }
  this.o = Math.max(this.o, a.o);
  return this
};
// Input 47
function Sc() {
  this.T = {}
}
ba(Sc);
function Tc(a, b) {
  a.T[b] || (a.T[b] = new Ac(b, m, "", 0, 0));
  return a.T[b]
}
;
// Input 48
function Uc(a, b, c) {
  this.e = a;
  this.cb = Tc(Sc.c(), b);
  this.va = Math.ceil(16 * c / Vc[a])
}
var Vc = [0, 1E3, 1500, 2E3, 2500, 3E3, 4E3, 5E3, 6E3];
function Wc(a) {
  a = fb(a, function(a) {
    return!!a
  });
  return D(a, function(a) {
    return new Uc(a.level, a.ownerGuid, a.energyTotal)
  })
}
;
// Input 49
function Xc(a, b, c) {
  R.call(this, a, b, c);
  this.Ib = this.Hb = 0;
  this.e = 1;
  this.title = "";
  this.u = m;
  this.ta = 0;
  this.Z = m;
  this.R = [];
  this.w = [];
  this.isCaptured = n
}
w(Xc, R);
var Yc = {VERY_COMMON:"Very common", COMMON:"Common", LESS_COMMON:"Less common", RARE:"Rare", VERY_RARE:"Very rare", EXTREMELY_RARE:"Extremely rare"}, Zc = [16, 24, 32, 40, 48, 56, 64];
function $c(a) {
  return new google.maps.LatLng(a.Hb, a.Ib)
}
function ad(a, b) {
  var c = u(), d = Sc.c(), c = new Xc(a, b.controllingTeam.team, c);
  c.Hb = b.locationE6.latE6 / 1E6;
  c.Ib = b.locationE6.lngE6 / 1E6;
  c.w = Wc(b.resonatorArray.resonators);
  c.e = bd(c.w);
  var e = fb(b.portalV2.linkedModArray, da);
  c.R = D(e, function(a) {
    return{Nd:Yc[a.rarity], name:a.displayName, Ta:Tc(d, a.installingUser)}
  });
  if(b.captured) {
    c.isCaptured = k, c.ta = (new cd("MM/dd/yyyy")).format(new Date(parseInt(b.captured.capturedTime, 10))), c.Z = Tc(d, b.captured.capturingPlayerId)
  }
  if("descriptiveText" in b.portalV2) {
    if("TITLE" in b.portalV2.descriptiveText) {
      c.title = b.portalV2.descriptiveText.TITLE
    }
  }else {
    c.title = ""
  }
  b.imageByUrl && b.imageByUrl.imageUrl ? (c.u = b.imageByUrl.imageUrl.replace("medium", "small"), c.u = window.location.protocol == "https:" && c.u.indexOf("www.panoramio.com") > -1 ? c.u.replace("http://www", "https://ssl") : c.u.replace("http://", "//")) : c.u = "//commondatastorage.googleapis.com/ingress.com/img/default-portal-image.png";
  return c
}
function bd(a) {
  a = gb(a, function(a, b) {
    return a + b.e
  }, 0);
  if(a == 0) {
    return 1
  }else {
    for(var b = 0;b < 7;b++) {
      if(a < Zc[b]) {
        return b + 1
      }
    }
    return 8
  }
}
Xc.prototype.Wa = function(a) {
  return this.a == a.a && this.b == a.b && this.e == a.e && this.title == a.title && this.u == a.u && this.ta == a.ta && zc(this.R, a.R) && zc(this.w, a.w) && this.isCaptured == a.isCaptured
};
Xc.prototype.ga = function() {
  return dd(this).length == 0
};
function dd(a) {
  if(a.Z) {
    var b = {};
    b[a.Z.a] = a.Z;
    y(a.w, function(a) {
      b[a.cb.a] = a.cb
    });
    y(a.R, function(a) {
      b[a.Ta.a] = a.Ta
    });
    return fb($a(b), function(a) {
      return!a.ga()
    })
  }
  return[]
}
;
// Input 50
function ed(a, b, c, d) {
  R.call(this, a, b, c);
  this.U = d
}
w(ed, R);
ed.prototype.Wa = function(a) {
  if(this.a != a.a) {
    return n
  }
  for(var b = 0;b < this.U.length;b++) {
    if(!(this.U[b].lat == a.U[b].lat && this.U[b].lng == a.U[b].lng)) {
      return n
    }
  }
  return k
};
function fd(a, b) {
  var c = u(), d = D($a(b.capturedRegion), function(a) {
    return new Pc(a.guid, a.location.latE6 / 1E6, a.location.lngE6 / 1E6)
  });
  return new ed(a, b.controllingTeam.team, c, d)
}
;
// Input 51
function T() {
  this.i = {};
  this.na = {};
  this.ba = {};
  this.kb = {};
  this.r = new Lc;
  this.Fa = [];
  this.aa = {}
}
ba(T);
function gd(a, b, c) {
  for(var d = {}, e = 0;e < a.Fa.length;e++) {
    var f = a.Fa[e];
    if(a.i[f] && a.i[f][b] && a.i[f][b].entities) {
      for(var g = a.i[f][b].entities, h = 0;h < g.length;h++) {
        var i = g[h];
        c[i] && !d[i] && !a.aa[i] ? d[i] = c[i] : a.aa[i] && hb(a.i[f][b].entities, i)
      }
    }
  }
  return d
}
function hd(a, b) {
  a.i[b] || (a.i[b] = {});
  a.i[b].lastUpdated = u()
}
function id(a, b, c, d) {
  a.i[b] || (a.i[b] = {});
  if(!a.i[b][c]) {
    a.i[b][c] = {}, a.i[b][c].entities = []
  }
  a.i[b][c].entities.push(d)
}
function jd(a, b, c, d) {
  var e = ad(c, d), f = a.na[c];
  if(!f || !f.Wa(e)) {
    a.na[c] = e, y(d.portalV2.linkedEdges, function(a) {
      var e = u(), f = new Pc(c, d.locationE6.latE6 / 1E6, d.locationE6.lngE6 / 1E6), l = new Pc(a.otherPortalGuid), e = new Rc(a.edgeGuid, d.controllingTeam.team, e), a = a.isOrigin;
      e.origin = a ? f : l;
      e.m = a ? l : f;
      this.ba[e.a] = this.ba[e.a] ? this.ba[e.a].merge(e) : e;
      id(this, b, "edge", e.a)
    }, a)
  }
}
T.prototype.X = function(a, b, c, d) {
  if(!("result" in c) || !("map" in c.result)) {
    a(k)
  }else {
    var e = {};
    B(c.result.map, function(a, c) {
      "gameEntities" in a && (hd(this, c), y(a.gameEntities, function(a) {
        var b = a[0], a = a[2], d;
        if("portalV2" in a) {
          jd(this, c, b, a), d = "portal"
        }else {
          if("capturedRegion" in a) {
            a = fd(b, a);
            d = this.kb[b];
            if(!d || !d.Wa(a)) {
              this.kb[b] = a
            }
            d = "region"
          }else {
            if("edge" in a) {
              d = u(), d = new Rc(b, a.controllingTeam.team, d), a = a.edge, d.origin = new Pc(a.originPortalGuid, a.originPortalLocation.latE6 / 1E6, a.originPortalLocation.lngE6 / 1E6), d.m = new Pc(a.destinationPortalGuid, a.destinationPortalLocation.latE6 / 1E6, a.destinationPortalLocation.lngE6 / 1E6), this.ba[b] = d, d = "edge"
            }
          }
        }
        d && id(this, c, d, b)
      }, this));
      "deletedGameEntityGuids" in a && y(a.deletedGameEntityGuids, function(a) {
        this.aa[a] = a
      }, this);
      "error" in a && a.error == "TIMEOUT" && c in b && (e[c] = b[c])
    }, this);
    bb(e) ? a(!d) : (a(n), Nc(this.r, t(this.X, this, a, e), $a(e)))
  }
};
function kd(a, b) {
  return a.i[b] && a.i[b].lastUpdated ? +a.i[b].lastUpdated : 0
}
function ld(a, b, c) {
  a.aa = {};
  a.Fa = [];
  var d = {};
  B(b, function(a) {
    var b = a.quadkey;
    this.Fa.push(b);
    if(kd(this, b) + 18E4 < u()) {
      var c = new qa;
      c.Y = a;
      c.o = kd(this, b);
      c.jb = b;
      d[b] = c
    }
  }, a);
  bb(d) ? c(k) : Nc(a.r, t(a.X, a, c, d), $a(d))
}
function md(a, b, c) {
  b = a.na[b] || m;
  !b || b.ga() ? c(b) : Oc(a.r, D(dd(b), function(a) {
    return a.a
  }), t(a.ed, a, b, c))
}
T.prototype.ed = function(a, b, c) {
  if("result" in c) {
    var d = Sc.c();
    y(c.result, function(a) {
      a = Ec(a);
      d.T[a.a] ? d.T[a.a].merge(a) : d.T[a.a] = a
    })
  }
  b(a)
};
// Input 52
function nd(a) {
  return/^[+a-zA-Z0-9_.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,6}$/.test(a)
}
;
// Input 53
function od(a, b) {
  var c = b || new J;
  c.append('<div id="header_invites_box" class="header_box"><form onSubmit="return false;" id="send_invite_form" name="send_invite"><input type="email" id="invitee_email" placeholder="enter email" ', a.disabled ? "disabled" : "", ' /><input type="submit" value="Send" ', a.disabled ? "disabled" : "", ' /></form><div id="send_invite_status"></div><div id="invite_count_text">');
  pd(a, c);
  c.append("</div></div>");
  return b ? "" : c.toString()
}
function pd(a, b) {
  var c = b || new J;
  c.append(a.Ua == 0 ? "No invites left" : a.Ua == 1 ? "1 invite left" : N(a.Ua) + " invites left");
  return b ? "" : c.toString()
}
;
// Input 54
function qd() {
}
qd.prototype.draw = function(a) {
  var a = {Ua:a, disabled:a == 0}, b = document.getElementById("invite_count_text");
  b ? M(b, pd, a) : (a = ac(od, a), b = document.getElementById("header_invites"), b.parentNode.insertBefore(a, b.nextSibling))
};
// Input 55
function rd() {
  this.Fb = new qd
}
rd.prototype.v = function(a) {
  this.Fb.draw(a);
  this.ca = document.getElementById("invitee_email");
  this.N = document.getElementById("send_invite_status");
  (a = document.getElementById("send_invite_form")) && I(a, "submit", t(this.ld, this))
};
rd.prototype.ld = function() {
  var a = this.ca.value;
  if(nd(a)) {
    this.ca.value = "";
    this.N.innerHTML = "sending invite to " + a + "...";
    var b = t(this.$c, this, a);
    S(T.c().r, "dashboard.sendInviteEmail", {inviteeEmailAddress:a}, b);
    _gaq.push(["_trackEvent", "Action", "Send invite"])
  }else {
    this.N.innerHTML = "invalid email"
  }
};
rd.prototype.$c = function(a, b) {
  this.N.innerHTML = "error" in b ? "error sending invite to " + a : "invite sent to " + a;
  "result" in b && this.Fb.draw(+b.result.numAvailableInvites)
};
// Input 56
// Input 57
// Input 58
function sd(a, b, c) {
  s(b) ? td(a, c, b) : B(b, la(td, a))
}
function td(a, b, c) {
  a.style[wa(c)] = b
}
function ud(a, b) {
  typeof a == "number" && (a = (b ? Math.round(a) : a) + "px");
  return a
}
;
// Input 59
var vd = [{featureType:"all", elementType:"all", stylers:[{visibility:"on"}, {hue:"#0091ff"}, {invert_lightness:k}]}, {featureType:"water", elementType:"all", stylers:[{visibility:"on"}, {hue:"#005eff"}, {invert_lightness:k}]}, {featureType:"poi", stylers:[{visibility:"off"}]}, {featureType:"transit", elementType:"all", stylers:[{visibility:"off"}]}];
// Input 60
function wd(a, b) {
  var c = b || new J;
  c.append('<div class="', P(a.j.b.css), '"><div id="portal_details_container"><div id="pointy_container"><div id="pointy"></div></div><div class="portal_details_row"><div id="portal_primary_title">', N(a.j.title), '</div><div id="portal_close"><div class="SPRITE_close"></div></div></div>');
  var d = c || new J;
  d.append('<div class="portal_details_row"><div id="portal_image_container"><div id="portal_image"', a.j.u ? ' style="background: url(' + rc(a.j.u) + ') no-repeat center center"' : "", '></div></div><div id="portal_metadata">', a.j.e ? '<div id="portal_level">Level ' + N(a.j.e) + "</div>" : "", '<div id="portal_capture_status">');
  a.j.isCaptured && (d.append('<div id="portal_discovery_label">Discovery:</div><div id="portal_capture_details">'), xd(a, d), d.append("</div>"));
  d.append("</div></div></div>");
  a.j.isCaptured ? (c.append('<div id="portal_tabs_container" class="res_tab_selected"><div class="portal_details_row"><div id="portal_tab_group_decorator"><div id="pi-tab-res" class="portal_tab_title tab_selected">RESONATORS</div><div id="pi-tab-mod" class="portal_tab_title">MODS</div></div></div><div id="tab_content_res">'), yd({oa:a.j.w, b:a.j.b, s:k}, c), c.append('</div><div id="tab_content_mod">'), zd({Za:a.j.R, b:a.j.b}, c), c.append("</div></div>")) : c.append('<div class="portal_details_row"></div>');
  c.append("</div></div>");
  return b ? "" : c.toString()
}
function xd(a, b) {
  var c = b || new J;
  Ad({g:a.j.Z}, c);
  c.append("   ", N(a.j.ta));
  return b ? "" : c.toString()
}
function zd(a, b) {
  var c = b || new J;
  c.append('<div class="portal_details_row">');
  for(var d = 0;d < 4;d++) {
    d < a.Za.length ? Bd(cc(a.Za[d], {b:a.b}), c) : Bd(m, c), c.append(d != 3 ? '<div class="mod_separator"></div>' : "")
  }
  c.append("</div>");
  return b ? "" : c.toString()
}
function Bd(a, b) {
  var c = b || new J;
  c.append('<div class="mod">');
  a != m ? (c.append('<div class="mod_installer">'), Ad({g:a.Ta}, c), c.append('</div><div class="mod_icon"><div class="SPRITE_', P(a.b.Wc), '"></div></div><div class="mod_name">', N(a.name), "</div>")) : c.append('<div class="mod_icon_empty"></div>');
  c.append("</div>")
}
function yd(a, b) {
  var c = b || new J;
  c.append('<div class="portal_details_row"><div id="resonators_left">');
  for(var d = 0;d < 4;d++) {
    d < a.oa.length ? Cd(cc(a.oa[d], {s:a.s}), c) : Cd({s:a.s, Va:0}, c)
  }
  c.append('</div><div id="resonators_center">');
  d = c || new J;
  d.append('<div id="resonatorsCenterPiece"><div id="resonator_arms_left">');
  for(var e = 1;e < 5;e++) {
    d.append('<div class="resonator_arm resonator_arm_', P(e), '"></div>')
  }
  d.append('</div><div id="resonator_arms_right">');
  for(e = 1;e < 5;e++) {
    d.append('<div class="resonator_arm resonator_arm_', P(e), '"></div>')
  }
  d.append('</div><div id="resonators_bar"><div id="portal_faction_icon"><div class="SPRITE_', P(a.b.Pc), '"></div></div></div></div>');
  c.append('</div><div id="resonators_right">');
  for(d = 4;d < 8;d++) {
    d < a.oa.length ? Cd(cc(a.oa[d], {s:a.s, Va:1}), c) : Cd({s:a.s, Va:1}, c)
  }
  c.append("</div></div>");
  return b ? "" : c.toString()
}
function Cd(a, b) {
  var c = b || new J;
  c.append('<div class="resonator">');
  a.Va ? (Dd(a, c), Ed(a, c), Fd(a, c)) : (Fd(a, c), Ed(a, c), Dd(a, c));
  c.append("</div>")
}
function Dd(a, b) {
  (b || new J).append('<div class="resonator_health"><div class="resonator_health_slot">', a.e ? "<div " + (a.va && !a.s ? 'style="height: ' + (a.va == m ? "" : qc(a.va)) + 'px;"' : "") + 'class="resonator_health_indicator resonator_level_' + P(a.e) + (a.s && !a.va ? " resonator_health_loading" : "") + '"></div>' : "", "</div></div>")
}
function Ed(a, b) {
  (b || new J).append('<div class="resonator_level">', a.e ? "Level " + N(a.e) : "", "</div>")
}
function Fd(a, b) {
  var c = b || new J;
  c.append('<div class="resonator_owner">');
  Ad({g:a.cb}, c);
  c.append("</div>")
}
function Ad(a, b) {
  (b || new J).append(a.g ? a.g.M ? '<span title="' + P(a.g.M) + '">' + N(a.g.M) + "</span>" : '<span class="player_nickname_loading">loading...</span>' : "")
}
;
// Input 61
function U(a) {
  google.maps.OverlayView.call(this);
  this.J = m;
  this.d = a;
  this.bb = []
}
var Gd;
w(U, google.maps.OverlayView);
U.prototype.onAdd = function() {
  if(!this.J) {
    var a = document.createElement("div");
    sd(a, "position", "absolute");
    M(a, wd, {j:this.d});
    this.J = a
  }
  this.getPanes().floatPane.appendChild(this.J);
  (a = document.getElementById("pi-tab-res")) && I(a, "click", t(this.Ub, this, "resonators"));
  (a = document.getElementById("pi-tab-mod")) && I(a, "click", t(this.Ub, this, "mods"));
  this.bb.push(I(document.getElementById("portal_close"), "click", t(this.Nb, this)));
  this.bb.push(I(this.getMap().getDiv(), "click", t(this.Nb, this)));
  I(this.J, "click", function(a) {
    a.stopPropagation()
  })
};
U.prototype.onAdd = U.prototype.onAdd;
U.prototype.show = function(a) {
  Gd && Gd != this && Gd.setMap(m);
  Gd = this;
  this.setMap(a);
  _gaq.push(["_trackEvent", "Map", "Portal info window"])
};
U.prototype.Nb = function(a) {
  y(this.bb, function(a) {
    Nb(a)
  });
  a.stopPropagation();
  this.setMap(m)
};
U.prototype.Ub = function(a, b) {
  b.stopPropagation();
  var c = document.getElementById("portal_tabs_container"), d = document.getElementById("pi-tab-res"), e = document.getElementById("pi-tab-mod");
  a == "resonators" ? (Tb(c, "mod_tab_selected", "res_tab_selected"), K(d, "tab_selected"), L(e, "tab_selected")) : (Tb(c, "res_tab_selected", "mod_tab_selected"), K(e, "tab_selected"), L(d, "tab_selected"));
  _gaq.push(["_trackEvent", "Map", "Portal info window", a + " tab"])
};
U.prototype.draw = function() {
  this.d.ga() || md(T.c(), this.d.a, t(this.ud, this));
  var a;
  a = m;
  var b = this.J, c = $c(this.d), d = this.getProjection().fromLatLngToContainerPixel(c), e = document.getElementById("map_canvas"), f = d.y, g = e.offsetHeight - f, d = d.x, e = e.offsetWidth - d, h = b.offsetWidth, i = b.offsetHeight, l = this.getProjection().fromLatLngToDivPixel(c), q = Math.floor(h / 2), p = Math.floor(i / 2), E = l.x - q, c = l.y - p;
  q < d && q < e && i + 45 < f ? (c -= p + 45, Hd("bottom", i)) : q < d && q < e && i + 45 < g ? (c += p + 45, Hd("top")) : p < f && p < g && h + 45 < e ? (E += q + 45, Hd("left", p)) : p < f && p < g && h + 45 < d ? (E -= q + 45, Hd("right", p)) : (c -= p + 45, Hd("bottom", i), a = this.getProjection().fromDivPixelToLatLng(new google.maps.Point(l.x, l.y - (i + 45) / 2)));
  f = E;
  g = c;
  d = Ja && (Da || Ma) && Va("1.9");
  b.style.left = ud(f, d);
  b.style.top = ud(g, d);
  a && this.getMap().getBounds().contains($c(this.d)) && this.getMap().panTo(a)
};
U.prototype.draw = U.prototype.draw;
function Hd(a, b) {
  var c = document.getElementById("pointy");
  c.className = "pointy_" + a;
  b ? sd(c, "top", b + "px") : c.removeAttribute("style")
}
U.prototype.onRemove = function() {
  this.J.parentNode.removeChild(this.J)
};
U.prototype.onRemove = U.prototype.onRemove;
U.prototype.ud = function(a) {
  if(a && (this.d = a, !a.ga())) {
    return
  }
  (a = document.getElementById("portal_capture_details")) && M(a, xd, {j:this.d});
  M(document.getElementById("tab_content_res"), yd, {oa:this.d.w, b:this.d.b});
  M(document.getElementById("tab_content_mod"), zd, {Za:this.d.R, b:this.d.b})
};
// Input 62
function Id(a, b) {
  this.h = a;
  this.B = 1;
  this.d = b
}
Id.prototype.show = function(a) {
  this.B = a;
  Jd(this);
  this.I.setMap(this.h);
  this.t && this.t.setMap(this.h)
};
Id.prototype.hide = function() {
  this.I && this.I.setMap(m);
  this.t && this.t.setMap(m)
};
function Jd(a) {
  a.I ? (a.I.setIcon(Kd(a.d.b, Za(a.d.w), a.B)), a.I.setShape(Ld(a.B))) : a.I = new google.maps.Marker({position:$c(a.d), icon:Kd(a.d.b, Za(a.d.w), a.B), shape:Ld(a.B), zIndex:1});
  var b = a.d.e > 1;
  if(a.t && b) {
    a.t.setIcon(Md(a.d.b, a.d.e, a.B))
  }else {
    if(a.t && !b) {
      a.t.setMap(m), a.t = m
    }else {
      if(!a.t && b) {
        a.t = new google.maps.Marker({position:$c(a.d), icon:Md(a.d.b, a.d.e, a.B), clickable:n, zIndex:2})
      }
    }
  }
  google.maps.event.clearListeners(a.I, "click");
  b = new U(a.d);
  google.maps.event.addListener(a.I, "click", t(b.show, b, a.h))
}
var V = {};
function Kd(a, b, c) {
  var d = a.pa;
  V[d] || (V[d] = {});
  V[d][b] || (V[d][b] = {});
  V[d][b][c] || (V[d][b][c] = Nd(a == vc ? "//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/neutral_icon.png" : "//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/" + a.pa + "_" + b + "res.png", c));
  return V[d][b][c]
}
var W = {};
function Md(a, b, c) {
  var d = a.pa;
  W[d] || (W[d] = {});
  W[d][b] || (W[d][b] = {});
  W[d][b][c] || (W[d][b][c] = Nd("//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/" + a.pa + "_lev" + b + ".png", c));
  return W[d][b][c]
}
function Nd(a, b) {
  var c = new google.maps.Size(60, 60), d = new google.maps.Point(0, 0), e = new google.maps.Point(30 * b, 30 * b), f = new google.maps.Size(60 * b, 60 * b);
  return new google.maps.MarkerImage(a, c, d, e, f)
}
var Od = {};
function Ld(a) {
  Od[a] || (Od[a] = {type:"circle", coords:[30 * a, 30 * a, 20 * a]});
  return Od[a]
}
;
// Input 63
var X = {hc:["BC", "AD"], gc:["Before Christ", "Anno Domini"], oc:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), zc:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), mc:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), yc:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), vc:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), Bc:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), Ec:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), 
Dc:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), xc:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), Cc:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), Ed:"S,M,T,W,T,F,S".split(","), Ac:"S,M,T,W,T,F,S".split(","), wc:["Q1", "Q2", "Q3", "Q4"], tc:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], bc:["AM", "PM"], qb:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], rb:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], Ad:6, Hd:[5, 6], Bd:2};
// Input 64
// Input 65
function Pd() {
}
function Qd(a) {
  if(typeof a == "number") {
    var b = new Pd;
    b.Ha = a;
    var c;
    c = a;
    if(c == 0) {
      c = "Etc/GMT"
    }else {
      var d = ["Etc/GMT", c < 0 ? "-" : "+"];
      c = Math.abs(c);
      d.push(Math.floor(c / 60) % 100);
      c %= 60;
      c != 0 && d.push(":", z(c, 2));
      c = d.join("")
    }
    b.Wb = c;
    a == 0 ? a = "UTC" : (c = ["UTC", a < 0 ? "+" : "-"], a = Math.abs(a), c.push(Math.floor(a / 60) % 100), a %= 60, a != 0 && c.push(":", a), a = c.join(""));
    b.ob = [a, a];
    b.Ja = [];
    return b
  }
  b = new Pd;
  b.Wb = a.id;
  b.Ha = -a.std_offset;
  b.ob = a.names;
  b.Ja = a.transitions;
  return b
}
function Rd(a, b) {
  for(var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0;d < a.Ja.length && c >= a.Ja[d];) {
    d += 2
  }
  return d == 0 ? 0 : a.Ja[d - 1]
}
;
// Input 66
function cd(a) {
  this.Ca = [];
  typeof a == "number" ? this.sa(a) : this.F(a)
}
var Sd = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvzZ]+/];
cd.prototype.F = function(a) {
  for(;a;) {
    for(var b = 0;b < Sd.length;++b) {
      var c = a.match(Sd[b]);
      if(c) {
        c = c[0];
        a = a.substring(c.length);
        b == 0 && (c == "''" ? c = "'" : (c = c.substring(1, c.length - 1), c = c.replace(/\'\'/, "'")));
        this.Ca.push({text:c, type:b});
        break
      }
    }
  }
};
cd.prototype.format = function(a, b) {
  var c = b ? (a.getTimezoneOffset() - (b.Ha - Rd(b, a))) * 6E4 : 0, d = c ? new Date(a.getTime() + c) : a, e = d;
  b && d.getTimezoneOffset() != a.getTimezoneOffset() && (c += c > 0 ? -864E5 : 864E5, e = new Date(a.getTime() + c));
  for(var c = [], f = 0;f < this.Ca.length;++f) {
    var g = this.Ca[f].text;
    1 == this.Ca[f].type ? c.push(Td(g, a, d, e, b)) : c.push(g)
  }
  return c.join("")
};
cd.prototype.sa = function(a) {
  if(a < 4) {
    a = X.qb[a]
  }else {
    if(a < 8) {
      a = X.rb[a - 4]
    }else {
      if(a < 12) {
        a = X.qb[a - 8] + " " + X.rb[a - 8]
      }else {
        this.sa(10);
        return
      }
    }
  }
  this.F(a)
};
function Ud(a, b) {
  var c = b.getMonth();
  switch(a) {
    case 5:
      return X.oc[c];
    case 4:
      return X.mc[c];
    case 3:
      return X.vc[c];
    default:
      return z(c + 1, a)
  }
}
function Vd(a, b) {
  var c = b.getDay();
  switch(a) {
    case 5:
      return X.Ac[c];
    case 4:
      return X.Dc[c];
    case 3:
      return X.Cc[c];
    default:
      return z(c, 1)
  }
}
function Wd(a, b) {
  var c = b.getMonth();
  switch(a) {
    case 5:
      return X.zc[c];
    case 4:
      return X.yc[c];
    case 3:
      return X.Bc[c];
    default:
      return z(c + 1, a)
  }
}
function Td(a, b, c, d, e) {
  var f = a.length;
  switch(a.charAt(0)) {
    case "G":
      return b = c.getFullYear() > 0 ? 1 : 0, f >= 4 ? X.gc[b] : X.hc[b];
    case "y":
      return b = c.getFullYear(), b < 0 && (b = -b), f == 2 ? z(b % 100, 2) : String(b);
    case "M":
      return Ud(f, c);
    case "k":
      return z(d.getHours() || 24, f);
    case "S":
      return(d.getTime() % 1E3 / 1E3).toFixed(Math.min(3, f)).substr(2) + (f > 3 ? z(0, f - 3) : "");
    case "E":
      return b = c.getDay(), f >= 4 ? X.Ec[b] : X.xc[b];
    case "a":
      return f = d.getHours(), X.bc[f >= 12 && f < 24 ? 1 : 0];
    case "h":
      return z(d.getHours() % 12 || 12, f);
    case "K":
      return z(d.getHours() % 12, f);
    case "H":
      return z(d.getHours(), f);
    case "c":
      return Vd(f, c);
    case "L":
      return Wd(f, c);
    case "Q":
      return b = Math.floor(c.getMonth() / 3), f < 4 ? X.wc[b] : X.tc[b];
    case "d":
      return z(c.getDate(), f);
    case "m":
      return z(d.getMinutes(), f);
    case "s":
      return z(d.getSeconds(), f);
    case "v":
      return f = e || Qd(b.getTimezoneOffset()), f.Wb;
    case "z":
      return a = e || Qd(b.getTimezoneOffset()), f < 4 ? a.ob[Rd(a, b) > 0 ? 2 : 0] : a.ob[Rd(a, b) > 0 ? 3 : 1];
    case "Z":
      return a = e || Qd(b.getTimezoneOffset()), f < 4 ? (f = -(a.Ha - Rd(a, b)), b = [f < 0 ? "-" : "+"], f = Math.abs(f), b.push(z(Math.floor(f / 60) % 100, 2), z(f % 60, 2))) : (f = a.Ha - Rd(a, b), b = ["GMT"], b.push(f <= 0 ? "+" : "-"), f = Math.abs(f), b.push(z(Math.floor(f / 60) % 100, 2), ":", z(f % 60, 2))), f = b.join("");
    default:
      return""
  }
}
;
// Input 67
function Xd(a) {
  this.h = a;
  this.Oa = []
}
Xd.prototype.draw = function(a) {
  var b = pa();
  this.Oa = fb(this.Oa, function(c) {
    var d = c.d;
    if(!Yd(d)) {
      return c.hide(), n
    }
    if(a[d.a]) {
      var e = a[d.a];
      if(e.o > d.o && c.d != e) {
        c.d = e, Jd(c)
      }
      delete a[d.a]
    }
    if(c.B != b) {
      c.B = b, Jd(c)
    }
    return k
  }, this);
  B(a, function(a) {
    Yd(a) && (a = new Id(this.h, a), a.show(b), this.Oa.push(a))
  }, this)
};
function Yd(a) {
  return(a.w.length ? a.e : 0) >= oa()
}
;
// Input 68
function Zd(a) {
  this.map = a;
  this.da = {}
}
Zd.prototype.draw = function(a) {
  var b = $d, c = T.c();
  this.da = Ya(this.da, function(d, e) {
    return!b(this.fa(d)) || a[e] && this.da[a[e].a] && this.da[a[e].a].o < a[e].o || c.aa[e] ? (this.hide(d), n) : k
  }, this);
  B(a, function(a) {
    b(this.fa(a)) && (this.show(a), this.da[a.a] = a)
  }, this)
};
function $d(a) {
  var b = T.c();
  return gb(a, function(a, d) {
    if(a) {
      return k
    }
    var e = b.na[d.a] || m;
    if(e) {
      if(Yd(e)) {
        return k
      }
    }else {
      return k
    }
    return n
  }, n)
}
;
// Input 69
function ae(a) {
  Zd.call(this, a);
  this.Ga = {}
}
w(ae, Zd);
ae.prototype.fa = function(a) {
  return a ? a.U : []
};
ae.prototype.hide = function(a) {
  var b = this.Ga[a.a];
  b && (delete this.Ga[a.a], b.setMap(m))
};
ae.prototype.show = function(a) {
  if(!this.Ga[a.a]) {
    var b = D(this.fa(a), function(a) {
      return new google.maps.LatLng(a.lat, a.lng)
    });
    b.length < 3 || (this.Ga[a.a] = new google.maps.Polygon({map:this.map, paths:b, strokeColor:a.b.color, strokeOpacity:0.2, strokeWeight:1, fillColor:a.b.color, fillOpacity:0.35}))
  }
};
// Input 70
function be(a) {
  Zd.call(this, a);
  this.ua = {}
}
w(be, Zd);
be.prototype.fa = function(a) {
  return a ? [a.origin, a.m] : []
};
be.prototype.hide = function(a) {
  var b = this.ua[a.a];
  b && (delete this.ua[a.a], b.setMap(m))
};
be.prototype.show = function(a) {
  if(!this.ua[a.a]) {
    var b = [];
    y(this.fa(a), function(a) {
      Qc(a) && (a = new google.maps.LatLng(a.lat, a.lng), b.push(a))
    });
    b.length < 2 || (this.ua[a.a] = new google.maps.Polyline({map:this.map, path:b, strokeColor:a.b.color, strokeOpacity:0.8, strokeWeight:2}))
  }
};
// Input 71
function ce(a) {
  this.dd = new Xd(a);
  this.fd = new ae(a);
  this.Oc = new be(a)
}
ce.prototype.zb = function(a) {
  var b = T.c();
  this.dd.draw(gd(b, "portal", b.na));
  this.fd.draw(gd(b, "region", b.kb));
  this.Oc.draw(gd(b, "edge", b.ba));
  a && de(n)
};
function de(a) {
  document.getElementById("map_spinner").style.display = a ? "" : "none"
}
;
// Input 72
function ee(a, b) {
  var c = b || new J;
  c.append('<div class="portal_level_indicator">');
  if(a.ha == 0) {
    c.append("Showing all Portals.")
  }else {
    c.append("Showing ");
    if(a.ha < 8) {
      var d = a.ha;
      (c || new J).append('<span class="level_', P(d), '">L', N(d), "</span>");
      c.append("-")
    }
    c.append('<span class="level_8">L8</span> Portals.')
  }
  c.append(a.ha == 1 ? " Zoom in to see unclaimed Portals." : a.ha > 1 ? " Zoom in to see lower level Portals." : "", "</div>");
  return b ? "" : c.toString()
}
;
// Input 73
function fe() {
}
fe.prototype.draw = function() {
  var a = oa(), b = $("#zoom_level_data").get()[0];
  M(b, ee, {ha:a})
};
// Input 74
function ge(a, b) {
  var c = b || new J;
  c.append('<div id="global_scores">');
  he({b:wc, Tb:a.Hc, Sb:a.Gc}, c);
  he({b:xc, Tb:a.Rc, Sb:a.Qc}, c);
  c.append("</div>");
  return b ? "" : c.toString()
}
function he(a, b) {
  (b || new J).append('<div class="global_score ', P(a.b.css), '"><div class="score_faction_name">', N(a.b.Qa), '</div><div class="score_metadata"><span class="color_orange">Mind Units:</span>  ', N(a.Tb), '</div><div class="score_metadata visible_on_show_box"><span class="color_orange">Global Control:</span>  ', N(a.Sb), "</div></div>")
}
;
// Input 75
var ie = {ec:".", jc:",", pc:"%", ra:"0", sc:"+", lc:"-", ic:"E", rc:"\u2030", kc:"\u221e", nc:"NaN", dc:"#,##0.###", uc:"#E0", qc:"#,##0%", cc:"\u00a4#,##0.00;(\u00a4#,##0.00)", fc:"USD"}, Y = ie, Y = ie;
// Input 76
var je = {AED:"\u062f.\u0625", ARS:"$", AUD:"$", BDT:"\u09f3", BRL:"R$", CAD:"$", CHF:"Fr.", CLP:"$", CNY:"\u00a5", COP:"$", CRC:"\u20a1", CUP:"$", CZK:"K\u010d", DKK:"kr", DOP:"$", EGP:"\u00a3", EUR:"\u20ac", GBP:"\u00a3", HKD:"$", HRK:"kn", HUF:"Ft", IDR:"Rp", ILS:"\u20aa", INR:"Rs", IQD:"\u0639\u062f", ISK:"kr", JMD:"$", JPY:"\u00a5", KRW:"\u20a9", KWD:"\u062f.\u0643", LKR:"Rs", LVL:"Ls", MNT:"\u20ae", MXN:"$", MYR:"RM", NOK:"kr", NZD:"$", PAB:"B/.", PEN:"S/.", PHP:"P", PKR:"Rs.", PLN:"z\u0142", 
RON:"L", RUB:"\u0440\u0443\u0431", SAR:"\u0633.\u0631", SEK:"kr", SGD:"$", SKK:"Sk", SYP:"SYP", THB:"\u0e3f", TRY:"TL", TWD:"NT$", USD:"$", UYU:"$", VEF:"Bs.F", VND:"\u20ab", XAF:"FCFA", XCD:"$", YER:"YER", ZAR:"R"};
// Input 77
function ke(a, b) {
  this.Eb = b || Y.fc;
  this.Jc = je[this.Eb];
  this.za = 40;
  this.p = 1;
  this.Ya = 3;
  this.Aa = this.ia = 0;
  this.Zb = n;
  this.ib = this.hb = "";
  this.Ba = "-";
  this.$a = "";
  this.ja = 1;
  this.Sa = 3;
  this.Ka = this.vb = n;
  typeof a == "number" ? this.sa(a) : this.F(a)
}
ke.prototype.F = function(a) {
  this.Md = a.replace(/ /g, "\u00a0");
  var b = [0];
  this.hb = le(this, a, b);
  for(var c = b[0], d = -1, e = 0, f = 0, g = 0, h = -1, i = a.length, l = k;b[0] < i && l;b[0]++) {
    switch(a.charAt(b[0])) {
      case "#":
        f > 0 ? g++ : e++;
        h >= 0 && d < 0 && h++;
        break;
      case "0":
        if(g > 0) {
          throw Error('Unexpected "0" in pattern "' + a + '"');
        }
        f++;
        h >= 0 && d < 0 && h++;
        break;
      case ",":
        h = 0;
        break;
      case ".":
        if(d >= 0) {
          throw Error('Multiple decimal separators in pattern "' + a + '"');
        }
        d = e + f + g;
        break;
      case "E":
        if(this.Ka) {
          throw Error('Multiple exponential symbols in pattern "' + a + '"');
        }
        this.Ka = k;
        this.Aa = 0;
        if(b[0] + 1 < i && a.charAt(b[0] + 1) == "+") {
          b[0]++, this.Zb = k
        }
        for(;b[0] + 1 < i && a.charAt(b[0] + 1) == "0";) {
          b[0]++, this.Aa++
        }
        if(e + f < 1 || this.Aa < 1) {
          throw Error('Malformed exponential pattern "' + a + '"');
        }
        l = n;
        break;
      default:
        b[0]--, l = n
    }
  }
  f == 0 && e > 0 && d >= 0 && (f = d, f == 0 && f++, g = e - f, e = f - 1, f = 1);
  if(d < 0 && g > 0 || d >= 0 && (d < e || d > e + f) || h == 0) {
    throw Error('Malformed pattern "' + a + '"');
  }
  g = e + f + g;
  this.Ya = d >= 0 ? g - d : 0;
  if(d >= 0 && (this.ia = e + f - d, this.ia < 0)) {
    this.ia = 0
  }
  this.p = (d >= 0 ? d : g) - e;
  if(this.Ka && (this.za = e + this.p, this.Ya == 0 && this.p == 0)) {
    this.p = 1
  }
  this.Sa = Math.max(0, h);
  this.vb = d == 0 || d == g;
  c = b[0] - c;
  this.ib = le(this, a, b);
  b[0] < a.length && a.charAt(b[0]) == me ? (b[0]++, this.Ba = le(this, a, b), b[0] += c, this.$a = le(this, a, b)) : (this.Ba = this.hb + this.Ba, this.$a += this.ib)
};
ke.prototype.sa = function(a) {
  switch(a) {
    case 1:
      this.F(Y.dc);
      break;
    case 2:
      this.F(Y.uc);
      break;
    case 3:
      this.F(Y.qc);
      break;
    case 4:
      this.F(Y.cc);
      break;
    default:
      throw Error("Unsupported pattern type.");
  }
};
ke.prototype.format = function(a) {
  if(isNaN(a)) {
    return Y.nc
  }
  var b = [], c = a < 0 || a == 0 && 1 / a < 0;
  b.push(c ? this.Ba : this.hb);
  if(isFinite(a)) {
    if(a *= c ? -1 : 1, a *= this.ja, this.Ka) {
      if(a == 0) {
        ne(this, a, this.p, b), oe(this, 0, b)
      }else {
        var d = Math.floor(Math.log(a) / Math.log(10));
        a /= Math.pow(10, d);
        var e = this.p;
        if(this.za > 1 && this.za > this.p) {
          for(;d % this.za != 0;) {
            a *= 10, d--
          }
          e = 1
        }else {
          this.p < 1 ? (d++, a /= 10) : (d -= this.p - 1, a *= Math.pow(10, this.p - 1))
        }
        ne(this, a, e, b);
        oe(this, d, b)
      }
    }else {
      ne(this, a, this.p, b)
    }
  }else {
    b.push(Y.kc)
  }
  b.push(c ? this.$a : this.ib);
  return b.join("")
};
function ne(a, b, c, d) {
  for(var e = Math.pow(10, a.Ya), b = Math.round(b * e), f = Math.floor(b / e), g = Math.floor(b - f * e), h = a.ia > 0 || g > 0, i = "", b = f;b > 1.0E20;) {
    i = "0" + i, b = Math.round(b / 10)
  }
  var i = b + i, l = Y.ec, q = Y.jc, b = Y.ra.charCodeAt(0), p = i.length;
  if(f > 0 || c > 0) {
    for(f = p;f < c;f++) {
      d.push(Y.ra)
    }
    for(f = 0;f < p;f++) {
      d.push(String.fromCharCode(b + i.charAt(f) * 1)), p - f > 1 && a.Sa > 0 && (p - f) % a.Sa == 1 && d.push(q)
    }
  }else {
    h || d.push(Y.ra)
  }
  (a.vb || h) && d.push(l);
  c = "" + (g + e);
  for(e = c.length;c.charAt(e - 1) == "0" && e > a.ia + 1;) {
    e--
  }
  for(f = 1;f < e;f++) {
    d.push(String.fromCharCode(b + c.charAt(f) * 1))
  }
}
function oe(a, b, c) {
  c.push(Y.ic);
  b < 0 ? (b = -b, c.push(Y.lc)) : a.Zb && c.push(Y.sc);
  for(var b = "" + b, d = b.length;d < a.Aa;d++) {
    c.push(Y.ra)
  }
  c.push(b)
}
var me = ";";
function le(a, b, c) {
  for(var d = "", e = n, f = b.length;c[0] < f;c[0]++) {
    var g = b.charAt(c[0]);
    if(g == "'") {
      c[0] + 1 < f && b.charAt(c[0] + 1) == "'" ? (c[0]++, d += "'") : e = !e
    }else {
      if(e) {
        d += g
      }else {
        switch(g) {
          case "#":
          ;
          case "0":
          ;
          case ",":
          ;
          case ".":
          ;
          case me:
            return d;
          case "\u00a4":
            c[0] + 1 < f && b.charAt(c[0] + 1) == "\u00a4" ? (c[0]++, d += a.Eb) : d += a.Jc;
            break;
          case "%":
            if(a.ja != 1) {
              throw Error("Too many percent/permill");
            }
            a.ja = 100;
            d += Y.pc;
            break;
          case "\u2030":
            if(a.ja != 1) {
              throw Error("Too many percent/permill");
            }
            a.ja = 1E3;
            d += Y.rc;
            break;
          default:
            d += g
        }
      }
    }
  }
  return d
}
;
// Input 78
function pe() {
}
var qe = new ke(1), re = new ke(3);
pe.prototype.draw = function(a) {
  var b = +a.result.alienScore, a = +a.result.resistanceScore, c = b / (b + a), d = a / (b + a);
  M(document.getElementById("game_stats"), ge, {Hc:qe.format(b), Gc:re.format(c), Rc:qe.format(a), Qc:re.format(d)});
  if(b = document.getElementById("global_scores")) {
    this.Bb = b, I(b, "touchstart", t(this.sd, this)), I(b, "mouseover", t(this.Vb, this, k)), I(b, "mouseout", t(this.Vb, this, n))
  }
};
pe.prototype.Vb = function(a) {
  var b = this.Bb;
  a ? K(b, "show_box") : L(b, "show_box")
};
pe.prototype.sd = function() {
  Ub(this.Bb, "show_box")
};
// Input 79
function se(a, b) {
  document.cookie = "ingress.intelmap." + a + "=" + escape(b)
}
function te(a) {
  return ue("ingress.intelmap." + a)
}
function ue(a) {
  for(var b = document.cookie.split(";"), c = 0;c < b.length;c++) {
    var d = b[c], e = d.indexOf("=");
    if(d.substr(0, e).replace(/^\s+|\s+$/g, "") == a) {
      return unescape(d.substr(e + 1))
    }
  }
  return m
}
;
// Input 80
function ve() {
  jQuery(document).ajaxSend(function(a, b, c) {
    if(a = !/^(GET|HEAD|OPTIONS|TRACE)$/.test(c.type)) {
      var c = c.url, a = "//" + document.location.host, d = document.location.protocol + a, a = c == d || c.slice(0, d.length + 1) == d + "/" || c == a || c.slice(0, a.length + 1) == a + "/" || !/^(\/\/|http:|https:).*/.test(c)
    }
    a && b.setRequestHeader("X-CSRFToken", ue("csrftoken"))
  })
}
;
// Input 81
function we() {
  this.Lc = new Lc;
  this.ca = document.getElementById("user_email");
  this.N = document.getElementById("request_invite_status");
  var a = document.getElementById("request_invite");
  a && I(a, "submit", t(this.jd, this))
}
we.prototype.jd = function() {
  var a = this.ca.value;
  if(nd(a)) {
    this.ca.value = "";
    this.N.innerHTML = "Saving email: " + a + "...";
    var b = t(this.Yc, this, a);
    S(this.Lc, "dashboard.local.requestInvite", {email:a, local:1}, b, j, b)
  }else {
    this.N.innerHTML = "Invalid email"
  }
};
we.prototype.Yc = function(a, b) {
  this.N.innerHTML = "error" in b ? "Error saving email: " + a : "Stay tuned at: " + a
};
// Input 82
function xe() {
  this.$b = "92rYjlxqypM";
  this.vd = "//www.youtube.com/watch?v=" + this.$b;
  this.Uc = n
}
ba(xe);
v("play", function() {
  _gaq.push(["_trackEvent", "Videos", "Play", "Ingress promo"]);
  var a = xe.c();
  a.Uc ? window.location.href = a.vd : ($("#video_overlay").show(), $("<div>").attr("id", "ytvideo").show().appendTo($("#video")), ytplayer = new YT.Player("ytvideo", {width:$("#video").width(), height:$("#video").height(), videoId:a.$b, playerVars:{autoplay:1, enablejsapi:1, modestbranding:1, rel:0, showinfo:0, hd:1}, events:{onReady:function() {
    ytplayer.setPlaybackQuality("hd720")
  }}}))
});
v("landingPageInit", function() {
  var a = xe.c();
  ye(a);
  $(document).keyup(function(b) {
    b.keyCode == 27 && a.Db()
  });
  new we;
  ve()
});
xe.prototype.Db = function() {
  ytplayer.stopVideo();
  $("#video_overlay").hide();
  $("#ytvideo").remove()
};
function ye(a) {
  var b = document.getElementById("video_overlay");
  b && I(b, "click", t(a.Db, a))
}
;
// Input 83
// Input 84
function ze(a, b, c) {
  R.call(this, a, b, u());
  this.D = c;
  a = new Date(c);
  b = new Date;
  if(c = a.getDate() == b.getDate()) {
    b = b || new Date, c = a.getMonth() == b.getMonth() && a.getFullYear() == (b || new Date).getFullYear()
  }
  this.timestamp = (c ? Ae : Be).format(a);
  this.type = Ce;
  this.Kb = []
}
w(ze, R);
var Be = new cd("MMM d"), Ae = new cd("h:mma"), Ce = 0;
function De(a) {
  var b = a[2].plext, a = new ze(a[0], b.team, a[1]);
  if(b.plextType == "SYSTEM_NARROWCAST") {
    a.type = 1
  }else {
    if(b.plextType == "PLAYER_GENERATED") {
      a.type = 2
    }
  }
  a.Kb = D(b.markup, function(a) {
    var b = a[1], e = new Ee(b.plain);
    switch(a[0]) {
      case "FACTION":
        e.type = 1;
        e.b = yc(b.team);
        break;
      case "PLAYER":
        e.type = 2;
        e.b = yc(b.team);
        e.a = b.guid;
        break;
      case "SENDER":
        e.type = 3;
        e.b = yc(b.team);
        e.a = b.guid;
        break;
      case "PORTAL":
        e.type = 4;
        e.b = yc(b.team);
        e.a = b.guid;
        e.lat = b.latE6 / 1E6;
        e.lng = b.lngE6 / 1E6;
        e.name = b.name;
        e.address = b.address;
        break;
      case "SECURE":
        e.type = 5
    }
    return e
  });
  return a
}
function Fe(a) {
  return!("result" in a) ? [] : D(a.result, De)
}
function Ee(a) {
  this.type = 0;
  this.Da = a
}
;
// Input 85
function Ge() {
  this.f = [];
  this.Pa = k
}
var He = {wd:"all", zd:"faction"}, Ie = {VIEWPORT:"viewport", Cd:"global"};
function Je(a, b) {
  a.f = Ke(b);
  a.Pa = n
}
function Ke(a) {
  return a.length > 1 && a[0].D > a[a.length - 1].D ? a.reverse() : a
}
Ge.prototype.Ra = function() {
  return this.f
};
// Input 86
function Le(a, b) {
  var c = b || new J;
  c.append('<div id="plext_primary_title">COMM<div class="SPRITE_chevron"></div><div class="SPRITE_chevron_down"></div></div><div id="plext_tab_group_container"><div id="pl_tab_all" class="plext_tab_title tab_selected">All</div><div id="pl_tab_fac" class="plext_tab_title">Faction</div></div><div id="plext_viewport_restrict_checkbox_container"><input type="checkbox" checked="true" id="pl_checkbox" /><div id="pl_checkbox_text">Restrict to map</div></div><div id="plext_container"><div id="pl_status"></div><div id="plexts"></div></div><form id="send_plext_form" name="send_plext" onSubmit="return false;"><input id="message" type="text" placeholder="start broadcasting here" maxlength="256"><input type="submit" value="Transmit"></form>');
  return b ? "" : c.toString()
}
function Me(a, b) {
  var c = b || new J;
  c.append('<div id="pl_spinner"><div class="img_progress"></div><div class="pl_status_text">Loading...</div></div>');
  return b ? "" : c.toString()
}
function Ne(a, b) {
  var c = b || new J;
  c.append('<div class="pl_status_text">Oops! Something went wrong...</div>');
  return b ? "" : c.toString()
}
function Oe(a, b) {
  for(var c = b || new J, d = a.gb, e = d.length, f = 0;f < e;f++) {
    var g = d[f], h = c || new J;
    h.append('<div class="plext"><div class="pl_timestamp">', N(g.timestamp), '</div><div class="pl_content ', g.type == Ce ? "pl_broad" : g.type == 1 ? "pl_narrow" : "pl_player", '" >');
    for(var g = g.Kb, i = g.length, l = 0;l < i;l++) {
      var q = g[l], p = h || new J;
      switch(q.type) {
        case 1:
          p.append('<span class="', P(q.b.css), '">', N(q.b.Qa), "</span>");
          break;
        case 2:
          p.append('<span class="', P(q.b.css), '">', N(q.Da), "</span>");
          break;
        case 3:
          p.append('<span class="', P(q.b.css), '">', N(q.Da), "</span>");
          break;
        case 4:
          p.append('<span class="pl_portal_name" ontouchstart="panto(', Q(q.lat), ", ", Q(q.lng), ')" onclick="panto(', Q(q.lat), ", ", Q(q.lng), ')">', N(q.name), '</span> <span class="pl_portal_address" ontouchstart="panto(', Q(q.lat), ", ", Q(q.lng), ')" onclick="panto(', Q(q.lat), ", ", Q(q.lng), ')">(', N(q.address), ")</span>");
          break;
        case 5:
          p.append('<span class="pl_secure">', N(q.Da), "</span>");
          break;
        default:
          p.append(N(q.Da))
      }
    }
    h.append("</div></div></div>")
  }
  return b ? "" : c.toString()
}
;
// Input 87
function Pe() {
}
o = Pe.prototype;
o.v = function(a, b, c, d) {
  M(document.getElementById("comm"), Le);
  var e = document.getElementById("plext_container");
  if(e) {
    this.z = e
  }
  if(e = document.getElementById("plexts")) {
    this.f = e
  }
  (e = document.getElementById("plext_primary_title")) && I(e, "click", t(this.rd, this));
  (e = document.getElementById("pl_tab_all")) && I(e, "click", t(this.ub, this, "all", a));
  (e = document.getElementById("pl_tab_fac")) && I(e, "click", t(this.ub, this, "faction", a));
  (a = document.getElementById("pl_checkbox")) && I(a, "change", t(this.td, this, b));
  I(this.z, "scroll", t(this.Zc, this, c));
  (b = document.getElementById("send_plext_form")) && I(b, "submit", t(this.ad, this, d))
};
o.rd = function(a) {
  a.stopPropagation();
  (a = document.getElementById("comm")) && (Ub(a, "comm_expanded") ? _gaq.push(["_trackEvent", "Action", "Comm view", "expanded"]) : _gaq.push(["_trackEvent", "Action", "Comm view", "minimized"]))
};
o.ub = function(a, b, c) {
  c.stopPropagation();
  var c = document.getElementById("pl_tab_all"), d = document.getElementById("pl_tab_fac");
  a == "all" ? (K(c, "tab_selected"), L(d, "tab_selected")) : (K(d, "tab_selected"), L(c, "tab_selected"));
  b(a)
};
o.td = function(a, b) {
  b.stopPropagation();
  a(document.getElementById("pl_checkbox").checked ? "viewport" : "global")
};
o.Zc = function(a) {
  this.z.scrollTop == 0 && a()
};
o.ad = function(a) {
  var b = document.getElementById("message"), c = b.value;
  Z.c().qa();
  if(!/^[\s\xa0]*$/.test(c)) {
    _gaq.push(["_trackEvent", "Action", "Send plext"]), a(c), b.value = ""
  }
};
o.draw = function(a) {
  M(this.f, Oe, {gb:a});
  this.z.scrollTop = this.z.scrollHeight
};
o.append = function(a, b) {
  var c = ac(Oe, {gb:a});
  Xb(this.f, c);
  a.length > 1 && Zb(c);
  if(b) {
    this.z.scrollTop = this.z.scrollHeight
  }
};
function Qe(a) {
  var b = document.getElementById("pl_status");
  a == 1 ? M(b, Me) : a == 2 ? M(b, Ne) : b.innerHTML = ""
}
;
// Input 88
function Re(a, b) {
  this.r = a;
  this.h = b;
  this.ma = new Pe;
  this.k = "all";
  this.l = "viewport";
  this.n = {};
  this.Ia = {}
}
o = Re.prototype;
o.v = function() {
  var a = t(this.pd, this), b = t(this.od, this), c = t(this.Vc, this), d = t(this.md, this);
  this.ma.v(a, b, c, d);
  B(He, function(a) {
    this.n[a] = {};
    this.Ia[a] = {};
    B(Ie, function(b) {
      this.n[a][b] = new Ge;
      this.Ia[a][b] = 1
    }, this)
  }, this)
};
o.pd = function(a) {
  if(this.k != a) {
    this.k = a, Se(this)
  }
};
o.od = function(a) {
  if(this.l != a) {
    this.l = a, Se(this)
  }
};
function Se(a) {
  var b = a.n[a.k][a.l];
  b && a.ma.draw(b.Ra());
  Qe(a.Ia[a.k][a.l]);
  b.Pa ? a.reload(k) : a.refresh();
  _gaq.push(["_trackEvent", "Action", "Comm click", a.l + " " + a.k])
}
o.Vc = function() {
  var a = this.k, b = this.l;
  Te(this, a, b, 1);
  Ue(this, t(this.Xb, this, a, b, k, n), a, b, j, this.n[a][b].f.length < 1 ? -1 : this.n[a][b].f[0].D)
};
o.md = function(a) {
  var b = t(this.refresh, this, k), c = this.h.getCenter(), d = Math.floor(c.lat() * 1E6), e = Math.floor(c.lng() * 1E6), c = this.r, a = {message:a, latE6:d, lngE6:e};
  this.k == "faction" && (a.factionOnly = k);
  S(c, "dashboard.sendPlext", a, b, 5)
};
o.reload = function(a) {
  var b = this.k, c = this.l, d = t(this.nd, this, b, c);
  a || B(He, function(a) {
    this.n[a].viewport.Pa = k
  }, this);
  Te(this, b, c, 1);
  Ue(this, d, b, c)
};
o.refresh = function(a) {
  var b = this.k, c = this.l;
  Ue(this, t(this.Xb, this, b, c, n, !!a), b, c, this.n[b][c].f.length < 1 ? -1 : this.n[b][c].f[this.n[b][c].f.length - 1].D)
};
function Ue(a, b, c, d, e, f) {
  c = c == "faction";
  if(d == "viewport") {
    var d = a.h, g = new qa;
    g.o = u();
    var h = {};
    h.sw = d.getBounds().getSouthWest();
    h.ne = d.getBounds().getNorthEast();
    g.bounds = h;
    d = g
  }else {
    d = j
  }
  a.r.Ra(b, 50, c, d, e, f)
}
o.nd = function(a, b, c) {
  if("result" in c) {
    var d = this.n[a][b], c = Fe(c);
    Je(d, c);
    this.k == a && this.l == b && this.ma.draw(c);
    Te(this, a, b, 0)
  }else {
    Te(this, a, b, 2)
  }
};
o.Xb = function(a, b, c, d, e) {
  if("result" in e) {
    var f = this.n[a][b], e = Fe(e);
    if(c) {
      if(e.length < 1) {
        f = []
      }else {
        if(f.f.length < 1) {
          Je(f, e)
        }else {
          for(var e = Ke(e), g = f.f[0], h = -1, i = e.length - 1;i >= 0;i--) {
            var l = e[i];
            if(l.D < g.D) {
              break
            }
            if(l.a == g.a) {
              h = i;
              break
            }
          }
          h > -1 && e.splice(h, e.length - h);
          if(e.length > 0) {
            f.f = e.concat(f.f)
          }
        }
        f = e
      }
    }else {
      if(e.length < 1) {
        f = []
      }else {
        if(f.f.length < 1) {
          Je(f, e)
        }else {
          e = Ke(e);
          g = f.f[f.f.length - 1];
          h = -1;
          for(i = 0;i < e.length;i++) {
            l = e[i];
            if(l.D > g.D) {
              break
            }
            if(l.a == g.a) {
              h = i;
              break
            }
          }
          h > -1 && e.splice(0, h + 1);
          if(e.length > 0) {
            f.f = f.f.concat(e)
          }
        }
        f = e
      }
    }
    if(this.k == a && this.l == b && f.length > 0) {
      if(c) {
        c = this.ma;
        d = ac(Oe, {gb:f});
        if(c.f.firstElementChild != j) {
          e = c.f.firstElementChild
        }else {
          for(e = c.f.firstChild;e && e.nodeType != 1;) {
            e = e.nextSibling
          }
        }
        g = e ? e.offsetTop : 0;
        h = c.f;
        h.insertBefore(d, h.childNodes[0] || m);
        f.length > 1 && Zb(d);
        c.z.scrollTop = e ? c.z.scrollTop + e.offsetTop - g : c.z.scrollHeight
      }else {
        this.ma.append(f, d)
      }
    }
    Te(this, a, b, 0)
  }else {
    Te(this, a, b, 2)
  }
};
function Te(a, b, c, d) {
  a.Ia[b][c] = d;
  a.k == b && a.l == c && Qe(d)
}
;
// Input 89
var Ve = 256;
function We(a) {
  return a * (Math.PI / 180)
}
function Xe(a) {
  this.C = a;
  this.Ob = new google.maps.Point(this.C / 2, this.C / 2);
  this.Pb = this.C / 360;
  this.Qb = this.C / (2 * Math.PI);
  this.S = 1 << ZOOM_LEVEL - (this.C / Ve - 1)
}
function Ye(a) {
  for(var b = [], c = ZOOM_LEVEL;c > 0;c--) {
    var d = 0, e = 1 << c - 1;
    (a.x & e) != 0 && d++;
    (a.y & e) != 0 && (d++, d++);
    b.push(d)
  }
  return b.join("")
}
Xe.prototype.fromLatLngToPoint = function(a, b) {
  var c = b || new google.maps.Point(0, 0), d = this.Ob;
  c.x = d.x + a.lng() * this.Pb;
  var e;
  e = Math.sin(We(a.lat()));
  -0.9999 != m && (e = Math.max(e, -0.9999));
  0.9999 != m && (e = Math.min(e, 0.9999));
  c.y = d.y + 0.5 * Math.log((1 + e) / (1 - e)) * -this.Qb;
  return c
};
Xe.prototype.fromPointToLatLng = function(a) {
  var b = this.Ob;
  return new google.maps.LatLng((2 * Math.atan(Math.exp((a.y - b.y) / -this.Qb)) - Math.PI / 2) / (Math.PI / 180), (a.x - b.x) / this.Pb)
};
function Ze(a, b) {
  return new google.maps.Point(b.x * a.C / a.S, b.y * a.C / a.S)
}
function $e(a, b) {
  var c = new google.maps.Point(b.x, b.y + 1), d = new google.maps.Point(b.x + 1, b.y), c = a.fromPointToLatLng(Ze(a, c)), d = a.fromPointToLatLng(Ze(a, d)), e = {};
  e.sw = c;
  e.ne = d;
  return e
}
function af(a, b) {
  return new google.maps.Point(Math.floor(b.x / a.C), Math.floor(b.y / a.C))
}
;
// Input 90
function Z() {
  this.Ab = new pe;
  this.Tc = new rd;
  this.eb = new Kc;
  this.Rb = new fe;
  this.la = m;
  this.La = 0
}
ba(Z);
function bf(a, b) {
  var c, d, e;
  bb(MAP_PARAMS) ? (c = +te("lat") || 25, d = +te("lng") || 0, e = +te("zoom") || 2) : (c = cb("lat_e6", 25E6) / 1E6, d = cb("lng_e6", 0) / 1E6, e = cb("zoom_level", 2));
  ZOOM_LEVEL = e;
  e = {mapTypeId:google.maps.MapTypeId.ROADMAP, minZoom:1, panControl:n, styles:vd, zoom:e, streetViewControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER}, zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER}};
  c = new google.maps.LatLng(c, d);
  a.h = new google.maps.Map(document.getElementById("map_canvas"), e);
  a.h.setCenter(c);
  a.ya = new ce(a.h);
  if(!b) {
    a.la = new Re(T.c().r, a.h), a.la.v()
  }
  na(x.c(), t(a.Rb.draw, a.Rb));
  na(x.c(), t(a.ya.zb, a.ya));
  google.maps.event.addListener(a.h, "idle", t(a.Xc, a));
  google.maps.event.addListener(a.h, "dragend", function() {
    _gaq.push(["_trackEvent", "Map", "pan"])
  })
}
Z.prototype.Xc = function() {
  var a = this.h.getCenter(), b = this.h.getZoom();
  se("lat", "" + a.lat());
  se("lng", "" + a.lng());
  se("zoom", "" + b);
  de(k);
  this.qa();
  this.Jb && window.clearTimeout(this.Jb);
  ZOOM_LEVEL = b;
  x.c().update(b);
  this.Jb = window.setTimeout(t(this.X, this, k), 1E3)
};
Z.prototype.X = function(a) {
  if(this.La + 3E5 > u()) {
    de(k);
    var b = this.h, c = b.getBounds(), d = c.getNorthEast();
    Math.round(d.lat() * 1E6);
    Math.round(d.lng() * 1E6);
    c = c.getSouthWest();
    Math.round(c.lat() * 1E6);
    Math.round(c.lng() * 1E6);
    for(var b = b.getCenter().lat(), b = Math.round(256 * 0.9999 * Math.abs(1 / Math.cos(We(b)))), b = new Xe(b), d = b.fromLatLngToPoint(d, m), d = new google.maps.Point(d.x * b.S, d.y * b.S), d = af(b, d), c = b.fromLatLngToPoint(c, m), c = new google.maps.Point(c.x * b.S, c.y * b.S), e = af(b, c), c = Math.abs(e.x - d.x), e = Math.abs(e.y - d.y), f = [], g = 0;g <= c;g++) {
      var h = Math.abs(d.x - g), i = d.y, l = {}, i = new google.maps.Point(h, i), q = Ye(i);
      l.bounds = $e(b, i);
      l.quadkey = q;
      f.push(l);
      for(var p = 1;p <= e;p++) {
        i = d.y + p, l = {}, i = new google.maps.Point(h, i), q = Ye(i), l.bounds = $e(b, i), l.quadkey = q, f.push(l)
      }
    }
    ld(T.c(), f, t(this.ya.zb, this.ya));
    this.la && (a ? this.la.reload() : this.la.refresh());
    this.Yb && window.clearTimeout(this.Yb);
    this.Yb = window.setTimeout(t(this.X, this, n), 12E4)
  }else {
    a = document.getElementById("butterbar"), a.style.display = "", I(a, "click", t(this.qa, this))
  }
};
v("redeem", function() {
  var a = document.getElementById("passcode"), b = a.value;
  Z.c().qa();
  if(!/^[\s\xa0]*$/.test(b)) {
    var c = Z.c();
    document.getElementById("redeem_error").innerHTML = "";
    document.getElementById("redeemed_rewards").innerHTML = "";
    c = t(c.eb.Nc, c.eb);
    S(T.c().r, "dashboard.redeemReward", {passcode:b}, c, j, c)
  }
  cf(n);
  a.value = "";
  _gaq.push(["_trackEvent", "Action", "Passcode attempt"])
});
function cf(a) {
  var b = document.getElementById("redeem_reward");
  a ? K(b, "show_box") : L(b, "show_box");
  b = document.getElementById("passcode");
  a ? b.focus() : b.blur()
}
v("showpi", cf);
v("initialize", function(a) {
  ve();
  var b = Z.c();
  if(!a) {
    var c = t(b.Ab.draw, b.Ab);
    S(T.c().r, "dashboard.getGameScore", {}, c);
    PLAYER && "available_invites" in PLAYER && b.Tc.v(+PLAYER.available_invites);
    if(PLAYER && "nickname" in PLAYER) {
      var c = b.eb, d = Ec(PLAYER), e = document.getElementById("player_stats");
      if(e) {
        c.fb = e;
        M(c.fb, sc, {g:d});
        if(d = document.getElementById("player_ap_icon")) {
          I(d, "touchstart", t(c.qd, c)), I(d, "mouseover", t(c.mb, c, k)), I(d, "mouseout", t(c.mb, c, n))
        }
        (d = document.getElementById("ap")) && I(d, "touchstart", t(c.mb, c, n))
      }
      M(document.getElementById("redeem_reward"), tc, {})
    }
  }
  bf(b, a);
  b.La = u()
});
Z.prototype.qa = function() {
  var a = this.La + 3E5 > u();
  this.La = u();
  if(!a) {
    document.getElementById("butterbar").style.display = "none", this.X(n), _gaq.push(["_trackEvent", "Action", "Awake inactive client"])
  }
};
v("geocode", function() {
  var a = document.getElementById("address");
  a.blur();
  a = a.value;
  Z.c().qa();
  /^[\s\xa0]*$/.test(a) || (ma || (ma = new google.maps.Geocoder), ma.geocode({address:a}, function(a, c) {
    if(c == google.maps.GeocoderStatus.OK) {
      var d = a[0].geometry.viewport;
      Z.c().h.fitBounds(d);
      _gaq.push(["_trackEvent", "Map", "Search"])
    }else {
      _gaq.push(["_trackEvent", "Error", "geocode error", c])
    }
  }))
});
v("panto", function(a, b) {
  var c = new google.maps.LatLng(a, b);
  Z.c().h.panTo(c);
  oa() > 0 && Z.c().h.setZoom(16)
});
v("togglesb", function(a) {
  a.stopPropagation();
  Ub(a.currentTarget, "show_box")
});
// Input 91

