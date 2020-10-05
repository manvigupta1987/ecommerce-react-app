// Its an actual base reducer object that represents the state of the application. It contains all the reducers. 

//UserReducer contains the state of the currentUser. 
// To combine all the reducers in the root reducers, we use combine reducer from the redux. 

import { combineReducers } from  'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// it returns the one big json state object where key is the value of the reducer. 
export default combineReducers ({
  user: userReducer,
  cart: cartReducer
})



