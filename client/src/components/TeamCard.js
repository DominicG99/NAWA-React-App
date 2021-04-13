import React from "react";
import { Col, Card } from "antd";
import "antd/dist/antd.css";
import "./Cards.css";
const { Meta } = Card;
function TeamCard(props) {
  return (
    <Col xs={{ span: 24, offset: 4 }} lg={{ span: 5, offset: 1}}>
      <Card
        bodyStyle={{ paddingTop: "5px", paddingBottom: "10px"}}
        className="teamCardImage"
        style={{ width: 300, textAlign: "center" }}
        cover={<img alt={props.name} src={props.image} />}
      >
        <Meta title={props.name} description={props.text} />
      </Card>
    </Col>
  );
}

export default TeamCard;
