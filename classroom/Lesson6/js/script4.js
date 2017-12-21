"use strict";
var ob = {
    name: "button1",
    color: "red"
};
function showBtn(namePar, colorPar) {
    console.log(this[namePar] + ' ' + this[colorPar]); 
};
// showBtn.call(ob, 'name', 'color');
// showBtn.apply(ob, ['name', 'color']);
var arr = ['name', 'color'];
showBtn.apply(ob, arr);

console.log('------------------------------------');

var ob2 = {
    name: "Nick",
    print: function() {
        console.log(this.name);
    }
};
// ob2.print();
// var f1 = ob2.print;  // вариант с ошибкой
// f1();
var f1 = ob2.print.bind(ob2);
f1();
