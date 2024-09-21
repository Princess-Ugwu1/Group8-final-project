import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom'
import "./ResetPassword.css";
import logoImg from "../assets/Group 10.png";
import { NavLink } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
// import fruit from "../assets/fruitman.png"

const ResetPassword = () => {
  const [email, setEmail] = useState();

  const handleemail = (e) => {
    const newdata = e.target.value;
    setEmail(newdata);
  };
  // const nav = useNavigate();
  // const [seePassword, seteSePassword] = useState(true)
  // const lookPassword =()=>{
  //     seteSePassword(false)
  // }
  const handlereset = () => {
    if (!email) {
      toast.error("Please Enter Your Email");
    } else {
      const url = "https://groceria.onrender.com/api/v1/forgot-password";
      axios
        .post(url, { email })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="signupCon">
      <div className="signupholder">
        <div className="loginHolder">
          <div className="login-writeup">
            <div className="login-logo">
              <img src={logoImg} alt="" />
            </div>
            <div className="login-detail">
              <div className="loginToAccount">
                <p className="reset">
                  Enter your email associated with your account to reset
                  password
                </p>
              </div>
            </div>
          </div>
          <div className="login-main">
            <div className="loginInn">
              <p>Email</p>
              <input
                className="emailinput"
                type="text"
                onChange={handleemail}
              />
            </div>
            <div className="loginbtnHolder33">
              {/* <div className='forget'></div> */}
              <div className="Loginbtn130" onClick={handlereset}>
                Reset Password
              </div>
            </div>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
