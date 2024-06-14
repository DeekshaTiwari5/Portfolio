import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deeksha</h1>
        <p className={styles.description}>
          I'm a full-stack developer with experience in using NodeJS and React.
          Reach out if you'd like to learn more!
        </p>
      </div>
      <a href="mailto:tdeeksha617@gmail.com" className={styles.contactBtn}>
        Contact Me
      </a>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.buttomBlur} />
    </section>
  );
};

export default Hero;
