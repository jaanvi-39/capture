import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const StyledDescription = styled.div`
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

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;