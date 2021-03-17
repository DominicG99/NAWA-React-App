import React from "react";
import "../../App.css";
import MapContainer from "../Map/MapContainer";
import "antd/dist/antd.css";

function MapPage(props) {
    console.log(props.location.state.city1)
    console.log(props.location.state.admin1)
    console.log(props.location.state.city2)
    console.log(props.location.state.admin2)
  return (
    <div>
      <MapContainer />
    </div>
  );
}

export default MapPage;
