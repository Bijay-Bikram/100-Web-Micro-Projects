function randomWord(x, y, z) {
    let r = Math.floor(Math.random() * 3)
    if (r == 0) {
        return x
    }
    else if (r == 1) {
        return y
    }
    else {
        return z
    }
}
let a = randomWord("Crazy", "Amazing", "Fire")
let b = randomWord("Engine", "Food", "Garments")
let c = randomWord("Bros", "Limited", "Hub")
let businessName = a.concat(b, c)
console.log(businessName)