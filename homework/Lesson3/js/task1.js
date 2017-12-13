"use strict";
var x, y, z;
x = +prompt("Введите число ' x '", "");
y = +prompt("Введите число ' y '", "");
var j = +prompt("1 = ' + '; 2 = ' - ', 3 = ' * ', 4 = ' / '", "");
switch (j) {
  case 1:
    z = x + y;
    alert(z);
    break;
  case 2:
    z = x - y;
    alert(z);
    break;
  case 3:
    z = x * y;
    alert(z);
    break;
  case 4:
    z = x / y;
    alert(z);
    break;
  default:
  alert("Операция невозможна.");
}