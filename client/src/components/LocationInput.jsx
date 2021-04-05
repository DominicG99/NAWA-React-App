import React, { useState } from "react";
import axios from "axios";
import AlgoliaPlaces from "algolia-places-react";
import { Form } from "antd";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import FadeIn from "react-fade-in";

function LocationInput() {
  let mid0lat,
    mid0lng,
    mid1lat,
    mid1lng,
    mid2lat,
    mid2lng = 0;
  const [inputList, setInputList] = useState([]);
  const onAddBtnClick = (event) => {
    if (inputList.length <= 2) {
      setInputList(
        inputList.concat(
          <FadeIn>
            <Form.Item name={"mid" + inputList.length} key={inputList.length}>
              <AlgoliaPlaces
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
  const onDeleteBtnClick = (event) => {
    if (inputList.length > 0) {
      setInputList(inputList.pop());
    }
  };
  let history = useHistory();
  //const { getLocation } = useContext(LocationContext);

  const onFinish = (data) => {
    console.log(data);
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
      startLat: start_lat,
      startLng: start_lng,
      destLat: dest_lat,
      destLng: dest_lng,

      m1lat: mid0lat,
      m1lng: mid0lng,
      m2lat: mid1lat,
      m2lng: mid1lng,
      m3lat: mid2lat,
      m3lng: mid2lng,
    };

    axios
      .post("http://localhost:5000/api/users/historyCords", hisValues, {
        withCredentials: true,
        credentials: "include",
      })
      .then(async (res) => history.push("/"))
      .catch(async (err) => console.log(err.response.data));

    axios
      .post("http://localhost:5000/api/users/savedRoute", hisValues, {
        withCredentials: true,
        credentials: "include",
      })
      .then(async (res) => history.push("/"))
      .catch(async (err) => console.log(err.response.data));

    history.push({
      pathname: "/map",
      state: {
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
    //console.log(hisValues);
  };

  return (
    <FadeIn delay={250} transitionDuration={2000}>
      <Form
        name="Location Input"
        style={{ width: "25%", margin: "auto" }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item name="start">
          <AlgoliaPlaces
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
        <Form.Item name="destination">
          <AlgoliaPlaces
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
        <Form.Item style={{ marginLeft: "40%" }}>
          <Button type="primary" htmlType="submit">
            GO
          </Button>
        </Form.Item>
        <Button type="primary" onClick={onAddBtnClick}>
          Add Midpoint
        </Button>
        <Button type="danger" onClick={onDeleteBtnClick}>
          Delete Midpoint
        </Button>
        {inputList}
      </Form>
    </FadeIn>
  );
}

export default LocationInput;
