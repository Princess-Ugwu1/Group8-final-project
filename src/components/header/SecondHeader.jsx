import React, { useState } from 'react'
import './SecondHeader.css'
import { BsCart } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

import { NavLink, useNavigate } from 'react-router-dom';
import BuggerMenu from './BuggerMenu';
// import './header.css'

const SecondHeader = () => {
const [filteredData,setFilteredData]=useState()
    const nav = useNavigate()
    const [ burgerMenu, setBurgerMenu] = useState(false)

  return (
    <div className='SecondHeaderWrapper'>
        <div className="secondHeaderContainer">  
       
        <div className="SecondLogo" onClick={()=>nav('/')}><img src={"./Logo.svg"} alt="" /></div>
            <div className="secondHeaderNav">
                <p> <NavLink to= '/'className={({isActive}) =>  isActive ? "SecondHeaderActive" : "SecondHeaderNotActive"}>Home</NavLink></p>
                <p className=''>  <NavLink to= '/store'className={({isActive}) =>  isActive ? "SecondHeaderActive" : "SecondHeaderNotActive"}>Store</NavLink></p>
                {/* <p className=''>  <NavLink to= '/items/:id'className={({isActive}) =>  isActive ? "SecondHeaderActive" : "SecondHeaderNotActive"}>Store</NavLink></p> */}
                <p className=''>  <NavLink to= '/product'className={({isActive}) =>  isActive ? "SecondHeaderActive" : "SecondHeaderNotActive"}>Product</NavLink></p>
               <div className="searchBar">
                    <input type="text" placeholder='search for food items'/>
                    <div className="searchDiv"onClick={()=>search(productName)}>Search</div>
                </div>
                <div className='cartIcon' onClick={()=> nav('/cart')}><BsCart size="25px"/></div>
                <div className='profile'onClick={()=>nav('/profile')}></div>
                  <div className='headerMenu'><IoMenu size="40px" onClick={(()=>setBurgerMenu(true))}/></div>
                {burgerMenu ? <BuggerMenu/> : null}
            </div>
        </div>
       
    </div>
  )
}

export default SecondHeader