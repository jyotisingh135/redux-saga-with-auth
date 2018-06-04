let mongoose=require('mongoose');
let studentSchema=new mongoose.Schema({
  local: {
    studentName:String,
    class: String,
    email: String,
    password:String,
    gender:String,
    contactNo:Number,
    required:false
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
    required:false
  }
})
studentSchema.statics.findByToken=function(token){
  var user=this;
  var decode;
  try{
    decode=jwt.verify(token,'abc123');
  }catch(e){
    return new Promise((resolve,reject)=>{
      reject();
    })
  }
  return user.findOne({
    _id:decode._id
  });
}



let student=mongoose.model('student',studentSchema);
module.exports={student};

