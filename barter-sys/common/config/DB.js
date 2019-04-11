var mysql = require('mysql');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//UAT - testing server configurations . 
module.exports={
  mysql:()=>{
    var connection = mysql.createConnection({
      host     : '192.168.1.3',
      user     : 'barter',
      password : 'root',
      database : 'barter_system'
    });

     return connection
  },
  mongo: async ()=>{
   let database,DBobject;
   
  await mongoose.connect("mongodb://27.54.170.186:27017/barter_system",{ useNewUrlParser: true })
  .then((db)=>{
     database = db;
      console.log('successfully connected');
  
    }); 
    return database;
 
  }
 
}
// localhost configurations ..
module.exports={
  mysql:()=>{
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'barter_system'
    });

     return connection
  },
  mongo: async ()=>{
   let database,DBobject;
   
  await mongoose.connect("mongodb://localhost:27017/barter_system",{ useNewUrlParser: true })
  .then((db)=>{
     database = db;
      console.log('successfully connected');
  
    }); 
    return database;
 
  }
 
}