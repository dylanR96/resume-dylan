import React from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "./Navbar.module.css";
import { DarkModeOnOff } from "../containers/DarkModeContainer";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? styles["active-link"] : "";
  };

  return (
    <>
      <section className={styles["nav__wrapper"]}>
        <div className={styles["nav__container"]}>
          <div className={styles["nav__links"]}>
            <a
              className={`${styles["nav__link"]} ${isActive("/about")}`}
              onClick={() => navigate("/about")}
            >
              About me
            </a>
            <a
              className={`${styles["nav__link"]} ${isActive("/projects")}`}
              onClick={() => navigate("/projects")}
            >
              Projects
            </a>
            <a
              className={`${styles["nav__link"]} ${isActive("/contact")}`}
              onClick={() => navigate("/contact")}
            >
              Contact
            </a>
          </div>
          <DarkModeOnOff label={"Dark and light"} />
        </div>
      </section>
    </>
  );
};

export default Navbar;
