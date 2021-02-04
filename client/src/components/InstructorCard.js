import React from "react";
import { Col, Card } from "antd";
import "antd/dist/antd.css";
import "./Cards.css";
const { Meta } = Card;
function InstructorCard(props) {
  return (
    <Col
      style={{ marginTop: "3%" }}
      xs={{ span: 24, offset: 4 }}
      lg={{
        span: 5,
        offset: 5,
      }}
    >
      <Card
        className="teamCardImage"
        style={{ width: 240, textAlign: "center" }}
        cover={<img alt={props.name} src={props.image} />}
      >
        <Meta title={props.name} description={props.text} />{" "}
      </Card>
    </Col>
  );
}

export default InstructorCard;
