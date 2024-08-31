const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');

let isTimer = true;


//Fun to fetch random quote from API
function getRandomQuote() {   //(3)
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

//Fun to Display random quote and start timer
async function renderNewQuote() {  //(2)
    isTimer = true;
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(character => {
        const spanElement = document.createElement('span')
        spanElement.innerText = character
        quoteDisplayElement.appendChild(spanElement)
    })
    quoteInputElement.value = null //clear input when new quote is displayed

}
renderNewQuote() // 1

//Check whether the typed quote is correct or not
quoteInputElement.addEventListener('input', () => {
    if (isTimer === true) {
        startTimer()
        isTimer = false;
    }
    const arraySpan = quoteDisplayElement.querySelectorAll('span');
    const arrayInput = quoteInputElement.value.split('');

    let correct = true;
    arraySpan.forEach((spanElement, index) => {
        const characterInput = arrayInput[index];
        console.log(characterInput);


        if (characterInput == null) {
            spanElement.classList.remove('correct');
            spanElement.classList.remove('incorrect');
            correct = false;
        }
        else if (characterInput === spanElement.innerText) {
            spanElement.classList.add('correct');
            spanElement.classList.remove('incorrect');
        }
        else {
            spanElement.classList.remove('correct');
            spanElement.classList.add('incorrect');
            correct = false;
        }
    })
    if (correct) renderNewQuote();

});

let startTime;
function startTimer() {
    timerElement.innerText = 0
    startTime = new Date() //static Date
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}


function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}


document.addEventListener('keydown', () => quoteInputElement.focus())
document.addEventListener('load', () => quoteInputElement.focus())