import React from 'react'
import './vendorCards.css'

const VendorCards = () => {
  return (
    <div className='VendorsOrderCards'>
      <div className="ordersHolder">
        <div className="orderCardWrapper">
          <div className="orderCardWrapperImg"></div>
            <div className="orderDescriptiveDiv">
              <p>ProductName</p>
              <span>ProductPrice</span>
              <button className='orderButton'>ordered</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VendorCards