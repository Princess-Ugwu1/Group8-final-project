import React, { useEffect, useState } from 'react'
import "./SignupVerify.css"
import svlogo from "../assets/Group 10.png"
import svenlope from "../assets/envelope.jpg"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const SignupVerify = () => {
    const {id }= useParams()
    
    // const userid= id  
    // const userId = Object.values(id)
    const userid2 = id.toString()
    console.log(userid2)
    // useEffect(() => {
    //     const fetchUser = async () => {
    //       try {
    //         const response = await axios.get(`https://your-backend-api.com/api/users/${id}`);
            
    //         if (!response.ok) {
    //           throw new Error('User not found');
    //         }
    
    //         const userData = await response.json();
    //         console.log(userData);
    //         // setLoading(false);
    //       } catch (error) {
    //         console.log(error.message);
    //         // setLoading(false);
    //       }
    //     };
    
    //     fetchUser();
    //   }, [id]);
    
   const Nav = useNavigate()
    const getone = ()=>{
        // setUserid(id)
        const url = `https://groceria.onrender.com/api/v1/getone/${userid2}`
        axios.get(url)
        .then(res=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getone()
    },[id])
  return (
    <div className='SV-container'>
         <div className='SV-holder'>
            <div className='SV-logo'onClick={()=>Nav('/')}>
                <img src={svlogo} alt="" />
            </div>
            <div className='SV-writeup'>
                <div className='SV-img'>
                    <img src={svenlope} alt="" />
                </div>
                <div className='SV-text'>
                    <div className='text-1'>

                        <p>Check your mailbox!</p>
                        <h3> 
                            if  Verification is Successful 
                        </h3>
                        <button onClick={()=> Nav("/login")}>LogIn</button>
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