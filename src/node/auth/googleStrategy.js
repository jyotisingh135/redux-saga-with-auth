var googleStrategy = require('passport-google-oauth').OAuth2Strategy;
let student=require('../models/student-model').student;
module.exports=(passport)=> {
  passport.use(new googleStrategy({
    'clientID'      :'750862283349-t6ca483vt4hjgelbqku807gd21r5tnds.apps.googleusercontent.com',// your App ID
    'clientSecret'  :'30zGh3PAf47T8wUDMr1D06gH', // your App Secret
    'callbackURL'   :'http://localhost:3001/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
      // asynchronous // Event Loop
      //console.log(profile);

      //find the user in the database based on their facebook id
    student.findOne({'google.id': profile.id}, (err, user) => {
        if (err) return done(err);

        // if the user is found, then log them in
        if (user) {
          //console.log('usseeecgsdjcgfdsfgdfc', user);
          token=accessToken;
          console.log("Access Token",accessToken);
          return done(null, user); // user found, return that user
        } else {
          // if there is no user found with that facebook id, create them
          token=accessToken;
          console.log("Access Token",accessToken);
          var newUser = new student({
            google:{
            id: profile.id,
            token: accessToken,
            name: profile.displayName,
            email: profile.emails[0].value
          }});
          console.log('new usser', newUser);

          // save our user to the database
          newUser.save().then((doc) => {
           // console.log("Saved User :: = " + doc);
            return doc;
          }).catch((err) => {
           // console.log("User Error :: = " + err);
            return err;
          });
        }
      });
    }
  ));
}