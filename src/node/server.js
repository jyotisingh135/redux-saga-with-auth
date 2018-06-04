let mongoose=require('mongoose');
let bodyParser=require('body-parser');
let express=require('express');
let {route}=require('./routes')
let cors=require('cors');
let fileUpload=require('express-fileupload');
let passport=require('passport');
global.token='';
//mongoose.connect("mongodb://localhost:27017");
mongoose.connect("mongodb://localhost:27017/userDb");
let db=mongoose.connection;
db.once('open',()=>{
  console.log('connected to db')
})
let app=express();
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());
app.use(passport.initialize());
app.use(express.static(__dirname+'/'));
require('./auth/passport')(passport);
require('./auth/googleStrategy')(passport);
route(app,passport);
app.listen(3001,()=>{
  console.log('connected to server');
})


