// Login.js
import React, { useState } from 'react';
import { login } from './api';

function Signin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials);
      const token = response.data.token;
      // Store the token in localStorage or cookies with a 30-minute expiration
      const expiration = new Date().getTime() + 30 * 60 * 1000; // 30 minutes in milliseconds
      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiration', expiration);
      // Redirect to the user's dashboard
    } catch (error) {
      // Handle login error
    }
  }

  // Render the login form

  return (
    <form onSubmit={handleLogin}>
      {/* Login form fields */}
    </form>
  );
}

export default Signin;
