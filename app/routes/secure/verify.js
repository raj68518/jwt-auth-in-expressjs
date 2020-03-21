var jwt = require('jsonwebtoken');

function verify(req, res, next) {
    // getting token from header
    var token = req.header("auth-token");
    // checking token is not correct then send status code and message
    if(!token) return res.status(402).send('no');
    // verifying token
    jwt.verify(token, process.env.JWT_KEY, (err, verify)=>{

        if(err){
            res.send(err.message)
        }
        if(verify) return next();
    })
    
}

module.exports = verify;