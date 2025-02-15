const Slide = document.getElementById("slide");
const Uparr = document.getElementById("upArrow");
const Downarr = document.getElementById("downArrow");

const manageArrow = () => {
    if (Slide.scrollTop === 600) {
        Uparr.classList.add("hide")
    } else {
        Uparr.classList.remove("hide")
    }

    if (Slide.scrollTop === 0) {
        Downarr.classList.add("hide")
    } else {
        Downarr.classList.remove("hide")
    }
}

Uparr.addEventListener('click', () => {
    Slide.scrollTop += 300;
    manageArrow();
    console.log(Slide.scrollTop);


})
Downarr.addEventListener('click', () => {
    Slide.scrollTop -= 300;
    console.log(Slide.scrollTop);
    manageArrow();
})

