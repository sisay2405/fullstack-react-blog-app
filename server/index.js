require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
cors = require
=======
const cors = require('cors');
>>>>>>> main
const mongoSTRING = process.env.DATABASE_URL 
const routes = require('./routes/routes')

mongoose.connect(mongoSTRING)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', routes)
<<<<<<< HEAD
app.use(cors)
app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)
=======

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
>>>>>>> main
})