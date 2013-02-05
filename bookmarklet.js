var root = chrome.extension.getURL("/");

// T.c()
//    .na --> portal
//    .kb --> region
//    .aa --> edge

function ZZ() {
    var CF = {};

	Md = function (a, b, c) {
	  var d = a.pa;
	  W[d] || (W[d] = {});
	  W[d][b] || (W[d][b] = {});
	  // SDIZ::START
	  W[d][b][c] || (W[d][b][c] = Nd("__root__" + a.pa + "_lev" + b + ".png",c));
	  // SDIZ::END
	  return W[d][b][c]
	};
	Jd = function (a) {
	  a.G ? (a.G.setIcon(Kd(a.d.b, Za(a.d.v), a.z)), a.G.setShape(Ld(a.z))) : a.G = new google.maps.Marker({position:$c(a.d), icon:Kd(a.d.b, Za(a.d.v), a.z), shape:Ld(a.z), zIndex:1});
	  // SDIZ::START
	  var b = true || a.d.e > 1;
	  // SDIZ::END
	  if(a.t && b) {
		a.t.setIcon(Md(a.d.b, a.d.e, a.z))
	  }else {
		if(a.t && !b) {
		  a.t.setMap(l), a.t = l
		}else {
		  if(!a.t && b) {
			a.t = new google.maps.Marker({position:$c(a.d), icon:Md(a.d.b, a.d.e, a.z), clickable:m, zIndex:2})
		  }
		}
	  }
	  google.maps.event.clearListeners(a.G, "click");
	  b = new U(a.d);
	  google.maps.event.addListener(a.G, "click", t(b.show, b, a.h))
	};	

    // Detail page, top title	
	xd = function(a, b) {
	  var c = b || new J;
	  Ad({g:a.j.Y}, c);
	  c.append("   ", N(a.j.ta));
	  return b ? "" : c.toString()
	};
	// Datail page, detail
	wd = function (a, b) {
	  // SDIZ::BEGIN
	  // guid is a.j.a
	  var links = 0;
	  var allLinks = T.c().aa;
	  for (var id in allLinks) {
		if (allLinks[id].m.a == a.j.a || allLinks[id].origin.a == a.j.a) {
			links++;
		}
	  }
	  var fields = 0;
	  var allFields = T.c().kb;
	  for (var id in allFields) {
		if (allFields[id].T[0].a == a.j.a ||
			allFields[id].T[1].a == a.j.a ||
			allFields[id].T[2].a == a.j.a
		) {
			fields++;
		}
	  }
	  
	  var factionColor = a.j.e ? a.j.b.color : "";
	  var totalEng,currEng, engP;
	  totalEng = currEng = engP = 0;
	  for (var r in a.j.v) {
		totalEng += a.j.v[r].energyT;
		currEng  += a.j.v[r].energy;
	  }
      engP = Math.round( currEng * 100.0 / totalEng );
	  // SDIZ::END
	  	  
	  var c = b || new J;
	  c.append('<div class="', P(a.j.b.css), '"><div id="portal_details_container"><div id="pointy_container"><div id="pointy"></div></div><div class="portal_details_row"><div id="portal_primary_title">', N(a.j.title), '</div><div id="portal_close"><div class="SPRITE_close"></div></div></div>');
	  var d = c || new J;
	  
	  d.append(
	  '<div class="portal_details_row"><div id="portal_image_container"><div id="portal_image"',
		a.j.ga ? 
			' style="background: url(' + rc(a.j.ga) + ') no-repeat center center"' : "",
		'></div></div><div id="portal_metadata">',
		a.j.e ?
			'<div id="portal_level">Level ' + N(a.j.e) + "</div>" : "",
		// SDIZ::BEGIN
		// APs
		a.j.e ? 
		'<div class="portal_details_row"><div style="margin-right:4px;display:inline-block;color:#ebbc4a">Links:</div><div style="display: inline-block;">'+links+'</div>'
		 +
		'<div style="margin-left: 18px; margin-right:4px;display:inline-block;color:#ebbc4a">Fields:</div><div style="display: inline-block;">'+fields+'</div>' 
		 +
		'<div style="margin-left: 18px;margin-right:4px;display:inline-block;color:#ebbc4a">AP (L+F):</div><div style="display: inline-block;">'+(fields * 750 + links * 187) +'</div>'
		 +
		'</div>' : "",
		// Energy
		a.j.e ?
		'<div class="portal_details_row">' 
			+ '<div style="margin-right:4px;display:inline-block;color:#ebbc4a">Energy:</div>'
			+ '<div style="background:-webkit-linear-gradient(left,' + factionColor + ' '+engP+'%, #000000 '+engP+'%);'
			+ 'text-shadow:black 0px 0px 3px;color:#ebbc4a;font-weight:bold;font-size:75%;line-height:11px;text-align:center;display:inline-block;position: relative; left:0; top:0;width:60%; border: 1px solid ' + factionColor +'">'
			+ currEng + ' / ' + totalEng + ' (' + engP + '%)</div>'
			+ '</div>' : "",
		// SDIZ::END
		'<div id="portal_capture_status">'
		);
	  a.j.isCaptured && (d.append('<div id="portal_discovery_label">Discovery:</div><div id="portal_capture_details">'), xd(a, d), d.append("</div>"));
	  d.append("</div></div></div>");
	  a.j.isCaptured ? (c.append('<div id="portal_tabs_container" class="res_tab_selected"><div class="portal_details_row"><div id="portal_tab_group_decorator"><div id="pi-tab-res" class="portal_tab_title tab_selected">RESONATORS</div><div id="pi-tab-mod" class="portal_tab_title">MODS</div></div></div><div id="tab_content_res">'), yd({oa:a.j.v, b:a.j.b, s:k}, c), c.append('</div><div id="tab_content_mod">'), zd({Za:a.j.Q, b:a.j.b}, c), c.append("</div></div>")) : c.append('<div class="portal_details_row"></div>');	  
	  c.append("</div></div>");
	  return b ? "" : c.toString()
	};
	// Detail page, one reasonator
	Ed = function (a, b) {
		// SDIZ::BEGIN
		(b || new J).append('<div class="resonator_level">', a.e ? "L" + N(a.e) + ' [' + N(a.distance) +'m]': "", "</div>")
		// SDIZ::END
	};
	
	// process and create reasonator object
	Uc = function(a, b, c, d) {
	  this.e = a;
	  this.cb = Tc(Sc.c(), b);
	  this.va = Math.ceil(16 * c / Vc[a])
	  
	  // SDIZ::BEGIN
	  this.energy = c;
	  this.energyT = Vc[a];
	  this.distance = d;
	  // SDIZ::END
	};
	Wc = function (a) {
	  a = fb(a, function(a) {
		return!!a
	  });
	  return D(a, function(a) {
		// SDIZ::BEGIN
		return new Uc(a.level, a.ownerGuid, a.energyTotal, a.distanceToPortal);
		// SDIZ::END
	  })
	};
}

function injectScript(main) {
    var elem = document.createElement("script");
    elem.type = "text/javascript";
	var textmain = "" + main;
	textmain = textmain.replace("__root__", root);
	elem.appendChild(document.createTextNode('('+ textmain +')();'));
    return document.head.appendChild(elem);
}

injectScript(ZZ);