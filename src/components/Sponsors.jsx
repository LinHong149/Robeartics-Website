import { sponsors } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, link }) => (
  
  <div 
    onClick={() => window.open(link)}
    className={`flex flex-row p-6 rounded-[20px] sponsor-card`} 
    id='sponsors'
  >
    <div className={`w-fit h-fit p-12 rounded-full ${styles.flexCenter} `}>
      <img src={icon} alt="star" className="w-[200px] h-[50px] object-contain sponsor-image" />
    </div>
  </div>
);

const Sponsors = () => (
  <div className={`${layout.sectionImg}  ${styles.paddingY} flex flex-wrap gap-3`}>
    {sponsors.map((feature) => (
      <FeatureCard key={feature.id} {...feature}/>
    ))}
  </div>
)


export default Sponsors