parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var r=document.querySelector(".start"),e=document.querySelector("tbody").rows,t=document.querySelector(".game-score"),n=document.querySelector(".message-start"),a=document.querySelector(".message-win"),s=document.querySelector(".message-lose"),o=4,i=4,c=0,d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function f(){if(v())for(var r=Math.random()>.1?2:4,e=!1;!e;){var t=Math.floor(Math.random()*o),n=Math.floor(Math.random()*i);0===d[t][n]&&(d[t][n]=r,e=!0,u())}}function u(){for(var r=0;r<o;r++)for(var n=0;n<i;n++){l(e[r].cells[n],d[r][n])}t.innerText=String(c)}function l(r,e){r.innerText="",r.classList.value="",r.classList.add("field-cell"),e>0&&(r.innerText=String(e),r.classList.add("field-cell--".concat(String(e))))}function v(){for(var r=0;r<o;r++)for(var e=0;e<i;e++)if(0===d[r][e])return!0;return!1}function m(r){return r.filter(function(r){return 0!==r})}function h(r){for(var e=m(r),t=0;t<r.length-1;t++)e[t]===e[t+1]&&isFinite(e[t])&&(e[t]*=2,e[t+1]=0,c+=e[t],L(e[t]));for(e=m(e);e.length<i;)e.push(0);return e}function L(e){2048===e&&(a.classList.remove("hidden"),r.classList.remove("restart"),r.innerText="Start")}function S(){for(var r=0;r<o;r++){var e=d[r];e=h(e),d[r]=e}u()}function g(){for(var r=0;r<o;r++){var e=d[r];e.reverse(),(e=h(e)).reverse(),d[r]=e}u()}function w(){for(var r=0;r<i;r++){var e=[d[0][r],d[1][r],d[2][r],d[3][r]];e=h(e);for(var t=0;t<i;t++)d[t][r]=e[t]}u()}function y(){for(var r=0;r<i;r++){var e=[d[0][r],d[1][r],d[2][r],d[3][r]];e.reverse(),(e=h(e)).reverse();for(var t=0;t<i;t++)d[t][r]=e[t]}u()}function q(){for(var r=!1,e=0;e<o;e++)for(var t=0;t<i;t++)e<3&&(d[e][t]!==d[e+1][t]&&d[e][t]!==d[e][t+1]||(r=!0));return!(!r&&!v())}function x(){s.classList.remove("hidden"),r.classList.remove("restart"),r.innerText="Start"}r.addEventListener("click",function(){d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],c=0,u(),f(),f(),r.classList.add("restart"),r.innerText="Restart",n.classList.add("hidden"),a.classList.add("hidden"),s.classList.add("hidden")}),document.addEventListener("keyup",function(e){if(r.classList.contains("restart"))switch(e.code){case"ArrowLeft":S(),f();break;case"ArrowRight":g(),f();break;case"ArrowUp":w(),f();break;case"ArrowDown":y(),f()}q()||x()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.43023c06.js.map