// import React from "react";
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";

import styled from "styled-components";

import { About, StyledDescription, Image } from "./styles";

const Services = () => {
  return (
    <About>
      <Image>
        <img src={home2} alt="home2image"></img>
      </Image>
      <StyledDesc>
        <h2>
          High <span> quality </span> services.
        </h2>
        <Cards>
          <Card>
            <div className="card-heading">
              <img src={clock} alt="clock"></img>
              <h3>Efficient</h3>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Card>
          <Card>
            <div className="card-heading">
              <img src={money} alt="clock"></img>
              <h3>Affordable</h3>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Card>
          <Card>
            <div className="card-heading">
              <img src={diaphragm} alt="clock"></img>
              <h3>Pro Grade Gear</h3>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Card>
          <Card>
            <div className="card-heading">
              <img src={teamwork} alt="clock"></img>
              <h3>Teamwork</h3>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Card>
        </Cards>
      </StyledDesc>
    </About>
  );
};

const StyledDesc = styled(StyledDescription)`
  padding-right: 0rem;
  padding-left: 5rem;
`;

const Cards = styled.div`
  padding-top: 3rem;

  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 15rem;
  padding: 0rem 1rem;

  .card-heading {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    font-size: 1.7rem;
    color: black;
    background: white;
    padding: 0.5 rem;
  }
  p {
    width: 90%;
    padding: 1rem 0rem 4rem 0rem;
  }
`;

export default Services;
