const exp = require('express');
const path = require('path');

let app = exp();
let port = 81;

//EXPRESS SPECIFIC STUFF
app.use(exp.urlencoded())
app.use('/static', exp.static('static'));

// Template engine as pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Our pug demo end point
app.get('/', (req, res) => {
    res.status(200).render('index.pug')
});

//send post
app.post('/', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`This application is run sucessfully on port ${port}`)
});
