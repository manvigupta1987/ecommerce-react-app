// Its an actual base reducer object that represents the state of the application. It contains all the reducers. 
// UserReducer contains the state of the currentUser. 
// CombineReducers is used to combine all the reducers.

import { combineReducers } from  'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// PersistReducer is used to persist the reducer. 
import {persistReducer} from 'redux-persist';
// this imports the local storage object from redux-persist.
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root', // at what point inside the reducer object, we want to store the data. 
  storage, 
  whitelist: ['cart'] // array of the reducer that we want to persist. 
}

// it returns the one big json state object where key is the value of the reducer. 
const rootReducer = combineReducers ({
  user: userReducer,
  cart: cartReducer,
  directory : directoryReducer,
  shop: shopReducer
})
// this returns a modified version of rootReducer with persisted capabilities. 
export default persistReducer(persistConfig, rootReducer)



