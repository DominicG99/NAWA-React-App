import React from "react";
import MapContainer from "../Map/MapContainer";
import "antd/dist/antd.css";
import "./mappage.css";
function MapPage(props) {
  console.log(props);
  return (
    <div className="mapContainer">
      <h1>
        {props.location.state.city1}, {props.location.state.admin1} to{" "}
        {props.location.state.city2}, {props.location.state.admin2}
      </h1>
      <MapContainer
        city1={props.location.state.city1}
        admin1={props.location.state.admin1}
        city2={props.location.state.city2}
        admin2={props.location.state.admin2}
        origin={props.location.state.origin}
        destination={props.location.state.destination}
        start_lat={props.location.state.start_lat}
        start_lng={props.location.state.start_lng}
        dest_lat={props.location.state.dest_lat}
        dest_lng={props.location.state.dest_lng}
        mid0_lat={props.location.state.mid0_lat}
        mid0_lng={props.location.state.mid0_lng}
        mid1_lat={props.location.state.mid1_lat}
        mid1_lng={props.location.state.mid1_lng}
        mid2_lat={props.location.state.mid2_lat}
        mid2_lng={props.location.state.mid2_lng}
      />
    </div>
  );
}

export default MapPage;
