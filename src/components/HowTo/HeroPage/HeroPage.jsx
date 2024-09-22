import React from 'react'
import './HeroPage.css'
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export const HeroPage = () => {
  const nav = useNavigate()
  return (
    <div className='heroParent'>
        <div className='herohold'>  
            <h1>Make healthy life with fresh groceries</h1>
            <button onClick={()=>nav('/store')}>Start Shopping <IoIosArrowForward /></button>
        </div>
        <div className='hero_img'>
        </div>
    </div>
  )
}
export default HeroPage