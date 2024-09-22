import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import VendorDashBoard from '../components/vendorPage/VendorDashBoard'

const Layout = () => {
  
  return (
    <div>
 
       <Header/>
       <Outlet/>
       <Footer/>
       </div>
   
   
    
    
    

  )
}

export default Layout