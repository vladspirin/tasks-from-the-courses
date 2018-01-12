"use strict";
var tabs = document.getElementById('tabs');
var activeTab = document.getElementsByClassName('tab')[0];
tabs.addEventListener('click', function (e) {
    var target = e.target;
    if (target.classList.contains('tab')) {
        activeTab.classList.remove('activeStyles');
        target.classList.add('activeStyles');
        document.getElementById(activeTab.dataset.tabBtn).classList.remove('active');
        document.getElementById(target.dataset.tabBtn).classList.add('active');
        activeTab = target;
    }
});
// var navTabs = document.getElementById('nav-tabs');
// var passiveTab = document.getElementsByClassName('tab')[1];
// navTabs.addEventListener('mousemove', function (e) {
//     var target = e.target;

// });
