import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    // Auth is an open subscription. So, we also need to close this subscription when application is unmounted. 
    // To achieve this, onAuthStateChanged gives us a function which if we call unsubscribe the subscription. 
    this.unsubscribeFromAuth =  auth.onAuthStateChanged((user) => {this.setState({currentUser: user})
    console.log(user)
   })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return( 
      <div className='App'>
        <Header currentUser={this.state.currentUser}/>
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


