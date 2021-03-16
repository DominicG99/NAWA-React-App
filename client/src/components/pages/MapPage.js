import React from "react";
import "../../App.css";
import MapContainer from "../Map/MapContainer";
import "antd/dist/antd.css";

function MapPage(lat) {
  return (
    <div>
    console.log(lat)
      <MapContainer />
    </div>
  );
}

export default MapPage;
