"use strict";

let x = 1;
a = "var";
if ( x > 0 ) {
  var a;
  // var a = 'var';

  let y = "let";
  console.log(y);
}
console.log(a);
// console.log(y); ошибка, использовать за пределами скобок нельзя
console.log(window.x);

// ------------------------------------------------------------------


let list = document.getElementById('list');
for (let i = 0; i < 6; i++) {
  let li =  document.createElement('li');
  li.textContent = 'item' + i;

  li.onclick = function (e) { 
    console.log('item' + i);
   }

  list.appendChild(li);

}

const t = 10;
// t = 20; будет ошибка  
