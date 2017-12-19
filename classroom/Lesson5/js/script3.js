"use strict";
// Псевдомассив элементов или 2-е название "Коллекция"
function sum() {
  // var arguments = [2, 3, 4];
  console.log(arguments);
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]); 
  }
};
sum(2, 3, 4, 'fdgf', 46767);
