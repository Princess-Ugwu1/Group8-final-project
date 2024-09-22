import React from 'react'
import "./store.css"
import Storecard from './Storecard'
import TopProduct from './TopProduct'
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Store = () => {
  const nav = useNavigate()

  // const img ="https://asset.cloudinary.com/dg2gcfyud/473f0ab32cf2d5aa4d76d533e3c38bf3"
  return (
    <div className='storeWrapper'>
      <div className="storeHeroWrapper">
        <div className="storeHeroLeft">
          <p>Eat Healthy & Eat wealthy</p>
          <button className='heroButton'onClick={()=>nav('/product')}>Start Shopping<IoIosArrowForward /></button>
        </div>
        <div className="storeHeroRight">
          <div className="storeHeroRightImage">
          <img src="https://res.cloudinary.com/dg2gcfyud/image/upload/v1726983733/beautiful-woman-holding-bag-vegetables__1__1-removebg-preview_yebaub.png" alt="" />
          </div>
          
        </div>
       
        
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