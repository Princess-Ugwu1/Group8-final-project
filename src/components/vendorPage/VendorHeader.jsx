// import React, { useState } from 'react'
// import './vendorHeader.css'
// import SideBugger from './sideBugger'

// const VendorHeader = () => {
//   const [showSide, setShowSide] = useState(false)
//   return (
//     <div className='VendorHeader'>
//     <div className="MenuHolder">
//     <p onClick={()=>setShowSide(!showSide)}>Menu</p>
//       {
//         showSide ? 
//         <div className="sideBar">
//           <SideBugger/>
//         </div>
//         : null
//       }
//     </div>
//     </div>
//   )
// }

// export default VendorHeader


import React, { useState } from 'react';
// import './vendorHeader.css';
// import SideBugger from './sideBugger';

const VendorHeader = () => {
  // const [showSide, setShowSide] = useState(false);

  return (
    <div className="VendorHeader">
      {/* <div className="MenuHolder" onClick={() => setShowSide(!showSide)}>
        <p>Menu</p>
      </div>
      <div className={`sideBar ${showSide ? 'show' : ''}`}>
        <SideBugger />
      </div> */}
    </div>
  );
};

export default VendorHeader;

