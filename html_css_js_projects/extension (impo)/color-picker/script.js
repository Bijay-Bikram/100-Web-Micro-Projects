//Declarations
const colorPickerBtn = document.querySelector('#color-picker')
const colorList = document.querySelector('.all-colors')
const clearAll = document.querySelector('.clear-all')
const pickedColors = JSON.parse(localStorage.getItem('picked-colors') || '[]') //It is an array


//Functions
const copyColor = (ele) => {
    navigator.clipboard.writeText(ele.dataset.color)
    ele.innerText = 'Copied!'
    setTimeout(() => ele.innerText = ele.dataset.color, 1000)
};


const showColors = () => {  // 2
    //Note: map return a new array
    colorList.innerHTML = pickedColors.map(color => `
                <li class="color">
                    <span class="rect" style="background: ${color}"></span>
                    <span class="value" data-color="${color}">${color}</span>
                </li>`).join("")

    document.querySelector('.picked-colors').classList.remove('hide')

    document.querySelectorAll('.color').forEach(li => {
        li.addEventListener('click', e => copyColor(e.currentTarget.lastElementChild))
    })
}


// Add a click event listener to each color element to copy the color code
const activateEyeDropper = async () => {  // 1
    document.body.style.display = "none"
    setTimeout(async () => {
        try {
            const eyeDropper = new EyeDropper()
            //Note: sRGBHex is an object property
            const { sRGBHex } = await eyeDropper.open()

            //Adding the color to the list if it doesn't already  exist
            if (!pickedColors.includes(sRGBHex)) {
                pickedColors.push(sRGBHex)
                localStorage.setItem("picked-colors", JSON.stringify(pickedColors))
            }
            showColors()
        } catch (error) {
            console.log("Failed to copy the color code")
        }
        document.body.style.display = "block"
    }, 10);
}


const clearAllColors = () => {
    pickedColors.length = 0 // Clearing Array
    localStorage.setItem('picked-colors', JSON.stringify(pickedColors))
    document.querySelector('.picked-colors').classList.add('hide')
}


// Event listeners
clearAll.addEventListener('click', clearAllColors)
colorPickerBtn.addEventListener('click', activateEyeDropper)

