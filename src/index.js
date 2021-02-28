import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store'

import * as serviceWorker from './serviceWorker';

// This library replaces the root element with code present inside the App file. 
ReactDOM.render(
  // browserRouter is needed for the react-router. 
  // it allows to access the data stored inside redux store. 
  <Provider store ={store}>
    <BrowserRouter> 
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    </BrowserRouter>
  </Provider> , document.getElementById('root'));
  
  serviceWorker.register()