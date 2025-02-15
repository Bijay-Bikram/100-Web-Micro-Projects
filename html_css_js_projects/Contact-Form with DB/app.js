const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/PraForm');
const path = require('path')
const app = express();
const port = 80;

app.use(express.urlencoded());

//Mongoose spcific section
const kittyForm = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Form = mongoose.model('Form', kittyForm);

//End points
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})

app.post('/', (req, res) => {
    const Data = new Form(req.body)
    Data.save()
})

app.listen(port, () => {
    console.log(`Server loaded on https://localhost${port}`);
})