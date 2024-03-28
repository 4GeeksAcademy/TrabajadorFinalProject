import React, { useState } from 'react';
import styles from '../../styles/Checkout.module.css';
import { useCart } from '../components/CartContext.js';
import { useNavigate } from 'react-router-dom';
import StripeContainer from '../components/Stripe/StripeContainer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phoneNumber: '',
    country: '',
    hoursToPayFor: 0,
  });
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const cartNotEmpty = cart && cart.length > 0;

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

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    navigate('/paymentstatus');
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
    }, 2000);
  };

  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    return isNaN(numericPrice) ? '$30.00/Hr' : `$${numericPrice.toFixed(2)}`;
  };

  const calculateTotal = () => {
    const hours = formData.hoursToPayFor;
    const pricePerHour = 30;
    return hours * pricePerHour;
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
          <input
            type="text"
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
        {cartNotEmpty && (
          <div className={styles.formGroup}>
            <label htmlFor="hoursToPayFor">Hours to Pay For:</label>
            <input
              type="number"
              id="hoursToPayFor"
              name="hoursToPayFor"
              value={formData.hoursToPayFor}
              onChange={handleChange}
              min="1"
              disabled={!cartNotEmpty}
              className={styles.formControl}
            />
          </div>
        )}
        <h3>Cart Items:</h3>
        <div className={styles.cart}>
          {cart && cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.provider} - {item.name} - {formatPrice(item.price)}
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveItem(index)}
                    className={`${styles.removeButton} ml-3`}
                  >
                    <FontAwesomeIcon icon={faTimes} className={styles.removeIcon} />
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.checkCart}>No items in the cart</p>
          )}
          <h3>Total: {formatPrice(calculateTotal())}</h3>
        </div>
        {paymentProcessing ? (
          <p>Processing payment...</p>
        ) : (
          <StripeContainer
            formData={formData}
            setFormData={setFormData}
            cart={cart}
            total={calculateTotal()}
            onSuccess={handlePaymentSuccess}
          />
        )}
      </form>
    </div>
  );
};

export default CheckoutPage;
