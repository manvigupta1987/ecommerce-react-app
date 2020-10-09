//Here middleware is used to catch the action and log the type. It lies between action and root reducer. There are multiple types of middleware
// but this one is used to log the type of action. 

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
//redux-persist is the library used for including local storage or session storage in the application.
import {persistStore} from 'redux-persist';

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));


export const persistor = persistStore(store);
export default {store, persistor };