import { Dummy } from "./model/dummy.js";
import mongoose from "mongoose";

await mongoose.connect('mongodb://localhost:27017/Dummy')


let btn = document.getElementById('btn')
btn.addEventListener('click', async () => {
    const dum = new Dummy({ name: "Bijay", salary: 45000, language: "JS", city: "Singapur" })
    dum.save()
    // if (Dummy.count() > 0) {
    //     await Dummy.deleteMany({})
    // }
    // else {
    //     let data = new Dummy({name:})
    // }
    console.log("Ha Ha");

})

