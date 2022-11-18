import React from "react";
import styles from "../styles/IntroSection.module.css";
import logo from "../public/images/logo.svg";
import Image from "next/image";
import heroDesk from "../public/images/image-hero-desktop.png";

const IntroSection = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Image src={logo} width={100} layout="fixed"></Image>
          <ul className={styles.navLeft__links}>
            <div className={styles.features}>
              <li>Features ▾</li>
              <div className={styles.hoverFeatures}>
                <li className={styles.link}>Todo List</li>
                <li className={styles.link}>Calendar</li>
                <li className={styles.link}>Reminders</li>
                <li className={styles.link}>Planning</li>
              </div>
            </div>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
        <ul className={styles.navRight}>
          <li className={styles.btn}>Login</li>
          <li className={[styles.btn, styles.btn__special].join(" ")}>
            Register
          </li>
        </ul>
      </nav>
      <div className={styles.landing}>
        <div className={styles.landing__Left}>
          <h1>
            <span className={styles.h1__span}>Make</span> remote work
          </h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button
            className={[styles.btn, styles.btn__special, styles.btn__hero].join(
              " "
            )}
          >
            Learn more
          </button>
        </div>
        <div className={styles.landing__Right}>
          <div className={styles.image__Container}>
            <Image src={heroDesk} layout="fill" objectFit="contain"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
