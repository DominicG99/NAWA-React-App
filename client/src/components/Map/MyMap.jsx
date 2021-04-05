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
  console.log(props);
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10", // stylesheet location
        center: [props.start_lng, props.start_lat],
        zoom: 5,
      });
      map.on("load", () => {
        var directions = new MapboxDirections({
          //unit: "metric",
          profile: "mapbox/driving",
          accessToken: process.env.REACT_APP_MAPBOX_API_KEY,
          controls: { inputs: false, instructions: false },
        });
        console.log(props.mid0_lat);
        directions.setOrigin([props.start_lng, props.start_lat]);
        if (props.mid0_lat) {
          directions.addWaypoint(1, [props.mid0_lng, props.mid0_lat]);
        }
        if (props.mid1_lat) {
          directions.addWaypoint(2, [props.mid1_lng, props.mid1_lat]);
        }
        if (props.mid2_lat) {
          directions.addWaypoint(3, [props.mid2_lng, props.mid2_lat]);
        }
        directions.setDestination([props.dest_lng, props.dest_lat]);

        map.addControl(directions, "top-left");
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
}

export default MyMap;
