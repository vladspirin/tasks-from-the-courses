var f = function(x, y) {
    return x + y;
    
}
console.log(f(3, 5));

var x = 1;
var fun;

if(x > 0) {
    fun = function() { console.log('x > 0');};
} else {
        fun = function() {console.log('x < 0');};
    }

fun();