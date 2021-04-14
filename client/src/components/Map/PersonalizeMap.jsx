import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./personalmap.css";
import axios from "axios";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

const styles = {
  width: "50vw",
  height: "calc(70vh - 80px)",
  position: "relative",
};

function MyPersonalMap(props) {
  const [saveData, setSaveData] = useState("");
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect( async () => {
    var id = {id: props.id}
    await axios.post("http://localhost:5000/api/users/routeImageRequest", id)
    .then((response) => {
      setSaveData(response.data);
      console.log("save data: ", response.data);

        // console.log("keys: ", saveData[4].lng);
        //   var marker = new mapboxgl.Marker()
        
        //     .setLngLat([saveData[4].lng, saveData[4].lat])
        //     .setPopup(new mapboxgl.Popup().setHTML("<h1>{saveData[4].description}}</h1>")) // add popup
        //     .addTo(map);
      
    })
    
    console.log(props.id);
  }, [])

  useEffect( async () => {
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
        directions.removeRoutes();
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
    // Set options

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
}

export default MyPersonalMap;
