import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { robot } from "../assets"

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
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

const Bot = () =>  (
  <section id="features" className={layout.section}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Meet Rob, <br className="sm:block hidden" /> the product of our dedication.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
        The powerhouse of our team. A true athlete, built with cutting-edge technology and innovative design, it represents our team's passion, creativity, and determination. See it in action at our next competition!
      </p>
      <Button />
    </div>

    <div className={`${styles.paddingY} flex-1`}>
      <img className={`${styles.marginY} rounded-[20px] object-cover`} src={robot} alt="" />
    </div>


    {/* <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div> */}
    {/* Replace with image */}
  </section>
);

export default Bot;