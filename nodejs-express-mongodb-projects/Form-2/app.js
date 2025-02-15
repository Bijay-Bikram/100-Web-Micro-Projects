const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;

app.use(express.urlencoded())//To submit form

//For serving static files
app.use('/static', express.static('static'));

//Template engine
app.set('view engine', 'pug')

//Set the view directory
app.set('views', path.join(__dirname, 'views'))


app.get('/demo', (req, res) => {
    res.status(260).render('demo', { title: 'Hey', message: 'Hello there, how are you' })
})

app.get('/', (req, res) => {
    const para = "This is content"
    const titlecont = { "title": "PUG", content: para }
    res.status(200).render('index.pug');

})

app.post('/', (req, res) => {
    nam = req.body.name
    gmail = req.body.gmail
    password = req.body.password
    gender = req.body.gender
    comment = req.body.comment
    fs.writeFileSync('form.txt', `Name =${nam} Gmail :${gmail} Password :${password} Gender :${gender} Comment :${comment}`)
})

app.listen(port, () => {
    console.log(`Server successfully run on http://localhost${port}`)
})