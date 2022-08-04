require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoSTRING = process.env.DATABASE_URL 
const routes = require('./routes/routes')

// creating a connection with MongoDB using mongoose
// if error occurs console log error
// if it does connect console log Database connected 
mongoose.connect(mongoSTRING)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

//********************** middleware *******************/
// stating we are using express for our app other middleware we need
const app = express();
app.use(express.json());
app.use(cors());
// /api routes us to our routes (GET,PUT,DELETE)
app.use('/api', routes)

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})