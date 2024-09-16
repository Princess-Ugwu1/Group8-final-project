import React from 'react'
// import './storeItems.css'
import yam from '../../assets/Yam.png'

const ProductCard = () => {

  const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  return (
    <div className='storeItemsWrapper'>
      <div className="storeItemsContainer">
      {
        items.map(()=>(
          <div className="storeItems">
          <div className="itemImg">
            <img src= {yam
            }alt="" />
          </div>
          <div className="itemsDetailsWrapper">
          <div className="itemDetails">
          <p>Yam</p>
          <span>$4000.00</span>
          <button className='addToCart'>Add to cart</button>
      </div>
      </div>
      </div>
      
        ))
      }

    </div>
    </div>
  )
}

export default ProductCard