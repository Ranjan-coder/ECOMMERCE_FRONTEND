import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

const Loginregister = () => {

    const [count, setCount] = useState(true)
    console.log(count);

    const handleLogout = () => {
        // Remove the JWT token from local storage
        localStorage.removeItem('jwtToken');
      };

    return (
        <>
            <div className='loginparent'>
                <div id='logincmp'>
                    <div className='headingfontstyle'>WELCOME BACK</div>
                    <div className='fontstyle'>Login to enjoy your fashion journey</div>
                    <div><img className='loginlogo' src={require('../Imageh/security.jpg')} alt="logoimage" /></div>
                    <button onClick={() => setCount(!count)} className='submit'>LOGIN</button>
                    <button onClick={handleLogout} className='submit'>LOGOUT</button>
                    <div>{count ? null : <Login />}</div>
                </div>
                <div id='registercmp'>
                    <Register />
                </div>
            </div>
        </>
    )
}

export default Loginregister