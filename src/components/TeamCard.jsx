import styles from "../style";

const TeamCard = ({ name, title, img }) => (
  <div className="flex flex-1 justify-between flex-col px-6 py-8 rounded-[20px] min-w-[250px] max-w-[370px] md:mr-8 sm:mr-3 mr-0 my-3 feedback-card">
    <div className={`mx-[30px] flex flex-row justify-start items-center`}>
      <img src={img} alt={name} className="w-[90px] h-[90px] rounded-full object-cover" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default TeamCard;