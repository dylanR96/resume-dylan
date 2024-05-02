import React from "react";
import Navbar from "../components/navigation/Navbar";
import Buttons from "../components/Buttons";
import linkedInphoto from "../../public/images/linkedInphoto.jpg";
import { useState } from "react";

const AboutMe = () => {
  const [pages, setPages] = useState(false);

  const handleClick = (keyword) => {
    switch (keyword) {
      case "bio":
        setPages(true);
        break;
      case "skills":
        setPages(false);
        break;
      case "stats":
        console.log("Stats");
        break;
      default:
        break;
    }
    return pages;
  };
  return (
    <>
      <Navbar />

      <div>
        <h1>AboutMe</h1>
        <Buttons onClick={() => handleClick("bio")} label={"Biography"} />
        <Buttons onClick={() => handleClick("skills")} label={"Skills"} />
        <Buttons onClick={() => handleClick("stats")} label={"Stats"} />
        <div>
          <img
            src={linkedInphoto}
            alt="profile picture"
            height="50rem"
            width="50rem"
          />
        </div>
        <div>{pages ? <div>Biography</div> : <div>skills</div>}</div>
      </div>
    </>
  );
};

export default AboutMe;
