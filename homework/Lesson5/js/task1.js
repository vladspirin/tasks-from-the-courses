"use strict";
// Запрашиваем у пользователя необходимое число
var x = +prompt("Введите число от 1 до 9: ", "");
//Создаем объект с необходимыми данными
var num = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
// Создаем функцию которая будет переводит числа строковые названия
function translate(xPar, numPar) {
  for (var key in numPar) {
    console.log(numPar[key]);
    if (numPar[key] === xPar) {
      alert("Вы ввели - " + key);
    } else {
      alert("Значение не принадлежит указанному диапазону");
    }
    break;
  }
};
translate(x, num);