(()=>{"use strict";var e=function(e,r){return Math.floor(Math.random()*(r-e)+e)},r=document.querySelector(".senha-gerada"),c=document.querySelector(".qtd-caracteres"),o=document.querySelector(".chk-maiusculas"),u=document.querySelector(".chk-minusculas"),t=document.querySelector(".chk-numeros"),n=document.querySelector(".chk-simbolos");document.querySelector(".gerar-senha").addEventListener("click",(function(){r.innerHTML=function(r,c,o,u,t){var n=[];r=Number(r);for(var a=0;a<r;a++)c&&n.push(String.fromCharCode(e(65,91))),o&&n.push(String.fromCharCode(e(97,123))),u&&n.push(String.fromCharCode(e(47,58))),t&&n.push(",.;^~[]{}!@#$%¨&*()_-=+§/?°|+"[e(0,29)]);return n.join("").slice(0,r)}(c.value,o.checked,u.checked,t.checked,n.checked)||"Nada Selecionado"}))})();
//# sourceMappingURL=bundle.js.map