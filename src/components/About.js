import React from "react";
import { TbBallBasketball, TbBrandSpotify, TbChefHat } from "react-icons/tb";
import { about } from "../content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function PianoIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7.5 4v10h3V4M13.5 4v10h3V4M9 14v6M15 14v6" />
    </svg>
  );
}

const ICONS = {
  basketball: TbBallBasketball,
  piano: PianoIcon,
  cooking: TbChefHat,
  spotify: TbBrandSpotify,
};

function About() {
  return (
    <section className="section wrap" id="about" aria-labelledby="about-title">
      <SectionHead id="about-title" title={about.title} />

      <div className="about">
        <Reveal className="about__copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal className="about__school" delay={120}>
          <h3>{about.education.school}</h3>
          <ul>
            {about.education.studies.map((study) => (
              <li key={study}>{study}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal as="p" className="about__hobbies-intro">
        {about.hobbiesIntro}
      </Reveal>
      <ul className="hobbies">
        {about.hobbies.map(({ icon, label, color }, index) => {
          const Icon = ICONS[icon];
          return (
            <Reveal
              as="li"
              className="hobby"
              delay={index * 80}
              key={label}
              style={{ "--c": `var(--${color})` }}
            >
              <Icon className="hobby__icon" aria-hidden="true" />
              <h3>{label}</h3>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

export default About;
