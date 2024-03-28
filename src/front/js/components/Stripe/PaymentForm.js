// PaymentForm.js
import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#000',
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

const PaymentForm = ({ formData, total, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [formComplete, setFormComplete] = useState(false);

  useEffect(() => {
    const isFormComplete =
      formData.fullName &&
      formData.email &&
      formData.address &&
      formData.phoneNumber &&
      formData.country &&
      formData.hoursToPayFor;
    setFormComplete(isFormComplete);
  }, [formData]);

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
          amount: total * 100, // Multiply by 100 to convert to cents
          id,
        });

        if (response.data.success) {
          console.log('Successful payment');
          onSuccess(); // Call the success callback
        }
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setFormComplete(e.complete);
  };

  return (
    <fieldset style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
        <CardElement options={CARD_OPTIONS} onChange={handleChange} />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          pointerEvents: formComplete ? 'auto' : 'none', // Disable button if form not complete
          opacity: formComplete ? 1 : 0.5, // Reduce opacity if button is disabled
        }}
      >
        Pay
      </button>
    </fieldset>
  );
};

export default PaymentForm;
