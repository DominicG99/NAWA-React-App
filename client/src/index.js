import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
ReactDOM.render(<App />, document.getElementById("root"));
