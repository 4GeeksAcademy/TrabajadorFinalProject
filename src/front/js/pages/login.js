import React, { useState } from 'react';

const Login = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [message, setMessage] = useState('');

  // CSS styles embedded in JavaScript using template literals
  const styles = `
    .container {
      display: flex;
      justify-content: space-around;
      margin-top: 50px;
    }
  
    .login {
      width: 300px;
      padding: 20px;
      border-radius: 10px;
      background-color: #ffffff;
    }
  
    h2 {
      color: #012135;
    }
  
    input {
      width: 100%;
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #012135;
      border-radius: 5px;
    }
  
    button {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #00aeef;
      color: #ffffff;
      cursor: pointer;
    }
  
    .message {
      color: #ff0000;
      text-align: center;
    }
  `;

  const handleLogin = async () => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: loginUsername, password: loginPassword }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Apply styles using inline style attribute */}
      <style>{styles}</style>
      
      <div className="container">
        <div className="login">
          <h2>Login</h2>
          <input type="text" placeholder="Username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
