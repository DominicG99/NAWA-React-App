import React, { useState, useContext } from "react";
import AlgoliaPlaces from "algolia-places-react";
import UserContext from "../context/UserContext";
import axios from "axios";
import ImageInput from "./ImageInput";
import "./AddImagePopup.css";
function AddImagePopUp() {
  const [images, setFile] = useState("");
  const [fileData, setFileData] = useState();
  const [locationData, setLocationData] = useState("");
  const { userInfo } = useContext(UserContext);
  const handleFileChange = ({ target }) => {
    setFileData(target.files[0]);
    setFile(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("email", userInfo.userInfo.email);
    formdata.append("image", fileData);
    formdata.append("location", locationData.latlng);
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

        <button className="save-button">Add Image</button>
      </form>
    </div>
  );
}

export default AddImagePopUp;
