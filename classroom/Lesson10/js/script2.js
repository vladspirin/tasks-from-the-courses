"use strict";
var gallery = document.getElementById('gallery');
var bImg = document.getElementById('b-img');
var minImgs = document.getElementById('min-imgs');
minImgs.addEventListener('click', function (e) {
    var target = e.target;
    
    if(target.classList.contains('img')){
        console.log(target); 
        bImg.src = target.src; 
    }
});
// -----------------------------------------------------
// Поиск элемента по параметрам
var tabs = document.getElementById('tabs');
var activeTab = document.getElementsByClassName('tab')[0];

tabs.addEventListener('click', function (e) {
    var target = e.target;
    if (target.classList.contains('tab')) {
        console.log(target);
        activeTab.classList.remove('activeColor');
        target.classList.add('activeColor');
        
        document.getElementById(activeTab.dataset.tabBtn).classList.remove('active');
        document.getElementById(target.dataset.tabBtn).classList.add('active');
        // console.log(activeTab.dataset.tabBtn);
        // console.log(document.getElementById(activeTab.dataset.tabBtn));
        activeTab = target;

        
    }
    
});