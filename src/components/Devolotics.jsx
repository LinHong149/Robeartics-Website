import styles from '../style'
import { arrowUp } from '../assets'
import { navLinks } from "../constants";

const Devolotics = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <a className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`} href="https://devolotics.bethuneci.com">
            <div className={`${styles.flexStart} flex-row`}>
                <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                    <span className='text-gradient'>Team</span>
                </p>
                    <img className='w-[23px] h-[23px] object-contain' src={arrowUp}/>
            </div>
                <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'>Devolotics</span>
                </p>
        </a>
    </div>
)

export default Devolotics