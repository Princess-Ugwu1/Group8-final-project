import React from 'react'
import './product.css'
import ProductCard from '../cards/ProductCard'

const Products = () => {
  return (
    
    <>
    <div className='ProductDescription'>
        <div className="ProductDescriptionInner">
        <span>All Products</span>
        <p>Start Shopping from the finest 
        selection of fresh products</p>
        </div>
    </div>
    <div className="searchBar">
      <div className="input">
      <input type="text" placeholder='search'/>
      </div>
    </div>
    <ProductCard/>
       </>
  )
}

export default Products