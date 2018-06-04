let mongoose=require('mongoose');
let userSchema=new mongoose.Schema({
  local: {
    firstName:String,
    lastName: String,
    gender: String,
    profilePic:String,
    contactNo:Number,
    email:String,
    password:String,
    required:false
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
    required:false
  }
});
const user=mongoose.model('user',userSchema);
module.exports={user}