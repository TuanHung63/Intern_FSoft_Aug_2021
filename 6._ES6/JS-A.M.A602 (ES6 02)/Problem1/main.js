function* numbers(steps) {
    // .. 
    let n=-1;
    while(n<100){
        n+=steps;
        yield n;
    }
};

// should print 0..100 by step 1
// 0 1 2 … 100
for (let num of numbers(1)) {
    console.log(num );
}
// should print 6..30 by step 4
// 6 10 14 … 30
for (let num of numbers(4)) {
    console.log(num);
}