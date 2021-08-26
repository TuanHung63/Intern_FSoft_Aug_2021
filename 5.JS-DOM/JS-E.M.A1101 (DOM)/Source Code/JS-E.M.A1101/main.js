const images = ['img1.jpg', 'img2.png', 'img3.png'];
let index = 0;
 
// Add your code here
var imageContainer=document.getElementsByClassName("img-container")[0];
var backBtn=document.getElementsByClassName("back")[0];
var nextBtn=document.getElementsByClassName("next")[0];
// Task 1

backBtn.addEventListener('click', function() {
  // Add your code here  
  index =(index-1) ;
  renderImage(Math.abs(index)%3);

  // Task 3.1
});

nextBtn.addEventListener('click', function() {
  // Add your code here
  index =(index+1) ;
  renderImage(Math.abs(index) %3);
  // Task 3.2
});
var x = document.createElement("IMG");
x.src= `./images/${images[index]}`;
imageContainer.appendChild(x)

// Add your code here
function renderImage(index) {
  var rm=document.getElementsByTagName("img")[0];
  rm.remove();
  imageContainer.innerHTML=`
  <img src="./images/${images[index]}" >`;  

} 
// Task 2