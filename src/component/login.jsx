import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin} from '../actions/user-actions'
import {TextField,RaisedButton,Paper} from 'material-ui';
import ReactTransitions from 'react-transitions';
import 'react-transitions/dist/animations.css';
import {GoogleLogin} from 'react-google-login';
const style={
    width:600,
    marginTop:100,
    textAlign:'center',
    height:300
}
class Login extends Component{
  constructor (){
    super();
    this.state={
      user:{}
    }
  }
handleChange=(e)=>{
    let {value,name}=e.target;
    let {user}=this.state
    user[name]=value;
    this.setState({user});
}
handleLogin=(e)=>{
    e.preventDefault();
    this.props.userLogin(this.state.user);
  // .then((res)=>{
    //   if(res!==undefined){
    //     localStorage.setItem('user',res.email);
    //     this.props.history.push('/usercrud')
    //   }
    // })
}
componentWillReceiveProps(nextProps){
    debugger;
    if(nextProps.login){
      console.log('props',nextProps.login)
      localStorage.setItem('user',nextProps.login.token);
      this.props.history.push('/usercrud');
    }
    else{
      alert('Incorrect username or password');
    }

}
handleGmailLogin=()=>{
  localStorage.setItem('user')
}
  render(){
    const responseGoogle = (response) => {
      debugger;
      let datas = {
        fName: response.profileObj.givenName,
        lName: response.profileObj.familyName,
        gender: "female",
        dob: "02/02/1996",
        pic: response.profileObj.imageUrl,
        email: response.profileObj.email,
        socialUser: true
      };
     // this.props.history.push('/usercrud')
      // this.props.userRegistration(datas).then(() => {
      //   let user = {
      //     email: response.profileObj.email,
      //     subject: `Welcome ${response.profileObj.givenName + " " + response.profileObj.familyName} To The BlogSpot`,
      //     text: "Welcome To The Blog Spot This is Acknowledge Mail To The User",
      //   };
      //   this.sendMailOnGmailLogin(user);
      //   this.props.history.push('/home')
      // });
    };

    return(
      <div>
        <div align="center" >
          <Paper style={style}>
          <div>Login</div>
          <div>
            <TextField
              hintText='Username'
              floatingLabelText='Username'
              name='username'
              onChange={this.handleChange}
            />
          </div>
          <div>
            <TextField
              hintText='Password'
              floatingLabelText='Password'
              type='password'
              name='password'
              onChange={this.handleChange}
            />
          </div>
            <br/>
          <div>
            <ReactTransitions
              transition="move-to-left-move-from-right"
              width={ 600 }
              height={ 300 }
            >
            <RaisedButton
              label="Login"
              primary={true}
              onClick={this.handleLogin}
            />
            </ReactTransitions>
              {/*<GoogleLogin*/}
                {/*className="loginBtn loginBtn--google"*/}
                {/*clientId="750862283349-t6ca483vt4hjgelbqku807gd21r5tnds.apps.googleusercontent.com"*/}
                {/*buttonText="Login with Google"*/}
                {/*onSuccess={responseGoogle}*/}
                {/*onFailure={responseGoogle}*/}
              {/*/>*/}
            {/*<RaisedButton*/}
              {/*label="Github"*/}
              {/*primary={true}*/}
              {/*onClick={this.handleLogin}*/}
            {/*/>*/}

          </div>
          </Paper>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return({
    login:state.login
  })
}
const mapDispatchToProps=(dispatch)=>{
 return bindActionCreators({userLogin},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);