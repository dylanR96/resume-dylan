import React from "react";
import { useNavigate } from "react-router";
import Buttons from "../components/Buttons";
import "../App.css";

const IntroPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="font1">IntroPage</div>
      <div className="font2">IntroPage</div>
      <div className="font3">IntroPage</div>
      <div className="font4">IntroPage</div>
      <div className="font5">IntroPage</div>
      <div className="font6">IntroPage</div>
      <div className="font7">IntroPage</div>
      <div className="font8">IntroPage</div>
      <Buttons onClick={() => navigate("/about")} label={"Home"} />
    </>
  );
};

export default IntroPage;
