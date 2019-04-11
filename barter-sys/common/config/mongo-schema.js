let mongoose = require('mongoose')

let chat_message  = new mongoose.Schema({
      user_id:Number,
      message:String,
      receiver:Number,
      create_at:{ type: Date, default: Date.now },
      read_time:{ type: Date, default: Date.now },
      read:Boolean
    })


  let product_review= new mongoose.Schema({
       user_id:Number,
       review:String,
       rating:Number,
       product_id:Number,
       create_at:{ type: Date, default: Date.now },
  })

  let store_review=new mongoose.Schema({
    user_id:Number,
    review:String,
    rating:Number,
    store_id:Number,
    create_at:{ type: Date, default: Date.now },
  })

  let notification=new mongoose.Schema({
      user_id:Number,
      message:String,
      receiver:Number,
      create_at:{ type: Date, default: Date.now },
      read:boolean
  })

  


