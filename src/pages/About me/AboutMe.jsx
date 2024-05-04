import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Buttons from "../../components/Buttons";
import linkedInphoto from "/images/linkedInphoto.jpg";
import { useState } from "react";
import styles from "./AboutMe.module.css";
import {
  BiographyInfo,
  SkillsInfo,
  StatsInfo,
} from "../../components/AboutMeInfo";

const AboutMe = () => {
  const [view, setView] = useState("view1");

  return (
    <>
      <Navbar />
      <div className={styles["about-me-wrapper"]}>
        <section className={styles["about-me-choices"]}>
          <div className={styles["about-me-btns"]}>
            <Buttons
              className={styles["about-me-btn"]}
              onClick={() => setView("view1")}
              label={"Biography"}
            />
            <Buttons
              className={styles["about-me-btn"]}
              onClick={() => setView("view2")}
              label={"Skills"}
            />
            <Buttons
              className={styles["about-me-btn"]}
              onClick={() => setView("view3")}
              label={"Stats"}
            />
          </div>
          <div className={styles["about-me-info-section"]}>
            {view === "view1" && <BiographyInfo />}
            {view === "view2" && <SkillsInfo />}
            {view === "view3" && <StatsInfo />}
          </div>
        </section>
        <aside className={styles["about-me-aside"]}>
          <img
            src={linkedInphoto}
            alt="profile picture"
            height="400px"
            width="400px"
          />
          <div className={styles["about-me-info"]}>
            <p>Gender: Male</p>
            <p>Origin: Human</p>
            <p>Class: Frontend developer</p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default AboutMe;
