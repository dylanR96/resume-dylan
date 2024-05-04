import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import Buttons from "../../components/Buttons";
import "../../App.css";
import {
  DiceSideOne,
  DiceSideTwo,
  DiceSideThree,
  DiceSideFour,
  DiceSideFive,
  DiceSideSix,
} from "../../components/svgs/Dice";

const IntroPage = () => {
  const [dice, setDice] = useState(<DiceSideSix />);
  const [enter, setEnter] = useState(null);

  const navigate = useNavigate();
  const handleClick = () => {
    let diceResult = Math.floor(Math.random() * 6 + 1);
    console.log(diceResult);
    switch (diceResult) {
      case 1:
        return setDice(<DiceSideOne />), setEnter(false);
      case 2:
        return setDice(<DiceSideTwo />), setEnter(false);
      case 3:
        return setDice(<DiceSideThree />), setEnter(false);
      case 4:
        return setDice(<DiceSideFour />), setEnter(true);
      case 5:
        return setDice(<DiceSideFive />), setEnter(true);
      case 6:
        return setDice(<DiceSideSix />), setEnter(true);
      default:
        return <div>Error: Invalid User Role</div>;
    }
  };

  return (
    <>
      <div className="dice">{dice}</div>
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
    </>
  );
};

export default IntroPage;
