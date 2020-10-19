import React from 'react';
import { shallow } from 'enzyme';
import {Header} from './header.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

describe('Header Component', ()=> {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      currentUser : {
        uid: '123'
      },
      hiddenCart: true
    }
    wrapper = shallow(<Header {...mockProps} />)
  })

  it('header component snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('expect to render sign out text when user is present', ()=> {
    expect(wrapper.find('OptionLink').at(2).text()).toEqual('SIGN OUT');
  })

  it('expect to render sign in text when user is null', ()=> {
    const mockProps1 = {
      currentUser : null,
      hiddenCart: true
    }
    const wrapper2 = shallow(<Header {...mockProps1} />)
    expect(wrapper2.find('OptionLink').at(2).text()).toEqual('SIGN IN');
  })

  it('expect to render nothing when hidden is true', ()=> {
    expect(wrapper.exists(CartDropDown)).toBe(false);
  })

  it('expect to render CartDropDown when hidden is false', ()=> {
    const mockProps1 = {
      currentUser : null,
      hiddenCart: false
    }
    const wrapper2 = shallow(<Header {...mockProps1} />)
    expect(wrapper2.exists(CartDropDown)).toBe(true);
  })



})