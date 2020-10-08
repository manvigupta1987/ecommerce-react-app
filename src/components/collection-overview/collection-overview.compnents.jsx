import React from 'react'
import './collection-overview.styles.scss'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import {selectShopCollections} from '../../redux/shop/shop.selector';


const CollectionOverview = ({collections}) => {
  return (
    <div className='collection-overview'>
    { collections.map(collection=>{
      return <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
    })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview);