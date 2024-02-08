// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping, faCircleUser, faSearch } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';

// const Topnavbar = () => {
//     const Navigate = useNavigate()

// const handleLoginRegister=()=>{
//   Navigate('/login')
// }

//   return (
//     <>
//     <div className='topnavbar'>
    
//         <div onClick={()=>Navigate('/')} className='logocorrection'><img className='logo' src={require('../Imageh/ISHOPBUFFER.png')} alt="logoimage" /></div>
//         <div className='topnavbarright'>
//           <div className='topnavbarsearch'><input className='topnavbarsearch1' placeholder='Search Here.....' />
//             <div id='searchbtm'><FontAwesomeIcon id='searchbtm' icon={faSearch} />
//             </div>
//           </div>
//           <div className='navbaricon'>
//             <div className='icon21' onClick={handleLoginRegister}><FontAwesomeIcon className='icon2' icon={faCircleUser}/></div>

//           <div className='icon3' onClick={()=>Navigate('/cart')}><FontAwesomeIcon className='icon3' icon={faCartShopping}/></div>
//           </div>
//         </div>
//       </div>
//     </>
    
//   )
// }

// export default Topnavbar



import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Topnavbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // logout button 
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwtToken :'));

    const handleLogout = () => {
        // Remove JWT token from localStorage
        localStorage.removeItem('jwtToken :');
        // Update state to reflect logout
        setIsLoggedIn(false);
        navigate('/login')
        // toast.success('Login/Register')
    };



    const handleLoginRegister = () => {
        navigate('/login');
    };

    const handleSearch = () => {
        // Perform search action, e.g., navigate to search results page with searchQuery
        // navigate(`/search?q=${searchQuery}`);
        navigate(`/dynamic/${searchQuery}`);
    };

    return (
        <>
            <div className='topnavbar'>
                <div onClick={() => navigate('/')} className='logocorrection'>
                    <img className='logo' src={require('../Imageh/ISHOPBUFFER.png')} alt="logoimage" />
                </div>
                <div className='topnavbarright'>
                    <div className='topnavbarsearch'>
                        <input
                            className='topnavbarsearch1'
                            placeholder='Search Here.....'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                        />
                        <div id='searchbtm' onClick={handleSearch}>
                            <FontAwesomeIcon id='searchbtm' icon={faSearch} />
                        </div>
                    </div>
                    <div className='navbaricon'>
                        <div className='icon21' onClick={handleLoginRegister}>
                            <FontAwesomeIcon className='icon2' icon={faCircleUser} />
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
