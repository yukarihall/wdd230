document.addEventListener("DOMContentLoaded", function() {
  // Get the current date and time
  const now = new Date(Date.now());
  const formattedDateTime = now.toLocaleString();

  // Display the current date and time
  document.getElementById('current-datetime').textContent = formattedDateTime;
});
