// import React from 'react'
import { NavLink } from 'react-router-dom';
import React from 'react';
import { push as Menu } from 'react-burger-menu';

const HamburgerMenuCmp = () => {
  return (
    <Menu>
        <NavLink id="home" className="menu-item" to='/'>Home</NavLink>
        <NavLink id="bollywood" className="menu-item" to='/phone'>Phone</NavLink>
        <NavLink id="hollywood" className="menu-item" to='/laptop'>Laptop</NavLink>
        <NavLink id="fitness" className="menu-item" to='/camera'>Camera</NavLink>
        <NavLink id="technology" className="menu-item" to='/fashion'>Fashion</NavLink>
        <NavLink id="food" className="menu-item" to='/appliance'>Appliance</NavLink>

        </Menu>
  );
};

export default HamburgerMenuCmp;