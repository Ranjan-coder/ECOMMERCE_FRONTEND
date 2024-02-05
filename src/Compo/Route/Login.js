import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin= async ()=>{
        try{
            const response = await axios.post('https://ecommercebackend-ptf5.onrender.com/pages/log/login',{email,password})
            // console.log(response);
            .then((res)=>{
                console.log(res,'register data');

                if (res.data.msg === 'user is not registered'){
                    alert(res.data.msg)
                    navigate('/register')
                }
                else{
                    localStorage.setItem('jwtToken :',res.data.token)
                    console.log(res.data.msg);
                }
            })
            // console.log(response.data,'response data');
        }
        catch(error){
            console.log('login failed : ',error);
        }
    }

  return (
    <div className='logindetails'>
    <div>LOGIN DETAILS</div>
    <div>Email : <input className='inputfield' type='email' value={email} name='email' placeholder='Enter your email' required onChange={(e)=>setEmail(e.target.value)}/></div>
    <div>Password : <input className='inputfield' name='password' value={password} placeholder='Enter your password' required onChange={(e)=>setPassword(e.target.value)}/></div>
    <button className='submit' onClick={handleLogin}>SUBMIT</button>
    </div>
  )
}

export default Login
