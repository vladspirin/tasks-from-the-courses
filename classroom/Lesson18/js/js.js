"use strict";
// var ob = {
//   111: 22222,
//   qq: [1, 2, 3, 4]
// }
// ob = JSON.stringify(ob);
// console.log(ob);
// localStorage.setItem('myKey2', ob);
// localStorage.setItem('myKey', 'val22222222222222');
// var d = localStorage.getItem('myKey');
var d = localStorage['myKey']; // 2-й вариант
console.log(d);

window.addEventListener('storage', function (e) { 
  console.log(e.key);
  console.log(e.newValue);
 });