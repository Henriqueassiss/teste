const header = document.querySelector(".header");
const menuBtn = document.querySelector(".header__toggle");
const menuLinks = document.querySelector(".header__menu");

// Show Menu On Mobile Devices
const showMenu = () => {
  if (menuBtn.classList.contains("active")) {
    menuBtn.classList.remove("active");
    menuLinks.classList.remove("active");
  } else {
    menuBtn.classList.add("active");
    menuLinks.classList.add("active");
  }
};

// On Scroll Resize Header
const resizeHeader = () => {
  let y = window.scrollY;
  if (y >= 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  menuBtn.classList.remove("active");
  menuLinks.classList.remove("active");
};

window.onscroll = resizeHeader;
