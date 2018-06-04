let {user}=require('../models/usermodel');
exports.addUser=(req,res)=>{
  let body=req.body.user;
  console.log('body data',JSON.parse(body));
  let newUser=new user(body);



  let file=req.files.profilePic;
  console.log('file',req.files);






  newUser.profilePic='dfds';
  newUser.save().then((result)=>{
    res.send(result);
})
// file.mv('./upload/'+file.name,(err)=>{
//  if(err)throw err;
// })
}
exports.getUser=(req,res)=>{
  user.find({flag:false}).then((result)=>{
    console.log(result);
   res.send(result);
  }).catch((e)=>{
    res.send(e);
  })
}
exports.editUser=(req,res)=>{
  user.findById(req.params.id).then((result)=>{
    result.firstName=req.body.firstName,
      result.lastName=req.body.lastName,
        result.gender=req.body.gender,
          result.profilePic=req.body.profilePic,
            result.contactNo=req.body.contactNo,
              result.email=req.body.email,
                result.password=req.body.password
    console.log(result);
    result.save().then((response)=>{
     res.send(response);
    })
  })

}
exports.deleteUser=(req,res)=>{
  user.findByIdAndUpdate(req.params.id,{'$set':{flag:true}}).then((result)=>{
    console.log('data',result);
    res.send(result);
  })
}
exports.login=(req,res)=>{
 user.find({email:req.body.username,password:req.body.password}).then((result)=>{
  res.send(result);
 })
}



