"use strict";
var now = new Date();
console.log(now);
var d = new Date(2018, 0, 1, 0,0,0,0);
console.log(d);
console.log(d.getFullYear());
var d2 = +new Date(2018, 1, 8, 21, 0, 0, 0);
console.log(d2);

console.log((d2 - now) / 1000 / 60);

// var time = setInterval(() => {
// var now = new Date();
//   console.log(now);
// }, 2000);