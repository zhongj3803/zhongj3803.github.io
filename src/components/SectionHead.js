import React from "react";
import Reveal from "./Reveal";

function SectionHead({ id, title }) {
  return (
    <Reveal className="section-head">
      <h2 id={id}>{title}</h2>
    </Reveal>
  );
}

export default SectionHead;
