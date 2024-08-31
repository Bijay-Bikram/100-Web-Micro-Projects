
// MySelf
const openModalBtn = document.querySelector('[data-modal-target]')
const closeModalBtn = document.querySelector('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalBtn.addEventListener('click', () => {
    document.getElementById('modal').classList.add('active')
    overlay.classList.add('active')
})

closeModalBtn.addEventListener('click', () => {
    document.getElementById('modal').classList.remove('active')
    overlay.classList.remove('active')
})

overlay.addEventListener('click', () => {
    document.getElementById('modal').classList.remove('active')
    overlay.classList.remove('active')
})




// OR


// By Kyel
// const openModalBtn = document.querySelectorAll('[data-modal-target]')
// const closeModalBtn = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalBtn.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
//     })
// })

// closeModalBtn.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
// })

// overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })

// // Functions
// function openModal(modal) {
//     if (modal == null) return
//     modal.classList.add('active')
//     overlay.classList.add('active')
// }

// function closeModal(modal) {
//     if (modal == null) return
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
// }


