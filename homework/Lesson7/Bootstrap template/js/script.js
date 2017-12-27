"use strict";
// Написать скрипт чтобы при изменении цвета заголовков второго уровня (h2), изменялся и цвет соответствующего ему текста (p).
function getColorEl() {
  var parElem = document.getElementsByClassName("col-md-4");
  for (var i = 0; i < parElem.length; i++) {
    parElem[i].style.color = "darkblue";
  }
}
getColorEl();
// Для кнопки Sign in найти ее ближайшую родительскую форму.
function getParEl(params) {
  var btn = document.getElementsByClassName("btn");
  // btn.

}
getParEl();
