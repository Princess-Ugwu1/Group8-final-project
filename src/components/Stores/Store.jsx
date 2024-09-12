import React from 'react'
import "./store.css"
import Storecard from './Storecard'
import TopProduct from './TopProduct'

const Store = () => {
  return (
    <div className='storeWrapper'>
      <div className="storeHeroWrapper"></div>
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