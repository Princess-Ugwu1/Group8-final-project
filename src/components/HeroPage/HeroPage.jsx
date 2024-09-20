import React from 'react'
import './HeroPage.css'
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export const HeroPage = () => {
  const nav = useNavigate()
  return (
    <div className='heroParent'>
        <div className='herohold'>
            <p>Make healthy life with <span>fresh</span> groceries</p>
            <button onClick={()=>nav('/store')}>Start Shopping<IoIosArrowForward /></button>
        </div>
    </div>
  )
}
export default HeroPage