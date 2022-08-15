const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// register user  
router.post('/', async (req , res) => {
  try {
    // Hashes the password
    const hash = await bcrypt.hash(req.body.password, 10);
    // putting new user info into User model
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
    });

    try {
        await user.save()
        .then(response => {
            res.status(200).json({
                success: true,
                result: response
            })
        })
    } catch (error) {
      console.log('error', error)
    }

    const encodedUser = jwt.sign(
      { 
        userId: user.insertId,
        ...req.body
      },
      process.env.JWT_KEY
    );

    res.json(encodedUser);
  } catch (err) {
    console.log('err', err)
  }
})

module.exports = router;