import React from 'react';
import './collection.styles.scss';
import {selectCollection} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {CollectionPageContainer, ItemContainer, Title} from './collection.component.styles';

const CollectionPage = ({collection}) => {
  const {title, items} = collection
  return(
    <CollectionPageContainer>
      <Title>{title}</Title>
      <ItemContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemContainer>
    </CollectionPageContainer>
  );
}

//second parameter ownProps gives us all the props that component is being passed with.
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);