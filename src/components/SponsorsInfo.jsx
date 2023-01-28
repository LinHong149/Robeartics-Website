import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { sponsorimage } from "../assets/index"
import { motion } from "framer-motion"


const SponsorsInfo = () =>  (
  <section id="features" className={layout.section}>
    <div className={`${layout.sectionInfo}`}>
      <motion.h2 className={styles.heading2}  initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 1, delay: 0.2}}>
        Two ways to donate
      </motion.h2>
      <motion.p className={`${styles.paragraph} mt-5`}  initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 1, delay: 0.2}}>
        A: Write and mail a cheque. The mailing address is: 200 Fundy Bay Blvd, Scarborough, ON M1W 3G1. The memo should be "Bethune CI Robotics", followed by the name of the destination team if applicable.  <br/> <br/>

        B: Donate via SchoolCashOnline.  <br/>

        1. Visit the <a className="text-blue-400 underline" href="https://tdsb.schoolcashonline.com/Fee/Details/457/153/false/true">TDSB donation page</a> <br/>
        2. Enter the donation amount (in CAD) <br/>
        3. Select "Dr. Norman Bethune CI" as the school <br/>
        4. In the "Message to School Board" text box, specify that the donation is for the robotics club and also specify the team name, if applicable <br/>
        5. Leave all other options as-is <br/>
        6. Click "Add to Cart", "Continue", then "Continue as guest" <br/>
        7. Finally, fill in the required information and follow the steps on the page. As stated on the website, a donation tax receipt will be emailed afterwards <br/>
      </motion.p>
    </div>
    <motion.div className={`${layout.sectionImg} flex-col`}  initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 1, delay: 0.2}}>
      <img src={sponsorimage} alt="sponsorimage" />
    </motion.div>
  </section>
);

export default SponsorsInfo;