let burger = document.querySelector('.burger')
let navList = document.querySelector('.nav-list')
let rightnav = document.querySelector('.rightNav')
let navbar = document.querySelector('.navbar')

burger.addEventListener('click', () => {
    rightnav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})  