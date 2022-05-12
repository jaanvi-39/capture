// import React from "react";

//import component of pages

import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import FaqSection from "../components/FaqSection";

import { motion } from "framer-motion";
import { pageTransition } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageTransition}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <Services />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
