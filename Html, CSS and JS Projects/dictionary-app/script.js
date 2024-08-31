console.log('JS is running...');

const wrapper = document.querySelector(".wrapper"),
    searchInput = wrapper.querySelector("input"),
    Word = wrapper.querySelector(".word .details > p"),
    WordPhonetics = wrapper.querySelector(".word .details > span"),
    Meanings = wrapper.querySelector(".meaning .details span"),
    Examples = wrapper.querySelector(".example .details span"),
    Volume = wrapper.querySelector(".word > span"),
    infoText = wrapper.querySelector(".info-text"),
    Synonyms = wrapper.querySelector(".synonyms .list"),
    Antonyms = wrapper.querySelector(".antonyms .list"),
    CloseIcon = wrapper.querySelector(".search #close");

let audio;


// data fun
function data(result, word) {  // (3)
    console.log(result);
    if (result.title) {
        infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`
    } else {
        wrapper.classList.add("active");
        let meanLength = result[0].meanings.length - 1;
        let phoneLength = result[0].phonetics.length - 1;
        let phoneticText = result[0].phonetics[0];
        let partOfSpeech = result[0].meanings[meanLength].partOfSpeech;
        let phonetics = (phoneticText !== undefined) ? ` ${partOfSpeech}  ${result[0].phonetics[phoneLength].text}` : partOfSpeech;
        let definiationsOfWord = result[0].meanings[meanLength].definitions[0],
            synonyms = result[0].meanings[meanLength].synonyms,
            antonyms = result[0].meanings[meanLength].antonyms;


        Word.innerText = result[0].word;
        Meanings.innerText = definiationsOfWord.definition;
        Examples.innerText = definiationsOfWord.example;
        WordPhonetics.innerText = phonetics;
        audio = (result[0].phonetics[0].audio === null || !result[0].phonetics[0].audio) ? new Audio(result[0].phonetics[phoneLength].audio) : new Audio(result[0].phonetics[0].audio);

        //Condition for synonyms
        if (synonyms[0] === undefined) {
            Synonyms.parentElement.style.display = "none";
        } else {
            Synonyms.innerHTML = "";
            Synonyms.parentElement.style.display = "block";
            synonyms.forEach(word => {
                let tag = `<span onclick="search('${word}')">${word},</span>`;
                Synonyms.insertAdjacentHTML("beforeend", tag);
            });
        }

        //Condition for antonyms
        if (antonyms[0] === undefined) {
            Antonyms.parentElement.style.display = "none";
        } else {
            Antonyms.innerHTML = "";
            Antonyms.parentElement.style.display = "block";
            antonyms.forEach(word => {
                let tag = `<span onclick="search('${word}')">${word},</span>`;
                Antonyms.insertAdjacentHTML("beforeend", tag);
            });
        }
    }
}


//fun to fetch api 
function fetchApi(word) {  // (2)
    wrapper.classList.remove('active');
    infoText.style.color = '#000';
    infoText.innerHTML = `Searching the meaning of <span>"${word}"</span> . . .`
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(response => response.json()).then(result => data(result, word))
}

//fun to search synonyms/antonyms word
function search(word) {
    fetchApi(word);
    searchInput.value = word;
    wrapper.classList.remove('active');
}


// Event listeners 
searchInput.addEventListener('keypress', e => {  // (1)
    if (e.key === 'Enter' && e.target.value) {
        fetchApi(e.target.value)
    }
})

Volume.addEventListener('click', () => {
    audio.play();
});

CloseIcon.addEventListener('click', () => {
    searchInput.value = " ";
    searchInput.focus();
    wrapper.classList.remove('active');
    infoText.style.color = '#9A9A9A';
    infoText.innerHTML = "Type any existing word and press enter to get meaning, example, synonyms, etc.";
});

