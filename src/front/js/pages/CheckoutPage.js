import React, { useState } from 'react';
import styles from '../../styles/Checkout.module.css';
import { useCart } from '../components/CartContext.js';
import StripeContainer from '../components/Stripe/StripeContainer.js';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phoneNumber: '',
    country: '',
  });
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log('Cart:', cart);

    // Simulating delay for payment processing
    setPaymentProcessing(true);
    setTimeout(async () => {
      try {
        // Your payment logic here
        // If payment is successful, setPaymentSuccess(true);
        setPaymentSuccess(true);
        navigate('/paymentstatus');
      } catch (error) {
        console.error('Error processing payment:', error);
      }
      setPaymentProcessing(false);
    }, 2000); // Adjust the delay time as needed (in milliseconds)
  };

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className={styles.checkoutForm}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={styles.formControl}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.formControl}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className={styles.formControl}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className={styles.formControl}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className={styles.formControl}
          />
        </div>
        <h6>Stripe Payment:</h6>
        <StripeContainer
          formData={formData}
          setFormData={setFormData}
          cart={cart}
          setPaymentSuccess={setPaymentSuccess}
        />
        <h3>Cart Items:</h3>
        {cart && cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.provider} - {item.name} - {formatPrice(item.price)}
                <button
                  onClick={() => handleRemoveItem(index)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        {paymentProcessing ? (
          <p>Processing payment...</p>
        ) : (
          <button type="submit" className={styles.btnPrimary}>
            Pay
          </button>
        )}
      </form>
    </div>
  );
};

export default CheckoutPage;
