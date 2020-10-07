import React from 'react';
import './checkout.styles.scss'
// import { CartItem } from '../../components/cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems, selectCartTotalPrice} from '../../redux/cart/cart.selector.js';
import {createStructuredSelector} from 'reselect';

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
        cartItems.map(cartItem => cartItem.name)
      }
      <div className= 'total'>
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(Checkout)
