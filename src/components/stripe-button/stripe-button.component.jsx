import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey ='pk_test_E34zAFEWTdNSgPWwmShPin8F00kJYMqMKh';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`You total is $${price}`}
            amount ={priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishablekey}

        />
    )
};

export default StripeCheckoutButton;