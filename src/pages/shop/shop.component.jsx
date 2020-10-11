import React from 'react';
import './shop.styles.scss'
import CollectionOverview from '../../components/collection-overview/collection-overview.compnents'
import CollectionPage from '../collection/collection.component'; 
import WithSpinner from '../../components/with-spinner/with-spinner.component';


import {Route} from 'react-router-dom';
import {firestore, convertCollectionSnapShotToMap} from '../../firebase/firebase.utils.js';
import {updateShopCollections} from '../../redux/shop/shop.action.js'
import {connect} from 'react-redux';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

// three objects match, location and history objects are passed by the Route that we used in the App.js for the Shop component routing.
class ShopPage extends React.Component {
  state  = {
    loading: true
  }
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const {updateShopCollections} = this.props;
    // collections is the name of collection in firebase firestore.
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapShot => {
      const collectionMap = convertCollectionSnapShotToMap(snapShot)
      updateShopCollections(collectionMap)
      this.setState({loading: false})
    });
  }

  render() {
    const {match} = this.props;
    const {loading} = this.state;

    return (
      <div className='shop-page'>
        {/*</div> parameters in the render function will be same as the component will receive.*/}
        <Route exact path={`${match.path}`} render = {props => (<CollectionOverviewWithSpinner isLoading={loading} {...props}/>)}/>
        <Route path ={`${match.path}/:collectionId`} render = {props => (<CollectionPageWithSpinner isLoading={loading} {...props}/>)}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateShopCollections: collections => dispatch(updateShopCollections(collections))
})
  

export default connect(null, mapDispatchToProps)(ShopPage);
