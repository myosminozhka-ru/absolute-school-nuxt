(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{676:function(t,e,r){"use strict";r.r(e);var n=r(12),o=(r(7),r(27),r(28),r(32),r(19),r(29),r(44),r(25),r(45),r(20));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"OsmProducts",components:{OsmProductV2:function(){return Promise.all([r.e(4),r.e(17)]).then(r.bind(null,675))},OsmHn:function(){return r.e(0).then(r.bind(null,677))}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({products:"products/getFilteredProducts",getProductsList:"products/getProductsList"})),methods:{loadMoreProducts:function(){}}},d=l,O=r(15),component=Object(O.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cards"},[t.getProductsList.length?[t._l(t.getProductsList,(function(t){return r("osm-product-v2",{key:"n-"+t.id,attrs:{product:t}})})),t._v(" "),t._e()]:[r("osm-hn",[t._v(" Таких товаров нет ")])]],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OsmButton:r(95).default})}}]);