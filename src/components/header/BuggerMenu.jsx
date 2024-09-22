import React from 'react'
import "./bugermenu.css"
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate } from 'react-router-dom';


const BuggerMenu = ({setBurgerMenu}) => {
  const nav=useNavigate();

  const closeMenu =()=>{
    setBurgerMenu(false)
  }
  const handleNavigate = (path)=>{
    nav(path);
    closeMenu()
    console.log(path);
    
  }
  console.log(useNavigate,"this is not happening");
  
  return (
    <div className='BuggerMenu'>
             {/* <div className='Bugger-Header'>
                <div className='bugger-headerclose'>
                </div>
              
            </div> */}
                <div className='bugger-menu-main'>
                  {/* <div style={{width:"100%",height:"3rem",background:"white"}} onClick={()=>nav("/signup")}>Register</div> */}
                   {/* <div className='bugger-holder'><NavLink to= '/signup' className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>Register</NavLink></div> */}
                  {/* <NavLink to='signup' className={({isActive}) =>  isActive ? "HeaderActive bugger-holder" : "HeaderNotActive bugger-holder"}>Register</NavLink>
                  <NavLink to= '/login' className={({isActive}) =>  isActive ? "HeaderActive bugger-holder" : "HeaderNotActive bugger-holder"}> Log in</NavLink>
                  <NavLink to= '/store' className={({isActive}) =>  isActive ? "HeaderActive bugger-holder" : "HeaderNotActive bugger-holder"}> Store</NavLink>
                  <NavLink to= '/product' className={({isActive}) =>  isActive ? "HeaderActive bugger-holder" : "HeaderNotActive bugger-holder"}> Products</NavLink>
                  <NavLink to= '/AboutForm' className={({isActive}) =>  isActive ? "HeaderActive bugger-holder" : "HeaderNotActive bugger-holder"}> About Us</NavLink>
                  <NavLink to= '/contact' className={({isActive}) =>  isActive ? "HeaderActive bugger-holder" : "HeaderNotActive bugger-holder"}> Contact Us</NavLink>
                  <NavLink to= '/profile' className={({isActive}) =>  isActive ? "HeaderActive bugger-holder" : "HeaderNotActive bugger-holder"}> Profile</NavLink>
                  <NavLink to= '/vendorsign' className={({isActive}) =>  isActive ? "HeaderActive bugger-holder" : "HeaderNotActive bugger-holder"}> Sign Up as Vendor</NavLink>
                  <NavLink to= '/vendorlogin' className={({isActive}) =>  isActive ? "HeaderActive bugger-holder" : "HeaderNotActive bugger-holder"}> Login Up as Vendor</NavLink> */}

                  <div className='bugger-holder' onClick={()=>handleNavigate('/login')}>Register</div>
                  <div className='bugger-holder' onClick={()=>handleNavigate('/signup')}>Sign up</div>
                  <div className='bugger-holder' onClick={()=>handleNavigate('/store')}>Store</div>
                  <div className='bugger-holder' onClick={()=>handleNavigate('/product')}>Products</div>
                  <div className='bugger-holder' onClick={()=>handleNavigate('/aboutForm')}>About us</div>
                  <div className='bugger-holder' onClick={()=>handleNavigate('/contact')}>Contact us</div>
                  <div className='bugger-holder' onClick={()=>handleNavigate('/profile')}>profile</div>
                  <div className='bugger-holder' onClick={()=>handleNavigate('/vendorsign')}>Sign up as vendor</div>
                  <div className='bugger-holder' onClick={()=>handleNavigate('/vendorlogin')}>Log in as Vendor</div>

                </div>

    </div>
  )
}

export default BuggerMenu