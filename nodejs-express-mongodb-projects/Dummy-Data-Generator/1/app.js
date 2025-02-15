import express from "express";
import { Dummy } from "./model/dummy.js";
import mongoose from "mongoose";
const app = express();
const port = 2000;

await mongoose.connect('mongodb://localhost:27017/Dummy')



app.use(express.static('static'))

app.get('/', (req, res) => {
    const dum = new Dummy({ name: "Bijay", salary: 45000, language: "JS", city: "Singapur" })
    dum.save()
    res.render('index')
})

app.listen(port, () => {
    console.log(`Running in the server http://localhost:${port}`);
})