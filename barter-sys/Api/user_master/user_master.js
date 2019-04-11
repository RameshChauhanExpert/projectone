var constant=require("../../common/config/constants");
var {Crud} =require("../../common/crud");

var db=require("../../common/config/DB");
var a=db.mongo();



module.exports=function(app){

    app.post(constant.url.user_create,function(req,res){
        
         let {first_name,last_name,mobile_number,address,store_title,store_email,store_mobile,store_address,owner_image,store_image,owner_description,user_type,create_at}=req.body;
         let value =` Values (Null,'${first_name}','${last_name}','${mobile_number}',Null,'${address}','${store_title}','${store_email}','${store_mobile}','${store_address}','${owner_image}','${store_image}','${owner_description}',NULL,'${user_type}','1','now()',NULL)`
            
          new Promise(function(resolve, reject) {
                        
            Crud.insert("user_master",value,(response_data)=>{
                            if(response_data.status==200)
                            {
                                resolve(response_data)
                            }else
                            {
                                reject(response_data)
                            }
                        })
                    })
                    .then(response=>{
                    res.json(response)
                    })
                    .catch(err=>{
                        res.json(err)
                    })
          
      

    })


    app.post(constant.url.user_update,function(req,res){
         let {user_id,first_name,last_name,mobile_number,address,store_title,store_email,store_mobile}=req.body
         let query=` first_name='${first_name}' where user_id='${user_id}'`; 
         new Promise(function(resolve, reject) {
            Crud.update("user_master",query,(response_data)=>{
                     if(response_data.status==200)
                     {
                         resolve(response_data)
                     }else
                     {
                         reject(response_data)
                     }
            })
         })
         .then(response=>{
            res.json(response)
         })
         .catch(err=>{
            
             res.json(err)
         })
         
    })


    app.post(constant.url.user_fetch,function(req,res){
        
             let{user_id}=req.body
             let query=` where user_id=${user_id}`
             new Promise(function(resolve, reject) {
                Crud.fetch("user_master","*",query,(response_data)=>{
                         if(response_data.status==200)
                         {
                             resolve(response_data)
                         }else
                         {
                             reject(response_data)
                         }
                })
             })
             .then(response=>{
                res.json(response)
             })
             .catch(err=>{
                
                 res.json(err)
             })
             
        })


        app.post(constant.url.user_delete,function(req,res){
        
            let{user_id}=req.body
            let query=` where user_id=${user_id}`
            new Promise(function(resolve, reject) {
               Crud.delete("user_master","",query,(response_data)=>{
                        if(response_data.status==200)
                        {
                            resolve(response_data)
                        }else
                        {
                            reject(response_data)
                        }
               })
            })
            .then(response=>{
               res.json(response)
            })
            .catch(err=>{
               
                res.json(err)
            })
            
       })


       app.get(constant.url.user_fetch_all,function(req,res){
        
        let{user_id}=req.body
        
        new Promise(function(resolve, reject) {
           Crud.fetch("user_master","*","",(response_data)=>{
                    if(response_data.status==200)
                    {
                        resolve(response_data)
                    }else
                    {
                        reject(response_data)
                    }
           })
        })
        .then(response=>{
           res.json(response)
        })
        .catch(err=>{
           
            res.json(err)
        })
        
   })

}