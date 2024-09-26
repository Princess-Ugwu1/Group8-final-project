import React, { useState, useEffect } from 'react';
import './TopProductCards.css';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

const TopProductCards = () => {
  const [loading, setLoading] = useState(false);
  const [topProduct, setTopProducts] = useState([]);
  const url = "https://groceria.onrender.com/api/v1";

  // Fetch the top products
  const products = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/topproducts`);
      const product = response?.data?.data;
      setTopProducts(product); // Store the fetched products
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); // Hide loader once products are fetched or if error occurs
    }
  };

  // Call the fetch function on component mount
  useEffect(() => {
    products();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">
          <Oval
            visible={true}
            height={120}
            width={120}
            color="rgba(2, 185, 40, 1)"
            ariaLabel="oval-loading"
          />
        </div>
      ) : (
        <div className="topCardsWrapper">
          {topProduct.map((item) => (
            <div key={item.id} className="topCards">
              <div className="topcardImg">
                <img src={item.productImage} alt={item.productName} />
              </div>
              <div className="topCardDescriptionWrapper">
                <div className="topDescription">
                  <h1>{item.productName}</h1>
                  <p>#{item.productPrice}</p>
                  <span>{item.productDescription}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TopProductCards;
