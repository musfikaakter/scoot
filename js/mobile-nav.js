// mobile nav

const initMobileNav = () => { // Renamed to avoid confusion
    const headerBtn = document.getElementById("header__bar");
    const mobileMenu = document.querySelector(".mobile__menu"); // Renamed to mobileMenu
  
    if (headerBtn && mobileMenu) { // Check if elements exist
      headerBtn.addEventListener("click", () => {
        mobileMenu.style.display = (mobileMenu.style.display === "grid") ? "none" : "grid"; // Toggle
      });
    } else {
      console.error("Header button or mobile menu not found!"); // Handle missing elements
    }
  };
  
  initMobileNav(); // Call the function (renamed)



// const mobileNav = () => {
//   const headerBtn = document.getElementById("header__bar");
//   const mobileMenu = document.querySelector(".mobile__menu");

//   let isMobileMenuOpen = false;

//   headerBtn.addEventListener("click", () => {
//     isMobileMenuOpen = !isMobileMenuOpen;

//     if (isMobileMenuOpen) {
//       mobileMenu.style.display = "grid";
//       document.body.style.overflowY = "hidden";
//     } else {
//       mobileMenu.style.display = "none";
//       document.body.style.overflowY = "auto";
//     }
//   });
// };

// mobileNav();
