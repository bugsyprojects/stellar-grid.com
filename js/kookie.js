document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const cookieCloseButton = document.getElementById("cookie-close");
  
    // Check if the user has already given consent
    if (localStorage.getItem("cookieConsent") === "true") {
      cookieBanner.classList.add("cookie-banner--hidden");
    }
  
    // Handle "Close" button click
    cookieCloseButton.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "true"); // Save consent
      cookieBanner.classList.add("cookie-banner--hidden"); // Hide the banner
    });
  });
  