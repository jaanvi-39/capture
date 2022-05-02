import styled from "styled-components";

const Nav = () => {
  return (
    <StyleNav>
      <h2>
        <a href="#">Capture</a>
      </h2>
      <ul>
        <li>
          <a href="#">1. About Us</a>
        </li>
        <li>
          <a href="#">2. Our Work</a>
        </li>
        <li>
          <a href="#">3. Contact Us</a>
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
