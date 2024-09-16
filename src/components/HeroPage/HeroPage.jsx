import React from 'react'
import './HeroPage.css'
import { IoIosArrowForward } from "react-icons/io";

export const HeroPage = () => {
  return (
    <div className='heroParent'>
        <div className='herohold'>
            <p>Make healthy life with <span>fresh</span> groceries</p>
            <button>Start Shopping<IoIosArrowForward /></button>
        </div>
    </div>
  )
}
export default HeroPage