import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animation";

const MovieDetails = () => {
  const history = useLocation();
  // console.log(history.pathname);
  const url = history.pathname;

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [url, movies]);
  // console.log(movie);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageTransition}
          initial="hidden"
          animate="show"
        >
          <Heading>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movieImage" />
          </Heading>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <Image>
            <img src={movie.secondaryImg} alt="" />
          </Image>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)``;
const Heading = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Image = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  padding: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
  }

  .line {
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
    width: 100%;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem 3rem;

  h3 {
    font-size: 1.3rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};
export default MovieDetails;
