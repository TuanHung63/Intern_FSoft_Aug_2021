var theImages = [
  {
    src: `https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ`,
    width: "300",
    height: "300",
  },
  {
    src: `https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE`,
    width: "300",
    height: "300",
  },
  {
    src: `https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs`,
    width: "300",
    height: "300",
  },
  {
    src: `https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY`,
    width: "300",
    height: "300",
  },
  {
    src: `https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w`,
    width: "300",
    height: "300",
  },
  {
    src: `https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc`,
    width: "300",
    height: "300",
  },
];
function GenerateRandomNumbers(max) {
    let orderNumbers = new Set();
    for (let i = 1;  ;i++){
        let random = Math.floor(Math.random() * max + 1)  ;
        orderNumbers.add(random);
        
        if (orderNumbers.size == max){
            break;
        }
        
        }
        return orderNumbers;}
function randomImages(){
    let num1,num2,num3;
    let setA=GenerateRandomNumbers(theImages.length);
    const iterator1 = setA.values();
    num1=iterator1.next().value-1;
    num2=iterator1.next().value-1;
    num3=iterator1.next().value-1;
    return document.getElementsByClassName("row")[0].innerHTML= `
    <div class="col-md-4 text-center  mb-3">
            <img src="${theImages[num1].src}" class="img-fluid border border-primary mb-2" style="width: ${theImages[num1].height}px !important; height: ${theImages[num1].height}px !important;"  alt="">
            <p>Image1</p>
          
        </div>
        <div class="col-md-4 text-center mb-3">
            <img src="${theImages[num2].src}" class="img-fluid border border-primary mb-2" style="width: ${theImages[num2].height}px !important; height: ${theImages[num2].height}px !important;"   alt="">
            <p>Image2</p>


          
        </div>
        <div class="col-md-4 text-center mb-3 ">
            <img src="${theImages[num3].src}" class="img-fluid border border-primary mb-2" style="width: ${theImages[num3].height}px !important; height: ${theImages[num3].height}px !important;"   alt="">
            <p>Image3</p>


          
        </div>
    `

    
    

}