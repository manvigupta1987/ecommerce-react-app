import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_51Ha2eRKpOluMN1F8WoxFGbmybORtOQ66oj4WmH9mz1q3ZtZfQIr5spTkKPOt0VqbPbhJgsoF9VCFUiVDCcpxzJ5L00XGvFanvj';

  const onToken = (token) => {
    alert('Payment Successful!')
  }

  return (
    <StripeCheckout
      label='Pay now'
      name = 'Queen Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description = {`Your Total is $${price}`} 
      amount = {priceForStripe}
      panelLabel = 'Pay Now'
      token = {onToken}
      stripeKey = {publishKey}
    />
  );
}

export default StripeButton