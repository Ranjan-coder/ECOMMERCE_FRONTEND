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
import Topnavbar from './Topnavbar';

const RouteCompo = () => {

  return (
    <>

        <div id='navlink'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/phone'>Phone</NavLink>
        <NavLink to='/laptop'>Laptop</NavLink>
        <NavLink to='/camera'>Camera</NavLink>
        <NavLink to='/fashion'>Fashion</NavLink>
        <NavLink to='/appliance'>Appliance</NavLink>
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
                <Route path='/' element={<Topnavbar/>}/>
            </Routes>
        </DataCompo>
    </>

    )
}

export default RouteCompo