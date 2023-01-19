import styles, { layout } from "../style";
import { footerLinks, socialMedia } from "../constants";

const Contact = () => (
  <div className={`flex flex-row flex-wrap align-center justify-center gap-12 ${styles.paddingY}`} id='contact'>
    <iframe className="rounded-[20px] h-100 min-w-[400px] min-h-[400px] flex-1" id="gmap_canvas" src="https://maps.google.com/maps?q=200%20Fundy%20Bay%20Blvd,%20Scarborough,%20ON%20M1W%203G1&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>

    <div className={`${styles.flexCenter} ${styles.padding} h-[100%] min-w-[400px] min-h-[400px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow flex-1`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Get in touch now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          200 Fundy Bay Blvd, Scarborough, ON M1W 3G1 <br />
          
          <div className="flex flex-col md:mt-0 mt-6">
            {socialMedia.map((social, index) => {
              return(
                <div className="flex flex-row items-center mt-[10px]">
                  <img
                    key={social.id}
                    src={social.icon}
                    alt={social.id}
                    className={`w-[21px] h-[21px] object-contain cursor-pointer mr-[6px]`}
                    onClick={() => window.open(social.link)}
                  />
                  <p>{social.name}</p>
                </div>
            )})}
          </div>

        </p>
      </div>
    </div>      
  </div>
)

export default Contact