import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
// import { useNavigate } from 'react-router-dom'
import "./VerifyPassword.css"
import logoImg from "../assets/Group 10.png"
import { NavLink } from 'react-router-dom'
// import fruit from "../assets/fruitman.png"

const VerifyPassword = () => {
    // const nav = useNavigate();
    const [seePassword, seteSePassword] = useState(true)
    const lookPassword =()=>{
        seteSePassword(false)
    }
      return (
    <div className='signupCon'>
        <div className='signupholder'>
           <div className='loginHolder'>
               <div className='login-writeup'>
                  <div className='login-logo'>
                    <img src={logoImg} alt="" />
                  </div>
                  <div className='logindetail'>
                    <div className='loginToAcount'>Enter your new password below</div>
                  </div>
               </div>
               <div className='login-main'>
                <div className='loginIner'>
                  
                <div  className='paswordHolder'>
                          <input className='input-four' type={seePassword?"password":"text"} placeholder='New Password' />
                          {
                    seePassword?<FaRegEye size={30} onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                        </div>
                </div>
                <div className='loginbtnHolder'>
                  {/* <div className='forget'><p>Forgot Password?</p></div> */}
                  <div className='Loginbtn'><NavLink to='/login'>Verify</NavLink></div>
                  
             </div>
              </div>
           </div>
        </div>
   
   </div>
  )
}

export default VerifyPassword
