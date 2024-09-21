import React, { useEffect, useState } from 'react';
import './storeItems.css';
import yam from '../../assets/Yam.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const StoreItems = () => {
  const { id } = useParams();
  const [allProduct, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [addingToCart, setAddingToCart] = useState(false); // Cart loading state
  const url = "https://groceria.onrender.com/api/v1";
  const token = localStorage.getItem('userToken');

  const getOneStoreProduct = async () => {
    setLoading(true); // Start loading
    try {
      const product = await axios.get(`${url}/allstoreproducts/${id}`);
      setAllProducts(product?.data?.data);
    } catch (err) {
      console.log(err);
      toast.error('Failed to fetch products.');
    } finally {
      setLoading(false); // End loading
    }
  };

  const addToCart = async (productId, quantity) => {
    setAddingToCart(true);
    try {
      const response = await axios.post(
        `${url}/addtocart`, 
        { productId, quantity }, 
        { headers: { "Authorization": `Bearer ${token}` } }
      );
      
      console.log(response); // Log response for debugging
      if (response) {
        toast.success('Added to cart successfully!');
      }
    } catch (error) {
      console.error(error); // Log error for debugging
      toast.error('Failed to add to cart.');
    } finally {
      setAddingToCart(false);
    }
  };
  

  useEffect(() => {
    getOneStoreProduct();
  }, []);

  return (
    <>
      <div className='ProductDescription'>
        <div className="ProductDescriptionInner">
          <span>All Products</span>
          <p>Start Shopping from the finest selection of fresh products</p>
        </div>
      </div>

      {loading ? ( // Show loading spinner while fetching data
        <div className="loading">Loading products...</div>
      ) : (
        <div className='storeItemsWrapper'>
          <div className="storeItemsContainer">
            {allProduct.map((item) => (
              <div key={item._id} className="storeItems">
                <div className="itemImg">
                  <img src={item?.productImage} alt={item?.productName} />
                </div>
                <div className="itemsDetailsWrapper">
                  <div className="itemDetails">
                    <p>{item?.productName}</p>
                    <span>₦{item?.productPrice}</span>
                    <button 
                      className='addToCart' 
                      onClick={() => addToCart(item._id, 1)}
                      disabled={addingToCart} // Disable button when adding to cart
                    >
                      {addingToCart ? 'Adding...' : 'Add to cart'} 
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default StoreItems;
