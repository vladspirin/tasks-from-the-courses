// var i = 2;
// while (i <= 9) {
//     console.log("2 * " + i + " = " + 2 * i );
//     i++;
// }
// console.log("-----------------------------------");
//break;

// for (var i = 2; i <= 9; i++) {
//     console.log("2 * " + i + " = " + 2 * i );
// }
var s = "qfdjmnrbb w sasasasacc";
for (var j = 0; j <= s.length; j++) {
    console.log(s[j]);
    if (s[j] == "w") {
        console.log("Буква" + s[j]+ "на позиции " +j); 
        break;
    }
}

