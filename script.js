function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function openReg() {
  document.getElementById("myReg").style.display = "block";
  document.getElementById("myForm").style.display = "none";
}
function closeReg() {
  document.getElementById("myReg").style.display = "none";
}

let dots =document.getElementsByClassName("dots-item"),
    dotsArea=document.getElementsByClassName("dots-block")[0],
    slides=getElementsByClassName("slides-item"),
    prevBtn=getElementById("left-button"),
    nextBtn=getElementById("right-button"),
    slideIndex=1;
    
showSlides(slideIndex);
    
function showSlides(n) {
  if (n < 1) {
    slideIndex=slides.length;
  }
  else if(n > slides.length){
    slideIndex = 1;
  }
  for(let i=0;i<slides.length;i++){
    slides[i].style.display="none";
  }
  for(let i=0;i<dots.length;i++){
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display ="block";
  dots[slideIndex - 1].classList.add("active");
}



function plusSlides (n){
  showSlides(slideIndex += n);
}
function currentSlide (n){
  showSlides(slideIndex = n)
}
prevBtn.onclick= function(){
  plusSlides(-1);
}
nextBtn.onclick= function(){
  plusSlides(1);
}
dotsArea.onclick= function(e){
  for(let i=0; i < dots.length;i++){
    if(e.target.classList.contains("dots-item") && e.target===dots[i = 1]){
      currentSlide(i);
    }
  }
}