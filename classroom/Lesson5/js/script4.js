"use strict";
var date = 12;
var money = 100;
var ob = {
  3: 0.12/12,
  6: 0.16/12,
  12: 0.18/12
};

function calDep(datePar, moneyPar, obPar) {
  for (var i in ob) {
    if (i == datePar) { 
      var sum = moneyPar;
      for (var j = 1; j <= datePar; j++) {
        sum += sum * obPar[i];
        console.log('month = ' + sum);
      }
      console.log('all = ' + sum);
    }
  }
};
calDep(date, money, ob);

// Пометки:
// оптимальный - не оптимальный код
// оптимальность - соответсвие
// вес программы