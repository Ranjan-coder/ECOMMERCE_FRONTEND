import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get('https://ecommercebackend-ptf5.onrender.com/pages/log/username');
        setUserName(response.data.name);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchUserName();
  }, []);

  return (
    <div>
      {userName ? (
        <p>Welcome, {userName}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
