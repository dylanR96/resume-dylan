import React from "react";
import { useNavigate } from "react-router";

const IntroPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>IntroPage</div>
      <button onClick={() => navigate("/home")}>Home</button>
    </>
  );
};

export default IntroPage;
