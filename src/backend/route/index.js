let user=require('../controller');

exports.router=(app)=>{
  app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/');
  })

  app.post('/api/user',user.addUser);
  app.get('/api/user',user.getUser);

  app.put('/api/user/:id',user.editUser);
  app.delete('/api/user/:id',user.deleteUser);
  app.post('/api/login',user.login);
}
