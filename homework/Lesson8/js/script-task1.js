"use strict";
// Функция управления кнопкой на экране
function btnClick() {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function(event) {
    event.target;
  });

  // console.log();
}
btnClick();

// Функция управления модальным окном
function showModalWindow() {
  var mod = document.getElementById("modWind");
  var x = document.querySelector(".close");
  x.addEventListener("click", function() {
  mod.classList.toggle("show"); 
  });
  // console.log();
  // console.log();
}
showModalWindow();

// Функция связывающая модальное окно с кнопкой
function bindModalBtn() {
  // Отслеживаем событие по клику
  btn.addEventListener("click", function () {
    var id = btn.dataset.tooltip; // привязываем блоки
    var tltip = document.getElementById(id);
    // Показываем скрытое окно
    tltip.classList.toggle("show");
  });
}
bindModalBtn();