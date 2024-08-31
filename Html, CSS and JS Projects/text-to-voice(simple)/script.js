
const textarea = document.querySelector("textarea");
const voiceList = document.querySelector("select");
const speechBtn = document.querySelector("button");


let synth = speechSynthesis; //Objets of device voice
let isSpeaking = true;

//Insert voices when the page is loaded and select the default
const voice = () => { // 1
    for (let voice of synth.getVoices()) {
        let selected = voice.name === "Microsoft Mark - English (United States)" ? "selected" : ""; //default
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`
        voiceList.insertAdjacentHTML('beforeend', option);
    }
}
synth.addEventListener('voiceschanged', voice);


//Play the selected voice
const textToSpeech = (text) => {  // 2
    let utterance = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
        //voiceList.value: selected value
        if (voice.name === voiceList.value) {
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}


speechBtn.addEventListener('click', (e) => { // 1
    e.preventDefault();
    if (textarea.value !== "") {
        if (!synth.speaking && isSpeaking === true) {
            textToSpeech(textarea.value);
            // speechBtn.innerText = "Pause Speech";
            isSpeaking = false;
        }
        // else {
        //     synth.pause();
        //     speechBtn.innerText = "Convert To Voice";
        //     isSpeaking = true;
        //     console.log(isSpeaking);

        // }
    }
})
