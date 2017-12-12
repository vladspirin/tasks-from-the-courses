"use strict";
// Пользователь вводит данные
var dep = +prompt("Введите желаемую сумму депозита: ", "");
var mon = +prompt("Введите срок вклада в месяцах (3, 6 или 12): ", "");
var formula;
// Вычисляем процент по месяцам с учетом месячной капитализации.
if (mon === 3) {
  // Выводим информацию о сумме вклада клиента.
  console.log("Вы вложили: " + dep);
  console.log("----------------------------------------------------------------------");
  // Выводим срок вклада в месяцах.
  console.log("Срок вклада: " + mon + " мес.");
  console.log("----------------------------------------------------------------------");
  formula = dep * (Math.pow((1 + 13 * 30 / 365 / 100), mon));
  // Выводим информацию о сумме с процентами.
  console.log("Ваша сумма с процентами (без вычета налогов) за этот срок составляет: " + formula);
} else if (mon === 6) {
  // Выводим информацию о сумме вклада клиента.
  console.log("Вы вложили: " + dep);
  console.log("----------------------------------------------------------------------");
  // Выводим срок вклада в месяцах.
  console.log("Срок вклада: " + mon + " мес.");
  console.log("----------------------------------------------------------------------");
  formula = dep * (Math.pow((1 + 16 * 30 / 365 / 100), mon));
  // Выводим информацию о сумме с процентами.
  console.log("Ваша сумма с процентами (без вычета налогов) за этот срок составляет: " + formula);
} else if (mon === 12) {
  // Выводим информацию о сумме вклада клиента.
  console.log("Вы вложили: " + dep);
  console.log("----------------------------------------------------------------------");
  // Выводим срок вклада в месяцах.
  console.log("Срок вклада: " + mon + " мес.");
  console.log("----------------------------------------------------------------------");
  formula = dep * (Math.pow((1 + 18 * 30 / 365 / 100), mon));
  // Выводим информацию о сумме с процентами.
  console.log("Ваша сумма с процентами (без вычета налогов) за этот срок составляет: " + formula);
} else if (mon !== 3 || mon !== 6 || mon !== 12) {
  alert("Выберете верный срок вклада!");
}