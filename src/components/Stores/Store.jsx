import React from 'react'
import './store.css'
import yam from '../../assets/Yam.png'
import  { useNavigate } from 'react-router-dom'

const Store = () => {
  const nav =useNavigate()
    const stores = [1,2,3]
  return (
    <div className='storeWrapper' onClick={()=>nav('/items')}>
        {
            stores.map(()=>(
                <div className="storeCards">
                <div className="storesPictures">
                  <img src={yam} alt="" />
                </div>
                    <p>Halima's Stores</p>
                    <span>Frozen Foods</span>
            </div>
            ))
        }
   
    </div>
  )
}

export default Store