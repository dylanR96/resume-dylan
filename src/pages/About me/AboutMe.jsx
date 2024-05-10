import React from "react";
import Navbar from "../../components/navigation/Navbar";
import { BtnChange } from "../../components/Buttons";
import linkedInphoto from "/images/linkedInphoto.png";
import { useState } from "react";
import styles from "./AboutMe.module.css";
import { BiographyInfo, SkillsInfo, StatsInfo } from "./AboutMeInfo";

const AboutMe = () => {
  const [view, setView] = useState("biography");

  return (
    <>
      <Navbar />
      <div className={styles["about-me__wrapper"]}>
        <div className={styles["about-me__content"]}>
          <div className={styles["about-me__choices"]}>
            <div className={styles["about-me__btns"]}>
              <BtnChange
                onClick={() => setView("biography")}
                label={"Biography"}
              />
              <BtnChange onClick={() => setView("skills")} label={"Skills"} />
              <BtnChange onClick={() => setView("stats")} label={"Stats"} />
            </div>
            <div className={styles["about-me__info-section"]}>
              {view === "biography" && <BiographyInfo />}
              {view === "skills" && <SkillsInfo />}
              {view === "stats" && <StatsInfo />}
            </div>
          </div>
          <aside className={styles["about-me__aside"]}>
            <div className={styles["about-me__image-container"]}>
              <img
                className={styles["about-me__image"]}
                src={linkedInphoto}
                alt="profile picture"
                height="350px"
                width="350px"
              />
            </div>
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
