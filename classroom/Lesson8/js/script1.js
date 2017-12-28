"use strict";
var divVar = document.getElementById("div1");
console.log(divVar);

divVar.style.fontSize = "30px";

console.log(divVar.getAttribute("id"));
console.log(divVar.dataset.title);

var cStyle = getComputedStyle(divVar);
console.log(cStyle.marginTop);
