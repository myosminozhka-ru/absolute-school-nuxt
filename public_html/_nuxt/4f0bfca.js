(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{606:function(t,e,n){var content=n(638);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("3fc1b141",content,!0,{sourceMap:!1})},637:function(t,e,n){"use strict";n(606)},638:function(t,e,n){var o=n(57)(!1);o.push([t.i,'.standartClass{width:200px;height:200px}.input{position:relative;max-width:370px;width:100%}.input:before{content:"";position:absolute;left:0;border-radius:5px 19% 19% 14%;right:0;background:#6a8626;bottom:-.46875vw;height:100%}.input:before,.input input{width:100%;-webkit-clip-path:polygon(0 0,100% 15%,100% 86%,1% 94%);clip-path:polygon(0 0,100% 15%,100% 86%,1% 94%)}.input input{outline:none;background:#fdf5da;border-radius:5px 19% 19% 14%;text-align:center;padding:1.5625vw .5208333333vw;border:0;position:relative;z-index:1;color:#424242;font-family:"Gilroy",serif;font-style:normal;font-weight:600;font-size:1.0416666667vw;line-height:160%}.input input::-moz-placeholder{font-family:"Gilroy",serif;font-style:normal;font-weight:600;font-size:1.0416666667vw;line-height:160%;color:#919191}.input input:-ms-input-placeholder{font-family:"Gilroy",serif;font-style:normal;font-weight:600;font-size:1.0416666667vw;line-height:160%;color:#919191}.input input::placeholder{font-family:"Gilroy",serif;font-style:normal;font-weight:600;font-size:1.0416666667vw;line-height:160%;color:#919191}.input input:active::-moz-placeholder,.input input:focus::-moz-placeholder,.input input:hover::-moz-placeholder{color:#424242}.input input:active:-ms-input-placeholder,.input input:focus:-ms-input-placeholder,.input input:hover:-ms-input-placeholder{color:#424242}.input input:active::placeholder,.input input:focus::placeholder,.input input:hover::placeholder{color:#424242}.input--has-error input{color:#fb1e42}.input--has-error input::-moz-placeholder{color:#fb1e42}.input--has-error input:-ms-input-placeholder{color:#fb1e42}.input--has-error input::placeholder{color:#fb1e42}.input--has-error:before{top:-3px;left:-2px;right:-2px;bottom:-9px;background:#fb1e42;width:calc(100% + 4px);height:calc(100% + 12px)}.input--white input{background:#fff}.input--white.input--has-error input{background:hsla(0,0%,100%,.9)}@media (max-width:1023px){.input input{padding:14.5px 10px;font-size:14px}.input input::-moz-placeholder{font-size:14px}.input input:-ms-input-placeholder{font-size:14px}.input input::placeholder{font-size:14px}.input:before{bottom:-9px}}',""]),t.exports=o},669:function(t,e,n){"use strict";n.r(e);var o={name:"OsmButton",props:{type:{type:String,default:"text"},value:{type:String,required:!0},text:{type:String,default:""},className:{type:String,default:"input--orange"}}},r=(n(637),n(15)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input",class:t.className},[n("input",{attrs:{type:t.type,placeholder:t.text,required:""},domProps:{value:t.value},on:{input:function(e){return t.$emit("update:value",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports}}]);