/* Составить программу «Выписка по депозиту» Клиент вводит сумму депозита и срок вклада,
ему выдается таблица начисленных процентов по каждому месяцу(с учетом капитализации).
При вкладе на 3 месяца процентная ставка = 13 % годовых, на 6 месяцев – 16 % на 1 год – 18 %.
Учесть, что с начисленных процентов изымается налог 20 % */

var deposit = +prompt("Введите сумму депозита: ", 100);
var month = +prompt("Введите срок вклада в месяцах (3, 6 или 12): ", 1);
if (month === 3) {
  console.log(deposit += deposit * 0.13);
} else if (month === 6) {
  console.log(deposit += deposit * 0.16);
} else if (month === 12) {
  console.log(deposit += deposit * 0.18);
} else if (month === 0) {
  
} else {
  console.log("error");
}

