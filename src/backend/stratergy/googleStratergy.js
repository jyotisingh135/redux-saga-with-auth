var googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport= require('passport');
const {User}= require('./../model/user.model');
var findOrCreate = require('mongoose-findorcreate');

passport.use(new googleStrategy({
    'googleAuth' : {
      'clientID'      :'750862283349-t6ca483vt4hjgelbqku807gd21r5tnds.apps.googleusercontent.com',// your App ID
      'clientSecret'  :'30zGh3PAf47T8wUDMr1D06gH', // your App Secret
      'callbackURL'   :'http://localhost:3001/auth/google/callback' // your callbakcUrl
    }
  },
  function (token,tokenSecret, profile, done) {
    //console.log(profile);
    User.findOrCreate({username : profile.emails[0].value},
      function (err,user) {
        storeToken= token;
        User.findOneAndUpdate({username:user.username, password:user.password},{
          $set:{
            token:storeToken
          }
        }).then((docs)=>{
          return done(err,user);
        }).catch((ex)=>{
          return done(null,false);
        })

      })
  }
))

module.exports=passport