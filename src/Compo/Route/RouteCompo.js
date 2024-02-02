import React from 'react'
import Home from './Home'
import { NavLink, Route, Routes } from 'react-router-dom';
import DataCompo from '../Store/Store'
import DynamicCompo from './DynamicCompo'
import HamburgerMenuCmp from './HamBurgerMenu'
import Loginregister from './Loginregister'
import Phone from './Phone'
import Laptop from './Laptop'
import Camera from './Camera'
import Fashion from './Fashion'
import Appliance from './Appliance'
import Cart from './Cart';
import Topnavbar from './Topnavbar';

const RouteCompo = () => {

  return (
    <>

        <div id='navlink'>
        <NavLink to='/'><div className='navimgroute'><img className='imgroute' src='https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100' alt='navimg'/>Home</div></NavLink>
        <NavLink to='/phone'><div className='navimgroute'><img className='imgroute' src='https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' alt='navimg'/>Phone</div></NavLink>
        <NavLink to='/laptop'><div className='navimgroute'><img className='imgroute' src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' alt='navimg'/>Laptop</div></NavLink>
        <NavLink to='/camera'><div className='navimgroute'><img className='imgroute' src='https://rukminim2.flixcart.com/image/832/832/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70&crop=false' alt='navimg'/>Camera</div></NavLink>
        <NavLink to='/fashion'><div className='navimgroute'><img className='imgroute' src='https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100' alt='navimg'/>Fashion</div></NavLink>
        <NavLink to='/appliance'><div className='navimgroute'><img className='imgroute' src='https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' alt='navimg'/>Appliance</div></NavLink>
        </div>
        <HamburgerMenuCmp/>

    

        <DataCompo>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/phone' element={<Phone/>}/>
                <Route path='/laptop' element={<Laptop/>}/>
                <Route path='/camera' element={<Camera/>}/>
                <Route path='/fashion' element={<Fashion/>}/>
                <Route path='/appliance' element={<Appliance/>}/>
                <Route path='/dynamic/:id' element={<DynamicCompo/>}/>
                <Route path='/login' element={<Loginregister/>}/>
                <Route path='/cart/:id' element={<Cart/>}/>
                <Route path='/' element={<Topnavbar/>}/>
            </Routes>
        </DataCompo>
    </>

    )
}

export default RouteCompo