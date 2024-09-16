import React from 'react'
import './contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidEnvelope } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";


const Contact = () => {
    const contactCards =[
        { id :1, icon:< IoMdCall/>, title: "+234 9077137226"

    },
    { id:2, icon: <BiSolidEnvelope />, title: "groceria.stores@gmail.com"

    },
    { id:3, icon: <FaLocationDot />, title: "Lagos, Nigeria."

    }
]
  return (
    <div className='contactWrapper'>
        <div className="contactImgWrapper">
            <div className="contactImg">
                <img src={'./contactImg.png'} alt="" />           
            </div>
            {/* <div className="contactText"></div> */}
        </div>
        <div className="contactCardsWrapper">
            {
                contactCards.map((items)=>(
                    <div className="contactCards">
                        <span className='reactIcon'>{items.icon}</span>
                        <span className='ItemText'>{items.title}</span>
                    </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default Contact