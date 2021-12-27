// initializes lax
window.onload = () => {
  AOS.init({once: false});
  console.log("runnam bitc");
  lax.setup();
  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };
  window.requestAnimationFrame(updateLax);
};

// scroll to top button (to be implemented)
// const scrollTopBtn = document.getElementById("back-to-top");
// const footer = document.getElementById("main-footer");

// header variables
const header = document.querySelector(".header-wrapper");

// for mobile navbar
const menuItemsConst = document.querySelectorAll(".menu-item");
const menuBtnConst = document.getElementById("menu-btn");
const hamburgerMenuIcon = document.querySelector(".menu-icon");

// for desktop navbar
const menuWrapperConst = document.querySelector("#navbar ul");
const menuLinksConst = document.querySelectorAll("#navbar ul li a");
let menuLinksLength = menuLinksConst.length;

// mobile
// ------

// closes mobile menu on item select
for (let i = 0; i < menuItemsConst.length; i++) {
  menuItemsConst[i].addEventListener("click", () => {
    setTimeout(uncheckHamburger, 150);
  });
}

const uncheckHamburger = () => {
  menuBtnConst.checked = false;
};

// desktop
// -------

// runs functions on scroll
window.onscroll = () => {
  menuItemHighlightHandler();
};

// adds active class to menu item depending on scroll position
const menuItemHighlightHandler = () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition < 1100) {
    getActiveMenuItem();
    menuLinksConst[0].classList.add("active");
  } else if (scrollPosition < 2900) {
    getActiveMenuItem();
    menuLinksConst[1].classList.add("active");
  } else {
    getActiveMenuItem();
    menuLinksConst[2].classList.add("active");
  }
};

// gets active menu item and removes active class
const getActiveMenuItem = () => {
  let active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
  }
};

// jQuery smooth scroll to element
$("#navbar ul li a, .restart").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1250
    );
  }
});