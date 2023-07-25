import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/casual_pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCode,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              Computer Science graduate from Heritage Institute Of Technology
              <br />
              <br />I am accustomed with languages namely
              <i>
                <b className="purple"> C++, Javascript , SQL and Java. </b>
              </i>
              <br />
              <br />
              My Tech interest mainly revolves around &nbsp;
              <i>
                <b className="purple">
                  {" "}
                  FullStack Development (primarily Backend Development) ,
                  Machine Learning{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">
                  Hybrid or Cross-platform mobile applications (React Native).
                </b>
              </i>
              <br />
              <br />I also like to tinker with various technolgies and challenge
              myself to build efficient software solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SOCIALS</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sayon-som"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/SomSayon"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sayon-som/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/Sayon_20/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillCode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
