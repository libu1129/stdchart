this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["active-filters"]=function(e){function t(t){for(var r,o,a=t[0],u=t[1],l=t[2],b=0,f=[];b<a.length;b++)o=a[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);f.length;)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={4:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=u;return i.push([838,0]),n()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},121:function(e,t){},14:function(e,t){!function(){e.exports=this.wp.blockEditor}()},153:function(e,t,n){"use strict";var r=n(21),c=n.n(r),i=n(24),o=n.n(i),a=n(22),u=n.n(a),l=n(23),s=n.n(l),b=n(12),f=n.n(b),p=n(0),d=n(6),g=n(1),m=n(4);function v(e){var t=e.level,n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(p.createElement)(m.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(p.createElement)(m.Path,{d:n[t]})):null}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var c=f()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return s()(this,n)}}var h=function(e){u()(n,e);var t=O(n);function n(){return c()(this,n),t.apply(this,arguments)}return o()(n,[{key:"createLevelControl",value:function(e,t,n){var r=e===t;return{icon:Object(p.createElement)(v,{level:e}),title:Object(g.sprintf)(Object(g.__)("Heading %d"),e),isActive:r,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,r=void 0===n||n,c=t.minLevel,i=t.maxLevel,o=t.selectedLevel,a=t.onChange;return Object(p.createElement)(m.Toolbar,{isCollapsed:r,icon:Object(p.createElement)(v,{level:o}),controls:Object(d.range)(c,i).map((function(t){return e.createLevelControl(t,o,a)}))})}}]),n}(p.Component);t.a=h},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(11),c=n.n(r),i=n(0),o=function(){var e=Object(i.useState)(),t=c()(e,2)[1];return function(e){return t((function(){throw e}))}}},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(11),c=n.n(r),i=n(40),o=n(36),a=n(0),u=n(99),l=n(6),s=n(60),b=function(e){var t=Object(u.a)();e=e||t;var n=Object(o.useSelect)((function(t){return t(i.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),r=Object(o.useDispatch)(i.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[n,Object(a.useCallback)((function(t){r(e,t)}),[e])]},f=function(e,t,n){var r=Object(u.a)();n=n||r;var c=Object(o.useSelect)((function(r){return r(i.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)}),[n,e]),l=Object(o.useDispatch)(i.QUERY_STATE_STORE_KEY).setQueryValue;return[c,Object(a.useCallback)((function(t){l(n,e,t)}),[n,e])]},p=function(e,t){var n=Object(u.a)(),r=b(t=t||n),i=c()(r,2),o=i[0],f=i[1],p=Object(s.a)(e),d=Object(a.useRef)(!1);return Object(a.useEffect)((function(){f(Object(l.assign)({},o,p)),d.current=!0}),[p]),d.current?[o,f]:[e,f]}},17:function(e,t){!function(){e.exports=this.wp.blocks}()},182:function(e,t,n){"use strict";var r=n(0),c=(n(2),n(14)),i=n(8),o=n.n(i);n(252);t.a=function(e){var t=e.className,n=e.headingLevel,i=e.onChange,a=e.heading,u="h".concat(n);return Object(r.createElement)(u,null,Object(r.createElement)(c.PlainText,{className:o()("wc-block-editor-components-title",t),value:a,onChange:i}))}},198:function(e,t){},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(40),c=n(36),i=n(0),o=n(156),a=n(60),u=function(e){var t=e.namespace,n=e.resourceName,u=e.resourceValues,l=void 0===u?[]:u,s=e.query,b=void 0===s?{}:s,f=e.shouldSelect,p=void 0===f||f;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");var d=Object(i.useRef)({results:[],isLoading:!0}),g=Object(a.a)(b),m=Object(a.a)(l),v=Object(o.a)(),O=Object(c.useSelect)((function(e){if(!p)return null;var c=e(r.COLLECTIONS_STORE_KEY),i=[t,n,g,m],o=c.getCollectionError.apply(c,i);return o&&v(o),{results:c.getCollection.apply(c,i),isLoading:!c.hasFinishedResolution("getCollection",i)}}),[t,n,m,g,p]);return null!==O&&(d.current=O),d.current}},25:function(e,t){!function(){e.exports=this.wp.compose}()},250:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return g}));var r=n(7),c=n.n(r),i=n(54),o=n.n(i),a=n(3);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s,b,f={code:a.CURRENCY.code,symbol:a.CURRENCY.symbol,thousandSeparator:a.CURRENCY.thousandSeparator,decimalSeparator:a.CURRENCY.decimalSeparator,minorUnit:a.CURRENCY.precision,prefix:(s=a.CURRENCY.symbol,b=a.CURRENCY.symbolPosition,{left:s,left_space:" "+s,right:"",right_space:""}[b]||""),suffix:function(e,t){return{left:"",left_space:"",right:e,right_space:" "+e}[t]||""}(a.CURRENCY.symbol,a.CURRENCY.symbolPosition)},p=function(e){if(!e||"object"!==o()(e))return f;var t=e.currency_code,n=e.currency_symbol,r=e.currency_thousand_separator,c=e.currency_decimal_separator,i=e.currency_minor_unit,a=e.currency_prefix,u=e.currency_suffix;return{code:t||"USD",symbol:n||"$",thousandSeparator:"string"==typeof r?r:",",decimalSeparator:"string"==typeof c?c:".",minorUnit:Number.isFinite(i)?i:2,prefix:"string"==typeof a?a:"$",suffix:"string"==typeof u?u:""}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l(l({},f),e)},g=function(e,t){if(""===e||void 0===e)return"";var n=parseInt(e,10);if(!Number.isFinite(n))return"";var r=d(t),c=n/Math.pow(10,r.minorUnit),i=r.prefix+c+r.suffix,o=document.createElement("textarea");return o.innerHTML=i,o.value}},252:function(e,t){},262:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(5),c=r.c.reduce((function(e,t){var n,r=(n=t)&&n.attribute_name?{id:parseInt(n.attribute_id,10),name:n.attribute_name,taxonomy:"pa_"+n.attribute_name,label:n.attribute_label}:null;return r.id&&e.push(r),e}),[]),i=function(e){if(e)return c.find((function(t){return t.id===e}))},o=function(e){if(e)return c.find((function(t){return t.taxonomy===e}))}},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(6),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=e.filter((function(e){return e.attribute===n.taxonomy})),o=i.length?i[0]:null;if(o&&o.slug&&Array.isArray(o.slug)&&o.slug.includes(c)){var a=o.slug.filter((function(e){return e!==c})),u=e.filter((function(e){return e.attribute!==n.taxonomy}));a.length>0&&(o.slug=a.sort(),u.push(o)),t(Object(r.sortBy)(u,"attribute"))}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in",o=e.filter((function(e){return e.attribute!==n.taxonomy}));0===c.length?t(o):(o.push({attribute:n.taxonomy,operator:i,slug:Object(r.map)(c,"slug").sort()}),t(Object(r.sortBy)(o,"attribute")))}},268:function(e,t,n){"use strict";var r=n(10),c=n.n(r),i=n(27),o=n.n(i),a=n(0),u=(n(2),n(8)),l=n.n(u),s=n(1),b=n(59),f=n(274),p=(n(198),function(e){var t=e.text,n=e.screenReaderText,r=void 0===n?"":n,i=e.element,u=void 0===i?"li":i,s=e.className,b=void 0===s?"":s,f=e.radius,p=void 0===f?"small":f,d=e.children,g=void 0===d?null:d,m=o()(e,["text","screenReaderText","element","className","radius","children"]),v=u,O=l()(b,"wc-block-components-chip","wc-block-components-chip--radius-"+p),h=Boolean(r&&r!==t);return Object(a.createElement)(v,c()({className:O},m),Object(a.createElement)("span",{"aria-hidden":h,className:"wc-block-components-chip__text"},t),h&&Object(a.createElement)("span",{className:"screen-reader-text"},r),g)});t.a=function(e){var t=e.ariaLabel,n=void 0===t?"":t,r=e.className,i=void 0===r?"":r,u=e.disabled,d=void 0!==u&&u,g=e.onRemove,m=void 0===g?function(){}:g,v=e.removeOnAnyClick,O=void 0!==v&&v,h=e.text,j=e.screenReaderText,y=void 0===j?"":j,w=o()(e,["ariaLabel","className","disabled","onRemove","removeOnAnyClick","text","screenReaderText"]),_=O?"span":"button";if(!n){var E=y&&"string"==typeof y?y:h;n="string"!=typeof E?Object(s.__)("Remove",'woocommerce'):Object(s.sprintf)(Object(s.__)('Remove "%s"','woocommerce'),E)}var S={"aria-label":n,disabled:d,onClick:m,onKeyDown:function(e){"Backspace"!==e.key&&"Delete"!==e.key||m()}},k=O?S:{},x=O?{"aria-hidden":!0}:S;return Object(a.createElement)(p,c()({},w,k,{className:l()(i,"is-removable"),element:O?"button":w.element,screenReaderText:y,text:h}),Object(a.createElement)(_,c()({className:"wc-block-components-chip__remove"},x),Object(a.createElement)(b.a,{className:"wc-block-components-chip__remove-icon",srcElement:f.a,size:16})))}},274:function(e,t,n){"use strict";var r=n(10),c=n.n(r),i=n(27),o=n.n(i),a=n(0),u=n(58),l=Object(a.createElement)((function(e){var t=e.className,n=e.size,r=o()(e,["className","size"]);return Object(a.createElement)(u.a,c()({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:t,width:n,height:n},r),Object(a.createElement)("path",{d:"M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"}))}),null);t.a=l},3:function(e,t){!function(){e.exports=this.wc.wcSettings}()},33:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},36:function(e,t){!function(){e.exports=this.wp.data}()},4:function(e,t){!function(){e.exports=this.wp.components}()},40:function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},46:function(e,t,n){"use strict";var r=n(7),c=n.n(r),i=n(0),o=(n(2),n(9)),a=n(8),u=n.n(a);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t,n=e.label,r=e.screenReaderLabel,c=e.wrapperElement,a=e.wrapperProps,l=null!=n,b=null!=r;return!l&&b?(t=c||"span",a=s(s({},a),{},{className:u()(a.className,"screen-reader-text")}),Object(i.createElement)(t,a,r)):(t=c||o.Fragment,l&&b&&n!==r?Object(i.createElement)(t,a,Object(i.createElement)("span",{"aria-hidden":"true"},n),Object(i.createElement)("span",{className:"screen-reader-text"},r)):Object(i.createElement)(t,a,n))};b.defaultProps={wrapperProps:{}},t.a=b},47:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},5:function(e,t,n){"use strict";n.d(t,"k",(function(){return c})),n.d(t,"G",(function(){return i})),n.d(t,"M",(function(){return o})),n.d(t,"x",(function(){return a})),n.d(t,"z",(function(){return u})),n.d(t,"l",(function(){return l})),n.d(t,"y",(function(){return s})),n.d(t,"B",(function(){return b})),n.d(t,"n",(function(){return f})),n.d(t,"A",(function(){return p})),n.d(t,"m",(function(){return d})),n.d(t,"C",(function(){return g})),n.d(t,"t",(function(){return m})),n.d(t,"w",(function(){return v})),n.d(t,"q",(function(){return O})),n.d(t,"r",(function(){return h})),n.d(t,"s",(function(){return j})),n.d(t,"j",(function(){return y})),n.d(t,"I",(function(){return w})),n.d(t,"N",(function(){return _})),n.d(t,"p",(function(){return E})),n.d(t,"o",(function(){return S})),n.d(t,"F",(function(){return k})),n.d(t,"c",(function(){return x})),n.d(t,"u",(function(){return C})),n.d(t,"v",(function(){return R})),n.d(t,"Q",(function(){return P})),n.d(t,"R",(function(){return L})),n.d(t,"H",(function(){return T})),n.d(t,"a",(function(){return H})),n.d(t,"K",(function(){return z})),n.d(t,"b",(function(){return D})),n.d(t,"J",(function(){return V})),n.d(t,"h",(function(){return B})),n.d(t,"L",(function(){return M})),n.d(t,"g",(function(){return A})),n.d(t,"i",(function(){return Y})),n.d(t,"E",(function(){return I})),n.d(t,"D",(function(){return Q})),n.d(t,"P",(function(){return K})),n.d(t,"O",(function(){return G})),n.d(t,"d",(function(){return W})),n.d(t,"e",(function(){return q})),n.d(t,"f",(function(){return J})),n.d(t,"U",(function(){return X})),n.d(t,"V",(function(){return Z})),n.d(t,"S",(function(){return ee})),n.d(t,"T",(function(){return te}));var r=n(3),c=Object(r.getSetting)("currentUserIsAdmin",!1),i=Object(r.getSetting)("reviewRatingsEnabled",!0),o=Object(r.getSetting)("showAvatars",!0),a=Object(r.getSetting)("max_columns",6),u=Object(r.getSetting)("min_columns",1),l=Object(r.getSetting)("default_columns",3),s=Object(r.getSetting)("max_rows",6),b=Object(r.getSetting)("min_rows",1),f=Object(r.getSetting)("default_rows",3),p=Object(r.getSetting)("min_height",500),d=Object(r.getSetting)("default_height",500),g=Object(r.getSetting)("placeholderImgSrc",""),m=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),v=Object(r.getSetting)("limitTags"),O=Object(r.getSetting)("hasProducts",!0),h=Object(r.getSetting)("hasTags",!0),j=Object(r.getSetting)("homeUrl",""),y=Object(r.getSetting)("couponsEnabled",!0),w=Object(r.getSetting)("shippingEnabled",!0),_=Object(r.getSetting)("taxesEnabled",!0),E=Object(r.getSetting)("displayItemizedTaxes",!1),S=(Object(r.getSetting)("displayShopPricesIncludingTax",!1),Object(r.getSetting)("displayCartPricesIncludingTax",!1)),k=Object(r.getSetting)("productCount",0),x=Object(r.getSetting)("attributes",[]),C=Object(r.getSetting)("isShippingCalculatorEnabled",!0),R=Object(r.getSetting)("isShippingCostHidden",!1),N=Object(r.getSetting)("woocommerceBlocksPhase",1),P=Object(r.getSetting)("wcBlocksAssetUrl",""),L=Object(r.getSetting)("wcBlocksBuildUrl",""),T=Object(r.getSetting)("shippingCountries",{}),H=Object(r.getSetting)("allowedCountries",{}),z=Object(r.getSetting)("shippingStates",{}),D=Object(r.getSetting)("allowedStates",{}),V=Object(r.getSetting)("shippingMethodsExist",!1),B=Object(r.getSetting)("checkoutShowLoginReminder",!0),F={id:0,title:"",permalink:""},U=Object(r.getSetting)("storePages",{shop:F,cart:F,checkout:F,privacy:F,terms:F}),M=U.shop.permalink,A=U.checkout.id,Y=U.checkout.permalink,I=U.privacy.permalink,Q=U.privacy.title,K=U.terms.permalink,G=U.terms.title,W=U.cart.id,q=U.cart.permalink,J=Object(r.getSetting)("checkoutAllowsGuest",!1),$=(Object(r.getSetting)("checkoutAllowsSignup",!1),n(17)),X=function(e,t){if(N>2)return Object($.registerBlockType)(e,t)},Z=function(e,t){if(N>1)return Object($.registerBlockType)(e,t)},ee=function(){return N>2},te=function(){return N>1}},59:function(e,t,n){"use strict";var r=n(7),c=n.n(r),i=n(27),o=n.n(i),a=n(9);n(2);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.srcElement,n=e.size,r=void 0===n?24:n,i=o()(e,["srcElement","size"]);return Object(a.isValidElement)(t)&&Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:r,height:r},i))}},6:function(e,t){!function(){e.exports=this.lodash}()},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=n(47),i=n.n(c),o=function(e){var t=Object(r.useRef)();return i()(e,t.current)||(t.current=e),t.current}},72:function(e,t,n){"use strict";var r=n(10),c=n.n(r),i=n(21),o=n.n(i),a=n(24),u=n.n(a),l=n(19),s=n.n(l),b=n(22),f=n.n(b),p=n(23),d=n.n(p),g=n(12),m=n.n(g),v=n(0),O=n(6),h=n(8),j=n.n(h),y=n(4),w=n(25);n(121);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var c=m()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return d()(this,n)}}var E=function(e){f()(n,e);var t=_(n);function n(){var e;return o()(this,n),(e=t.apply(this,arguments)).onClick=e.onClick.bind(s()(e)),e}return u()(n,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.label,i=n.checked,o=n.instanceId,a=n.className,u=n.help,l=n.options,s=n.value,b="inspector-toggle-button-control-".concat(o);return u&&(e=Object(O.isFunction)(u)?u(i):u),Object(v.createElement)(y.BaseControl,{id:b,help:e,className:j()("components-toggle-button-control",a)},Object(v.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},r),Object(v.createElement)(y.ButtonGroup,{"aria-labelledby":b+"__label"},l.map((function(e,n){var i={};return s===e.value?(i.isPrimary=!0,i["aria-pressed"]=!0):(i.isDefault=!0,i["aria-pressed"]=!1),Object(v.createElement)(y.Button,c()({key:"".concat(e.label,"-").concat(e.value,"-").concat(n),value:e.value,onClick:t.onClick,"aria-label":r+": "+e.label},i),e.label)}))))}}]),n}(v.Component);t.a=Object(w.withInstanceId)(E)},838:function(e,t,n){e.exports=n(892)},839:function(e,t){},892:function(e,t,n){"use strict";n.r(t);var r=n(10),c=n.n(r),i=n(0),o=n(1),a=n(17),u=n(59),l=n(58),s=Object(i.createElement)(l.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(i.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(i.createElement)("path",{d:"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})),b=n(8),f=n.n(b),p=n(14),d=n(4),g=n(153),m=n(182),v=n(11),O=n.n(v),h=n(169),j=(n(2),n(46)),y=(n(839),n(262)),w=n(250),_=n(268),E=function(e,t){return Number.isFinite(e)&&Number.isFinite(t)?Object(o.sprintf)(Object(o.__)("Between %s and %s",'woocommerce'),Object(w.a)(e),Object(w.a)(t)):Number.isFinite(e)?Object(o.sprintf)(Object(o.__)("From %s",'woocommerce'),Object(w.a)(e)):Object(o.sprintf)(Object(o.__)("Up to %s",'woocommerce'),Object(w.a)(t))},S=function(e){var t=e.type,n=e.name,r=e.prefix,c=e.removeCallback,a=void 0===c?function(){}:c,u=e.showLabel,l=void 0===u||u,s=e.displayStyle,b=r?Object(i.createElement)(i.Fragment,null,r," ",n):n,f=Object(o.sprintf)(Object(o.__)("Remove %s filter",'woocommerce'),n);return Object(i.createElement)("li",{className:"wc-block-active-filters__list-item",key:t+":"+n},l&&Object(i.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===s?Object(i.createElement)(_.a,{element:"span",text:b,onRemove:a,radius:"large",ariaLabel:f}):Object(i.createElement)("span",{className:"wc-block-active-filters__list-item-name"},b,Object(i.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:a},f)))},k=n(201),x=n(33),C=n(263),R=function(e){var t=e.attributeObject,n=void 0===t?{}:t,r=e.slugs,c=void 0===r?[]:r,a=e.operator,u=void 0===a?"in":a,l=e.displayStyle,s=Object(k.a)({namespace:"/wc/store",resourceName:"products/attributes/terms",resourceValues:[n.id]}),b=s.results,f=s.isLoading,p=Object(h.b)("attributes",[]),d=O()(p,2),g=d[0],m=d[1];if(f)return null;var v=n.label;return Object(i.createElement)("li",null,Object(i.createElement)("span",{className:"wc-block-active-filters__list-item-type"},v,":"),Object(i.createElement)("ul",null,c.map((function(e,t){var r=b.find((function(t){return t.slug===e}));if(!r)return null;var c="";return t>0&&"and"===u&&(c=Object(i.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},Object(o.__)("and",'woocommerce'))),S({type:v,name:Object(x.decodeEntities)(r.name||e),prefix:c,removeCallback:function(){Object(C.a)(g,m,n,e)},showLabel:!1,displayStyle:l})}))))},N=function(e){var t=e.attributes,n=e.isEditor,r=void 0!==n&&n,c=Object(h.b)("attributes",[]),a=O()(c,2),u=a[0],l=a[1],s=Object(h.b)("min_price"),b=O()(s,2),p=b[0],d=b[1],g=Object(h.b)("max_price"),m=O()(g,2),v=m[0],w=m[1],_=Object(i.useMemo)((function(){return Number.isFinite(p)||Number.isFinite(v)?S({type:Object(o.__)("Price",'woocommerce'),name:E(p,v),removeCallback:function(){d(void 0),w(void 0)},displayStyle:t.displayStyle}):null}),[p,v,E]),k=Object(i.useMemo)((function(){return u.map((function(e){var n=Object(y.b)(e.attribute);return Object(i.createElement)(R,{attributeObject:n,displayStyle:t.displayStyle,slugs:e.slug,key:e.attribute,operator:e.operator})}))}),[u]);if(!(u.length>0||Number.isFinite(p)||Number.isFinite(v)||r))return null;var x="h".concat(t.headingLevel),C=f()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle});return Object(i.createElement)(i.Fragment,null,!r&&t.heading&&Object(i.createElement)(x,null,t.heading),Object(i.createElement)("div",{className:"wc-block-active-filters"},Object(i.createElement)("ul",{className:C},r?Object(i.createElement)(i.Fragment,null,S({type:Object(o.__)("Size",'woocommerce'),name:Object(o.__)("Small",'woocommerce'),displayStyle:t.displayStyle}),S({type:Object(o.__)("Color",'woocommerce'),name:Object(o.__)("Blue",'woocommerce'),displayStyle:t.displayStyle})):Object(i.createElement)(i.Fragment,null,_,k)),Object(i.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:function(){d(void 0),w(void 0),l([])}},Object(i.createElement)(j.a,{label:Object(o.__)("Clear All",'woocommerce'),screenReaderLabel:Object(o.__)("Clear All Filters",'woocommerce')}))))},P=n(72),L=Object(d.withSpokenMessages)((function(e){var t=e.attributes,n=e.setAttributes,r=t.className,c=t.displayStyle,a=t.heading,u=t.headingLevel;return Object(i.createElement)("div",{className:r},Object(i.createElement)(p.InspectorControls,{key:"inspector"},Object(i.createElement)(d.PanelBody,{title:Object(o.__)("Block Settings",'woocommerce')},Object(i.createElement)(P.a,{label:Object(o.__)("Display Style",'woocommerce'),value:c,options:[{label:Object(o.__)("List",'woocommerce'),value:"list"},{label:Object(o.__)("Chips",'woocommerce'),value:"chips"}],onChange:function(e){return n({displayStyle:e})}}),Object(i.createElement)("p",null,Object(o.__)("Heading Level",'woocommerce')),Object(i.createElement)(g.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:u,onChange:function(e){return n({headingLevel:e})}}))),Object(i.createElement)(m.a,{headingLevel:u,heading:a,onChange:function(e){return n({heading:e})}}),Object(i.createElement)(d.Disabled,null,Object(i.createElement)(N,{attributes:t,isEditor:!0})))}));Object(a.registerBlockType)("woocommerce/active-filters",{title:Object(o.__)("Active Product Filters",'woocommerce'),icon:{src:Object(i.createElement)(u.a,{srcElement:s}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("WooCommerce",'woocommerce')],description:Object(o.__)("Show the currently active product filters. Works in combination with the All Products and filters blocks.",'woocommerce'),supports:{html:!1,multiple:!1},example:{attributes:{}},attributes:{displayStyle:{type:"string",default:"list"},heading:{type:"string",default:Object(o.__)("Active filters",'woocommerce')},headingLevel:{type:"number",default:3}},edit:L,save:function(e){var t=e.attributes,n=t.className,r={"data-display-style":t.displayStyle,"data-heading":t.heading,"data-heading-level":t.headingLevel};return Object(i.createElement)("div",c()({className:f()("is-loading",n)},r),Object(i.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-product-filters__placeholder"}))}})},9:function(e,t){!function(){e.exports=this.React}()},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=Object(r.createContext)("page"),i=function(){return Object(r.useContext)(c)};c.Provider}});
