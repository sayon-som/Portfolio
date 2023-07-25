import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import home from "../../Assets/Projects/find_home.png"
import stories from "../../Assets/Projects/stories.png"
import voyage from "../../Assets/Projects/voayge.png";
import social from "../../Assets/Projects/social_front_pic.png";
import ML from "../../Assets/Projects/dBreast.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voyage}
              isBlog={false}
              title="VOYAGE"
              description="A Social Media Application where users can add their
favorite locations along with their information, ratings, and location where other members can rate and review the place.
 
Front End: HTML , CSS , JS , BOOTSTRAP, MAPBOX , Back End: EXPRESS.JS , NODEJS, MONGOOSE,
MONGODB , CLOUDINARY. Authentication : PASSPORTJS "
              ghLink="https://github.com/sayon-som/VOYAGE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social-Dev"
              description="A social media application where users can add their visited locations along with theirinformation,ratings, and location for others to rate and review the place. Front End : HTML , CSS , JS , BOOTSTRAP, MAPBOX.  Back End : EXPRESS.JS , NODEJS, MONGOOSE, MONGODB , CLOUDINARY , PASSPORTJS "
              ghLink="https://github.com/sayon-som/Social-Dev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={home}
              isBlog={false}
              title="FIND-HOME"
              description="A react application to find your ideal home for rent or sale implemented using reactjs in the front end along with firebase 9 in the backend for storage and authentication. Front End: REACTJS. Back End: FIREBASE 9. Authentication: GOOGLE OAUTH"
              ghLink="https://github.com/sayon-som/FIND-HOME"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stories}
              isBlog={false}
              title="Stories"
              description="The creation or sharing of information, ideas, career interests, whistle blowing and other kinds of expression via virtual communities and networks is made possible by social media, an interactive computer-mediated technology by remaining as an anonymous entity. Our goal is to create an app that would enable you to connect with individuals locally, regionally, nationally, and even worldwide to offer a platform on which people can communicate with others globally to discuss ideas and learn about different cultures throughout the world FRONTEND : REACTJS.
BACKEND : NODEJS , EXPRESSJS , MONGODB , SOCKETIO."
              ghLink="https://github.com/sayon-som/STORIES"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ML}
              isBlog={false}
              title="Breast-Cancer-Prediction"
              description="Using a classification algorithm on the Breast Cancer Wisconsin (Original) Data Set to declare whether the condition is Benign or Malignant."
              ghLink="https://github.com/sayon-som/Breast-Cancer-Prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
