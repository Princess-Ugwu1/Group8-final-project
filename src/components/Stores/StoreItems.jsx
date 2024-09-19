import React, { useEffect, useState } from 'react'
import './storeItems.css'
import yam from '../../assets/Yam.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const StoreItems = () => {
  const { id } = useParams()
const [allProduct, setAllProducts] = useState([])
  const url = " https://groceria.onrender.com/api/v1/allstoreproducts"

  const getOneStoreProduct = async () => {
    try {
    const product =  await axios.get(`${url}/${id}`)
    // console.log(product.data.data);
    
    setAllProducts(product?.data?.data)
    } catch (err) {
      console.log(err);

    }
  }
useEffect(()=>{
  getOneStoreProduct()
})
  return (
    <>
      <div className='ProductDescription'>
        <div className="ProductDescriptionInner">
          <span>All Products</span>
          <p>Start Shopping from the finest
            selection of fresh products</p>
        </div>
      </div>
      <div className='storeItemsWrapper'>
        <div className="storeItemsContainer">
          {
            allProduct.map((item) => (
              <div className="storeItems">
                <div className="itemImg">
                  <img src={item?.productImage} alt="" />
                </div>
                <div className="itemsDetailsWrapper">
                  <div className="itemDetails">
                    <p>{item?.productName}</p>
                    <span> ₦{item?.productPrice}</span>
                    <button className='addToCart'>Add to cart</button>
                  </div>
                </div>
              </div>


            ))
          }

        </div>
      </div>
    </>
  )
}

export default StoreItems