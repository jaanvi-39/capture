import React from "react";
import home1 from "../img/home1.png";

//importing styled components
// import styled from "styled-components";

import { About, StyledDescription, Image, Hide } from "./styles";

const AboutSection = () => {
  return (
    <About>
      <StyledDescription>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dream</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true. </h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography advice. We have
          professionals with amazing skills to help you achieve it.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <Image>
        <img src={home1} alt=""></img>
      </Image>
    </About>
  );
};

export default AboutSection;
