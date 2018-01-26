"use strict";
// var block = document.getElementById('block');
// console.log(block.clientWidth);
// console.log(block.offsetWidth);
// console.log(document.elementFromPoint(400, 100)); 
// console.log(block.clientY);
// console.log(block.pageY); 

window.onscroll = function () {
  funScroll();
}
var navbar = document.getElementById('navbar');
var fixed = navbar.offsetTop;
console.log(fixed);

function funScroll() {
  if (window.pageYOffset >= fixed) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}

// console.log(window.pageYOffset);