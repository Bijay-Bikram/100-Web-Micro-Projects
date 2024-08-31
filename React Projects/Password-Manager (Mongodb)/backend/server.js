
//Importing module/package
const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser')
const cors = require('cors')

dotenv.config()

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'pwManager';
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())


client.connect();

// Get all the password
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray(); //Display all data from collection
    res.json(findResult)
})

//Save the password
app.post('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName); //Creating db
    const collection = db.collection('passwords'); //Creating collection
    const saveData = await collection.insertOne(password);
    res.send({ success: true, result: saveData })
})

//Delete the password by id
app.delete('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName); //Creating db
    const collection = db.collection('passwords'); //Creating collection
    const deleteData = await collection.deleteOne(password);
    res.send({ success: true, result: deleteData })
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})