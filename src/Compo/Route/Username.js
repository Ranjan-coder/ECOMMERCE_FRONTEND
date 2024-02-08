import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import jwt_decode from 'jwt-decode'; // Using jwt-decode for decoding JWT tokens
import jwt_Decode from "jwt-decode";



const UserProfile = () => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
          throw new Error('JWT token not found');
        }

        // Decode JWT token to get user's email
        const { email } = jwt_Decode(jwtToken); // Destructure the 'email' property from the decoded token
        if (!email) {
          throw new Error('Email not found in JWT token');
        }
        // Make request to backend to fetch user's name
        const response = await axios.get(`https://ecommercebackend-ptf5.onrender.com/pages/log/username?email=${email}`);
        const { name } = response.data;
        console.log(response.data);
        setUserName(name);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>User Profile</h2>
          <p>Welcome, {userName}!</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
