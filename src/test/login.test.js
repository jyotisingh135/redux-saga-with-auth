import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Login} from '../component/login';
import {MemoryRouter} from 'react-router-dom';
Enzyme.configure({adapter:new Adapter()});
const props={
  handleLogin:jest.fn(),
  handleChange:jest.fn()
}
describe('login component',()=>{
  let component,inst;
  beforeEach(()=>{
    component=mount(<Login {...props}/>);
    inst=component.instance();
    console.log(component);
  })
  it('should render componet',()=>{
    //console.log(component.html());
  })
})

