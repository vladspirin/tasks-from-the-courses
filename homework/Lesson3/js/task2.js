// Программа поиска необходимого оператора
"use strict";
var mobile = {
  "Kyivstar": ["039", "067", "068", "096", "097", "098"],
  "Vodafone": ["050", "066", "095", "099"],
  "Lifecell": ["063", "093"],
  "Intertelecom": ["094"],
  "PEOPLEnet": ["092"],
  "3Mob": ["091"]
}
for (var key in mobile) {
  console.log("Вы в сети " + key);
}
