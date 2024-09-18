import React from 'react';
import './Cart.css';
import { FaRegTrashAlt } from 'react-icons/fa';

const Cart = () => {

  const cartItems = [
    {
      id: 1,
      name: 'Fresh Banana',
      description: 'Lorem accusamus dolore blanditiis ipsa voluptates cons Quidem!',
      price: 5000,
      quantity: 2,
      image: null
    },
    {
      id: 2,
      name: 'Fresh Apple',
      description: 'Dolore blanditiis ipsa voluptates cons Quidem accusamus!',
      price: 3000,
      quantity: 1,
      image: null
    },
    {
      id: 3,
      name: 'Fresh Apple',
      description: 'Dolore blanditiis ipsa voluptates cons Quidem accusamus!',
      price: 3000,
      quantity: 1,
      image: null
    }
  ];

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
                      {item.image && <img src={item.image} alt={item.name} />}
                    </div>
                    <div className='item-detail'>
                      <div style={{ color: '#02B928' }} className='item-list'>
                        {item.name}
                      </div>
                      <div className='item-list'>
                        <p className='des'>{item.description}</p>
                      </div>
                      <div className='item-list'>
                        <p className='item-worth'>#{item.price}</p>
                      </div>
                      <div className='qty'>
                        <div className='add'>+</div>
                        <p>{item.quantity}</p>
                        <div className='minus'>-</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='remove'>
                  <div className='del'>
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
