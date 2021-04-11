import React from "react";
import MyMap from "./MyMap";
import WeatherData from "./WeatherData";

import "./MapContainer.css";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
function MapContainer(props) {
  console.log(props);
  return (
    <Row style={{ marginTop: "10%" }}>
      <Col lg={{ span: 6 }}>
        <h1>Trip Information for</h1>
        <h3>
          {props.city1}, {props.admin1} to {props.city2}, {props.admin2}
        </h3>
      </Col>
      <Col
        xs={{ span: 24, offset: 4 }}
        lg={{ span: 12, offset: 0 }}
        className="theMap"
      >
        <MyMap
          origin={props.origin}
          destination={props.destination}
          start_lat={props.start_lat}
          start_lng={props.start_lng}
          dest_lat={props.dest_lat}
          dest_lng={props.dest_lng}
          mid0_lat={props.mid0_lat}
          mid0_lng={props.mid0_lng}
          mid1_lat={props.mid1_lat}
          mid1_lng={props.mid1_lng}
          mid2_lat={props.mid2_lat}
          mid2_lng={props.mid2_lng}
        />
      </Col>
      ;
      <WeatherData
        city1={props.city1}
        admin1={props.admin1}
        city2={props.city2}
        admin2={props.admin2}
      />
      ;
    </Row>
  );
}

export default MapContainer;
