import styled from "styled-components";
import { About, StyledDescription } from "./styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { scrollAnimation } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledAbout
      // variants={scrollAnimation}
      // initial={"hidden"}
      // animate={controls}
      // ref={element}
      variants={scrollAnimation}
      animate={controls}
      initial={"hidden"}
      ref={element}
    >
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              asperiores dolore cumque exercitationem.
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              asperiores dolore cumque exercitationem.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              asperiores dolore cumque exercitationem.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              asperiores dolore cumque exercitationem.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledAbout>
  );
};

const StyledAbout = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  h4 {
    font-size: 1.7rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.3rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 1.5rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
