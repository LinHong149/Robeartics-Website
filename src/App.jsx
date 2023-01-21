import styles from "./style"

import { Bot, Contact, CTA, Footer, Goals, Nav, Sponsors, Stats, Team, Us } from "./components"

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Nav />
      </div>
    </div>

    <div className={`bg.primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
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
        hi
      </div>
    </div>

  </div>
);

export default App