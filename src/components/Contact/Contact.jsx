import React from 'react'
import styles from "./Contect.module.css";
import { getImageUrl } from "../../utils";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:tdeeksha617@gmail.com">tdeeksha617@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin icon"
          />
          <a
            
            href="https://www.linkedin.com/in/deeksha-tiwari-a6a12b260/"
          >
            linkedin.com/Deeksha Tiwari
          </a>
        </li>
        <li className={styles.link}>
          <img
            
            src={getImageUrl("contact/githubIcon.png")}
            alt="Github icon"
          />
          <a
           
            href="https://github.com/DeekshaTiwari5"
          >
            github.com/DeekshaTiwari5
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact