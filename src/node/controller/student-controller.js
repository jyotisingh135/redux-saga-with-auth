let {student} =require('../models/student-model');
let fs=require('fs');
let dir='./tmp';
exports.addStudent=(req,res)=>{
  let newstudent=new student(req.body);
  newstudent.save().then((result)=>{
    res.send(result);
  })

}
exports.getStudent=(req,res)=> {
fs.mkdirSync(dir);
  student.find({}).then((result) => {
    res.send(result);
  })
}
exports.deleteStudent=(req,res)=>{
  student.findOneAndUpdate({_id:req.id})
}
exports.login=(req,res)=> {
  student.find({email:req.body.email,password:req.body.password}).then((result) => {
  // console.log('user',result);
    res.send(result);
  })
}
