// Its an actual base reducer object that represents the state of the application. It contains all the reducers. 

//UserReducer contains the state of the currentUser. 
// To combine all the reducers in the root reducers, we use combine reducer from the redux. 

import { combineReducers } from  'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

//Redux-persist library changes.
import {persistReducer} from 'redux-persist';
// local storage object from redux-persist
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root', // at what point inside the reducer object, we want to store the data. 
  storage, 
  whitelist: ['cart'] // array of the reducer that we want to persist. 
}

// it returns the one big json state object where key is the value of the reducer. 
const rootReducer = combineReducers ({
  user: userReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)



