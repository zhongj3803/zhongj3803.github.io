import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiInsomnia,
  SiVercel,
  SiMacos,
  SiGithubpages,
  SiJupyter,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInsomnia />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubpages/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter/>
      </Col>
    </Row>
  );
}

export default Toolstack;
