import React from 'react';
// import './custom-button.styles.scss';

import {CustomButtonContainer} from './custom-button.styles'


const CustomButton = ({children, ...props}) => {

  return(
    // <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
    //   {children}
    // </button>
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  );
}

export default CustomButton;