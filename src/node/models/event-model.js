let mongoose=require('mongoose');
let eventSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  Location:{
    type:String,
    required:true
  },
  eventDate:{
    type:Date,
    required:true
  }
})
let event=mongoose.model('event',eventSchema);
module.exports={event};

