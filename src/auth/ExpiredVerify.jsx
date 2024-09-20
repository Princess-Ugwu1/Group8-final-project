import React from 'react'
import "./ExpiredVerify.css"
import exlogo from "../assets/Group 10.png"
// import cancel from "../assets/declinee.jpeg"


const ExpiredVerify = () => {
  return (
    <div className='Ex-container'>
    <div className='Ex-holder'>
       <div className='Ex-logo'>
           <img src={exlogo} alt="" />
       </div>
       <div className='Ex-writeup'>
           <div className='Ex-img'>
               {/* <img src={cancel} alt="" /> */}
           </div>
           <div className='Ex-text'>
               <div className='text-11'>
                   <p>Email verification link expired</p>
               </div>
               <div className='text-22'>
                   <p>Looks like the verification link has expired.</p>
                   <p>Not to worry, we can send the link again</p>
               </div>
           </div>
       </div>
       <div className='ExBtn'>
        <p>Resend verification link</p>
       </div>
    </div>
</div>
  )
}

export default ExpiredVerify