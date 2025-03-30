// open mobile nav

const menuBar = document.querySelectorAll(".header__bar");
const mobileMenu = document.querySelector(".mobile__menu");

let isMobileMenuOpen = false;

menuBar.forEach((open) => {
  open.addEventListener("click", openMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
      mobileMenu.style.display = "grid";
    } else {
      mobileMenu.style.display = "none";
    }

  });
});

// close mobile nav

const closeMobileMenu = document.querySelectorAll(".menu__close");

closeMobileMenu.forEach((cross) => {
  cross.addEventListener("click", closeMenu = () => {

    mobileMenu.style.display = "none";
    isMobileMenuOpen = false;

  });
});





