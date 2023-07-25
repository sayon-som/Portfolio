import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple"> Sayon Som </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            <br /> I am a CSE grad student (2023) from{" "}
            <span className="purple">Heritage Institute Of Technology</span>,
            Kolkata with a 8.76 CGPA. <br />
            <br /> I am an ardent Problem Solver (C++), have solved around 500+
            problems on LeetCode, and have a rating of 1672 ( 3 stars) on
            CodeChef.
            <br />
            <br /> My Tech interest mainly revolves around FullStack Development
            and Machine Learning.
            <br />
            <br /> I have handled large codebases, API and Transaction
            integrations, Test Case generations, and Cloud Deployment during my
            previous internship experiences and side projects. <br />
            <br />I am also quite familiar with Operating Systems, Computer
            Networks, Database and Management Systems, Software Development, and
            Lifecycle principles .<br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Shredding on the Electric guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
