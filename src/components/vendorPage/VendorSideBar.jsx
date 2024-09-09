// import React from 'react'
// import './sideBar.css'

// const VendorSideBar = () => {
//     const list = 
//     {
//       id:1, name:"DashBoard" 
//     }
//   return (
//     <div className="sideBar">
//         {
//             list.map(()=>(
//                 <div className="listDiv"></div>
//             ))
//         }

//     </div>
//   )
// }

// export default VendorSideBar

import React from 'react';
import './sideBar.css';
import { FaHome, FaUser, FaShoppingCart, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Importing icons

const VendorSideBar = () => {
  // Updated list with 5 items, each having an id, name, and icon
  const list = [
    { id: 1, name: "Dashboard", icon: <FaHome /> },
    { id: 2, name: "Profile", icon: <FaUser /> },
    { id: 3, name: "Orders", icon: <FaShoppingCart /> },
    { id: 4, name: "Settings", icon: <FaCog /> },
    { id: 5, name: "Logout", icon: <FaSignOutAlt /> }
  ];

  return (
    <div className="sideBar">
      {
        list.map((item) => (
          <div className="listDiv" key={item.id}>
            <span className="icon">{item.icon}</span> {/* Rendering the icon */}
            <span className="text">{item.name}</span> {/* Rendering the name */}
          </div>
        ))
      }
    </div>
  );
}

export default VendorSideBar;
