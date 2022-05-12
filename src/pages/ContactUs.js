import { motion } from "framer-motion";
import { pageTransition } from "../animation";
const ContactUs = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <p> Contact Us</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt
        labore nesciunt mollitia? Nihil saepe delectus tempore quo eligendi
        quibusdam eveniet sequi repudiandae aperiam illo obcaecati, inventore
        rerum? Harum.
      </p>
    </motion.div>
  );
};

export default ContactUs;
