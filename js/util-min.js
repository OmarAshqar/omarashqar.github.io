"use strict";var Util={getJSON:function(n,t){$.getJSON(n).then(function(n){return t(n)}).catch(function(n,t,e){return console.error("Error:",e)})},include:function(n,t){$.get(n,function(n){return t(n)})},template:function(n,t){return Object.keys(t).forEach(function(e){n=n.replace(e,t[e])}),$(n)},redirect:function(n,t){t?window.open(n,"_blank"):window.location=n}};