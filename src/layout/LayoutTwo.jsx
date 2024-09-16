import React from 'react'
import { Outlet } from 'react-router-dom'
import SecondHeader from '../components/header/SecondHeader'
import Footer from '../components/footer/Footer'

const LayoutTwo = () => {
  return (
    <>
    {
        <>
        <SecondHeader/>
        <Outlet/>
        <Footer/>
        </>
    }
    </>
  )
}

export default LayoutTwo