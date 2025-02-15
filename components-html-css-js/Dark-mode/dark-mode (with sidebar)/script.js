
const mobBar = document.querySelector(".mobBar");
const burger = document.querySelector(".burger");
const menuImg = document.querySelector(".burger img");
const navLinks = document.querySelector(".nav-links");
const theme = document.querySelector(".theme");
const para = document.querySelector(".para");
const Origin = location.origin;
console.log(Origin);


let isInserted = true;


// Toggle Menu
burger.addEventListener("click", () => {
    navLinks.classList.toggle("mobBar");

    if (navLinks.classList.contains("mobBar")) {
        menuImg.src = "img/close.svg"
    } else {
        menuImg.src = "img/burger.svg"
    }

    if (isInserted) {
        InsertEle()
    }
})

const InsertEle = () => {
    navLinks.insertAdjacentHTML("afterbegin", "<header>Logo</header>")
    isInserted = false;
}


// Toggle theme
theme.addEventListener("click", () => {
    let change = document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        theme.querySelector("img").src = "img/light.svg";
    } else {
        theme.querySelector("img").src = "img/dark.svg";
    }
})
