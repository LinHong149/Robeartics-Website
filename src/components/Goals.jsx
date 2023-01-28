import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row flex-1 p-6 w-[100%] rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`} >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Goals = () =>  (
  <section id="goals" className={layout.section}>
    <div className={layout.sectionInfo}>
      <motion.h2 className={styles.heading2}  initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 1, delay: 0.2}}>
        Our Goals, <br className="sm:block hidden" /> the direction of our dedication.
      </motion.h2>
      <motion.p className={`${styles.paragraph} max-w-[470px] mt-5`}  initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 1, delay: 0.2}}>
        Robeartics is dedicated to designing, building and competing with a highly advanced robot in the FIRST Robotics Competition while fostering teamwork, innovation, and learning.
      </motion.p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Goals;