import React from 'react';
import { shallow } from 'enzyme';

import { CheckoutItem } from './checkout-item.component.jsx'
import {removeItems, addItems, removeSingleItem} from '../../redux/cart/cart.action'

describe('CheckoutItem component', () => {
  let wrapper;
  let mockDispatch;
  const mockCartItem = [{ id: 1 }];

  beforeEach(() => {
    mockDispatch = jest.fn();
    const mockProps = {
      cartItem: mockCartItem,
      dispatch: mockDispatch
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it('should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call dispatch with removeSingleItem when button is clicked', () => {
    let payload = [{id:1}]
    wrapper.find('.arrow').at(0).simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith(removeSingleItem(payload));
  });

  it('should call dispatch with addItems when button is clicked', () => {
    let payload = [{id:1}]
    wrapper.find('.arrow').at(1).simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith(addItems(payload));
  });

  it('should call dispatch with removeItems when button is clicked', () => {
    let payload = [{id:1}]
    wrapper.find('.remove-button').simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith(removeItems(payload));
  });
});