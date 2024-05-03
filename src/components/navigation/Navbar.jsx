import React from "react";
import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={styles["nav__wrapper"]}>
        <div className={styles["nav__container"]}>
          <a className={styles["nav__link"]} onClick={() => navigate("/about")}>
            About me
          </a>
          <a
            className={styles["nav__link"]}
            onClick={() => navigate("/projects")}
          >
            Projects
          </a>
          <a
            className={styles["nav__link"]}
            onClick={() => navigate("/contact")}
          >
            Contact
          </a>
          <a className={styles["nav__link"]} onClick={() => navigate("/")}>
            Go back
          </a>
        </div>
      </section>
    </>
  );
};

export default Navbar;
