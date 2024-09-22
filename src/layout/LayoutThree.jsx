import React from 'react'
import './LayoutThree.css'
import { Outlet } from 'react-router-dom'
import VendorSideBar from '../components/vendorPage/VendorSideBar'
import VendorHeader from '../components/vendorPage/VendorHeader'


const LayoutThree = () => {
  return (
    <div className='LayoutThree'>
      <div className="sideBar">
  <VendorSideBar/>
  </div>
    <div className="HoldOutletAndHeader">
    <VendorHeader/>
    <Outlet/>
    </div>
  </div>
  )
}

export default LayoutThree