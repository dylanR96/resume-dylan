import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/home")}>Home page</button>
      <button onClick={() => navigate("/about")}>About me</button>
      <button onClick={() => navigate("/projects")}>Projects</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </div>
  );
};

export default Navbar;
