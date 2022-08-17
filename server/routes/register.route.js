const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { createJWT } = require('../utils/auth');

// register user  
router.post('/', async (req , res) => {
  try {

    let { email, password, username } = req.body;
    // Hashes the password
    const hash = await bcrypt.hash(password, 10);
    
    // putting new user info into User model
    const user = new User({
        username: username,
        email: email,
        password: hash
    });

    // add new user to mongoDB
    try {
        await user.save()
        .then(response => {
          // create jwt key 
          let access_token = createJWT(email, '1h');
          // // respond to the front end with JWT key and response
          res.status(200).json({
              success: true, 
              result: response,
              token: access_token
          });
        })
    } catch (error) {
      console.log('error', error)
    }
  } catch (err) {
    console.log('Registration error', err)
  }
})

module.exports = router;