// Signup.js
import React, { useState } from 'react';
import { register } from './api';

function Signup() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await register(user);
      // Redirect to login or handle success
    } catch (error) {
      // Handle signup error
    }
  }

  // Render the signup form

  return (
    <form onSubmit={handleSignup}>
      {/* Signup form fields */}
    </form>
  );
}

export default Signup;
