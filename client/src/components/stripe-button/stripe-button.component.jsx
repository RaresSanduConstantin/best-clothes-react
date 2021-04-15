import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisableKey =
    "pk_test_51GwtELJltgc2LzsHnCdnKR5OQiAD8BhfJ1bBFUMmjupZEkTZrtZ0idSMA6KHmlxfefI8vkm2Y5oQXC8gE3zoG02W00FOYTLdQt";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
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
