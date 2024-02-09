import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import UserDetails from './Username';
// import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Topnavbar = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    // logout button 
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwtToken'));

    const handleLogout = () => {
        // Remove JWT token from localStorage
        localStorage.removeItem('jwtToken');
        // Update state to reflect logout
        setIsLoggedIn(false);
        navigate('/login')
        // toast.success('Login/Register')
    };



    const handleLoginRegister = () => {
        navigate('/login');
    };

    // const handleSearch = async () => {
    //     try {
    //       const response = await axios.get(`https://ecommercebackend-ptf5.onrender.com/pages/log/data?name=${searchTerm}`);
    //       setSearchResults(response.data);
    //     } catch (error) {
    //       console.error('Error searching products:', error);
    //     }
    //   };

    return (
        <>
            <div className='topnavbar'>
                <div onClick={() => navigate('/')} className='logocorrection'>
                    <img className='logo' src={require('../Imageh/ISHOPBUFFER.png')} alt="logoimage" />
                </div>
                <div className='topnavbarright'>
                    {/* <div className='topnavbarsearch'>
                        <input
                            className='topnavbarsearch1'
                            placeholder='Search Here.....'
                            value={searchTerm}
                            onChange={(e) => searchTerm(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                 handleSearch()
                                }
                            }}
                        />
                        <div id='searchbtm' onClick={handleSearch}>
                            <FontAwesomeIcon id='searchbtm' icon={faSearch} />
                        </div>
                    </div> */}
                    <div className='navbaricon'>
                        <div className='icon21' onClick={handleLoginRegister}>
                            <FontAwesomeIcon className='icon2' icon={faCircleUser} /><UserDetails/>
                        </div>
                        <div className='icon3' onClick={() => navigate('/cart')}>
                            <FontAwesomeIcon className='icon3' icon={faCartShopping} />
                        </div>
                        <div>{isLoggedIn && (<button className='logout' onClick={handleLogout}>LOGOUT</button>)}</div>
                        {/* <ToastContainer /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topnavbar;
