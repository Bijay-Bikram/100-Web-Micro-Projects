console.log("Hello, World!");

const btnSpeak = document.getElementById("btnSpeak");
const textArea = document.getElementById("longText");
const Para = document.getElementById("speechPara");

let speech = speechSynthesis;

//Text to speech
btnSpeak.addEventListener("click", () => {
    if (textArea.value !== "" && !speech.speaking) {
        let text = textArea.value;
        let utterance = new SpeechSynthesisUtterance(text);
        speech.speak(utterance);
    }
})

//Paragraph to speech on double click
Para.addEventListener("dblclick", () => {
    if (!speech.speaking) {
        let text = Para.innerText;
        let utterance = new SpeechSynthesisUtterance(text);
        speech.speak(utterance);
    }
})