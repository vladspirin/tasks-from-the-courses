"use strict";
var divVar = document.getElementById("div1");
divVar.onclick = function () {
    console.log("text2");
}
divVar.onclick = function () {
    console.log("text3");
}
function fun1() {
    console.log("text4");
}

function fun2() {
    console.log("text5");
}

divVar.addEventListener("click", fun1);
divVar.addEventListener("click", fun2);

var pVar = document.getElementById("p1");
pVar.addEventListener("click", function() {
    // var id = pVar.dataset.tooltip; // без привязки
    var id = this.dataset.tooltip; // без привязки
    console.log(id);
    var tooltipVar = document.getElementById(id);
    console.log(tooltipVar);
    tooltipVar.classList.toggle("show");
});
