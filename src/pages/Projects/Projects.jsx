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
            {view === "Main quest" && (
              <div>
                <h1>Title: Frontend Frontier: Crafting Digital Experiences</h1>

                <h2>Quest Description:</h2>
                <p>
                  As you embark on your journey in the realm of web development,
                  an exciting opportunity presents itself on the horizon. You've
                  caught the attention of a prominent digital agency, WebWise
                  Solutions, renowned for crafting immersive online experiences.
                  They seek a skilled frontend developer to join their team and
                  breathe life into their upcoming projects.
                </p>

                <p>
                  Your quest begins with a simple email notification: "Job
                  Opportunity: Frontend Developer Needed." Intrigued, you delve
                  deeper, uncovering the details of this enticing offer. WebWise
                  Solutions is seeking a talented individual who can transform
                  designs into interactive websites, optimize user interfaces
                  for seamless navigation, and collaborate with the team to
                  elevate the overall user experience.
                </p>

                <p>
                  Armed with your portfolio showcasing your finest works and a
                  passion for creating captivating digital experiences, you set
                  out to impress the recruiters at WebWise Solutions. Your
                  journey takes you through rounds of interviews, technical
                  assessments, and coding challenges, each step bringing you
                  closer to your goal of joining their esteemed ranks.
                </p>

                <p>
                  Along the way, you encounter obstacles that test your skills
                  and determination. From debugging complex code snippets to
                  refining your understanding of frontend frameworks, every
                  challenge presents an opportunity for growth and learning.
                  With each obstacle overcome, you edge closer to securing your
                  place as a valued member of the WebWise Solutions team.
                </p>

                <p>
                  As you navigate this frontend frontier, remember that your
                  journey doesn't end with the offer letter. Your ultimate
                  objective is not just to land the job but to thrive in your
                  new role, contributing your expertise to create digital
                  masterpieces that captivate audiences and push the boundaries
                  of web development.
                </p>

                <p>
                  So, equip yourself with your coding prowess, polish your
                  portfolio, and embark on this quest to be hired as a frontend
                  developer at WebWise Solutions. The future of your career in
                  web development awaits, and the challenges ahead are ripe for
                  conquering. Are you ready to seize this opportunity and make
                  your mark in the world of digital innovation?
                </p>
              </div>
            )}
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
