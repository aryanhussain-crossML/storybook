import mapGirl from "../../assets/about picture.png"
import styles from "./aboutUs.module.scss"

const AboutUs = () => {
  return (
    <section id={styles.aboutUs}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.aboutUs} d-flex justify-between align-items-center gap-10`}>
          <div className={`${styles.mapGirl}`}>
            <img src={mapGirl} alt="image not found" />
          </div>
          <div className={`${styles.itsDescription}`}>
            <h5>WELCOME TO OUR SITE!</h5>
            <h2>We are the best company for your visit</h2>
            <br />
            <p>
              After decades of experience, and a whole life in Lucca, we offer
              you the most complete tourism service in the city. In addition to
              having bikes and rickshaws to have as much fun as you want, you
              have the choice of tour guides with whom to tour and drivers for
              your every need! We offer packages in the way that you get the
              most at the lowest price. Book with us and we will always be
              available for you!
            </p>
            <div className={`${styles.showCaseValues} d-flex gap-5`}>
              <div className={`${styles.itsCard}`}>
                <h2>20+</h2>
                <p>
                  Years <br /> Experience
                </p>
              </div>
              <div className={`${styles.itsCard}`}>
                <h2>100+</h2>
                <p>
                  Happy <br /> Customer
                </p>
              </div>
              <div className={`${styles.itsCard}`}>
                <h2>15+</h2>
                <p>
                  Choice <br /> of Services
                </p>
              </div>
              <div className={`${styles.itsCard}`}>
                <h2>10+</h2>
                <p>
                  Professional <br /> Guides
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
