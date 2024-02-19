import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <motion.div variants={fadeIn('left', "spring", 1, 1.5)}>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "")