import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background: rgb(23, 23, 23);
    font-family: 'Inter', sans-serif;
}
button{
    cursor: pointer;
    background: transparent;
    border: 3px solid #23d996;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 0.8rem 1.2rem;
    color: white;
    transition: all 0.5s ease;
    &:hover{
          background-color: #23d996;
    }
}
h2 {
    font-weight: lighter;
    font-size: 4rem;
    color: white;
  }
  h3{
      font-size: 2rem;
      color: white;
  }
  h4{
      font-size: 1.7rem;
      font-weight: bold;
      color: white;
  }
  p {
    padding: 2.5rem 0rem;
    font-size: 1.2rem;
    font-weight: lighter;
    line-height: 150%;
    color: #ccc;
  }
  span {
    color: #23d996;
    font-weight: bold;
  }
`;

export default GlobalStyles;
