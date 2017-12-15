"use strict";
var ob = {
    nick: 300,
    den: 400,
    vasy: 500
}
var sum = 0;
    for (var i in ob) {
        sum += ob[i];
    }
    console.log(sum);

var ob2 = {
    nick: [300, 320, 310],
    den: [400, 410, 414],
    vasy: [500, 540, 510]  
}
console.log("----------------------------------------------");
var sum1 = 0;
    for (var j in ob2) {
        var sumid = 0;
        for (var a = 0; a < ob2[j].length; a++) {
           sum1 += ob2[j][a];
           sumid += ob2[j][a];
        }
        console.log('sumid - ' + sumid);
    }
    console.log(sum1);
console.log("----------------------------------------------");
// перебор двумерного массива --- посмотреть java, c, c++
var ob3 = [
    {
        name: 'nick',
        salary: [300, 320, 310]
    },
    {
        name: 'den',
        salary: [400, 410, 414]
    },
    {
        name: 'vasy',
        salary: [500, 540, 510]
    }
];
var sum3 = 0;
    for(var y = 0; y < ob3.length; y++) {
        
        for (var x=0; x<ob3[y].salary.length; x++) {
            sum3 += ob3[y].salary[x];
            //console.log(b);
            console.log(ob3[y].salary[x]);
        }
        //console.log(ob3[y]);
    }
// от общего к частному - подход
console.log("----------------------------------------------");
//console.log(sum3);

