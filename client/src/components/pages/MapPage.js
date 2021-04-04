import React from "react";
import "../../App.css";
import MapContainer from "../Map/MapContainer";
import "antd/dist/antd.css";

function MapPage(props) {
  return (
    <div>
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
      />
    </div>
  );
}

export default MapPage;
