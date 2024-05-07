import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import Buttons from "../../components/Buttons";
import styles from "./IntroPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import { animate, motion } from "framer-motion";
import {
  DiceSideOne,
  DiceSideTwo,
  DiceSideThree,
  DiceSideFour,
  DiceSideFive,
  DiceSideSix,
} from "../../components/svgs/Dice";
import DarkModeContainer from "../../components/containers/DarkModeContainer";

const IntroPage = () => {
  const notify = () => toast("Success!");
  const [dice, setDice] = useState(<DiceSideSix />);
  const [enter, setEnter] = useState(null);

  const navigate = useNavigate();
  const handleClick = () => {
    let diceResult = Math.floor(Math.random() * 6 + 1);
    switch (diceResult) {
      case 1:
        return (
          setDice(
            <motion.div
              id="dice"
              animate={{ y: [-40, 0, -40] }}
              transition={{
                times: [0, 1],
                duration: 1,
                repeat: 5, // Adjust repeat count as needed
                repeatType: "reverse", // Reverse animation after each iteration
                ease: "easeInOut",
              }}
            >
              <DiceSideOne />
            </motion.div>
          ),
          setEnter(false)
        );
      case 2:
        return (
          setDice(
            <motion.div
              id="dice"
              animate={{ y: [-40, 0, -40] }}
              transition={{
                times: [0, 1],
                duration: 1,
                repeat: 5, // Adjust repeat count as needed
                repeatType: "reverse", // Reverse animation after each iteration
                ease: "easeInOut",
              }}
            >
              <DiceSideTwo />
            </motion.div>
          ),
          setEnter(false)
        );
      case 3:
        return (
          setDice(
            <motion.div
              id="dice"
              animate={{ y: [-40, 0, -40] }}
              transition={{
                times: [0, 1],
                duration: 1,
                repeat: 5, // Adjust repeat count as needed
                repeatType: "reverse", // Reverse animation after each iteration
                ease: "easeInOut",
              }}
            >
              <DiceSideThree />
            </motion.div>
          ),
          setEnter(false)
        );
      case 4:
        return (
          setDice(
            <motion.div
              id="dice"
              animate={{ y: [-40, 0, -40] }}
              transition={{
                times: [0, 1],
                duration: 1,
                repeat: 5, // Adjust repeat count as needed
                repeatType: "reverse", // Reverse animation after each iteration
                ease: "easeInOut",
              }}
            >
              <DiceSideFour />
            </motion.div>
          ),
          setEnter(true),
          notify()
        );

      case 5:
        setDice(
          <motion.div
            id="dice"
            animate={{ y: [-40, 0, -40] }}
            transition={{
              times: [0, 1],
              duration: 1,
              repeat: 5, // Adjust repeat count as needed
              repeatType: "reverse", // Reverse animation after each iteration
              ease: "easeInOut",
            }}
          >
            <DiceSideFive />
          </motion.div>
        ),
          setEnter(true),
          notify();
      case 6:
        setDice(
          <motion.div
            id="dice"
            animate={{ y: [-40, 0, -40] }}
            transition={{
              times: [0, 1],
              duration: 1,
              repeat: 5, // Adjust repeat count as needed
              repeatType: "reverse", // Reverse animation after each iteration
              ease: "easeInOut",
            }}
          >
            <DiceSideSix />
          </motion.div>
        ),
          setEnter(true),
          notify();
      default:
        return <div>Error: Invalid User Role</div>;
    }
  };

  return (
    <>
      <div className={styles["intro-page__wrapper"]}>
        <div className={styles["intro-page__content"]}>
          <div className={styles["intro-page__die"]} id="dice">
            {dice}
          </div>
          <Toaster />
          <Buttons onClick={handleClick} label={"Roll"} />
          {enter === false && <div>Roll again loser</div>}
          {enter === true && (
            <div>
              Please enter:{" "}
              <Buttons onClick={() => navigate("/about")} label={"Home"} />
            </div>
          )}
          <DarkModeContainer />
        </div>
      </div>
    </>
  );
};

export default IntroPage;
