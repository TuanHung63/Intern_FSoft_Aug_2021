function fibonaci(n) {
    var myMap=new Map();
    for(let i=0;i<=n;i++){
        if(i<=1){
            myMap.set(i,1);
        }else{
            myMap.set(i,myMap.get(i-1)+myMap.get(i-2));
        }
    }
    return myMap.get(n);
}
console.log( fibonaci(5));