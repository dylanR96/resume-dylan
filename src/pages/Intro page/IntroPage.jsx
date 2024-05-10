import React from "react";
import styles from "./IntroPage.module.css";
import DiceRolls from "./DiceRolls";
import { motion } from "framer-motion";
import { DarkModeOn } from "../../components/containers/DarkModeContainer";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles["intro-page__wrapper"]}>
        <div className={styles["intro-page__content"]}>
          {/* Animation for border of dice roll */}
          {/* Each motion div is for one side of the container*/}
          <motion.div
            id="dice-roll-border"
            style={{
              border: "none",
              borderRadius: 10,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              className="side-animation"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "2px",
                height: "100%",
                background:
                  "linear-gradient(to bottom, #8B0000, #FF4500, #FFA500, #FFD700)",
              }}
              animate={{
                y: ["0%", "100%", "0%"],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            />

            <motion.div
              className="side-animation"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "2px",
                background:
                  "linear-gradient(to right, #8B0000, #FF4500, #FF8C00, #FFD700)",
                zIndex: 1,
              }}
              animate={{
                x: ["0%", "100%", "0%"],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            />

            <motion.div
              className="side-animation"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "2px",
                height: "100%",
                background:
                  "linear-gradient(to top, #8B0000, #FF4500, #FF8C00, #FFD700)",
                zIndex: 1,
              }}
              animate={{
                y: ["100%", "0%", "100%"],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            />

            <motion.div
              className="side-animation"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "2px",
                background:
                  "linear-gradient(to left, #8B0000, #FF4500, #FF8C00, #FFD700)",
                zIndex: 1,
              }}
              animate={{
                x: ["100%", "0%", "100%"],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            />

            <div
              className={styles["intro-page__dice-container"]}
              id="dice-roll-border"
            >
              <p>You have come across a frontend-developer</p>
              <p>
                Roll a 3 or higher to enter <br></br>or risk it and enter
                without a roll
              </p>
              <DiceRolls />
            </div>
          </motion.div>
          <div className={styles["intro-page__darkmode-btn"]}>
            <DarkModeOn label={"Enter"} onClick={() => navigate("/about")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
