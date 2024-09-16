import React from 'react'
import "./Congrat.css"
import groceriapix from "../assets/Group 10.png"
import congratpicture from "../assets/congratss.png"

const Congrat = () => {
  return (
    <div className='congrat-con'>
            <div className='congrat-main'>
                <div className='congrat-inner'>
                    <div className='logodiv'>
                        <img src={groceriapix} alt="" />
                    </div>
                    <div className='div-congrat'>
                        <div className='congratulation'>
                            <p>Your account has been created </p>
                        </div>
                        <div className='congratpix'><img className='pixmain' src={congratpicture} alt="" /></div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Congrat