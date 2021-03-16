import React, { useState } from "react";
import FloatLabel from "./FloatLabel";
import AlgoliaPlaces from "algolia-places-react";
import { Form } from "antd";
import { Button } from "antd";

function LocationInput() {
  const onFinish = (data) => {
    let lat = data.destination.suggestion.latlng.lat
    let lng = data.destination.suggestion.latlng.lng
    console.log(lat)
    console.log(lng)
    console.log("hello");
    window.open("/map");
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
