import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import  {toggleCartHidden} from '../../redux/cart/cart.action';
import {connect} from 'react-redux';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
  );
}

// used to dispatch an action to the reducer.
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
//destructing the state.cart.cartItems
const mapStateToProps = ({cart: {cartItems}}) => ({
  itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity , 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);