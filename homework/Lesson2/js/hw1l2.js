/* Составить программу «Выписка по депозиту» Клиент вводит сумму депозита и срок вклада,
ему выдается таблица начисленных процентов по каждому месяцу(с учетом капитализации).
При вкладе на 3 месяца процентная ставка = 13 % годовых, на 6 месяцев – 16 % на 1 год – 18 %.
Учесть, что с начисленных процентов изымается налог 20 % */

var dep = +prompt("Введите сумму депозита: ", 100);
var mon = +prompt("Введите срок вклада в месяцах (3, 6 или 12): ", 1);
if (mon === 3) {
  // console.log(dep += dep * 0.13);
  dep += dep * 0.13;
} else if (mon === 6) {
  // console.log(dep += dep * 0.16);
  dep += dep * 0.16;
} else if (mon === 12) {
  // console.log(dep += dep * 0.18);
  dep += dep * 0.18;
} 
