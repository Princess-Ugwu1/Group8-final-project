import React from 'react'
import './storeItems.css'
import yam from '../../assets/Yam.png'

const StoreItems = () => {

  const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  return (
    <>
    <div className='ProductDescription'>
    <div className="ProductDescriptionInner">
    <span>All Products</span>
    <p>Start Shopping from the finest 
    selection of fresh products</p>
    </div>
</div>
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
    </>
  )
}

export default StoreItems