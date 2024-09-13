import React from 'react'
import './topProduct.css'
import TopProductCards from './TopProductCards'

const TopProduct = () => {
    const TProductCard =[1,2,3,4,5,6,7,8,9]
  return (
    <>
    <div className='topProductDescription'>Top Products</div>
 {
    TProductCard.map(()=>(
        <TopProductCards/>
    ))
 }
   
    </>
)
}

export default TopProduct