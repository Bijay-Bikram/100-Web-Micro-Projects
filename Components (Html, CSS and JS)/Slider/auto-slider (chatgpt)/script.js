
const slider = document.querySelector('.slider-content');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

function nextSlide() {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds