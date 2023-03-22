import React from "react";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.png";

const Services = () => {
  return (
    <section className="section">
      <div className="services-info">
        <span>Main Services</span>
        <h2>Learn services to focus on your beauty</h2>
        <p>
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </p>
      </div>
      <div className="services-card">
        <div className="card">
          <img src={service1} alt="" />
          <h4>Beauty consultation</h4>
          <p>
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </p>
        </div>
        <div className="card">
          <img src={service2} alt="" />
          <h4>Skin treatments</h4>
          <p>
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </p>
        </div>
        <div className="card">
          <img src={service3} alt="" />
          <h4>Beauty product</h4>
          <p>
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
