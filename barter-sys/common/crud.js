var constant=require("../common/config/constants");
var DB= require("../common/config/DB");
var mysql=DB.mysql();


class CrudClass {
     
    constructor() {

    }
    
     insert(table_name,value,callback)
    {    
        
        let table="INSERT INTO "+table_name
        
          mysql.query(table+value, function (err, rows, fields) {
            if (err) 
            {
               callback({status:401,response_data:err,message:constant.error_message.api_error})
            }else
            {
                callback({status:200,response_data:rows,message:constant.database_messag.inserted})
            }
          })

          
    }


    update(table_name,query,callback)
    {
      
      let table=`UPDATE ${table_name} SET`
         
             mysql.query(table+query, function (err, rows, fields) {
            if (err) 
            {
               callback({status:401,response_data:err,message:constant.error_message.api_error})
            }
            else
            {
                callback({status:200,response_data:rows,message:constant.database_messag.updated})
            }

          })
    }

    fetch(table_name,column,query,callback)
    { 
        let table=`select ${column} from ${table_name}`
         
             mysql.query(table+query, function (err, rows, fields) {
            if (err) 
            {
               callback({status:401,response_data:err,message:constant.error_message.api_error})
            }
            else
            {
                callback({status:200,response_data:rows,message:constant.database_messag.fetch})
            }

          })

    }


    delete(table_name,column,query,callback)
    { 
        let table=`DELETE ${column} from ${table_name}`
         
             mysql.query(table+query, function (err, rows, fields) {
            if (err) 
            {
               callback({status:401,response_data:err,message:constant.error_message.api_error})
            }
            else
            {
                callback({status:200,response_data:rows,message:constant.database_messag.delete})
            }

          })

    }
}



exports.Crud= new CrudClass();


