import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-router-dom";
import { IoCartOutline, IoMenuOutline } from "react-icons/io5";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { UseCart } from "../../hooks/CartProvider";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

// import { useState } from 'react';

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(()=>{
    if (mobileMenu) {
      document.body.style.overflow = "hidden";  
    }
  },[mobileMenu])
  const { cartItem } = UseCart();
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <h1>
              <span>E</span>Shop
            </h1>
          </Link>
        </div>
        <div className="menu-list">
          <ul id="list">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/product"}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
          <Link to={"/cart"} id="cart">
            <IoCartOutline  onClick={()=> setMobileMenu(false)}/>
            <span>{cartItem.length}</span>
          </Link>
          <IoMenuOutline onClick={()=>setMobileMenu(true)} id="menu-icon"/>
          <div className="profile">
            <SignedOut>
              <SignInButton id="sign-btn" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
         {/* mobileMenu */}
      <div className="moblie" style={{display: mobileMenu ? "block":"none"}}>
        <IoClose onClick={()=> setMobileMenu(false)} size={24} color="black" style={{float:"right", marginRight:"10px", marginTop:"10px"}} />
        <div className="profile" style={{display:"block", marginTop:"30px", marginLeft:"10px"}}>
            <SignedOut>
              <SignInButton id="sign-btn"/>
            </SignedOut>
            <SignedIn>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <UserButton />
                <p style={{ margin: 0 }}>Profile</p>
              </div>
            </SignedIn>
          </div>
        <ul id="mobile-menu">
          <li><NavLink onClick={()=> setMobileMenu(false)}  to={"/"}>Home</NavLink></li>
          <li><NavLink onClick={()=> setMobileMenu(false)} to={"/product"}>Products</NavLink></li>
          <li><NavLink onClick={()=> setMobileMenu(false)} to={"/about"}>About</NavLink></li>
          <li><NavLink onClick={()=> setMobileMenu(false)} to={"/contact"}>Contact</NavLink></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
