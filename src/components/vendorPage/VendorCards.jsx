import React from 'react';
import './vendorCards.css';

const VendorCards = () => {

  const cards = [
    { id: 1, title: "Total Products", value: 1200 },
    { id: 2, title: "Total Categories", value: 35 },
    { id: 3, title: "Total Pending Orders", value: 18 },
    { id: 4, title: "Income", value: "$12,400" },
    { id: 5, title: "Total Completed Orders", value: 250 },
  ];

  return (
    <div className='vendorsCardWrapper'>
      {
        cards.map((card) => (
          <div className="vendorsCards" key={card.id}>
            <div className="vendorCardLeft">
              <p>{card.title}</p>
            </div>
            <div className="vendorCardRight">
              <p>{card.value}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default VendorCards;
