const Post = require('../models/post.model');
const Category = require('../models/category.model');
const express = require('express');
const router = express.Router()

// ********************************** Private Routes ********************************
// add category 
router.post('/addCategoryPost', async (req, res) => {
    const post = new Category({
        categoryType: req.body.categoryType,
    })

    try {
        await post.save()
        .then(response => {
            res.status(200).json({
                success: true,
                result: response
            })
        })
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Post Method
router.post('/addPost', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        text: req.body.text,
        category: req.body.category,
        author: req.body.author
    })
    try {
        await post.save()
        .then(response => {
            res.status(200).json({
                success: true,
                result: response
            })
        })
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/updatePost/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Post.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Delete by ID Method
router.delete('/deleteId/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Post.findByIdAndDelete(id)
        res.send(`Document with ${data.title} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router;

