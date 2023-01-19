import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className=" flex flex-col w-fit">
      <h2 className={`${styles.heading2} w-fit max-w-[100%]`}>Support the team and Rob!</h2>
      <p className={`${styles.paragraph} w-fit max-w-[100%] mt-5`}>
        Want to be a part of our team's success? Your support helps us compete, innovate and inspire.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 flex-1 min-w-fit`}>
      <Button />
    </div>
  </section>
);

export default CTA;