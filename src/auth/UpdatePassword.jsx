import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
// import { useNavigate } from 'react-router-dom'
import "./UpdatePassword.css"
import logoImg from "../assets/Group 10.png"
// import fruit from "../assets/fruitman.png"

const UpdatePassword = () => {
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
                  <div className='login-detail'>
                    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}} className='loginToAccount'><p className='update'>Create a new password, ensure it's different from the previous one for security</p></div>
                  </div>
               </div>
               <div className='login-main'>
                <div className='loginInner'>
                <div  className='paswordHolder'>
                          <input className='input-four' type={seePassword?"password":"text"} placeholder='Existing Password' />
                          {
                    seePassword?<FaRegEye size={30} onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                        </div>
                <div  className='paswordHolder'>
                          <input className='input-four' type={seePassword?"password":"text"} placeholder='New Password' />
                          {
                    seePassword?<FaRegEye size={30} onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                        </div>
                </div>
                <div style={{display:'flex', justifyContent: 'center'}} className='loginbtnHolder'>
        
                  <div className='Loginbtn'>Login</div>
             </div>
              </div>
           </div>
        </div>
   
   </div>
  )
}

export default UpdatePassword
