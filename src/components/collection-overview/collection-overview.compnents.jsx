import React from 'react'
// import './collection-overview.styles.scss'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import {CollectionOverviewContainer} from './collection-overview.styles';

const CollectionOverview = ({collections}) => {
  return (
    <CollectionOverviewContainer>
    { collections.map(collection=>{
      return <CollectionPreview key={collection.id} {...collection} />
    })}
    </CollectionOverviewContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);