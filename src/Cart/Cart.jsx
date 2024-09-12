import React from 'react'
import "./Cart.css"
import newfruit from "../assets/banana.jpeg"
import { FaRegTrashAlt } from "react-icons/fa"

const Cart = () => {
  return (
    <div className='cart-con'>
        <div className='cart-holder'>
            <div className='cart-inner'>
                <div className='item-con'>
                    <div className='item-inner'>
                        <div className='cart-left'>
                            <div className='pixholder'>
                                <div className='item-pic'>
                                    <img src={newfruit} alt="" />
                                </div>
                                <div className='item-detail'>
                                    <div style={{color: "#02B928"}} className='item-list'>Fresh Banana</div>
                                    <div className='item-list'><p className='des'>Lorem  accusamus dolore blanditiis ipsa voluptates cons Quidem!</p></div>
                                    <div className='item-list'>#5000</div>
                                    <div className='qty'>
                                        <div className='add'>+</div>
                                        <p>2</p>
                                        <div className='minus'>-</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='remove'>
                            <div className='del'>
                            <FaRegTrashAlt/>remove
                            </div>
                        </div>
                        
                    </div>
                </div>
                <hr />
                <div className='item-btns'>
                    <div className='sub'>
                        <p>Sub total:</p>
                        <div className='pricey'><p>#5000</p></div>
                        <div className='trash'><p className='trashIcon'><FaRegTrashAlt/>remove all</p></div>
                    </div>
                    <div className='buttons'>
                        <div className='Check-btn'>Check out</div>
                        <div className='Continue-btn'>Continue Shipping</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart