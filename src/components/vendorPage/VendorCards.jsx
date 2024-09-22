import React from 'react'
import './vendorCards.css'

const VendorCards = () => {
  const orderedProducts = [1,2,3,4,5,6]
  return (
    <div className='VendorsOrderCards'>
      <div className="ordersHolder">
        {
          orderedProducts.map(()=>(
            <div className="orderCardWrapper">
          <div className="orderCardWrapperImg"></div>
            <div className="orderDescriptiveDiv">
              <p>ProductName</p>
              <span>ProductPrice</span>
              <button className='orderButton'>ordered</button>
            </div>
        </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default VendorCards