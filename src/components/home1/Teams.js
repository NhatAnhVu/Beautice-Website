import React from "react";
import avatar1 from "../../images/Briyan Nevalli.png";
import avatar2 from "../../images/Bella Sebastian.png";
import avatar3 from "../../images/Lilly Adam.png";
import Twitter from "../../images/Twitter.png";
import Facebook from "../../images/Facebook.png";
import Instagram from "../../images/Instagram.png";

const Teams = () => {
  return (
    <section className="section">
      <div className="team-info">
        <span>Professional Teams</span>
        <h2>The Professional expert</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
      </div>
      <div className="team-card">
        <div className="card card-transperant">
          <img src={avatar1} alt="" />
          <span>Surgeon</span>
          <h4>Briyan Nevalli</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </p>
          <div className="team-social">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className="card">
          <img src={avatar2} alt="" />
          <span>Dermatologist</span>
          <h4>Bella sebastian</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </p>
          <div className="team-social">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className="card card-transperant">
          <img src={avatar3} alt="" />
          <span>Stylist expert</span>
          <h4>Lilly Adams</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </p>
          <div className="team-social">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
