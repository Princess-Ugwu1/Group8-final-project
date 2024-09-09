import React from 'react'
import './header.css'
import logo from '../../assets/logo.svg'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="headerLogo">
        <img src={logo} alt="" />
      </div>
      <div className="headerNav">
        <ul>
          <li>Home</li>
          <li><NavLink to='/'className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>Products</NavLink></li>
          <li><NavLink to= '/store'className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>Store</NavLink></li>
          <li>About us</li>
          <button className='registerButton'>Register</button>
          <button className='Sign-In-Button'>Log in</button>
        </ul>

      </div>
    </div>
  )
}

export default Header