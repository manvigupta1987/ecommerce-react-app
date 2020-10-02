import React from 'react';
import {withRouter} from 'react-router-dom'; // withRouter is the HOC component. 

import './menu-item.styles.scss'

const MenuItem = ({section, history, match}) => {
  return (
    <div className={`${section.size} menu-item`} onClick={()=>history.push(`${match.url}${section.title}`)}>
      <div style = {{ backgroundImage: `url(${section.imageUrl})`}} className='background-image'></div>
      <div className='content'>
        <h1 className='title'> {section.title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem) ; //WithRouter will now return us the access to history, location, match props. 