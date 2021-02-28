import React, { useEffect, lazy, Suspense } from 'react';
import {GlobalStyle} from './global.styles';
import Spinner from './components/spinner/spinner.component.jsx';
import Header from './components/header/header.components';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect'
import ErrorBoundary from './components/error-boundary/error-boundary.component';

//Lazy Loading Optimization: HomePage is now lazy loading in. 
const HomePage = lazy(()=> import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));


const App = ({setCurrentUser,currentUser }) => {
  //  unsubscribeFromAuth = null;

  useEffect(()=>{
    // The recommended way to get the current user is by setting on observer (onAuthStateChanged) on the auth object. It ensures that auth object 
    // is not in intermediate state. 
    // Auth is an open subscription. So, we also need to close this subscription when application is unmounted. 
    // To achieve this, onAuthStateChanged gives us a function which if we call unsubscribe the subscription. 
    console.log('=========I am subscribing=============')
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // userAuth will be set to null when user signed out. 
      if(userAuth) {

        //createUserProfileDocument checks if there is document present with the user's details in the database. 
        // if not, it creates the entry in the firebase database and returns userRef.
        // if the document is present, it returns the referenece of existing document. 
        const userRef  = await createUserProfileDocument(userAuth);
        // You can listen to a document with the onSnapshot() method. An initial call using the callback you provide creates 
        // a document snapshot immediately with the current contents of the single document. Then, each time the contents change, 
        // another call updates the document snapshot.
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            // .data() method on the snapshot gives the actual properties. 
            ...snapShot.data()
          });
        });
      } else { 
        setCurrentUser(userAuth)
      }
      //Changes: To add data in the firestore. Commented as this function needed to run only once. 
      // addCollectionAndDocuments('collections', collectionsArray.map(({title,items}) => ({title, items})));
    });
    
    //clean up function in useEffect, works as componentWillUnmount()
    return () => {
      console.log('=========I am unsubscribing=============')
      unsubscribeFromAuth();
    }
  }, [setCurrentUser])

  return( 
    <div className='App'>
      <GlobalStyle/>
      <Header/>  {/* Adding header before the switch so that it can be present on all the pages. */}
      <Switch> 
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}> {/* Required with Lazy loading. Fallback shows the spinner component untill the other component is visible. */}
            <Route exact path='/' component ={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={Checkout}/>
            <Route exact path='/signin' render={()=> currentUser ? (<Redirect to='/' />) 
                                                :  (<SignInAndSignUpPage/>)}/>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

//Used to get the data from the reducer.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray: selectCollectionsForPreview
})

// used to dispatch an action to the reducer.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);