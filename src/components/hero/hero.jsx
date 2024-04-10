import { useState } from "react";
import styles from "./hero.module.scss";
import "./hero.scss";
import logo from "../../assets/Layer 1.svg";
import { BasicTabs } from "../../global/basicTabs/basicTabs";
import Modal from "../../global/modal/modal";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (value) => {
    console.log(value, "check something is happening or not");
    setOpenModal(true);
    setCurrentModal(value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id={`${styles.heroWithHeader}`} className="heroWithHeader">
      <div className={`${styles.heroWithHeader} `}>
        <div
          className={`${styles.container} container d-flex justify-between align-items-center`}
        >
          {openModal && (
            <Modal currentModal={currentModal} setOpenModal={setOpenModal} />
          )}
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
              <li onClick={() => handleOpenModal("login")}>Login</li>
              <li onClick={() => handleOpenModal("signUp")}>
                <button>Sign Up</button>
              </li>
            </ul>
          </div>

          <div className={styles.burgerMenu}>
            <button onClick={toggleMenu}>
              <div className={isOpen ? styles.bar1 : ""}></div>
              <div className={isOpen ? styles.bar2 : ""}></div>
              <div className={isOpen ? styles.bar3 : ""}></div>
            </button>

            <button
              onClick={toggleMenu}
              className={
                !isOpen ? `${styles.displayNone}` : `${styles.crossBtn}`
              }
            >
              X
            </button>
          </div>

          <div className={`${styles.menu} ${isOpen ? styles.showMenu : ""}`}>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Tour Packages</li>
              <li>Contact Us</li>
              <li className={`${styles.actionsMobile}`}>
                <ul className="yet nothing">
                  <li onClick={() => handleOpenModal("login")}>Login</li>
                  <li onClick={() => handleOpenModal("signUp")}>Sign Up</li>
                </ul>
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
