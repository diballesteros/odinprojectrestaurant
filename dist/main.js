!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){const e=document.createElement("h2");e.innerHTML="Burgers";const t=document.createElement("img");t.src="../img/restaurant.jpg";const n=document.createElement("p");n.innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, repellendus suscipit ipsam odio perferendis quam, praesentium pariatur consequatur provident inventore, qui consequuntur adipisci at error! Sint cumque dignissimos sapiente ex.",document.getElementById("tab_content").appendChild(e),document.getElementById("tab_content").appendChild(t),document.getElementById("tab_content").appendChild(n)}function c(e){switch(document.getElementById("tab_content").innerHTML="",e.target.innerHTML){case"Home":o();break;case"Contact":!function(){const e=document.createElement("h2");e.innerHTML="Drop us a message";const t=document.createElement("input");t.type="text",t.name="Full Name",t.placeholder="Full Name";const n=document.createElement("input");n.type="text",n.name="Email",n.placeholder="Email";const o=document.createElement("input");o.type="text",o.name="Company",o.placeholder="Company";const c=document.createElement("input");c.type="text",c.name="Message",c.placeholder="Message";const d=document.createElement("button");d.innerText="Submit",document.getElementById("tab_content").appendChild(e),document.getElementById("tab_content").appendChild(t),document.getElementById("tab_content").appendChild(n),document.getElementById("tab_content").appendChild(o),document.getElementById("tab_content").appendChild(c),document.getElementById("tab_content").appendChild(d)}();break;case"Menu":!function(){const e=document.createElement("h2");e.innerHTML="Today's Menu";const t=document.createElement("ul"),n=document.createElement("li"),o=document.createTextNode("Hamburger");n.appendChild(o);const c=document.createElement("li"),d=document.createTextNode("Cheeseburger");c.appendChild(d);const r=document.createElement("li"),a=document.createTextNode("Bacon burger");r.appendChild(a),t.appendChild(n),t.appendChild(c),t.appendChild(r),document.getElementById("tab_content").appendChild(e),document.getElementById("tab_content").appendChild(t)}();break;default:console.log("tab does not exist")}}n.r(t),o(),document.getElementById("home").addEventListener("click",c),document.getElementById("contact").addEventListener("click",c),document.getElementById("menu").addEventListener("click",c)}]);