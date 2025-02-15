
const mobBar = document.querySelector(".mobBar");
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

let isInserted = true;

const InsertEle = () => {
    if (isInserted) {
        navLinks.insertAdjacentHTML("afterbegin", "<header>Logo</header>")
        isInserted = false;
    }
}

burger.addEventListener("click", () => {
    navLinks.classList.toggle("mobBar");

    InsertEle()
})