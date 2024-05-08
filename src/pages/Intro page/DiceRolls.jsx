import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { animate, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router";
import Buttons from "../../components/Buttons";
import styles from "./IntroPage.module.css";
import {
  DiceSideOne,
  DiceSideTwo,
  DiceSideThree,
  DiceSideFour,
  DiceSideFive,
  DiceSideSix,
} from "../../components/svgs/Dice";

const DiceRolls = () => {
  const navigate = useNavigate();
  const [dice, setDice] = useState(null);
  const [enter, setEnter] = useState(null);

  const successRoll = () => toast.success("Success!");
  const failedRoll = () => toast.error("Failed!");

  const handleClick = () => {
    const diceResult = Math.floor(Math.random() * 6 + 1);
    animateDice(diceResult);
  };

  const animateDice = (diceResult) => {
    const diceSides = [
      null,
      <DiceSideOne />,
      <DiceSideTwo />,
      <DiceSideThree />,
      <DiceSideFour />,
      <DiceSideFive />,
      <DiceSideSix />,
    ];

    setDice(
      <motion.div
        id="dice"
        animate={{ y: [-40, 0, -40] }}
        transition={{
          times: [0, 1],
          duration: 1,
          repeat: 5,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {diceSides[diceResult]}
      </motion.div>
    );

    if (
      diceResult === 3 ||
      diceResult === 4 ||
      diceResult === 5 ||
      diceResult === 6
    ) {
      setEnter(true);
      successRoll();
    } else {
      setEnter(false);
      failedRoll();
    }
  };
  return (
    <>
      <div className={styles["intro-page__die"]} id="dice">
        {dice}
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
      <Buttons onClick={handleClick} label={"Roll"} />
      {enter === false && <div className={styles["intro-page__result"]}></div>}
      {enter === true && (
        <div className={styles["intro-page__result"]}>
          <p>Welcome!</p>
          <Buttons onClick={() => navigate("/about")} label={"Home"} />
        </div>
      )}
    </>
  );
};

export default DiceRolls;
