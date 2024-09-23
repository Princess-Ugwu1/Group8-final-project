import React from 'react'
import './vendorDashBoard.css'
import VendorSideBar from './VendorSideBar'
import VendorHeader from './VendorHeader'
import VendorCards from './VendorCards'

const VendorDashBoard = () => {
  return (
    <div className='VendorDashBoardWrapper'>
        <VendorSideBar/>
        <div className="vendorSideTwo">
        <VendorHeader/>
        <VendorCards/>
        </div>
    </div>
  )
}

export default VendorDashBoard;