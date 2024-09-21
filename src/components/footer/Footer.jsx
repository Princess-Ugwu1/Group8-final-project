import React from 'react'
import {NavLink} from 'react-router-dom'


import "./footer.css"
// import logo from "../../assets/logo.svg"
import { FaLocationDot } from "react-icons/fa6";

const Footer = () =>{
    return(
        <div className="Footer-container">
            <div className="box">
                <div className="box1">
                   <img src={'./Group 2.png'} alt="" />
                </div>
                <div className="box2">
                <div className="peace">
                   <span className='footerSubNames'>Quick Links</span> 
                    </div>
                <p>Home </p>
                <p>Stores</p>
                <p><NavLink to= '/vendorsign' className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>Register your store</NavLink></p>
                </div>
                <div className="box2">
                <div className="peace"><span className='footerSubNames'>Information</span></div>
                <p>About Us </p>
                <p>Policy</p>
                <p>Refund Policy</p>
                <p>Contact Us</p>
                </div>
                <div className="box2">
                <div className="peace"><span className='footerSubNames'>Where we operate</span></div>
                    <p><FaLocationDot /> Lagos, Nigeria.</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;