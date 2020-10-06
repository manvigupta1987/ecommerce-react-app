import CartActionType from './cart.types'

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN
})

export const addItems = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item
})

// export default { toggleCartHidden, addItems };