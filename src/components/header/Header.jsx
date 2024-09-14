import React from 'react'
import './header.css'
import logo from '../../assets/logo.svg'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const userData = useSelector((state)=> state.groceria.userData)
  console.log(userData)
  const data = Object.values(userData)

  // const newdata = data.map((e)= )
  return (
    <div className='header'>
      <div className="headerLogo">
        <img src={logo} alt="" />
      </div>
      <div className="headerNav">
        <ul>
          <li>Home</li>
          <li><NavLink to='/'>Products</NavLink></li>
          <li><NavLink to= '/store'>Store</NavLink></li>
          <li>About us</li>
          <NavLink to= '/signup'>
          <button className='registerButton'>Register</button>
             </NavLink>
          
          <button className='Sign-In-Button'>Log in</button>
        </ul>

      </div>
    </div>
  )
}

export default Header