import React from 'react';
import './bugermenu.css';
import { NavLink } from 'react-router-dom';
import "./SecoundHamburger.css"

const SecondHamburger = ({ setBurgerMenu, handleNavigate }) => {

  const closeMenu = () => {
    setBurgerMenu(false);
  };

  return (
    <div className='BuggerMenu'>
      <div className='bugger-menu-main'>
        {/* Example of menu items */}
        <div className='bugger-holder' onClick={() => handleNavigate('/login')}>Log In</div>
        <div className='bugger-holder' onClick={() => handleNavigate('/signup')}>Sign Up</div>
        <div className='bugger-holder' onClick={() => handleNavigate('/store')}>Store</div>
        <div className='bugger-holder' onClick={() => handleNavigate('/contact')}>Contact Us</div>
        <div className='bugger-holder' onClick={() => handleNavigate('/AboutForm')}>About Us</div>
        {/* <div className='bugger-holder' onClick={() => handleNavigate('/contact')}>Contact Us</div> */}
      </div>
    </div>
  );
};

export default SecondHamburger;
