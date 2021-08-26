var example = [
    {
        id: 1,
        name: 'Dung',
        age: 20
    },
    {
        id: 2,
        name: 'Diu',
        age: 20
    },
    {
        id: 3,
        name: 'Ky',
        age: 20
    },
    {
        id: 1,
        name: 'Hai',
        age: 22
    }
]
const mySet=new Set()
for(let id of example){
    mySet.add(id.id);
}
var ar=Array.from(mySet);
for (let exam of example){
    for (let j in ar){
        if(exam.id==ar[j]){
            console.log(exam);
            ar[j]=-1;
        }
    }
}
