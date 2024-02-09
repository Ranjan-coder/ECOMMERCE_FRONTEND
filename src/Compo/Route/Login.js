import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    const [firstname,setFirstname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const showToastMessage = (message) => {
        toast.success(message, {
        //   position: toast.POSITION.TOP_RIGHT,
        });
      };

    const handleLogin= async ()=>{
        try{
            // const response = 
            await axios.post('https://ecommercebackend-ptf5.onrender.com/pages/log/login',{
                firstname:firstname,
                email:email,
                password:password
            })
            // console.log(response);
            .then((res)=>{
                console.log(res,'register data');

                if (res.data.msg === 'user is not registered'){
                    alert(res.data.msg)
                    navigate('/register')
                }
                else{
                    localStorage.setItem('jwtToken',res.data.jwtToken)
                    console.log(res.data.msg);
                    showToastMessage('Login Successful')
                    navigate('/')
                }
            })
            // console.log(response.data,'response data');
        }
        catch(error){
            console.log('login failed :',error);
            showToastMessage('Login Failed')
        }
    }

  return (
    <div className='logindetails'>
    {/* <div>LOGIN DETAILS</div> */}
    <div>Name : <input className='inputfield' type='text' value={firstname} name='firstname' placeholder='Enter your name' required onChange={(e)=>setFirstname(e.target.value)}/></div>
    <div>Email : <input className='inputfield' type='email' value={email} name='email' placeholder='Enter your email' required onChange={(e)=>setEmail(e.target.value)}/></div>
    <div>Password : <input type='password' className='inputfield' name='password' value={password} placeholder='Enter your password' required onChange={(e)=>setPassword(e.target.value)}/></div>
    <button className='submit' onClick={handleLogin}>SUBMIT</button>
    <ToastContainer />
    </div>
  )
}

export default Login
