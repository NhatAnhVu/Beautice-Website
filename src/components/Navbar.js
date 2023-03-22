import React from "react";
import Logo from "../images/Main Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar__menu">
        <a className="navbar__menu--item navbar__menu--active" href="!#">
          Home+
        </a>
        <a className="navbar__menu--item" href="!#">
          About
        </a>
        <a className="navbar__menu--item" href="!#">
          Service
        </a>
        <a className="navbar__menu--item" href="!#">
          Gallery
        </a>
        <a className="navbar__menu--item" href="!#">
          Blog
        </a>
        <a className="navbar__menu--item" href="!#">
          <button className="pink-button">Contact</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
