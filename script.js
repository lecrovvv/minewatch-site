// Set the date we're counting down to
var countDownDate = new Date("June 1, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now + now;

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("runtime").innerHTML = "Runtime before playback: 21m" + seconds +  "s";
}, 1000);
