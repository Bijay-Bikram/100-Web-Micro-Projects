
const typingText = document.querySelector(".typing-text p");
const Wrapper = document.querySelector(".wrapper");
const inputField = document.querySelector(".wrapper .input-field");
const tryAgainBtn = document.querySelector(".replay");
const nextBtn = document.querySelector(".next");
const mistakeTag = document.querySelector(".mistake span");
const nwpmTag = document.querySelector(".wpm span");
const cpmTag = document.querySelector(".cpm span");
const Timer = document.querySelector(".time");
const Accuracy = document.querySelector(".accuracy span");
const Modalnext = document.querySelector(".modal-next");
const Modalreplay = document.querySelector(".modal-replay");
const Modal = document.querySelector("[data-modal]");

const ArrayOfpara = [];

let sameQuote = ""
let timer;
let maxTime = 60;
let timeLeft = 0;
let startTimer = false;
let isReplay = false;
let isReMatch = false;


getRandomQuote() //Start

//Fun to fetch random quote from API
function getRandomQuote() {   //(3)
    return fetch('http://api.quotable.io/random')
        .then(response => response.json())
        .then(data => randomParagraph(data.content))
}

//Fun to load random paragraph
function randomParagraph(quote) {
    let para;
    if (isReplay === false) {
        para = isReMatch === false ? quote : sameQuote;
    } else {
        para = ArrayOfpara[0];
    }
    para.split('').forEach(char => {
        let spanElement = document.createElement('span');
        spanElement.innerText = char;
        typingText.appendChild(spanElement);
    });
    sameQuote = para;
}

//Fun for managing overall logic
function initTyping() {  //(2)
    if (startTimer === false) {
        timer = setInterval(timeCal, 1000);
        startTimer = true;
    }
    if (maxTime > 0) {
        const character = typingText.querySelectorAll('span');
        const typedChar = inputField.value.split('')

        let reStore = " "
        let guideTag = character[typedChar.length];

        character.forEach((span, index) => {
            reStore += span.innerText;
            let input = typedChar[index]

            if (input === undefined) {
                span.classList.remove('correct')
                span.classList.remove('incorrect')
                span.classList.remove('active')

            }
            else if (input === span.innerText) {
                span.classList.add('correct')
                span.classList.remove('incorrect')
                span.classList.remove('active')
            }
            else {
                span.classList.add('incorrect')
                span.classList.add('worong')
                span.classList.remove('correct')
                span.classList.remove('active')
            }
        })
        if (typedChar.length === character.length) {
            clearInterval(timer)
            ArrayOfpara[0] = reStore.trim();
            Modal.showModal();
        }

        guideTag.classList.add('active')
        mistakeTag.innerText = incorrectChar();
        cpmTag.innerText = correctChar();
        nwpmTag.innerText = wpmCal();
        Accuracy.innerText = AccuracyCal();
    } else {
        clearInterval(timer);
        inputField.value = '';
    }
}


function timeCal() {
    if (maxTime > 0) {
        maxTime--
        Timer.innerText = maxTime;
        timeLeft = maxTime;
    }
    else {
        clearInterval(timer);
    }
}

function incorrectChar() {
    const worong = document.querySelectorAll('.worong')
    return Array.from(worong).length;
}

function correctChar() {
    const correct = document.querySelectorAll('.correct')
    return Array.from(correct).length;
}

function wpmCal() {
    let wpm = Math.round((correctChar() / 5) / ((60 - timeLeft) / 60))
    wpm = (wpm < 0 || wpm === NaN || wpm === Infinity) ? 0 : wpm;
    return wpm;
}

function resetGame() {
    location.reload()
}

function AccuracyCal() {
    const accuracy = ` ${Math.floor((correctChar() - incorrectChar()) / correctChar() * 100)}%`
    return accuracy;
}

function ResetAll() {
    typingText.innerHTML = '';
    maxTime = 60;
    timeLeft = 0;
    startTimer = false;
    inputField.value = '';
    inputField.focus();
    mistakeTag.innerText = "0"
    cpmTag.innerText = " 0"
    nwpmTag.innerText = "0"
    Accuracy.innerText = "100%"
    Timer.innerText = maxTime
    getRandomQuote();
}

function reMatchWithModal() {
    Modal.close()
    isReplay = true;
    ResetAll();
}
function reMatch() {
    isReMatch = true;
    ResetAll();
    clearInterval(timer)
}


document.addEventListener('keypress', () => inputField.focus());
document.addEventListener('load', () => inputField.focus());
inputField.addEventListener('input', initTyping)
tryAgainBtn.addEventListener('click', reMatch)
nextBtn.addEventListener('click', resetGame)
Modalnext.addEventListener('click', resetGame)
Modalreplay.addEventListener('click', reMatchWithModal)
