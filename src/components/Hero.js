import React from "react";
import { TbArrowDown } from "react-icons/tb";
import { profile } from "../content";
import Piano from "./Piano";

function Hero() {
  const [firstName, lastName] = profile.name.split(" ");

  return (
    <section className="hero" id="top">
      <div className="hero__body">
        <h1 className="hero__name">
          <span>{firstName}</span> <span>{lastName}</span>
        </h1>
        <div className="hero__actions">
          <a className="button button--ink" href="#projects">
            See my work <TbArrowDown aria-hidden="true" />
          </a>
          <a className="button" href="#contact">
            Say hi
          </a>
        </div>
      </div>
      <Piano />
    </section>
  );
}

export default Hero;
