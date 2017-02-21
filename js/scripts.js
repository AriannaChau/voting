$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age < 18) {
    $('#under18').show();
  } else if (age === 18) {
    alert("MAKE SURE TO VOTE RESPONSIBLY AKA NOT FOR PEOPLE LIKE TRUMP")
      $('#over18').show();
  } else {
    $('#over18').show();
  }
});
