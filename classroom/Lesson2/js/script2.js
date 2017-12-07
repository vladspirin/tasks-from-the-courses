//a1 > 0    a1*2;
//a1 = 0    a1=0;
//a1 < 0    a1+10;
// else error;

var a1 = 20;
if (a1 > 0) {
    console.log("a1 = " + (a1 * 2) );
} else if (a1 === 0) {
    console.log(" a1 = 0 ");
} else if (a1 < 0) {
    console.log(" a1 = " + (a1 + 10));
} else {
    console.log("error");
}

if ("text") {
    console.log("text1");
}
console.log("-----------------------------------");
// x - сумма покупок
// 100> -3%
// 500> -5%
// <100 "скидок нет"

var x = +prompt("enter", 50);
console.log(x);
if (x < 100) {
    console.log("скидок нет");
} else if (x >= 100) {
    console.log(x -x*0.03);
} else if (x >= 500) {
    console.log(x - x * 0.05);
} else {
    console.log("error");
}
console.log("-----------------------------------");
// 
var y = ( x > 0)? x * 2: x / 2;
console.log(y);




