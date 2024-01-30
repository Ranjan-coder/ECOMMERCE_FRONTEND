// import React from 'react'
import { NavLink } from 'react-router-dom';
import React from 'react';
import { push as Menu } from 'react-burger-menu';

const HamburgerMenuCmp = () => {
  return (
    <Menu>
        <NavLink id="home" className="menu-item" to='/'>Home</NavLink>
        <NavLink id="bollywood" className="menu-item" to='/bollywood'>Bollywood</NavLink>
        <NavLink id="hollywood" className="menu-item" to='/hollywood'>Hollywood</NavLink>
        <NavLink id="fitness" className="menu-item" to='/fitness'>Fitness</NavLink>
        <NavLink id="technology" className="menu-item" to='/technology'>Technology</NavLink>
        <NavLink id="food" className="menu-item" to='/food'>Food</NavLink>

        </Menu>
  );
};

export default HamburgerMenuCmp;