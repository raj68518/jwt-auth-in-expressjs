var express = require('express');
var jwt = require('jsonwebtoken');
var verifyAuth = require('./secure/verify');
var router = express.Router();



  // post router for user login
router.post('/api/users/login',(req, res)=>{

    //checking here for hard coded email and password is matching or not
    if (req.body.email === process.env.EMAIL_ID && req.body.password === process.env.PASSWORD) {

        // jwt token generate here
        const token = jwt.sign({_id: 1}, process.env.JWT_KEY, {expiresIn: "30s"});

        // token is empty returnnig message
        if(!token) return res.status(401).send('token is empty');

        // sending jwt Auth token to header and body
        res.header("auth-token", token).send(token);
    }
    
});

// post router init and checking for user is correct or not using verifyAuth middleware
router.get('/api/post',verifyAuth, (req, res) =>{
    //sending res for if user is authenticated
    res.send('access allowed');
});



module.exports = router;