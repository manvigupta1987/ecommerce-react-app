import React from 'react';
import Spinner from '../spinner/spinner.component';

//WithSpinner is the HOC.  which takes a component and return another component. 
const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ? ( <Spinner/>) : ( <WrappedComponent {...otherProps} />);
};

export default WithSpinner;