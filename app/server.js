var express = require('express');
var bodyParser = require('body-parser');
var env = require("dotenv").config();
var app = express();
var users = require('./routes/user');


if(env.error) return console.log("No Enviourment variable");;

// port init 
app.set('port', process.env.PORT||2000);



// body parser are init for parse json and url encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// main router is init
app.get("/",(req, res)=>{
    res.send('hi');

})

// user auth router is here
app.use(users);


// server run 
app.listen(app.get('port'), (req, res)=>{
    console.log(app.get('port'));
    
})