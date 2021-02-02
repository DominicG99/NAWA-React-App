import React from "react";
import { Col, Card } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;
function TeamCard(props) {
  return (
    <Col xs={{ span: 24, offset: 6 }} lg={{ span: 4, offset: 2 }}>
      <Card
        style={{ width: 240, textAlign: "center" }}
        cover={<img alt={props.name} src={props.image} />}
      >
        <Meta title={props.name} description={props.text} />{" "}
      </Card>
    </Col>
  );
}

export default TeamCard;
