import React from "react";
import styles from "./Buttons.module.css";

const BtnChange = ({ onClick, label }) => {
  return (
    <button className={styles["btn-style"]} onClick={onClick}>
      {label}
    </button>
  );
};

const BtnOnOff = ({ onClick, label }) => {
  return (
    <button className={styles["btn-style"]} onClick={onClick}>
      {label}
    </button>
  );
};

const BtnOn = ({ onClick, label }) => {
  return (
    <button className={styles["btn-style"]} onClick={onClick}>
      {label}
    </button>
  );
};

export { BtnChange, BtnOn, BtnOnOff };
