// Программа: "Выписка по депозиту".
"use strict";
// Пользователь вводит данные
var dep = +prompt("Введите желаемую сумму депозита: ", "");
//Проверяем ввел ли пользователь число.
if (Number.isNaN(dep)) {
  alert("Ошибка! Введите число!");
}
var mon = +prompt("Введите срок вклада в месяцах (3, 6 или 12): ", "");
//Проверяем ввел ли пользователь число.
if (Number.isNaN(mon)) {
  alert("Ошибка! Введите число!");
}
var formula;
// Вычисляем процент по месяцам с учетом месячной капитализации.
if (mon === 3) {
  // Выводим информацию о сумме вклада клиента.
  console.log("Вы вложили: " + dep);
  console.log("----------------------------------------------------------------------");
  // Выводим срок вклада в месяцах.
  console.log("Срок вклада: " + mon + " мес.");
  console.log("----------------------------------------------------------------------");
  formula = dep * (Math.pow((1 + 13 * 30 / 360 / 100), mon));
  // Выводим информацию о сумме с процентами без налогов.
  console.log("Ваша сумма с процентами (без вычета налогов) за этот срок составляет: " + formula.toFixed(2));
} else if (mon === 6) {
  // Выводим информацию о сумме вклада клиента.
  console.log("Вы вложили: " + dep);
  console.log("----------------------------------------------------------------------");
  // Выводим срок вклада в месяцах.
  console.log("Срок вклада: " + mon + " мес.");
  console.log("----------------------------------------------------------------------");
  formula = dep * (Math.pow((1 + 16 * 30 / 360 / 100), mon));
  // Выводим информацию о сумме с процентами без налогов.
  console.log("Ваша сумма с процентами (без вычета налогов) за этот срок составляет: " + formula.toFixed(2));
} else if (mon === 12) {
  // Выводим информацию о сумме вклада клиента.
  console.log("Вы вложили: " + dep);
  console.log("----------------------------------------------------------------------");
  // Выводим срок вклада в месяцах.
  console.log("Срок вклада: " + mon + " мес.");
  console.log("----------------------------------------------------------------------");
  formula = dep * (Math.pow((1 + 18 * 30 / 360 / 100), mon));
  // Выводим информацию о сумме с процентами без налогов.
  console.log("Ваша сумма с процентами (без вычета налогов) за этот срок составляет: " + formula.toFixed(2));
} else if (mon !== 3 || mon !== 6 || mon !== 12) {
  alert("Выберете верный срок вклада!");
}
//Вычисляем налог из общего дохода (проценты).
var profit = (formula - dep) / 1.25;
var tax = formula - profit - dep;
var awt = formula - tax;
var x = awt.toFixed(2);
//Расчитываем месячный доход (проценты).
var monthlyIncome = (profit / mon);
// Расчет доходов с процентами по месяцам (с вычетом налогов).
// var perMonth = ???????????????????????????????????????????????????????????????????????;
// Выводим информацию о сумме с процентами после выплаты налогов.
if (mon === 3) {
  console.log("----------------------------------------------------------------------");
  console.log("Ваша сумма с процентами (с вычетом налогов) за этот срок составляет: " + x);
  console.log("----------------------------------------------------------------------");
  // console.log("Ваша сумма с процентами (с вычетом налогов) за январь: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за февраль: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за март: " + perMonth);
  // console.log("----------------------------------------------------------------------");
} else if (mon === 6) {
  console.log("----------------------------------------------------------------------");
  console.log("Ваша сумма с процентами (с вычетом налогов) за этот срок составляет: " + x);
  console.log("----------------------------------------------------------------------");
  // console.log("Ваша сумма с процентами (с вычетом налогов) за январь: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за февраль: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за март: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за апрель: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за май: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за июнь: " + perMonth);
  // console.log("----------------------------------------------------------------------");
} else if (mon === 12) {
  console.log("----------------------------------------------------------------------");
  console.log("Ваша сумма с процентами (с вычетом налогов) за этот срок составляет: " + x);
  console.log("----------------------------------------------------------------------");
  // console.log("Ваша сумма с процентами (с вычетом налогов) за январь: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за февраль: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за март: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за апрель: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за май: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за июнь: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за июль: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за август: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за сентябрь: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за октябрь: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за ноябрь: " + perMonth);
  // console.log("Ваша сумма с процентами (с вычетом налогов) за декабрь: " + perMonth);
  // console.log("----------------------------------------------------------------------");
}