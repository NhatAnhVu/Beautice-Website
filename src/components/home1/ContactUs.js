import React from "react";
import contactUsImg from "../../images/Contact Animations.png";

const ContactUs = () => {
  return (
    <section className="section contact-section">
      <img src={contactUsImg} alt="" />
      <div className="contact-form">
        <span>Contact Us</span>
        <h2>Send your inquiry to our expert team</h2>
        <p>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
        <form>
          <div style={{ display: "flex", gap: "1.5em" }}>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Subject mesage" />
          <textarea
            type="text"
            placeholder="Your inquiry here"
            className="contact-form-inquiry"
          />
          <button className="pink-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
