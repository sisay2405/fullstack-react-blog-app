const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { createJWT } = require('../utils/auth');

//If your login request is via a user supplying a username and password then a POST is preferable, 
//as details will be sent in the HTTP messages body rather than the URL
router.post('/', async (req , res) => {
    try {
        //console.log(`request body:${JSON.stringify(req.body,null,2)}`);
        // destructure request body 
        let { email, password } = req.body;

        // finding if email exist
        User.findOne({ email: email }).then(async user => {
            // if user does not exist return not found
            if (!user) {
                return res.status(404).json({
                errors: [{ user: "not found" }],
                });
            } else {
                // if user exist decript encripted password and compare passwords
                const compare = await bcrypt.compare(password, user.password);

                // if passwords don't match return message that password is incorrect
                if (!compare) {
                return res.status(400).json({ errors: [{ password:"incorrect" }] });
                }

                // creating jwt token
                const access_token = createJWT(user.email, '1h');

                // respond to the frontend with the JWT key
                res.json({
                    success: true,
                    result: user,
                    token: access_token
                });
            }  
        }).catch(err => {
            // error handling for email stage 
            res.status(500).json('Email error:', { errors: err });
        });
    }catch (err) {
        // error handling for login state 
        console.log('Login error:', err)
    }
})

module.exports = router;