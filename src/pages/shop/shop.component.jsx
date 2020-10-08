import React from 'react';
import './shop.styles.scss'
import CollectionOverview from '../../components/collection-overview/collection-overview.compnents'
import CollectionPage from '../collection/collection.component'; 

import {Route} from 'react-router-dom';

// three objects match, location and history objects are passed by the Route that we used in the App.js for the Shop component routing.
const ShopPage = ({match}) => {
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path ={`${match.path}/:collectionId`} component = {CollectionPage} />
      </div>
    );
  }

  

export default ShopPage;
