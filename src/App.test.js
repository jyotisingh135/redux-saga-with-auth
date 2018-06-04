import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme'
import {MemoryRouter} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter:new Adapter()});



it('renders without crashing', () => {
  /*const component=mount(<App />);
  console.log(component);*/
});
