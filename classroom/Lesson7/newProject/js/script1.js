"use strict";
var arr = [
    {
      title: "title1",
      text: "text1"
    },
    {
      title: "title2",
      text: "text2"
    },
    {
    title: "title3",
    text: "text3"
    }
];
var valParent = document.getElementById("container");
var list = document.createElement("ul");
list.classList.add("classUl");
arr.forEach(function (item) {
  var li = document.createElement("li");
  var h2 = document.createElement("h2");
  var p = document.createElement("p");
  h2.textContent = item["title"];
  p.textContent = item["text"];
  li.appendChild(h2);
  li.appendChild(p);
  list.appendChild(li);
  
});
console.log(list);
valParent.appendChild(list);