import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Layout from './layout/Layout'
import Products from './components/products/Products'
import Store from './components/Stores/Store'
import StoreItems from './components/Stores/StoreItems'
import Signup from './auth/Signup'
import Login from "./auth/Login"
import ResetPassword from "./auth/ResetPassword"
import VerifyPassword from "./auth/VerifyPassword"
import UpdatePassword from "./auth/UpdatePassword"
import VendorDashBoard from './components/vendorPage/VendorDashBoard'
import LandingPage from './components/LandingPage'
import ContactUs from './components/ContactUs/ContactUs'
import SecondHeader from './components/header/SecondHeader'
import UserProfile from './components/userProfile/UserProfile'
import LayoutTwo from './layout/LayoutTwo'
import Cart from './components/Cart/Cart'
import Contact from './components/aboutPage/Contact'
import AboutUs from './components/AboutForm/AboutUs'


const App = () => {

  
  return (
 <HashRouter>
  <Routes>
    <Route path='/' element={<LandingPage />}/>
  <Route path='/profile' element={<UserProfile/>}/>
    <Route element = {<Layout/>}>


      
    <Route path='/ContactUs' element={<ContactUs/>}/>
    <Route path='/AboutForm' element={<AboutUs/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/header2' element={<SecondHeader/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/resetpassword' element={<ResetPassword/>}/>
    <Route path='/verifypassword' element={<VerifyPassword/>}/>
    <Route path='/updatepassword' element={<UpdatePassword/>}/>
    </Route>
    {/* <Route path='/dashBoard' element={<VendorDashBoard/>}/> */}
    <Route element = {<LayoutTwo/>}>
    <Route path='/' element={<Products/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/items' element={<StoreItems/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Route>
  </Routes>
 </HashRouter>
  )
}

export default App