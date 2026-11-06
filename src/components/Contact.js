import React from "react";
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin } from "react-icons/tb";
import { contact } from "../content";
import Reveal from "./Reveal";

const ICONS = {
  github: TbBrandGithub,
  linkedin: TbBrandLinkedin,
  instagram: TbBrandInstagram,
};

function Contact() {
  return (
    <div className="wrap closing">
      <section className="contact" id="contact" aria-labelledby="contact-title">
        <Reveal>
          <h2 id="contact-title">{contact.title}</h2>
        </Reveal>
        <Reveal as="ul" className="contact__links" delay={120}>
          {contact.links.map(({ icon, label, href }) => {
            const Icon = ICONS[icon];
            return (
              <li key={label}>
                <a className="button button--paper" href={href} target="_blank" rel="noreferrer">
                  <Icon aria-hidden="true" /> {label}
                </a>
              </li>
            );
          })}
        </Reveal>
      </section>
    </div>
  );
}

export default Contact;
