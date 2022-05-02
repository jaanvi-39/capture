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
`;
export default Nav;
