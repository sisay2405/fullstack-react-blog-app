const mongoose = require('mongoose');

// Each schema maps to a MongoDB collection and defines 
// the shape of the documents within that collection.
const categorySchema = new mongoose.Schema({
    categoryType: {
        required: true,
        type: String
    }

},{
    timestamps: true,
    collection: 'category'
})


module.exports = mongoose.model('Category', categorySchema)