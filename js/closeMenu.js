function closeMenu() {
  const button = document.querySelectorAll("mobile-menu-link");
  const element = document.getElementById("mobileMenu");

  button[4].addEventListener("click", () => {
    element.classList.toggle("closed");
  });
}
