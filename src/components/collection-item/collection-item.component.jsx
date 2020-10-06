import React from 'react';
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'


class CollectionItem extends React.Component {
  // constructor(props) {
  //   super(props)

  // }

  render() {
    const {name, price, imageUrl} = this.props.item
    return(
      <div className='collection-item'>
        <div style = {{ backgroundImage: `url(${imageUrl})`}} className='image'></div>
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <CustomButton inverted >Add to Cart</CustomButton>
      </div>
    );
  }


}

export default CollectionItem;

