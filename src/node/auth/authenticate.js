var {student} =require('../models/student-model');
var authenticate=(req,res,next)=>{
  let token=req.headers['x-auth'];

  student.findByToken(token).then((student)=>{
    if(!student){
      console.log('in authenticate');
      return new Promise.reject();
    }
    console.log('data',user,token);
    req.user=student;
    req.token=token;
    next();

  }).catch((e)=>{
    res.status(401).send();
  });
}
module.exports={authenticate};