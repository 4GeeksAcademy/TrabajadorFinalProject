import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#000', // Change text color to black for better visibility
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#87bbfd' },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};

const StripeContainer = ({ formData, setFormData, cart, setPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(process.env.BACKEND_URL + '/api/payment', {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log('Successful payment');
          setPaymentSuccess(true);
        }
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      stripeInfoFilled: e.complete, // Update stripeInfoFilled based on whether the input is complete
    }));
  };

  return (
    <fieldset style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
        <CardElement options={CARD_OPTIONS} onChange={handleChange} />
      </div>
       <button onClick={handleSubmit} style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Pay</button> 
    </fieldset>
  );
};

export default StripeContainer;
