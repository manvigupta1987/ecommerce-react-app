import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import  {toggleCartHidden} from '../../redux/cart/cart.action';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'

const CartIcon = ({toggleCartHidden, itemCount}) => {
  console.log("re-rendering cart icons")
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
const mapStateToProps = createStructuredSelector({
    //here itemCount is a primitive value and not a reference value. When our root store state
    // changes, it is true every mapStateToProps function will run. HOWEVER, react-redux will 
    //do a shallow comparison of our itemCount prop in cart-icon.component.jsx with its 
    //previous value. Again, since it's a primitive value, the reference check will be the same.
    // And since they're the same, no new props will be passed into CartIcon component.  Thus, 
    //CartIcon will not rerender. So there is no use of memoization in this component. 
    //reselect will NOT help with rerenders because the result of the selectCartItemsCount selector returns a 
    //primitive value and not a reference value.
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);