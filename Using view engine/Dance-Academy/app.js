
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
const app = express();
let port = 80;

//Mongoose Schema
var contactSchema = new mongoose.Schema({
    name: String,
    password: String,
    gmail: String,
    phone: Number,
    address: String
});

var Contact = mongoose.model('Contact', contactSchema);

//EXPRESS SPECIFIC STUFF
app.use(express.urlencoded())
app.use('/static', express.static('public'))


//PUG CONFIGURATION
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the Template directory

// END POINTS
app.get('/', (req, res) => {
    res.status(200).render('home.pug')
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug')
});

app.post('/contact', (req, res) => {
    var myData = new Contact(req.body)
    myData.save().then(() => {
        res.send("This item has been save to the DataBase.")
    }).catch(() => {
        res.status(400).send("Items was not saved to the database")
    });
    // res.status(200).render('contact.pug')
});

// Start Server
app.listen(port, () => { // Most necessary to run your port
    console.log(`This application started sucessfully on  port https://localhost${port}`);
});

