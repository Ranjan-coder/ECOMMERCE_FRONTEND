// import React, { useState } from 'react'
// import axios from 'axios'
// import signup from '../Imageh/signup.jpg'
// import { useNavigate } from 'react-router-dom';


// const Register = () => {

//     const[name,setName] = useState('')
//     const[email,setEmail] = useState('')
//     const[password,setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleRegister=()=>{
//         try{
//             const response = axios.post('https://ecommercebackend-ptf5.onrender.com/pages/log/register',{name,email,password})
//             .then((res)=>{
//                 console.log(res.data,'register data')
//                 if(res.data.msg === 'This email is already exist'){
//                 alert(res.data.msg)
//                 navigate('/login')
//                 }
//                 else{
//                     localStorage.setItem('jwtToken : ',res.data.token)
//                 }
//             })
//             console.log(response.dat);
//         }
//         catch(error){
//             console.error('registration failed : ',error);
//         }
//     }

//   return (
//     <>
//     <div className='registerdetails registerdetails1'>
//     <div>
//     <img className='signupimg' src={signup} alt="my-gif" />
//     </div>

//     <div>REGISTER DETAILS</div>
//     <div>Name : <input className='inputfield' type='text' value={name} name='name' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} required/></div>
//     <div>Email : <input className='inputfield' type='email' value={email} name='email' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} required/></div>
//     <div>Password : <input className='inputfield' value={password} name='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} required/></div>
//     <button className='submit' onClick={handleRegister}>REGISTER</button>
//     </div>
    
//     </>
    

//   )
// }

// export default Register



import React, { useState } from 'react';
import axios from 'axios';
import signup from '../Imageh/signup.jpg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('https://ecommercebackend-ptf5.onrender.com/pages/log/register', {
                name: name,
                email: email,
                password: password
            });
            console.log(response.data, 'register data');
            if (response.data.msg === 'This email is already registered') {
                alert(response.data.msg);
                navigate('/login');
            } else {
                localStorage.setItem('jwtToken : ', response.data.jwtToken);
            }
        } catch (error) {
            console.error('registration failed : ', error);
        }
    };

    return (
        <>
            <div className='registerdetails registerdetails1'>
                <div>
                    <img className='signupimg' src={signup} alt="my-gif" />
                </div>
                <div>REGISTER DETAILS</div>
                <div>Name : <input className='inputfield' type='text' value={name} name='name' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} required /></div>
                <div>Email : <input className='inputfield' type='email' value={email} name='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required /></div>
                <div>Password : <input type='password' className='inputfield' value={password} name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required /></div>
                <button className='submit' onClick={handleRegister}>REGISTER</button>
            </div>
        </>
    );
};

export default Register;
