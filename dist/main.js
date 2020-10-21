(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Commissioner', sans-serif;\n}\n\nbody {\n  background-color: #edeef6;\n}\n\n#main-container {\n  max-width: 40%;\n  margin: 80px auto;\n  height: auto;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0 0 3px #ccc;\n}\n\nheader {\n  text-align: center;\n  font-size: 25px;\n  padding-top: 25px;\n  color: #e24657;\n  letter-spacing: 1px;\n}\n\n#form {\n  display: flex;\n  width: 80%;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px auto;\n  padding: 10px 0;\n}\n\n#form > div {\n  width: auto;\n}\n\nlabel {\n  font-size: 18px;\n  font-weight: 500;\n  color: #3745b9;\n}\n\ninput {\n  display: block;\n  height: 35px;\n  width: 250px;\n  margin: 7px 0;\n  padding: 8px;\n  border: 1px solid #edeef6;\n  border-radius: 5px;\n  background-color: #edeef6;\n  outline: none;\n}\n\n.error {\n  display: block;\n  font-size: 13px;\n  padding: 3px;\n  max-width: 220px;\n  height: 20px;\n}\n\n.error.active {\n  color: red;\n  margin-bottom: 5px;\n}\n\n::placeholder {\n  font-size: 15px;\n}\n\ninput:focus:invalid {\n  outline: none;\n  border: 1px solid red;\n}\n\ninput:valid {\n  border: 1px solid green;\n}\n\n#submit {\n  color: white;\n  background-color: #f91432;\n  font-size: 20px;\n  height: 50px;\n  margin-top: 20px;\n  margin-bottom: 30px;\n  cursor: pointer;\n  max-width: 150px;\n  letter-spacing: 1px;\n  border: none;\n}\n\n#submit:hover {\n  background-color: #fa2d48;\n}\n\n.invalid {\n  border: 1px solid red;\n}\n",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},r=[],o=0;o<n.length;o++){var d=n[o],l=e.base?d[0]+e.base:d[0],c=t[l]||0,s="".concat(l," ").concat(c);t[l]=c+1;var u=a(s),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:v(p,e),references:1}),r.push(s)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,s=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,m=0;function v(n,e){var t,r,o;if(e.singleton){var i=m++;t=f||(f=l(e)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=l(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var l=d(n,e),c=0;c<t.length;c++){var s=a(t[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=l}}}}},e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(28);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=(()=>{const n=document.getElementById("form"),e=document.getElementById("name"),t=document.querySelector(`#${e.id} + span.error`),r=document.getElementById("email");return{form:n,name:e,email:r,nameError:t,emailError:document.querySelector(`#${r.id} + span.error`),inputs:Array.from(document.querySelectorAll("input:not(#submit)")),errors:Array.from(document.querySelectorAll("span"))}})(),{name:i}=o,{nameError:a}=o,{email:d}=o,{emailError:l}=o,{form:c}=o,{name:s,email:u}=o;i.addEventListener("input",(()=>{i.validity.valid?(a.textContent="",a.className="error"):(i.validity.valueMissing?a.textContent="Please enter your name":i.validity.tooLong&&(a.textContent="Please do not exceed 25 characters"),a.className="error active")})),d.addEventListener("input",(()=>{d.validity.valid?(l.textContent="",l.className="error"):(d.validity.valueMissing?l.textContent="Please enter your e-mail":d.validity.typeMismatch&&(l.textContent="Please use a correct e-mail format"),l.className="error active")})),c.addEventListener("submit",(n=>{s.validity.valid&&u.validity.valid?alert("Successful submission"):n.preventDefault()}))})()})();