import { motion } from "framer-motion";
import styled from "styled-components";
import { pageTransition, titleAnimation } from "../animation";
const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}> Get in touch.</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h3>Send us a message.</h3>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h3>Send an email.</h3>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h3>Social Media.</h3>
        </Social>
      </Hide>
    </ContactStyle>
  );
};
const Circle = styled.div`
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  overflow: hidden;
  display: flex;
  align-items: center;
  h3 {
    margin: 2rem;
    color: #353535;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  background: white;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  h2 {
    color: black;
  }
`;
export default ContactUs;
