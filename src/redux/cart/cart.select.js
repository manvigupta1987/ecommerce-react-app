import {createSelector} from 'reselect';

//input selector --> takes complete state and returns piece of the state. 
const selectCart = state => state.cart;

//createSelector takes two argument : first an array of the input selectors, 
// second: an function that would return the value that you want from this selector. This function
// takes the input return from the inputSelector (first parameter)
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity , 0) 
)