import hatGirl from "../../assets/hatGirl.png"
import styles from "./contactus.module.scss"

const Contactus = () => {
  return (
    <section id={styles.contactus}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.contactus} d-flex justify-between`}>
          <div className={`${styles.left} d-flex justify-center align-items-center`}>
            <div className={`${styles.contactUsCard}`}>
              <h3>Get Special Offers for Organizations</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button>Contact Us</button>
            </div>
          </div>
          <div className={`${styles.right}`}>
            <img src={hatGirl} alt="image not found" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
