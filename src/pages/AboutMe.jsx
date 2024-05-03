import React from "react";
import Navbar from "../components/navigation/Navbar";
import Buttons from "../components/Buttons";
import linkedInphoto from "/images/linkedInphoto.jpg";
import { useState } from "react";
import styles from "./AboutMe.module.css";

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
            {view === "view1" && (
              <p>
                "On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be welcomed and every pain
                avoided. But in certain circumstances and owing to the claims of
                duty or the obligations of business it will frequently occur
                that pleasures have to be repudiated and annoyances accepted
              </p>
            )}
            {view === "view2" && <p>Skills</p>}
            {view === "view3" && <p>Stats</p>}
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
