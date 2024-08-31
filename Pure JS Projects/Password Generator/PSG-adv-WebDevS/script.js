const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')
const includeuppercase = document.getElementById('uppercase')
const includenumbers = document.getElementById('numbers')
const includesymbols = document.getElementById('symbols')
const passwordDisplay = document.getElementById('passwordDisplay');

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)
).concat(arrayFromLowToHigh(91, 96)
).concat(arrayFromLowToHigh(123, 126));

//Input Event
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

// Submit Event
form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const uppercase = includeuppercase.checked
    const numbers = includenumbers.checked
    const symbols = includesymbols.checked
    const password = generatePassword(characterAmount, uppercase, symbols, numbers)
    passwordDisplay.innerText = password
})

//Functions
function generatePassword(characterAmount, uppercase, symbols, numbers) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if (uppercase) charCodes =charCodes.concat(UPPERCASE_CHAR_CODES)
    if (numbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
    if (symbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)

    const passwordCharacters = [];
    for (i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')

}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;

}