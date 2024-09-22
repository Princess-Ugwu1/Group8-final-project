import React, { useEffect, useState } from 'react';
import './storeItems.css';
import yam from '../../assets/Yam.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import toast from 'react-hot-toast';
import {Oval} from 'react-loader-spinner';
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
  


const StoreItems = () => {
  const { id } = useParams();
  const [allProduct, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [addingToCart, setAddingToCart] = useState(false); // Cart loading state
  const url = "https://groceria.onrender.com/api/v1";
  const token = localStorage.getItem('userToken');

  const getOneStoreProduct = async () => {
    setLoading(true); 
    try {
      const product = await axios.get(`${url}/allstoreproducts/${id}`);
      setAllProducts(product?.data?.data);
    } catch (err) {
      console.log(err);
      toast.error('Failed to fetch products.');
    } finally {
      setLoading(false); 
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
    
      console.log(response); 
      if (response) {
        toast.success('Added to cart successfully!');
      }
    } catch (error) {
      console.log(error.data); 
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
        <ToastContainer style={{zIndex:"999999999999999999"}}/>
        <div className="ProductDescriptionInner">
          <span>All Products</span>
          <p>Start Shopping from the finest selection of fresh products</p>
        </div>
      </div>

      {loading ? ( 
        <div className="loading">{<Oval
        visible={true}
        height="120"
        width="120"
        color="rgba(2, 185, 40, 1)"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />}</div>) : (
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
                      onClick={() => addToCart(item?._id, 1)}
                      // disabled={addingToCart} // Disable button when adding to cart
                    >
                      Add to Cart 
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