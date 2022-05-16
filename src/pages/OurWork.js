// import athlete2 from "../img/athlete2.png";
import athleteSmall from "../img/athlete-small.png";
// import goodTimes2 from "../img/good-times2.jpg";
import goodtimesSmall from "../img/goodtimes-small.png";
// import theRacer2 from "../img/the-racer2.jpg";
import theracerSmall from "../img/theracer-small.png";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  staggerFrame,
  pageTransition,
  fade,
  photoAnimation,
  lineAnim,
  slider,
} from "../animation";

const OurWork = () => {
  return (
    <Work
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={staggerFrame}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={athleteSmall}
              alt="athleteSmall"
            ></motion.img>
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <motion.img
            variants={photoAnimation}
            src={theracerSmall}
            alt="theracerSmall"
          ></motion.img>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <motion.img
            variants={photoAnimation}
            src={goodtimesSmall}
            alt="goodtimesSmall"
          ></motion.img>
        </Link>
      </Movie>
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: #282828;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 5rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Framer motion
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
