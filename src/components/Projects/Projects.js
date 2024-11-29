import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify-stats.png"
import dalle from "../../Assets/Projects/dalle-clone.png"
import itk from "../../Assets/Projects/itk.png"
import xor from "../../Assets/Projects/xor.png"
import parser from "../../Assets/Projects/parser.png"

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
              //ghLink="https://github.com/zhongj3803/Spotify-Stats"
              //demoLink="https://main.d3alb154qr6hrl.amplifyapp.com/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dalle}
              isBlog={false}
              title="DALL-E Clone"
              description="Clone of the well-known AI image generator DALL-E, with functions for creating images as well as adding
              them to a gallery!"
              //ghLink="https://github.com/zhongj3803/DALL-E-clone"
              // demoLink="https://main.d3alb154qr6hrl.amplifyapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={itk}
              isBlog={false}
              title="White Matter Tractography"
              description="A C++ executable that highlights the white matter tracts (fiber pathways) of a given input brain image (specifically, 
              this image is a diffusion tensor image)! I used ITK to extract the principal eigenvectors from the 
              input image, calculate the fractional anisotropy, and trace brain tracts from seed points based on vector fields and stopping conditions."
              //ghLink="https://github.com/zhongj3803/DALL-E-clone"
              // demoLink="https://main.d3alb154qr6hrl.amplifyapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xor}
              isBlog={false}
              title="The XOR Problem"
              description="A solution to the famous XOR classification problem driven by a multi-layer neural network with adjustable 
              hyperparameters. The decision boundaries of the trained classifier is shown above!"
              //ghLink="https://github.com/zhongj3803/DALL-E-clone"
              // demoLink="https://main.d3alb154qr6hrl.amplifyapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parser}
              isBlog={false}
              title="Parser"
              description="A parser for COOL (classroom object oriented language) that takes in and deserializes input from the lexer 
              (the first stage of compilation!) to generate a serialized abstract syntax tree to be used next by the semantic analyzer 
              next. This made heavy use of Python's lex and yacc tools."
              //ghLink="https://github.com/zhongj3803/DALL-E-clone"
              // demoLink="https://main.d3alb154qr6hrl.amplifyapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
