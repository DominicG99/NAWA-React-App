import React, { useState, useContext } from "react";
import AlgoliaPlaces from "algolia-places-react";
import UserContext from "../context/UserContext";
import axios from "axios";
import ImageInput from "./ImageInput";
import "./AddImagePopUp.css";
import { useHistory } from "react-router-dom";
import WeatherData from "./Map/WeatherData";
import { Row, Col } from "antd";
function AddImagePopUp(props) {
  console.log("props: ", props.id);
  const [images, setFile] = useState("");
  const [fileData, setFileData] = useState();
  const [locationData, setLocationData] = useState("");
  const [description, setDescriptionData] = useState("");
  const { userInfo } = useContext(UserContext);
  
  let history = useHistory();
  const handleFileChange = ({ target }) => {
    setFileData(target.files[0]);
    setFile(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("id", props.id);
    formdata.append("email", userInfo.userInfo.email);
    formdata.append("image", fileData);
    formdata.append("lat", locationData.latlng.lat);
    formdata.append("lng", locationData.latlng.lng);
    formdata.append("description", description);
    axios
      .post("http://localhost:5000/api/users/routeImage", formdata)
      .then((res) => console.log("res", res.data))
      .catch((error) => console.error(error));
    history.push({
      pathname: "/profile",
    });
  };
  return (

    <div>
    <Row>
      <Col span={12}>
        <div className = "tripInfoDiv">
        <h1 className = "tripInformation">Your Trip Information:</h1>

        <p className="tripText">
          Starting point: {props.startCity},  {props.startAdmin}
        </p>

        <p className="tripText">
          Destination: {props.destCity}, {props.destAdmin}
        </p>

        <p className="tripText">
          To view midpoint data, save route and visit the profile page!
        </p>
        </div>
      
 
    
      </Col>


      <Col span={12}>

      <h1 className="addImageInformation">Enjoy your trip? Add some images below!</h1>

    
      <form onSubmit={handleSubmit} className = "chooseFile">
        <ImageInput
          type="file"
          name="file"
          value={images}
          accept="image/*"
          onChange={handleFileChange}
          placeholder="upload image"
          isRequired={true}
        />

          <div style={{ width: "30.8%" }}>
            <AlgoliaPlaces
              onChange={({ suggestion }) => setLocationData(suggestion)}
              placeholder="Image Location"
              options={{
                appId: process.env.ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_API_KEY,
                language: "en",
                countries: ["us"],
                //type: "address",
              }}
            />
          </div>

        <input className = "description"
          placeholder="Enter a description!"
          onChange={(event) => {
            setDescriptionData(event.target.value);
          }}
        />

        <div>
        <button className="save-button">Add Image</button>
        </div>
      </form>
      </Col>
    </Row>

    <div>
        <WeatherData
        city1={props.city1}
        admin1={props.admin1}
        city2={props.city2}
        admin2={props.admin2}
      />  
    </div>

  </div>
  );
}

export default AddImagePopUp;
