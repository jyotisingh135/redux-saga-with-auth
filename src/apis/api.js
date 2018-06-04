import axios from 'axios';
const url='http://localhost:3001/api/'
export const GetUser=()=>{
    return axios.get(url+'user').then(({data})=>{
      console.log('user data',data)
      return data;
    })
}
export const AddUser=(user)=>{
  debugger;
  return axios.post(url+'user',user.payload).then(({data})=>{
    console.log(data);
    return data;
  })
}
export const EditUser=(user)=>{
  let {payload}=user;
  return axios.post(url+`user/${payload._id}`,payload).then(({data})=>{
    return data;
  })
}
export const DeleteUser=(user)=>{
  let {payload}=user;
  console.log('payload',user);
  return axios.delete(url+`user/${payload._id}`).then(({data})=>{
    return data;
  })
}
export const UserLogin=(user)=>{
  debugger
  let {payload}=user;
  return axios.post(url+`login`,payload).then(({data})=>{
    console.log('payload',data);
    return data;
  })
}