import React from 'react'
import "./Congrat.css"
import groceriapix from "../assets/Group 10.png"
import congratpicture from "../assets/congratss.png"
import { useNavigate } from 'react-router-dom'

const Congrat = () => {
    const nav =useNavigate()
  return (
    <div className='congrat-con'>
            <div className='congrat-main'>
                <div className='congrat-inner'>
                    <div className='logodiv'>
                        <img src={groceriapix} alt="" onClick={()=>nav('/home')}/>
                    </div>
                    <div className='div-congrat'>
                        <div className='congratulation'>
                            <p>Your account has been created </p>
                        </div>
                        <div className='congratpix'><img className='pixmain' src={congratpicture} alt="" /></div>
                    </div>
                    <div className='congratBtn'>
                        <p>Continue</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Congrat