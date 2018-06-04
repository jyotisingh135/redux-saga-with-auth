import React,{Component} from 'react';
import {GetUser,DeleteUser,EditUser} from '../actions/user-actions';
import {Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Table,TableHeader,TableRow,TableRowColumn,TableBody,TextField,RadioButton,RadioButtonGroup,RaisedButton} from 'material-ui';
import {PopoverAnimationVertical} from 'material-ui/Popover'
import {bindActionCreators} from 'redux';
class UserCrud extends Component{
  constructor (){
    super();
    this.state={
      open:false,
      openState:false,
      El:'',
      user:[],
      pagenum:1,
      editData:{},
      limit:5
    }
  }
  toggle=()=>{
    this.setState({openState:!this.state.openState})
  }
  componentWillMount(){
    this.props.GetUser();
  }
  setOpen=(e)=>{
    this.setState({
      open:!this.state.open,
      El:e.target
    })
  }
  handleDelete=(v)=>{
    debugger;
    this.props.DeleteUser(v)
  }
  handleEdit=(v)=>{
    this.toggle();
    this.setState({editData:v},()=>console.log(this.state.editData))

    //this.props.EditUser(v)
  }
  render(){
      let last=this.state.limit*this.state.pagenum;
      let start=last-this.state.limit;
      let totalpages=this.props.user.length;
      let pageArr=[];
      for(let i=0;i<totalpages;i++){
        pageArr.push(i);
      }

    return(
      <div>
        <EditForm openState={this.state.openState} toggleState={this.toggle} edit={this.state.editData}/>
        <Table>
          <TableHeader displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>FirstName</TableRowColumn>
              <TableRowColumn>LastName</TableRowColumn>
              <TableRowColumn>Gender</TableRowColumn>
              <TableRowColumn>contactNo</TableRowColumn>
              <TableRowColumn>Email</TableRowColumn>
              <TableRowColumn>Actions</TableRowColumn>
            </TableRow>
          </TableHeader  >
          <TableBody
            displayRowCheckbox={false}>
            {this.props.user.map((v,i)=>{
              return(<TableRow>
                  <TableRowColumn>{v.firstName}</TableRowColumn>
                  <TableRowColumn>{v.lastName}</TableRowColumn>
                  <TableRowColumn>{v.gender}</TableRowColumn>
                  <TableRowColumn>{v.contactNo}</TableRowColumn>
                  <TableRowColumn>{v.email}</TableRowColumn>
                  <TableRowColumn>
                    <a href={'#'} onClick={()=>this.handleEdit(v)}><span className="glyphicon glyphicon-pencil"/></a>
                  </TableRowColumn>
                <TableRowColumn>
                  <a href={'#'} onClick={()=>this.handleDelete(v)}><span className="glyphicon glyphicon-trash"/></a>
                </TableRowColumn>
                </TableRow>)
            })}
          </TableBody>
        </Table>

      </div>
    )}
}
const EditForm=(props)=>{
  return(
    <div align="center">
    <Modal
    show={props.openState}
    onHide={()=>props.toggleState()}>
    <Modal.Header>
      Edit User
    </Modal.Header>
      <Modal.Body>
        <div>Register</div>
        <div align="center">
          <form onSubmit={this.handleRegister}>
            <div>
              <TextField
                hintText='FirstName'
                floatingLabelText='FirstName'
                name='firstName'
                onChange={this.handleChange}
                value={props.edit.firstName}
              />
            </div>
            <div>
              <TextField
                hintText='LastName'
                floatingLabelText='LastName'
                name='lastName'
                onChange={this.handleChange}
                value={props.edit.lastName}
              />
            </div>
            <div style={{display:'inline-block'}}>
              <RadioButtonGroup name='gender' style={{'width':'100px'}} onChange={this.handleChange}>
                <RadioButton
                  value='female'
                  label='female'
                />
                <RadioButton
                  value='male'
                  label='male'
                  onChange={this.handleChange}/>
              </RadioButtonGroup>
            </div>
            <div>
              <TextField
                hintText='ContactNo'
                floatingLabelText='ContactNo'
                type='number'
                name='contactNo'
                onChange={this.handleChange}
                value={props.edit.contactNo}
              />
            </div>
            <div>
              <TextField
                hintText='Email'
                floatingLabelText='Email'
                type='email'
                name='email'
                onChange={this.handleChange}
                value={props.edit.email}
              />
            </div>
            <div>
              <RaisedButton>
                <input type="file" name="profilePic" onChange={this.handleFileChange} />
              </RaisedButton>
            </div>
            <br/>
            <div style={{height:80}}>
              <RaisedButton label="Register" primary={true} type="submit"/>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
    </div>
  )
}
const mapStateToProps=(state)=> {
  return {
    user:state.user
  }
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({GetUser,DeleteUser,EditUser},dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(UserCrud);