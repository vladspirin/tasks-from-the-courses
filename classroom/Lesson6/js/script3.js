"use strict";
var ob1 = {
    a: 1,
    b: 2,
    name: 'ob1'
    // sum: function() {
    //     console.log(ob1.a + ob1.b);
    // }
};
// ob1.sum();

var ob2 = {
    a: 10,
    b: 20,
    name: 'ob2'
    // sum: function () {
    //     console.log(ob2.a + ob2.b);
    // }
};
// ob2.sum();

function sum () {
    console.log(this.a + this.b);
    console.log(this.name);
};
ob1.fun = sum;
ob2.fun = sum;

console.log(ob1);

// var x = ob1.fun;
// x();

ob1.fun();
ob2.fun();
