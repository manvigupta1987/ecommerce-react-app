import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {removeItems, addItems, removeSingleItem} from '../../redux/cart/cart.action'


const CheckoutItem = ({cartItem, dispatch}) => {
  const {name, imageUrl, price, quantity} = cartItem
  return (
    <div className="checkout-item">
      <div className='image-container'>
        <img src={imageUrl} alt='product item'/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={()=>dispatch(removeSingleItem(cartItem))}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=> dispatch(addItems(cartItem))}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=>{dispatch(removeItems(cartItem))}}>&#10005;</div>
    </div>
  )
}

export default connect()(CheckoutItem);