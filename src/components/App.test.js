import React,{Component} from 'react';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

const app = shallow(<App />);

it('render correct', ()=>{
  expect(app).toMatchSnapshot();
});

it('initialize the state with empty list of gifts',()=>{
  expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking the `add` gift button',()=>{
  app.find('.btn-add').simulate('click');
  expect(app.state().gifts).toEqual([{id: 1}]);
});

it('adds a new gift to rendered list when clicking `add gift ` button',()=>{
  app.find('.btn-add').simulate('click');
  expect(app.find('.gift-list').children().length).toEqual(2);
});
