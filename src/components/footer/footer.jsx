import location from "../../assets/footer/Vector.svg";
import phone from "../../assets/footer/clarity_phone-handset-solid.svg";
import mail from "../../assets/footer/fluent_mail-16-filled.svg";
import insta from "../../assets/footer/insta.svg";
import facebook from "../../assets/footer/facebook.svg";
import Twitter from "../../assets/footer/ant-design_twitter-circle-filled.svg";
import logo from "../../assets/footer/logo.svg";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.footer}`}>
          <div className={`${styles.imgCon}`}>
            <img src={logo} alt="Logo didn't find" />
          </div>
          <div
            className={`${styles.footerColumns} d-flex gap-5 justify-between`}
          >
            <div className={`${styles.linksContainer}`}>
              <h5>Services</h5>
              <ul>
                <li>Bike and Rickshaw rental</li>
                <li>Guided Tours of Lucca</li>
                <li>Guided Bike Tour of Lucca</li>
                <li>Trip In The Tuscan Hills</li>
                <li>Transportation With Luxury Cars</li>
              </ul>
            </div>
            <div className={`${styles.linksContainer}`}>
              <h5>Home</h5>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Tour Packages</li>
              </ul>
            </div>
            <div className={`${styles.linksContainer}`}>
              <h5>Help</h5>
              <ul>
                <li>Terms of Use</li>
                <li>Provicy Policy</li>
              </ul>
            </div>
            <div className={`${styles.linksContainer}`}>
              <h5>Contacts</h5>
              <ul>
                <li>
                  <img src={location} alt="Icon not found" />
                  Piazza Napoleone, Lucca, Tuscany
                </li>
                <li>
                  <img src={phone} alt="Icon not found" />
                  +39 346 368 5708
                </li>
                <li>
                  <img src={mail} alt="Icon not found" />
                  italiainlimo@gmail.com
                </li>
              </ul>
            </div>
            <div className={`${styles.linksContainer}`}>
              <h5>Social Media</h5>
              <ul className="d-flex gap-3">
                <li>
                  <img src={Twitter} alt="Icon not found" />
                </li>
                <li>
                  <img src={facebook} alt="Icon not found" />
                </li>
                <li>
                  <img src={insta} alt="Icon not found" />
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.copyright}`}>
            Copyright © 2022. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
