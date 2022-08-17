require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoSTRING = process.env.DATABASE_URL;
const publicRoutes = require('./routes/public.routes');
const privateRoutes = require('./routes/private.routes');
const register = require('./routes/register.route');
const login = require('./routes/login.route');
const jwt = require('jsonwebtoken');

mongoose.connect(mongoSTRING)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(express.json());
app.use(cors());
//************************************ public endpoints **************************************** // 
app.use('/api', publicRoutes);
// register
app.use('/register', register);
// login 
app.use('/login', login);

//**************************************** JWT Verfication ************************************** //
// Jwt verification checks to see if there is an authorization header with a valid jwt in it.
app.use(async function verifyJwt(req, res, next) {
    // no header in the request 
    if (!req.headers.authorization) {
      throw(401, 'Invalid authorization/request');
    }
  
    // splitting the sheme and token
    const [scheme, token] = req.headers.authorization.split(' ');
  
    // if scheme is not "Bearer" spit out error
    if (scheme !== 'Bearer') {
      throw(401, 'Invalid authorization');
    }
  
    // compare passed in token to saved token
    try {
      const payload = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = payload;
    } catch (err) {
      // token is invalid or is incorrect
      if (err.message && (err.message.toUpperCase() === 'INVALID TOKEN' || err.message.toUpperCase() === 'JWT EXPIRED')) {
        req.status = err.status || 500;
        req.body = err.message;
        req.app.emit('jwt-error', err, req);
      } else {
        throw((err.status || 500), err.message);
      }
      console.log(err)
    }
    // go to next route
    await next();
});

//************************************ public endpoints **************************************** // 
app.use('/api', privateRoutes)


app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})