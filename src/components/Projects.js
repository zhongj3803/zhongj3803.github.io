import React from "react";
import { TbBrandGithub, TbArrowUpRight } from "react-icons/tb";
import { projects, projectsIntro } from "../content";
import SectionHead from "./SectionHead";

function Project({ project, index }) {
  const { title, color, image, frame, alt, description, tags, github, demo } = project;

  return (
    <li className="project" style={{ "--c": `var(--${color})`, "--i": index }}>
      <div className="project__text">
        <h3>{title}</h3>
        <p className="project__description">{description}</p>
        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {(github || demo) && (
          <div className="project__links">
            {github && (
              <a className="button button--small" href={github} target="_blank" rel="noreferrer">
                <TbBrandGithub aria-hidden="true" /> GitHub
              </a>
            )}
            {demo && (
              <a className="button button--small" href={demo} target="_blank" rel="noreferrer">
                Demo <TbArrowUpRight aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
      <div className={`project__visual project__visual--${frame}`}>
        <img src={image} alt={alt} loading="lazy" />
      </div>
    </li>
  );
}

function Projects() {
  return (
    <section className="section wrap" id="projects" aria-labelledby="projects-title">
      <SectionHead id="projects-title" title={projectsIntro.title} />
      <ol className="stack">
        {projects.map((project, index) => (
          <Project project={project} index={index} key={project.title} />
        ))}
      </ol>
    </section>
  );
}

export default Projects;
