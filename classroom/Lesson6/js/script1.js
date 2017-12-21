"use strict";
// Методы
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(item, i, arr) {
  console.log(i + ' - ' + item);
});
var arr2 = arr.filter(function(item){
  return item !== 3;
});
console.log(arr2);
var arr3 = arr.map(function (item) {
  return item * 2;
});
console.log(arr3);