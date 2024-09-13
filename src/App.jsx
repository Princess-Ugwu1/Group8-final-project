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
import Home from "./Cart/Cart"
import Cart from './Cart/Cart'
import Congrat from "./auth/Congrat"

import VendorDashBoard from './components/vendorPage/VendorDashBoard'


const App = () => {

  
  return (
 <HashRouter>
  <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/resetpassword' element={<ResetPassword/>}/>
    <Route path='/verifypassword' element={<VerifyPassword/>}/>
    <Route path='/updatepassword' element={<UpdatePassword/>}/>
    <Route path='/congrat' element={<Congrat/>}/>
    <Route path='/dashBoard' element={<VendorDashBoa
    <Route element = {<Layout/>}>
    <Route path='/' element={<Products/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/items' element={<StoreItems/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Route>
  </Routes>
 </HashRouter>
  )
}

export default App