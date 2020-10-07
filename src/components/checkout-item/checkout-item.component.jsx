import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {removeItems} from '../../redux/cart/cart.action'


const CheckoutItem = ({cartItem, dispatch}) => {
  const {name, imageUrl, price, quantity} = cartItem
  return (
    <div className="checkout-item">
      <div className='image-container'>
        <img src={imageUrl} alt='product item'/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=>{dispatch(removeItems(cartItem))}}>&#10005;</div>
    </div>
  )
}

export default connect()(CheckoutItem);