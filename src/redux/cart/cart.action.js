import CartActionType from './cart.types'

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN
})

export const addItems = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item
})

export const removeItems = (item) => ({
  type: CartActionType.REMOVE_ITEM,
  payload: item
})

export const removeSingleItem = (item) => ({
  type: CartActionType.REMOVE_SINGLE_ITEM,
  payload: item
})