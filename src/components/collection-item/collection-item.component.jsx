import React from 'react';
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {addItems} from '../../redux/cart/cart.action'
import {connect} from 'react-redux';

const CollectionItem= ({item, addItems}) => {
  return (
      <div className='collection-item'>
        <div style = {{ backgroundImage: `url(${item.imageUrl})`}} className='image'></div>
        <div className='collection-footer'>
          <span className='name'>{item.name}</span>
          <span className='price'>${item.price}</span>
        </div>
        <CustomButton className='custom-button' inverted onClick={() => addItems(item)}>Add to Cart</CustomButton>
      </div>
    );
}

// used to dispatch an action to the reducer.
const mapDispatchToProps = dispatch => ({
  addItems: item => dispatch(addItems(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);

