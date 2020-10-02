import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return( 
      <div className='App'>
      <Route exact path='/' component ={HomePage} />
      </div>
    );
  }
}

export default App;


