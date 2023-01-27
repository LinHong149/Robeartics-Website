import styles from "../style"
import bgImage from "../assets/SponsorBackground.png"
import { motion } from "framer-motion/dist/framer-motion"

import { Bot, Contact, CTA, Footer, Goals, Nav, Sponsors, Stats, Team, Us, SponsorsHero, SponsorsCTA, SponsorsInfo} from "../components"

const Sponsor = () => (
  <motion.div 
    className='bg-primary w-full overflow-hidden '
    initial={{width:0}}
    animate={{width: "100%"}}
    exit={{width: 0}}
  >
    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Nav />
      </div>
    </div> */}

    <div className={`bg.primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Us /> */}
      </div>
    </div>

    <div 
      className={`bg.primary ${styles.paddingX} ${styles.flexStart} bg-contain bg-top bg-no-repeat`}
      style={{ backgroundImage:`url(${bgImage})`}}
    >
      <div className={`${styles.boxWidth}`}>
        <SponsorsHero /> 
        {/* <Team /> */}
        <SponsorsCTA />
        <SponsorsInfo />
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>

  </motion.div>
);

export default Sponsor