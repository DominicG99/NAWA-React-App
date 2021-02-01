import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "../styles/card.css";
const instructors = [
  {
    id: 1,
    name: "Devrin Lee",
    image: "placeholder-image.png",
  },
  {
    id: 2,
    name: "David-Feil-Seifer",
    image: "DavidFeilSeifer.jpg",
  },
];

function createItem(member) {
  return (
    <Col className="d-flex justify-content-center" lg={6} sm={6} md={6} xs={12}>
      <Card className="card" style={{ width: "40%" }}>
        <Card.Img
          className="image img-fluid"
          variant="top"
          src={`../images/${member.image}`}
          alt={member.name}
        />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{member.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

function InstructorCards() {
  return (
    <Container style={{ paddingBottom: "10%" }}>
      <Row> {instructors.map(createItem)}</Row>
    </Container>
  );
}

export default InstructorCards;
