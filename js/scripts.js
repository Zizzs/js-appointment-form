var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];





$(document).ready(function() {




  $("form#makeAppointment").submit(function(event) {
    var nameTemp = $("input#nameInput").val();
    $(".modalName").text(nameTemp);
    event.preventDefault();
  });

  $("form#makeAppointment").submit(function(event) {
    var descriptionTemp = $("input#descriptionInput").val();
    $(".modalDescription").text(descriptionTemp);
    event.preventDefault();
  });

  $("form#makeAppointment").submit(function(event) {
    var dateTemp = $("input#dateInput").val();
    $(".modalDate").text(dateTemp);
    event.preventDefault();
  });

  $("form#makeAppointment").submit(function(event) {
    var timesTemp = $("input#timesInput").val();
    $(".modalTimes").text(timesTemp);
    event.preventDefault();
  });

  $("form#makeAppointment").submit(function(event) {
    var colorTemp = $("input#colorInput").val();
    $(".modalColor").text(colorTemp);
    event.preventDefault();
  });

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
  }}

});
