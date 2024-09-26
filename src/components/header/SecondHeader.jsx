import React, { useState, useEffect, useRef } from 'react';
import './SecondHeader.css';
import { BsCart } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";  // Hamburger menu icon
import { AiOutlineClose } from "react-icons/ai";  // Close icon
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate } from 'react-router-dom';
import BuggerMenu from './BuggerMenu';
import { useSelector } from 'react-redux';

const SecondHeader = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const orders = useSelector((state) => state?.groceria?.userData?.orders);
  const nav = useNavigate();
  const menuRef = useRef(null);  // Ref to track the menu container

  // Function to toggle the burger menu
  const toggleMenu = () => {
    setBurgerMenu(!burgerMenu);
  };

  // Function to close the menu if clicked outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setBurgerMenu(false);  // Close the menu
    }
  };

  useEffect(() => {
    if (burgerMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [burgerMenu]);

  return (
    <div className='SecondHeaderWrapper'>
      <div className="secondHeaderContainer">
        <div className="SecondLogo" onClick={() => nav('/')}>
          <img src={"./Logo.svg"} alt="Logo" />
        </div>

        <div className="secondHeaderNav">
          <p>
            <NavLink to='/' className={({ isActive }) => isActive ? "SecondHeaderActive" : "SecondHeaderNotActive"}>
              Home
            </NavLink>
          </p>
          <p>
            <NavLink to='/store' className={({ isActive }) => isActive ? "SecondHeaderActive" : "SecondHeaderNotActive"}>
              Store
            </NavLink>
          </p>
          <p>
            <NavLink to='/product' className={({ isActive }) => isActive ? "SecondHeaderActive" : "SecondHeaderNotActive"}>
              Product
            </NavLink>
          </p>

          <div className="searchBar">
            <input type="text" placeholder='Search for food items' />
            <div className="searchDiv">Search</div>
          </div>

          <div className='cartIcon' onClick={() => nav('/cart')}>
            <BsCart size="30px" />
          </div>
          <div className="cartLength">{orders?.length}</div>

          <div className='profile' onClick={() => nav('/profile')}>
            <CgProfile size={30} />
          </div>

          {/* Menu Toggle Icon */}
          <div className='headerMenu' onClick={toggleMenu}>
            {!burgerMenu ? (
              <IoMenu size="40px" /> 
            ) : (
              <AiOutlineClose size="40px" />  
            )}
          </div>
        </div>

        {/* Hamburger Menu (BuggerMenu) */}
        {burgerMenu && (
          <div ref={menuRef}>
            <BuggerMenu setBurgerMenu={setBurgerMenu} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondHeader;
