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

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides-item");
    var dots = document.getElementsByClassName("dots-item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function validateEmail(){
var x = document.getElementById('email').value;
var y = /^([a-z0-9_#.-]+)@(([a-z0-9_#-]+\.)+[a-z]{2,5})$/;
if (x.match(y)){
  document.getElementById("d1").innerHTML="Correct";
  document.getElementById("d1").style.color="green";
}
else {
  document.getElementById("d1").innerHTML="Inorrect";
  document.getElementById("d1").style.color="red";
}
}

function validatePass(){
 var x=document.getElementById("psw").value;
 var y=/^[a-z]*$/;
 var z=/^[a-z0-9]*$/;
 var t=/^[a-z0-9A-Z]*$/
 if (x.match(y)){
  document.getElementById("d2").innerHTML="Easy"; 
  document.getElementById("d2").style.color="blue";
}
else if (x.match(z)){
  document.getElementById("d2").innerHTML="Medium"; 
  document.getElementById("d2").style.color="yellow";
}
else if (x.match(t)){
  document.getElementById("d2").innerHTML="Difficult"; 
  document.getElementById("d2").style.color="#2dd613";
}
}









