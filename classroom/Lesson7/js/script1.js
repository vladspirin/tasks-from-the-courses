"use strict";
// console.log(document.body);
var listVar = document.getElementById('list');
// console.log(listVar);
//console.dir(listVar);
listVar.style.background = "grey";
listVar.previousElementSibling.style.color = "red";
// listVar.children[0].style.color = "red";
for (var i = 0; i < listVar.children.length; i++){
    listVar.children[i].style.color = "red";
}
var textVar = document.getElementsByClassName("text")[0];
textVar.style.background = "yellow";


// var textVar2 = document.querySelector(".text");
var textVar2 = document.querySelectorAll(".text"); //[0]

// textVar2.style.background = "red";
for (var i = 0; i < textVar2.length; i++) {
    textVar2[i].style.color = "green";
}

var par = listVar.closest("#main");// доступ через ближайшего родителя
// console.log(par);
par.firstElementChild.style.color = "blue";

listVar.innerHTML;
console.log(listVar);
listVar.innerHTML += "<li>item6</li>"; // не рекомендованый способ добавления тегов идет перезапись
console.log(listVar.textContent); // Работа с текстом



