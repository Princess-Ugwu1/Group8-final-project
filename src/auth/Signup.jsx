import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
// import { useNavigate } from 'react-router-dom'
import "./Signup.css"
import logoImg from "../assets/Group 10.png"
// import fruit from "../assets/fruitman.png"
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    // const nav = useNavigate();
    const [seePassword, seteSePassword] = useState(true)
    const lookPassword =()=>{
        seteSePassword(false)
    }
    const [username, setUsernanme] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const [showPassword, setShowPassword] = useState(true)
    const [passwordCheck, setPasswordCheck] = useState(false)
    const [passwordErrorLow, setPasswordErrorLow] = useState("");
    const [passwordErrorUpper, setPasswordErrorUpper] = useState(false);
    const [passwordErrorNumber, setPasswordErrorNumber] = useState(false);
    const [passwordErrorSymbol, setPasswordErrorSymbol] = useState(false);
    const [emailErrorShow, setEmailErrorShow] = useState(false)
    const [emailError, setEmailError] = useState()
    const [loading, setLoading] = useState()

    const containsLowercase = (input) => {
        
      return /[a-z]/.test(input);
    };
    
    const containsUpperrcase = (input) => {
      
      return /[A-Z]/.test(input);
    };
  
    const containsNumber = (input) => {
      
      return /\d/.test(input);
    };
  
    const containsSymbol = (input) => {

      return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
    };

    const validateEmail = (input) => {
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
    };

    const handleEmailChange=(e)=>{
      const newEmail = e.target.value;
      setEmail (newEmail);
      if(newEmail.trim()===""){
          toast.error("Email is required");
          setEmailErrorShow(false)
      }else if(!validateEmail(newEmail)){
          setEmailErrorShow(true)
          setEmailError("Invalid email format");
      }else{
          setEmailError("")
      }
    };

    const handleSignUp = async () => {
    
      const url = "https://testapi-c8ay.onrender.com/sign-up"
      console.log (url)
      if(!fullName || !email || !password || !phoneNumber ){
        toast.error("All fields are required and check for errors")
      }else{
          setLoading(true)
        try {
          const userDetails ={
            fullName : fullName,
            email: email,
            password: password,
            phoneNumber: phoneNumber
          }
          const res = await axios.post(`${url}/register`, userDetails)
          console.log(res)
          setLoading(false)
          alert(res?.data.message)
          // nav("/login")
          
        } catch (error) {
          console.log(error)
          setLoading(false)
          toast.error(error?.response.data.message)
        }
      }
    }

    const handlefullname=(e)=>{
      const newData = e.target.value
      setUsernanme(newData)
    }

    const handlePassword =(e)=>{
      const newData  = e.target.value
      setPassword(newData)

      if(newData.trim()===""){
          toast.error("Password is required")
          setPasswordCheck(false)
      }if (newData.length>0){
          setPasswordCheck(true)
      }if(!containsLowercase(newData)){
          setPasswordErrorLow(true)
      }else{
          setPasswordErrorLow(false)
      }if(!containsUpperrcase(newData)){
          setPasswordErrorUpper(true)
      }else{
          setPasswordErrorUpper(false)
      }if(!containsNumber(newData)){
          setPasswordErrorNumber(true)
      }else{
          setPasswordErrorNumber(false)
      }if(!containsSymbol(newData)){
          setPasswordErrorSymbol(true)
      }else{
          setPasswordErrorSymbol(false)
      }
    }

    

      return (
    <div className='signupCon'>
        <div className='signupholder'>
          <div className='signupleft'>
            <div className='signupleftinner'>
              <div className='logo'>
                <img src={logoImg} alt="" />
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
                  <div className='create'><p className='created'>Create an account</p></div>
                  <div className='already'>
                    <p>Already have an account?</p>
                   <NavLink to='/login'><p className='login'>Login</p></NavLink> 
                  </div>
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
                        <input className='input-two' type="text" />
                      </div>
                    </div>
                    <div className='signRight'>
                      <div className='signInput'>
                        <p>Email</p>
                        <input className='input-three' type="text" onChange={handleEmailChange}/>
                      </div>
                      <div className='signInput'>
                        <p>Password</p>
                        <div className='passwordHolder'>
                          <input className='input-four' type={seePassword?"password":"text"} onChange={handlePassword}/>
                          {
                    seePassword?<FaRegEye size={15}  onClick={lookPassword}/>:<FaRegEyeSlash  onClick={() => seteSePassword(true)}/>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='signupBtn'>
                    <p onChange={Signup}>Sign up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup
