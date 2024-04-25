window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const backToTop = document.querySelector("#back-to-top");
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    backToTop.classList.remove("hidden");
    backToTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    backToTop.classList.remove("flex");
    backToTop.classList.add("hidden");
  }
};

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
