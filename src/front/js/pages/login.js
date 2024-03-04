import '../../styles/Login.css';

import React, { useContext, useState } from 'react';
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  console.log("This is your token", token)


  const handleClick = () => {
    actions.login(email, password).then(() => {
      navigate("/login")
    })
  };

  return (
    <div className="container">
      <div className="login">
        <h2>Login</h2>
        {(token && token != "" && token != undefined) ? "You are logged in with this token" + token :

          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick}>Login</button>
          </div>

          // {message && <p className="message">{setMessage}</p>}
        }
      </div>
    </div>
  )
}
export default Login;
