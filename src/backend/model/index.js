let mongoose=require('mongoose');
let userSchema=new mongoose.Schema({
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true
  },
  contactNo:{
    type:Number,
    required:true
  },
  profilePic:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  flag:{
    type:String,
    default:false
  }
});
let user=mongoose.model('user',userSchema);
module.exports={user};