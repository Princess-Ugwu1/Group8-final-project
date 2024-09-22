import React from "react";
import "./sideBar.css";
import { IoStorefrontSharp } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

const VendorSideBar = () => {
  return (
    <div className="vendorSideBar">
      <div className="vendorSideBarLogo">
        <img src={"./Logo.svg"} alt="" />
      </div>
      <div className="vendorListWrapper">
        <div className="vendorList">
          <ul>
            <li><NavLink to= '/upload' className={({isActive}) =>  isActive ? "SideActive" : "SideNotActive"}>
                <IoStorefrontSharp size={25} />
                Add Product
                </NavLink>
            </li>
            <li>
            <NavLink to= '/vendorOrders' className={({isActive}) =>  isActive ? "SideActive" : "SideNotActive"}>
                <CiMenuBurger size={25} />
                order
                </NavLink>
            </li>
            <li>
            <NavLink to= '/' className={({isActive}) =>  isActive ? "SideActive" : "SideNotActive"}>
              <MdLogout size={25} />
              Log out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VendorSideBar;
