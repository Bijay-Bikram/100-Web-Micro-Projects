
const play = document.getElementById("play");
const pause = document.querySelector("#play span");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const title = document.querySelector(".music-title p");
const Mute = document.getElementById("mute");
const InitialTime = document.querySelector(".init-time");
const Endtime = document.querySelector(".end-time");
const ProgressBar = document.querySelector(".progress-bar input");

let audio = new Audio('./songs/Helium - TrackTribe.mp3');


function MusicAcc(title, src) {
  this.title = title;
  this.src = src;
}

const m1 = new MusicAcc("Helium - TrackTribe", "./songs/Helium - TrackTribe.mp3");
const m2 = new MusicAcc("TORSION - Density & Time", "./songs/TORSION - Density & Time.mp3");

const songsInfo = [m1, m2];


// Functions
const audioTimer = () => {
  let min = Math.floor(audio.currentTime / 60);
  let sec = Math.floor(audio.currentTime - min * 60);
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  document.querySelector(".init-time").textContent = `${min}:${sec}`;
  audioDuration()
}

const audioDuration = () => {
  let min = Math.floor(audio.duration / 60);
  let sec = Math.floor(audio.duration - min * 60);
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  Endtime.textContent = `${min}:${sec}`;
  audioProgress()
}

const audioProgress = () => {
  //seconds to %
  let progress = (audio.currentTime / audio.duration) * 100;
  ProgressBar.value = progress;
}

ProgressBar.addEventListener("change", () => {
  //  % to seconds
  let progress = (ProgressBar.value / 100) * audio.duration;
  audio.currentTime = progress;
})



// Event Listeners
audio.addEventListener("timeupdate", audioTimer);

play.addEventListener("click", () => {  //1
  title.innerText = m1.title;
  if (pause.innerText === 'pause_circle') {
    pause.innerText = 'play_circle'
    audio.pause();
  } else {
    pause.innerText = 'pause_circle'
    audio.play();
  }
});

Mute.addEventListener("click", () => {
  let volume = audio.volume
  if (volume === 0) {
    audio.volume = 1
    Mute.innerText = "volume_up"
  } else {
    audio.volume = 0
    Mute.innerText = "volume_off"
  }
});


next.addEventListener("click", () => {
  if (title.innerText === m2.title) {
    audio.src = m2.src;
    audio.play();
    title.innerText = m2.title

  }
  else {
    audio.src = m2.src;
    audio.play();
    title.innerText = m2.title

  }
});

prev.addEventListener("click", () => {
  if (title.innerText === m2.title) {
    audio.src = m1.src;
    audio.play();
    title.innerText = m1.title
  }
  else {
    audio.src = m1.src;
    audio.play();
    title.innerText = m1.title

  }
})