import React,{Component} from 'react';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App',()=>{

  const app = shallow(<App />)

  it('render correct', ()=>{
    expect(app).toMatchSnapshot();
  });

  it('initialize the state with empty list of gifts',()=>{
    expect(app.state().gifts).toEqual([]);
  });

  describe('when click the `add gift ` button',()=>{
    beforeEach(()=>{
      app.find('.btn-add').simulate('click');
    })
    afterEach(()=>{
      app.setState({gifts:[]});
    })
    it('adds a new gift to `state`  ',()=>{
      expect(app.state().gifts).toEqual([{id: 1}]);
    });


    it('adds a new gift to rendered list ',()=>{
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
  })


});
