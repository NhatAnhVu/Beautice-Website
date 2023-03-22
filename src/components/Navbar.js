import React, { useState } from "react";
import Logo from "../images/Main Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="" />
      </div>
      <div className="hamburger-icon" onClick={handleShowNavbar}>
        {!showNavbar ? <GiHamburgerMenu /> : <RxCross1 />}
      </div>
      <div className={`navbar__menu ${showNavbar && "navbar-active"}`}>
        <div className="navbar__menu--list">
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
      </div>
    </nav>
  );
};

export default Navbar;
