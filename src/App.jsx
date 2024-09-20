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

import Congrat from "./auth/Congrat"
import VendorSignup from './auth/VendorSignup'
import VendorLogin from './auth/VendorLogin'

import VendorDashBoard from './components/vendorPage/VendorDashBoard'
import LandingPage from './components/LandingPage'
import ContactUs from './components/ContactUs/ContactUs'
import SecondHeader from './components/header/SecondHeader'
import UserProfile from './components/userProfile/UserProfile'
import LayoutTwo from './layout/LayoutTwo'
import AboutUs from './components/AboutForm/AboutUs'
import Cart from './components/Cart/Cart'
import SignupVerify from './auth/SignupVerify'
import ExpiredVerify from './auth/ExpiredVerify'
import VerificationPage from './auth/Verify'
import Checkout from './components/Cart/Checkout';


const App = () => {

  
  return (
 <HashRouter>
  <Routes>
    <Route path='/cart' element={<Cart/>}/>
   <Route path='/profile' element={<UserProfile/>}/>
    <Route element = {<Layout/>}>
    <Route path='/' element={<LandingPage />}/>
    <Route path='/contactUs' element={<ContactUs/>}/>
    <Route path='/AboutForm' element={<AboutUs/>}/>
  {/* <Route path='/contact' element={<Contact/>}/> */}
  <Route path='/header2' element={<SecondHeader/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/resetpassword' element={<ResetPassword/>}/>
    <Route path='/verifypassword/:token' element={<VerifyPassword/>}/>
    <Route path='/updatepassword' element={<UpdatePassword/>}/>
    <Route path='/signupverify' element={<SignupVerify/>}/>
    <Route path='/verifySuccessful/:token' element={<VerificationPage/>}/>
    <Route path='/congrat' element={<Congrat/>}/>
    <Route path='/expired' element={<ExpiredVerify/>}/>
    <Route path='/vendorsign' element={<VendorSignup/>}/>
    <Route path='/vendorlogin' element={<VendorLogin/>}/>
    </Route>
    {/* <Route path='/dashBoard' element={<VendorDashBoard/>}/> */}
    <Route element = {<LayoutTwo/>}>
    <Route path='/product' element={<Products/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/items' element={<StoreItems/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
               
  
    </Route>
  </Routes>
 </HashRouter>
  )
}

export default App