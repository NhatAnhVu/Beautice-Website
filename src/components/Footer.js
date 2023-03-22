import React from "react";
import Logo from "../images/Footer Logo.png";
import Facebook from "../images/footer facebook.png";
import Twitter from "../images/footer twitter.png";
import Linkedin from "../images/footer linkedin.png";
import Youtube from "../images/footer youtube.png";
import Instagram from "../images/footer instagram.png";
import ToTopButton from "../images/ToTop Button.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__upper">
          <div className="footer__info">
            <img src={Logo} alt="" />
            <div className="footer__info--text">
              <p>
                <strong>Beautice</strong> is a Beaty Clinic WordPress Theme
              </p>
              <span>
                <i>Baker Street 101, NY, United States.</i>
              </span>
              <br />
              <span>
                <i>
                  +521 569 8966. &nbsp;&nbsp;&nbsp; <u>mail@company.com</u>
                </i>
              </span>
            </div>
          </div>
          <div className="footer__pages">
            <h4>Pages</h4>
            <ul>
              <li>&#8227;&nbsp; Home</li>
              <li>&#8227;&nbsp; About</li>
              <li>&#8227;&nbsp; Services</li>
              <li>&#8227;&nbsp; Gallery</li>
              <li>&#8227;&nbsp; Team</li>
            </ul>
          </div>
          <div className="footer__informations">
            <h4>Informations</h4>
            <ul>
              <li>&#8227;&nbsp; Term & conditions</li>
              <li>&#8227;&nbsp; Privacy policy</li>
              <li>&#8227;&nbsp; Blog</li>
              <li>&#8227;&nbsp; Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__social">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Youtube} alt="" />
            <img src={Instagram} alt="" />
          </div>
          <p>© AltDesain Studio 2021 - All right reserved.</p>
        </div>
      </div>
      <img src={ToTopButton} alt="" className="ToTopButton" />
    </footer>
  );
};

export default Footer;
