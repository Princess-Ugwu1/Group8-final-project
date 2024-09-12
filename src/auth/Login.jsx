import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
// import { useNavigate } from 'react-router-dom'
import "./Login.css"
import logoImg from "../assets/Group 10.png"
// import fruit from "../assets/fruitman.png"
import { NavLink } from 'react-router-dom'

const Login = () => {
    // const nav = useNavigate();
    const [seePassword, seteSePassword] = useState(true)
    const lookPassword =()=>{
        seteSePassword(false)
    }
      return (
    <div className='signupCon9'>
        <div className='signupholder'>
           <div className='loginHolder'>
               <div className='login-writeup'>
                  <div className='login-logo'>
                    <img src={logoImg} alt="" />
                  </div>
                  <div className='login-detail'>
                    <div className='loginToAccount'><p className='youraccount'>Login to your account</p></div>
                    <div className='createAnAccount'>
                      <p>New on Groceria? </p>
                      <p className='createText'>Create an account</p>
                    </div>
                  </div>
               </div>
               <div className='login-main'>
        <div style={{height:200}} className='loginInner'>
                  <p>Email</p>
                  <input className='email-input3' type="text" />
                  <p>Password</p>
                  <div style={{height:40}} className='passwordHolder3'>
                          <input className='input-four3' type={seePassword?"password":"text"} />
                          {
                    seePassword?<FaRegEye size={30} onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                        </div>
                </div>
                <div className='loginbtnHolder'>
                  <NavLink to='/resetpassword'><div className='forget'>Forgot Password?</div></NavLink>
                  {/* <NavLink to='/'><div className='Loginbtn'>Login</div></NavLink> */}
                  <div className='Loginbtn1'><NavLink to='/'>Login</NavLink></div>
             </div>
              </div>
           </div>
        </div>
   
   </div>
  )
}

export default Login
