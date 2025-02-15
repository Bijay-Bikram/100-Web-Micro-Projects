
const searchBar = document.querySelector('[data-search]')
const cardsContainer = document.querySelector('[data-component-cards-container]')
const cardsTemplate = document.querySelector('[data-component-template]')

const data = [
    {
        name: "Navbar",
        body: "navbar with dropdown menu"
    },
    {
        name: "Cards",
        body: "cards with slider"
    },
    {
        name: "Footer",
        body: "Footer with contact info"
    },
    {
        name: "Form",
        body: "Form with validation"
    },
    {
        name: "Modal",
        body: "modal with animation"
    },
]

//Searching data 
searchBar.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    data.forEach(item => {
        let isValid = item.name.toLowerCase().includes(value) || item.body.toLowerCase().includes(value);

        item.element.classList.toggle('hide', !isValid)
    })
})

//Displaying data 
data.forEach(item => { // Starting point
    let card = cardsTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector('[data-header]')
    const body = card.querySelector('[data-body]')

    header.textContent = item.name
    body.textContent = item.body
    item.element = card; //Inserting element property in data
    cardsContainer.append(card)
});



