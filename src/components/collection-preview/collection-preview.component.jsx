import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
// import './collection-preview.styles.scsimport { log } from 'util';
import {CollectionPreviewContainer, TitleContainer, PreviewContainer} from './collection-preview.styles'
import { withRouter } from 'react-router-dom';

const CollectionPreview = (props) => {
  const {title, items, match, routeName, history} = props;
  return(
    <CollectionPreviewContainer>
      <TitleContainer onClick={()=> history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item,idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />
        })}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}

export default withRouter(CollectionPreview);