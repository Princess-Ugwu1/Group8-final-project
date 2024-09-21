// import React, { useState } from 'react'
// import { Outlet } from 'react-router-dom'
// import SecondHeader from '../components/header/SecondHeader'
// import Footer from '../components/footer/Footer'

// const LayoutTwo = () => {


//   return (
//     // <>
//     // {
//     //     <div>
//     //     <SecondHeader/>
//     //     <Outlet />
//     //     <Footer/>
//     //     </div>
//     // }
//     // </>
//   )
// }

// export default LayoutTwo

import React from 'react';
import { Outlet } from 'react-router-dom';
import SecondHeader from '../components/header/SecondHeader'
import Footer from '../components/footer/Footer'
import './LayoutTwo.css'; // Your custom styles

const Layout = () => {
  return (
    <div className="layoutWrapper">
      <SecondHeader />
      <main className="mainContent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;