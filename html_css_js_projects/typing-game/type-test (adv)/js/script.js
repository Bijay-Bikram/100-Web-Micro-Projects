
const typingText = document.querySelector(".typing-text p"),
    inputField = document.querySelector(".wrapper .input-field"),
    tryAgainBtn = document.querySelector(".content button"),
    timeTag = document.querySelector(".time span"),
    mistakeTag = document.querySelector(".mistake span"),
    nwpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span"),
    Accuracy = document.querySelector(".accuracy span");
para = paragraphs;

let timer;
let maxTime = 60;
let timeLeft = 0;
let startTimer = false;
randomParagraph()

//Fun to load random paragraph
function randomParagraph() {
    let randIndex = Math.floor(Math.random() * para.length);
    para[randIndex].split('').forEach(char => {
        let spanElement = document.createElement('span');
        spanElement.innerText = char;
        typingText.appendChild(spanElement);
    });
    document.addEventListener('keydown', () => inputField.focus());
    document.addEventListener('load', () => inputField.focus());
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

        character.forEach((span, index) => {
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
        character[typedChar.length].classList.add('active')
        mistakeTag.innerText = incorrectChar();
        cpmTag.innerText = correctChar();
        nwpmTag.innerText = wpmCal();
        Accuracy.innerText = AccuracyCal();
    } else {
        clearInterval(timer);
        inputField.value = '';
    }
}

inputField.addEventListener('input', initTyping) // (1)

function timeCal() {
    if (maxTime > 0) {
        maxTime--
        timeTag.innerText = maxTime;
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



tryAgainBtn.addEventListener('click', resetGame)
