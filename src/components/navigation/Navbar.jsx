import React from "react";
import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={styles["nav__wrapper"]}>
        <div className={styles["nav__container"]}>
          <a onClick={() => navigate("/about")}>About me</a>
          <a onClick={() => navigate("/projects")}>Projects</a>
          <a onClick={() => navigate("/contact")}>Contact</a>
          <a onClick={() => navigate("/")}>Go back</a>
        </div>
      </section>
    </>
  );
};

export default Navbar;
