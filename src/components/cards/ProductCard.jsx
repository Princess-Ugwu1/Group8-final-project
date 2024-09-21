import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
const ProductCard = () => {
  const [allProduct, setAllProducts] = useState([]); // Stores all products fetched from the API
  const [displayedProducts, setDisplayedProducts] = useState([]); // Stores only the products to display
  const [currentPage, setCurrentPage] = useState(1); // Keep track of current "page" on the frontend
  const [loading, setLoading] = useState(false); // Add a loading state
  const productsPerPage = 12; // Number of products to display per "page"

  const url = 'https://groceria.onrender.com/api/v1/allproducts';

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const products = response?.data?.data;
      console.log(response.data.data)
      setAllProducts(products); // Store all fetched products
      setDisplayedProducts(products.slice(0, productsPerPage)); // Initially display the first 12 products
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts(); // Fetch all products when the component mounts
  }, []);


  const loadMoreProducts = () => {
    const nextPage = currentPage + 1;
    const startIndex = nextPage * productsPerPage - productsPerPage;
    const endIndex = startIndex + productsPerPage;

    setDisplayedProducts((prevProducts) => [
      ...prevProducts,
      ...allProduct.slice(startIndex, endIndex), // Append the next set of products
    ]);
    setCurrentPage(nextPage); // Increment the page number
  };
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmVlYmNmZDE4ZDhiNzA3NmZlNzBkZDMiLCJlbWFpbCI6ImpvbGFldG9waWE4MUBnbWFpbC5jb20iLCJpYXQiOjE3MjY5NDc5MTMsImV4cCI6MTcyNjk1ODcxM30.xZ6Dqz36ALALWi-pBGwzRw6VZKF0sQ-osJFPFy0GLoA"

  const addTocart = async ( productId) => {
    // event.preventDefault();
  
    // const token = 'YOUR_TOKEN'; // Replace with your actual token
    const quantity = 1
    const product = "66e1d2c99dd3f2899cd33691"
    // const all = {product, quantity : 1}
    try {
      const response = await axios.post('https://groceria.onrender.com/api/v1/addtocart', // Your endpoint
        {
          quantity ,
          productId // Your data payload
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Authorization header
            'Content-Type': 'application/json', // Content type if required
          },
          body: JSON.stringify({ productId }),
        }
      );
  
      console.log(response);
      toast.success("Successfully Added to Cart")
      // setInput('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='storeItemsWrapper'>
      <div className='storeItemsContainer'>
        {displayedProducts?.map((items, index) => (
          <div className='storeItems' key={index}>
            <div className='itemImg'>
              <img src={items?.productImage} alt='' />
            </div>
            <div className='itemsDetailsWrapper'>
              <div className='itemDetails'>
                <p>{items?.productName}</p>
                <span>₦{items?.productPrice}</span>
                <button className='addToCart' onClick={()=> addTocart( items?._id)} >Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toaster/>

      {/* Show Load More button if there are more products to display */}
      {displayedProducts.length < allProduct.length && (
        <button onClick={loadMoreProducts} className='loadMore'>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
