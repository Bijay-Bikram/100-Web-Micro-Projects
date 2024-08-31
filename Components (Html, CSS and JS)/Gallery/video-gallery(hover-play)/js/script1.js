//JavaScript for uploading data to DOM

const data = [
    {
        thumbnail: "thumbnails/t1.png",
        video: "videos/v1.mp4",
        title: "A long Multi Sky Bridges ever in the world made by China",
        user: "WebBlock",
        time: "1 day age",
    },
    {
        thumbnail: "thumbnails/t2.png",
        video: "videos/v2.mp4",
        title: "Easy Handy tool for Crushing foods ",
        user: "WebBlock",
        time: "1 day age",
    },
    {
        thumbnail: "thumbnails/t3.png",
        video: "videos/v3.mp4",
        title: "A Forest around the dragon hill known as the dragon forest",
        user: "WebBlock",
        time: "1 day age",
    },
    {
        thumbnail: "thumbnails/t4.png",
        video: "videos/v4.mp4",
        title: "A Car looks like a normal but it is not",
        user: "WebBlock",
        time: "1 day age",
    },
    {
        thumbnail: "thumbnails/t5.png",
        video: "videos/v5.mp4",
        title: "A Smooth Waterfall in the forest of Nepal",
        user: "WebBlock",
        time: "1 day age",
    },
    {
        thumbnail: "thumbnails/t6.png",
        video: "videos/v6.mp4",
        title: "American amazing strategy plan for business",
        user: "WebBlock",
        time: "1 day age",
    },
]


const videoCardCont = document.querySelector(".video-card-container");
const videoCardTemp = document.getElementById("video-card-template");


data.forEach((data) => {
    const videoCard = videoCardTemp.content.cloneNode(true).children[0];

    //For Video Body
    videoCard.querySelector(".thumb-img").src = data.thumbnail;
    videoCard.querySelector(".thumb-video").src = data.video;
    videoCard.querySelector(".video-card-title").textContent = data.title;
    videoCard.querySelector(".user").textContent = data.user;
    videoCard.querySelector(".uploaded-time").textContent = data.time;

    //For Video Modal
    videoCard.querySelector(".modal-video").src = data.video;
    videoCard.querySelector(".video-modal-title").textContent = data.title;
    videoCard.querySelector(".user").textContent = data.user;
    videoCard.querySelector(".uploaded-time").textContent = data.time;

    videoCardCont.appendChild(videoCard);
})