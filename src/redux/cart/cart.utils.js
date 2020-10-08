export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
  if(existingCartItem) {
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToAdd.id ? 
          { ...cartItem, quantity: cartItem.quantity + 1} 
          : cartItem
       );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemsFromCart = (cartItems, cartItemToDelete) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id );
}

export const removeSingleItemFromCart = (cartItems, cartItemToDelete) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDelete.id)

  if(existingCartItem.quantity === 1) { 
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id );
  }

  return cartItems.map(cartItem => 
    cartItem.id === cartItemToDelete.id ? 
      { ...cartItem, quantity: cartItem.quantity - 1} 
      : cartItem
   );
}