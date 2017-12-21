"use strict";
// var x = 111111;
// console.log(window);
// Замыкание - функция + переменные что ей доступны, scope, лексическое окружение
var x = 10;
function fun() {
  // var y = 20;
  console.log(x);
};
fun();

function fun1() {
  var y = 20;
  return function fun2() {
    console.log(x);
  }
  // fun2();
};
var rez = fun1();
rez();