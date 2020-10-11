import React from 'react';
import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

//WithSpinner is the HOC.  which takes a component and return another component. 
const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer>
      </SpinnerContainer>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;