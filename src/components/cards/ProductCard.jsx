import React from 'react'
import './productCard.css'
import yam from '../../assets/Yam.png'

const ProductCard = () => {
  const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,14]
  return (
    <div className='productCardWrapper'>
      <div className="productInner">
      {
        items.map(()=>(
          <div className="productCards">
          <div className="productImg">
            <img src={yam} alt="" />
          </div>
          <div className="productDescription">
            <p>Yams</p>
          </div>
        </div>
        
        ))
      }
      </div>
     
    </div>
  )
}

export default ProductCard