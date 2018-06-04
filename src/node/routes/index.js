
const student=require('../controller/student-controller');
const user=require('../controller/userController');
const {authenticate} =require('../auth/authenticate');
exports.route=(app,passport)=> {
  app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/');
  })

  /////////////user//////////////////
  app.post('/api/user',user.addUser);
  app.get('/api/user',authenticate,user.getUser);
  //
  app.put('/api/user/:id',user.editUser);
  app.delete('/api/user/:id',user.deleteUser);

  ////////////////login/////////////
  app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/fail',
  }));

  app.get('/', (req, res) => {
    res.send({'token': token});
  })
  app.get('/fail', (req, res) => {
    res.send({'token': ''});
  })
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile','email'] }));
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect:'http://localhost:3000/usercrud',
      failureRedirect: '/fail' }),
    // function(req, res) {
    //   res.redirect('/');
    //
    // }
    );
  app.get('/r',(req,res)=>{
    console.log('gmail',token);
    res.redirect()
  })
  ////////////////////////////////////

  /////student/////
  app.get('/api/student', student.getStudent);
  app.post('/api/student', student.addStudent);

  /////////faculty//////////////
  // app.get('/api/event', event.getEvent);
  // app.post('/api/event', event.addEvent);


}