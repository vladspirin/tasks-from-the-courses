"use strict";
var nav = document.getElementById('nav');
nav.addEventListener('mouseover', function (e) {
    var target = e.target;

    var targetParent = target.closest('.item-tabs');
    console.log(targetParent);
});
