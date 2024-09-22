import React, { useState,useEffect } from 'react'
import './TopProductCards.css'
import axios from 'axios';
// import './storeItems.css'

const TopProductCards = () => {
   
    const [loading, setLoading] = useState(false); 
    const [topProduct, setTopProducts] = useState([]);
    const url = "https://groceria.onrender.com/api/v1";
  const token = localStorage.getItem('userToken');
  const TProductCard =[1,2,3,4,5,6,7,8,9]

  const products = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/topproducts`);
      const product = response?.data?.data;
      console.log(product)
      setTopProducts(product); // Store all fetched products
    //   setDisplayedProducts(products.slice(0, productsPerPage)); // Initially display the first 12 products
    }   
    catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  



  useEffect(() => {
    products(); // Fetch all products when the component mounts
  }, []);


  return (
    <>
    {/* <div className="topCardsWrapper"> */}
    {
        topProduct.map((item)=>(
            <div className='topCards'>
            <div className="topcardImg">
                <img src={item.productImage} alt="" />
            </div>
                <div className="topCardDescriptionWrapper">
                    <div className="topDescription">
                        <h1>{item.productName}</h1>
                        <p>#{item.productPrice}</p>
                        <span> {item.productDescription}</span>
                    </div>
                </div>
            </div>
        ))
    }
    {/* </div> */}
    </>

   
  )
}

export default TopProductCards