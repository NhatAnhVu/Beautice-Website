import React from "react";
import About from "../components/home1/About";
import ContactUs from "../components/home1/ContactUs";
import MainSlider from "../components/home1/MainSlider";
import Services from "../components/home1/Services";
import Teams from "../components/home1/Teams";

const Home1 = () => {
  return (
    <div className="home1">
      <MainSlider />
      <Services />
      <About />
      <Teams />
      <ContactUs />
    </div>
  );
};

export default Home1;
