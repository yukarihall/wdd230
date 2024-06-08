document.addEventListener("DOMContentLoaded", function() {
  const visitMessage = document.getElementById('visit-message');
  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();

  if (lastVisit) {
      const lastVisitDate = new Date(parseInt(lastVisit));
      const diffTime = now - lastVisitDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffTime < 1000 * 60 * 60 * 24) {
          visitMessage.textContent = "Back so soon! Awesome!";
      } else if (diffDays === 1) {
          visitMessage.textContent = "You last visited 1 day ago.";
      } else {
          visitMessage.textContent = `You last visited ${diffDays} days ago.`;
      }
  } else {
      visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  }

  localStorage.setItem('lastVisit', now);
});