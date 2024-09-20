import React from 'react'
import "./SignupVerify.css"
import svlogo from "../assets/Group 10.png"
import svenlope from "../assets/envelope.jpg"

const SignupVerify = () => {
  return (
    <div className='SV-container'>
         <div className='SV-holder'>
            <div className='SV-logo'>
                <img src={svlogo} alt="" />
            </div>
            <div className='SV-writeup'>
                <div className='SV-img'>
                    <img src={svenlope} alt="" />
                </div>
                <div className='SV-text'>
                    <div className='text-1'>
                        <p>Check your mailbox!</p>
                    </div>
                    <div className='text-2'>
                        <p>We sent you a link to verify email.</p>
                        <p>Check your spam folder if you do not hear from us after two minutes</p>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default SignupVerify