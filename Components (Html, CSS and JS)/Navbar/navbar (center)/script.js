
const mobBar = document.querySelector(".mobBar");
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");


burger.addEventListener("click", () => {
    navLinks.classList.toggle("mobBar");
})