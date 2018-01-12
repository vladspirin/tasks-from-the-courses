"use strict";
var tabs = document.getElementById('tabs');
var activeTab = document.getElementsByClassName('tab')[0];

tabs.addEventListener('click', function (e) {
    var target = e.target;
    console.log(target);
    if (target.classList.contains('tab')) {
        document.getElementById(activeTab.dataset.tabBtn).classList.remove('active');
        document.getElementById(target.dataset.tabBtn).classList.add('active');
        activeTab = target;
    }
});
