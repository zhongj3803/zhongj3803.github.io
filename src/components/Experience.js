import React from "react";
import { experience, experienceIntro } from "../content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Skills from "./Skills";

function Experience() {
  return (
    <section className="section wrap" id="experience" aria-labelledby="experience-title">
      <SectionHead id="experience-title" title={experienceIntro.title} />
      <ul className="jobs">
        {experience.map(({ org, role, dates, note, logo, color }) => (
          <Reveal as="li" className="job" key={org}>
            <p className="job__dates">{dates}</p>
            <div className="job__who">
              <span className="job__logo" style={{ "--c": `var(--${color})` }}>
                <img src={logo} alt="" loading="lazy" />
              </span>
              <div className="job__title">
                <h3>{org}</h3>
                <p className="job__role">{role}</p>
              </div>
            </div>
            {note && <p className="job__note">{note}</p>}
          </Reveal>
        ))}
      </ul>
      <Skills />
    </section>
  );
}

export default Experience;
