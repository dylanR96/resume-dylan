import { darkMode } from "../../redux/actions/darkModeAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Buttons from "../Buttons";
import React from "react";
import { useNavigate } from "react-router-dom";

const DarkModeContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode);

  const { isdarkMode } = mode;

  const switchDarkMode = () => {
    isdarkMode ? dispatch(darkMode(false)) : dispatch(darkMode(true));
  };

  const turnOnDarkMode = () => {
    dispatch(darkMode(true));
  };

  useEffect(() => {
    document.body.style.backgroundColor = isdarkMode ? "#292c35" : "#fff";
  }, [isdarkMode]);
  return (
    <>
      <Buttons
        onClick={() => {
          turnOnDarkMode();
          navigate("/about");
        }}
        checked={isdarkMode}
        label={"Enter without rolling"}
      />
    </>
  );
};

export default DarkModeContainer;
