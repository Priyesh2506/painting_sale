
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
