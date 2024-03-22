// Import necessary libraries
import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing
import { Context } from "../store/appContext";
import styles from '../../styles/SignUp.module.css'; // Import CSS module

// Define Signup component
const Signup = () => {
  // Define state variables
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle signup process
  const handleSignup = async () => {
    // Check if password matches confirm password
    if (signupPassword !== confirmPassword) {
      setMessage("Passwords don't match");
      return;
    }
    const ok = await actions.register(email, signupPassword);
    if (ok) {
      navigate("/login");
    }
  };

  // Render Signup component
  return (
    <div className={styles.container}> {/* Apply styles using CSS module */}
      <div className={styles.signup}>
        <h2>Signup</h2>
        <div className={styles.inputGroup}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className={styles.inputGroup}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.iconMail} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.inputGroup}>
          <FontAwesomeIcon icon={faLock} className={styles.icon} />
          <input type="password" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
        </div>
        <div className={styles.inputGroup}>
          <FontAwesomeIcon icon={faLock} className={styles.icon} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> {/* Confirm password field */}
        </div>
        <button onClick={handleSignup}>Sign up</button>
        {message && <p className={styles.message}>{message}</p>}
        <p className={styles.signupText}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>


    </div>
  );
};

// Export Signup component
export default Signup;
