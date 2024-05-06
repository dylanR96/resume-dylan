import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import Buttons from "../../components/Buttons";
import styles from "./IntroPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import {
  DiceSideOne,
  DiceSideTwo,
  DiceSideThree,
  DiceSideFour,
  DiceSideFive,
  DiceSideSix,
} from "../../components/svgs/Dice";

const IntroPage = () => {
  const notify = () => toast("Success!");
  const [dice, setDice] = useState(<DiceSideSix />);
  const [enter, setEnter] = useState(null);

  const navigate = useNavigate();
  const handleClick = () => {
    let diceResult = Math.floor(Math.random() * 6 + 1);
    switch (diceResult) {
      case 1:
        return setDice(<DiceSideOne />), setEnter(false);
      case 2:
        return setDice(<DiceSideTwo />), setEnter(false);
      case 3:
        return setDice(<DiceSideThree />), setEnter(false);
      case 4:
        return setDice(<DiceSideFour />), setEnter(true), notify();

      case 5:
        return setDice(<DiceSideFive />), setEnter(true), notify();
      case 6:
        return setDice(<DiceSideSix />), setEnter(true), notify();
      default:
        return <div>Error: Invalid User Role</div>;
    }
  };

  return (
    <>
      <div className={styles["intro-page__wrapper"]}>
        <div className={styles["intro-page__content"]}>
          <div className="dice">{dice}</div>
          <Toaster />
          <Buttons onClick={handleClick} label={"Roll"} />
          {/* <div className="font1">IntroPage</div>
      <div className="font2">IntroPage</div>
      <div className="font3">IntroPage</div>
      <div className="font4">IntroPage</div>
      <div className="font5">IntroPage</div>
      <div className="font6">IntroPage</div>
      <div className="font7">IntroPage</div>
      <div className="font8">IntroPage</div> */}
          {enter === false && <div>Roll again loser</div>}
          {enter === true && (
            <div>
              Please enter:{" "}
              <Buttons onClick={() => navigate("/about")} label={"Home"} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default IntroPage;
