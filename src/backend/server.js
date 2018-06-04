let express=require('express');
let mongoose=require('mongoose');
let {router}=require('./route');
let bodyParser=require('body-parser');
let cors=require('cors');
let fileUpload=require('express-fileupload');
mongoose.connect('mongodb://localhost:27017/userDb',(err,db)=>{
  if(err)throw err;
  else
    console.log('connected to database');
});
let app=express();
app.use(express.static(__dirname+'/'));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());
router(app);
app.listen(3002,()=>{
  console.log('started server on port 3002');
});