import React, {useState} from 'react'
import "./Checkout.css"
import { FaArrowLeft } from "react-icons/fa";
import bana from "../../assets/banana.jpeg"
import { useDispatch, useSelector } from 'react-redux';

const cities = [
    "Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Enugu", "Kaduna", 
    "Benin City", "Jos", "Onitsha", "Warri", "Abeokuta", "Uyo", "Akure", 
    "Owerri", "Maiduguri", "Ilorin", "Ado Ekiti", "Calabar"
  ];
  


const Checkout = () => {

    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (e) => {
      setSelectedCity(e.target.value);
    };

//     const dispatch = useDispatch();
//   // const cart=useSelector((state)=>state.cart.cart)
//   const cart=useSelector((state)=>state.cart?.cart)
//   const loggedInUser=useSelector((state)=>state.cart?.loggedInUser)
//   console.log(cart)

//   function payKorapay() {
//     console.log("click")
//     window.Korapay.initialize({
//         key: import.meta.env.VITE_Public_Key,
//         reference: `Ife&VincentCustomer_${Date.now()}`,
//         amount: 400, 
//         currency: "NGN",
//         customer: {
//           name: loggedInUser.fullName,
//           email: loggedInUser.email
//         },
//         // notification_url: ""
//     });
// }

const payKorapay = () => {
    const Keys = `key${Math.random()}`;
    //  console.log('Kora pay with :', AmountToPay,Name,bookingId)
    
    window.Korapay.initialize({
      key: "pk_test_7DkCiJqfkFUVajY9cxjbwBTBmMDMuNFqZUESWFh9",
      reference: Keys,
      amount: AmountToPay, 
      currency: "NGN",
      customer: {
        name: Name,
        email: "vincentogbuka13@gmail.com"
      },
      onClose: function (data) {
        console.log(data);
      },
      onSuccess: function (data) {
        // console.log("on suess",data, bookingId);
        if(data.status === "success"){
          
          setSuccess(!success)
        }
      },
      onFailed: function (data) {
        console.log(data);
      }
    });
  };

  return (
    <div className='check-con'>
         <div className='check-holder'>
            <div className='ship-info'>
                <p className='ship-text'>Shipping information</p>
                <input className='info-input' type="text" placeholder='Full Name' />
                <input className='info-input' type="text" placeholder='Address' />
                
     {
        <select>
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
             <input className='info-input' type="text" placeholder='Phone Number' />
             <p className='return'><FaArrowLeft /> Return to cart</p>
            </div>
            <div className='orders'>
                <div className='order-holder'>
                    <div className='check-cart'>
                        <div className='check-left'>
                            <div className='check-image'>
                            <img src={bana} alt="" />
                            </div>
                            <div className='check-text'>Fresh Banana</div>
                        </div>
                        <div className='checkmiddle'><p>2</p></div>
                        <div className='check-right'><p>#1000</p></div>
                    </div>
                    
                </div>
                <div className='total'>
                    <div className='checktotal'><p>SubTotal</p>
                    <p>#1000</p>
                    </div>
                    <div className='checktotal'><p>Shipping</p>
                    <p>#400</p>
                    </div>
                    <div className='checktotal'>
                        <p>Total</p>
                        <p>#1400</p>
                    </div>
                </div>
            </div>
         </div>
         <div onClick={payKorapay} className='check-btn'>
            <p>Place Order</p>
         </div>
         </div>
    
  )
}

export default Checkout;

