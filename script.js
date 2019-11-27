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

function ValidateForm()
{
  var x = myForm.getElementById("email").value;
  var p =x.lastIndexOf("@");
  if ( p==-1 ) {
    myForm.getElementById("demo").innerHTML="no";
    return false;
  }
}

