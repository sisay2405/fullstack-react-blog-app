const mongoose = require('mongoose');

// Each schema maps to a MongoDB collection and defines 
// the shape of the documents within that collection.
const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type:  String
    }

},{
    timestamps: true,
    collection: 'users'
})


module.exports = mongoose.model('Users', userSchema)