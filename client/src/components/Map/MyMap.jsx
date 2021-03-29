import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

const styles = {
  width: "50vw",
  height: "calc(70vh - 80px)",
  position: "relative",
};

function MyMap(props) {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  console.log(props.origin);
  console.log(props.destination);
  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10", // stylesheet location
        center: [-119.8162, 39.5453],
        zoom: 15,
      });

      map.on("load", () => {
        const directions = new MapboxDirections({
          unit: "metric",
          profile: "mapbox/driving",
          accessToken: process.env.REACT_APP_MAPBOX_API_KEY,
          controls: { inputs: true, instructions: false },
        });
        directions.setOrigin(props.origin);
        directions.setDestination(props.destination);
        //map.addControl(directions, "top-left");
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
}

export default MyMap;
