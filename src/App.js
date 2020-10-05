import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {

        //check if there is document present with the user's details. if not, it creates the entry in the firebase database and returns userRef.
        // if the document is present, it returns the referenece of existing document. 
        const userRef  = await createUserProfileDocument(userAuth);
        // You can listen to a document with the onSnapshot() method. An initial call using the callback you provide creates 
        // a document snapshot immediately with the current contents of the single document. Then, each time the contents change, 
        // another call updates the document snapshot.
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              // .data() method on the snapshot gives the actual properties. 
              ...snapShot.data()
            }
          });
        })
      } else { 
        this.setState({currentUser: userAuth})
      }
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


