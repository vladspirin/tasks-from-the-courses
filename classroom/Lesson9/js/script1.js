"use strict";
// document.addEventListener("DOMContentLoaded", function () {
//     var div = document.getElementById("div");
//     console.log(div);
// });


// window.addEventListener("load", function () {
//     var div = document.getElementById("div");
//     console.log(div);
// });

var nav = document.getElementById('nav');
nav.addEventListener('mouseover', function(e) {
    var target = e.target;
    
    var targetParent = target.closest('.menu-item');
    console.log(targetParent);

    if (targetParent) {
        var subm = targetParent.getElementsByClassName('submenu')[0];
        console.log(subm);
        close();
        if (subm) {
            subm.style.display = 'block';
        } 
    }
});
function close() {
    var s = document.getElementsByClassName('submenu');
    for (var i = 0; i < s.length; i++) {
        s[i].style.display = 'none';        
    }
}
