import React from "react";
import MyMap from "./MyMap";
import "./MapContainer.css";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
function MapContainer() {
  return (
    <div className="mapcontainer">
      <Row>
        <Col xs={{ span: 24, offset: 4 }} lg={{ span: 12, offset: 6 }}>
          <MyMap />;
        </Col>
      </Row>
    </div>
  );
}

export default MapContainer;
