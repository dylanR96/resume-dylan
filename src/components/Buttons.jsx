import React from "react";
import styles from "./Buttons.module.css";
const Buttons = ({ onClick, label }) => {
  return (
    <button className={styles["btn-style"]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Buttons;
