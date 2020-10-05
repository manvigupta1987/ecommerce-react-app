import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  // it allows to access the data stored inside redux store. 
  <Provider store ={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider> , document.getElementById('root'));
