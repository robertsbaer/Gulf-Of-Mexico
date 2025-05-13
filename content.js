(function () {
  "use strict";

  console.log("Gulf Name Localizer loaded.");

  // Create a URL object from the current page URL.
  const url = new URL(window.location.href);

  // If you're on a localized Google domain (e.g., google.fr), switch to google.com.
  // This helps override local geolocation or TLD-based redirection.
  if (url.hostname !== "www.google.com" && url.hostname !== "maps.google.com") {
    url.hostname = "www.google.com";
  }

  // Ensure 'gl=mx' is present to indicate the region as Mexico.
  if (url.searchParams.get("gl") !== "mx") {
    url.searchParams.set("gl", "mx");
  }

  // Option A: Remove the 'hl' parameter so Google picks the default language or user’s system language.
  if (url.searchParams.has("hl")) {
    url.searchParams.delete("hl");
  }

  // Option B: If you want the interface *specifically* in English at all times, you can do:
  // url.searchParams.set("hl", "en");

  // If any changes were made, navigate to the new URL.
  const newUrl = url.toString();
  if (newUrl !== window.location.href) {
    console.log("Redirecting to forced .com domain and region=mx:", newUrl);
    window.location.replace(newUrl);
  }
})();
