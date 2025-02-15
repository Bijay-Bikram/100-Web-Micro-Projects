// let a=6;
let a = prompt("Enter the number:");
let b = [];

for (let index = 1; index <= a; index++) {
    // const element = a[index];
    b.unshift(index);
}

const fact = (a, b) => {
    return a * b
}
console.log(b.reduce(fact))