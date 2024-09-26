// import React from 'react'
// import './header.css'
// import {NavLink, useNavigate} from 'react-router-dom'
// import { useState } from 'react'
// import { IoMenu } from "react-icons/io5";
// import BuggerMenu from './BuggerMenu';
// import { AiOutlineClose } from "react-icons/ai";
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const nav = useNavigate()
//     const [burgerMenu, setBurgerMenu] = useState(false)
  
//   return (

//     <div className='header'>
//       <div className="headerLogo" onClick={()=>nav('/')}>
//         <img src={"./Logo.svg"} alt="" />
//         {
//           burgerMenu ? <BuggerMenu setBurgerMenu={setBurgerMenu}/> : null
//         }
//       </div>

//       <div className='headerMenu' onClick={(()=>setBurgerMenu(!burgerMenu))}>
//         {
//           !burgerMenu ?
//         <IoMenu  size= "40px" />:
//       <AiOutlineClose size={30} />

//         }
//         </div>
//       <div className="headerNav">
//         <ul>
//           <li><NavLink to= '/' className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>Home</NavLink></li>
//           <li><NavLink to= '/store' className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>Store</NavLink></li>
//           <li><NavLink to= '/AboutForm' className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>About Us</NavLink></li>
//           <li><NavLink to= '/contact' className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>Contact us</NavLink></li>
//           <NavLink to= '/signup'>
//           <button className='registerButton'>Register</button>
//              </NavLink>
//           <NavLink to = '/login'>
//           <button className='Sign-In-Button'>Log in</button>
//           </NavLink>
//         </ul>


//       </div>
//     </div>
//   )
// }

// export default Header


import React, { useState } from 'react';
import './header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import  SecondHamburger from './SecondHamburger';

const Header = () => {
  const nav = useNavigate();
  const [burgerMenu, setBurgerMenu] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setBurgerMenu(!burgerMenu);
  };

  // Function to handle navigation and close menu
  const handleNavigate = (path) => {
    nav(path);
    setBurgerMenu(false); // Close the menu after navigation
  };

  return (
    <div className='header'>
      <div className="headerLogo" onClick={() => handleNavigate('/')}>
        <img src={"./Logo.svg"} alt="Logo" />
      </div>

      <div className='headerMenu' onClick={toggleMenu}>
        {
          !burgerMenu ? <IoMenu size="40px" /> : <AiOutlineClose size={30} />
        }
      </div>

      <div className="headerNav">
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/store' className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
              Store
            </NavLink>
          </li>
          <li>
            <NavLink to='/AboutForm' className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
              Contact Us
            </NavLink>
          </li>
          <NavLink to='/signup'>
            <button className='registerButton'>Register</button>
          </NavLink>
          <NavLink to='/login'>
            <button className='Sign-In-Button'>Log In</button>
          </NavLink>
        </ul>
      </div>

      {burgerMenu && (
        <SecondHamburger setBurgerMenu={setBurgerMenu} handleNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default Header;
