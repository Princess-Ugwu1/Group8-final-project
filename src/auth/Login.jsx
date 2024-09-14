import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
// import { useNavigate } from 'react-router-dom'
import "./Login.css"
import logoImg from "../assets/Group 10.png"
// import fruit from "../assets/fruitman.png"
import { NavLink, useNavigate } from 'react-router-dom'
import {toast, Toaster} from 'react-hot-toast'
import axios from 'axios'
import { userData } from '../Global/slice'
import { useDispatch } from 'react-redux'

const Login = () => {

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
        const url = "https://testapi-c8ay.onrender.com/api/v1/log-in"
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
                  <input className='email-input3' type="text" onChange={handleemail}/>
                  <p>Password</p>
                  <div style={{height:40}} className='passwordHolder3'>
                          <input className='input-four3' type={seePassword?"password":"text"}  onChange={handlepassword}/>
                          {
                    seePassword?<FaRegEye size={30} onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                        </div>
                </div>
                <div className='loginbtnHolder'>
                  <NavLink to='/resetpassword'><div className='forget'>Forgot Password?</div></NavLink>
                  {/* <NavLink to='/'><div className='Loginbtn'>Login</div></NavLink> */}
                  <div className='Loginbtn1' onClick={handlesubmit}>Login</div>
             </div>
              </div>
           </div>
           <Toaster/>
        </div>
   
   </div>
  )
}

export default Login
