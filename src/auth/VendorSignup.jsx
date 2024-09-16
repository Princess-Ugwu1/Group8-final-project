import React from 'react'
import "./VendorSignup.css"
import Vlogo from "../assets/Group 10.png"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import { useState } from "react"
import { PiGreaterThanThin } from "react-icons/pi";
import { NavLink } from 'react-router-dom'

const VendorSignup = () => {

    const [seePassword, seteSePassword] = useState(true)
    
    const lookPassword =()=>{
        seteSePassword(false)
    }

  return (
    <div className='Vsign-con'>
        <div className='Vsign-holder'>
            <div className='Vlogo'>
                <img src={Vlogo} alt="" />
            </div>
            <div className='V-inputholder'>
                <div className='div-create'>
                    <div className='top'><p>Create an account</p></div>
                    <div className='down'>
                        <p>Already have an account?</p>
                         <NavLink to='/vendorlogin'><p className='Vlog'> Login</p></NavLink>
                    </div>
                
                </div>
                <div className='Vinput-inner'>
                    <p>Business Name</p>
                    <input type="text" />
                    <p>Email</p>
                    <input type="text" />
                    <p>Password</p>
                    <div className='passdiv'>
                    <input className='ven-input' type={seePassword?"password":"text"}/>
                    {
                    seePassword?<FaRegEye   onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                    </div>
                    <p>Description</p>
                    <input type="text" />
                    <div className='venBtn'>
                        <p className='vsignbtn'>Sign Up <PiGreaterThanThin /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VendorSignup