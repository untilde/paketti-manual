// Toggle Dark/Light Mode and save preference in localStorage
function toggleTheme() {
  const darkMode = localStorage.getItem("darkMode") === "enabled";
  if (darkMode) {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  }
}

// Apply saved theme on page load
window.onload = function() {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
};
