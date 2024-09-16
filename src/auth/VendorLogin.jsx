import React, {useState} from 'react'
import "./VendorLogin.css"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import { PiGreaterThanThin } from "react-icons/pi";
import Venlogo from "../assets/Group 10.png"

const VendorLogin = () => {

  const [seePassword, seteSePassword] = useState(true)
    
  const lookPassword =()=>{
      seteSePassword(false)
  }

  return (
    <div className='VLogin-con'>
          <div className='VLogin-holder'>
          <div className='VLogin-inner'>
            <div className='Vgroceria'>
              <img src={Venlogo} alt="" />
            </div>
            <div className='VLogin-div'>
              <div className='Vlogin-Log'>
                <div className='Vlogin-top'>
                  <p>Login to your account</p>
                </div>
                <div className='Vlogin-down'>
                  <p>New on Groceria? </p>
                  <p className='Vregister'>Create an account</p>
                </div>
              </div>
              <div className='Vlogin-Input'>
                <p>Email</p>
                <input type="text" />
                <p>Password</p>
                <div className='Vlogin-pass'>
                <input className='ven-inputLog' type={seePassword?"password":"text"}/>
                    {
                    seePassword?<FaRegEye   onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                </div>
                <div className='Vlogin-forget'><p className='c-forget'>Forgot Password?</p></div>
                          <div className='Vlogin-btn'>
                            <p className='vlogin-vector'>Login <PiGreaterThanThin /></p>
                          </div>
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default VendorLogin