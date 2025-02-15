
let cont = document.querySelector('.container');
let btn = document.getElementById('btn')

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let thumbN = document.createElement('div')
    thumbN.classList = "imgsec"
    thumbN.insertAdjacentHTML('afterbegin', `<img src = ${thumbnail} >`)
    thumbN.insertAdjacentHTML("beforeend", `<span>${duration} </span>`)
    cont.prepend(thumbN);

    let v = views / 1000;
    let info = document.createElement('div')
    info.classList = 'infosec';
    info.insertAdjacentHTML('afterbegin', `<h3>${title}</h3>`)
    info.insertAdjacentHTML('beforeend', `div class="details"><p>${cName} . ${v}K views . ${monthsOld} month </p>`) >

        cont.append(info)

}
const fil = createCard('Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1', 'CodeWithHarry', 965000, 3, "30:24", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");


