import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'

import Header from './components/header/Header'
import Layout from './layout/Layout'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'
import Store from './components/Stores/Store'
import StoreItems from './components/Stores/StoreItems'
import About from './components/aboutPage/About'


const App = () => {

  
  return (
 <HashRouter>
  <Routes>
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