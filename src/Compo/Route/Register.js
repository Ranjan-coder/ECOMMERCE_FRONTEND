import React, { useState } from 'react';
import axios from 'axios';
import signup from '../Imageh/signup.jpg';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [firstname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const showToastMessage = (message) => {
        toast.success(message, {
        //   position: toast.POSITION.TOP_RIGHT,
        });
      };

    const handleRegister = async () => { 
        try {
            const response = await axios.post('https://ecommercebackend-ptf5.onrender.com/pages/log/register', {
                firstname: firstname,
                email: email,
                password: password
            });
            console.log(response.data, 'register data');
            if (response.data.msg === "This email is already registered") {
                alert(response.data.msg);
                navigate('/login');
            } else {
                localStorage.setItem('jwtToken', response.data.jwtToken);
                showToastMessage("Registration Successful")
                navigate('/')
            }
        } catch (error) {
            console.log('registration failed : ', error);
            showToastMessage('Registration Failed')
        }
    };

    return (
        <>
            <div className='registerdetails registerdetails1'>
                <div>
                    <img className='signupimg' src={signup} alt="my-gif" />
                </div>
                <div>REGISTER DETAILS</div>
                <div>Name : <input className='inputfield' type='text' value={firstname} name='name' placeholder='Enter your name(10)' maxLength={10} onChange={(e) => setName(e.target.value)} required /></div>
                <div>Email : <input className='inputfield' type='email' value={email} name='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required /></div>
                <div>Password : <input type='password' className='inputfield' value={password} name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required /></div>
                <button className='submit' onClick={handleRegister}>REGISTER</button>
                <ToastContainer />
            </div>
        </>
    );
};

export default Register;
