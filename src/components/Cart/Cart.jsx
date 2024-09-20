import React, { useEffect, useState } from 'react';
import './Cart.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import axios from 'axios';

const Cart = () => {
    const [cartItems, setCartItems]= useState([])
    const [reload, setReload]=useState(false)
    
  const url = 'https://groceria.onrender.com/api/v1';
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmRjNjA1MWViN2QwZWFmYTY3MTUxOTAiLCJlbWFpbCI6ImpvaG5oYWxleDdAZ21haWwuY29tIiwiaWF0IjoxNzI2Nzc4NTE4LCJleHAiOjE3MjY4NjQ5MTh9.jd9G2Cy2m_V6xzTfClN2FBYV9KI0G57VFijKxjpscSY"


const getCart = async ()=>{
    try {
        const response = await axios.get(`${url}/viewcart`, {
            headers:{
              "Authorization": `Bearer ${token}` 
            }
          })
        console.log(response.data.data.data.items)
        setCartItems(response.data.data.data.items)
    }catch (error) {
        
    }
}

const IncreaseItem = async(productId,quantity)=>{
    try {
        const response =await axios.post (`${url}/item-increase`,
             {productId,quantity},
             {
                headers:{
                  "Authorization": `Bearer ${token}` 
                }
              }
            )
            setReload((prev) => !prev);
        
    } catch (error) {
        
    }
}

const DecreaseItem = async (productId, quantity)=>{
    try {
        const response = await axios.post(`${url}/item-decrease`, 
        {productId,quantity},
        {
                headers:{
                  "Authorization": `Bearer ${token}` 
                }
              }
            )
            setReload((prev) => !prev);
    } catch (error) {
        
    }
}

const RemoveItem = async (productId)=>{
    try {
        const response = await axios.delete(`${url}/removeItem`,
            { productId},
          
           {
            headers:{
              "Authorization": `Bearer ${token}` 
            }
        }
        )
        setReload((prev) => !prev);
    } catch (error) {
        
    }
}

useEffect(()=>{
    getCart()
},[reload])
  return (
    <div className='cart-con'>
      <div className='cart-holder'>
        <div className='cart-inner'>
          {/* Map through the cartItems array */}
          <div className='item-con'>
          {cartItems.map((item) => (
            <>
            
              <div className='item-inner'  key={item.id}>
                <div className='cart-left'>
                  <div className='pixholder'>
                    <div className='item-pic'>
                      {/* Render item image if available */}
                      {item.productImage && <img src={item.productImage} alt={item.name} />}
                    </div>
                    <div className='item-detail'>
                      <div style={{ color: '#02B928' }} className='item-list'>
                        {item.productName}
                      </div>
                      <div className='item-list'>
                        {/* <p className='des'>{item.description}</p> */}
                      </div>
                      <div className='item-list'>
                        <p className='item-worth'>#{item.price}</p>
                      </div>
                      <div className='qty'>
                        <div className='add'onClick={()=>IncreaseItem(item.productId, item.quantity+1)}>+</div>
                        <p>{item.quantity}</p>
                        <div className='minus' onClick ={()=>DecreaseItem(item.productId,item.quantity-1)}>-</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='remove'>
                  <div className='del' onClick={()=>RemoveItem(item.productId)}>
                    <FaRegTrashAlt /> remove
                  </div>
                </div>
              </div>
              {/* <hr /> */}
          </>
          ))}
            </div>

          {/* Sub total and buttons */}
          <div className='item-btns'>
            <div className='sub'>
              <p>Sub total:</p>
              <div className='pricey'>
                <p>#{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
              </div>
              <div className='trash'>
                <p className='trashIcon'>
                  <FaRegTrashAlt /> remove all
                </p>
              </div>
            </div>
            <div className='buttons'>
              <div className='Check-btn'>Check out</div>
              <div className='Continue-btn'>Continue Shopping</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;