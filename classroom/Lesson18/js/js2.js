"use strict";
function fun1() {
  console.log('text');
}


setTimeout(fun1, 1000);

// setInterval(fun1, 1000);
var div1 = document.getElementById('div1');
var i = 0;

var time = setInterval(function () { 
  if (i < 400) {
  div1.style.top = i + "px";
  div1.style.left = i + "px";
  i += 10;
  } else {
    clearInterval(time);
  }
}, 100);

// var time2 = setTimeout(function s1() {
//   console.log('text322222');
//   time2 = setTimeout(s1, 1000);
  
// }, 1000);
