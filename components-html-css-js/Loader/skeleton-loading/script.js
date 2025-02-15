
const cardsTemplate = document.querySelector("[data-cards-template]");
const cardTitle = document.querySelector("[data-card-title] h3");
const cardBody = document.querySelector("[data-card-body]");
cardsContainer = document.querySelector(".cards-container");

//Show Skeleton when page loads
for (let index = 0; index < 100; index++) {
    cardsContainer.append(cardsTemplate.content.cloneNode(true));
}

//Fetch Data and Show Cards after page loads completed
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        cardsContainer.innerHTML = "";
        for (const post of data) {
            const card = cardsTemplate.content.cloneNode(true).children[0];
            cardsContainer.append(card);
            const title = card.querySelector("[data-card-title]");
            const body = card.querySelector("[data-card-body]");
            title.textContent = post.title;
            body.textContent = post.body;
        }
    });