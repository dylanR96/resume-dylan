import React from "react";
import styles from "../pages/AboutMe.module.css";
const Buttons = ({ onClick, label }) => {
  return (
    <button className={styles["about-me-btn"]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Buttons;
