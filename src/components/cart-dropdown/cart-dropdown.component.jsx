import React from 'react';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.action';

import {withRouter} from 'react-router-dom'

// connect HOC passes dispatch as a prop if we dont supply mapsDispatchToProps to connect as a second parameter. 
export const CartDropDown = ({cartItems, history, dispatch}) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        { cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
          :
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        }
      </CartItemsContainer>
      <CartDropdownButton onClick={()=> { 
              history.push('/checkout')
              dispatch(toggleCartHidden())
            }}>
            Go To Checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));