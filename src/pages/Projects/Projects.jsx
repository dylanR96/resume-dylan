import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/navigation/Navbar";
import styles from "./Projects.module.css";
import { BtnChange } from "../../components/Buttons";

const Projects = () => {
  const [completedRepo, setCompletedRepo] = useState([""]);
  const [ongoingRepo, setOngoingRepo] = useState([""]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/dylanR96/repos"
        );
        const result = await response.json();
        console.log(result);
        const firstRepoIndex = 11;
        const secondRepoIndex = 18;
        const firstAndSecondRepo = [];
        const firstRepo = result.splice(firstRepoIndex, 1)[0];
        const secondRepo = result.splice(secondRepoIndex - 1, 1)[0];
        const combinedRepositories = [
          firstRepo,
          secondRepo,
          ...firstAndSecondRepo,
        ];
        setOngoingRepo(combinedRepositories);
        setCompletedRepo(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const [view, setView] = useState("Main quest");

  return (
    <>
      <Navbar />
      <div className={styles["projects__wrapper"]}>
        <div className={styles["projects__content"]}>
          <div className={styles["project__btns"]}>
            <BtnChange
              onClick={() => setView("Main quest")}
              label={"Main quest"}
            />
            <BtnChange
              onClick={() => setView("Side quests")}
              label={"Side quests"}
            />
            <BtnChange
              onClick={() => setView("completed quests")}
              label={"Completed quests"}
            />
          </div>
          <section className={styles["projects__section"]}>
            {view === "Main quest" && <h1>Main quest</h1>}
            {view === "Side quests" &&
              ongoingRepo.map((repo) => (
                <div
                  key={repo.id}
                  className={styles["projects__sideQ-container"]}
                >
                  {" "}
                  <a href={repo.clone_url}>{repo.name}</a>
                </div>
              ))}
            {view === "completed quests" &&
              completedRepo.map((repo) => (
                <div
                  key={repo.id}
                  className={styles["projects__completedQ-container"]}
                >
                  {" "}
                  <a href={repo.clone_url}>{repo.name}</a>
                </div>
              ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
