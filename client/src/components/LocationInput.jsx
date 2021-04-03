import React, { useContext } from "react";
import axios from "axios";
import AlgoliaPlaces from "algolia-places-react";
import { Form } from "antd";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import LocationContext from "../context/LocationContext";
function LocationInput() {
  let history = useHistory();
  const { getLocation } = useContext(LocationContext);

  const onFinish = (data) => {
    let start_city = data.start.suggestion.name;
    let start_admin = data.start.suggestion.administrative;
    let start_lat = data.destination.suggestion.latlng.lat;
    let start_lng = data.destination.suggestion.latlng.lng;
    let dest_city = data.destination.suggestion.name;
    let dest_admin = data.destination.suggestion.administrative;
    let dest_lat = data.destination.suggestion.latlng.lat;
    let dest_lng = data.destination.suggestion.latlng.lng;
    let origin = start_city + ", " + start_admin;
    let dest = dest_city + ", " + dest_admin;

    console.log(start_lat);

    var hisValues = {
      startLat: start_lat,
      startLng: start_lng,
    };

    console.log(data);

  axios
    .post("http://localhost:5000/api/users/historyCords", hisValues, {
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
        //lat: dest_lat,
        //lng: dest_lng,
      },
    });
    console.log(hisValues)

  };
  

  return (
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
    </Form>
  );
}

export default LocationInput;
