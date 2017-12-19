"use strict";
var y = 'uk';
function sum() {
  var x = 10;
  console.log('test');
  console.log(y);
}
sum();
//console.log(x);

function sum2(x, y, z) {
  x = x || 2;
  y = y || 3;
  z = z || 10;
  // var x = 2;
  // var y = 3;
  // var z = undefined;
  var frez = x + y;
  // console.log('sum = ' + +(x + y));
  // console.log(z);
  return frez;
}
console.log(sum2(a, b));
var a = 2;
var b = 3;
// sum2(a, b);
var rez = 2 * sum2(a, b);
console.log(rez);

function name(f, i) {
  console.log(f);
  console.log(i);
}
var fam = 'ivanov';
name(fam, 'ivan');