import styles from "../style";

const SponsorsCTA = () => (
  <section className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className=" flex flex-col w-fit items-center">
      <h2 className={`${styles.heading2} w-fit max-w-[100%]`}>Support the team and Rob!</h2>
      <p className={`${styles.paragraph} w-fit max-w-[100%] mt-5`}>
        Want to be a part of our team's success? Your support helps us compete, innovate and inspire.
      </p>
    </div>
  </section>
);

export default SponsorsCTA;