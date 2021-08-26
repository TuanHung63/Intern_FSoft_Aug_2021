const info =[
    {urlImg:'./image/img1.jpg',description:{name:'MASSA AST',property:'Color : black,Material : metal'},price:120,discount:25,tax:15,total:110},
    {urlImg:'./image/img1.jpg',description:{name:'MASSA AST',property:'Color : black,Material : metal'},price:7,discount:-1,tax:1,total:8},
    {urlImg:'./image/img1.jpg',description:{name:'MASSA AST',property:'Color : black,Material : metal'},price:120,discount:25,tax:15,total:110},
]
renderData()
function renderData(){
    document.getElementsByTagName("table")[0].innerHTML=`
    <col width="100">
            <col width="270">
             <col width="200">         
            <tr>
              <th>Product</th>
              <th >Description</th>
              <th>Quantity/Update</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Tax</th>
              <th>Total</th>


            </tr>`;

    for( let i in info){
        let price=  info[i].price.toFixed(2);
        let discount= (info[i].discount>0)? "$"+info[i].discount.toFixed(2) : '--';
        let tax=  info[i].tax.toFixed(2);
        let total=info[i].total.toFixed(2);
        document.getElementsByTagName("table")[0].innerHTML+=`
        <tr >
                <td><img src="${info[i].urlImg}"   alt=""></td>
                <td>${info[i].description.name} <br> ${info[i].description.property} </td>
                <td class="_number">  <input type="number" value="1" class="inputNumber inputNumber_${i}" min="1"  > <button class="reduce" onclick="reduce(${i})">-</button> <button class="raise" onclick="raise(${i})">+</button> <button class="delete" onclick="deleteData(${i})" >x</button> </td>
                <td id="price_${i}">$${price}</td>
                <td id="discount_${i}" class="discount">${discount}</td>
                <td id="tax_${i}" class="tax">$${tax}</td>
                <td id="total_${i}" class="total">$${total}</td>              
            </tr>
        `
    }
    renderPrice();
    


}
function sumOfPrice(type){
    let num=0;
    let total=document.getElementsByClassName(type);
    for(let i=0;i<total.length;i++){
        let z=total[i].innerHTML;
        if(z=="--"){
            
        }else{
        z=Number(z.substring(1,z.length));
        num+=z;}
    }
    return num;

}
function renderPrice(){
    let numTotalPrice=sumOfPrice("total");
    let numDiscount=sumOfPrice('discount');
    let numTax=sumOfPrice("tax");
    
    document.getElementsByTagName("table")[0].innerHTML+=`
    <tr>
              <td colspan="6" class="totalPrice"><p>  Total Price </p></td>
              <td id="totalPrice_">$${numTotalPrice.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="6" class="totalPrice"><p> Total Discount  </p></td>
                <td id="totalDiscount_">$${numDiscount.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="6" class="totalPrice"> <p>  Total Tax </p></td>
                <td id="totalTax_">$${numTax.toFixed(2)}</td>
            </tr>`
}
function reduce(i){
    let x=document.getElementsByClassName(`inputNumber_${i}`)[0].value;
    if(x>=2){
      x--;
    }else{x=1}
    document.getElementsByClassName(`inputNumber_${i}`)[0].value=x;
    document.getElementById(`price_${i}`).innerHTML="$"+ info[i].price*x+".00";
    document.getElementById(`tax_${i}`).innerHTML="$"+ (info[i].price*x*0.125).toFixed(1);
    document.getElementById(`total_${i}`).innerHTML="$"+ (info[i].price*x*0.125).toFixed(1);
    let numTotalPrice=sumOfPrice("total");
    let numDiscount=sumOfPrice('discount');
    let numTax=sumOfPrice("tax");
    document.getElementById(`totalPrice_`).innerHTML="$"+ numTotalPrice;
    document.getElementById(`totalDiscount_`).innerHTML="$"+ numDiscount;
    document.getElementById(`totalTax_`).innerHTML="$"+ numTax;





}
function raise(i){
    document.getElementsByClassName(`inputNumber_${i}`)[0].value++;
    let x=document.getElementsByClassName(`inputNumber_${i}`)[0].value;
    document.getElementById(`price_${i}`).innerHTML="$"+ info[i].price*x+".00";
    document.getElementById(`tax_${i}`).innerHTML="$"+ (info[i].price*x*0.125).toFixed(1);
    document.getElementById(`total_${i}`).innerHTML="$"+ (info[i].price*x*1.125-info[i].discount).toFixed(1);
    let numTotalPrice=sumOfPrice("total");
    let numDiscount=sumOfPrice('discount');
    let numTax=sumOfPrice("tax");
    document.getElementById(`totalPrice_`).innerHTML="$"+ numTotalPrice.toFixed(2);
    document.getElementById(`totalDiscount_`).innerHTML="$"+ numDiscount.toFixed(2);
    document.getElementById(`totalTax_`).innerHTML="$"+ numTax.toFixed(2);




}
function deleteData(i){
    delete info[i];
    renderData();
}



