import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router";
import { BtnChange } from "../../components/Buttons";
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
  const [dice, setDice] = useState(<DiceSideSix />);
  const [enter, setEnter] = useState(null);

  const successRoll = () => toast.success("Success!");
  const failedRoll = () => toast.error("Failed!");

  const handleClick = () => {
    const diceResult = Math.floor(Math.random() * 6 + 1);
    animateDice(diceResult);
  };

  // Function that check dice result from handle click and displays result
  //Also calls toast variable to display success or failure message
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

    setDice(diceSides[diceResult]);

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
      <BtnChange onClick={handleClick} label={"Roll"} />
      {enter === false && <div className={styles["intro-page__result"]}></div>}
      {enter === true && (
        <div className={styles["intro-page__result"]}>
          <BtnChange onClick={() => navigate("/about")} label={"Welcome!"} />
        </div>
      )}
    </>
  );
};

export default DiceRolls;
