import React from 'react'
import "./store.css"
import Storecard from './Storecard'
import TopProduct from './TopProduct'
import { IoIosArrowForward } from "react-icons/io";


const Store = () => {
  return (
    <div className='storeWrapper'>
      <div className="storeHeroWrapper">
        <img src={'./hero.png'} alt="" />
        <button>Start Shopping<IoIosArrowForward /></button>
      </div>
      <div className="storesOnGroceria">
        <div className="storesDescription">Stores on Groceria</div>
        <Storecard/>
      </div>
      <div className="topProducts">
        <TopProduct/>
      </div>
    </div>
  )
}

export default Store