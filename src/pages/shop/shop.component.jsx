import React, {useEffect,lazy, Suspense} from 'react';
// import CollectionOverview from '../../components/collection-overview/collection-overview.compnents'
// import CollectionPage from '../collection/collection.component'; 
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Spinner from '../../components/spinner/spinner.component';


import {Route} from 'react-router-dom';
// import {firestore, convertCollectionSnapShotToMap} from '../../firebase/firebase.utils.js';
// import {updateShopCollections} from '../../redux/shop/shop.action.js'
import {connect} from 'react-redux';
//Redux-thunk changes
import {fetchCollectionStartAsync} from '../../redux/shop/shop.action.js'
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shop/shop.selector.js'

const CollectionOverview = lazy(()=> import('../../components/collection-overview/collection-overview.compnents'))
const CollectionPage = lazy(()=>import('../collection/collection.component'))

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

// three objects match, location and history objects are passed by the Route that we used in the App.js for the Shop component routing.
const ShopPage = ({fetchCollectionStartAsync, match, isCollectionFetching, isCollectionLoaded}) => {
  //Changes: Redux Thunk
  // state  = {
  //   loading: true
  // }
  // const unsubscribeFromSnapShot = null;

  useEffect(() => {
  fetchCollectionStartAsync();
    //Changes: Redux Thunk
    // const {updateShopCollections} = this.props;
    // // collections is the name of collection in firebase firestore.
    // const collectionRef = firestore.collection('collections');
    // collectionRef.onSnapshot(async snapShot => {
    //   const collectionMap = convertCollectionSnapShotToMap(snapShot)
    //   updateShopCollections(collectionMap)
    //   this.setState({loading: false})
    // });
  },[fetchCollectionStartAsync]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner/>}> 
        {/*</div> parameters in the render function will be same as the component will receive.*/}
      <Route exact path={`${match.path}`} render = {props => (<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>)}/>
      <Route path ={`${match.path}/:collectionId`} render = {props => (<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>)}/>
      </Suspense>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: collections => dispatch(fetchCollectionStartAsync(collections))
})

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})
  

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
