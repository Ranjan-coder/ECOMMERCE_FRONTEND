import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Topnavbar = () => {
    const Navigate = useNavigate()

const handleLoginRegister=()=>{
  Navigate('/login')
}

  return (
    <>
    <div className='topnavbar'>
    
        <div onClick={()=>Navigate('/')}><img className='logo'  src={require('../Imageh/ISHOPBUFFER.png')} alt="logoimage" /></div>
        <div className='topnavbarright'>
          <div className='topnavbarsearch'><input className='topnavbarsearch1' placeholder='Search Here.....' />
            <div id='searchbtm'><FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
            <div className='icon2' onClick={handleLoginRegister}><FontAwesomeIcon className='icon2' icon={faUser}/></div>
            
          <div className='icon3' onClick={()=>Navigate('/cart')}><FontAwesomeIcon className='icon3' icon={faCartShopping}/></div>
        </div>
      </div>
    </>
    
  )
}

export default Topnavbar