// import React from "react";
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";

const Services = () => {
  return (
    <div className="services-section">
      <div className="service-img">
        <img src={home2} alt="home2image"></img>
      </div>
      <div className="description">
        <h2>
          High <span> quality </span> services.
        </h2>
        <div className="services-cards">
          <div className="card">
            <div className="card-heading">
              <img src={clock} alt="clock"></img>
              <h3>Efficient</h3>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={money} alt="clock"></img>
              <h3>Affordable</h3>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={diaphragm} alt="clock"></img>
              <h3>Pro Grade Gear</h3>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={teamwork} alt="clock"></img>
              <h3>Teamwork</h3>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
