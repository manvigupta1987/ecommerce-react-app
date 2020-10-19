
import React from 'react';
import { shallow } from 'enzyme';
import {FormInput} from './formInput.component'

describe('FormInput component testing', () => {
  let mockHandleChange;
  let wrapper;

  beforeEach(()=>{
    mockHandleChange = jest.fn();

    const mockProps = {
      label: 'email',
      value: '123@gmail.com',
      handleChange: mockHandleChange
    }

    wrapper = shallow(<FormInput {...mockProps} />)
  });

  it('FormInput Snapshot testing', ()=> {
    expect(wrapper).toMatchSnapshot();
  })

  it('expect to render Label when label is present', ()=> {
    expect(wrapper.exists('FormInputLabel')).toBe(true);
  })

  it('expect to render Nothing when label is not present', ()=> {
    const mockProps = {
      label: '',
      value: '123@gmail.com',
      handleChange: mockHandleChange
    }

    const wrapper = shallow(<FormInput {...mockProps} />)
    expect(wrapper.exists('FormInputLabel')).toBe(false);
  })

  it('expect to get called handleChange function when click happens', ()=> {
    wrapper.find('FormInputContainer').simulate('change')
    expect(mockHandleChange).toHaveBeenCalled();
  })
})