import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import "./Signup.css"
import logoImg from "../assets/Group 10.png"
import {toast , Toaster} from 'react-hot-toast'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { userData } from '../Global/slice'

// import useDis
// import u
const Signup = () => {
const dispatch = useDispatch()
const nav = useNavigate()
  

    // const nav = useNavigate();
    const [seePassword, seteSePassword] = useState(true)
    
    const lookPassword =()=>{
        seteSePassword(false)
    }
    const [fullname, setfullname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    // const [password, setPassword] = useState()

    // const [showPassword, setShowPassword] = useState(true)
    // const [passwordCheck, setPasswordCheck] = useState(false)
    // const [passwordErrorLow, setPasswordErrorLow] = useState("");
    // const [passwordErrorUpper, setPasswordErrorUpper] = useState(false);
    // const [passwordErrorNumber, setPasswordErrorNumber] = useState(false);
    // const [passwordErrorSymbol, setPasswordErrorSymbol] = useState(false);
    // const [emailErrorShow, setEmailErrorShow] = useState(false)
    // const [emailError, setEmailError] = useState()
    const [loading, setLoading] = useState(false)

    const handleEmailChange=(e)=>{
      const newEmail = e.target.value;
      setEmail (newEmail);
      if(newEmail.trim()===""){
          toast.error("Email is required");
          setEmailErrorShow(false)
      }else {
        null
      }
    };
  
   const handleSubmit =()=>{
    // e.preventDeafult()
      if(!email || !password || !fullname || !phoneNumber){
        toast.error("Please Fill all Details")
      }else{
         setLoading(true)
        const url = "https://groceria.onrender.com/api/v1/sign-up"
        const newData = { email, phoneNumber, fullName:fullname, password}
       axios.post(url, newData)
       .then(res=>{
        console.log(res)
        // setLoading(false)
        nav(`/signupverify/ ${res.data.data._id}`)
        setLoading(true)
       })
       .catch((error)=>{
        console.log(error)
        toast.error(error.response.data)
        setLoading(false)
       })
      }
   }

    const handlefullname=(e)=>{
      const newData = e.target.value
      setfullname(newData)
    }

    const handlePassword =(e)=>{
      const newData  = e.target.value
      setPassword(newData)

      if(newData.trim()===""){
          toast.error("Password is required")
      }else{
        null
      }
    }
    const handelphoneNumber =(e)=>{
      const newData  = e.target.value
      setPhoneNumber(newData)

      if(newData.trim()===""){
          toast.error("PhoneNumber is required")
      }else{
        null
      }
    }

    

      return (
    <div className='signupCon9'>
        <div className='signupholder'>
          <div className='signupleft'>
            <div className='signupleftinner'>
              <div className='logo'onClick={()=>nav('/')}>
                <img className='image' src={logoImg} alt="" onClick={()=>nav('/home')}/>
              </div>
              <div className='description'>
                <p className='groceria'>Sign up with Groceria</p>
                <p className='desc'>Get food in bulk from the comfort of your zone</p>
              </div>
            </div>
          </div>
          <div className='signupright'>
            <div className='signuprightinner'>
              <div className='signupInputHolder'>
                <div className='createbox'>
                  <div className='create'><p className='created2'>Create an account</p></div>
                  
                </div>
                <div className='inputholder'>
                  <div className='inputholderInner'>
                    <div className='signLeft'>
                      <div className='signInput'>
                        <p>FullName</p>
                        <input className='input-one' type="text"  onChange={handlefullname}/>
                      </div>
                      <div className='signInput'>
                        <p>Phone Number</p>
                        <input className='input-two' type="text" onChange={handelphoneNumber} />
                      </div>
                    </div>
                    <div className='signRight'>
                      <div className='signInput'>
                        <p>Email</p>
                        <input className='input-three' type="text" onChange={handleEmailChange}/>
                      </div>
                      <div className='signInput'>
                        <p>Password</p>
                        <div className='passwordHolder2'>
                          <input className='input-four2' type={seePassword?"password":"text"} onChange={handlePassword}/>
                          {
                    seePassword?<FaRegEye size={15}  onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className='signupBtn1' onClick={handleSubmit}>
                    <p >{
                      loading ?  "Loading..." :"Signup"
}
</p>
                  </button>

                </div>
              </div>
            </div>
<Toaster/>
          </div>
        </div>
    </div>
  )
}

export default Signup
