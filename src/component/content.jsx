import React,{Component} from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Home from './home';
import Register from './register';
import Login from './login';
import UserCrud from './userCrud';
const PrivateRoute = ({...props}) => {
  console.log('usercrud')
  debugger
  let access=false;
  let token = localStorage.getItem('user');
  let decoded;
  try {
    if(token === undefined){
      access = false;
    }
    else
    {
      decoded = jwt_decode(token);
    }
  }catch(err){
    console.log(err);
  }
  let currentTime = Math.floor(Date.now()/1000);
  if(decoded === undefined || decoded.exp === undefined){
    localStorage.removeItem('user');
    access = false;
  }
  else
  {
    if (decoded.exp < currentTime) {
      access = false;
      localStorage.removeItem('user');
    }
    else {
      access = true;
    }
  }
  return (access) ?
    <div>
      <Route {...props}/>
    </div>
    :
    <div>
      <Redirect to="/login"/>
    </div>
}
const PublicRoute=({...props})=>{
  return(!localStorage.getItem('user'))
}
const Content=()=>(
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/usercrud' component={UserCrud}/>
    </Switch>
  </div>
);
export default withRouter(Content);