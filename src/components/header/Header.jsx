import React from 'react'
import './header.css'
// import logo from '../../assets/logo.svg'
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
        <img src={"./Logo.svg"} alt="" />
      </div>
      <div className="headerNav">
        <ul>
          <li>Home</li>
          <li><NavLink to= '/store'className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>Store</NavLink></li>
          <li>About us</li>
          <NavLink to= '/signup'>
          <button className='registerButton'>Register</button>
             </NavLink>
          <NavLink to = '/login'>
          <button className='Sign-In-Button'>Log in</button>
          </NavLink>
        </ul>


      </div>
    </div>
  )
}

export default Header