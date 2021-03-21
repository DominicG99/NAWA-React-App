import React from "react";
import MyMap from "./MyMap";
import WeatherData from "./WeatherData";

import "./MapContainer.css";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
function MapContainer(props) {
  return (
    <div className="mapcontainer">
      <Row>
        <Col xs={{ span: 24, offset: 4 }} lg={{ span: 12, offset: 6 }}>
          <MyMap />;
          <WeatherData 
            city1 = {props.city1} 
            admin1 = {props.admin1} 
            city2 = {props.city2} 
            admin2 = {props.admin2} 
          />;
        </Col>
      </Row>
    </div>
  );
}

export default MapContainer;
