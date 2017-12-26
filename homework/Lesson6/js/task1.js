"use strict";
// Создаем объект с инфо о сотруднике
var collaborator = {
  firstName: "Ivan",
  lastName: "Ivanov",
  patronym: "Ivanovich",
  position: "Director",
  company: "Dream Inc.",
  wageRate: 3000,
  workExperience: 4,
  // Создаем функцию вычисления зароботной платы
  calcWage: function() {
   // сделать метод
  },
  // Создаем функцию которая выводит информацию
  outputInfo: function() {

  }
};

// --------тут пишу всякий бред для понимания----------------------
function calcWage(tax, time, surcharge) {
  for (var key in collaborator) {
    collaborator[key]
  }
}
calcWage();

function outputInfo(this) {
  if(){
    return alert("Справка: " + this.lastName + " " + this.firstName + " " + this.patronym + ", " + " является сотрудником " + this.company  );
 } else {
    return alert("Справка: " + this.lastName + " " + this.firstName + " " + this.patronym + ", " + " не является сотрудником " + this.company);
 }
}
// -----------------------------------------------------------------