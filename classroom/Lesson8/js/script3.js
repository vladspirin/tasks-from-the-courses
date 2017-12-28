var div1 = document.getElementById("block1");
div1.addEventListener("click", function (event) {
    console.log('target');
    console.log(event.target);
    console.log('this');
    console.log(this);
});
