
// action is an object that contains two properties such as type and payload. Every reducer gets all the action fired by the view even if that 
// action is not related to that reducer. 

import CartActionType from './cart.types'
import {addItemsToCart, removeItemsFromCart} from './cart.utils'
const INTIAL_STATE = {
  hidden: true,
  cartItems : []
}
const cartReducer = (state=INTIAL_STATE, action) => {
  switch(action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload)
      }
    case CartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemsFromCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}

export default cartReducer;