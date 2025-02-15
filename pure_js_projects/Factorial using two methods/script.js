//Factorial fo 6

//Method 1 : Using for loop
let f = 1;

for (let i = 6; i > 0; i--) {
    f = f * i;
}
console.log(`Factorial of 6 is ${f}`);



//Method 2 : Using for reduce function
let arr = [1, 2, 3, 4, 5, 6];

let Factorial = arr.reduce((n1, n2) => {
    return n1 * n2;
})
console.log(Factorial);

