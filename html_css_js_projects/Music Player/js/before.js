console.log("Running the script...")

let currentSong = new Audio();
let currFolder;
let songs;

function secondsToMinutesAndSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getSongs(folder) {
    currFolder = folder
    console.log(currFolder);

    let a = await fetch(`http://127.0.0.1:3002/${currFolder}/`)
    let resp = await a.text()

    let div = document.createElement('div')
    div.innerHTML = resp;
    let as = div.getElementsByTagName('a')

    songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith('mp3')) {
            // Get song name removing folder path
            songs.push(element.href.split(`/${currFolder}/`)[1])
        }

    }
    let p = PreFolder(folder)
}


const playMusic = (track, pause = false) => {
    currentSong.src = `http://127.0.0.1:5500/${currFolder}/` + decodeURI(track)
    if (!pause) {
        currentSong.play()
        play.src = "./img/pause.svg"
    }


    document.querySelector(".title>p").innerHTML = decodeURI(track)

}

const PreFolder = (dir) => {
    currFolder = dir

    //Highlight the current song
    document.querySelectorAll('.card').forEach(e => {

        if (currFolder == `songs/${e.dataset.folder}`) {
            e.style.background = "#423c3cf0"

        }
        else {
            e.style.background = "#1d1b1bf0"
        }
    })


}


async function displayAlbums() {

    let a = await fetch(`http://127.0.0.1:5500/songs/`)
    let resp = await a.text()
    let div = document.createElement('div')
    div.innerHTML = resp;
    let anchors = div.getElementsByTagName('a')
    let songContainer = document.querySelector('.songContainer')

    for (let index = 0; index < anchors.length; index++) {
        const element = anchors[index];
        let folders;
        if (element.href.includes("/songs/")) {
            folders = element.href.split('/').slice(-1)[0]

            // Get the metadata from the folder
            let a = await fetch(`http://127.0.0.1:5500/songs/${folders}/info.json`)
            let resp = await a.json()

            songContainer.innerHTML = songContainer.innerHTML + `  <div class="card" data-folder="${folders}">
                    <img src="./songs/${folders}/cover.jpg" alt="">
                    <div class="songInfo">
                        <h3>${resp.title}</h3>
                        <p>${resp.description}</p>
                    </div>
                </div> `

        }

    }



}
// Play the music whenever the card is click
Array.from(document.getElementsByClassName('card')).forEach(e => {


    e.addEventListener('click', async item => {
        console.log("Clicked");
        let f = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
        playMusic(songs[0])

    })
})


async function AnotherMusic() {

    let a = await fetch(`http://127.0.0.1:5500/songs/`)
    let resp = await a.text()
    let div = document.createElement('div')
    div.innerHTML = resp;
    let anchors = div.getElementsByTagName('a')
    let songContainer = document.querySelector('.songContainer')
    let folders = []

    for (let index = 0; index < anchors.length; index++) {
        const element = anchors[index];
        if (element.href.includes("/songs/")) {
            folders.push(`songs/${element.href.split('/').slice(-1)[0]}`)

        }

    }


    // Play another music

    // Add event listener for previous 
    previous.addEventListener('click', async () => {
        let index = folders.indexOf(currFolder)
        if ((index - 1) >= length) {
            let p = await getSongs(folders[index - 1])
            playMusic(songs[0])
        }


    })

    // Add event listener for next
    next.addEventListener('click', async () => {

        let index = folders.indexOf(currFolder)
        if ((index + 1) < folders.length) {
            let p = await getSongs(folders[index + 1])
            playMusic(songs[0])
        }


    })

}



async function main() {
    await getSongs("songs/bossa")

    // Display all the Albums of music
    displayAlbums()

    playMusic(songs[0], true)

    PreFolder(currFolder)

    AnotherMusic()

    // Listen for timeupdate event
    currentSong.addEventListener('timeupdate', () => {

        document.querySelector('.time').innerHTML = `${secondsToMinutesAndSeconds(currentSong.currentTime)} `

        document.querySelector('.duration').innerHTML = `${secondsToMinutesAndSeconds(currentSong.duration)} `

        range.value = (currentSong.currentTime / currentSong.duration) * 100;
    })

    // Update the Seekbar
    document.querySelector('.seekbar>input').addEventListener('click', e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        range.value = percent
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    // Attach event listener to play and pause
    play.addEventListener('click', () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "./img/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "./img/play.svg"
        }
    })

    // Add event listener to mute the volume
    document.querySelector('.mute>img').addEventListener('click', e => {
        if (e.target.src.includes('volume.svg')) {
            e.target.src = e.target.src.replace('volume.svg', 'mute.svg')

            currentSong.volume = 0;

        }
        else {
            e.target.src = e.target.src.replace('mute.svg', 'volume.svg')
            currentSong.volume = .20;

        }
    })


}

main()  