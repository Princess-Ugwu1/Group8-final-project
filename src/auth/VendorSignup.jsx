import React from 'react'
import "./VendorSignup.css"
import Vlogo from "../assets/Group 10.png"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import { useState } from "react"
import { PiGreaterThanThin } from "react-icons/pi";
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {toast , Toaster} from 'react-hot-toast'

const VendorSignup = () => {

const dispatch = useDispatch()
const nav = useNavigate()

    const [seePassword, seteSePassword] = useState(true)
    
    const lookPassword =()=>{
        seteSePassword(false)
    }

    const [businessName, setBusinessname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [description, setDescription] = useState()
    // console.log(description)

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
  
   const handleSubmit =async ()=>{
    // e.preventDeafult()
    //   if(!email || !password || !businessName || !description){
    //     // toast.error("Please Fill all Details")
    //   }else{
       
        const url = "https://groceria.onrender.com/api/v1/merchant-signup"
        const newData = { email, description,  businessName, password}

        try {
            console.log(newData);
            
            const res = await axios.post(url, newData);
            console.log(res);
            nav('/vendorlogin')
             setLoading(true)
            
        } catch (error) {
            console.log( error)
             toast.error(error.response.data)  
        }
    //    await axios.post(url, newData)
    //    .then(res=>{
    //     console.log(res)
    //     console.log("vhfvhheghiiefe");
        
    //     nav('/signupverify')
    //     setLoading(true)
    //    })
    //    .catch((error)=>{
    //     console.log( "gfeuihvhscbkdjf")
    //     toast.error(error.response.data)
    //     setLoading(false)
    //    })
    //   }
   }

    const handleBusinessname=(e)=>{
      const newData = e.target.value
      setBusinessname(newData)
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
    const handleDescription =(e)=>{
      const newData  = e.target.value
      setDescription(newData)

      if(newData.trim()===""){
          toast.error("PhoneNumber is required")
      }else{
        null
      }
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
                    <input type="text"  onChange={handleBusinessname}/>
                    <p>Email</p>
                    <input type="text"  onChange={handleEmailChange}/>
                    <p>Password</p>
                    <div className='passdiv'>
                    <input className='ven-input' type={seePassword?"password":"text"} onChange={handlePassword}/>
                    {
                    seePassword?<FaRegEye   onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                    </div>
                    <p>Description</p>
                    <input type="text"  onChange={handleDescription}/>
                    <div className='venBtn'>
                        <p onClick={handleSubmit} className='vsignbtn'>{
                      loading ? "Loading...": "Sign up"
} <PiGreaterThanThin /></p>
                    </div>
                </div>
            </div>
        </div>
        <Toaster/>
    </div>
  )
}

export default VendorSignup