console.log('This is javascript');

//Global variable
let currentSong = new Audio();
let songs;
let currFolder;

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
    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:5501/${currFolder}/`)
    let resp = await a.text()
    let div = document.createElement('div')
    div.innerHTML = resp;
    let as = div.getElementsByTagName('a')
    songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith('mp3')) {
            songs.push(element.href.split(`/${currFolder}/`)[1])
        }

    }

    //Show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName('ul')[0];
    songUL.innerHTML = " "
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `   <li><img src="./img/music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll('%20', ' ')}</div>
                                <div>Justin</div>
                            </div>
                            <div class="playnow">   
                                <span>Play Now</span>
                                <img src="./img/play.svg" alt="">
                            </div>
                        </li>`;
    }


    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener('click', element => {
            playMusic(e.querySelector('.info').firstElementChild.innerHTML)
        })
    })
    return songs
}


const playMusic = (track, pause = false) => {
    currentSong.src = `http://127.0.0.1:5501/${currFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.src = "./img/pause.svg"
    }


    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:5501/songs/`)
    let resp = await a.text()
    let div = document.createElement('div')
    div.innerHTML = resp;
    let anchors = div.getElementsByTagName('a')
    let cardContainer = document.querySelector('.cardContainer')

    for (let index = 0; index < anchors.length; index++) {
        const element = anchors[index];
        if (element.href.includes("/songs/")) {
            let folder = element.href.split('/').slice(-1)[0]

            // Get the metadata from the folder
            let a = await fetch(`http://127.0.0.1:5501/songs/${folder}/info.json`)
            let resp = await a.json()

            cardContainer.innerHTML = cardContainer.innerHTML + ` <div class="card " data-folder="${folder}">
                        <div class="play">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
                                    stroke="#000" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <img src="./songs/${folder}/cover.jpg" alt="">
                        <h2>${resp.title}</h2>
                        <p>${resp.description}</p>
                    </div>`

        }
    }

    // Load the playlist whenever the card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {

        e.addEventListener('click', async item => {
            let f = await getSongs(`/songs/${item.currentTarget.dataset.folder}`)
            playMusic(songs[0])
        })
    })

}

//Why we use again async function for output 
async function main() {
    //Get the list of all songs
    await getSongs("/songs/cs")
    playMusic(songs[0], true)

    //Display all the albums on the page
    displayAlbums()


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

    // Listen for timeupdate event
    currentSong.addEventListener('timeupdate', () => {
        document.querySelector('.songtime').innerHTML = `${secondsToMinutesAndSeconds(currentSong.currentTime)} / ${secondsToMinutesAndSeconds(currentSong.duration)}`

        document.querySelector('.circle').style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    // Add event listener to seekbar 
    document.querySelector('.seekbar').addEventListener('click', e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector('.circle').style.left = percent + "%"
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })


    // Add event listener for Hamburger
    document.querySelector('.hamburgerContainer').addEventListener('click', () => {
        document.querySelector('.left').style.left = "0";
    })

    // Add event listener for close
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.left').style.left = "-200%";
    })

    // Add event listener for previous 
    previous.addEventListener('click', () => {
        let index = songs.indexOf(currentSong.src.split('/').slice(-1)[0])

        if ((index - 1) >= length) {
            playMusic(songs[index - 1])
        }

    })

    // Add event listener for next
    next.addEventListener('click', () => {
        console.log(songs);

        let index = songs.indexOf(currentSong.src.split('/').slice(-1)[0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })

    // Add event listener for volume and range
    document.querySelector('.range').getElementsByTagName('input')[0].addEventListener('change', (e) => {
        currentSong.volume = parseInt(e.target.value) / 100;
    })

    // Add event listener to mute the volume
    document.querySelector('.volume>img').addEventListener('click', e => {
        console.log(e.target);
        if (e.target.src.includes('volume.svg')) {
            e.target.src = e.target.src.replace('volume.svg', 'mute.svg')

            currentSong.volume = 0;
            document.querySelector('.range').getElementsByTagName('input')[0].value = 0;
        }
        else {
            e.target.src = e.target.src.replace('mute.svg', 'volume.svg')
            currentSong.volume = .10;
            document.querySelector('.range').getElementsByTagName('input')[0].value = 30;
        }

    })

}
main()      
