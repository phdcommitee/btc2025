// Set the date you're counting down to
const targetDate = new Date("2025-09-10T00:00:00").getTime(); // Replace with your target date

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown-timer"
  document.getElementById("countdown-timer").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown-timer").innerHTML = "Event has passed!";
  }
}, 1000);
