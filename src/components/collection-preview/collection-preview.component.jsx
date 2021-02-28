import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'
// import { log } from 'util';
// import {CollectionPreviewContainer, TitleContainer, PreviewContainer} from './collection-preview.styles'
import { withRouter } from 'react-router-dom';

export const CollectionPreview = (props) => {
  const {title, items, match, routeName, history} = props;
  return(
    <div className='collection-preview'>
    <h1 className='title'onClick={()=> history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item,idx) => idx < 4)
        .map((item) => {
          return <CollectionItem key={item.id} item={item} />
     })}
      </div>
    </div>
  );
}

export default withRouter(CollectionPreview);