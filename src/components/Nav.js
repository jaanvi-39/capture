import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyleNav>
      <h2>
        <Link to="/">Capture</Link>
      </h2>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyleNav>
  );
};
const StyleNav = styled.div`
  min-height: 10vh;
  background: #282828;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  z-index: 10;
  top: 0;

  h2 {
    font-size: 1.8rem;
    flex: 2;
    font-family: "Lobster", cursive;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    flex: 1;
    display: flex;
    justify-content: space-between;

    li {
      font-size: 1rem;
      position: relative;
    }
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 1rem;
    h2 {
      display: inline-block;
      margin-bottom: 1rem;
    }
    ul {
      padding: 0.5rem 2rem 0.5rem 2rem;
      width: 100%;
      justify-content: space-around;
    }
    li {
      padding: 0;
    }
  }
  @media (max-width: 400px) {
    padding: 1rem 0rem;
    font-size: 65%;
  }
`;

export default Nav;
