function upper(strings, ...values) { 
    values = values.map(name => name.toUpperCase());
   
    for(let x of values){
         let i=strings.indexOf("____");
         let z=strings.slice(i,i+4);         

        strings=strings.replace(z,x);
    }
    return strings;
 }

var name = 'Nguyen Van A',
    account = 'ANV',
    classname = 'Fresher FrontEnd';
    st=upper('Hello ____ (@____), welcome to the ____!!!',name,account,classname);


console.log(
    st ===
    'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!'
);