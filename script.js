const mobileNav = document.getElementById("mobileNav");
const hamburgerButton = document.getElementById("hamburgerButton");
const mobileHeader = document.getElementById("mobileMenu");
let menuOpen  = false;

hamburgerButton.addEventListener("click", function () {
    mobileNav.classList.toggle("hidden");
    if (menuOpen  == true) {
        mobileHeader.style.height = "64px";
        menuOpen  = false;
    }
    else {
        mobileHeader.style.height = "280px";
        menuOpen  = true;
    }
})