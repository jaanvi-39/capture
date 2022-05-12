// import athlete2 from "../img/athlete2.png";
import athleteSmall from "../img/athlete-small.png";
// import goodTimes2 from "../img/good-times2.jpg";
import goodtimesSmall from "../img/goodtimes-small.png";
// import theRacer2 from "../img/the-racer2.jpg";
import theracerSmall from "../img/theracer-small.png";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { pageTransition } from "../animation";

const OurWork = () => {
  return (
    <Work
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athleteSmall} alt="athleteSmall"></img>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracerSmall} alt="theracerSmall"></img>
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimesSmall} alt="goodtimesSmall"></img>
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
    background: #cccccc;
    margin-bottom: 5rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
