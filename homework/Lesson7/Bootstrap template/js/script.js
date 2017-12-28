"use strict";
// Написать скрипт чтобы при изменении цвета заголовков второго уровня (h2), изменялся и цвет соответствующего ему текста (p).
function changeColorEl() {
  var parElem = document.getElementsByClassName("col-md-4");
  for (var i = 0; i < parElem.length; i++) {
    parElem[i].style.color = "darkblue";
  }
  // Изменяем фон всех элементов с классом btn-default.
  var clr = document.querySelectorAll(".btn-default");
  for (var i = 0; i < clr.length; i++) {
    clr[i].style.background = "#9472aa";
  }
}
changeColorEl();
// Для кнопки Sign in найти ее ближайшую родительскую форму.
function getParEl() {
  var btn = document.querySelector(".btn-success");
  var par = btn.closest(".navbar-form");
  // console.log(par);
}
getParEl();
// Скрипт добавляющий строку меню с пунктами «Главная», «Деятельность» «Контакты».
function addMenuItems() {
  var listArr = [{ clause: "Главная" }, { clause: "Деятельность" }, { clause: "Контакты" }];
  var nav = document.getElementById("navbar");
  var ul = document.createElement("ul");
  ul.classList.add("nav");
  ul.classList.add("navbar-nav");
  ul.classList.add("navbar-collapse");
  listArr.forEach(function (item){
    var li = document.createElement("li");
    var a = document.createElement("a"); 
    a.textContent = item["clause"];
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
}
addMenuItems();