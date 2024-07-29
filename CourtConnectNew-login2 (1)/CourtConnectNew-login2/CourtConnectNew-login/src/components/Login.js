import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle login submission (e.g., API call, authentication)
    console.log('Login submitted:', { email, password });
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
        
          <Link to="/registeru">
            Register here
          </Link>
          <Link to="/registeru">
            Forgot Password
          </Link>
          
        
      </form>
    </div>
  );
};

export default Login;
