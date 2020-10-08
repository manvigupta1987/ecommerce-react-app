import React from 'react';
import './shop.styles.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop.selector';


const Shop = ({collections}) => {
    return (
      <div className='shop-page'>
        { collections.map(collection=>{
          return <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
        })}
      </div>
    );
  }

  const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
  })

export default connect(mapStateToProps)(Shop);
