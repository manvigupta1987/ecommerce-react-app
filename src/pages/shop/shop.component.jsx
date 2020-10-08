import React from 'react';
import './shop.styles.scss'
import CollectionOverview from '../../components/collection-overview/collection-overview.compnents'

const Shop = ({collections}) => {
    return (
      <div className='shop-page'>
        <CollectionOverview/>
      </div>
    );
  }

  

export default Shop;
