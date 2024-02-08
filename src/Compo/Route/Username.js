import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function UserDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    console.log(token);
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  if (user) {
    return (
      <div>
        <h1>User Details</h1>
        <p>Name: {user.firstname}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  } else {
    return <div>No user details available.</div>;
  }
}

export default UserDetails;