import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
// import { useNavigate } from 'react-router-dom'
import "./ResetPassword.css"
import logoImg from "../assets/Group 10.png"
import { NavLink } from 'react-router-dom'
// import fruit from "../assets/fruitman.png"

const ResetPassword = () => {
    // const nav = useNavigate();
    // const [seePassword, seteSePassword] = useState(true)
    // const lookPassword =()=>{
    //     seteSePassword(false)
    // }
      return (
    <div className='signupCon'>
        <div className='signupholder'>
           <div className='loginHolder'>
               <div className='login-writeup'>
                  <div className='login-logo'>
                    <img src={logoImg} alt="" />
                  </div>
                  <div className='login-detail'>
                    <div className='loginToAccount'><p className='reset'>Enter your email associated with your account to reset password</p></div>
                  </div>
               </div>
               <div className='login-main'>
                <div className='loginInner'>
                    <p>Email</p>
                    <input className='emailinput' type="text" />
                </div>
                <div className='loginbtnHolder'>
                  {/* <div className='forget'></div> */}
                  <div className='Loginbtn11'><NavLink to='/verifypassword'>Reset Password</NavLink></div>
                  
             </div>
              </div>
           </div>
        </div>
   
   </div>
  )
}

export default ResetPassword