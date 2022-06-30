let countdown = new Date("Oct 14, 2022 08:37:25").getTime();

let x = setInterval(() => {
  // Get today's date and getTime
  let now = new Date().getTime();

  let distance = countdown - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("clock").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "Parou"
  }
}, 1000);
