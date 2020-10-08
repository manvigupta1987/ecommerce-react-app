import React from 'react';
import './checkout.styles.scss'
// import { CartItem } from '../../components/cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems, selectCartTotalPrice} from '../../redux/cart/cart.selector.js';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component'

const Checkout = ({cartItems, totalPrice}) => {
  return(
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem = {cartItem}/>)
      }
      <div className= 'total'>
        <span>TOTAL: ${totalPrice}</span>
      </div>
      <div className='test-warning'>Please use the following credit card for payments* 
        <br/> 4242-4242-4242-4242 - Exp: 01/21 CVV: 123
      </div>
      <StripeButton price={totalPrice}/>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(Checkout)
