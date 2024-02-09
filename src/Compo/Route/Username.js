import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function UserDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    console.log(token);
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded);
      setUser(decoded);
    }
  }, []);

  return (
    <div>
      {user ? (<p>{user.firstname}</p>) : (<p>User</p>)}
    </div>
  );
}

export default UserDetails;