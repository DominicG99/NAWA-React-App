import React from "react";
import "../../App.css";
import MapContainer from "../Map/MapContainer";
import "antd/dist/antd.css";

function MapPage(props) {
    
  return (
    <div>
      <MapContainer 
        city1 = {props.location.state.city1} 
        admin1 = {props.location.state.admin1} 
        city2 = {props.location.state.city2} 
        admin2 = {props.location.state.admin2} 
    />
    </div>
  );
}

export default MapPage;
