import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'

class App extends Component {
  render() {
    return( 
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path='/' component ={HomePage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;


