import styles from "../style"
import bgImage from "../assets/SponsorBackground.png"

import { Bot, Contact, CTA, Footer, Goals, Nav, Sponsors, Stats, Team, Us, SponsorsHero, SponsorsCTA, SponsorsInfo} from "../components"

const Sponsor = () => (
  <div className='bg-primary w-full overflow-hidden '>
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

  </div>
);

export default Sponsor