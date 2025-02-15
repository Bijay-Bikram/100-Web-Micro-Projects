//For responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
})


//For video slider 
const sliderBtns = document.querySelectorAll(".nav-btn");
const slide = document.querySelectorAll(".video-slide");
const content = document.querySelectorAll(".content");


const sliderNav = (index) => {
    sliderBtns.forEach((item) => {
        item.classList.remove("active");
    })
    slide.forEach((item) => {
        item.classList.remove("active");
    })
    content.forEach((item) => {
        item.classList.remove("active");
    })

    sliderBtns[index].classList.add("active");
    slide[index].classList.add("active");
    content[index].classList.add("active");
}

sliderBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
})

