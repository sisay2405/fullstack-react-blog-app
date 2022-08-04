const mongoose = require('mongoose');

// Each schema maps to a MongoDB collection and defines 
// the shape of the documents within that collection.
const postSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    text: {
        required: true,
        type: Number
    },
    category: {
        required: true,
        type: Number
    },
    author: {
        required: false,
        type: Number
    }

},{
    timestamps: true,
    collection: 'posts'
})


module.exports = mongoose.model('Posts', postSchema)