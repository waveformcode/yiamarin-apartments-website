//Navigation button On/off
const hamburgerBtn = document.querySelector(".hamburger-button");
const navBar = document.querySelector(".nav-menu");

hamburgerBtn.addEventListener("click", () => {
  navBar.classList.toggle("nav-menu-open");
  document.body.classList.toggle("no-scroll");
});

//hamburger button change to X
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-button-open");
});

//Mobile remove open navbar when click on links
const navLinks = document.querySelectorAll(".nav-menu a");
for (let link of navLinks) {
  link.addEventListener("click", () => {
    navBar.classList.remove("nav-menu-open");
    document.body.classList.remove("no-scroll");
    hamburgerBtn.classList.remove("hamburger-button-open");
  });
}
