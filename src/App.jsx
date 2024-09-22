import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Products from './components/products/Products'
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
import Cart from './components/Cart/Cart'
import SignupVerify from './auth/SignupVerify'
import ExpiredVerify from './auth/ExpiredVerify'
import VerificationPage from './auth/Verify'
import Checkout from "./components/Cart/Checkout"
import About from './components/aboutPage/About'
import Contact from './components/aboutPage/Contact'
// import Store from './components/Stores/Stores'
import LayoutThree from './layout/LayoutThree'
import VendorUpload from './components/vendorPage/VendorUpload'
import VendorCards from './components/vendorPage/VendorCards'
import { Toaster } from 'react-hot-toast'
import Store from './components/Stores/Store'


const App = () => {


  return (
 <HashRouter>
  <Routes>
   
    <Route path='/checkout' element={<Checkout/>}/>
   <Route path='/profile' element={<UserProfile/>}/>
    {/* <Route path='/' element={<LandingPage />}/> */}
  {/* <Route path='/header2' element={<SecondHeader/>}/> */}
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/resetpassword' element={<ResetPassword/>}/>
    <Route path='/verifypassword/:token' element={<VerifyPassword/>}/>
    <Route path='/updatepassword' element={<UpdatePassword/>}/>
    <Route path='/signupverify/:id' element={<SignupVerify/>}/>
    <Route path='/verifySuccessful/:token' element={<VerificationPage/>}/>
    <Route path='/congrat' element={<Congrat/>}/>
    <Route path='/expired' element={<ExpiredVerify/>}/>
    <Route path='/vendorsign' element={<VendorSignup/>}/>
    <Route path='/vendorlogin' element={<VendorLogin/>}/>
    <Route path='/cart' element={<Cart/>}/>
   <Route path='/profile' element={<UserProfile/>}/>
    <Route element={<Layout/>}>
    <Route path='/' element={<LandingPage />}/>
    <Route path='/AboutForm' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
    </Route>
    {/* <Route path='/dashBoard' element={<VendorDashBoard/>}/> */}
    <Route element = {<LayoutTwo/>}>
    <Route path='/product' element={<Products/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/items/:id' element={<StoreItems/>}/>
    </Route>
    <Route element={<LayoutThree/>}>
      <Route path='/upload' element={<VendorUpload/>}/>
      <Route path='/vendorOrders' element={<VendorCards/>}/>
    </Route>
    
  </Routes>
  {/* <Toaster position="top-right" reverseOrder={false}/> */}
 </HashRouter>

  )
}

export default App