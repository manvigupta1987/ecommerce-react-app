import WithSpinner from './with-spinner.component';
import {shallow} from 'enzyme';
import Spinner from '../spinner/spinner.component';
import React from 'react'

describe('with Spinner component rendering', ()=> {
  const TestComponent = () => <div className='test' />;
  const WrappedComponent = WithSpinner(TestComponent)
  it('if loading is true', ()=> {
    const wrapper = shallow(<WrappedComponent isLoading={true} />)
    expect(wrapper.exists(Spinner)).toBe(true);
  })

  it('if loading is true', ()=> {
    const wrapper = shallow(<WrappedComponent isLoading={true} />)
    expect(wrapper.exists(TestComponent)).toBe(false);
  })

  it('if loading is false', ()=> {
    const wrapper = shallow(<WrappedComponent isLoading={false} />)
    expect(wrapper.exists(TestComponent)).toBe(true);
  })
})