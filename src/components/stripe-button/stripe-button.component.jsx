import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisableKey =
    "pk_test_51GwtELJltgc2LzsHnCdnKR5OQiAD8BhfJ1bBFUMmjupZEkTZrtZ0idSMA6KHmlxfefI8vkm2Y5oQXC8gE3zoG02W00FOYTLdQt";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };
  return (
    <StripeCheckout
      currency="RON"
      label="Pay Now"
      name="Best Cloathing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is ${price}.00 RON`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisableKey}
      image="https://svgshare.com/i/MFM.svg"
    />
  );
};

export default StripeCheckoutButton;
