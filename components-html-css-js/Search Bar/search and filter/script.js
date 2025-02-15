
const products = [
    {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpg",
    },
    {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "short-skirt.jpg",
    },
    {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartwatch.jpg",
    },
    {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "knitted-top.jpg",
    },
    {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "black-leather-jacket.jpg",
    },
    {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "pink-trousers.jpg",
    },
    {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "brown-jacket.jpg",
    },
    {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "comfy-gray-pants.jpg",
    },
    {
        productName: "Official Gray Pants",
        category: "Bottomwear",
        price: "55",
        image: "official-pents.png",
    },
]

const searchBar = document.getElementById('search-input');
const searchBtn = document.getElementById('search');
const cardsContainer = document.querySelector('.cardContainer');
const cardsTemplate = document.getElementById('card-template');
const categoriy = document.querySelectorAll('.category');

window.onload = () => {
    displayAll()
}

const activate = () => {
    categoriy.forEach(item => {
        item.classList.remove('active')
    })
}

//Adding click event to each category
categoriy.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.textContent.toLowerCase();
        activate();
        item.classList.add('active')
        category === 'all' ? displayAll() : getItems(category)
    })
})

//Searching input data 
const search = () => {
    const inputValue = searchBar.value.toLowerCase();
    if (inputValue) {
        getItems(inputValue)
    }
}

//Filter data
const getItems = (inputValue) => {
    products.forEach(item => {
        let isValid = item.productName.toLowerCase().includes(inputValue) || item.price.includes(inputValue) || item.category.toLowerCase().includes(inputValue);

        item.element.classList.toggle('hide', !isValid)
    })
}

const displayAll = () => {
    cardsContainer.innerHTML = '';
    products.forEach(item => { // Starting point
        let card = cardsTemplate.content.cloneNode(true).children[0]
        const productName = card.querySelector('.info')
        const price = card.querySelector('.price')
        const productImage = card.querySelector('.product-image')

        productName.textContent = item.productName
        price.textContent = '$' + item.price
        productImage.src = './images/' + item.image

        item.element = card; //Inserting element property in data
        cardsContainer.append(card)
    });
}


searchBtn.addEventListener('click', search)
searchBar.addEventListener('keypress', e => {
    if (e.key === 'Enter' && e.target.value) {
        search()
    }
})

