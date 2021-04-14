import React from "react";
import PersonalMapContainer from "../Map/PersonalMapContainer";
import "antd/dist/antd.css";
import "./mappage.css";
function PersonalMap(props) {
  return (
    <div
      className="mapStuff"
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <PersonalMapContainer
        id={props.location.state.id}
        email={props.location.state.email}
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

export default PersonalMap;
