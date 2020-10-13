import React from 'react';
import {withRouter} from 'react-router-dom'; // withRouter is the HOC component. 

import './menu-item.styles.scss'
import {MenuItemContainer,ContentContainer,
        BackgroundImageContainer, 
        TitleContainer,
        ContentSubtitle } from './menu-item.styles.jsx'

const MenuItem = ({section, history, match}) => {
  return (
    <MenuItemContainer size={section.size} onClick={()=>history.push(`${section.linkUrl}`)}>
      { /* <div style = {{ backgroundImage: `url(${section.imageUrl})`}} className='background-image'></div> */}
      <BackgroundImageContainer imageUrl={section.imageUrl}/>
      <ContentContainer>
        <TitleContainer> {section.title.toUpperCase()}</TitleContainer>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem) ; //WithRouter will now return us the access to history, location, match props. 