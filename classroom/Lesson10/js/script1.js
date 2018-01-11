"use strict";
// var div1 = document.getElementById('div1');
// div1.onclick = function (e) {
//   console.log(e.target);
//   console.log("111111111");
// }
// var div1 = document.getElementById('div1');
// div1.onclick = function (e) {
//   console.log(e.target);
//   console.log("222222222");
// }

div1.addEventListener('click', function (e) {
  console.log("addEventListener 11111");
});
div1.addEventListener('click', function (e) {
  console.log("addEventListener 2222222");
});
div1.addEventListener('click', function (e) {
  console.log("addEventListener 33333333");
});