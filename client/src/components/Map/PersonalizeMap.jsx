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
          interactive: false,
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

        var el = document.createElement("div");
        el.className = "marker";
        console.log("this is running");
        var marker = new mapboxgl.Marker()
          .setLngLat([-96, 37.8])
          .setPopup(
            new mapboxgl.Popup().setHTML(
              "<div><img id='myImg' src='./images/placeholder-image.png' alt='Placeholders' style='width:100%;max-width:300px'> <p>YO</p></div>",

              "<div id='myModal' class='modal'>",
              "<span class='close'>&times;</span>",
              "<img class='modal-content' id='img01'>",
              "<p>YO</p>",
              "<div id='caption'></div>"

              //"<img className='routeImage' src={'./images/placeholder-image.png'} alt='Route Image' />"
            )
          ) // add popup
          .addTo(map);
        map.addControl(directions, "top-left");
        //axios.post("http://localhost:5000/api/users/register", data, {});
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
