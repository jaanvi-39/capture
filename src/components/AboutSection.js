import React from "react";
import home1 from "../img/home1.png";

//importing styled components
// import styled from "styled-components";

import { About, StyledDescription, Image, Hide } from "./styles";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <StyledDescription>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dream</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>come true. </motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography advice. We have
          professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <Image>
        <motion.img variants={photoAnimation} src={home1} alt=""></motion.img>
      </Image>
    </About>
  );
};

export default AboutSection;
