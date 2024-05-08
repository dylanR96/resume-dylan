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
      <div className={styles["about-me__wrapper"]}>
        <div className={styles["about-me__content"]}>
          <div className={styles["about-me__choices"]}>
            <div className={styles["about-me__btns"]}>
              <Buttons
                className={styles["about-me__btn"]}
                onClick={() => setView("view1")}
                label={"Biography"}
              />
              <Buttons
                className={styles["about-me__btn"]}
                onClick={() => setView("view2")}
                label={"Skills"}
              />
              <Buttons
                className={styles["about-me__btn"]}
                onClick={() => setView("view3")}
                label={"Stats"}
              />
            </div>
            <div className={styles["about-me__info-section"]}>
              {view === "view1" && <BiographyInfo />}
              {view === "view2" && <SkillsInfo />}
              {view === "view3" && <StatsInfo />}
            </div>
          </div>
          <aside className={styles["about-me__aside"]}>
            <img
              src={linkedInphoto}
              alt="profile picture"
              height="400px"
              width="400px"
            />
            <div className={styles["about-me__info"]}>
              <p>Gender: Male</p>
              <p>Origin: Human</p>
              <p>Class: Frontend developer</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
