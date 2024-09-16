import React from 'react'
import './SecondHeader.css'
import { BsCart } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
// import './header.css'

const SecondHeader = () => {
    const nav = useNavigate()
  return (
    <div className='SecondHeaderWrapper'>
        <div className="secondHeaderContainer">  
       
        <div className="SecondLogo"><img src={"./Logo.svg"} alt="" /></div>
            <div className="secondHeaderNav">
                <p>Home</p>
                <p>Product</p>
                <div className="searchBar">
                    <input type="text" placeholder='search for food items'/>
                    <div className="searchDiv">Search</div>
                </div>
                <p className='cartIcon'><BsCart /></p>
                <div className='profile'onClick={()=>nav('/profile')}></div>
            </div>
        </div>
       
    </div>
  )
}

export default SecondHeader