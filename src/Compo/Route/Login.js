import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()


    const handleLogin=()=>{
        try{
            const response = axios.post('http://localhost:5555/pages/login',{email,password})
            .then((res)=>{
                console.log(res.data,'register data');

                if (res.data.msg === 'user is not registered'){
                    alert(res.data.msg)
                    navigate('/register')
                }
                else{
                    localStorage.setItem('jwtToken :',res.data.token)
                }
            })
            console.log(response.data,'response data');
        }
        catch(error){
            console.error('login failed : ',error);
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
