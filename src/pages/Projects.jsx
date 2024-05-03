import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/navigation/Navbar";
import styles from "./Projects.module.css";
import Buttons from "../components/Buttons";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/dylanR96/repos"
        );
        const result = await response.json();
        console.log(result[0]);
        setRepos(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const [view, setView] = useState("view1");

  return (
    <>
      <Navbar />
      <div className={styles["projects-wrapper"]}>
        <div className={styles["project-btns"]}>
          <Buttons
            className={styles["project-btn"]}
            onClick={() => setView("view1")}
            label={"Main quest"}
          />
          <Buttons
            className={styles["project-btn"]}
            onClick={() => setView("view2")}
            label={"Side quests"}
          />
          <Buttons
            className={styles["project-btn"]}
            onClick={() => setView("view3")}
            label={"Completed quests"}
          />
        </div>
        <section className={styles["projects-section"]}>
          {view === "view1" && <h1>Main quest</h1>}
          {view === "view2" &&
            repos.map((repo) => (
              <div key={repo.id}>
                {" "}
                <p>{repo.name}</p>
                <a href={repo.clone_url}>{repo.clone_url}</a>
              </div>
            ))}
          {view === "view3" && <h1>Completed quests</h1>}
        </section>
      </div>
    </>
  );
};

export default Projects;
