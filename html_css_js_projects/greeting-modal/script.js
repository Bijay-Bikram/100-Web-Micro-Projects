
const hour = new Date().getHours();
const greeting = document.getElementById('greeting');
const Modal = document.querySelector('.modal');
const close = document.querySelector('.close');

//Display Modal with Greeting
window.addEventListener('load', () => {
    Modal.classList.add('show');

    if (hour < 12) {
        greeting.innerHTML = 'Good Morning';
    } else if (hour < 18) {
        greeting.innerHTML = 'Good Afternoon';
    } else if (hour < 22) {
        greeting.innerHTML = 'Good Evening';
    }
    else {
        greeting.innerHTML = 'Good Night';
    }
})

// Close Modal
close.addEventListener('click', () => {
    Modal.classList.remove('show');
    showAgain()
})

// Show Modal Again
function showAgain() {
    if (Modal.classList.contains('show') !== true) {
        document.body.insertAdjacentHTML('afterbegin', '<button class="showModal">Show Again</button>');
    }

    const showModal = document.querySelector('.showModal');
    showModal.addEventListener('click', () => {
        Modal.classList.add('show');
        showModal.remove();
    })
}