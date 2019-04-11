var constant=require("../../common/config/constants");
var db=require("../../common/config/DB");
var mongo=db.mongo();
module.exports=  function(app,database){
    
    app.post(constant.url.review_insert,function(req,res){
        console.log(mongo.then((value)=>{console.log(value)}));
     //  console.log(mongo);
           res.json({reviews:'successfully fetched'});
      })

}


