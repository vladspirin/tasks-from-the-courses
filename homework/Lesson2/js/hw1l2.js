var dep = +prompt("Введите сумму депозита: ", 100);
var mon = +prompt("Введите срок вклада в месяцах (3, 6 или 12): ", "");

mon === 3 ? dep += (dep * 0.13) :
  mon === 6 ? dep += (dep * 0.16) :
    mon === 12 ? dep += (dep * 0.18) : dep = "Выберете верный срок вклада!";
alert(dep);