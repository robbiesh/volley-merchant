function menuToggle() {
  var element = document.getElementById("toggle-icon");
  element.classList.toggle("open");

  $(".mobile-menu").slideToggle();
}
