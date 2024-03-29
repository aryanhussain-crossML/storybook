import React from "react";
import styles from "./hero.module.scss";
import "./hero.scss"
import logo from "../../assets/Layer 1.svg";
import { BasicTabs } from "../../global/basicTabs/basicTabs";

const Hero = () => {
  const props = { value: 0, index: 2, children: "Item Three" };
  const { children, value, index, ...other } = props;
  return (
    <section id={`${styles.heroWithHeader}`} className="heroWithHeader">
      <div className={`${styles.heroWithHeader} `}>
        <div
          className={`${styles.container} container d-flex justify-between align-items-center`}
        >
          <div className={`${styles.logo}`}>
            <img src={logo} height={80} width={80} alt="logo not found" />
          </div>
          <div className={`${styles.menus}`}>
            <ul className={`d-flex gap-5`}>
              <li>Home</li>
              <li>About Us</li>
              <li>Tour Packages</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className={`${styles.actions}`}>
            <ul className="d-flex gap-5 align-items-center">
              <li>Eng</li>
              <li>Login</li>
              <li>
                <button>Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.filter}`}>
        <div className="container">
          <div className={`${styles.itsHeader}`}>
            <h1>Enjoy in the best way!</h1>
            <p>Enjoy our services for your trip anytime</p>
          </div>
          <div className={`${styles.itsSearch}`}>
            <div className={`${styles.searchTab}`}>
              <BasicTabs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
