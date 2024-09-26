import React from 'react'
import './homePage.css'
import { IoIosArrowForward } from "react-icons/io";
import HomeStoresCard from './HomeStoresCard';
import Aim from './Aim';

const Homepage = () => {
  return (
    <div className='HomePage'>
        <div className="HomeHeroPage">
            <div className="HomeHeroPageLeft">
                <div className="HomeTextHolder">
                    <p>Make healthy
                        life with <span>fresh</span>   groceries</p>
                        <button className='homeButton'>Start Shopping<IoIosArrowForward /></button>
                      
                </div>
            </div>
            <div className="HomeHeroPageRight">
                <img src="https://res.cloudinary.com/dg2gcfyud/image/upload/v1727285745/WhatsApp_Image_2024-09-25_at_6.33.56_PM-removebg-preview_yse0qt.png" alt="" />
            </div>
        </div>

        <div className="homeStores">
            <div className="homeStoreTopic">Stores on Groceria</div>
            <HomeStoresCard/>
        </div>
        <div className="AimWrapper">
            <div className="aimTopic">
                What you will get
               </div>
           <Aim/>
        </div>
        <div className="howToUse">
            <img src="https://res.cloudinary.com/dg2gcfyud/image/upload/v1726827294/Grp1_rnjy1k.svg" alt="" />
        </div>
        <div className="lastdivWrapper">
                <div className="lastDivText">Shop the Finest Groceries
                Online: Convenience, Quality
                 and Variety at Your Fingertips!
                 <button className='homeButton'>shop now <IoIosArrowForward /></button>
                 </div>
                 
        </div>
    </div>
  )
}

export default Homepage