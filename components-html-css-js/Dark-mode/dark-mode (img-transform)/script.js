
const theme = document.querySelector(".theme");
const main = document.querySelector(".main");



theme.onclick = () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        theme.setAttribute("src", "img/light.svg");
    } else {
        theme.setAttribute("src", "img/dark.svg");
    }
}