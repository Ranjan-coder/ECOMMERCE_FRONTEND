import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyComponent = () => {
  const [showToast, setShowToast] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    // Simulate a login attempt
    const loginSuccessful = Math.random() < 0.5; // Just a random condition, replace it with your actual login logic

    if (loginSuccessful) {
      setLoginSuccess(true);
      setShowToast(true);
    } else {
      setLoginSuccess(false);
      setShowToast(true);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {showToast && (
        <div>
          {loginSuccess ? (
            // Display success message if login was successful
            toast.success('Login successful!', {
              onClose: handleCloseToast,
            })
          ) : (
            // Display error message if login failed
            toast.error('Login credentials are incorrect!', {
              onClose: handleCloseToast,
            })
          )}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
