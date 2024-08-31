const express = require("express")
const mongoose = require("mongoose")
const Employee = require("./models/employee.js")
const app = express();
const port = 2000;

mongoose.connect('mongodb://localhost:27017/company')
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

const random = (arr) => {
    let rno = Math.floor(Math.random() * arr.length - 1)
    return arr[rno]
}

app.get('/generate', async (req, res) => {
    await Employee.deleteMany({})
    let randomNames = ['Hari', 'Yadav', 'John', 'Jack', 'Mariya']
    let randomLang = ['Python', 'JS', 'Java', 'C++', 'Kotlin']
    let randomCity = ['NewWork', 'London', 'Delhi', 'Kapilbustu']
    for (let index = 0; index < 10; index++) {

        let e = await Employee.create({
            name: random(randomNames),
            salary: Math.floor(Math.random() * 4500000),
            language: random(randomLang),
            city: random(randomCity),
            isManager: (Math.random() > 0.3) ? true : false,
        })
        console.log(e);

        // await e.save()
    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Running in the server http://localhost:${port}`);

})