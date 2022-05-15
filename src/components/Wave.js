import styled from "styled-components";
import { motion } from "framer-motion";
const Wave = () => {
  return (
    <StyleWave
      //   width="1440"
      //   height="363"
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3 }}
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="#D96ED4"
        strokeOpacity="0.2"
        strokeWidth="10"
      />
    </StyleWave>
  );
};

const StyleWave = styled.svg`
  position: absolute;
  top: 30%;
  left: 0;
  z-index: 1;
`;
export default Wave;
