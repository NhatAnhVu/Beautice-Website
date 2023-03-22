import React from "react";
import PlayButton from "../../images/Play_button.png";
import aboutImg from "../../images/about-img.png";

const About = () => {
  return (
    <section className="section about-section">
      <div className="about-info">
        <span>About Us</span>
        <h2>We are the best beauty clinic</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat.
        </p>
        <p>
          Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
          cras tellus enim.
        </p>
        <div className="about-info-button">
          <button className="pink-button">Learn More</button>
          <div className="play-button">
            <img src={PlayButton} alt="" /> Watch Video
          </div>
        </div>
      </div>
      <img className="about-img" src={aboutImg} alt="" />
    </section>
  );
};

export default About;
