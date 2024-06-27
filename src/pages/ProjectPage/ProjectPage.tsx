import React from "react";
import ProjectMocks from "../../mocks/ProjectMocks.tsx";
import Filters from "../../components/filters/Filters.tsx";
import classes from "./ProjectPage.module.css";

const ProjectPage = () => {
  return (
    <main>
      <div className={classes.title_row}>
        <div className={classes.title}>
          <h2 className={classes.title_1}>Проекты</h2>
          <p className={classes.title_2}>
            Здесь вы можете предложить свой проект, присоединиться к
            единомышленникам, или найти проект для инвестирования!
          </p>
        </div>
        <button className={classes.offer}>Разместить предложение</button>
      </div>
      <div className={classes.wrapper}>
        <Filters />
        <ul className={classes.projects}>
          <ProjectMocks />
        </ul>
      </div>
    </main >
  );
};

export default ProjectPage;
