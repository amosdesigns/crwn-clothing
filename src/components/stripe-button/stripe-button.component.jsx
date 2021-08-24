import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JQC4YHAeeocPDkyp921TYnqwB1NxAItyqNHEmwzegk2GMXfxvchwOmMpTiIZghQZEfnD0VoglR6ODfNsPDLI7uW00T80C8WX2";
    
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!!!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRW Clothing Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
