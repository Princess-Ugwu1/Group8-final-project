import React from 'react'
import './topProduct.css'
import TopProductCards from './TopProductCards'
import axios from 'axios'

const TopProduct = () => {
   
    const url = "https://groceria.onrender.com"

    const TopProduct = async()=>{
      const response = await axios.get()
    }
  return (
    <>
    <div className='topProductDescription'>Top Products</div>
 
    
        <TopProductCards/>
  
    </>
)
}

export default TopProduct