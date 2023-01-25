import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { sponsorimage } from "../assets/index"


const SponsorsInfo = () =>  (
  <section id="features" className={layout.section}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Two ways to donate
      </h2>
      <p className={`${styles.paragraph} mt-5`}>
        A: Write and mail a cheque. The mailing address is: 200 Fundy Bay Blvd, Scarborough, ON M1W 3G1. The memo should be "Bethune CI Robotics", followed by the name of the destination team if applicable.  <br/> <br/>

        B: Donate via SchoolCashOnline.  <br/>

        1. Visit the <a className="text-blue-400 underline" href="https://tdsb.schoolcashonline.com/Fee/Details/457/153/false/true">TDSB donation page</a> <br/>
        2. Enter the donation amount (in CAD) <br/>
        3. Select "Dr. Norman Bethune CI" as the school <br/>
        4. In the "Message to School Board" text box, specify that the donation is for the robotics club and also specify the team name, if applicable <br/>
        5. Leave all other options as-is <br/>
        6. Click "Add to Cart", "Continue", then "Continue as guest" <br/>
        7. Finally, fill in the required information and follow the steps on the page. As stated on the website, a donation tax receipt will be emailed afterwards <br/>
      </p>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      <img src={sponsorimage} alt="sponsorimage" />
    </div>
  </section>
);

export default SponsorsInfo;