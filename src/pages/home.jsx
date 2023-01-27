import styles from "../style"
import { motion } from "framer-motion/dist/framer-motion"

import { Bot, Contact, CTA, Footer, Goals, Nav, Sponsors, Stats, Team, Us } from "../components"


const Home = () => (
  <motion.div 
    className={`bg-primary w-full overflow-hidden`}
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
        THIS IS HOME
        <Us />
      </div>
    </div>

    <div className={`bg.primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Goals />
        <Bot />
        <Sponsors /> 
        {/* Sponsors reference from vitejs.dev */}
        <Team />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </div>

  </motion.div>
);

export default Home