import React, { useState, useContext } from "react";
import AlgoliaPlaces from "algolia-places-react";
import UserContext from "../context/UserContext";
import axios from "axios";
import ImageInput from "./ImageInput";
function AddImagePopUp(props) {
  console.log("props: ", props.id);
  const [images, setFile] = useState("");
  const [fileData, setFileData] = useState();
  const [locationData, setLocationData] = useState("");
  const [description, setDescriptionData] = useState("");
  const { userInfo } = useContext(UserContext);
  const handleFileChange = ({ target }) => {
    setFileData(target.files[0]);
    setFile(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formdata = new FormData();
    console.log("yo: ", locationData.latlng.lat);
    formdata.append("id", props.id);
    formdata.append("email", userInfo.userInfo.email);
    formdata.append("image", fileData);
    formdata.append("lat", locationData.latlng.lat);
    formdata.append("lng", locationData.latlng.lng);
    formdata.append("description", description);
    let sendskis = {fileData: fileData, location: locationData.latlng, email: userInfo.userInfo.email}
    console.log(fileData);
    console.log(sendskis);
    axios
      .post("http://localhost:5000/api/users/routeImage", formdata)
      .then((res) => console.log("res", res.data))
      .catch((error) => console.error(error));
  };
  return (
    <div className="imageForm">
      <form onSubmit={handleSubmit}>
        <ImageInput
          type="file"
          name="file"
          value={images}
          accept="image/*"
          onChange={handleFileChange}
          placeholder="upload image"
          isRequired={true}
        />

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
        <input onChange={event => {setDescriptionData(event.target.value)}}
        
        />

        <button className="save-button">Add Image</button>
      </form>
    </div>
  );
}

export default AddImagePopUp;
