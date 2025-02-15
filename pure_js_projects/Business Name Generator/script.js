let adj = {
    0: "Crazy",
    1: "Amazing",
    2: "Fire",

}
let shopNam = {
    0: "Engine",
    1: "Foods",
    2: "Garments",
}
let suffix = {
    0: "Bros",
    1: "Limited",
    2: "Hub"
}

let a = Math.floor(Math.random() * 3);
let b = Math.floor(Math.random() * 3);
let c = Math.floor(Math.random() * 3);

console.log(`A new business name is ${adj[a]} ${shopNam[b]} ${suffix[c]}`)