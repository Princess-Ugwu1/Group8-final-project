import React from 'react'
import './store.css'
import yam from '../../assets/Yam.png'

const Store = () => {
    const stores = [1,2,3]
  return (
    <div className='storeWrapper'>
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