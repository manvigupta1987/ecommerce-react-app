import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.action';

import {withRouter} from 'react-router-dom'

// connect HOC passes dispatch as a prop if we dont supply mapsDispatchToProps to connect as a second parameter. 
const CartDropDown = ({cartItems, history, dispatch}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        { cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
          :
          <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={()=>{ 
              history.push('/checkout')
              dispatch(toggleCartHidden())
            }}
      >Go To Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));