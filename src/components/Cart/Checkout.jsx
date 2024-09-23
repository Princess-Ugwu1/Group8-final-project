// import React, {useEffect, useState} from 'react'
// import "./Checkout.css"
// import { FaArrowLeft } from "react-icons/fa";
// import bana from "../../assets/banana.jpeg"
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { userData } from '../../Global/slice';
// import sucess from '../../assets/sucess.gif'
// import { useNavigate } from 'react-router-dom';
// import { Toaster, toast } from 'react-hot-toast';

// const cities = [
//     "Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Enugu", "Kaduna", 
//     "Benin City", "Jos", "Onitsha", "Warri", "Abeokuta", "Uyo", "Akure", 
//     "Owerri", "Maiduguri", "Ilorin", "Ado Ekiti", "Calabar"
//   ];
  


// const Checkout = () => {
//   const [price, setPrice] = useState(null); // State to hold the cleaned price
//   // const [total, setTotal] = useState(null);
//   const [success, setSucess]=useState(false)
//     const [city, setCity]=useState("")
//     const [customerFirstName, setFirstname]=useState("")
//     const [customerLastName, setLastname]=useState("")
//     const [selectedCity, setSelectedCity] = useState('');

//     const [customerPhoneNumber, setcustomerPhoneNumber]=useState("")
//     const [customerAddress, setcustomerAddress]=useState("")
//     const token=localStorage.getItem("userToken")
//     // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmVlYmNmZDE4ZDhiNzA3NmZlNzBkZDMiLCJlbWFpbCI6ImpvbGFldG9waWE4MUBnbWFpbC5jb20iLCJpYXQiOjE3MjY5NDc5MTMsImV4cCI6MTcyNjk1ODcxM30.xZ6Dqz36ALALWi-pBGwzRw6VZKF0sQ-osJFPFy0GLoA"
//    const nav = useNavigate()
//     const handlechangefir= (e)=>{
//       const newData  = e.target.value
//       setFirstname(newData)
      
//     }
//     const handlechangelas= (e)=>{
//       const newData  = e.target.value
//       setLastname(newData)
      
//     }
//     console.log(city)
//     const handlechangeadd= (e)=>{
//       const newData  = e.target.value
//       setcustomerAddress(newData)
      
//     }
//     const handlechangecity= (e)=>{
//       const newData  = e.target.value
//       setCity(newData)
      
//     }
//     const handlechangephone= (e)=>{
//       const newData  = e.target.value
//       setcustomerPhoneNumber(newData)
      
//     }


//     const handleCityChange = (e) => {
//       setSelectedCity(e.target.value);
//     };

  



// const fetchDataWithDynamicHeaders = async () => {
//   try {
//     const response = await axios.get('https://groceria.onrender.com/api/v1/allproducts', {
//       headers: {
//         // 'Custom-Header': 'CustomValue', 
//         'Content-Type': 'application/json',
//     // You can set other headers here
//     'Authorization': `Bearer ${token}`
//       },
//     });
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// };
// useEffect(()=>{
//   fetchDataWithDynamicHeaders()
// },[])
// // const totall = total + 400

// const [total, setTotal]=useState(0)
// const [cartitems, setcartitem]=useState([])
// const cartitem = async () => {
//   try {
//     const response = await axios.get('https://groceria.onrender.com/api/v1/viewcart', {
//       headers: {
//         // 'Custom-Header': 'CustomValue', 
//         'Content-Type': 'application/json',
//     // You can set other headers here
//     'Authorization': `Bearer ${token}`
//       },
//     });
//     const priceFromApi = response.data.data.data.totalPrice 
//     console.log(response);
//     const numericPrice = extractNumber(priceFromApi);
//     setTotal(numericPrice )
  
//     setcartitem(response.data.data.data.items)
//     // alert(response.data.data.data.totalPrice)
//     // const totolprice = 
//   } catch (err) {
//     console.log(err);
//   }
// };
// useEffect(()=>{
//   cartitem(),
//   addAmount()
// })
// const extractNumber = (str) => {
//   const cleanedStr = str.replace(/[^0-9.]/g, ""); // Remove all non-numeric characters except '.'
//   return parseFloat(cleanedStr); // Convert cleaned string to a floating-point number
// };

// // Function to handle the addition of another amount (e.g., 400)
// const addAmount = () => {
//   const additionalAmount = 400; // Amount to add (could come from user input or another API)
  
//   if (total !== null) {
//     const newTotal = total + additionalAmount; // Add the cleaned price and the additional amount
//     setPrice(newTotal); // Set the total in the state
//   }
// };
// const goback = () =>{
//   setSucess(false)
//   setTimeout(()=>{
//     nav("/product")
//   }, 2000)
 
// }
// const handlePayment = () => {
//   if( !customerAddress || !city || !customerFirstName || !customerPhoneNumber || !customerLastName){
//    toast.error("Please Fill all details ")
//   }else{
//     const handler = window.Korapay.initialize({
//       key: "pk_test_7DkCiJqfkFUVajY9cxjbwBTBmMDMuNFqZUESWFh9", // Add your Korapay public key here
//       reference: `ref_${Math.floor(Math.random() * 1000000)}`, // Generate unique reference
//       amount: total + 400, // Payment amount in kobo (5000 kobo = 50 NGN)
//       currency: 'NGN',
//       customer: {
//         name: 'John Doe',
//         email: 'john@example.com',
//       },
//       onClose: function() {
//         console.log('Payment closed');
//         // setClose(true)
//       },
//       onSuccess: function(response) {
//         setSucess(true)
//         // Payment was successful, now make a POST request to the backend
//         console.log('Payment successful', response);
//         const userdata = {   city, customerAddress, customerFirstName, customerLastName, customerPhoneNumber,}
//         // Make POST request to backend
//         fetch('https://groceria.onrender.com/api/v1/place-order', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//              'Authorization': `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             city, customerAddress, customerFirstName, customerLastName, customerPhoneNumber
//           }),
//         })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log('Backend response:', data);
//           // alert(data.message)
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
//       },
//       onFailure: function(error) {
//         console.error('Payment failed', error);
//       },
//     });
//   }
  

//   // handler.openPaymentModal();
// };
// // const totalPrice = total + additionalAmount;
//   return (
//     <div className='check-con'>
     
//       {
//         success ?  <div className="module">
//         <div className="module2">
//           <div className="text2">
//             <h2>Your Order Has Been Placed Successfully</h2>
//             <h3>Thanks For Shopping with Groceria</h3>
//             <img src={sucess} alt="" />
//           </div>
//           <div className="buttondiv">
//             <button onClick={goback}>Go Back</button>
//           </div>
//         </div>
//       </div> : null
//       }
//          <div className='check-holder'>
//             <div className='ship-info'>
//                 <p className='ship-text'>Shipping information</p>
//                 <input className='info-input' type="text" placeholder='First Name'  onChange={handlechangefir}/>
//                 <input className='info-input' type="text" placeholder='Last Name' onChange={handlechangelas} />
//                 <input className='info-input' type="text" placeholder='Address' onChange={handlechangeadd} />
                
//      {
//         <select onChange={handlechangecity}>
//             <option value=""> -- Select a city --</option>
//             {
//                 cities.map((item,index)=>(

//                     <option value={item} key={index} >
//                         {item}
//                     </option>
//                 ))
//             }
//         </select>
//      }
//              <input className='info-input' type="text" placeholder='Phone Number' onChange={handlechangephone} />
//              <p className='return' onClick={()=> nav("/cart")}><FaArrowLeft /> Return to cart</p>
//             </div>
//             <div className='orders'>
              
//                 <div className='order-holder'>
                    
//                     {
//                       cartitems.map((e, i)=>(
//                         <div className='check-cart' key={i}>
//                         <div className='check-left'>
//                             <div className='check-image'>
//                             <img src={e?.productImage} alt="" />
//                             </div>
//                             <div className='check-text'>{e?.productName}</div>
//                         </div>
//                         <div className='checkmiddle'><p>{e?.quantity}</p></div>
//                         <div className='check-right'><p>{e?.price}</p></div>
//                     </div>
//                       ))
//                     }
//                 </div>
//                 <div className='total'>
//                     <div className='checktotal'><p>SubTotal</p>
//                     <p>{total !== null && (
//         <p> #{total}</p>
//       )}</p>
//                     </div>
//                     <div className='checktotal'><p>Shipping</p>
//                     <p>#400</p>
//                     </div>
//                     <div className='checktotal'>
//                         <p>Total</p>
//                         {/* <h3>Product Price</h3> */}
//       {price !== null && (
//         <p>#{price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
//       )}
     
//                     </div>
//                 </div>
//             </div>
//          </div>
//          <Toaster/>
//          <div onClick={ total === 0 ? null : handlePayment} className='check-btn'>
//             <p >Place Order</p>
//          </div>
//          </div>
    
//   )
// }


// export default Checkout;

import React, {useEffect, useState} from 'react'
import "./Checkout.css"
import { FaArrowLeft } from "react-icons/fa";
import bana from "../../assets/banana.jpeg"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { userData } from '../../Global/slice';
import sucess from '../../assets/sucess.gif'
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const cities = [
    "Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Enugu", "Kaduna", 
    "Benin City", "Jos", "Onitsha", "Warri", "Abeokuta", "Uyo", "Akure", 
    "Owerri", "Maiduguri", "Ilorin", "Ado Ekiti", "Calabar"
  ];
  


const Checkout = () => {
  const [price, setPrice] = useState(null); // State to hold the cleaned price
  // const [total, setTotal] = useState(null);
  const [success, setSucess]=useState(false)
    const [city, setCity]=useState("")
    const [customerFirstName, setFirstname]=useState("")
    const [customerLastName, setLastname]=useState("")
    const [selectedCity, setSelectedCity] = useState('');

    const [customerPhoneNumber, setcustomerPhoneNumber]=useState("")
    const [customerAddress, setcustomerAddress]=useState("")
    const token = localStorage.getItem('userToken');

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmYwNjc3OGM1Yzc3NWRiYTdiOTE1ZmIiLCJlbWFpbCI6ImNoYWl4bWVuYUBnbWFpbC5jb20iLCJpYXQiOjE3MjcwMzE1MTMsImV4cCI6MTcyNzA0MjMxM30.Kw5NrPRsm1u5yI_f6vodRk_EN1wWezTPZffE2cApgYA"
    const nav = useNavigate()
    const handlechangefir= (e)=>{
      const newData  = e.target.value
      setFirstname(newData)
      
    }
    const handlechangelas= (e)=>{
      const newData  = e.target.value
      setLastname(newData)
      
    }
    console.log(city)
    const handlechangeadd= (e)=>{
      const newData  = e.target.value
      setcustomerAddress(newData)
      
    }
    const handlechangecity= (e)=>{
      const newData  = e.target.value
      setCity(newData)
      
    }
    const handlechangephone= (e)=>{
      const newData  = e.target.value
      setcustomerPhoneNumber(newData)
      
    }


    const handleCityChange = (e) => {
      setSelectedCity(e.target.value);
    };

  



const fetchDataWithDynamicHeaders = async () => {
  try {
    const response = await axios.get('https://groceria.onrender.com/api/v1/allproducts', {
      headers: {
        // 'Custom-Header': 'CustomValue', 
        'Content-Type': 'application/json',
    // You can set other headers here
    'Authorization': `Bearer ${token}`
      },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
useEffect(()=>{
  fetchDataWithDynamicHeaders()
})
// const totall = total + 400

const [total, setTotal]=useState(0)
const [cartitems, setcartitem]=useState([])
const cartitem = async () => {
  try {
    const response = await axios.get('https://groceria.onrender.com/api/v1/viewcart', {
      headers: {
        // 'Custom-Header': 'CustomValue', 
        'Content-Type': 'application/json',
    // You can set other headers here
    'Authorization': `Bearer ${token}`
      },
    });
    const priceFromApi = response.data.data.data.totalPrice 
    console.log(response);
    const numericPrice = priceFromApi
    setTotal(numericPrice )
  
    setcartitem(response.data.data.data.items)
    // alert(response.data.data.data.totalPrice)
    // const totolprice = 
  } catch (err) {
    console.log(err);
  }
};
useEffect(()=>{
  cartitem(),
  addAmount()
})
// const extractNumber = (str) => {
//   const cleanedStr = str.replace(/[^0-9.]/g, ""); // Remove all non-numeric characters except '.'
//   return parseFloat(cleanedStr); // Convert cleaned string to a floating-point number
// };

// Function to handle the addition of another amount (e.g., 400)
const addAmount = () => {
  const additionalAmount = 400; // Amount to add (could come from user input or another API)
  
  if (total !== null) {
    const newTotal = total + additionalAmount; // Add the cleaned price and the additional amount
    setPrice(newTotal); // Set the total in the state
  }
};
const goback = () =>{
  setSucess(false)
  setTimeout(()=>{
    nav("/product")
  }, 2000)
 
}
const handlePayment = () => {
  if( !customerAddress || !city || !customerFirstName || !customerPhoneNumber || !customerLastName){
   toast.error("Please Fill all details ")
  }else{
    const handler = window.Korapay.initialize({
      key: "pk_test_7DkCiJqfkFUVajY9cxjbwBTBmMDMuNFqZUESWFh9", // Add your Korapay public key here
      reference:`ref_${Math.floor(Math.random() * 1000000)}`, // Generate unique reference
      amount: total + 400, // Payment amount in kobo (5000 kobo = 50 NGN)
      currency: 'NGN',
      customer: {
        name: 'John Doe',
        email: 'john@example.com',
      },
      onClose: function() {
        console.log('Payment closed');
        // setClose(true)
      },
      onSuccess: function(response) {
        setSucess(true)
        // Payment was successful, now make a POST request to the backend
        console.log('Payment successful', response);
        const userdata = {   city, customerAddress, customerFirstName, customerLastName, customerPhoneNumber,}
        // Make POST request to backend
        fetch('https://groceria.onrender.com/api/v1/place-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            city, customerAddress, customerFirstName, customerLastName, customerPhoneNumber
          }),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log('Backend response:', data);
          // alert(data.message)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      },
      onFailure: function(error) {
        console.error('Payment failed', error);
      },
    });
  }
  

  // handler.openPaymentModal();
};
// const totalPrice = total + additionalAmount;
  return (
    <div className='check-con'>
     
      {
        success ?  <div className="module">
        <div className="module2">
          <div className="text2">
            <h2>Your Order Has Been Placed Successfully</h2>
            <h3>Thanks For Shopping with Groceria</h3>
            <img src={sucess} alt="" />
          </div>
          <div className="buttondiv">
            <button onClick={goback}>Go Back</button>
          </div>
        </div>
      </div> : null
      }
         <div className='check-holder'>
            <div className='ship-info'>
                <p className='ship-text'>Shipping information</p>
                <input className='info-input' type="text" placeholder='First Name'  onChange={handlechangefir}/>
                <input className='info-input' type="text" placeholder='Last Name' onChange={handlechangelas} />
                <input className='info-input' type="text" placeholder='Address' onChange={handlechangeadd} />
                
     {
        <select onChange={handlechangecity}>
            <option value=""> -- Select a city --</option>
            {
                cities.map((item,index)=>(

                    <option value={item} key={index} >
                        {item}
                    </option>
                ))
            }
        </select>
     }
             <input className='info-input' type="text" placeholder='Phone Number' onChange={handlechangephone} />
             <p className='return' onClick={()=> nav("/cart")}><FaArrowLeft /> Return to cart</p>
            </div>
            <div className='orders'>
              
                <div className='order-holder'>
                  {/* <>
                  {
                    cartitems.length == 0 ? null : <h1>Your Cart is Empty</h1>
                  }
                  </> */}{
                    total === 0 ? <h1>Your Cart is Empty...</h1> :
                        <>
                        
                        {
                      cartitems.map((e, i)=>(
                        <div className='check-cart' key={i}>
                        <div className='check-left'>
                            <div className='check-image'>
                            <img src={e?.productImage} alt="" />
                            </div>
                            <div className='check-text'>{e?.productName}</div>
                        </div>
                        <div className='checkmiddle'><p>{e?.quantity}</p></div>
                        <div className='check-right'><p>{e?.price}</p></div>
                    </div>
                      ))
                    }
                        
                        
                        </>
                  }
                    

                </div>
                <div className='total'>
                    <div className='checktotal'><p>SubTotal</p>
                    <p>{total !== null && (
        <p> #{total}</p>
      )}</p>
                    </div>
                    <div className='checktotal'><p>Shipping</p>
                    <p>#400</p>
                    </div>
                    <div className='checktotal'>
                        <p>Total</p>
                        {/* <h3>Product Price</h3> */}
      {price !== null && (
        <p>#{price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
      )}
     
                    </div>
                </div>
            </div>
         </div>
         <Toaster/>
         <div onClick={ total === 0 ? null : handlePayment} className='check-btn'>
            <p >Place Order</p>
         </div>
         </div>
    
  )
}


export default Checkout;


