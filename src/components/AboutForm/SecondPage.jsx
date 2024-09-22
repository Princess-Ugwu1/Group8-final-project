// import "./SecondPage.css"

// const Second = () =>{
//     return(
//        <div className="Second-Container">
//         <div className="Box">
//             <div className="box1">About us</div>
//             <div className="box2">
//                 <p>Groceria is all about your local grocery needs,
//                   offering a seamless shopping experience online.
//                     We are dedicated to bringing you the freshest
//                     and highest-quality food products, right from 
//                     local farmers and trusted suppliers, straight
//                     to your doorstep.</p>
//             </div>
//         </div>
//        </div>
//     )
// };

// export default SecondPage
// const KorapayPayment = () => {
    const handlePayment = () => {
      const handler = window.Korapay.initialize({
        key: "pk_test_7DkCiJqfkFUVajY9cxjbwBTBmMDMuNFqZUESWFh9", // Add your Korapay public key here
        reference: `ref_${Math.floor(Math.random() * 1000000)}`, // Generate unique reference
        amount: 5000, // Payment amount in kobo (5000 kobo = 50 NGN)
        currency: 'NGN',
        customer: {
          name: 'John Doe',
          email: 'john@example.com',
        },
        onClose: function() {
          console.log('Payment closed');
        },
        onSuccess: function(response) {
          // Payment was successful, now make a POST request to the backend
          console.log('Payment successful', response);
  
          // Make POST request to backend
          fetch('https://groceria.onrender.com/api/v1/place-order', {
            city, customerAddress, customerFirstName, customerLastName, customerPhoneNumber,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              transactionId: response.transaction_id, // Korapay transaction ID
              status: 'successful',
              amount: response.amount,
              reference: response.reference,
            }),
          })
          .then((res) => res.json())
          .then((data) => {
            console.log('Backend response:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        },
        onFailure: function(error) {
          console.error('Payment failed', error);
        },
      });
  
      handler.openPaymentModal();
    };