import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="
              Deutsch Support"
              description="
              Deutsch Support React Js"
              ghLink="https://github.com/Opfriendly/DeutschSupport2-ReactJs-Engjell-19-8-2022"
              demoLink="https://deutschsupport.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bosnian Outsource"
              description="Bosnian Outsource React Js"
              ghLink="https://github.com/Opfriendly/BosniaOutsource-Reactjs-Engjell-29-5-22"
              demoLink="https://bosnianoursourcee.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Popeye Power"
              description="E-Commerce Wordpress"
              ghLink="/"
              demoLink="https://popeyepower.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
