(()=>{var e={177:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,'.loader {\n\twidth: 48px;\n\theight: 48px;\n\tborder-radius: 50%;\n\tposition: relative;\n\tanimation: rotate 1s linear infinite\n}\n\n.loader::before,\n.loader::after {\n\tcontent: "";\n\tbox-sizing: border-box;\n\tposition: absolute;\n\tinset: 0px;\n\tborder-radius: 50%;\n\tborder: 5px solid #000;\n\tanimation: prixClipFix 2s linear infinite;\n}\n\n.loader::after {\n\tinset: 8px;\n\ttransform: rotate3d(90, 90, 0, 180deg);\n\tborder-color: #FF3D00;\n}\n\n@keyframes rotate {\n\t0% {\n\t\ttransform: rotate(0deg)\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg)\n\t}\n}\n\n@keyframes prixClipFix {\n\t0% {\n\t\tclip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)\n\t}\n\n\t50% {\n\t\tclip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)\n\t}\n\n\t75%,\n\t100% {\n\t\tclip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)\n\t}\n}',""]);const s=i},402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"root {\n\t--primary-color: #007bff;\n\t--secondary-color: #6c757d;\n\t--success-color: #28a745;\n\t--info-color: #17a2b8;\n\t--warning-color: #ffc107;\n\t--danger-color: #dc3545;\n\t--light-color: #f8f9fa;\n\t--dark-color: #343a40;\n\t--breakpoint-sm: 576px;\n\t--breakpoint-md: 768px;\n\t--breakpoint-lg: 992px;\n\t--breakpoint-xl: 1200px;\n}\n\n* {\n\tbox-sizing: border-box;\n\tfont-family: sans-serif;\n\t/* border: red solid 1px; */\n}\n\nbody {\n\tbackground-color: #f4f4f4;\n\tcolor: var(--dark-color);\n\tfont-size: 1.2rem;\n\tline-height: 1.5;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n\n.main-title {\n\tfont-size: 2rem;\n\tmargin-bottom: 2rem;\n\ttext-align: center;\n}\n\n#content {\n\tbackground-color: #fff;\n\tborder-radius: 5px;\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n\tmargin: 0 auto;\n\tmax-width: 80%;\n\tpadding: 20px;\n\twidth: 100%;\n}\n\n.main-panel {\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n.city-query-field {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 1.5rem;\n}\n\n.city-query-input {\n\tborder: 1px solid #ccc;\n\tborder-radius: 5px;\n\tfont-size: 1.2rem;\n\tpadding: 0.5rem;\n\twidth: 100%;\n}\n.city-query-button {\n\tbackground-color: var(--primary-color);\n\tborder: 1px solid var(--primary-color);\n\tborder-radius: 5px;\n\tcolor: grey;\n\tcursor: pointer;\n\tfont-size: 1.2rem;\n\tpadding: 0.5rem;\n}\n\n.weather-informations {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: flex-start;\n\tmargin-bottom: 1.5rem;\n}\n\n.left-panel {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 30%;\n}\n\n#today {\n\twidth: 100%;\n}\n",""]);const s=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},70:(e,t,n)=>{var r={"./bright.png":472,"./lightning.png":55,"./overcast.png":306,"./sun.png":249,"./sunrise.png":485,"./sunset.png":67,"./wind-direction.png":974};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=70},472:(e,t,n)=>{"use strict";e.exports=n.p+"9841a65acdc137ce6022.png"},55:(e,t,n)=>{"use strict";e.exports=n.p+"80be895f6795bbdaed84.png"},306:(e,t,n)=>{"use strict";e.exports=n.p+"93901c928a0fc4b9a874.png"},249:(e,t,n)=>{"use strict";e.exports=n.p+"da7e59e626f934f8c116.png"},485:(e,t,n)=>{"use strict";e.exports=n.p+"ccc91abc59845e8bf28c.png"},67:(e,t,n)=>{"use strict";e.exports=n.p+"77276b05a1dec5a8a720.png"},974:(e,t,n)=>{"use strict";e.exports=n.p+"9189ad9ddb55a8bbdde4.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{"use strict";const e="1810d5f4b037b1f6ea4692c6b589d8ba",t="c0062fcacffd48779fe133436240202",r=function(e){let t={};return e.keys().map(((n,r)=>{t[n.replace("./","").replace(/\.(.*)$/,"")]=e(n)})),console.log(t),t}(n(70));var o=n(379),a=n.n(o),i=n(795),s=n.n(i),c=n(569),l=n.n(c),d=n(565),p=n.n(d),u=n(216),m=n.n(u),f=n(589),y=n.n(f),h=n(402),g={};g.styleTagTransform=y(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=m(),a()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var x=n(177),v={};v.styleTagTransform=y(),v.setAttributes=p(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m(),a()(x.Z,v),x.Z&&x.Z.locals&&x.Z.locals;const b=e,C=t,w=async e=>{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=${b}`),n=await t.json();return"404"===n.cod?w("Paris"):(await new Promise((e=>setTimeout(e,1e3))),n)},E=async e=>{const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${e}&days=7&key=${C}`),n=await t.json();return n.error?E("Paris"):n},I=async e=>{(async e=>{const t=document.getElementById("today");for(;t.firstChild;)t.removeChild(t.firstChild);const n=document.createElement("span");n.className="loader",t.appendChild(n);const o=await w(e);console.log(o);const a=new Intl.DisplayNames(["en"],{type:"region"});t.removeChild(n);const i=document.getElementById("city-title");i.textContent=`${o.name} - ${a.of(o.sys.country)}`,i.style.textAlign="center";const s=document.createElement("h3");s.textContent="Current Weather (Today)",t.appendChild(s),function(e,t){const n=document.createElement("div");n.className="sun-hours",n.style.display="flex",n.style.justifyContent="space-around",n.style.alignItems="center",n.style.width="100%",n.style.height="100px";const o=document.createElement("div");o.className="sunrise-box",o.style.display="flex",o.style.flexDirection="column",o.style.justifyContent="center",o.style.alignItems="center";const a=document.createElement("img");a.className="sunrise-icon",a.src=r.sunrise,a.alt="Sunrise",a.title="Sunrise",a.style.width="50px",a.style.height="50px",o.appendChild(a);const i=document.createElement("span");i.textContent=new Date(1e3*e.sys.sunrise).toLocaleTimeString(),o.appendChild(i),n.appendChild(o);const s=document.createElement("div");s.className="sunset-box",s.style.display="flex",s.style.flexDirection="column",s.style.justifyContent="center",s.style.alignItems="center";const c=document.createElement("img");c.className="sunset-icon",c.src=r.sunset,c.alt="sunset",c.title="sunset",c.style.width="50px",c.style.height="50px",s.appendChild(c);const l=document.createElement("span");l.textContent=new Date(1e3*e.sys.sunset).toLocaleTimeString(),s.appendChild(l),n.appendChild(s),t.appendChild(n)}(o,t),function(e,t){const n=document.createElement("div");n.className="current-weather",n.style.display="flex",n.style.flexDirection="column",n.style.justifyContent="space-around",n.style.alignItems="center",n.style.width="100%";const r=document.createElement("div");r.className="weather-icon-div",r.style.display="flex",r.style.flexDirection="column",r.style.justifyContent="center",r.style.alignItems="center";const o=document.createElement("img");o.className="weather-icon",o.src=`http://openweathermap.org/img/w/${e.weather[0].icon}.png`,o.alt=e.weather[0].description,r.appendChild(o);const a=document.createElement("span");a.textContent=e.weather[0].description,r.appendChild(a),n.appendChild(r);const i=document.createElement("div");i.className="temperature-div",i.style.display="flex",i.style.flexDirection="column",i.style.justifyContent="center",i.style.alignItems="center";const s=document.createElement("span");s.textContent=`Temperature: ${e.main.temp}°C`,i.appendChild(s),n.appendChild(i);const c=document.createElement("div");i.className="wind-div",i.style.display="flex",i.style.flexDirection="column",i.style.justifyContent="center",i.style.alignItems="center";const l=document.createElement("span");l.textContent=`Wind speed: ${e.wind.speed}km/h`,c.appendChild(l),n.appendChild(c);const d=document.createElement("div");i.className="humidity-div",i.style.display="flex",i.style.flexDirection="column",i.style.justifyContent="center",i.style.alignItems="center";const p=document.createElement("span");p.textContent=`Humidity : ${e.main.humidity}%`,d.appendChild(p),n.appendChild(d),t.appendChild(n)}(o,t)})(e),(async e=>{const t=document.getElementById("forecast");for(;t.firstChild;)t.removeChild(t.firstChild);const n=document.createElement("span");n.className="loader",t.appendChild(n);const r=await E(e);console.log(r),t.removeChild(n),function(e,t,n){console.log(e),t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="flex-start",t.style.alignItems="center";const r=document.createElement("h3");r.textContent=`Forecast Weather - ${n.name} (${n.country})`,r.style.textAlign="center",t.appendChild(r),e.forEach((e=>{let n=document.createElement("div");n.className="forecast-day",n.style.display="flex",n.style.flexDirection="row",n.style.justifyContent="space-around",n.style.alignItems="center",n.style.width="100%";let r=document.createElement("span");r.textContent=function(e){const t=new Date(1e3*e);return new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(t)}(e.date_epoch);let o=document.createElement("img");o.src=e.day.condition.icon.replace("//","http://"),o.alt=e.day.condition.text,n.appendChild(r),n.appendChild(o),t.appendChild(n)}))}(r.forecast.forecastday,t,r.location)})(e)},j=document.getElementById("city-query-button"),N=document.getElementById("city-query-input");j.addEventListener("click",(()=>{""!==N.value?I(N.value):I("Paris")})),N.addEventListener("keyup",(e=>{"Enter"===e.key&&(""!==N.value?I(N.value):I("Paris"))})),I("Paris")})()})();