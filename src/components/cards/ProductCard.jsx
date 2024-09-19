import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
                <button className='addToCart'>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

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
