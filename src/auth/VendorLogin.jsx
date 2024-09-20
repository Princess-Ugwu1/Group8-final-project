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
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
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

  const handlesubmit = () => {
    // if(!email || !password){
    //   toast.error("Please Fill all Details")
    // }else{
      const url = "https://groceria.onrender.com/api/v1/merchant-login"
      const userdata = {email, password}
      axios.post(url, userdata)
      .then(res=>{
        console.log(res)
        dispatch(userData(res.data.data))
        toast.success("Successful Signed Up")
        nav(`/ ${res.data.data._id}`)

      })
      .catch((error)=>{
        console.log(error)
      })
    // }
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
                <input type="text"  onChange={handleemail}/>
                <p>Password</p>
                <div className='Vlogin-pass'>
                <input className='ven-inputLog' type={seePassword?"password":"text"} onChange={handlepassword}/>
                    {
                    seePassword?<FaRegEye   onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                </div>
                <div className='Vlogin-forget'><p className='c-forget'>Forgot Password?</p></div>
                          <div className='Vlogin-btn'>
                            <p onClick={handlesubmit}  className='vlogin-vector'>Login <PiGreaterThanThin /></p>
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