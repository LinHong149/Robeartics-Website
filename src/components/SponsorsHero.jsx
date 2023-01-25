import { sponsors } from "../constants";
import styles, { layout } from "../style";
import bgImage from "../assets/SponsorBackground.png"

const FeatureCard = ({ icon, link }) => (
  
  <div 
    onClick={() => window.open(link)}
    className={`flex flex-row p-12 sponsor-info-card`} 
    id='sponsors'
  >
    <img src={icon} alt="star" className="max-w-fit h-[50px] object-contain sponsor-image" />
  </div>
);

const SponsorsHero = () => (
  <div 
        // style={{ backgroundImage:`url(${bgImage})`}}
        className={`${styles.flexCenter} flex flex-col flex-wrap pt-[50vh] bg-cover`}
    >
    <div className="flex flex-col items-center">
        <h2 className={`${styles.heading2} fleax-1 font-poppins font-semibold text-white ss:leading-[100px] leading-[75px]`}>Our Supporters</h2>
        <h3 className={`${styles.paragraph} text-gradient`}>Proudly Sponsored By</h3>
    </div>
    <div className={`${layout.sectionImg}  ${styles.paddingY} flex flex-wrap gap-3`}>
        {sponsors.map((feature) => (
        <FeatureCard key={feature.id} {...feature}/>
        ))}
    </div>
  </div>
)


export default SponsorsHero