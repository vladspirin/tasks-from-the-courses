"use strict";
// Функция управления кнопкой на экране
function btnClick() {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function(event) {
    var trg = event.target; // .hidden = true - так спрятать кнопку вообще
    console.log(trg);
  });
}
btnClick();

// Функция управления модальным окном
function ModalWindow() {
  var mod = document.getElementById("modWind");
  var x = document.querySelector(".close");
  // Отслеживаем событие по клику
  btn.addEventListener("click", function () {
    // Связываем модальное окно с кнопкой
    var id = btn.dataset.tooltip; 
    var tltip = document.getElementById(id);
    // Показываем скрытое окно
    tltip.classList.toggle("show");
  });
  x.addEventListener("click", function() {
  // Скрываем модальное окно  
  mod.classList.toggle("show");   
  });
}
ModalWindow();