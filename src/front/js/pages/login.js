import React, { useContext, useState } from 'react';
import { Context } from "../store/appContext";
import styles from '../../styles/Login.module.css'; // Import CSS module
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleClick = async () => {
    await actions.login(email, password);
    navigate("/profile");
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h2>Login</h2>
        <div>
          <div className={styles.inputGroup}>
            <FontAwesomeIcon icon={faEnvelope} className={`${styles.iconMail} ${styles.faEnvelope}`} />
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <FontAwesomeIcon icon={faLock} className={`${styles.icon} ${styles.faLock}`} />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.button} onClick={handleClick}>Login</button>
          <div className={styles.SignUp}>
            <p>Don't have an account?</p>
            <Link to="/signup">
              <p className={styles.Register}>Register</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
