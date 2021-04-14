import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import AlgoliaPlaces from "algolia-places-react";
import { Form } from "antd";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import FadeIn from "react-fade-in";
import UserContext from "../context/UserContext";
function LocationInput() {
  const { userInfo } = useContext(UserContext);
  const { loggedIn } = useContext(AuthContext);
  const [inputList, setInputList] = useState([]);
  const onAddBtnClick = (event) => {
    if (inputList.length <= 2) {
      setInputList(
        inputList.concat(
          <FadeIn>
            <Form.Item
              style={{
                width: "33%",
                margin: "auto",
              }}
              name={"mid" + inputList.length}
              key={"key" + inputList.length}
            >
              <AlgoliaPlaces
                placeholder="Midpoint"
                key={inputList.length}
                placeholder=""
                options={{
                  appId: process.env.ALGOLIA_APP_ID,
                  apiKey: process.env.ALGOLIA_API_KEY,
                  language: "en",
                  countries: ["us"],
                  //type: "address",
                }}
              />
            </Form.Item>
          </FadeIn>
        )
      );
    }
  };
  let history = useHistory();

  const onFinish = (data) => {
    let mid0lat,
      mid0lng,
      mid1lat,
      mid1lng,
      mid2lat,
      mid2lng = undefined;
    let start_city = data.start.suggestion.name;
    let start_admin = data.start.suggestion.administrative;
    let start_lat = data.start.suggestion.latlng.lat;
    let start_lng = data.start.suggestion.latlng.lng;
    let dest_lat = data.destination.suggestion.latlng.lat;
    let dest_lng = data.destination.suggestion.latlng.lng;
    let dest_city = data.destination.suggestion.name;
    let dest_admin = data.destination.suggestion.administrative;
    let origin = start_city + ", " + start_admin;
    let dest = dest_city + ", " + dest_admin;
    //midpoint0
    if (data.mid0 !== undefined) {
      mid0lat = data.mid0.suggestion.latlng.lat;
      mid0lng = data.mid0.suggestion.latlng.lng;
    }

    //midpoint1
    if (data.mid1 !== undefined) {
      mid1lat = data.mid1.suggestion.latlng.lat;
      mid1lng = data.mid1.suggestion.latlng.lng;
    }
    //midpoint2
    if (data.mid2 !== undefined) {
      mid2lat = data.mid2.suggestion.latlng.lat;
      mid2lng = data.mid2.suggestion.latlng.lng;
    }
    //console.log(start_lat);

    var hisValues = {
      email: userInfo.userInfo.email,
      startLat: start_lat,
      startLng: start_lng,
      destLat: dest_lat,
      destLng: dest_lng,
      startCity: start_city,
      startAdmin: start_admin,
      destCity: dest_city,
      destAdmin: dest_admin,
      m1lat: mid0lat,
      m1lng: mid0lng,
      m2lat: mid1lat,
      m2lng: mid1lng,
      m3lat: mid2lat,
      m3lng: mid2lng,
    };
    if (loggedIn === true) {
      axios.post("http://localhost:5000/api/users/historyCords", hisValues, {
        withCredentials: true,
        credentials: "include",
      });
    }

    history.push({
      pathname: "/map",
      state: {
        email: userInfo.userInfo.email,
        city1: start_city,
        admin1: start_admin,
        city2: dest_city,
        admin2: dest_admin,
        origin: origin,
        destination: dest,
        dest_lat: dest_lat,
        dest_lng: dest_lng,
        start_lat: start_lat,
        start_lng: start_lng,
        mid0_lat: mid0lat,
        mid0_lng: mid0lng,
        mid1_lat: mid1lat,
        mid1_lng: mid1lng,
        mid2_lat: mid2lat,
        mid2_lng: mid2lng,
      },
    });
  };

  return (
    <FadeIn delay={250} transitionDuration={2000}>
      <Form
        style={{ textAlign: "center" }}
        name="Location Input"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          style={{
            width: "33%",
            marginBottom: "0%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          name="start"
        >
          <AlgoliaPlaces
            placeholder="Starting Location"
            options={{
              appId: process.env.ALGOLIA_APP_ID,
              apiKey: process.env.ALGOLIA_API_KEY,
              language: "en",
              countries: ["us"],
              //type: "address",
            }}
          />
        </Form.Item>

        <Form.Item
          style={{ width: "33%", marginLeft: "auto", marginRight: "auto" }}
          name="destination"
        >
          <AlgoliaPlaces
            placeholder="Destination"
            options={{
              appId: process.env.ALGOLIA_APP_ID,
              apiKey: process.env.ALGOLIA_API_KEY,
              language: "en",
              countries: ["us"],
              //type: "address",
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            style={{
              width: "33%",
              backgroundColor: "#3282b8",
              color: "white",
              borderColor: "#3282b8",
            }}
            type="primary"
            htmlType="submit"
          >
            Start Adventure!
          </Button>
        </Form.Item>
        <Button
          style={{
            width: "33%",
            backgroundColor: "#3282b8",
            color: "white",
            borderColor: "#3282b8",
            marginBottom: "1.2%",
          }}
          type="primary"
          onClick={onAddBtnClick}
        >
          Add Midpoint
        </Button>
        {inputList}
      </Form>
    </FadeIn>
  );
}

export default LocationInput;
