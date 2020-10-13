import React from 'react';
// import './collection-item.styles.scss'
import {CollectionItemContainer, ImageContainer, CollectionFooter, NameContainer, PriceContainer, CustomButtonContainer} from './collection-item.styles';
import {addItems} from '../../redux/cart/cart.action'
import {connect} from 'react-redux';

const CollectionItem= ({item, addItems}) => {
  return (
      <CollectionItemContainer>
        <ImageContainer imageUrl ={item.imageUrl} className='image'></ImageContainer>
        <CollectionFooter>
          <NameContainer>{item.name}</NameContainer>
          <PriceContainer>${item.price}</PriceContainer>
        </CollectionFooter>
        <CustomButtonContainer inverted onClick={() => addItems(item)}>Add to Cart</CustomButtonContainer>
      </CollectionItemContainer>
    );
}

// used to dispatch an action to the reducer.
const mapDispatchToProps = dispatch => ({
  addItems: item => dispatch(addItems(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);

