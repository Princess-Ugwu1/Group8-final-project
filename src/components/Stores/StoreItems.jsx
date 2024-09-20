import React, { useEffect, useState } from 'react'
import './storeItems.css'
import yam from '../../assets/Yam.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const StoreItems = () => {
  const { id } = useParams()
const [allProduct, setAllProducts] = useState([])
  const url = " https://groceria.onrender.com/api/v1/allstoreproducts"
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmRjNjA1MWViN2QwZWFmYTY3MTUxOTAiLCJlbWFpbCI6ImpvaG5oYWxleDdAZ21haWwuY29tIiwiaWF0IjoxNzI2Nzc4NTE4LCJleHAiOjE3MjY4NjQ5MTh9.jd9G2Cy2m_V6xzTfClN2FBYV9KI0G57VFijKxjpscSY"
  const getOneStoreProduct = async () => {
    try {
    const product =  await axios.get(`${url}/${id}`)
    // console.log(product.data.data);
    
    setAllProducts(product?.data?.data)
    } catch (err) {
      console.log(err);

    }
  }

  const addToCart = async (productId, quantity)=>{
    try{
      const response = await axios.post(`${url}/addtocart`, {
        productId, quantity
      },{
        headers:{
          "Authorization": `Bearer ${token}` 
        }
      })

      console.log(response)
  }catch (error){
    
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
            allProduct.map((items) => (
              <div className="storeItems">
                <div className="itemImg">
                  <img src={items?.productImage} alt="" />
                </div>
                <div className="itemsDetailsWrapper">
                  <div className="itemDetails">
                    <p>{items?.productName}</p>
                    <span> ₦{items?.productPrice}</span>
                    <button className='addToCart'onClick={()=>addToCart(items._id,1)}>Add to cart</button>
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