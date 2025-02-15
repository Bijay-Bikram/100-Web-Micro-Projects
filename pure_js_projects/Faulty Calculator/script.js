

let random = Math.floor(Math.random() * 100)
console.log(random)

let a = prompt("Enter first number?")
let b = prompt("Enter the arithmetic symbole?")
let c = prompt("Enter second number?")

let obj = {
    '-': '/',
    '+': '-',
    '*': '+',
    '/': '**',
}

if (random > 10) {
    // Provides correct output
    console.log(a, b, c)
    alert(`The require output is ${eval(`${a} ${b} ${c}`)}`);
}
else {
    // provide wrong output
    b = obj[b];
    console.log(a, b, c);
    alert(`The require output is ${eval(`${a} ${b} ${c}`)}`);


}