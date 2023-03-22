import React from "react";
import Slide1 from "../../images/Slide Frame 1.png";
import SliderButton from "../../images/Rectangle Silder Button.png";
import SliderButtonActive from "../../images/Rectangle Slider Active.png";

const MainSlider = () => {
  return (
    <section className="section mainSlider-section">
      <div className="slider">
        <div>
          <h1>Clinic & Beauty consultant</h1>
          <p>
            It is a long established fact that a reader will be by the readable
            content of a page.
          </p>
          <button>More Details</button>
        </div>
        <div>
          <img src={Slide1} alt="" />
        </div>
      </div>
      <div className="slider-button">
        <img src={SliderButton} alt="" />
        <img src={SliderButtonActive} alt="" />
        <img src={SliderButton} alt="" />
      </div>
    </section>
  );
};

export default MainSlider;
