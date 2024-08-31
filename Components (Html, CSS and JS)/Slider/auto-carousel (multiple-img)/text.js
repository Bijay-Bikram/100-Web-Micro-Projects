
let arr = [1, 2, 3, 4, 5, 6]
arr.slice(-3).reverse().forEach(el => arr.unshift(el))
console.log(arr);
