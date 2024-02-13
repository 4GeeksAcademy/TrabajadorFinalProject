import React, { useState } from 'react';

const Signup = () => {
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  // CSS styles embedded in JavaScript using template literals
  const styles = `
    .container {
      display: flex;
      justify-content: space-around;
      margin-top: 50px;
    }
  
    .signup {
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

  const handleSignup = async () => {
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: signupUsername, 
          password: signupPassword,
          fullName,
          email,
          address,
          phoneNumber
        }),
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
        <div className="signup">
          <h2>Signup</h2>
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <input type="text" placeholder="Username" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
          <button onClick={handleSignup}>Signup</button>
        </div>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Signup;
