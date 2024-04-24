console.log("-=mobile-menu script loaded=-");

const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector("header");

if (mobileMenu && header) {
  mobileMenu.addEventListener("click", function (e) {
    header.classList.toggle("active-mobile-menu");
  });
} else {
  console.log('mobile menu has exited. check the website path')
}
