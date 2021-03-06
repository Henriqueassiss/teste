// Hide Or Show On Mobile & Desktop Itens
const body = document.querySelector("body").classList;
const header = document.querySelector(".header").classList;
const menuBtn = document.querySelector(".header__toggle").classList;
const menuLinks = document.querySelector(".header__menu").classList;

// Show Menu On Mobile Devices
const showMenu = () => {
  if (menuBtn.contains("active")) {
    body.remove("no-scroll");
    menuBtn.remove("active");
    menuLinks.remove("active");
  } else {
    body.add("no-scroll");
    menuBtn.add("active");
    menuLinks.add("active");
    window.onclick = function (event) {
      if (!event.target.matches(".header__toggle")) {
        body.remove("no-scroll");
        menuBtn.remove("active");
        menuLinks.remove("active");
      }
    };
  }
};

// On Scroll Resize Header
const resizeHeader = () => {
  let y = window.scrollY;
  if (y >= 10) {
    header.add("active");
  } else {
    header.remove("active");
  }
};

window.onscroll = resizeHeader;
