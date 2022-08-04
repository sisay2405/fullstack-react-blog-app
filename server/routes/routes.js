const Post = require('../models/postSchema');
const Category = require('../models/categorySchema');
const express = require('express');

const router = express.Router()


//***********************Get All Request************************** 
// Fetches all the posts
router.get('/getAllPosts', async (req, res) => {
    try{
        // variable called data that will fetch our post information
        const data = await Post.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
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
//Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send(req.params.id)
// })
// router.get('/getOne/:id', async (req, res) => {
//     try{
//         const data = await Model.findById(req.params.id);
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

//Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })
//Update by ID Method
// router.patch('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await Model.findByIdAndUpdate(
//             id, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

//Delete by ID Method
router.delete('/deletePost/:id', async (req, res) => {
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

