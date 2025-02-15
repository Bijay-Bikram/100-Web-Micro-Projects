// JavaScript for Functionality


const videos = document.querySelectorAll('.thumb-video');

//To play video on mouse hover
videos.forEach((video) => {
    video.addEventListener('mouseover', function () {
        this.style.opacity = 1;
        this.play();
        this.playbackRate = 5.0;
    })

})

//To pause video on mouse leave
videos.forEach((video) => {
    video.addEventListener('mouseleave', function () {
        this.style.opacity = 0;
        this.pause();
    })
})


// To Maintain Long title text
//Note: We can also use css for this such as "text-overflow: ellipsis;"
const title = document.querySelectorAll('.video-card-title');
title.forEach((text) => {
    if (text.textContent.length > 50) {
        text.textContent = text.textContent.slice(0, 50) + '. . .';
    }
})



//For popup Video modal Screen
const videoCard = document.querySelectorAll(".video-card-body")
const popupVideo = document.querySelectorAll(".video-modal-screen")
const modalCloseBtn = document.querySelectorAll(".vmBtn")
const modalVideos = document.querySelectorAll(".modal-video")

const videoModal = function (modalClicked) {
    //Show Modal
    popupVideo[modalClicked].classList.add("active");

    // Close Modal on cross btn click
    modalCloseBtn[modalClicked].addEventListener('click', () => {
        popupVideo[modalClicked].classList.remove("active");
    })

    // Close Modal on Escape
    window.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            popupVideo[modalClicked].classList.remove("active");
        }
    })

    //Play Video
    modalVideos[modalClicked].play()
}

videoCard.forEach((video, i) => {
    video.addEventListener('click', () => {
        videoModal(i)
    })
})