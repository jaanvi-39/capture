import React from "react";
import home1 from "../img/home1.png";

//importing styled components
import styled from "styled-components";

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

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    font-weight: lighter;
  }
  /* justify-content: space-between; */
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default AboutSection;
