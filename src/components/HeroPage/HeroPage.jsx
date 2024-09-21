import React from 'react'
import './HeroPage.css'
import { IoIosArrowForward } from "react-icons/io";

export const HeroPage = () => {
  return (
    <div className='heroParent'>
        <div className='herohold'>  
            <h1>Make healthy life with fresh groceries</h1>
            <button>Start Shopping <IoIosArrowForward /></button>
        </div>
        <div className='hero_img'>
          
        </div>
    </div>
  )
}
export default HeroPage