import React, { useContext } from "react";
import MyPersonalMap from "./PersonalizeMap";
import WeatherData from "./WeatherData";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import "./MapContainer.css";
import "antd/dist/antd.css";

import { Row } from "antd";
import AddImagePopUp from "../AddImagePopUp";
function PersonalMapContainer(props) {
  var hisValues = {
    email: props.email,
    startLat: props.start_lat,
    startLng: props.start_lng,
    destLat: props.dest_lat,
    destLng: props.dest_lng,
    startCity: props.city1,
    startAdmin: props.admin1,
    destCity: props.city2,
    destAdmin: props.admin2,
    m1lat: props.mid0_lat,
    m1lng: props.mid0_lng,
    m2lat: props.mid1_lat,
    m2lng: props.mid1_lng,
    m3lat: props.mid2_lat,
    m3lng: props.mid2_lng,
  };
  const { loggedIn } = useContext(AuthContext);
  const onFavoriteBtnClick = (event) => {
    if (loggedIn === true) {
      axios.post("http://localhost:5000/api/users/savedRoute", hisValues, {
        withCredentials: true,
        credentials: "include",
      });
    }
  };
  console.log("Map Container");
  console.log(props);

  return (
    <div>
      <div className="mapTitle">
        <h1 className="margBottom">
          <strong>Your Route:</strong>
        </h1>
        <p>
          Interact with map to choose different starting and destination points!
        </p>
      </div>
      <div>
        <div
          className="mapInfo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MyPersonalMap
            id={props.id}
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
          ;
        </div>
      </div>
      <div>
        <h1 className="tripInformation">Your Trip Information:</h1>

        <p className="tripText">
          Starting point: {hisValues.startCity}, {hisValues.startAdmin}
        </p>

        <p className="tripText">
          Destination: {hisValues.destCity}, {hisValues.destAdmin}
        </p>

        <p className="tripText">
          To view midpoint data, save route and visit the profile page!
        </p>
      </div>

      <div>
        <Row></Row>
      </div>

      <div className="saveButtonContainer">
        <Row>
          <button className="save-button" onClick={onFavoriteBtnClick}>
            Save This Trip
          </button>
        </Row>
      </div>
      <WeatherData
        city1={props.city1}
        admin1={props.admin1}
        city2={props.city2}
        admin2={props.admin2}
      />
      <div className="imageAdd">
        <AddImagePopUp id={props.id}/>
      </div>
    </div>
  );
}

export default PersonalMapContainer;
