import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Layout from './layout/Layout'
import Products from './components/products/Products'
import Store from './components/Stores/Store'
import StoreItems from './components/Stores/StoreItems'
import About from './components/aboutPage/About'
import Signup from './auth/Signup'
import Login from "./auth/Login"
import ResetPassword from "./auth/ResetPassword"
import VerifyPassword from "./auth/VerifyPassword"
import UpdatePassword from "./auth/UpdatePassword"
import VendorDashBoard from './components/vendorPage/VendorDashBoard'
import LandingPage from './components/LandingPage'


const App = () => {

  
  return (
 <HashRouter>
  <Routes>
    <Route path='/' element={<LandingPage />}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/resetpassword' element={<ResetPassword/>}/>
    <Route path='/verifypassword' element={<VerifyPassword/>}/>
    <Route path='/updatepassword' element={<UpdatePassword/>}/>
    <Route path='/dashBoard' element={<VendorDashBoard/>}/>
    <Route element = {<Layout/>}>
    <Route path='/' element={<Products/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/items' element={<StoreItems/>}/>
    <Route path='/about' element={<About/>}/>
    </Route>
  </Routes>
 </HashRouter>
  )
}

export default App