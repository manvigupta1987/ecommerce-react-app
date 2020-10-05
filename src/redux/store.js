//Here middleware is used to catch the action and log the type. It lies between action and root reducer. There are multiple types of middleware
// but this one is used to log the type of action. 

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;