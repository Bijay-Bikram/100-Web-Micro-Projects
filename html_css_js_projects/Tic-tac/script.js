console.log("JS running ...");

let music = new Audio("./sound/music.mp3")
let audioTurn = new Audio("./sound/ting.mp3")
let gameover = new Audio("./sound/gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Verify Winner
/**
 * This function checks for a win in the game
 *
 * It iterates through all the possible combinations of winning rows
 * and checks if all the symbols in the row are the same and not empty
 * If it finds a winning combination, it updates the info box and plays the gameover sound
 */
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxText'); // Get all the box texts
    let wins = [
        [0, 1, 2, 5, 5, 0], //5, 5, 0 are transform property for won-line
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => { // Loop through all the possible winning rows
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[0]].innerText !== '')) {

            // Uncomment these lines to log the winning row
            // console.log(e[0]);
            // console.log(e[1]);
            // console.log(e[2]);

            // console.log(boxtexts[e[0]].innerText); // Log the symbol in the first box of the row
            // console.log(boxtexts[e[1]].innerText); // Log the symbol in the second box of the row
            // console.log(boxtexts[e[2]].innerText); // Log the symbol in the third box of the row

            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won the match"; // Update the info box with the winning symbol
            isgameover = true; // Set the gameover flag to true
            gameover.play(); // Play the gameover sound
            document.querySelector('.imgBox>img').style.width = "15vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "22vw";

        }
    })
}

//Game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(e => {
    let boxtext = e.querySelector('.boxText');
    e.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            // If game is not over, update the turn info on the screen
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText =
                    "Turn for " + turn;
            }

        }
    })

})


// Add onclick listener to reset button
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = " "
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox>img').style.width = "0px"
})
