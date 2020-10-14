import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles'

//A class component becomes an error boundary component if it has either getDerivedStateFromError() or componentDidCatch() method.
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  // this function catches any error which is thrown by the any children inside the error boundary component.
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI. Setting this variable to true is required to know that children of errorBoundary component 
    // are throwing error. 
    return { hasError: true };
  }

  //errorInfo: contains the information about which component has thrown the error. 
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/oCkEbrA.png'/> 
          <ErrorImageText>Sorry, This page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;