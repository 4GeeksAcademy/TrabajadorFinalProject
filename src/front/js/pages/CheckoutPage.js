import React from 'react';
import styles from '../../styles/Checkout.module.css';
import { useCart } from '../components/CartContext.js';

const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart();
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    address: '',
    phoneNumber: '',
    country: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log('Cart:', cart);
    setFormData({
      fullName: '',
      email: '',
      address: '',
      phoneNumber: '',
      country: '',
      paymentMethod: '',
    });
  };

  const handleRemoveItem = (index) => {
    removeFromCart(index);
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
        <div className={styles.formGroup}>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
            className={styles.formControl}
          >
            <option value="">Select Payment Method</option>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <h3>Cart Items:</h3>
        {cart && cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.provider} - {item.name} - {formatPrice(item.price)}
                <button onClick={() => handleRemoveItem(index)} className={styles.removeButton}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <button type="submit" className={styles.btnPrimary}>Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
