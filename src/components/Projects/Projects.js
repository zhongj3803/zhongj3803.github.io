import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify-stats.png"
import dalle from "../../Assets/Projects/dalle-clone.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">work! </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some things I've done in the past...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Stats"
              description="A centralized site where you can view your Spotify Stats, including recently played tracks, top tracks, 
              top artists, as well as personal information (unfortunately Spotify requires me to explicitly whitelist you for you
               to access the application)."
              ghLink="https://github.com/zhongj3803/Spotify-Stats"
              demoLink="https://main.d3alb154qr6hrl.amplifyapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dalle}
              isBlog={false}
              title="DALL-E Clone"
              description="Clone of the well-known AI image generator DALL-E, with functions for creating images as well as adding
              them to a gallery!"
              ghLink="https://github.com/zhongj3803/DALL-E-clone"
              // demoLink="https://main.d3alb154qr6hrl.amplifyapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
