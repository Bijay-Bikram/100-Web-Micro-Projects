
const UserTemplate = document.querySelector('[data-user-template]')
const UserCardsContainer = document.querySelector('[data-user-cards-container]')
const searchInput = document.querySelector('[data-search]')

let users = []

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value) //Return boolean
        user.element.classList.toggle('hide', !isVisible)
        //emements means card
    })
});

fetch('https://jsonplaceholder.typicode.com/users')  //starting point
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = UserTemplate.content.cloneNode(true).children[0] //Clone the template contents
            const header = card.querySelector('[data-header]')
            const body = card.querySelector('[data-body]')

            header.textContent = user.name
            body.textContent = user.email
            UserCardsContainer.append(card)
            return { name: user.name, email: user.email, element: card }
        });
    });

