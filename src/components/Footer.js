import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Col className="footer-copywright">
        <h3>Copyright © {year}</h3>
      </Col>
    </Container>
  );
}

export default Footer;
