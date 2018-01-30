"use strict";
var form1 = document.forms.form1;
var name1 = form1.elements.name1;
var email = form1.elements.email;
var button = form1.elements.button;
console.log(name1.value);
button.addEventListener('click', function (e) {
  if (name1.value.length == 0) {
    console.log('error');
    name1.classList.add('error');
    e.preventDefault();
  } 
  if (!(/^[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(email.value))) {
    console.log('error');
    email.classList.add('error');
    e.preventDefault();
  }

});

