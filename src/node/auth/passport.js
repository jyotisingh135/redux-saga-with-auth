var localStratergy=require('passport-local').Strategy;
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
var student=require('../models/usermodel').user;
module.exports=(passport)=>{
  passport.serializeUser((user,done)=>{
    done(null,user);
  });
  passport.deserializeUser((user,done)=>{
    done(null,user);
  });
  passport.use(new localStratergy((username,password,done)=>{
    console.log('in passport');
    student.findOne({email:username},(err,user)=>{
      console.log(err)
      console.log(user)
      if(err){return done(err);}
      if(!user){return done(null,false,{message:'incorrect user'});}
      else if(user.password!==password) {
        console.log('password wrong',password,'userpassword',user)
        return done(null,false,{message:'incorrect password'});
      }
      else{
        console.log('in else')
        var access = 'auth';
        token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123',{expiresIn:'2h'}).toString();
        console.log('user',user,token);
        return done(null,user);
      }
    });
  }));
}

