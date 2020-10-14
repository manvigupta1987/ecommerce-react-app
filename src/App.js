import React, { useEffect, lazy, Suspense } from 'react';
import {GlobalStyle} from './global.styles';
// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component'
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'
// import Checkout from './pages/checkout/checkout.component';
import Spinner from './components/spinner/spinner.component.jsx';
import Header from './components/header/header.components';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect'
// import {selectCollectionsForPreview} from './redux/shop/shop.selector'

//Lazy Loading Optimization: HomePage is now lazy loading in. 
const HomePage = lazy(()=> import('./pages//homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));


const App = ({setCurrentUser,currentUser }) => {
  //  unsubscribeFromAuth = null;

  useEffect(()=>{
    // Auth is an open subscription. So, we also need to close this subscription when application is unmounted. 
    // To achieve this, onAuthStateChanged gives us a function which if we call unsubscribe the subscription. 
    console.log('=========I am subscribing=============')
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {

        //check if there is document present with the user's details. if not, it creates the entry in the firebase database and returns userRef.
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
        })
      } else { 
        setCurrentUser(userAuth)
      }
      //Changes: To add data in the firestore.
      // addCollectionAndDocuments('collections', collectionsArray.map(({title,items}) => ({title, items})));
    });
    
    //clean up function in useEffect
    return () => {
      console.log('=========I am unsubscribing=============')
      unsubscribeFromAuth();
    }
  }, [setCurrentUser])

  return( 
    <div className='App'>
      <GlobalStyle/>
      <Header/>
      <Switch>
      <Suspense fallback={<Spinner/>}>
        <Route exact path='/' component ={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={Checkout}/>
        <Route exact path='/signin' render={()=> currentUser ? (<Redirect to='/' />) 
                                                :  (<SignInAndSignUpPage/>)}/>
      </Suspense>
      </Switch>
    </div>
  );
}

//Used to get the data from the reducer.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
})

// used to dispatch an action to the reducer.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

// class App extends Component {
//   unsubscribeFromAuth = null;
  
//   componentDidMount() {
//     const {setCurrentUser} = this.props;
//     // Auth is an open subscription. So, we also need to close this subscription when application is unmounted. 
//     // To achieve this, onAuthStateChanged gives us a function which if we call unsubscribe the subscription. 
//     this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
//       if(userAuth) {

//         //check if there is document present with the user's details. if not, it creates the entry in the firebase database and returns userRef.
//         // if the document is present, it returns the referenece of existing document. 
//         const userRef  = await createUserProfileDocument(userAuth);
//         // You can listen to a document with the onSnapshot() method. An initial call using the callback you provide creates 
//         // a document snapshot immediately with the current contents of the single document. Then, each time the contents change, 
//         // another call updates the document snapshot.
//         userRef.onSnapshot(snapShot => {
//           setCurrentUser({
//               id: snapShot.id,
//               // .data() method on the snapshot gives the actual properties. 
//               ...snapShot.data()
//             });
//         })
//       } else { 
//         setCurrentUser(userAuth)
//       }
//       //Changes: To add data in the firestore.
//       // addCollectionAndDocuments('collections', collectionsArray.map(({title,items}) => ({title, items})));
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return( 
//       <div className='App'>
//         <Header/>
//         <Switch>
//           <Route exact path='/' component ={HomePage}/>
//           <Route path='/shop' component={ShopPage}/>
//           <Route exact path='/checkout' component={Checkout}/>
//           <Route exact path='/signin' render={()=> 
//                                       this.props.currentUser ? 
//                                         (<Redirect to='/' />) : 
//                                         (<SignInAndSignUpPage/>)}/>

//         </Switch>
//       </div>
//     );
//   }
// }




