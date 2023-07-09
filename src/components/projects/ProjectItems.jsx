import React, { useState } from "react";

import { FiGithub } from "react-icons/fi";

const ProjectItems = ({ item }) => {
  

  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <h5 className="project__languages">{item.languages}</h5>
      <div className="portfolio__item-cta">
        {item.githubVisibility === 1 && (
          <a
            href={item.githubLink}
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub style={{ marginBottom: "-3px" }} /> Github
          </a>
        )}
        <a
          href={item.demoLink}
          className="button2 btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
