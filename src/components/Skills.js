import React from "react";
import { DiJava } from "react-icons/di";
import {
  SiAmazonaws,
  SiC,
  SiConfluence,
  SiCplusplus,
  SiDatadog,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithubpages,
  SiGnubash,
  SiGnuemacs,
  SiGraphql,
  SiInsomnia,
  SiJavascript,
  SiJest,
  SiJira,
  SiJupyter,
  SiKeras,
  SiKubernetes,
  SiLinear,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRacket,
  SiReact,
  SiRust,
  SiSplunk,
  SiTemporal,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVim,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbBrandGolang, TbBug, TbCode, TbDatabase } from "react-icons/tb";
import { skills, skillsIntro } from "../content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const LOGOS = {
  "C++": SiCplusplus,
  C: SiC,
  Python: SiPython,
  Java: DiJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Go: TbBrandGolang,
  Rust: SiRust,
  SQL: TbDatabase,
  Bash: SiGnubash,
  Racket: SiRacket,
  XML: TbCode,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  AWS: SiAmazonaws,
  Linux: SiLinux,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  GraphQL: SiGraphql,
  Temporal: SiTemporal,
  Datadog: SiDatadog,
  Jest: SiJest,
  Git: SiGit,
  GDB: TbBug,
  Vim: SiVim,
  Emacs: SiGnuemacs,
  "VS Code": SiVisualstudiocode,
  Jira: SiJira,
  Linear: SiLinear,
  Confluence: SiConfluence,
  Figma: SiFigma,
  Postman: SiPostman,
  Insomnia: SiInsomnia,
  Jupyter: SiJupyter,
  Splunk: SiSplunk,
  Vercel: SiVercel,
  "GitHub Pages": SiGithubpages,
};

function Skills() {
  return (
    <div className="skills">
      <SectionHead id="skills-title" title={skillsIntro.title} />
      <div className="skills__groups">
        {skills.map(({ group, items }, index) => (
          <Reveal className="skills__group" delay={index * 80} key={group}>
            <h3>{group}</h3>
            <ul>
              {items.map((item) => {
                const Logo = LOGOS[item];
                return (
                  <li className="chip" key={item}>
                    {Logo && <Logo aria-hidden="true" />}
                    {item}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Skills;
