<script>
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
window.onload = function() {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
}
</script>
