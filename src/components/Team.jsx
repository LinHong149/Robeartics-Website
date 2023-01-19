import { team } from "../constants";
import styles from "../style";
import TeamCard from "./TeamCard";

const Team = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}  id="team">
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        The Minds  <br className="sm:block hidden" />Behind the Bots
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Meet the team. From programming to design, fabrication to strategy, this team of students work together to make it all happen.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
      {team.map((card) => <TeamCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Team;