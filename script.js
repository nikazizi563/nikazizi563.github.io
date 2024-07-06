function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".mobile-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function theothertoggleMenu() {
  var navLinks = document.querySelector(".header-nav-links");
  navLinks.classList.toggle("active");
}