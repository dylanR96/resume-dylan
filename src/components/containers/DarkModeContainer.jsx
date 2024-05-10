import { darkMode } from "../../redux/actions/darkModeAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BtnOn, BtnOnOff } from "../Buttons";
import React from "react";
import { useNavigate } from "react-router-dom";

const DarkModeOn = ({ label }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode);

  const { isdarkMode } = mode;

  const turnOnDarkMode = () => {
    isdarkMode == dispatch(darkMode(true));
  };

  useEffect(() => {
    document.body.style.background = "#fff";
  }, [isdarkMode]);

  return (
    <>
      <BtnOn
        onClick={() => {
          turnOnDarkMode();
          navigate("/about");
        }}
        checked={isdarkMode}
        label={label}
      />
    </>
  );
};

const DarkModeOnOff = ({ label }) => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode);

  const { isdarkMode } = mode;

  const switchDarkMode = () => {
    isdarkMode ? dispatch(darkMode(false)) : dispatch(darkMode(true));
  };

  useEffect(() => {
    document.body.style = isdarkMode
      ? "background-color: #1c0000"
      : "background-color: #f0eded";
  }, [isdarkMode]);

  return (
    <>
      <BtnOnOff
        onClick={() => {
          switchDarkMode();
        }}
        checked={isdarkMode}
        label={label}
      />
    </>
  );
};

export { DarkModeOn, DarkModeOnOff };
