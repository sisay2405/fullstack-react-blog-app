const Post = require('../models/post.model');
const Category = require('../models/category.model');
const express = require('express');
const router = express.Router()
 
// ***************************** Public Routes ***********************************
//Fetches all the posts
router.get('/getAllPosts', async (req, res) => {
    try{
        const data = await Post.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Fetch all categories
router.get('/getAllCategory', async (req, res) => {
    try{
        const data = await Category.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Filter by category
router.get('/category/:category', async (req, res) => {
    try {
        const categoryName = req.params.category;
        const result = await Post.find({category: categoryName});
        res.send(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Post.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

