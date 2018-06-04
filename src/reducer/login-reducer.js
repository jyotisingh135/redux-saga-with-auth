export default (state=[],action)=>{
  debugger;
  switch(action.type){
    case 'UserLogin':
      return action.users;
    case 'UserLogout':
      return action.users;
    default:
      return state;
  }
}