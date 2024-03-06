import React, { useContext, useState } from 'react';
import { Context } from "../store/appContext";
import styles from '../../styles/Login.module.css'; // Import CSS module

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = sessionStorage.getItem("token");
  console.log("This is your token", token)

  const handleClick = () => {
    actions.login(email, password).then(() => {
      history.push("/login")
    })
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h2>Login</h2>
        {(token && token !== "" && token !== undefined) ? `You are logged in with this token ${token}` :
          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.button} onClick={handleClick}>Login</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Login;
