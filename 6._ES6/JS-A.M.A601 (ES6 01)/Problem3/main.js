function foo(x,y,...z) {
    x[0]=y;
    return x;
 }

function bar() {
    var a1 = [2, 4];
    var a2 = [6, 8, 10, 12];

    return foo(a2,...a1);
}

// DO NOT MODIFY BELOW CODE
console.log(bar().join('') === '281012');
 // true