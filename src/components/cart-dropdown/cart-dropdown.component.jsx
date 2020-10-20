import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {CartItem} from '../cart-item/cart-item.component';
import {connect} from 'react-redux'


const CartDropDown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => <CartItem key={cartItem} item={cartItem}/>)}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
})
export default connect(mapStateToProps)(CartDropDown);