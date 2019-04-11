const express = require('express');
const app = express();
var http = require('http').Server(app);
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//DB 
var mysql = require('mysql');
var DB=require("./common/config/DB");






//Url
require('./Api/user_master/user_master')(app);
require("./Api/review/review")(app);



//Default url
app.use("/",function(req,res){
 // res.send("<h1>Welcome to barter system</h1>")
// res.json({'output':'You are using Api`s'});
})

//Port number
http.listen(4500, function(){
console.log('listening on *:4500');
   });
