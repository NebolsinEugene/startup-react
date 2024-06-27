import React from "react";
import "./../styles/projects.css";
import ProjectMocks from "../mocks/ProjectMocks.tsx";

const Projects = () => {
  return (
    <main className="section">
      <div className="title-row">
        <div className="title">
          <h2 className="title-1">Проекты</h2>
          <p className="title-2">
            Здесь вы можете предложить свой проект, присоединиться к
            единомышленникам, или найти проект для инвестирования!
          </p>
        </div>
        <button className="offer">Разместить предложение</button>
      </div>
      <div className="wrapper">

        <ProjectMocks />
      </div>
    </main >
  );
};

export default Projects;
