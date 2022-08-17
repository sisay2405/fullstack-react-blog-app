//we will make a method to sign a jwt token including our payload, expiry time, and token secret
const jwt = require("jsonwebtoken");

exports.createJWT = (email, duration) => {
    // payload it an object with email, userID, and duration(ms) on JWT key
   const payload = { email, duration };

   // sign the jwt token including our payload experation time and token secret
   return jwt.sign(payload, process.env.TOKEN_SECRET, {
     expiresIn: duration,
   });
};