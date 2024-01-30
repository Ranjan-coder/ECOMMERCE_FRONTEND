import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, NavLink, useNavigate } from 'react-router-dom';

const Topnavbar = () => {

    const Navigate = useNavigate()

const handleLoginRegister=()=>{
  Navigate('/login')
}

  return (
    <>
    <div className='topnavbar'>
    {/* onClick={()=>Navigate('/')} */}
        <div><img className='logo'  src={require('../Imageh/ISHOP.png')} alt="logoimage" /></div>
        <div className='topnavbarright'>
          <div className='topnavbarsearch'><input className='topnavbarsearch1' placeholder='Search Here.....' />
            <div id='searchbtm'><FontAwesomeIcon icon={faSearch} />
            </div>
          </div>

          {/* <NavLink to='/login'> */}
            <div className='icon2' onClick={handleLoginRegister}><FontAwesomeIcon className='icon2' icon={faUser}/></div>
            {/* </NavLink> */}
            {/* <BrowserRouter> */}
          {/* <NavLink to='/login'><div className='icon2'><FontAwesomeIcon className='icon2' icon={faUser}/></div></NavLink> */}
            {/* </BrowserRouter> */}
          <div className='icon3'><FontAwesomeIcon className='icon3' icon={faCartShopping} style={{ "--fa-primary-color": "#5f93ec", "--fa-secondary-color": "#3374e6", }}/></div>
        </div>
      </div>
    </>
    
  )
}

export default Topnavbar