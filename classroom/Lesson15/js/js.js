"use strict";
// var form1 = document.forms.form1; // указыаем либо имя либо индекс
// console.log(form1);
// var text1 = form1.elements.text1;
// console.log(text1[0]);
// text1[0].value = 'qqqqqqqqqq'; // присвоим новое значение
// text1[1].value = text1[0].value; // присвоим второму  



// Пишем генератор бекграунда который будет отображать линейный градиент 
var block = document.getElementById('block');
var form1 = document.forms.form1;  
form1.elements.button.onclick = function (e) {
  var c1 = form1.elements.color1.value;
  var c2 = form1.elements.color2.value;

  block.style.backgroundImage = 'linear-gradient('+c1+', '+c2+')';
  // Если пишем через on событие пишем 
  // return false; 
  // если через addEvent
  e.preventDefault();
};

