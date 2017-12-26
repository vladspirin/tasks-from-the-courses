"use strict";
var mainVar = document.getElementById('main');
// через строку
mainVar.className = "bg";
var h1Var = document.querySelector("h1");
console.log(h1Var.classList.contains('color'));
h1Var.classList.add('color');

var newEl = document.createElement("div");
newEl.textContent = "text in new Element";
mainVar.appendChild(newEl);

