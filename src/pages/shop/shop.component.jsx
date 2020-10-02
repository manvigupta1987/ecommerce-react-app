import React from 'react';
import './shop.data'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class Shop extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>
        { collections.map(collection=>{
          return <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
        })}
      </div>
    );
  }

}

export default Shop;