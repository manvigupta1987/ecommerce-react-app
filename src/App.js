import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route} from 'react-router-dom'
import Shop from './pages/shop/shop.component'

class App extends Component {
  render() {
    return( 
      <div className='App'>
      <Route exact path='/' component ={HomePage} />
      <Route exact path='/shop' component={Shop}></Route>
      </div>
    );
  }
}

export default App;


