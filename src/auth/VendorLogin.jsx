import React, {useState} from 'react'
import "./VendorLogin.css"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import { PiGreaterThanThin } from "react-icons/pi";
import Venlogo from "../assets/Group 10.png"
import { NavLink, useNavigate } from 'react-router-dom'
import {toast, Toaster} from 'react-hot-toast'
import axios from 'axios'
import { userData } from '../Global/slice'
import { useDispatch } from 'react-redux'

const VendorLogin = () => {
  const nav = useNavigate();
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
  const [seePassword, seteSePassword] = useState(true)
    
  const lookPassword =()=>{
      seteSePassword(false)
  }

  const dispatch = useDispatch()
  const handleemail =(e)=>{
    const newdata = e.target.value
    setEmail(newdata)
  }
  console.log(email)
  console.log(password)
  const handlepassword =(e)=>{
    const newdata = e.target.value
    setPassword(newdata)
  }

  const data = {email, password}
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://groceria.onrender.com/api/v1/merchant-login", data);
  
      // Check if the response status is OK (200) or as expected
      if (response.status === 200) {
        // Dispatch user data and save token to local storage
        dispatch(userData(response.data.data));
        localStorage.setItem('token', response.data.token);
        
        // Display success message
        toast.success('Login successful');
  
        // Navigate to the upload page after a delay
        setTimeout(() => {
          nav('/upload');
        }, 2000);
      } else {
        // Handle any unexpected responses
        toast.error('Login failed. Please try again.');
      }
    } catch (error) {
      // Catch and log the error, show a toast message
      console.error("Error during login:", error);
      toast.error('An error occurred. Please try again.');
    }
  };
  return (
    <div className='VLogin-con'>
          <div className='VLogin-holder'>
          <div className='VLogin-inner'>
            <div className='Vgroceria'>
              <img src={Venlogo} alt="" onClick={()=>nav('/home')}/>
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
                <input type="text"  onChange={handleemail} value={email}/>

                <p>Password</p>
                <div className='Vlogin-pass'>
                <input className='ven-inputLog' type={seePassword?"password":"text"} onChange={handlepassword} value={password}/>
                    {
                    seePassword?<FaRegEye   onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                </div>
                <div className='Vlogin-forget'><p className='c-forget'>Forgot Password?</p></div>
                          <div className='Vlogin-btn'>
                            <p onClick={ handleSubmit}  className='vlogin-vector'>Login <PiGreaterThanThin /></p>
                            
                          </div>
              </div>
            </div>
          </div>
          <Toaster/>
          </div>
    </div>
  )
}

export default VendorLogin