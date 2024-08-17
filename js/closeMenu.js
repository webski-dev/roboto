const button = document.querySelectorAll(".mobile-menu-link");
const element = document.getElementById("mobileMenu");

function closeMenu() {
  element.classList.toggle("active");
}

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    closeMenu();
  });
}
