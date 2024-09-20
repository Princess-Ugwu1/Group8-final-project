import React from 'react'
import './about.css'

const About = () => {

  return (
    <div className='aboutWrapper'>
        <div className="aboutImgWrapper">
          <div className="aboutImg">
            <div className="imgSection">
              <img src={'./aboutImg.png'} alt="" />
            </div>
            <div className="textSection">
              <h3>Aim & Objective</h3>
              <p>To provide high-quality, affordable groceries and exceptional customer service, ensuring a convenient and 
                satisfying shopping experience for all customers.</p>
            </div>
          </div>
        </div>
        <div className="aboutText">
          <h3>About us</h3>
          <p>Groceria is all about your local grocery needs, offering
a seamless shopping experience online. We are dedicated
to bringing you the freshest and highest-quality food
products, right from local farmers and trusted suppliers, 
straight to your doorstep.</p>
        </div>
    </div>
  )
}

export default About