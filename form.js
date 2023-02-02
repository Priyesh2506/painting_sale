function amount1(){
  var x = document.getElementById("img1").innerHTML;
  document.getElementById("img1").innerHTML="Sold @ $20";
}
function amount2(){
  var y = document.getElementById("img2").innerHTML;
  document.getElementById("img2").innerHTML="Sold @ $25";
}
function amount3(){
  var z = document.getElementById("img3").innerHTML;
  document.getElementById("img3").innerHTML="Sold @ $35";
}

function display() {
  var x = document.getElementById("fname").value;
  var y = document.getElementById("lname").value;
  var z = document.getElementById("inputPhn").value;
  var i = Math.floor(Math.random() * 10 + 1);
  alert(
    "TicketID #" +
      i +
      "\nHi " +
      x +
      y +
      ",\nOur Agent will get back to you soon on your WhatsApp ( " +
      z +
      " ).\nThank You for Visiting Chitraa."
  );
}
