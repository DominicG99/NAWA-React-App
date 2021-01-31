import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "../styles/card.css";
import team from "../team.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function createItem(member) {
  return (
    <Col lg={3} sm={6} md={6} xs={12} style={{ justifyContent: "center" }}>
      <Card border="light">
        <Card.Img
          className="image img-fluid"
          variant="top"
          src={`../images/${member.image}`}
          alt={member.name}
        />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{member.name}</Card.Title>
          <Card.Text>
            <a target="_blank" rel="noreferrer" href={member.resume}>
              <FontAwesomeIcon
                style={{ color: "black" }}
                className="icon"
                icon={faFilePdf}
                size="3x"
              />
            </a>
            <a target="_blank" rel="noreferrer" href={member.github}>
              <FontAwesomeIcon
                style={{ color: "black", margin: "0% 10%" }}
                className="icon"
                icon={faGithub}
                size="3x"
              />
            </a>
            <a target="_blank" rel="noreferrer" href={member.linkedin}>
              <FontAwesomeIcon
                style={{ color: "#0072b1" }}
                className="icon"
                icon={faLinkedin}
                size="3x"
              />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

function AboutUsCard() {
  return (
    <Container style={{ paddingTop: "10%", paddingBottom: "10%" }}>
      <h3 style={{ textAlign: "center" }}>Meet The Team</h3>
      <Row> {team.map(createItem)}</Row>
    </Container>
  );
}

export default AboutUsCard;
