import React, { useState } from "react";
import FloatLabel from "./FloatLabel";
import AlgoliaPlaces from "algolia-places-react";
import { Form } from "antd";
import { Button } from "antd";
import { useHistory } from 'react-router-dom';

function LocationInput() {
    let history = useHistory();

  const onFinish = (data) => {
    let start_city = data.start.suggestion.name
    let start_admin = data.start.suggestion.administrative
    let start_lat = data.destination.suggestion.latlng.lat
    let start_lng = data.destination.suggestion.latlng.lng
    let dest_city = data.destination.suggestion.name
    let dest_admin = data.destination.suggestion.administrative
    let dest_lat = data.destination.suggestion.latlng.lat
    let dest_lng = data.destination.suggestion.latlng.lng
    console.log(start_city)
    console.log(dest_city)
    console.log(start_admin)
    console.log(dest_admin)
    console.log(data)
    history.push('/map')
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
            type: "city",
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
            type: "city",
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
