(this["webpackJsonpfansclub-frontend-base"]=this["webpackJsonpfansclub-frontend-base"]||[]).push([[1],{468:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(0)),a=r(106),i=r(242);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,r,n,u=b(c);function c(){var e;s(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return O(v(e=u.call.apply(u,[this].concat(r))),"callPlayer",a.callPlayer),O(v(e),"onDurationChange",(function(){var t=e.getDuration();e.props.onDuration(t)})),O(v(e),"mute",(function(){e.callPlayer("setMuted",!0)})),O(v(e),"unmute",(function(){e.callPlayer("setMuted",!1)})),O(v(e),"ref",(function(t){e.container=t})),e}return t=c,(r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,r=this.props,n=r.controls,o=r.config,u=r.onError,c=r.playing,p=f(e.match(i.MATCH_URL_DAILYMOTION),2)[1];this.player?this.player.load(p,{start:(0,a.parseStartTime)(e),autoplay:c}):(0,a.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",(function(e){return e.player})).then((function(r){if(t.container){var i=r.player;t.player=new i(t.container,{width:"100%",height:"100%",video:p,params:l({controls:n,autoplay:t.props.playing,mute:t.props.muted,start:(0,a.parseStartTime)(e),origin:window.location.origin},o.params),events:{apiready:t.props.onReady,seeked:function(){return t.props.onSeek(t.player.currentTime)},video_end:t.props.onEnded,durationchange:t.onDurationChange,pause:t.props.onPause,playing:t.props.onPlay,waiting:t.props.onBuffer,error:function(e){return u(e)}}})}}),u)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.player.duration||null}},{key:"getCurrentTime",value:function(){return this.player.currentTime}},{key:"getSecondsLoaded",value:function(){return this.player.bufferedTime}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return o.default.createElement("div",{style:e},o.default.createElement("div",{ref:this.ref}))}}])&&y(t.prototype,r),n&&y(t,n),c}(o.Component);t.default=g,O(g,"displayName","DailyMotion"),O(g,"canPlay",i.canPlay.dailymotion),O(g,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerDailyMotion.48fbff0a.chunk.js.map