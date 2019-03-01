const eventDate = new Date("Apr 06, 2019 10:00:00").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();
  let distance = eventDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hero--countdown_text").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;
  
}, 1000);