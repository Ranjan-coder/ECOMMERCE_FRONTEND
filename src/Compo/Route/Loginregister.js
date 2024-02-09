import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

const Loginregister = () => {

    const [count, setCount] = useState(true)
    // console.log(count);
    const handleagainlogin =()=>{
        localStorage.removeItem('jwtToken')
        setCount(!count)
    }

    return (
        <>
            <div className='loginparent'>
                <div id='logincmp'>
                    <div className='headingfontstyle'>WELCOME BACK</div>
                    <div className='fontstyle'>Login to enjoy your fashion journey</div>
                    <div><img className='loginlogo' src={require('../Imageh/security.jpg')} alt="logoimage" /></div>
                    <button onClick={handleagainlogin} className='submit'>LOGIN</button>
                    
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