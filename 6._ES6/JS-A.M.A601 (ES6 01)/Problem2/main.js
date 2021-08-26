var x = 2,
    fns = [];

(function () {
    var x = 5;

    for (var i = 0; i < x; i++) {
        fns[i] = ()=> {
            console.log(i); 
        }
        // ..
    }
    
})();
// DO NOT MODIFY BELOW CODE
console.log(fns[1]());
console.log(fns[2]());
console.log(fns[3]());
console.log(fns[4]());

console.log(x * 2 === fns[x * 2]());
 // true